import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { DiffMatchPatch } from 'ng-diff-match-patch';

@Component({
  selector: 'app-diff-comparator',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './diff-comparator.component.html',
  styleUrl: './diff-comparator.component.css'
})
export class DiffComparatorComponent {
  dmp = new DiffMatchPatch();
  text1: string = '';
  text2: string = '';
  diffs: any[] = [];
  fileContent1: string = '';
  fileContent2: string = '';

  onFile1Selected(event: Event): void {
    const input = event.target as HTMLInputElement;

    if (input.files && input.files.length > 0) {
      const file = input.files[0];
      const reader = new FileReader();

      reader.onload = () => {
        this.fileContent1 = reader.result as string; // Convert result to string
      };

      reader.onerror = (error) => {
        console.error('Error reading file:', error);
      };

      reader.readAsText(file); // Read the file as text
    }
  }

  onFile2Selected(event: Event): void {
    const input = event.target as HTMLInputElement;

    if (input.files && input.files.length > 0) {
      const file = input.files[0];
      const reader = new FileReader();

      reader.onload = () => {
        this.fileContent2 = reader.result as string; // Convert result to string
      };

      reader.onerror = (error) => {
        console.error('Error reading file:', error);
      };

      reader.readAsText(file); // Read the file as text
    }
  }

  compare() {
    console.log("compare text 1: ", this.fileContent1)
    const result = this.dmp.diff_main(this.fileContent1, this.fileContent2);
    this.dmp.diff_cleanupSemantic(result);
    this.diffs = result;
  }
}

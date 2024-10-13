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

  compare() {
    const result = this.dmp.diff_main(this.text1, this.text2);
    this.dmp.diff_cleanupSemantic(result);
    this.diffs = result;
  }
}

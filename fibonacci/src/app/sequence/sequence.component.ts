import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sequence',
  templateUrl: './sequence.component.html',
  styleUrls: ['./sequence.component.scss']
})
export class SequenceComponent implements OnInit {

  constructor() { }

  ngOnInit() { }

  fib(){
    let arr = [0, 1];
    for (let i = 2; i <  144+ 1; i++){
      arr.push(arr[i - 2] + arr[i -1])
    }
   return arr[144]
  }

  spiralMatrix(row, col) {
    let rows = row;
    let cols = col;

    let matrix = [];
    for (let row = 0; row < rows; row++) {
        matrix[row] = [];
        for (let col = 0; col < cols; col++) {
            matrix[row][col] = 0;
        }
        return matrix;
    }
  };      
}

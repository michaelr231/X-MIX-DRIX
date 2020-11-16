import {Component, OnInit, ViewChild} from '@angular/core';
import { MainComponent } from '../Main/main.component';
import {Global} from '../Global/global';


@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css']
})

export class BoardComponent implements OnInit {
@ViewChild(MainComponent) child;
  constructor(public global: Global) {
  }

  squares: string[];
  xIsNext: boolean;
  winner: string;
  user1: string;
  user2: string;
  tie: string;
  index: number;
  timeover: number;




  ngOnInit() {
    this.newGame();
  }


  newGame() {
    this.squares = Array(9).fill(null);
    this.winner = null;
    this.xIsNext = true;
  }

  getPlayer() {
    if (this.xIsNext) {
      this.user1 = this.global.player1;
      return 'X';
    } else {
     this.user2 = this.global.player2;
         return 'O';
    }
  }

  makeMove(index: number) {
    if (!this.squares[index]) {
      this.squares.splice(index, 1, this.getPlayer());
      this.xIsNext = !this.xIsNext;
    }
    this.winner = this.calculateWinner();
    if (this.winner === 'X') {
      this.winner = this.global.player1;
      this.global.count1++;
      this.autoreset();
    } else {
      if (this.winner === 'O') {
        this.winner = this.global.player2;
        this.global.count2++;
        this.autoreset();
      }
    }
    console.log(this.winner);
  }

  autoreset() {
   this.timeover =  setTimeout(() => this.newGame(), 3000);

  }

  calculateWinner() {
    const line = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
      []

    ];

    for (let i = 0; i < line.length; i++) {
      const [a, b, c] = line[i];
      if (
        this.squares[a] &&
        this.squares[a] === this.squares[b] &&
        this.squares[a] === this.squares[c]
      ) {
        this.index = i;
        return this.squares[i];

      }
      console.log(this.squares[i]);
    }
    return null;
  }


}

import { Component, OnInit, OnChanges, SimpleChanges, Input } from '@angular/core';

import { faRedo } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.sass']
})
export class BoardComponent implements OnInit, OnChanges {
  @Input() tiles: ('X' | 'O')[];
  @Input() xIsNext: boolean;
  isDraw = false;
  winner: 'X' | 'O';

  faRedo = faRedo;

  constructor() {
  }

  ngOnInit(): void {
  }

  ngOnChanges(changes: SimpleChanges): void {
    // Compute board state
    this.computeState();
  }

  onClick(tileIndex: number): void {
    if (this.winner || this.isDraw) {
      return;
    }

    this.tiles[tileIndex] = this.player;
    this.xIsNext = !this.xIsNext;

    this.computeState();
  }

  reset(): void {
    this.tiles = Array(9).fill(null);
    this.xIsNext = true;
    this.isDraw = false;
    this.winner = null;
  }

  get player(): 'X' | 'O' {
    return this.xIsNext ? 'X' : 'O';
  }

  computeState(): void {
    this.isDraw = this.computeDraw();
    this.winner = this.computeWinner();
  }

  computeWinner(): 'X' | 'O' {
    const possibleWins = [
      /* Row */       [0, 1, 2], [3, 4, 5], [6, 7, 8],
      /* Column */    [0, 3, 6], [1, 4, 7], [2, 5, 8],
      /* Diagonal */  [0, 4, 8], [2, 4, 6],
    ];

    const tiles = this.tiles;
    for (const [a, b, c] of possibleWins) {
      if (tiles[a]
        && tiles[a] === tiles[b]
        && tiles[a] === tiles[c]) {
        // Match found, we have a winner
        return tiles[a];
      }
    }

    // No match found
    return null;
  }

  computeDraw(): boolean {
    return this.tiles.every(tile => tile !== null);
  }
}

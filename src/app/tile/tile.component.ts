import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-tile',
  templateUrl: './tile.component.html',
  styleUrls: ['./tile.component.sass']
})
export class TileComponent implements OnInit {
  @Input() value: 'X' | 'O';

  constructor() {
  }

  ngOnInit(): void {
  }

}

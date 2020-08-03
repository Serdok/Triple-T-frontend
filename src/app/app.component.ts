import { Component, OnInit } from '@angular/core';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faHome, faSignInAlt, faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
import { Game } from './game';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent implements OnInit {
  title = 'Triple T';
  faGithub = faGithub;
  faHome = faHome;
  faSignInAlt = faSignInAlt;
  faSignOutAlt = faSignOutAlt;
  game: Game = {
    id: 'empty',
    tiles: Array(9).fill(null),
    xIsNext: true,
  };

  changeNavbar(): void {
    const $navbarBurger = document.getElementById('navbar-burger');
    const $navbarContents = document.getElementById('navbar-menu');

    $navbarBurger.classList.toggle('is-active');
    $navbarContents.classList.toggle('is-active');
  }

  ngOnInit(): void {
    setTimeout(() => {
      this.game.tiles = ['X', null, 'X', 'O', null, null, 'O', null, 'X'];
      this.game.xIsNext = false;
    }, 15000);
  }
}

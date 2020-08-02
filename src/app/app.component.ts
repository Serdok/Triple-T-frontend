import { Component } from '@angular/core';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faHome, faSignInAlt, faSignOutAlt } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  title = 'Triple T';
  faGithub = faGithub;
  faHome = faHome;
  faSignInAlt = faSignInAlt;
  faSignOutAlt = faSignOutAlt;
}

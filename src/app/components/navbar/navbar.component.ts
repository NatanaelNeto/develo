import { Component } from '@angular/core';
import { Router, NavigationEnd, Event } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

  currentRoute: string = 'home';
  constructor(private router: Router) {
    router.events.subscribe((event: Event) => {
      console.log(event);
      if (event instanceof NavigationEnd ) {
        this.currentRoute = event.url.slice(1,5);
      }
    });
  }
}

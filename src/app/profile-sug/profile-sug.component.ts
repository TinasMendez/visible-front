import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile-sug',
  templateUrl: './profile-sug.component.html',
  styleUrls: ['./profile-sug.component.css']
})
export class ProfileSugComponent {

  constructor(private router: Router) {

  }

  ngOnInit() {
  }

  navigateToThemes() {
    this.router.navigate(['/themes']);

  }
  

}
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-themes',
  templateUrl: './themes.component.html',
  styleUrls: ['./themes.component.css']
})
export class ThemesComponent {

    constructor(private router: Router) {
  
    }
  
    ngOnInit() {
    }
  
    navigateToSubThemes() {
      this.router.navigate(['/sub-themes']);
  
    }
  
  }
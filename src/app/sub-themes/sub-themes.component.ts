import { Component } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-sub-themes',
  templateUrl: './sub-themes.component.html',
  styleUrls: ['./sub-themes.component.css']
})
export class SubThemesComponent {

  constructor(private router: Router) {
  
  }

  ngOnInit() {
  }

  navigateToContentGenerator() {
    this.router.navigate(['/content-generator']);

  }

}

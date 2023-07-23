import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profiling',
  templateUrl: './profiling.component.html',
  styleUrls: ['./profiling.component.css']
})
export class ProfilingComponent {


  constructor(private router: Router) {

  }

  ngOnInit() {
  }

  navigateToProfileSugestions() {
    this.router.navigate(['/profile-sug']);

  }

}

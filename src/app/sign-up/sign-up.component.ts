import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent {
  nombre: String = "";
  email: String = "";
  password: String = "";
  
  

  constructor(private router: Router) {

  }

  ngOnInit() {
  }

  navigateToDatosPersonales() {
    this.router.navigate(['/personal-info']);

  }
}

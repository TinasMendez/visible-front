import { Component } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-personal-info',
  templateUrl: './personal-info.component.html',
  styleUrls: ['./personal-info.component.css'],
  
})

export class PersonalInfoComponent {
  nombre: String = "";
  apellido: String = "";
  pais: String = "";
  genero: String ="";
  date: String="";

  consulting: boolean = false;
  AI: boolean = false;
  Startups: boolean = false;
  Tech: boolean = false;
  Marketing: boolean = false;
  ArtCulture: boolean = false;
  Leadership: boolean = false;
  ProfDevelopment: boolean = false;
  FinanceAccounting: boolean = false;
  HumanResources: boolean = false;
  HealthWellness: boolean = false;
  DataScience: boolean = false;
  Goverment: boolean = false;
  Other: boolean = false
  



  constructor(private router: Router) {

  }

  ngOnInit() {
  }

  navigateToProfilingPage() {
    this.router.navigate(['/profiling']);


  }

}

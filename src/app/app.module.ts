import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule }   from '@angular/forms';
import {MatCheckboxModule} from '@angular/material/checkbox'
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatMenuModule} from '@angular/material/menu';
import { PersonalInfoComponent } from './personal-info/personal-info.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { ProfilingComponent } from './profiling/profiling.component';
import { ProfileSugComponent } from './profile-sug/profile-sug.component';
import { ContentGeneratorComponent } from './content-generator/content-generator.component';
import { ThemesComponent } from './themes/themes.component';
import { SubThemesComponent } from './sub-themes/sub-themes.component';


@NgModule({
  declarations: [
    AppComponent,
    PersonalInfoComponent,
    SignUpComponent,
    ProfilingComponent,
    ProfileSugComponent,
    ContentGeneratorComponent,
    ThemesComponent,
    SubThemesComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatToolbarModule,
    FormsModule,
    MatMenuModule,
    MatCheckboxModule,
    
  ],
  providers: [
    
  ],

  bootstrap: [AppComponent]
})
export class AppModule { }

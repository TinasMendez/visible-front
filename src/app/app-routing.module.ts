import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignUpComponent } from './sign-up/sign-up.component';
import { PersonalInfoComponent } from './personal-info/personal-info.component';
import { ProfilingComponent } from './profiling/profiling.component';
import { ProfileSugComponent } from './profile-sug/profile-sug.component';
import { ContentGeneratorComponent } from './content-generator/content-generator.component';
import { ThemesComponent } from './themes/themes.component';
import { SubThemesComponent } from './sub-themes/sub-themes.component';

const routes: Routes = [
  { path: 'sign-up', component: SignUpComponent },
  { path: 'personal-info', component: PersonalInfoComponent },
  { path: 'profiling', component: ProfilingComponent},
  {path: 'profile-sug', component: ProfileSugComponent},
  {path: 'content-generator', component: ContentGeneratorComponent},
  {path: 'themes', component: ThemesComponent},
  {path: 'sub-themes', component:SubThemesComponent}

  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { ContactComponent } from './layouts/contact/contact.component';
import { ProjectsComponent } from './layouts/projects/projects.component';
import { SkillsComponent } from './layouts/skills/skills.component';
import { HomeComponent } from './layouts/home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'skills', component: SkillsComponent },
  { path: 'projects', component: ProjectsComponent },
  { path: 'contact', component: ContactComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

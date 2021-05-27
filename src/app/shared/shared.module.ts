import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { FooterComponent } from './footer/footer.component';
import { ProgressCardComponent } from './progress-card/progress-card.component';
import { SkillCardComponent } from './skill-card/skill-card.component';
import { TestimonialCardComponent } from './testimonial-card/testimonial-card.component';
import { ProjectCardComponent } from './project-card/project-card.component';


@NgModule({
  declarations: [
    HeaderComponent,
    SidenavComponent,
    FooterComponent,
    ProgressCardComponent,
    SkillCardComponent,
    TestimonialCardComponent,
    ProjectCardComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    HeaderComponent,
    SidenavComponent,
    FooterComponent,
    SkillCardComponent,
    TestimonialCardComponent,
    ProjectCardComponent
  ]
})
export class SharedModule { }

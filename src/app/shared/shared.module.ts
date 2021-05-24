import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { FooterComponent } from './footer/footer.component';
import { ProgressCardComponent } from './progress-card/progress-card.component';
import { SkillCardComponent } from './skill-card/skill-card.component';


@NgModule({
  declarations: [
    HeaderComponent,
    SidenavComponent,
    FooterComponent,
    ProgressCardComponent,
    SkillCardComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    HeaderComponent,
    SidenavComponent,
    FooterComponent,
    SkillCardComponent
  ]
})
export class SharedModule { }

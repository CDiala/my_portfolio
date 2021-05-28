import { GithubService } from './github.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {

  projects: any[] = [];
  constructor(private gitService: GithubService) { }

  ngOnInit(): void {
    // console.log("project component \n",this.gitService.getProjects());
    this.projects = this.gitService.getProjects();
    // console.log(this.projects);
  }

}

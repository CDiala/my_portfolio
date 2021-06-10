import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { GithubModel } from "./github-model";

@Injectable({
  providedIn: 'root'
})
export class GithubService {

  apiUrl: string = 'https://api.github.com/users/CDiala/starred?type=owner';
  projectArray: any[] = [];

  constructor(private http: HttpClient) { }

  getProjects() {
    this.http.get<GithubModel[]>(`${this.apiUrl}`).subscribe(data => {
      Object.keys(data).forEach(key => {
        // console.log(key);
        this.projectArray.push({"name": data[+key].name, "desc": data[+key].description, "url": data[+key].homepage});
      })
    })
    // console.log(this.projectArray);
    return this.projectArray;
  }
}

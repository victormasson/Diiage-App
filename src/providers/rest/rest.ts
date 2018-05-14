import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ArticleModel } from '../../Entities/Article';
import { CoursModel } from '../../Entities/Cours';
import { Observable } from 'rxjs/observable';
import 'rxjs/add/operator/map';

/*
  Generated class for the RestProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class RestProvider {
  apiUrlArticles = 'http://appli.cours-diiage.com/API/views/viewactus';
  apiUrlCalendrier = 'http://appli.cours-diiage.com/sharepoint/cal.php';

  constructor(public http: HttpClient) {
    console.log('Hello RestProvider Provider');
  }

  getArticles():Observable<ArticleModel[]> {
    return this.http.get(this.apiUrlArticles).map(res => <ArticleModel[]>res)
  }

  getCours():Observable<CoursModel[]> {
    return this.http.get(this.apiUrlCalendrier).map(res => <CoursModel[]>res)
  }
}

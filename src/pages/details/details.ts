import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { RestProvider } from '../../providers/rest/rest';
import { ArticleModel } from '../../Entities/Article';

/**
 * Generated class for the DetailsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-details',
  templateUrl: 'details.html',
})
export class DetailsPage {
  articles: Array<ArticleModel>;

  // constructor(public navCtrl: NavController, public navParams: NavParams) {}
  constructor(public navCtrl: NavController, public navParams: NavParams, public restProvider: RestProvider) {
    this.getArticles();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DetailsPage');
  }

  getArticles() {
    this.restProvider.getArticles().subscribe(data => {
      this.articles = data
        .sort(a => a.nid);
    });
  }
}

import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
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
  article: ArticleModel;

  // constructor(public navCtrl: NavController, public navParams: NavParams) {}
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.article = navParams.get('currentArticle');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DetailsPage');
  }
}

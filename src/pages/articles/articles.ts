import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { RestProvider } from '../../providers/rest/rest';
import { ArticleModel } from '../../Entities/Article';
import { DetailsPage } from '../../pages/details/details';
import { Observable } from 'rxjs/Rx';
import { Storage } from '@ionic/storage';

/**
 * Generated class for the ArticlesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-articles',
  templateUrl: 'articles.html',
})
export class ArticlesPage {
  articles: Array<ArticleModel>;
  articleTable = 'article';

  constructor(public navCtrl: NavController, public navParams: NavParams, public restProvider: RestProvider, private storage: Storage) {
    try {
      this.getArticles();
      storage.set(this.articleTable, this.articles);
    } catch (error) {
      console.log(error);
      storage.get(this.articleTable).then((data) => {
        this.articles = data;
      });
    }
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ArticlesPage');
  }

  getArticles() {
    this.restProvider.getArticles().subscribe(data => {
      this.articles = data.sort(a => a.nid);
    });
  }

  loadArticle(article : ArticleModel){
    this.navCtrl.push(DetailsPage, { currentArticle:article });
  }
}

import { Component, OnInit } from '@angular/core';
import {environment} from "../../../environments/environment";
import {DataService} from "../../services/data.service";
import {LoadingController} from "@ionic/angular";

@Component({
  selector: 'app-infinite-scroll2',
  templateUrl: './infinite-scroll2.page.html',
  styleUrls: ['./infinite-scroll2.page.scss'],
})
export class InfiniteScroll2Page implements OnInit {
movies: any[] = [];
currentPage = 1;
imageUrl = environment.images;
  constructor(private dataService: DataService,
              private loadingCtrl: LoadingController) { }

  ngOnInit() {
    this.loadMovies();
  }
  loadMore(event: any){
    this.currentPage++;
    this.loadMovies(event);
  }
  async loadMovies(event?: any) {
    const loading = await this.loadingCtrl.create({
      message: 'Loading...',
      spinner: 'bubbles'
    });
    await loading.present();

    this.dataService.loadMovies(this.currentPage).subscribe(
      data => {
        loading.dismiss();
        this.movies.push(...data.results);

        event?.target.complete();
        if(event){
          event.target.disabled = data.total_pages === this.currentPage;
        }
      }
    )
  }


}

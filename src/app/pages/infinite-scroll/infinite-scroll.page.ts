import {Component, OnInit, ViewChild} from '@angular/core';
import {IonInfiniteScroll} from "@ionic/angular";

@Component({
  selector: 'app-infinite-scroll',
  templateUrl: './infinite-scroll.page.html',
  styleUrls: ['./infinite-scroll.page.scss'],
})
export class InfiniteScrollPage implements OnInit {
  @ViewChild(IonInfiniteScroll) ionInfinite!: IonInfiniteScroll;
data: any[] = Array(20);
  constructor() { }

  ngOnInit() {
  }

  loadData(event: any) {
    setTimeout(() => {
      if(this.data.length > 50){
        event.target.complete();
        this.ionInfinite.disabled = true;
        return;
      }
      const nuevoArray = Array(20);
      this.data.push(...nuevoArray);
      event.target.complete();
    }, 1000);
  }
}

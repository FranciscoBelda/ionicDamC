import { Component, OnInit } from '@angular/core';
import {DataService} from "../../services/data.service";

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.page.html',
  styleUrls: ['./search-bar.page.scss'],
})
export class SearchBarPage implements OnInit {

  textoBuscar = '';
  albums: any[] = [];
  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.loadAlbums();
  }

  private loadAlbums() {
    this.dataService.getAlbums().subscribe(
      albums => this.albums = albums
    )
  }

  buscar(event: any) {
    this.textoBuscar = event.detail.value;
  }
}

import { Component, OnInit } from '@angular/core';
import {ActionSheetController} from "@ionic/angular";

@Component({
  selector: 'app-action-sheet',
  templateUrl: './action-sheet.page.html',
  styleUrls: ['./action-sheet.page.scss'],
})
export class ActionSheetPage implements OnInit {
  botones: any[] = [{
    text: 'Delete',
    role: 'destructive',
    icon: 'trash',
    cssClass: 'rojo',
    handler: () => {
      console.log('Delete pulsado');
    }
  },{
    text: 'Share',
    icon: 'share-social',
    handler: () => {
      console.log('Share pulsado');
    }
  },{
    text: 'Play',
    icon: 'caret-forward-circle',
    handler: () => {
      console.log('Play pulsado');
    }
  },{
    text: 'Favorite',
    icon: 'heart',
    handler: () => {
      console.log('Favorite pulsado');
    }
  },{
    text: 'Cancel',
    icon: 'close',
    role: 'cancel',
    handler: () => {
      console.log('Cancel pulsado');
    }
  }];
  constructor(private actionSheetCtrl: ActionSheetController) { }

  ngOnInit() {
  }

  async mostrarActionSheet() {
    const actioSheet = await this.actionSheetCtrl.create({
      header: 'Albums',
      backdropDismiss: false,
      buttons: this.botones
    });
    await actioSheet.present();
  }
}

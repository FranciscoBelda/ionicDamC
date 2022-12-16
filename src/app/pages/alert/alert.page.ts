import { Component, OnInit } from '@angular/core';
import {AlertController} from "@ionic/angular";

@Component({
  selector: 'app-alert',
  templateUrl: './alert.page.html',
  styleUrls: ['./alert.page.scss'],
})
export class AlertPage implements OnInit {
  titulo: string = '';

  constructor(private alertCtrl: AlertController) { }

  ngOnInit() {
  }


  async abrirAlert() {
    const alert = await this.alertCtrl.create({
      header: 'Título del alert',
      subHeader: 'Subtítulo',
      message: 'Esto es un mensaje de alerta',
      buttons: [{
        text: 'Cancel',
        role: 'cancel',
        handler: ( ) => {
          console.log('Cancel pulsado');
        }
      },
        {
          text: 'OK',
          handler: () => {
            console.log('OK pulsado');
          }
        }]
    });
    await alert.present();
  }
  async abrirInput() {
    const alert = await this.alertCtrl.create({
      header: 'Rellenar el título',
      subHeader: 'Escriba su nombre completo',
      inputs: [{
        name: 'nombre',
        type: 'text',
        placeholder: 'Escriba su nombre'
      },{
        name: 'apellido',
        type: 'text',
        placeholder: 'Escriba su apellido'
      }],
      buttons: [{
        text: 'Cancel',
        role: 'cancel',
        handler: ( ) => {
          console.log('Cancel pulsado');
        }
      },
        {
          text: 'OK',
          handler: (datos: {nombre: string, apellido: string}) => {
            console.log('OK pulsado', datos);
            this.titulo = datos.nombre + ' ' + datos.apellido;
          }
        }]
    });
    await alert.present();
  }
}

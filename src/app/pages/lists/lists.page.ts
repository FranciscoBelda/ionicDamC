import {Component, OnInit, ViewChild} from '@angular/core';
import {Usuario} from "../../common/interfaces";
import {DataService} from "../../services/data.service";
import {IonList, ToastController} from "@ionic/angular";

@Component({
  selector: 'app-lists',
  templateUrl: './lists.page.html',
  styleUrls: ['./lists.page.scss'],
})
export class ListsPage implements OnInit {

  @ViewChild('lista', {static: false}) lista!: IonList;
  usuarios: Usuario[] = [];
  habilitado: boolean = true;
  constructor(private dataService: DataService,
              private toastCtrl: ToastController) { }

  ngOnInit() {
    this.loadUsers();
  }



  favorite(user: Usuario) {
    console.log(user);
    this.presentToast(
      user.name+' añadido a favoritos!!', 'danger');
    this.lista.closeSlidingItems();
  }
  share(user: Usuario) {
    console.log(user);
    this.presentToast(
      'Compartiendo con '+user.name, 'secondary');
    this.lista.closeSlidingItems();
  }
  call(user: Usuario) {
    console.log(user);
    this.presentToast(
      'Llamando a '+user.name, 'primary');
    this.lista.closeSlidingItems();
  }

  reordenar(event: any) {
    console.log(event);
    const itemMover = this.usuarios.splice(
      event.detail.from,1)[0];
    this.usuarios.splice(event.detail.to, 0,itemMover);
    event.detail.complete();
  }
  private async presentToast(message: string, color: string){
    const toast = await this.toastCtrl.create({
      message,
      color,
      duration: 1500,
      header: '',
      animated: true,
      position: 'middle'
    });
    await toast.present();
  }

  private loadUsers() {
    this.dataService.getUsers().subscribe(
      (data: Usuario[]) => {
        this.usuarios = data;
      }
    )
  }
}

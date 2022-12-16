import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-slides',
  templateUrl: './slides.page.html',
  styleUrls: ['./slides.page.scss'],
})
export class SlidesPage implements OnInit {

  slides: {img: string; titulo: string; desc: string}[] = [
    {
      img: '/assets/images/no-image-icon.jpg',
      titulo: 'Comparte fotos',
      desc: 'Mira y comparte tus mejores fotos'
    },
    {
      img: '/assets/images/music.png',
      titulo: 'Disfruta tu música',
      desc: 'La mejor música de ahora y siempre'
    },
    {
      img: '/assets/images/calendar.png',
      titulo: 'No te olvides',
      desc: 'Para que no olvides ni un cumpleaños más'
    },
    {
      img: '/assets/images/placeholder.png',
      titulo: 'Ubícate',
      desc: 'Para que no te sientas perdido'
    }
  ];
  constructor() { }

  ngOnInit() {
  }

}

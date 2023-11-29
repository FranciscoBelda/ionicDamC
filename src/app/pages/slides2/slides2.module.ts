import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Slides2PageRoutingModule } from './slides2-routing.module';

import { Slides2Page } from './slides2.page';
import {ComponentsModule} from "../../components/components.module";
import {SwiperModule} from "swiper/angular";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Slides2PageRoutingModule,
    ComponentsModule,
    SwiperModule
  ],
  declarations: [Slides2Page]
})
export class Slides2PageModule {}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {DogsComponent} from './dogs.component';
import {IonicModule} from '@ionic/angular';
import {HttpClientModule} from '@angular/common/http';
import {DogsService} from './dogs.service';
import {DogDetailComponent} from './dog-detail/dog-detail.component';
import {RouterModule} from '@angular/router';



@NgModule({
  declarations: [DogsComponent, DogDetailComponent],
  imports: [
    CommonModule,
    IonicModule,
    HttpClientModule,
    RouterModule
  ],
  exports: [DogsComponent, DogDetailComponent],
  providers: [DogsService]
})
export class DogsModule { }

import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Tab1Page } from './tab1.page';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';
import {DogsModule} from '../dogs/dogs.module';
import {DogDetailComponent} from '../dogs/dog-detail/dog-detail.component';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ExploreContainerComponentModule,
    DogsModule,
    RouterModule.forChild([{ path: '', component: Tab1Page }, { path: 'dogs/:id', component: DogDetailComponent }])
  ],
  declarations: [Tab1Page]
})
export class Tab1PageModule {}

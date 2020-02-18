import {Component, Input, OnInit} from '@angular/core';
import {DogsService} from './dogs.service';
import {Observable} from 'rxjs';
import {Dog} from './dog';

@Component({
  selector: 'app-dogs',
  templateUrl: './dogs.component.html',
  styleUrls: ['./dogs.component.scss'],
})
export class DogsComponent implements OnInit {

  dogs$: Observable<Dog[]>;
  constructor(private dogsService: DogsService) { }

  ngOnInit() {
    console.log('loading dogs');
    this.dogs$ = this.dogsService.getDogs();
  }
  log(dog) {
    return JSON.stringify(dog);
  }

}

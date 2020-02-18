import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Dog} from '../dog';
import {DogsService} from '../dogs.service';

@Component({
  selector: 'app-dog-detail',
  templateUrl: './dog-detail.component.html',
  styleUrls: ['./dog-detail.component.scss'],
})
export class DogDetailComponent implements OnInit {
  dog: Dog;
  constructor(private route: ActivatedRoute, private dogsService: DogsService) { }

  ngOnInit() {
    this.dog = this.dogsService.getDog(this.route.snapshot.paramMap.get('id'));
  }

}

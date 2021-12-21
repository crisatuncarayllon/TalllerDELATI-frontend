import { Component, OnInit } from '@angular/core';
import { MachineLearningService } from '../../../services/machine-learning.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  algorithms: Array<any> = [];
  constructor(
    private machineLearningService:MachineLearningService,
   ) {
    this.machineLearningService.getAlgorithms().subscribe((result:any)=>{
      this.algorithms = result?.algorithms;
    });
   }

  ngOnInit(): void {

  }

}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MachineLearningWekaService {
  //readonly URL = 'https://delati-pmljs17v1-backend.herokuapp.com';
  //readonly URL = 'http://127.0.0.1:5000'; 
  readonly URL = 'https://delatibackweka.herokuapp.com/';
  //readonly URL = 'http://localhost:8080';
  
  constructor(private http: HttpClient) { }

  getAlgorithms(){ return this.http.get(this.URL + '/algorithms'); }

  runKmeans(form: any) {
    return this.http.post(this.URL+ '/delati/kmeansweka', form);
  }

}

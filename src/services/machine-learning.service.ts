import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MachineLearningService {
  //readonly URL = 'https://tallerdelati-backend.herokuapp.com';//heroku
  readonly URL = 'http://128.199.1.222:5001';//cloud
  //readonly URL = 'http://127.0.0.1:5000';//local 
  constructor(private http: HttpClient) { }

  getAlgorithms(){ return this.http.get(this.URL + '/algorithms'); }
  

  runKmeans(form: any) {
    return this.http.post(this.URL+ '/kmeans', form);
  }  

   runMetododelCodo(form: any) {
    return this.http.post(this.URL+ '/MetododelCodo', form);
  }  

  runClasificacion(form: any) {
    return this.http.post(this.URL+ '/Clasificacion', form);
  }  
}

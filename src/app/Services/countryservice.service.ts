import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class CountryserviceService {
  API_URL = "https://restcountries.eu/rest/v2";
  constructor(
    private httpClient:HttpClient
  ) { }
  getAllCountries(){
    return this.httpClient.get(`${this.API_URL}/all`)
  }
  getSpecificCountryByName(name){
    return this.httpClient.get(`${this.API_URL}/name/${name}`)
  }
  getCountryByRegion(region){
    return this.httpClient.get(`${this.API_URL}/region/${region}`)
  }
}

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
  getSpecificCountryByAlpha(alpha3Code){
    return this.httpClient.get(`${this.API_URL}/alpha/${alpha3Code}`)
  }
  getCountryByRegion(region){
    return this.httpClient.get(`${this.API_URL}/region/${region}`)
  }
  getfilterWiseCountry(name,capital,currencies){
    return this.httpClient.get(`${this.API_URL}/all?fields=${name};${capital};${currencies}`);
  }
  getBorderCountriesDetail(code){
    return this.httpClient.get(`${this.API_URL}/alpha/${code}`);
  }
}

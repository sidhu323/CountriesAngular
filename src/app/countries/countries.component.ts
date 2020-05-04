import { Region } from './../constants/options';
import { CountryserviceService } from './../Services/countryservice.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-countries',
  templateUrl: './countries.component.html',
  styleUrls: ['./countries.component.css']
})
export class CountriesComponent implements OnInit {
  countries;
  filterBy;
  allCountries;
  currentRegion;
  searchCountry;
  regionSelected:any;
  public regionOptions = Region.regions;
  filteredCountries: any[];
  constructor(private countryService:CountryserviceService) { }

  ngOnInit() {
    this.getCountries(); 
  }
public getCountries(){
  this.countryService.getAllCountries().subscribe((data:Array<object>)=>{
    this.countries = data;
    this.allCountries = data; 

  })
}  
filterCountry($event){
  const countriesList = [...this.allCountries];
  const dataFilter = [...countriesList.filter(country=>(country.name.toLowerCase().includes($event.target.value.toLowerCase())))];
  this.countries = ($event.target.value.length>0)?[...dataFilter]:[...countriesList]; 
}
 search(searchCountry){
  this.countryService.getfilterWiseCountry(searchCountry,'','').subscribe(data=>{
    this.countries = data;
  })
}

  // getValidPath (name): string {
  //   let matchFailsUrl = ['(', ')'];
  //   for (let i = 0; i < matchFailsUrl.length; i++) {
  //     name = name.replace(matchFailsUrl[i], '');      
  //   }
  //   return name
  // } 


  onRegionSelected(selectRegionName:any):void{
    console.log('this is os',selectRegionName);
    this.countryService.getCountryByRegion(selectRegionName.name).subscribe(data=>{
      this.countries = data;
    })
  }
  clearFilter(){
  this.getCountries()
  }
}

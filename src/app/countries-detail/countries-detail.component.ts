import { Component, OnInit } from '@angular/core';
import { CountryserviceService } from './../Services/countryservice.service';
import { ActivatedRoute } from '../../../node_modules/@angular/router';
@Component({
  selector: 'app-countries-detail',
  templateUrl: './countries-detail.component.html',
  styleUrls: ['./countries-detail.component.css']
})
export class CountriesDetailComponent implements OnInit {
   public country;
   public borders=[];
  constructor(
    private countryService:CountryserviceService,
    private route: ActivatedRoute
    ) { }

  ngOnInit() {
    this.getCountry();
  }

  getCountry(): void {
    const name = this.route.snapshot.paramMap.get('name');
    this.countryService.getSpecificCountryByName(name).subscribe((data) => {
      this.country = data;
      this.borders = this.country.borders;
      console.log('faf',this.borders);
    });
  }
}

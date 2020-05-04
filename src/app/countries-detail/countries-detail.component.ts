import { Component, OnInit } from '@angular/core';
import { CountryserviceService } from './../Services/countryservice.service';
import { ActivatedRoute ,Router} from '../../../node_modules/@angular/router';
@Component({
  selector: 'app-countries-detail',
  templateUrl: './countries-detail.component.html',
  styleUrls: ['./countries-detail.component.css']
})
export class CountriesDetailComponent implements OnInit {
   public country;
   public borders=[];
   public borderCountry;
  constructor(
    private countryService:CountryserviceService,
    private route: ActivatedRoute,
    private router:Router
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
  
  getBorderCountries($e){
    console.log('border',$e.srcElement.innerText);
    this.countryService.getBorderCountriesDetail($e.srcElement.innerText).subscribe((data)=>{
      this.borderCountry = data;
      // this.router.navigate([`country/${this.borderCountry.name}`]);
    })
  }
}

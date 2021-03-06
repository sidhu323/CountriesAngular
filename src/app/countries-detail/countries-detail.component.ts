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
  //  public code = this.route.snapshot.paramMap.get('alpha3Code');
  constructor(
    private countryService:CountryserviceService,
    private route: ActivatedRoute,
    private router:Router
    ) {
      this.router.routeReuseStrategy.shouldReuseRoute = () => false;
     }

  ngOnInit() {
    this.getCountry();
  }

  getCountry(): void {
    const code = this.route.snapshot.paramMap.get('alpha3Code');
    this.countryService.getSpecificCountryByAlpha(code).subscribe((data) => {
      this.country = data;
      this.borders = this.country.borders;
      this.getBorderData();
    })
  }

  getBorderData():void{
    let bordersData = []
      this.borders.map(borderAlpha=>{
        this.countryService.getSpecificCountryByAlpha(borderAlpha).subscribe((data)=>{
          bordersData.push(data)
          this.borders=[...bordersData]
        })
       
      })
  }
}

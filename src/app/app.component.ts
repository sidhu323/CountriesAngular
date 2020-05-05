import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'countries';
  theme:'1';
  
  
  changeTheme(){
    let theme = this.theme;
    let body = document.getElementsByTagName('body')[0];

    if(theme==='1'){
      body.classList.remove("dark-theme");
      
      body.classList.add("light-theme");
    }else{
      body.classList.remove("light-theme");
      body.classList.add("dark-theme");
    }
  }
}

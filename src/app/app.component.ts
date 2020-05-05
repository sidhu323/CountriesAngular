import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'countries';
  theme='Dark Mode';
  
  
  changeTheme(){
    
    let body = document.getElementsByTagName('body')[0];
    

    if(body.classList.contains("dark-theme")){
      body.classList.remove("dark-theme");
      
      body.classList.add("light-theme");
      this.theme="Dark Mode"
    }else{
      body.classList.remove("light-theme");
      body.classList.add("dark-theme");
      this.theme="Light Mode"
    }
  }
}

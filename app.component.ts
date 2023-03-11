import { Component } from '@angular/core';
import { ServiceService } from './service.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'movie';

  constructor(
    private serviceService: ServiceService
    ) { }

    Runtime: any=108.0;
    Rating: any=7.2;
    Votes: any=60545.0;
    Revenue: any=270.32;
    Metascore: any=59.0;
    formValue:any;
    onSubmit(form:any){
      this.formValue=form.value;
      console.log(form.value);
  
      this.getPrice(form.value);
    }
  
    data:any; 
    getPrice(data: any) {
      return this.serviceService.predict(data).subscribe((response: {}) => {
        let data: any = response;
        this.data=data;
        
        console.log(response);
      });
    }
    			
      				
}

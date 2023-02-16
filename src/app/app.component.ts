import { Component ,OnInit } from '@angular/core';
import { DiscosService } from './discos.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app_discos';
  discosList: any[]=[];

  constructor(private discosService:DiscosService) {}

  ngOnInit(): void {
    this.discosService.getDiscos()
    .subscribe((response:any[])=> this.discosList=response);
    
  }

}

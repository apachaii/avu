import { Component } from '@angular/core';
import { ChatService,Message } from './chat.service';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/scan';
import {VozService} from './voz.service'


@Component({
  selector: 'app-root',
  providers: [VozService],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = '';

  formValue: string;
  constructor(public chat:ChatService,
    private speech: VozService) { }

    sendMessage(){
    this.chat.converce(this.formValue);
    this.formValue = '';
  }
   
   Activar(conf:boolean){
     console.log(conf);
     if(conf){
      this.speech.callar();
      conf = false;
     }
     if(!conf)
     {
      this.speech.record('es_MX')
      .subscribe(e => this.formValue = e)
     }
      
   }


}

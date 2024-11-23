import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Home', 
      url: '/home', 
      icon: 'home' 
    },
    { title: 'Agendamentos', 
      url: '/agendamentos', 
      icon: 'calendar' 
    },
    { title: 'Abordagem familiar', 
      url: '/abordagem-familiar', 
      icon: 'accessibility' 
    },
    { title: 'Créditos', 
      url: '/creditos', 
      icon: 'heart' 
    },
   
  ];
  public labels = ['Family', 'Friends', 'Notes', 'Work', 'Travel', 'Reminders'];
  constructor() {}
}

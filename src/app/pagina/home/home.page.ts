import { Component, OnInit } from '@angular/core';
import { getScheduling } from 'src/app/service/agendamento.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  constructor() { }
  schedules: any[] = [];
  async ngOnInit() {
    const schedules = await getScheduling();
    this.schedules = schedules;
  }

}

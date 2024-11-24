import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { newSchedule } from 'src/app/service/agendamento.service';
import { getClinics } from 'src/app/service/clinica.service';
import { getDoctors } from 'src/app/service/doctor.service';

@Component({
  selector: 'app-agendamentos',
  templateUrl: './agendamentos.page.html',
  styleUrls: ['./agendamentos.page.scss'],
})
export class AgendamentosPage implements OnInit {
  selectedDoctor: any = '';
  selectedClinic: any = '';
  selectedService: any = '';
  selectedTime: string = '';
  availableTimes: string[] = [];
  availableDoctors: any[] = [];

  clinicDoctors: any[] = [];
  doctorList: any[] = [];
  constructor(public nav: NavController) {}

  async ngOnInit() {
    const clinics = await getClinics();
    const doctors = await getDoctors();
    this.clinicDoctors = clinics;
    this.availableDoctors = doctors;
  }

  async abrirPagina() {
    this.nav.navigateForward('abordagem-familiar');
  }

  selectTime(event: any) {
    console.log(event.detail.value);
    this.selectedTime = event;
  }

  confirmAppointment() {
    if (this.isFormComplete()) {
      const body: any = {
        user: {
          id: 2,
        },
        treatment: 'Consulta Geral',
        date: this.selectedTime,
        doctor: {
          id: this.selectedDoctor.id,
        },
        online: this.selectedService == 'Online',
        inPerson: this.selectedService == 'Presencial',
        clinic: {
          id: this.selectedClinic.id,
        },
      };
      newSchedule(body);
    } else {
      alert(
        'Por favor, selecione todas as opções antes de confirmar o agendamento.'
      );
    }
  }

  isFormComplete(): boolean {
    return !!(
      this.selectedClinic &&
      this.selectedDoctor &&
      this.selectedService &&
      this.selectedTime
    );
  }
}

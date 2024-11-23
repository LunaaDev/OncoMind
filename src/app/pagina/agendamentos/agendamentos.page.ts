import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
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
  constructor(public nav: NavController) { }

  async ngOnInit() { 
    const clinics = await getClinics()
    this.clinicDoctors = clinics;
    const doctors = await getDoctors();
    this.availableDoctors = doctors;
    //const currentDoctor = this.availableDoctors.find(item => item.nome == this.selectedDoctor.nome);
   //this.availableTimes = currentDoctor.horarios;
  }

  async abrirPagina() {
   
    console.log('Profissional selecionado:', this.selectedDoctor);
    console.log('Clínica selecionada:', this.selectedClinic);
    console.log('Atendimento selecionado:', this.selectedService);
    this.nav.navigateForward('abordagem-familiar');
  }

  selectTime(time: string) {
    this.selectedTime = time;
  }

  confirmAppointment() {
    if (this.isFormComplete()) {
      alert(`Agendamento confirmado para ${this.selectedClinic} com ${this.selectedDoctor} às ${this.selectedTime}.`);
    } else {
      alert('Por favor, selecione todas as opções antes de confirmar o agendamento.');
    }
  }

  
  isFormComplete(): boolean {
    return !!(this.selectedClinic && this.selectedDoctor && this.selectedService && this.selectedTime);
  }
}

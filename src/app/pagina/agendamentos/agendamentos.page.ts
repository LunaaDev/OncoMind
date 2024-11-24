import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NavController, ToastController } from '@ionic/angular';
import { getSchedulingById, newSchedule, updateSchedule } from 'src/app/service/agendamento.service';
import { getClinics } from 'src/app/service/clinica.service';
import { getDoctors } from 'src/app/service/doctor.service';

@Component({
  selector: 'app-agendamentos',
  templateUrl: './agendamentos.page.html',
  styleUrls: ['./agendamentos.page.scss'],
})
export class AgendamentosPage implements OnInit {
  scheduleId: number | null = null;
  selectedDoctor: any = null;
  selectedClinic: any = null;
  selectedService: any = null;
  selectedTime: any = null;
  availableDoctors: any[] = [];
  clinicDoctors: any[] = [];
  doctorList: any[] = [];

  constructor(
    public nav: NavController,
    private toastController: ToastController,
    private route: ActivatedRoute) { }

  async ngOnInit() {
    this.scheduleId = +this.route.snapshot.paramMap.get('id')!;
    if (this.scheduleId) {
      const schedule = await getSchedulingById(this.scheduleId);
      this.selectedClinic = schedule.clinic;
      this.clinicDoctors = [schedule.clinic]
      this.selectedDoctor = schedule.doctor;
      this.availableDoctors = [schedule.doctor];
      this.selectedTime = schedule.date;
      this.selectedService = schedule.online ? "Online" : "Presencial"
      return;
    }
    this.clinicDoctors = await getClinics();
    this.availableDoctors = await getDoctors();
  }

  async abrirPagina() {
    this.nav.navigateForward('abordagem-familiar');
  }

  selectTime(event: any) {
    this.selectedTime = event.detail.value;
  }

  async confirmAppointment() {
    if (this.isFormComplete()) {
      const separetedDate = this.selectedTime.split("+")
      const correctDate = separetedDate[0] + "-03:00"
      console.log(correctDate)
      const body: any = {
        user: {
          id: 1,
        },
        treatment: 'Consulta Geral',
        date: correctDate,
        doctor: {
          id: this.selectedDoctor.id,
        },
        online: this.selectedService == 'Online',
        inPerson: this.selectedService == 'Presencial',
        clinic: {
          id: this.selectedClinic.id,
        },
      };
      let response = { error: 'Tivemos um problema ao efetuar o agendamento' }
      if (this.scheduleId) {
        body.id = this.scheduleId
        response = await updateSchedule(body)
      } else {
        response = await newSchedule(body);
      }
      if (response.error) {
        await this.showToast(`Não foi possível efetuar o agendamento, tente novamente mais tarde`, 'danger');
        return
      }
      await this.showToast(`Agendamento efetuado com sucesso!`);
      this.cleanForm()
    } else {
      alert(
        'Por favor, selecione todas as opções antes de confirmar o agendamento.'
      );
    }
  }

  cleanForm() {
    this.selectedDoctor = null
    this.selectedClinic = null
    this.selectedService = null
    this.selectedTime = null
  }

  isFormComplete(): boolean {
    return !!(
      this.selectedClinic &&
      this.selectedDoctor &&
      this.selectedService &&
      this.selectedTime
    );
  }

  async showToast(message: string, type: string = 'success') {
    const toast = await this.toastController.create({
      message,
      duration: 2000,
      position: 'top',
      color: type,
    });
    await toast.present();
  }
}

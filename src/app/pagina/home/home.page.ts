import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController, ToastController } from '@ionic/angular';
import { deleteSchedule, getScheduling } from 'src/app/service/agendamento.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  constructor(
    private alertController: AlertController,
    private toastController: ToastController,
    private router: Router) { }

  schedules: any[] = [];

  async ngOnInit() {
  }

  async ionViewWillEnter() {
    const schedules = await getScheduling();
    this.schedules = schedules;
  }

  editSchedule(schedule: any) {
    this.router.navigate(['/agendamentos', schedule.id]);
  }

  async deleteSchedule(schedule: any) {
    const alert = await this.alertController.create({
      header: 'Confirmação',
      message: `Quer mesmo excluir o agendamento na clínia ${schedule.clinic.name}`,
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          handler: () => {
            console.log('Exclusão cancelada');
          },
        },
        {
          text: 'Excluir',
          role: 'destructive',
          handler: async () => {
            const response = await deleteSchedule(schedule.id)
            if (response.error) {
              await this.showToast(`Não foi possível excluir o agendamento`, 'danger');
              return
            }
            await this.showToast(`Agendamento ${schedule.clinic.name} excluído com sucesso!`);
            this.schedules = await getScheduling();
          },
        },
      ],
    });

    await alert.present();
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

export async function getDoctors(): Promise<any> {
    try {
        //const response = await fetch('https://44fc06ca802d406ead73fe24cb2d5d94.api.mockbin.io')
        //return  await response.json()
        return[
          {
              "id": 4,
              "name": "Dra. Ana Costa",
              "crm": 901234,
              "stateCRM": "BA",
              "specialty": "Dermatologia",
              "schedules": []
          },
          {
              "id": 2,
              "name": "Dra. Maria Oliveira",
              "crm": 789012,
              "stateCRM": "RJ",
              "specialty": "Pediatria",
              "schedules": []
          },
          {
              "id": 6,
              "name": "Dra. Sofia Pereira",
              "crm": 234567,
              "stateCRM": "PR",
              "specialty": "Ginecologia",
              "schedules": []
          },
          {
              "id": 1,
              "name": "Dr. João Silva",
              "crm": 123456,
              "stateCRM": "SP",
              "specialty": "Cardiologia",
              "schedules": []
          },
          {
              "id": 5,
              "name": "Dr. Lucas Almeida",
              "crm": 567890,
              "stateCRM": "RS",
              "specialty": "Neurologia",
              "schedules": []
          },
          {
              "id": 3,
              "name": "Dr. Pedro Santos",
              "crm": 345678,
              "stateCRM": "MG",
              "specialty": "Ortopedia",
              "schedules": []
          }
      ]
          
    } catch(err: any) {
        return {
             error: err.message
        }
    }
}
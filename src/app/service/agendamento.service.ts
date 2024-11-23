export async function getScheduling(): Promise<any> {
    try {
       // const response = await fetch('https://44fc06ca802d406ead73fe24cb2d5d94.api.mockbin.io')
       // return  await response.json()
       return [
        {
            "id": 2,
            "user": {
                "id": 2,
                "name": "João Silva",
                "cpf": "12345678901",
                "email": "joao.silva@example.com",
                "password": null,
                "address": "Rua das Flores, 123",
                "cep": "12345678",
                "city": "São Paulo",
                "state": "São Paulo",
                "uf": "SP",
                "phone": "11987654321",
                "birthDate": "1990-01-14",
                "isPatient": true,
                "isFamily": false,
                "enabled": true,
                "username": "joao.silva@example.com",
                "authorities": [],
                "accountNonExpired": true,
                "accountNonLocked": true,
                "credentialsNonExpired": true
            },
            "treatment": "Consulta Geral",
            "date": "2023-11-23T14:00:00.000+00:00",
            "doctor": {
                "id": 2,
                "name": "Dra. Maria Oliveira",
                "crm": 789012,
                "stateCRM": "RJ",
                "specialty": "Pediatria"
            },
            "online": false,
            "inPerson": true,
            "clinic": {
                "id": 3,
                "name": "Clínica Bem Estar",
                "address": "Rua da Paz, 789, Belo Horizonte - MG"
            }
        }
    ]
    } catch(err: any) {
        return {
             error: err.message
        }
    }
}
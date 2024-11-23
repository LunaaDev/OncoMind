export async function getClinics(): Promise<any> {
    try {
        //const response = await fetch('https://44fc06ca802d406ead73fe24cb2d5d94.api.mockbin.io')
        //return  await response.json()
        return[
            {
                "id": 3,
                "name": "Clínica Bem Estar",
                "address": "Rua da Paz, 789, Belo Horizonte - MG",
                "schedules": []
            },
            {
                "id": 5,
                "name": "Clínica Cuidar Mais",
                "address": "Avenida Central, 202, Salvador - BA",
                "schedules": []
            },
            {
                "id": 6,
                "name": "Clínica Esperança",
                "address": "Rua do Sol, 303, Curitiba - PR",
                "schedules": []
            },
            {
                "id": 7,
                "name": "Clínica Harmonia",
                "address": "Avenida das Palmeiras, 404, Recife - PE",
                "schedules": []
            },
            {
                "id": 10,
                "name": "Clínica Mais Saúde",
                "address": "Rua Verde, 707, Florianópolis - SC",
                "schedules": []
            },
            {
                "id": 8,
                "name": "Clínica Novo Horizonte",
                "address": "Rua das Acácias, 505, Fortaleza - CE",
                "schedules": []
            },
            {
                "id": 1,
                "name": "Clínica São José",
                "address": "Rua das Flores, 123, São Paulo - SP",
                "schedules": []
            },
            {
                "id": 4,
                "name": "Clínica Saúde Total",
                "address": "Rua Principal, 101, Porto Alegre - RS",
                "schedules": []
            },
            {
                "id": 2,
                "name": "Clínica Vida Saudável",
                "address": "Avenida Brasil, 456, Rio de Janeiro - RJ",
                "schedules": []
            },
            {
                "id": 9,
                "name": "Clínica Viva Bem",
                "address": "Avenida Independência, 606, Manaus - AM",
                "schedules": []
            }
        ]
          
    } catch(err: any) {
        return {
             error: err.message
        }
    }
}
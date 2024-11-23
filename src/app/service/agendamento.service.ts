export async function scheduling(body:any): Promise<any> {
    try {
       // const response = await fetch('https://44fc06ca802d406ead73fe24cb2d5d94.api.mockbin.io')
       // return  await response.json()
    } catch(err: any) {
        return {
             error: err.message
        }
    }
}
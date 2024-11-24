export async function getClinics(): Promise<any> {
  try {
    const response = await fetch('https://oncomindbackend.onrender.com/api/v1/clinicas');
    return await response.json();
  } catch (err: any) {
    return {
      error: err.message,
    };
  }
}

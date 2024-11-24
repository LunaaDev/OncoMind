export async function getClinics(): Promise<any> {
  try {
    const response = await fetch('http://localhost:8080/api/v1/clinicas');
    return await response.json();
  } catch (err: any) {
    return {
      error: err.message,
    };
  }
}

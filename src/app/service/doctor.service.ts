export async function getDoctors(): Promise<any> {
  try {
    try {
      const response = await fetch('http://localhost:8080/api/v1/medicos');
      return await response.json();
    } catch (err: any) {
      return {
        error: err.message,
      };
    }
  } catch (err: any) {
    return {
      error: err.message,
    };
  }
}

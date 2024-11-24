export async function getScheduling(): Promise<any> {
  try {
    const response = await fetch('http://localhost:8080/api/v1/agendamentos');
    return await response.json();
  } catch (err: any) {
    return {
      error: err.message,
    };
  }
}

export async function newSchedule(body: any): Promise<any> {
  try {
    const response = await fetch('http://localhost:8080/api/v1/agendamentos', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    });
    return await response.json();
  } catch (err: any) {
    return {
      error: err.message,
    };
  }
}

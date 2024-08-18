export async function getToken() {
  const tokenEndpoint = 'https://api.drivvo.com/autenticacao/login';

  const body = JSON.stringify({
    email: process.env.DRIVVO_EMAIL,
    senha: process.env.DRIVVO_PASSWORD,
    idioma: 'en',
  });

  const requestOptions = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: body,
    redirect: 'follow',
  };

  try {
    const response = await fetch(tokenEndpoint, requestOptions);
    const result = await response.json();
    console.log(result);
    console.log(result.token);
    return result.token;
  } catch (error) {
    console.error(error);
  }
}

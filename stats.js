require('dotenv').config();

async function getToken() {
  const tokenEndpoint = 'https://api.drivvo.com/autenticacao/loginFacebook';

  const body = JSON.stringify({
    nome: process.env.FACEBOOK_NAME,
    sobrenome: process.env.FACEBOOK_SURNAME,
    facebook_id: process.env.FACEBOOK_ID,
    email: process.env.FACEBOOK_EMAIL,
    facebook_token: process.env.FACEBOOK_TOKEN,
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

async function getVehicles(token) {
  const vehicleEndpoint = 'https://api.drivvo.com/veiculo/web';

  const requestOptions = {
    method: 'GET',
    headers: {
      'X-Token': token,
    },
    redirect: 'follow',
  };

  try {
    const response = await fetch(vehicleEndpoint, requestOptions);
    const result = await response.json();
    console.log(result);
  } catch (error) {
    console.error(error);
  }
}

async function getFuellingEntries(token) {
  const fuellingEndpoint =
    'https://api.drivvo.com/veiculo/4818022/abastecimento/web';

  const requestOptions = {
    method: 'GET',
    headers: {
      'X-Token': token,
    },
    redirect: 'follow',
  };

  try {
    const response = await fetch(fuellingEndpoint, requestOptions);
    const result = await response.json();
    console.log(result);
  } catch (error) {
    console.error(error);
  }
}

async function getServicingEntries(token) {
  const servicingEndpoint =
    'https://api.drivvo.com/veiculo/4818022/servico/web';

  const requestOptions = {
    method: 'GET',
    headers: {
      'X-Token': token,
    },
    redirect: 'follow',
  };

  try {
    const response = await fetch(servicingEndpoint, requestOptions);
    const result = await response.json();
    console.log(result);
  } catch (error) {
    console.error(error);
  }
}

async function performRequests() {
  const authToken = await getToken();

  if (authToken) {
    await getVehicles(authToken);
    await getFuellingEntries(authToken);
    await getServicingEntries(authToken);
  } else {
    console.error('Failed to retrieve auth token, aborting requests.');
  }
}

performRequests();

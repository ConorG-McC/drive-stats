require('dotenv').config();
const fs = require('fs'); // Import the fs module
const path = require('path'); // Import the path module for better path management

async function getToken() {
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

async function saveJsonToFile(filename, data) {
  const filePath = path.join(__dirname, filename); // Use path to join directory name and filename
  fs.writeFile(filePath, JSON.stringify(data, null, 2), (err) => {
    if (err) {
      console.error(`Failed to save ${filename}:`, err);
    } else {
      console.log(`${filename} has been saved.`);
    }
  });
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
    await saveJsonToFile('vehicles.json', result); // Save result to file
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
    await saveJsonToFile('fuellingEntries.json', result); // Save result to file
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
    await saveJsonToFile('servicingEntries.json', result); // Save result to file
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

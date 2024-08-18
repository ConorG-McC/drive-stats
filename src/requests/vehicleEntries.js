export async function getVehicles(token) {
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
    // await saveJsonToFile('vehicles.json', result);
  } catch (error) {
    console.error(error);
  }
}

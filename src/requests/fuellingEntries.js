export async function getFuellingEntries(token) {
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
    // await saveJsonToFile('fuellingEntries.json', result);
  } catch (error) {
    console.error(error);
  }
}

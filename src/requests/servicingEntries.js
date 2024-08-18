export async function getServicingEntries(token) {
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
    // await saveJsonToFile('servicingEntries.json', result);
  } catch (error) {
    console.error(error);
  }
}

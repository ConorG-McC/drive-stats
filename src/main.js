import dotenv from 'dotenv';
dotenv.config();

import { getToken } from './requests/login.js';
import { getVehicles } from './requests/vehicleEntries.js';
import { getFuellingEntries } from './requests/fuellingEntries.js';
import { getServicingEntries } from './requests/servicingEntries.js';

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

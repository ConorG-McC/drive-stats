import yargs from 'yargs';
import { hideBin } from 'yargs/helpers';

export const config = {
  baseUrl: 'https://api.drivvo.com',
  loginEndpoint: '/autenticacao/login',
  vehicleEndpoint: '/veiculo/web',
  fuelingEndpoint: `/abastecimento/web`,
  servicingEndpoint: `/servico/web`,
};

export const args = yargs(hideBin(process.argv))
  .option('vehicle', {
    alias: 'v',
    description:
      'Filter by vehicle number plate or use "all" for the last vehicle',
    type: 'string',
    default: 'all', // Default to 'all' if not provided
    coerce: (arg) => {
      if (arg === true) {
        // If -v is passed without a value, set it to 'all'
        return 'all';
      }
      return arg;
    },
  })
  .option('output', {
    alias: 'o',
    description: 'Save results to JSON files (true/false)',
    type: 'boolean',
    default: false,
  })
  .help()
  .alias('help', 'h').argv;

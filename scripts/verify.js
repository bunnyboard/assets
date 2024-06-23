const fs = require('fs');
const assert = require('assert');

// we verify every single token in token list
const blockchains = [
  'ethereum',
  'arbitrum',
  'optimism',
  'base',
  'bnbchain',
  'polygon',
  'fantom',
  'avalanche',
  'metis',
  'gnosis',
  'scroll',
  'blast',
  'linea',
  'zksync',
  'manta',
];

for (const chain of blockchains) {
  // make sure we have the chain logo image
  assert(fs.existsSync(`./images/chains/${chain}.png`));

  // ==== whe rename all token address to lowercase in tokens directory
  const files = fs.readdirSync(`./images/tokens/${chain}`);
  for (const file of files) {
    fs.renameSync(`./images/tokens/${chain}/${file}`, `./images/tokens/${chain}/${file.toLowerCase()}`);
  }
}

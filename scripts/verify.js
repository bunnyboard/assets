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
];

for (const chain of blockchains) {
  // make sure we have the chain logo image
  assert(fs.existsSync(`./images/chains/${chain}.png`));

  // format tokens
  const formattedTokens = {};
  const tokenList = require(`../tokenlists/${chain}.json`);
  for (const [address, token] of Object.entries(tokenList)) {
    const tokenAddress = address.toLowerCase();
    formattedTokens[tokenAddress] = {
      chain: token.chain.toLowerCase(),
      symbol: token.symbol,
      decimals: token.decimals,
      address: tokenAddress,
    };
  }

  fs.writeFileSync(`./tokenlists/${chain}.json`, JSON.stringify(formattedTokens));
}

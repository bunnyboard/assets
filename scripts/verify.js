const fs = require('fs');
const assert = require('assert');

const blockchains = fs.readdirSync('./images/tokens');

for (const chain of blockchains) {
  // ==== whe rename all token address to lowercase in tokens directory
  const files = fs.readdirSync(`./images/tokens/${chain}`);
  for (const file of files) {
    fs.renameSync(`./images/tokens/${chain}/${file}`, `./images/tokens/${chain}/${file.toLowerCase()}`);
  }
}

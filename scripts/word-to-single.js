let fs = require('fs');
let word = fs.readFileSync('../data/word.json');
word = JSON.parse(word);

word = word.map(item => {
  return {
    [item.word]: item.pinyin,
  };
});

fs.writeFileSync('../data/word-single.json', JSON.stringify(word, null, 4), { encoding: 'utf-8' });

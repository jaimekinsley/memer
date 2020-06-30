const chance = require('chance').Chance();
const Meme = require('../lib/models/Meme');

module.exports = async({ memes = 25 } = {}) => {
  await Meme.create([...Array(memes)].map() => ({
    top: chance.sentence({ words: 5 }),
    image: chance.avatar(),
    bottom: chance.sentence({ words: 5 })
}));
};

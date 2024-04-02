
const db = require('../config/connection');
const { User, Genre } = require('../models');
const userSeeds = require('./userSeeds.json');
const genreSeeds = require('./genreSeeds.json');
const cleanDB = require('./cleanDB');

db.once('open', async () => {
  try {
    await cleanDB('Genre', 'genres')
    await cleanDB('Post', 'posts');
    await cleanDB('User', 'users');

    await User.create(userSeeds);

    for (let i = 0; i < genreSeeds.length; i++) {
      const { _id, genreName } = await Genre.create(genreSeeds[i]);
      const user = await User.findOneAndUpdate(
        { genreName: genreName},
        {
          $addToSet: {
            genres: _id,
          },
        }
      );
    }
  } catch (err) {
    console.error(err);
    process.exit(1);
  }

  console.log('all done!');
  process.exit(0);
});

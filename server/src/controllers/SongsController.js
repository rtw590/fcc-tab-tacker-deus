// Controller used for registering user to db

const { Song } = require("../models");

module.exports = {
  // This is for the all songs get route
  async index(req, res) {
    try {
      let songs = null;
      const search = req.query.search;
      if (search) {
        songs = await Song.findAll({
          where: {
            $or: ["title", "artist", "album", "genre"].map(key => ({
              [key]: {
                $like: `%${search}%`
              }
            }))
          }
        });
      } else {
        songs = await Song.findAll({
          limit: 10
        });
      }
      res.send(songs);
    } catch (err) {
      res.status(500).send({
        error: "An error has occured while trying to fetch the songs."
      });
    }
  },
  // This is to return one specific song
  async show(req, res) {
    try {
      const song = await Song.findById(req.params.songId);
      res.send(song);
    } catch (err) {
      res.status(500).send({
        error: "an error has occured trying to fetch songs"
      });
    }
  },
  // This is for creating a new song
  async post(req, res) {
    try {
      const song = await Song.create(req.body);
      res.send(song);
    } catch (err) {
      res.status(500).send({
        error: "an error has occured trying to create songs"
      });
    }
  },
  // This is for updating the song
  async put(req, res) {
    try {
      // Find song by id and update it
      const song = await Song.update(req.body, {
        where: {
          id: req.params.songId
        }
      });
      res.send(req.body);
    } catch (err) {
      res.status(500).send({
        error: "an error has occured trying to update the song"
      });
    }
  }
};

<template>
  <v-layout>
    <v-flex xs4>
      <panel title="Song Metadata">
        <!-- Use v-model to two way bind to the data defined below -->
        <v-text-field
            v-model="song.title"
            label="Title"
            required
            :rules="[required]"
        ></v-text-field>
        <v-text-field
            v-model="song.artist"
            label="Artist"
            required
            :rules="[required]"
        ></v-text-field>
        <v-text-field
            v-model="song.genre"
            label="Genre"
            required
            :rules="[required]"
        ></v-text-field>
        <v-text-field
            v-model="song.album"
            label="Album"
            required
            :rules="[required]"
        ></v-text-field>
        <v-text-field
            v-model="song.albumImageUrl"
            label="Album Image Url"
            required
            :rules="[required]"
        ></v-text-field>
        <v-text-field
            v-model="song.youtubeId"
            label="Youtube ID"
            required
            :rules="[required]"
        ></v-text-field>
      </panel>
    </v-flex>
    <v-flex xs8>
      <panel title="Song Structure" class="ml-2">
        <v-text-field
            v-model="song.lyrics"
            label="Lyrics"
            multi-line
            required
            :rules="[required]"
        ></v-text-field>
        <v-text-field
            v-model="song.tab"
            multi-line
            label="Tab"
            required
            :rules="[required]"
        ></v-text-field>
      </panel>

      <!-- Display error if all fiealds are not filled in -->
      <div class="danger-alert" v-if="error">
        {{error}}
      </div>
      <!-- On click, fire create function defined below -->
      <v-btn
        dark
        class="cyan"
          @click="save">
          Save Song
        </v-btn>
    </v-flex>
  </v-layout>
</template>

<script>
import SongsService from "@/services/SongsService";
export default {
  data() {
    // Set all the data that will be bound to the inputs above
    return {
      song: {
        title: null,
        artist: null,
        genre: null,
        album: null,
        albumImageUrl: null,
        youtubeId: null,
        lyrics: null,
        tab: null
      },
      error: null,
      required: value => !!value || "Required"
    };
  },
  methods: {
    // The create song button fires this method and it calls the backend API
    async save() {
      this.error = null;
      // Check if all fields are filled in
      const areAllFieldsFilledIn = Object.keys(this.song).every(
        key => !!this.song[key]
      );
      if (!areAllFieldsFilledIn) {
        this.error = "Please fill in all of the fields";
        return;
      }

      const songId = this.$store.state.route.params.songId;
      try {
        // SongsService has a method called put
        await SongsService.put(this.song);
        this.$router.push({
          name: "song",
          params: {
            songId: songId
          }
        });
      } catch (err) {
        console.log(err);
      }
    }
  },
  async mounted() {
    // SongsService has a method called show
    try {
      const songId = this.$store.state.route.params.songId;
      // The data song will go from empty to whatever is returned from the backend
      this.song = (await SongsService.show(songId)).data;
    } catch (err) {
      console.log(err);
    }
  }
};
</script>

<style>
</style>

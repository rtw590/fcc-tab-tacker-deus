<template>
   <v-layout column>
    <v-flex xs6 offset-sx3 class="mt-1">
      <!-- Subcomponent panel was importated and added to components below -->
      <panel title="Songs">
          <!-- Slot called action is in the panel subcomponent and it is getting filled here -->
          <v-btn 
            slot="action"
            to="songs/create"
            class="cyan accent-2"
            light
            medium
            absolute
            right
            middle
            fab>
            <v-icon>add</v-icon>
          </v-btn>
        <!-- With v-for, you must use a key -->
        <!-- This will look through an array -->
        <div 
          v-for="song in songs" 
          class="song"
          :key="song.id">

          <v-layout>
            <v-flex sx6>
              <div class="song-title">
                {{song.title}}
              </div>
              <div class="song-artist">
                {{song.artist}}
              </div>
              <div class="song-genre">
                {{song.genre}}
              </div>
              <v-btn
                dark
                class="cyan"
                  @click="navigateTo({name: 'song', params: {songId: song.id}})">
                  View Song
              </v-btn>
            </v-flex>
            <v-flex sx6>
              <img class="album-image" :src="song.albumImageUrl" alt="Album Cover">
            </v-flex>
          </v-layout>

        </div>
        
      </panel>
    </v-flex>
  </v-layout>
</template>

<script>
import SongsService from "@/services/SongsService";
import Panel from "@/components/Panel";
export default {
  components: {
    Panel
  },
  data() {
    return {
      songs: null
    };
  },
  methods: {
    navigateTo(route) {
      this.$router.push(route);
    }
  },
  async mounted() {
    // request backend for all of the songs
    this.songs = (await SongsService.index()).data;
  }
};
</script>

<style scoped>
.song {
  padding: 20px;
  height: 330px;
  overflow: hidden;
}

.song-title {
  font-size: 30px;
}

.song-artist {
  font-size: 24px;
}

.song-genre {
  font-size: 18px;
}

.album-image {
  width: 70%;
  margin: 0 auto;
}
</style>

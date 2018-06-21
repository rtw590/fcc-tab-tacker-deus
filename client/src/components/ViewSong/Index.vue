<template>
<div>
  <v-layout>
    <v-flex xs6>
      <!-- We are putting the SongMetadata subcomponent here -->
      <!-- We are passing it song -->
      <song-metadata :song="song" />
    </v-flex>

    <v-flex xs6 class="ml-2">
      <!-- We are putting the YouTube subcomponent here -->
      <!-- We are passing it song,youtubeId -->
      <you-tube :youtubeId="song.youtubeId" />
    </v-flex>
  </v-layout>

  <v-layout>
    <v-flex xs6 class="mt-2">
      <!-- We are putting the Tab subcomponent here -->
      <!-- We are passing it song -->
      <tab :song="song" />
    </v-flex>

    <v-flex xs6 class="ml-2 mt-2">
      <!-- We are putting the Lyrics subcomponent here -->
      <!-- We are passing it song -->
      <lyrics :song="song" />
    </v-flex>
  </v-layout>


  </div>
</template>

<script>
import Lyrics from "./Lyrics";
import Tab from "./Tab";
import SongMetadata from "./SongMetadata";
import YouTube from "./YouTube";
import SongsService from "@/services/SongsService";
import Panel from "@/components/Panel";
export default {
  data() {
    return {
      song: {}
    };
  },
  // This function comes from SongsService and will retrieve one song from the backend
  async mounted() {
    const songId = this.$store.state.route.params.songId;
    // The data song will go from empty to whatever is returned from the backend
    this.song = (await SongsService.show(songId)).data;
  },
  components: {
    Panel,
    SongMetadata,
    YouTube,
    Lyrics,
    Tab
  }
};
</script>

<style scoped>
</style>

<template>

  <v-layout coulmn>
    <v-flex xs6 offset-xs3>
      
      <songs-search-panel />
      <songs-panel class="mt-2"/>

    </v-flex>
  </v-layout>

</template>

<script>
import SongsPanel from "./SongsPanel";
import SongsSearchPanel from "./SongsSearchPanel";
import SongsService from "@/services/SongsService";
export default {
  components: {
    SongsPanel,
    SongsSearchPanel
  },
  data() {
    return {
      songs: null
    };
  },
  async mounted() {
    //  request backnd for all the songs
    this.songs = (await SongsService.index()).data;
  }
};
</script>

<style scoped>
textarea {
  width: 100%;
  font-family: monospace;
  border: none;
  height: 600px;
  border-style: none;
  border-color: transparent;
  overflow: auto;
  padding: 40px;
}
</style>
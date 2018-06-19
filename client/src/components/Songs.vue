<template>
   <v-layout column>
    <v-flex xs6 offset-sx3 class="mt-5">
      <!-- Subcomponent panel was importated and added to components below -->
      <panel title="Songs">
        <!-- With v-for, you must use a key -->
        <div 
          v-for="song in songs" 
          :key="song.id">
          {{song.title}} -
          {{song.artist}} -
          {{song.album}}
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
  async mounted() {
    // request backend for all of the songs
    this.songs = (await SongsService.index()).data;
  }
};
</script>

<style>
</style>

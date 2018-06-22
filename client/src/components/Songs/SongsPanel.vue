<template>
    <panel title="Songs">
    <v-btn class="cyan accent-1"
        slot="action"
        :to="{
            name: 'songs-create'
        }"
        light
        small
        absolute
        right
        middle
        fab>
        <v-icon>add</v-icon>
    </v-btn>
    <div 
        v-for="song in songs" 
        class="song"
        :key="song.id">

        <v-layout>
        <v-flex xs6>
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
                :to="{
                    name: 'song',
                    params: {
                        songId: song.id
                    }
            }">
            View
            </v-btn>
        </v-flex>
            
        <v-flex xs6>
            <img :src="song.albumImageUrl" alt="" class="album-image" style="width: 300px;"/>
        </v-flex>
        </v-layout>
    </div>
    </panel>
</template>

<script>
import SongsService from "@/services/SongsService";
export default {
  data() {
    return {
      songs: null
    };
  },
  watch: {
    "$route.query.search": {
      immediate: true,
      async handler(value) {
        this.songs = (await SongsService.index(value)).data;
      }
    }
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
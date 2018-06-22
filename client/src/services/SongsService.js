import Api from "@/services/Api";

export default {
  // You can call this function in other files by using SongsService.index
  index(search) {
    return Api().get("songs", {
      params: {
        search: search
      }
    });
  },
  // Call this function with SongsService.show and it will hit the backend to retreive one song
  show(songId) {
    return Api().get(`songs/${songId}`);
  },
  // You can call this function in other files by using SongsService.post. Used to create song
  post(song) {
    return Api().post("songs", song);
  },
  // This will hit the backend to update a song
  put(song) {
    return Api().put(`songs/${song.id}`, song);
  }
};

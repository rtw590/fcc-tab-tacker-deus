import Api from "@/services/Api";

export default {
  // You can call this function in other files by using SongsService.index
  index() {
    return Api().get("songs");
  },
  // You can call this function in other files by using SongsService.post. Used to create song
  post(song) {
    return Api().post("songs", song);
  }
};

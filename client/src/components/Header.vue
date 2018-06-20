<template>
  <v-toolbar  class="cyan" dark>


    <v-toolbar-items>
      <!-- Using the created function navigateTo to create routes. Check docs for other ways -->
      <v-btn flat dark
          @click="navigateTo({name: 'home'})">
            Tabtracker
        </v-btn>

      <v-btn flat dark
        @click="navigateTo({name: 'songs'})">
        Browse
      </v-btn>
    </v-toolbar-items>

    <!-- Spacer used to fix items after it to the far right -->
    <v-spacer></v-spacer>

    <v-toolbar-items>
      <v-btn 
        v-if="$store.state.isUserLoggedIn"
        flat dark
          @click="logout">
            Logout
        </v-btn>
      <v-btn 
        v-if="!$store.state.isUserLoggedIn"
        flat dark
          @click="navigateTo({name: 'login'})">
            Login
        </v-btn>
        <v-btn 
        v-if="!$store.state.isUserLoggedIn"
        flat dark
          @click="navigateTo({name: 'register'})">
            Sign Up
        </v-btn>
    </v-toolbar-items>
  </v-toolbar>
</template>

<script>
export default {
  methods: {
    // Method for making routes on click
    navigateTo(route) {
      this.$router.push(route);
    },
    logout() {
      this.$store.dispatch("setToken", null);
      this.$store.dispatch("setUser", null);
      this.$router.push({
        name: "home"
      });
    }
  }
};
</script>

<style>
</style>

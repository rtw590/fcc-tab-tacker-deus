<template>
  <v-layout column>
    <v-flex xs6 offset-sx3 class="mt-5">
      <div class="white elevation-2">
        <v-toolbar flat dense class="cyan" dark>
          <v-toolbar-title>Login</v-toolbar-title>
        </v-toolbar>
        <div class="pl-4 pr-4 pt-2 pb-2">
          <v-text-field
            v-model="email"
            label="Email"
          ></v-text-field>

          <v-text-field
            v-model="password"
            label="Password"
            type="password"
          ></v-text-field>

          <div v-html="error" class="error"></div>
          <br>
          <v-btn
          dark
          class="cyan"
            @click="login">
            Login
          </v-btn>
      </div>
    </div>
    </v-flex>
  </v-layout>
</template>

<script>
import AuthenticationService from "@/services/AuthenticationService";
export default {
  // Set two way bindings for these variables used with v-model above
  data() {
    return {
      email: "",
      password: "",
      error: null
    };
  },
  methods: {
    // Button has on click to call this function from AuthenticationService
    // login is the name of the function on the click event
    async login() {
      try {
        // this runction comes from /services/AuthenticationService
        const response = await AuthenticationService.login({
          // the backend will receive this information
          email: this.email,
          password: this.password
        });
        // We call the setToken action that is from the store and we pass is the action name and the token
        this.$store.dispatch("setToken", response.data.token);
        this.$store.dispatch("setUser", response.data.user);
      } catch (error) {
        // This error comes from AuthenticationService and AuthenticationServicePolicy
        this.error = error.response.data.error;
      }
    }
  }
};
</script>

<style scoped>
.error {
  color: white;
}
</style>

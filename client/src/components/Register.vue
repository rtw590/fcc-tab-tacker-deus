<template>
  <v-layout column>
    <v-flex xs6 offset-sx3 class="mt-5">
      <panel title="Register">
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
            @click="register">
            Register
          </v-btn>
      </panel>
    </v-flex>
  </v-layout>
</template>

<script>
import AuthenticationService from "@/services/AuthenticationService";
import Panel from "@/components/Panel";
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
    // register is the name of the function on the click event
    async register() {
      try {
        const response = await AuthenticationService.register({
          // the backend will receive this information
          email: this.email,
          password: this.password
        });
        // We call the setToken and setUser action that is from the store and we pass is the action name and the token/user
        this.$store.dispatch("setToken", response.data.token);
        this.$store.dispatch("setUser", response.data.user);
      } catch (error) {
        // This error comes from AuthenticationService and AuthenticationServicePolicy
        this.error = error.response.data.error;
      }
    }
  },
  components: {
    Panel
  }
};
</script>

<style scoped>
.error {
  color: white;
}
</style>

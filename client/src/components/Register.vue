<template>
  <div>
    <h1>Register</h1>

    <input 
      type="email" 
      name="email" 
      v-model="email"
      placeholder="email" />
    <br>
    <input 
      type="password" 
      name="password" 
      v-model="password"
      placeholder="password" />
    <br>
    <button 
      @click="register">
      Register
    </button>
  </div>
</template>

<script>
import AuthenticationService from "@/services/AuthenticationService";
export default {
  data() {
    return {
      email: "",
      password: ""
    };
  },
  methods: {
    // Button has on click to call this function from AuthenticationService
    // register is the name of the function on the click event
    async register() {
      // this runction comes from /services/AuthenticationService
      await AuthenticationService.register({
        // the backend will receive this information
        email: this.email,
        password: this.password
      });
    }
  }
};
</script>

<style>
</style>

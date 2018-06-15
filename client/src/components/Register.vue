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
    <div v-html="error" class="error"></div>
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
      password: "",
      error: null
    };
  },
  methods: {
    // Button has on click to call this function from AuthenticationService
    // register is the name of the function on the click event
    async register() {
      try {
        // this runction comes from /services/AuthenticationService
        await AuthenticationService.register({
          // the backend will receive this information
          email: this.email,
          password: this.password
        });
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
  color: red;
}
</style>

<template>
  <div>
    <form action="">
      <label for="email">email</label>
      <input type="email" v-model="email" name="email" />
      <label for="password">password</label>
      <input type="password" v-model="password" name="password" />
      <input type="submit" @click="login" />
    </form>
  </div>
</template>
<script>
export default {
  data() {
    return {
      email: "",
      password: "",
    };
  },
  methods: {
    login(e) {
      e.preventDefault();
      let user = {
        email: this.email,
        password: this.password,
      };
      fetch("http://localhost:9000/user/login", {
        method: "post",
        body: JSON.stringify(user),
        headers: {
          "Content-Type": "application/json",
        },
      })
        .then((res) => res.json())
        .then((data) => {
          data.user.token = data.token;
          this.$store.state.user = data.user;
          sessionStorage.setItem("user", JSON.stringify(data.user));
        });
    },
  },
};
</script>
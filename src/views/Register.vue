<template>
  <div>
    <form action="">
      <label for="name">name</label>
      <input type="text" v-model="name" name="name" />
      <label for="email">email</label>
      <input type="email" v-model="email" name="email" />
      <label for="password">password</label>
      <input type="password" v-model="password" name="password" />
      <input type="submit" @click="register" />
    </form>
  </div>
</template>
<script>
export default {
  data() {
    return {
      name: "",
      email: "",
      password: "",
    };
  },
  methods: {
    register(e) {
      e.preventDefault();
      let user = {
        name: this.name,
        email: this.email,
        password: this.password,
      };
      fetch("http://localhost:9000/user/register", {
        method: "post",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
      }).then((res) => {
        if (res.ok) {
          this.$router.push("login");
        }
      });
    },
  },
};
</script>



<style>
form {
  display: flex;
  flex-direction: column;
  width: 50%;
  height: 350px;
  justify-content: space-around;
  padding: 1em;
  margin: auto;
  background: #ccc;
  border: 1px solid gray;
  border-radius: 15px;
  box-shadow: 0px 0px 15px red;
}
</style>
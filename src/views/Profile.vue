<template>
  <div>
    <h2>welcome {{ name }}</h2>
    <p>your email is {{ email }}</p>
  </div>
</template>
<script>
export default {
  computed: {
    name() {
      return this.$store.state.user.name;
    },
    email() {
      return this.$store.state.user.email;
    },
  },
};
</script>

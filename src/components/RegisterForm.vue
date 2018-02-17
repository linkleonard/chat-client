<template>
  <form @submit.prevent="onFormSubmit">
    <label>Username <input v-model="username" type="text"></label>
    <button type="submit">Register</button>
  </form>
</template>

<script>
export default {
  name: 'RegisterForm',
  props: {
    onSubmit: {
      type: Function,
      required: true,
    },
  },
  methods: {
    onFormSubmit() {
      // TODO: Validation
      const data = { username: this.username };
      this.onSubmit(data);
    },
  },
  data() {
    return {
      username: '',
    };
  },
};
</script>

<style scoped>
form {
  display: flex;
}

input {
  margin: 20px;
}

button {
  padding: 20px;
  background: transparent;
  color: #9a9afa;
  font-weight: 700;
  font-size: 20px;
  border: 1px solid #afafef;
  border-radius: 10px;
  cursor: pointer;
}
</style>

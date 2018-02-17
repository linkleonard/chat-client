<template>
  <section>
    <div class="panel">
      <h2>Register <small>New account</small></h2>
      <register-form :onSubmit="register" />
    </div>
  </section>
</template>

<script>
import RegisterForm from '@/components/RegisterForm';

export default {
  name: 'Register',
  components: {
    'register-form': RegisterForm,
  },
  methods: {
    register() {
      this.$router.push({
        name: 'conversations',
      });
    },
  },
};
</script>

<style scoped>
section {
  display: flex;
  height: 100%;
  justify-content: center;
  align-items: center;
}

div {
  display: flex;
  align-items: center;
  padding: 20px;
  background: transparent;
  border: 2px solid #ccc;
  border-radius: 20px;
}

h2 {
  flex: 0 0 auto;
  margin: 20px;
  font-size: 35px;
}

small {
  display: block;
  font-size: 15px;
  margin: 10px;
}

form {
  flex: 0 0 auto;
  margin: 40px;
}
</style>

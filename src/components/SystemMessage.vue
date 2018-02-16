<template>
  <li>
    <span><slot></slot></span>
  </li>
</template>

<script>
export default {
  name: 'SystemMessage',
};
</script>

<style scoped>
li {
  display: flex;
  padding: 20px;
  border-radius: 20px;
  margin: 10px 20px;
  background: #9f9f9f;
  border: none;
  color: #fafafa;
}

span {
  flex: 1 0 auto;
  display: block;
  text-align: center;
}
</style>

<template>
  <li
    :class="classNames({
      'is-session-user': isSessionUser,
    })"
  >
    <img :src="users[message.user].picture" />
    <span>{{message.text}}</span>
  </li>
</template>

<script>
import classNames from 'classnames';

export default {
  name: 'UserMessage',
  methods: {
    classNames,
  },
  computed: {
    isSessionUser() {
      return this.session && this.message.user === this.session.user;
    },
  },
  props: {
    message: {
      type: Object,
      validator(value) {
        return value.user && value.text;
      },
    },
    users: { type: Object, required: true },
    session: { type: Object },
  },
};
</script>

<style scoped>
li {
  display: flex;
  align-items: flex-start;
}

li img {
  margin: 10px;
  border-radius: 50%;
  height: 50px;
  width: 50px;
  border: 4px solid #cfcfcf;
}

li.is-session-user img {
  border: 4px solid #afafef;
}

li span {
  display: block;
  padding: 20px;
  border-radius: 20px;
  margin: 10px 20px;
  border: 1px solid #cfcfcf;
}

li.is-session-user span {
  border: 1px solid #afafef;
}

</style>

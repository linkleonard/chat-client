<template>
  <div>
    <nav>
      <ul>
        <li v-for="conversation in conversations" :key="conversation.id">
          <router-link
            :to="{name: 'conversations', params: {id: conversation.id}}"
          >
            {{conversation.name}}
          </router-link>
        </li>
      </ul>
    </nav>
    <section>
      <ul>
        <li v-for="message in messages[$route.params.id]" :key="message.id">
          {{message.text}}
        </li>
        <li class="system" v-if="$route.params.id && hasMessages">
          No messages! Send one now.
        </li>
        <li class="system" v-if="!$route.params.id">
          Select a conversation.
        </li>
      </ul>
      <form v-if="$route.params.id" v-on:submit.prevent>
        <textarea rows=3 />
        <button type="submit">Send</button>
      </form>
    </section>
  </div>
</template>

<script>
export default {
  name: 'Conversation',
  computed: {
    hasMessages() {
      return (
        !this.messages[this.$route.params.id] ||
        !this.messages[this.$route.params.id].length
      );
    },
  },
  data() {
    return {
      conversations: [
        {
          id: 'my-chat-id',
          name: 'My chat',
        },
        {
          id: 'my-chat-id-2',
          name: 'My other chat',
        },
      ],
      messages: {
        'my-chat-id': [
          {
            id: 'msg-1',
            text: 'Hello world!',
          },
          {
            id: 'msg-2',
            text: 'Hello world too!',
          },
        ],
      },
      users: {},
    };
  },
};
</script>

<style scoped>
div {
  display: flex;
  flex-flow: row;
  height: 100%;
}

nav {
  flex: 0 0 20%;
  background: #eaeaea;
}

nav >>> a {
  display: block;
  background: #fefefe;
  padding: 10px;
  margin: 5px;
  border-radius: 5px;
  border: 2px solid #aeaeae;
}

section {
  flex: 4 0 auto;
  display: flex;
  flex-flow: column;
}

section ul {
  flex: 1 0 auto;
  display: flex;
  flex-flow: column;
  justify-content: flex-end;
  padding: 10px 0;
}

section li {
  display: block;
  padding: 20px;
  border-radius: 20px;
  margin: 10px 20px;
  border: 1px solid #afafef;
}

section li.system {
  background: #9f9f9f;
  border: none;
  color: #fafafa;
}

section form {
  position: relative;
  flex: 0 0 auto;
  display: flex;
  align-items: stretch;
  padding: 10px 20px;
  border-top: 2px solid #afafaf;
}

section form > * {
  margin: 5px;
}

textarea {
  flex: 1 1 auto;
  resize: none;
}

section form button {
  flex: 0 0 auto;
}
</style>

import Vue from 'vue';
import Router from 'vue-router';
import HelloWorld from '@/components/HelloWorld';
import Conversation from '@/components/Conversation';
import 'reset-css/reset.css';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/conversations/:id?',
      name: 'conversations',
      component: Conversation,
    },
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld,
    },
  ],
});

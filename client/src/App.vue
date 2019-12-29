<template>
  <v-app>
    <Chat/>
  </v-app>
</template>

<script>
import HelloWorld from './components/HelloWorld';
import Chat from './components/Chat';

export default {
  name: 'App',

  components: {
    Chat,
  },

  data: () => ({
    //
  }),
};
</script>

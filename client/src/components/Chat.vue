<template>
    <v-container fluid>
    <v-textarea
    v-model="textarea"
      name="input-7-1"
      filled
      label="Chat"
      auto-grow
      value="The Woodman set to work at once, and so sharp was his axe that the tree was soon chopped nearly through."
    >
    </v-textarea>
        <div class="my-2">
      <v-text-field
            v-model="message"
            :rules="nameRules"
            :counter="10"
            label="chat content"
            required
          >
        </v-text-field>

        <v-btn depressed @click="sendMessage()">
            submit
        </v-btn>
        </div>
  </v-container>
</template>
<script> 
export default {
     name: 'Chat', 
     created() { 
         this.$socket.on('chat', (data)=> { 
             this.textarea += data.message + "\n"
            }) 
        },
        data() {
            return {
                textarea: "",
                message: '',
            } 
        },
        methods: { 
            sendMessage () {
                this.$socket.emit('chat',{
                    message: this.message
                });
                this.textarea += this.message + "\n" 
                this.message = '' 
            } 
        } 
    } 
</script> 
<style> 
.md-app { 
    height: 800px; border: 1px solid rgba(#000, .12); } 
    .md-textarea { height: 300px; }
</style>


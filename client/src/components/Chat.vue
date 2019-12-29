<template>
  <v-container fluid>
<v-toolbar dense>
    <v-app-bar-nav-icon></v-app-bar-nav-icon>

    <v-toolbar-title>Socket.io Chat Example</v-toolbar-title>

    <v-spacer></v-spacer>

    <v-btn icon>
      <v-icon>mdi-magnify</v-icon>
    </v-btn>
        <v-btn icon>
           <v-icon>mdi-heart</v-icon>
        </v-btn>
    <v-btn icon>
        <v-icon>mdi-dots-vertical</v-icon>
    </v-btn>
    </v-toolbar>

      <v-card>
    <v-textarea
    v-model="textarea"
      name="input-7-1"
      filled
      label="Chat"
      auto-grow
      value=""
    >
    </v-textarea>

     <v-card-actions>
      <v-text-field
            v-model="message"
            :rules="nameRules"
            label=""
            required
          >
        </v-text-field>

        <v-btn depressed @click="sendMessage()">
            submit
        </v-btn>
         </v-card-actions>
    </v-card>
  </v-container>
</template>
<script> 
export default {
     name: 'Chat', 
     created() { 
         this.$socket.on('chat', (data)=> { 
             this.textarea += (data.socket_id +" : "+ data.message + "\n") 
            }) 
        },
        data() {
            return {
                textarea: "",
                message: '',
                socket_id:'',
            } 
        },
        methods: { 
            sendMessage () {
                this.$socket.emit('chat',{
                    message: this.message,
                    socket_id: this.$socket.id
                });
                this.textarea += (this.$socket.id +" : "+ this.message + "\n") 
                this.message = '' 
            } 
        } 
    } 
</script> 


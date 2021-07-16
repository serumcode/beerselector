<template>
<v-app-bar
      app
      color="black"
      dark
    >
      <div class="d-flex align-center custom-font">
        
        <v-btn text to="/"><v-icon>mdi-home</v-icon></v-btn>
        <v-btn text to="/beers">Beers</v-btn>
      </div>

      <v-spacer></v-spacer>

     
    </v-app-bar>
</template>
<script>

export default {
  name: 'App',

  data: () => ({
    //
  }),
  created(){
   
  }
};
</script>
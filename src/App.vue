<template>
  <v-app>
    
<navigation />
    <v-main class="mt-9">
      <router-view/>
    </v-main>
  </v-app>
</template>

<script>
 import Navigation from '@/partials/Navigation'
export default {
  name: 'App',

  data: () => ({
    //
  }),
  created(){
   
  },
  components:{
    Navigation
  }
};
</script>
<style lang="scss">
.theme--light.v-text-field--filled > .v-input__control > .v-input__slot {
    background: rgb(249 233 148) !important;
}
.w-100{
  width: 100%;
}
.pointer{
  cursor:pointer
}
#app{
 &:before{
   background-image: url('~@/assets/background.png');
   background-repeat: no-repeat;
   background-size: cover;
   content:'';
   position: fixed;
   width: 100%;
   height: 100%;
 }
}
.custom-font{
  font-family: 'Otomanopee One', sans-serif;
}
.relative{
  position: relative;
}
.pointer{
  cursor:pointer
}
</style>

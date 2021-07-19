<template>
  <v-container class="relative circle-cont">
    <v-responsive class="w-100" :aspect-ratio="1">
      <div
        class="
          circle
          w-100
          fill-height
          relative
          d-flex
          justify-center
          align-center
          text-center
          pointer
        "
        @click="$router.push('beers')"
      >
        <div class="c-title custom-font">
          Beer <br />
          Selector
        </div>
      </div>
    </v-responsive>
  </v-container>
</template>

<script>
export default {
  name: "Home",

  components: {},
};
</script>
<style lang="scss" scoped>
.circle-cont {
  max-width: 700px;
  top: 50%;
  transform: translateY(-50%);

  .circle {
    background: #f9e994;
    border-radius: 50%;
    font-size: 100px;
    border: 15px solid black;
    transition: 0.3s all linear;
    .c-title {
      border-top: 8px solid #b44a61;
      border-bottom: 8px solid #b44a61;
      color: #b44a61;
      transition: 0.3s all linear;
    }
    &:hover {
      background: black;
      .c-title {
        color: #e7b95d;
        border-top: 8px solid #e7b95d;
        border-bottom: 8px solid #e7b95d;
      }
    }
  }
}
@media (max-width: 700px) {
  .circle-cont {
    .circle {
      border: 2vw solid black;
      font-size: 13vw;
      .c-title {
        border-top: 1.5vw solid #b44a61;
        border-bottom: 1.5 solid #b44a61;
      }
    }
  }
}
</style>
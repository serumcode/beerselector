<template>
  <v-container style="" class="black beer-container pa-5">
    <v-row>
      <v-col cols="12" md="4" class="">
        <v-responsive :aspect-ratio="1" class="beer-item w-100 relative">
          <v-img :src="beer.image_url" :aspect-ratio="1" contain />
        </v-responsive>
      </v-col>
      <v-col cols="12" md="8" class="">
        <v-card class="custom-font secondary beer-card relative">
          <v-card-title class="custom-font secondary white--text">
            <h4>{{ beer.name }}</h4>
          </v-card-title>

          <v-divider></v-divider>
          <v-list dense>
            <v-list-item v-for="(item, i) in show_props" :key="i">
              <v-list-item-content class="white--text">{{
                item.text
              }}</v-list-item-content>
              <v-list-item-content class="align-end white--text">
                {{ get_text(item.val) }}
              </v-list-item-content>
            </v-list-item>
          </v-list>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
export default {
  name: "Beer",

  data: () => ({
    beer: {},
    show_props: [
      { val: "abv", text: "Alcohol volume" },
      { val: "boil_volume", text: "Boil volume" },
      { val: "description", text: "Description" },
      { val: "food_pairing", text: "Food Pairing" },
      { val: "contributed_by", text: "Contributed by" },
      { val: "first_brewed", text: "First brewed" },
    ],
  }),
  created() {},
  methods: {
    get_beer() {
      this.axios.get("/beers/" + this.$route.params.id).then((response) => {
        this.beer = response.data[0];
      });
    },
    get_text(val) {
      const v = this.beer[val];
      if (typeof v === "object" && val === "boil_volume") {
        return v.value + " " + v.unit;
      } else if (typeof v === "object" && val === "food_pairing") {
        return v.join(", ");
      }
      return v;
    },
  },
  watch: {},
  mounted() {
    this.get_beer();
  },
  components: {},
};
</script>
<style lang="scss" scoped>
.beer-container {
  border-radius: 10px;
  .v-list {
    background: #af4d60;
  }
}
.beer-card {
  top: 50%;
  transform: translateY(-50%);
}
.beer-item {
  padding: 9% !important;
  overflow: hidden;
  border-radius: 50%;
  top: 50%;
  transform: translateY(-50%);
  &:before {
    content: "";
    width: 100%;
    height: 100%;
    background: #f9e994;
    border-radius: 50%;
    position: absolute;
    left: 0;
    top: 0;
  }
}
</style>
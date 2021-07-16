<template>
  <v-container>
    <v-row class="filter-row pa-2 mb-8">
      <v-col cols="12" sm="6">
        <v-select
          v-model="selected_food"
          filled
          hide-details
          :items="food_items"
          label="Foods"
          rounded
          prepend-inner-icon="mdi-food-fork-drink"
        >
        </v-select>
      </v-col>
      <v-col cols="12" sm="6">
        <v-text-field
          v-model="search"
          label="Search by name"
          filled
          rounded
          hide-details
          prepend-inner-icon="mdi-magnify"
        ></v-text-field>
      </v-col>
    </v-row>
    <v-row>
      <v-col
        cols="12"
        sm="6"
        md="4"
        lg="3"
        v-for="beer in filter_beers"
        :key="beer.name"
      >
        <v-responsive
          :aspect-ratio="1"
          class="beer-item pointer"
          @click="$router.push('/beer/' + beer.id)"
        >
          <v-img :src="beer.image_url" :aspect-ratio="1" contain />
          <div
            class="
              beer-info
              w-100
              fill-height
              d-flex
              justify-center
              align-center
              pa-3
            "
          >
            <div class="custom-font white--text text-center">
              {{ beer.name }}
            </div>
          </div>
        </v-responsive>
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
export default {
  name: "Beers",

  data: () => ({
    beers: [],
    vol: null,
    selected_food: "All food",
    food_items: [],
    search: "",
    filter_beers: [],
  }),
  created() {},
  methods: {
    set_foods(beers) {
      if (Array.isArray(beers)) {
        this.food_items = ["All food"];
        const this_ = this;
        beers.forEach((f) => {
          this.food_items = f.food_pairing.concat(this_.food_items);
        });
        this.food_items = [...new Set(this.food_items)].sort();
      }
    },
    select_beers() {
      if (this.selected_food === "All food") {
        this.filter_beers = this.beers.filter((f) => {
          return (
            this.search === "" ||
            f.name.substr(0, this.search.length).toUpperCase() ===
              this.search.toUpperCase()
          );
        });
      } else {
        this.filter_beers = this.beers.filter((f) => {
          return (
            f.food_pairing.includes(this.selected_food) &&
            (this.search === "" ||
              f.name.substr(0, this.search.length).toUpperCase() ===
                this.search.toUpperCase())
          );
        });
      }
    },
  },
  watch: {
    beers: {
      deep: true,

      handler(nv) {
        this.set_foods(nv);
      },
    },
    selected_food() {
      this.select_beers();
    },
    search() {
      this.select_beers();
    },
  },
  mounted() {
    this.axios.get("/beers").then((response) => {
      if (Array.isArray(response.data)) {
        this.beers = response.data;
        this.filter_beers = this.beers.map((m) => m);
        console.log(this.beers);
      }
    });
  },
  components: {},
};
</script>
<style lang="scss" scoped>
.beer-item {
  padding: 9% !important;
  overflow: hidden;
  border-radius: 50%;
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
  .beer-info {
    position: absolute;
    background: black;
    border-radius: 50%;
    bottom: -100%;
    left: 0;
    transition: 0.3s all linear;
  }
  &:hover {
    .beer-info {
      bottom: 0;
    }
  }
}
.filter-row {
  background: #040404;
  border-radius: 10px;
}
</style>
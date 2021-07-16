<template>
<div>
    <v-row>
      <v-col cols="12" sm="6">
        <v-select
          v-model="selected_food"
          filled
          shaped
          :items="food_items"
          label="Foods"
        >
        </v-select>
      </v-col>
      <v-col cols="12" sm="6">
        <v-text-field
          v-model="search"
          label="Search by name"
          filled
          shaped
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
        <v-responsive :aspect-ratio="1" class="beer-item">
          <v-img :src="beer.image_url" :aspect-ratio="1" contain />
        </v-responsive>
      </v-col>
    </v-row>
    </div>
</template>
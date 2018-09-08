<template>
  <v-app light>
    <section class="black">
      <v-container class="my-0 py-1 pl-0">
        <v-system-bar color="dark" dark>
          <span class="white--text pl-3">Official State of Mississippi Site</span>
        </v-system-bar>
      </v-container>
    </section>

    <section class="primary">
      <v-container grid-list-lg>
        <v-layout row align-center>
          <v-flex xs9>
            <h1 class="display-1 font-weight-medium white--text">Mississippi Succeeds Report Cards</h1>
          </v-flex>
        </v-layout>
      </v-container>
    </section>

    <section class="primary lighten-1">
      <v-container grid-list-xl mt-5 mb-3>
        <v-layout row wrap>
          <v-flex>
            <h1 class="display-2 font-weight-bold white--text">Search, learn and compare data for
              <br />districts and schools in Mississippi.</h1>
          </v-flex>
          <v-flex xs10 mt-5 pb-0>
            <v-card color="grey lighten-5 elevation-15">
              <v-card-text>
                <v-autocomplete
                  v-model="select"
                  :loading="loading"
                  v-on:change="navigate"
                  :items="leas"
                  item-text="EntityDisplayName"
                  item-value="EntityID"
                  :search-input.sync="search"
                  class="mx-3"
                  hide-no-data
                  hide-details
                  label="Search for school or district..."
                  flat
                  large
                  autofocus
                  light
                  >
                  <template slot="item" slot-scope="{ item, tile }">
                    <v-list-tile-avatar v-if="item.EntityGrade == 'F'" color="red darken-4" class="headline font-weight-bold white--text">{{ item.EntityGrade }}</v-list-tile-avatar>
                    <v-list-tile-avatar v-else-if="item.EntityGrade == 'D'" color="orange lighten-1" class="headline font-weight-bold black--text">{{ item.EntityGrade }}</v-list-tile-avatar>
                    <v-list-tile-avatar v-else-if="item.EntityGrade == 'C'" color="yellow lighten-1" class="headline font-weight-bold black--text">{{ item.EntityGrade }}</v-list-tile-avatar>
                    <v-list-tile-avatar v-else-if="item.EntityGrade == 'B'" color="light-blue lighten-4" class="headline font-weight-bold black--text">{{ item.EntityGrade }}</v-list-tile-avatar>
                    <v-list-tile-avatar v-else-if="item.EntityGrade == 'A'" color="light-blue darken-4" class="headline font-weight-bold white--text">{{ item.EntityGrade }}</v-list-tile-avatar>
                    <v-list-tile-content>
                      <v-list-tile-title v-text="item.EntityDisplayName"></v-list-tile-title>
                      <v-list-tile-sub-title v-text="item.EntityCity"></v-list-tile-sub-title>
                    </v-list-tile-content>
                    <v-list-tile-action>
                      <v-chip v-if="item.EntityType == 'State'" color="primary" class="white--text">{{ item.EntityType }}</v-chip>
                      <v-chip v-else-if="item.EntityType == 'District'" color="secondary">{{ item.EntityType }}</v-chip>
                      <v-chip v-else-if="item.EntityType == 'School'" color="info">{{ item.EntityType }}</v-chip>
                    </v-list-tile-action>
                  </template>
                </v-autocomplete>
              </v-card-text>
            </v-card>
          </v-flex>
        </v-layout>
      </v-container>
    </section>

    <section class="mt-5">
      <v-container grid-list-lg>
        <v-layout row justify-center>
          <v-flex xs4>
            <v-card flat>
              <v-card-text class="text-xs-center">
                <v-avatar color="teal" size=80>
                  <span class="white--text display-3 font-weight-black">C</span>
                </v-avatar>
              </v-card-text>
              <v-card-text class="text-xs-center">
                <h1 class="display-2 font-weight-bold pb-2">State Average</h1>
                <h1 class="title font-weight-light">Learn more about state results and subgroups.</h1>
              </v-card-text>
            </v-card>
          </v-flex>
          <v-flex xs4>
            <v-card>
              <v-card-text class="text-xs-center">
                <v-avatar color="error" size=80>
                  <v-icon dark x-large>notifications</v-icon>
                </v-avatar>
              </v-card-text>
              <v-card-text class="text-xs-center">
                <h1 class="display-2 font-weight-bold pb-2">Download Data</h1>
                <h1 class="title font-weight-light">Download the full dataset in spreadsheet format.</h1>
              </v-card-text>
            </v-card>
          </v-flex>
          <v-flex xs4>
            <v-card>
              <v-card-text class="text-xs-center">
                <v-avatar color="secondary" size=80>
                  <v-icon dark x-large>info</v-icon>
                </v-avatar>
              </v-card-text>
              <v-card-text class="text-xs-center">
                <h1 class="display-2 font-weight-bold pb-2">User Guide</h1>
                <h1 class="title font-weight-light">Get an in-depth understanding of the state accountability system.</h1>
              </v-card-text>
            </v-card>
          </v-flex>
        </v-layout>
      </v-container>
    </section>

  </v-app>
</template>

<script>
import leas from "../data/entity.json";

export default {
  data: () => ({
    loading: false,
    search: null,
    select: null,
    leas
  }),
  methods: {
    navigate() {
      this.$router.push({ name: "District", params: { id: this.select } });
    }
  }
};
</script>

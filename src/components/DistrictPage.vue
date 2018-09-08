<template>
  <v-app>

    <section class="black">
      <v-container class="my-0 py-1 pl-0">
        <v-system-bar color="dark" dark>
          <span class="white--text pl-3">Official State of Mississippi Site</span>
        </v-system-bar>
      </v-container>
    </section>

    <section class="teal darken-2">
      <v-container grid-list-lg>
        <v-layout row align-center>
          <v-flex xs12 md9>
            <h1 class="display-2 white--text font-weight-bold">Mississippi Succeeds Report Cards</h1>
          </v-flex>
        </v-layout>
      </v-container>
    </section>

    <section class="white py-5" dark>
      <v-container grid-list-md>
        <v-layout row wrap>
          <v-flex xs12>
            <h1 class="display-2 font-weight-bold">
              {{ entity.EntityDisplayName }}
            </h1>
          </v-flex>
          <v-flex d-flex xs12 sm4>
            <v-card color="purple" dark>
              <v-card-text>Map Box</v-card-text>
            </v-card>
          </v-flex>
          <v-flex xs12 sm8>
            <v-layout row wrap>
              <v-flex xs12>
                <v-card color="red lighten-2" dark>
                  <v-card-text>Superintendent {{ entity.EntityContactName }}</v-card-text>
                </v-card>
              </v-flex>
              <v-flex xs12>
                <v-card color="red lighten-2" dark>
                  <v-card-text>{{ entity.EntityAddress }}, {{ entity.EntityCity }}</v-card-text>
                </v-card>
              </v-flex>
              <v-flex xs12>
                <v-card color="red lighten-2" dark>
                  <v-card-text>Contact Info</v-card-text>
                </v-card>
              </v-flex>
            </v-layout>
          </v-flex>

          <v-flex xs12 sm3>
            <v-card color="blue-grey darken-2" class="white--text">
              <v-card-title>
                <div class="title">Accountability Grade</div>
                <div class="display-4">{{ entity.EntityGrade }}</div>
              </v-card-title>
            </v-card>
          </v-flex>
          <v-flex xs12 sm3>
            <v-card color="blue-grey darken-2" class="white--text">
              <v-card-title>
                <div class="title">Graduation Rate</div>
                <div class="display-4">98%</div>
              </v-card-title>
            </v-card>
          </v-flex>
          <v-flex xs12 sm3>
            <v-card color="blue-grey darken-2" class="white--text">
              <v-card-title>
                <div class="title">Students per Teacher</div>
                <div class="display-4">13</div>
              </v-card-title>
            </v-card>
          </v-flex>
          <v-flex xs12 sm3>
            <v-card color="blue-grey darken-2" class="white--text">
              <v-card-title>
                <div class="title">Experienced Teachers</div>
                <div class="display-4">75%</div>
              </v-card-title>
            </v-card>
          </v-flex>
        </v-layout>
      </v-container>
    </section>

    <section class="deep-orange lighten-4 my-0">
      <v-container class="my-0 py-0">
        <v-breadcrumbs large mb-0>
          <v-breadcrumbs-item>State</v-breadcrumbs-item>
          <v-breadcrumbs-item v-if="entity.EntityType == 'District'">{{ entity.EntityDisplayName }}</v-breadcrumbs-item>
          <v-breadcrumbs-item v-else-if="entity.EntityType == 'School'">{{ entity.ParentEntityName }}</v-breadcrumbs-item>
          <v-breadcrumbs-item v-if="entity.EntityType == 'School'">{{ entity.EntityDisplayName }}</v-breadcrumbs-item>
        </v-breadcrumbs>
      </v-container>
    </section>

    <section class="light-blue lighten-4 py-5">
      <v-container>
        <v-layout>
          <v-flex xs12 sm8>
            <h1 class="display-2 font-weight-black">Accountability Components</h1>
            <p class="subheading">The Mississippi Statewide Accountability System is a single "A" through "F" school and district accountability system. Click any chart to get detailed information on the measure.</p>
          </v-flex>
        </v-layout>
      </v-container>
    </section>

    <section class="light-blue lighten-5">
      <v-container grid-list-xl>
        <div class="my-4">
          <h1 class="display-1 font-weight-bold">Math Components</h1>
          <h1 class="subheading">Measurements of student performance on the statewide math assessment.</h1>
        </div>
        <v-layout row wrap>
          <v-flex xs12 sm6 md3 v-for="card in mathCards">
            <props-card :card="card"></props-card>
          </v-flex> -->
        </v-layout>
      </v-container>
    </section>

    <section class="gray lighten-5">
      <v-container grid-list-xl>
        <div class="my-4">
          <h1 class="display-1 font-weight-bold">Math Components</h1>
          <h1 class="subheading">Measurements of student performance on the statewide math assessment.</h1>
        </div>
        <v-layout row wrap>
          <v-flex xs12 align-center v-for="card in mathCards">
            <v-card>
              <v-container grid-list-xl>
              <v-layout row>
                <v-flex xs1>
                  <img :src="card.cardIcon">
                  </v-flex>
                  <v-flex xs5>
                    <h1 class="headline font-weight-bold">{{ card.cardName }}</h1>
                    <p class="subheading">{{ card.cardText }}</p>
                    </v-flex>
                    <v-flex xs3>
                      <h1 class="display-4 font-weight-black">87%</h1>
                      </v-flex>
                    <v-flex xs3>
                      <img src="../assets/bars.png" width="100%">
                      </v-flex>
                    <v-btn fab small right bottom absolute dark color="pink" @click="show = !show"><v-icon large>{{ show ? 'arrow_drop_up' : 'arrow_drop_down' }}</v-icon></v-btn>
                  </v-layout>
                  </v-container>
                  <v-slide-y-transition>
          <v-card-text v-show="show">
            <v-layout>
              <v-flex>
            <img src="../assets/combo-chart.png" width="90%">
            </v-flex>
            </v-layout>
          </v-card-text>
        </v-slide-y-transition>
              </v-card>
          </v-flex>
          <!-- <v-flex xs12 sm6 v-for="card in mathCards">
            <props-card :card="card"></props-card>
          </v-flex> -->
        </v-layout>
      </v-container>
    </section>

    <section class="light-blue lighten-4">
      <v-container grid-list-xl>
        <div class="my-4">
          <h1 class="display-1 font-weight-bold">English Components</h1>
          <h1 class="title">Measurements of student performance on the statewide English assessment.</h1>
        </div>
        <v-layout row wrap>
          <v-flex xs12 sm6 md3 v-for="card in englishCards">
            <props-card :card="card"></props-card>
          </v-flex>
        </v-layout>
      </v-container>
    </section>

    <section class="light-blue lighten-5">
      <v-container grid-list-xl>
        <div class="my-4">
          <h1 class="display-1 font-weight-bold">Other Components</h1>
          <h1 class="title">Measurements of student performance on the statewide English assessment.</h1>
        </div>
        <v-layout row wrap>
          <v-flex xs12 sm6 md3 v-for="card in otherCards">
            <props-card :card="card"></props-card>
          </v-flex>
        </v-layout>
      </v-container>
    </section>

  </v-app>
</template>

<script>
import json from "../data/essa-all-data.json";
import PropsCard from "../components/charts/PropsCard.vue";
import GaugeCard from "../components/charts/GaugeCard.vue";

export default {
  components: {
    PropsCard,
    GaugeCard
  },
  data() {
    return {
      dialog: false,
      loading: false,
      show: false,
      entity: [],
      avatars: [
      { title: 'Jason Oner', avatar: 'https://cdn.vuetifyjs.com/images/lists/1.jpg' },
          { title: 'Travis Howard', avatar: 'https://cdn.vuetifyjs.com/images/lists/2.jpg' },
          { title: 'Ali Connors', avatar: 'https://cdn.vuetifyjs.com/images/lists/3.jpg' },
          { title: 'Cindy Baker', avatar: 'https://cdn.vuetifyjs.com/images/lists/4.jpg' }
      ],
      mathCards: [
        {
          cardName: "Math Performance",
          cardText: "blah blah blah about MP goes here it looks better if it wraps",
          cardIcon: require("../assets/calculator.svg"),
          chartData: [
            { name: "School", data: [45] },
            { name: "District", data: [48] },
            { name: "State", data: [72] }
          ]
        },
        {
          cardName: "Math Growth",
          cardText: "blah blah blah about match growth goes here",
          cardIcon: require("../assets/museum.svg"),
          chartData: [
            { name: "School", data: [45] },
            { name: "District", data: [48] },
            { name: "State", data: [72] }
          ]
        },
        {
          cardName: "Math Growth, L25%",
          cardText: "blah blah blah about match growth L25% goes here",
          cardIcon: require("../assets/test-tube.svg"),
          chartData: [
            { name: "School", data: [23] },
            { name: "District", data: [25] },
            { name: "State", data: [43] }
          ]
        }
      ],
      englishCards: [
        {
          cardName: "English Proficiency",
          cardText: "blah blah blah goes here",
          chartData: [
            { name: "School", data: [78] },
            { name: "District", data: [80] },
            { name: "State", data: [83] }
          ]
        },
        {
          cardName: "English Growth",
          cardText: "blah blah blah about match growth goes here",
          chartData: [
            { name: "School", data: [45] },
            { name: "District", data: [48] },
            { name: "State", data: [72] }
          ]
        },
        {
          cardName: "English Growth, L25%",
          cardText: "blah blah blah about match growth L25% goes here",
          chartData: [
            { name: "School", data: [23] },
            { name: "District", data: [25] },
            { name: "State", data: [43] }
          ]
        }
      ],
      otherCards: [
        {
          cardName: "US History Proficiency",
          cardText: "blah blah blah goes here",
          chartData: [
            { name: "School", data: [78] },
            { name: "District", data: [80] },
            { name: "State", data: [83] }
          ]
        },
        {
          cardName: "Science Growth",
          cardText: "blah blah blah about match growth goes here",
          chartData: [
            { name: "School", data: [45] },
            { name: "District", data: [48] },
            { name: "State", data: [72] }
          ]
        },
        {
          cardName: "College & Career Readiness",
          cardText: "blah blah blah about match growth L25% goes here",
          chartData: [
            { name: "School", data: [23] },
            { name: "District", data: [25] },
            { name: "State", data: [43] }
          ]
        },
        {
          cardName: "Acceleration",
          cardText: "blah blah blah goes here",
          chartData: [
            { name: "School", data: [78] },
            { name: "District", data: [80] },
            { name: "State", data: [83] }
          ]
        },
        {
          cardName: "Graduation Rate",
          cardText: "blah blah blah about match growth goes here",
          chartData: [
            { name: "School", data: [45] },
            { name: "District", data: [48] },
            { name: "State", data: [72] }
          ]
        },
        {
          cardName: "English Leaner",
          cardText: "blah blah blah about match growth L25% goes here",
          chartData: [
            { name: "School", data: [23] },
            { name: "District", data: [25] },
            { name: "State", data: [43] }
          ]
        }
      ]
    };
  },
  mounted() {
    this.entity = json.find(item => item.EntityId === this.$route.params.id);
  }
};
</script>

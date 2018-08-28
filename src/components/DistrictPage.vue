<template>
  <v-app>
    <section class="black">
      <v-container class="my-0 py-1 pl-0">
        <v-system-bar color="dark" dark>
          <span class="white--text pl-3">Official State of Mississippi Site</span>
        </v-system-bar>
      </v-container>
    </section>

    <section class="grey lighten-2">
      <v-container grid-list-lg>
        <v-layout row align-center>
          <v-flex xs12 md9>
            <h1 class="display-1 font-weight-bold">Mississippi Succeeds Report Cards</h1>
          </v-flex>
        </v-layout>
      </v-container>
    </section>


    <section class="white py-5" dark>
      <v-container grid-list-md>
        <v-layout row wrap>
          <v-flex xs12>
            <h1 class="display-2 font-weight-bold">{{ entity.EntityDisplayName }} {{ $route.params.id }}</h1>
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
                  <v-card-text>Superintendent</v-card-text>
                  </v-card>
              </v-flex>
              <v-flex xs12>
                <v-card color="red lighten-2" dark>
                  <v-card-text>Address</v-card-text>
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

    <section class="light-blue lighten-4">
      <v-container>
        <v-layout column wrap>
          <v-flex xs12 sm4>
            <h2 class="display-2 font-weight-black">Accountability Components</h2>
          </v-flex>
        </v-layout>
      </v-container>
    </section>

    <section class="light-blue lighten-5">
      <v-container grid-list-sm>
        <v-layout row wrap>
          <v-flex xs12 class="display-1 font-weight-bold">Math Components</v-flex>
          <v-flex xs12 class="title">Measurements of student performance on the statewide math assessment.</v-flex>
          <v-flex xs12>
            <v-card color="deep-orange">
            <v-layout row wrap>
              <v-flex class="yellow lighten-3 pa-2">
                <div class="display-2 font-weight-black">78%</div>
                </v-flex>
              <v-flex class="teal lighten-5 pa-2">
                <h1 class="title">Math Proficiency</h1>
                <p class="body-1">Percentage of students who scored proficient (levels 4 + 5) on the state math assessment</p>
                </v-flex>
                <v-flex class="blue lighten-5">
                  <h1 class="title">Higher than state average</h1>
                  <h1 class="title">Lower than district average</h1>
                </v-flex>
            </v-layout>
            </v-card>
          </v-flex>
        </v-layout>
      </v-container>
    </section>

    <section class="light-blue lighten-4">
      <v-container>
        <v-layout column wrap>
          <v-flex xs12 sm4>
            <h2 class="display-2 font-weight-black">Accountability Components</h2>
          </v-flex>
        </v-layout>
      </v-container>
    </section>

    <section class="light-blue lighten-5">
      <v-container grid-list-sm>
        <v-layout row wrap v-for="accountabilityItem in accountabilityItems" class="py-4">
          <v-flex xs12 class="display-1 font-weight-bold">{{ accountabilityItem.group }}</v-flex>
          <v-flex xs12 class="title">{{ accountabilityItem.text }}</v-flex>
          <v-flex xs10 md6 lg4 v-for="subitem in accountabilityItem.items">
            <v-card flat>
              <v-card-media>
                <bar-chart :data="[['Mississippi', 65], ['District', 70], ['School', 83]]" height="200px"></bar-chart>
              </v-card-media>
              <!-- <v-card-text class="pb-0">
                <img src="@/assets/bars.png" class="image mx-3 mt-3" alt="lorem" width="100%">
                <h1 class="display-4 font-weight-black">{{ subitem.value }}</h1>
              </v-card-text> -->
              <v-card-title class="pt-0">
                <div>
                  <h1 class="title font-weight-bold mb-0">{{ subitem.name }}</h1>
                  <p class="body-2 mb-0">{{ subitem.text }}</p>
                </div>
              </v-card-title>
            </v-card>
          </v-flex>
        </v-layout>
      </v-container>
    </section>

    <section class="teal lighten-4">
      <v-container>
        <v-layout column wrap>
          <v-flex xs12 sm4>
            <h2 class="display-2 font-weight-bold">Student Assessment</h2>
          </v-flex>
        </v-layout>
      </v-container>
    </section>

    <section class="teal lighten-5">
      <v-container grid-list-sm>
        <v-layout row wrap v-for="assessmentItem in assessmentItems" class="py-4">
          <v-flex xs12 class="display-1 font-weight-bold">{{ assessmentItem.group }}</v-flex>
          <v-flex xs12 class="title">{{ assessmentItem.text }}</v-flex>
          <v-flex xs10 md6 lg3 v-for="subitem in assessmentItem.items">
            <v-card flat class="transparent">
              <v-card-text class="pb-0">
                <!-- <img src="@/assets/bars.png" class="image mx-3 mt-3" alt="lorem" width="100%"> -->
                <h1 class="display-4 font-weight-black">{{ subitem.value }}</h1>
              </v-card-text>
              <v-card-title class="pt-0">
                <div>
                  <h1 class="title font-weight-bold mb-0">{{ subitem.name }}</h1>
                  <p class="subheading mb-0">Stuff about math performance.</p>
                </div>
              </v-card-title>
            </v-card>
          </v-flex>
        </v-layout>
      </v-container>
    </section>

    <section class="deep-orange lighten-4">
      <v-container>
        <v-layout column wrap>
          <v-flex xs12 sm4>
            <h2 class="display-2 font-weight-bold">Climate & Safety</h2>
          </v-flex>
        </v-layout>
      </v-container>
    </section>

    <section class="deep-orange lighten-5">
      <v-container grid-list-sm>
        <v-layout row wrap v-for="otherItem in otherItems" class="py-4">
          <v-flex xs12 class="display-1 font-weight-bold">{{ otherItem.group }}</v-flex>
          <v-flex xs12 class="title">{{ otherItem.text }}</v-flex>
          <v-flex xs10 md6 lg3 v-for="subitem in otherItem.items">
            <v-card flat class="transparent">
              <v-card-text class="pb-0">
                <!-- <img src="@/assets/bars.png" class="image mx-3 mt-3" alt="lorem" width="100%"> -->
                <h1 class="display-4 font-weight-black">{{ subitem.value }}</h1>
              </v-card-text>
              <v-card-title class="pt-0">
                <div>
                  <h1 class="title font-weight-bold mb-0">{{ subitem.name }}</h1>
                  <p class="subheading mb-0">Stuff about math performance.</p>
                </div>
              </v-card-title>
            </v-card>
          </v-flex>
        </v-layout>
      </v-container>
    </section>


  </v-app>
</template>

<script>
  import json from '../data/entity.json'

  export default {
    data () {
      return {
        dialog: false,
        loading: false,
        entity: []
      }
    },
    mounted () {
      this.entity = json.find(item => item.EntityID === this.$route.params.id)
    }
  }
</script>

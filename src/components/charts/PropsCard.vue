<template>
  <v-card>
    <v-toolbar flat dense extended color="blue-grey darken-3" dark>
      <v-toolbar-title>{{ card.cardName }}</v-toolbar-title>
      <v-toolbar-item slot="extension">
        <p>{{ card.cardText }}</p>
      </v-toolbar-item>
    </v-toolbar>
    <v-img>
      <apexcharts type="bar" :options="chartOptions" :series="card.chartData"></apexcharts>
    </v-img>
    <v-card-actions>
        <v-btn flat color="purple">Details</v-btn>
          <v-spacer></v-spacer>
          <v-btn icon @click="show = !show">
            <v-icon>{{ show ? 'keyboard_arrow_down' : 'keyboard_arrow_up' }}</v-icon>
          </v-btn>
        </v-card-actions>
        <v-slide-y-transition>
          <v-card-text v-show="show">
            A bunch of stuff about this data can go right here.
          </v-card-text>
        </v-slide-y-transition>
    </v-card-actions>
  </v-card>
</template>

<script>
import VueApexCharts from 'vue-apexcharts'

export default {
  props: ['card'],
  components: {
    apexcharts: VueApexCharts
  },
  data () {
    return {
      show: false,
      chartOptions: {
        chart: {
          id: 'vuechart-example'
        },
        xaxis: {
          categories: [''],
          labels: {
            show: false
          }
        },
        yaxis: {
          labels: {
            show: false
          }
        },
        colors: ['#1b9e77', '#d95f02', '#7570b3'],
        grid: {
          show: false
        }
      }
    }
  }
}
</script>

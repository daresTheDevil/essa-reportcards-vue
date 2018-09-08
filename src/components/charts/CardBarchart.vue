<template>
  <v-card>
    <v-toolbar flat dense extended color="cyan darken-2" dark>
      <v-toolbar-title>Math Proficiency</v-toolbar-title>
      <v-toolbar-item slot="extension">
        <p>This right here. I wonder if it will go to two lines that would be dope.</p>
      </v-toolbar-item>
    </v-toolbar>
    <v-img>
      <apexcharts type="bar" :options="chartOptions" :series="series"></apexcharts>
    </v-img>
    <v-card-actions>
      <v-btn block color="orange">Share</v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
import VueApexCharts from 'vue-apexcharts'

export default {
  components: {
    apexcharts: VueApexCharts
  },
  data () {
    return {
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
      },
      series: [
        { name: 'School', data: [30] },
        { name: 'District', data: [40] },
        { name: 'State', data: [45] }
      ]
    }
  }
}
</script>

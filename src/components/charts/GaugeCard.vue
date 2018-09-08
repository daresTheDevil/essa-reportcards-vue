<template>
    <v-app>
      <apexcharts type="radialBar" :options="chartOptions" :series="card.chartData"></apexcharts>
    </v-app>
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
        plotOptions: {
          radialBar: {
            startAngle: -90,
            endAngle: 90
            // track: {
            //   show: true,
            //   background: "#FFF",
            //   strokeWidth: '97%',
            //   margin: 5,
            //   shadow: {
            //     enabled: true,
            //     top: 2,
            //     left: 0,
            //     color: '#999',
            //     opacity: 1,
            //     blur: 2
            },
            dataLabels: {
              showOn: 'always',
              name: { show: false },
              value: {
                show: true,
                offsetY: 0,
                fontSize: '6rem',
                fontWeight: 'bold'
              }
            }
            // }
          },
        //},
        fill: {
          gradient: {
            enabled: true,
            shade: 'light',
            shadeIntensity: 0.4,
            inverseColors: false,
            opacityFrom: 1,
            opacityTo: 1,
            stops: [0, 50, 53, 91]
          },
        }
      }
    }
  }
}
</script>

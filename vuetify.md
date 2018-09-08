# Vuetify

### Headings
```
.display-4      .display-3    .display-2    .display-1
.headline   .title  .subheading    .body-2   .body-1   .caption
```

### Weight
```
.font-weight-thin   .font-weight-light  .font-weight-regular
.font-weight-medium .font-weight-bold   .font-weight-black

.font-weight-thin.font-italic   .font-weight-light.font-italic  .font-weight-regular.font-italic
.font-weight-medium.font-italic .font-weight-bold.font-italic   .font-weight-black.font-italic
```

### Theme colors
<span style="color: #001f3f; font-weight: 800">primary: #001f3f</span>
<span style="color: #39cccc; font-weight: 800">secondary: #39cccc</span>
<span style="color: #f012be; font-weight: 800">accent: #f012be</span>
<span style="color: #2ecc40; font-weight: 800">success: #2ecc40</span>
<span style="color: #7fdbff; font-weight: 800">info: #7fdbff</span>
<span style="color: #ffdc00; font-weight: 800">warning: #ffdc00</span>
<span style="color: #85144b; font-weight: 800">error: #85144b</span>

### Main Colors
<span style="color: #F44336; font-weight: 800">red: #F44336</span>
<span style="color: #E91E63; font-weight: 800">pink: #E91E63</span>
<span style="color: #9C27B0; font-weight: 800">purple: #9C27B0</span>
<span style="color: #673AB7; font-weight: 800">deep-purple: #673AB7</span>
<span style="color: #3F51B5; font-weight: 800">indigo: #3F51B5</span>
<span style="color: #2196F3; font-weight: 800">blue: #2196F3</span>
<span style="color: #03A9F4; font-weight: 800">light-blue: #03A9F4</span>
<span style="color: #00BCD4; font-weight: 800">cyan: #00BCD4</span>
<span style="color: #009688; font-weight: 800">teal: #009688</span>
<span style="color: #4CAF50; font-weight: 800">green: #4CAF50</span>
<span style="color: #8BC34A; font-weight: 800">light-green: #8BC34A</span>
<span style="color: #CDDC39; font-weight: 800">lime: #CDDC39</span>
<span style="color: #FFEB3B; font-weight: 800">yellow: #FFEB3B</span>
<span style="color: #FFC107; font-weight: 800">amber: #FFC107</span>
<span style="color: #FF9800; font-weight: 800">orange: #FF9800</span>
<span style="color: #FF5722; font-weight: 800">deep-orange: #FF5722</span>
<span style="color: #795548; font-weight: 800">brown: #795548</span>
<span style="color: #607D8B; font-weight: 800">blue-grey: #607D8B</span>
<span style="color: #9E9E9E; font-weight: 800">grey: #9E9E9E</span>

# Charts

```js
data () {
      return {
        chartOptions: {
          chart: {
            id: 'gaugeChart'
          },
          plotOptions: {
            radialBar: {
              startAngle: -90,
              endAngle: 90,
              dataLabels: {
                name: {
                  show: false
                },
                value: {
                  offsetY: -3,
                  fontSize: '2rem'
                }
              }
            }
          }
        },
        pattern: ['horizontalLines', 'slantedLines', 'squares'],
        series: [76, 67, 61],

        <apexcharts type="radialBar" :options="chartOptions" :series="series"></apexcharts>
```


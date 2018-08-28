<template>
  <v-app>
    <v-footer class="primary" dark>
    <v-container>
      <v-card class="transparent">
        <v-card-text>
          Top area
        </v-card-text>
        <v-card-text>
          <div>&copy; {{ new Date().getFullYear() }} Mississippi Department of Education</div>
      <v-spacer></v-spacer>
      <div>
        <v-btn v-for="icon in icons" :key="icon" class="mx-3 dark--text" icon>
          <v-icon size="24px">{{ icon }}</v-icon>
        </v-btn>
      </div>
      <v-spacer></v-spacer>
      <div>A project of the
        <strong>Office of Technology & Strategic Services</strong>
      </div>
        </v-card-text>
      </v-card>
    </v-container>
    </v-footer>
  </v-app>
</template>

<script>
  export default {
    name: 'App',
    data: () => ({
      icons: [
        'fab fa-facebook',
        'fab fa-twitter',
        'fab fa-google-plus',
        'fab fa-github'
      ],
      links: [{
        title: 'Home',
        path: '/',
        icon: 'home'
      },
      {
        title: 'District',
        path: '/district',
        icon: 'face'
      },
      {
        title: 'School',
        path: '/school',
        icon: 'lock_open'
      },
      {
        title: 'Secondary',
        path: '/secondary',
        icon: 'house'
      }
      ]
    })
  }
</script>

/* eslint-disable */
<template>
  <v-app>
    <v-content>
      <router-view/>
    </v-content>
    <v-footer dark height="auto">
      <v-card class="flex" flat tile>
        <v-card-title class="primary lighten-2">
          <v-spacer>
          <v-btn v-for="link in links" :key="link.title" :to="link.path" class="mx-3">
            {{ link.title }}
          </v-btn>
          </v-spacer>
        </v-card-title>
        <v-card-actions class="primary justify-center">
          <div><strong class="subheading">&copy;2018 — Mississippi Department of Education</strong></div>
          <v-spacer></v-spacer>
          <div>
          <v-btn v-for="icon in icons" :key="icon" class="mx-3" dark icon>
            <v-icon size="24px">{{ icon }}</v-icon>
          </v-btn>
          </div>
          <div>
            A project fo the Office of Technology & Strategic Services
          </div>
        </v-card-actions>
      </v-card>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  name: "App",
  data: () => ({
    icons: [
      "fab fa-facebook",
      "fab fa-twitter",
      "fab fa-youtube",
      "fab fa-github"
    ],
    links: [
      {
        title: "Home",
        path: "/",
        icon: "home"
      },
      {
        title: "District",
        path: "/district",
        icon: "face"
      },
      {
        title: "School",
        path: "/school",
        icon: "lock_open"
      },
      {
        title: "Secondary",
        path: "/secondary",
        icon: "house"
      },
      {
        title: "Card",
        path: "/maincard",
        icon: "data"
      }
    ]
  })
};
</script>

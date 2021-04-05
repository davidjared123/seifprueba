<template>
  <v-app>

     <v-navigation-drawer
     app
      v-model="drawer"
      :mini-variant.sync="mini"
      permanent
      absolute
    >
      <v-list-item class="px-2">
        <v-list-item-avatar>
          <v-img src="https://randomuser.me/api/portraits/men/85.jpg"></v-img>
        </v-list-item-avatar>

        <v-list-item-title>David Pérez</v-list-item-title>

        <v-btn
          icon
          @click.stop="mini = !mini"
        >
          <v-icon>mdi-chevron-left</v-icon>
        </v-btn>
      </v-list-item>

      <v-spacer></v-spacer>

      <v-list 
      
      dense block>
        <v-list-item
          v-for="item in items"
          :key="item.title"
          link
        >
          <v-list-item-icon to=''>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar color='white' flat dense class="px-13">
      <h1 class="title">Centro de ayudas Seif</h1>

    </v-app-bar>

    <v-main>
      <router-view></router-view>
    </v-main>
  </v-app>
</template>

<script>

export default {
  name: 'App',

  components: {
    
  },

  data: () => ({
    drawer: true,
        items: [
          { title: 'Vista principal', icon: 'mdi-home-city', link:'/' },
          { title: 'Material', icon: 'mdi-account', link:'/MaterialApoyo' },
          { title: 'Preguntas', icon: 'mdi-account-group-outline', link:'/Preguntas' },
        ],
        mini: true,
  }),
};
</script>

<style scoped>
  .title{
    font-size: 2em !important;
  }
</style>

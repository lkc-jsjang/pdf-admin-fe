<template>
   <v-navigation-drawer app v-model="project.drawer" :mini-variant="project.mini" clipped permanent color="lime lighten-1" width="340">

   <v-list dense>

      <v-list-item-group v-model="SelectedMenu">
        <v-list-item v-for="menu in menus_L0_1" :key="menu.id" link :to="menu.url">
            <v-list-item-icon>
               <v-icon>{{ menu.icon }}</v-icon>
            </v-list-item-icon>
            <v-list-item-content>
               <v-list-item-title class="text-button font-weight-bold">{{ menu.name }}</v-list-item-title>
            </v-list-item-content>
        </v-list-item>
     </v-list-item-group>

     <v-list-group :value="true" prepend-icon="mdi-account-cog" color="grey darken-3">
        <template v-slot:activator>
          <v-list-item-title class="text-button font-weight-bold">{{ menus_L0_2[0].name}}</v-list-item-title>
        </template>

        <v-list-group sub-group :value="false" color="grey darken-3">
          <template v-slot:activator >
            <v-list-item-content>
               <v-list-item-title class="text-button font-weight-bold">{{ menus_L0_L1_1[0].name }}</v-list-item-title>
            </v-list-item-content>
          </template>

          <v-list-item v-for="menu in menus_L0_L1_1_L2" :key="menu.id" link :to="menu.url">
              <v-list-item-icon>
                  <v-icon>{{ menu.icon }}</v-icon>
              </v-list-item-icon>          
              <v-list-item-content>
                  <v-list-item-title class="submenu">{{ menu.name }}</v-list-item-title>
              </v-list-item-content>
          </v-list-item>
        </v-list-group>

        <v-list-group sub-group :value="false" color="grey darken-3">
          <template v-slot:activator >
            <v-list-item-content>
               <v-list-item-title class="text-button font-weight-bold">{{ menus_L0_L1_2[0].name }}</v-list-item-title>
            </v-list-item-content>
          </template>

          <v-list-item v-for="menu in menus_L0_L1_2_L2" :key="menu.id" link :to="menu.url">
              <v-list-item-icon>
                  <v-icon>{{ menu.icon }}</v-icon>
              </v-list-item-icon>          
              <v-list-item-content>
                  <v-list-item-title class="submenu">{{ menu.name }}</v-list-item-title>
              </v-list-item-content>
          </v-list-item>
        </v-list-group>        

        <v-list-group sub-group :value="false" color="grey darken-3">
          <template v-slot:activator >
            <v-list-item-content>
               <v-list-item-title class="text-button font-weight-bold">{{ menus_L0_L1_3[0].name }}</v-list-item-title>
            </v-list-item-content>
          </template>

          <v-list-item v-for="menu in menus_L0_L1_3_L2" :key="menu.id" link :to="menu.url">
              <v-list-item-icon>
                  <v-icon>{{ menu.icon }}</v-icon>
              </v-list-item-icon>          
              <v-list-item-content>
                  <v-list-item-title class="submenu">{{ menu.name }}</v-list-item-title>
              </v-list-item-content>
          </v-list-item>
        </v-list-group>                

        <v-list-group sub-group :value="false" color="grey darken-3">
          <template v-slot:activator >
            <v-list-item-content>
               <v-list-item-title class="text-button font-weight-bold">{{ menus_L0_L1_4[0].name }}</v-list-item-title>
            </v-list-item-content>
          </template>

          <v-list-item v-for="menu in menus_L0_L1_4_L2" :key="menu.id" link :to="menu.url">
              <v-list-item-icon>
                  <v-icon>{{ menu.icon }}</v-icon>
              </v-list-item-icon>          
              <v-list-item-content>
                  <v-list-item-title class="submenu">{{ menu.name }}</v-list-item-title>
              </v-list-item-content>
          </v-list-item>
        </v-list-group>        

      </v-list-group>     
  </v-list>

   </v-navigation-drawer>
</template>

<script>
import { mapState } from 'vuex';

export default {
   name: 'SideBar',
   computed: {
      ...mapState(['project', 'menus_L0_1', 'menus_L0_2', 'menus_L0_L1_1', 'menus_L0_L1_2', 'menus_L0_L1_3', 'menus_L0_L1_4',
      'menus_L0_L1_1_L2', 'menus_L0_L1_2_L2', 'menus_L0_L1_3_L2', 'menus_L0_L1_4_L2'])
   },
   data() {
     return {
      not_link: '/about',
     }
   },
   methods: {
     goPageUrl(url) {
          if (this.$route.path != url) {
            this.$router.push({ path: url});
          }
     }
   }
};

</script>

<style scope>
.submenu {
  font-size: 0.875rem !important;
}
</style>
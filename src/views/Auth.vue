<template>
<v-container fill-height fluid class="ma-0 pa-0">
<v-row dense no-gutters>
  <v-col>
    <!-- 메뉴 title -->
    <v-row no-gutters class="mt-2 mb-2" style="height:50px;">
        <v-col class="my-auto align-center" style="text-align:center;">
           <v-card outline dark max-width="400" height="40" class="teal darken-3 d-flex mx-auto align-center justify-center font-weight-bold" style="font-size:13pt;">
              메뉴별 권한관리
           </v-card>
        </v-col>
    </v-row>

    <!-- 페이지별로 width/height size 조정이 필요함 -->
    <v-row no-gutters style="width:100%; min-width:1000px; height:860px;">
        <v-col class="grey lighten-3 pt-5 pl-4">
            <v-icon color="blue darken-1">mdi-code-greater-than</v-icon>
            <v-row>
            <v-col cols="12" sm="6" md="4">
      <v-menu
        ref="menu"
        v-model="menu"
        :close-on-content-click="false"
        :return-value.sync="date"
        transition="scale-transition"
        offset-y
        min-width="auto"
      >
        <template v-slot:activator="{ on, attrs }">
          <v-text-field
            v-model="date"
            label="Picker in menu"
            prepend-icon="mdi-calendar"
            readonly
            v-bind="attrs"
            v-on="on"
          ></v-text-field>
        </template>
        <v-date-picker
          v-model="date"
          no-title
          scrollable
        >
          <v-spacer></v-spacer>
          <v-btn
            text
            color="primary"
            @click="menu = false"
          >
            Cancel
          </v-btn>
          <v-btn
            text
            color="primary"
            @click="$refs.menu.save(date)"
          >
            OK
          </v-btn>
        </v-date-picker>
      </v-menu>
          </v-col>
          </v-row>            
        </v-col>
    </v-row>    
  </v-col>
</v-row>
</v-container>
</template>

<script>

export default {
    name: 'Auth',
    data: () => ({
      date: (new Date(Date.now() - (new Date()).getTimezoneOffset() * 60000)).toISOString().substr(0, 10),
      menu: false,
      modal: false,
      menu2: false,
    }),
}

</script>

<style scoped>
.container {
    align-items: start;
}
</style>

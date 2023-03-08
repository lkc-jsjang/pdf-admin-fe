<template>
<v-container fill-height fluid class="ma-0 pa-0">
<v-row dense no-gutters>
  <v-col>
    
    <!-- 메뉴 title -->
    <v-row no-gutters class="mt-2 mb-2" style="height:50px;">
        <v-col class="my-auto align-center" style="text-align:center;">
           <v-card outline dark max-width="400" height="40" class="teal darken-3 d-flex mx-auto align-center justify-center font-weight-bold" style="font-size:13pt;">
              PCS_P3(카탈로그)(승인포함) (IACC)
           </v-card>
        </v-col>
    </v-row>

    <!-- 페이지별로 width/height size 조정이 필요함 -->
    <v-row no-gutters style="width:100%; min-width:1000px; height:860px;">
        <v-col class="grey lighten-3 pt-5 pl-4">
            <v-icon class="deep-orange--text">mdi-code-greater-than</v-icon>
        </v-col>
    </v-row>            

  </v-col>
</v-row>
</v-container>
</template>

<script>

export default {
    name: 'CouponIssueP3IACC',
    data() {
        return {};
    },
}

</script>

<style scoped>
.container {
    align-items: start;
}
</style>

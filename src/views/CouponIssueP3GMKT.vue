<template>
<v-container fill-height fluid class="ma-0 pa-0">
<v-row dense no-gutters>
  <v-col>
    
    <!-- 메뉴 title -->
    <v-row no-gutters class="mt-2 mb-2" style="height:50px;">
        <v-col class="my-auto align-center" style="text-align:center;">
           <v-card outline dark max-width="400" height="40" class="teal darken-3 d-flex mx-auto align-center justify-center font-weight-bold" style="font-size:13pt;">
              PCS_P3(카탈로그)(승인포함) (GMKT)
           </v-card>
        </v-col>
    </v-row>

    <!-- 페이지별로 width/height size 조정이 필요함 -->
    <v-row no-gutters style="width:100%; min-width:1000px;">
        <v-col class="pt-5 pl-4 pr-4">
        <v-row no-gutters style="width:100%">
            <v-col>
            <v-row no-gutters class="mb-3">
                <v-col>
                    <v-icon color="blue darken-1">mdi-code-greater-than</v-icon>
                    PCS P3 쿠폰 신규 등록 (GMKT)
                </v-col>
            </v-row>
            <v-row no-gutters lazy-validation>
                <v-col>
                    <CouponRegister registerMenu="G3" @updateParentValue="updateParentValue" />
                </v-col>
            </v-row>            
            </v-col>
        </v-row>
        <v-row no gutters style="width:100%">
            <v-col>
            <v-row no-gutters>
                <v-icon color="blue darken-1">mdi-code-greater-than</v-icon>
                PCS P3 쿠폰 발행정보 조회 (GMKT)
            </v-row>
            </v-col>
        </v-row>
        </v-col>
    </v-row>            
  </v-col>
</v-row>

<!-- 에러메시지 다이얼로그 -->
<v-row>
    <v-col cols="auto">
      <v-dialog transition="dialog-top-transition" max-width="400" height="200" v-model="dialogVisible1">
        <v-card>
            <v-card-title class="red darken-1 text-body-1 white--text font-weight-bold">
               에러 메시지
            </v-card-title>
            <v-card-text class="mt-10 text-body-2 grey--text text--darken-3">{{ alertMessage1 }}</v-card-text>
            <v-divider></v-divider>
            <v-card-actions>
               <v-spacer></v-spacer>
               <v-btn color="primary" text @click="dialogVisible1 = false" style="font-weight:bold;">확인</v-btn>
            </v-card-actions>
        </v-card>
      </v-dialog>
    </v-col>      
</v-row>
<!-- 알림 다이얼로그 -->
<v-row>
    <v-col cols="auto">
      <v-dialog transition="dialog-top-transition" max-width="400" height="200" v-model="dialogVisible2">
        <v-card>
            <v-card-title class="primary text-body-1 white--text font-weight-bold">
               알림 메시지
            </v-card-title>
            <v-card-text class="mt-10 text-body-2 grey--text text--darken-3">{{ alertMessage2 }}</v-card-text>
            <v-divider></v-divider>
            <v-card-actions>
               <v-spacer></v-spacer>
               <v-btn color="primary" text @click="dialogVisible2 = false" style="font-weight:bold;">확인</v-btn>
            </v-card-actions>
        </v-card>
      </v-dialog>
    </v-col>      
</v-row>

</v-container>
</template>

<script>
import CouponRegister from './CouponRegister.vue';

export default {
    name: 'CouponIssueP3GMKT',

    components: { CouponRegister },

    data() {
        return {
            alertMessage1: '',
            alertMessage2: '',
            dialogVisible1: false,
            dialogVisible2: false,
        };
    },

    methods: {
        updateParentValue(alertMessage, alertValue) {
            if (alertValue == -1) {
               this.dialogVisible1 = true;
               this.alertMessage1 = alertMessage;
            }
            else {
                this.dialogVisible2 = true;
                this.alertMessage2 = alertMessage;
            }
        }
    },
}

</script>

<style scoped>
.container {
    align-items: start;
}

table {
    border: 1px solid black;
}

</style>


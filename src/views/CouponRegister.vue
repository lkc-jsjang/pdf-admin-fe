<template>
<div>
 <v-row no-gutters>
    <v-col>
        <v-row no-gutters dense class="register_row">
            <v-cols>
                <div style="float:left; width:130px; background-color:#EEEEEE">
                    <v-card-text class="text-body-2 red--text text--darken-4 font-weight-bold">PCS 쿠폰 타입</v-card-text>
                </div>
                <div style="float:left; width:480px;">
                    <v-card-text class="text-body-2">PCS P3(카탈로그)</v-card-text>
                </div>
                <div style="float:left; width:130px; background-color:#EEEEEE">
                    <v-card-text class="text-body-2 red--text text--darken-4 font-weight-bold">내부관리명</v-card-text>
                </div>
                <div style="float:right;">
                    <v-text-field v-model="txtGroupName" dense outlined solo single-line hide-details class="ma-1 text-body-2"></v-text-field>
                </div>
            </v-cols>
        </v-row>
        <v-row no-gutters class="register_row" style="border-bottom:1px solid #BDBDBD !important;">
            <v-cols>
                <div style="float:left; width:130px; background-color:#EEEEEE">
                    <v-card-text class="text-body-2 red--text text--darken-4 font-weight-bold">기간</v-card-text>
                </div>
                <div style="float:left; width:480px;">
                    <div style="float:left; width:127px;" class="pl-2">
                    <v-menu ref="menu" v-model="menu" :close-on-content-click="false" :return-value.sync="s_date" transition="scale-transition" offset-y min-width="auto">
                        <template v-slot:activator="{ on, attrs }">
                            <v-text-field class="pt-2 mt-0 text-body-2" v-model="s_date" prepend-icon="mdi-calendar" v-bind="attrs" v-on="on" hide-details></v-text-field>
                        </template>
                        <v-date-picker locale="ko-KR" :day-format="getDay" no-title v-model="s_date" scrollable>
                            <v-spacer></v-spacer>
                            <v-btn text style="min-width:50%" color="primary" @click="$refs.menu.save(s_date);">확인</v-btn>
                            <v-btn text style="min-width:50%" color="primary" @click="menu=false">취소</v-btn>
                        </v-date-picker>
                    </v-menu>
                    </div>
                    <div style="float: left; width:90px;" class="mt-1">
                        <v-select v-model="s_time" :items="times" no-title dense outlined solo single-line hide-details class="pl-1 text-body-2">
                        </v-select>
                    </div>
                    <div style="float:left; width:22px; height:40px; padding-top:10px; text-align:center"> - </div>
                    <div style="float:left; width:125px;">
                        <v-menu ref="menu2" v-model="menu2" :close-on-content-click="false" :return-value.sync="e_date" transition="scale-transition" offset-y min-width="auto">
                        <template v-slot:activator="{ on, attrs }">
                            <v-text-field class="pt-2 mt-0 text-body-2" v-model="e_date" prepend-icon="mdi-calendar" v-bind="attrs" v-on="on" hide-details></v-text-field>
                        </template>
                        <v-date-picker locale="ko-KR" :day-format="getDay" no-title v-model="e_date" scrollable>
                            <v-spacer></v-spacer>
                            <v-btn text style="min-width:50%" color="primary" @click="$refs.menu2.save(e_date);">확인</v-btn>
                            <v-btn text style="min-width:50%" color="primary" @click="menu2=false">취소</v-btn>
                        </v-date-picker>
                    </v-menu>
                    </div>
                    <div style="float: left; width:90px;" class="mt-1">
                        <v-select v-model="e_time" :items="times" no-title dense outlined solo single-line hide-details class="pl-1 text-body-2"></v-select>               
                    </div>
                </div>
                <div style="float:left; width:130px; background-color:#EEEEEE">
                    <v-card-text class="text-body-2 red--text text--darken-4 font-weight-bold">발행구분</v-card-text>
                </div>
                <div style="float:right;">
                    <v-select v-model="issue_selected" :items="issues" no-title dense outlined solo single-line hide-details class="ma-1 text-body-2" style="width:180px;"></v-select>
                </div>
            </v-cols>
        </v-row>
        <v-row no-gutters dense class="register_row2">
            <v-cols>
                <div style="float:left; width:130px; background-color:#EEEEEE">
                    <v-card-text class="text-body-2 red--text text--darken-4 font-weight-bold">TR 제한</v-card-text>
                </div>
                <div style="float:left; width:150px;">
                    <v-text-field v-model="txtTR" dense outlined solo single-line hide-details class="ma-1 text-body-2"></v-text-field>
                </div>
                <div style="float:left; width:330px">
                    <v-card-text class="text-body-2">% (-50% ~ 50%)</v-card-text>
                </div>
                <div style="float:left; width:130px; background-color:#EEEEEE">
                    <v-card-text class="text-body-2 red--text text--darken-4 font-weight-bold">Feature</v-card-text>
                </div>
                <div style="float:left; width:120px">
                    <v-text-field v-model="txtIssueAddition" dense outlined solo single-line hide-details class="ma-1 text-body-2"></v-text-field>
                </div>
                <div style="float:right;">
                    <v-card-text class="text-body-2 pl-0">원 가산 발행</v-card-text>
                </div>
            </v-cols>
        </v-row>        
    </v-col>
 </v-row>   
</div>    
<!--
<div v-if="registerMenu === 'G3'">
{{ this.registerMenu }}
</div>       
<div v-else-if="registerMenu === 'G4'">
{{ this.registerMenu }}    
</div>    
<div v-else>         
{{ this.registerMenu }}    
</div>
-->

</template>

<script>

export default {
    name: 'CouponRegister',
    props: {
       registerMenu: String,
    },
    data: () => ({
      s_date: (new Date(Date.now() - (new Date()).getTimezoneOffset() * 60000)).toISOString().substring(0, 10),
      e_date: (new Date(Date.now() - (new Date()).getTimezoneOffset() * 60000)).toISOString().substring(0, 10),
      menu: false,
      menu2 : false,
      txtGroupName: '',
      txtIssueAddition: '',
      s_time: "00",
      e_time: "00",
      times: ["00", "01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23"],
      issue_selected: null,
      issues: [
         { value: null     , text: ' 발행구분 선택' },
         { value: 'Seller' , text: 'Seller'  },
         { value: 'Item'   , text: 'Item'    },
         { value: 'Catalog', text: 'Catalog' },
      ],      
    }),
    methods : {

       getDay(date){
          var i = new Date(date).getDate(date);
          return i;
       }

    },
}

</script>                            

<style scoped>
::v-deep .v-card__text {
   line-height: 1.0rem;
}

.register_row {
    border-top:1px solid #BDBDBD !important;
    border-left:1px solid #BDBDBD !important;
    border-right:1px solid #BDBDBD !important;
}

.register_row2 {
    border-left:1px solid #BDBDBD !important;
    border-right:1px solid #BDBDBD !important;    
    border-bottom:1px solid #BDBDBD !important;    
}

::v-deep .v-text-field.v-text-field--solo:not(.v-text-field--solo-flat) > .v-input__control > .v-input__slot {
    box-shadow:none;
}

::v-deep .v-text-field {
    font-size: 12pt;
}

::v-deep .v-select.v-input--dense .v-select__selection--comma {
    padding-left:10px;
}

</style>
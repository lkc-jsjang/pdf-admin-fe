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
                <div style="float:left; width:120px; background-color:#EEEEEE">
                    <v-card-text class="text-body-2 red--text text--darken-4 font-weight-bold">내부관리명</v-card-text>
                </div>
                <div style="float:right;">
                    <v-text-field v-model="txtGroupName" dense outlined solo single-line hide-details class="ma-1 text-body-2" ref="refTxtGroupName"></v-text-field>
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
                <div style="float:left; width:120px; background-color:#EEEEEE">
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
                    <v-card-text class="text-body-2 red--text text--darken-4 font-weight-bold">첨부파일</v-card-text>
                </div>
                <div style="float:left; width:310px;">
                    <v-file-input v-model="excelFile" dense outlined solo single-line hide-details class="ma-1 text-body-2"
                    accept="application/vnd.openxmlformats-officedocument.spreadsheetml.sheet, application/vnd.ms-excel" show-size label="엑셀 파일 추가" ref="refExcelFile">
                    </v-file-input>
                </div>
                <div style="float:left; width:170px;">
                    <v-card flat href="http://amsnet/ams/buyerdiscount/example/catalog_example.xls">
                    <v-card-text class="text-body-2 red--text text--darken-4 font-weight-bold">[엑셀예제 다운로드]</v-card-text>
                    </v-card>
                </div>                
                <div style="float:left; width:120px; background-color:#EEEEEE">
                    <v-card-text class="text-body-2 red--text text--darken-4 font-weight-bold">TR 제한</v-card-text>
                </div>
                <div style="float:left; width:120px">
                    <v-text-field v-model="txtTR" dense outlined solo single-line hide-details class="ma-1 text-body-2" ref="refTxtTR" ></v-text-field>
                </div>
                <div style="float:right; white-space:nowrap; display: inline-block;">
                    <v-card-text class="text-body-2 pl-0">% (-50% ~ 50%)</v-card-text>
                </div>
            </v-cols>
        </v-row>        
        <v-row no-gutters dense align="center" justify="space-around">
            <v-cols>
                <v-btn @click="PcsCpnGmktCatP3_Register" 
                    color="blue darken-1" depressed large dark class="mb-3 mt-3" style="width:100px; height:35px; font-weight:bold;">등록
                </v-btn>
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
import http from "../http-common";

export default {
    name: 'CouponRegister',
    props: {
       registerMenu: String,
    },
    data () {
        const dt = new Date();
        const dt2 = new Date();
        dt2.setMonth(dt2.getMonth() + 3);

        return {
           s_date: dt.toISOString().substring(0, 10),
           e_date: dt2.toISOString().substring(0, 10),
           s_time: "00",
           e_time: "00",

           menu: false,
           menu2 : false,
           txtGroupName: '',
           txtTR: '',
           excelFile: null,
           pcsSiteIdValue : [],
           pcsSiteIdValueString : "",
           pcsSiteNameValue: [],
           pcsSiteNameValueString : "",

           alertTitle: '에러 메시지',

           times: ["00", "01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23"],
           issue_selected: null,
           issues: [
              { value: null     , text: '발행구분 선택' },
              { value: 'Seller' , text: 'Seller'  },
              { value: 'Item'   , text: 'Item'    },
              { value: 'Catalog', text: 'Catalog' },
            ],      
        }
    },
    methods : {

       getDay(date){
          var i = new Date(date).getDate(date);
          return i;
       },

       async PcsCpnGmktCatP3_Register() {

           var ts_date = this.s_date + " " + this.s_time + ":00:00";
           var te_date = this.e_date + " " + this.e_time + ":00:00";
           console.log("시작일 = " + ts_date + " 종료일 = " + te_date);

           this.pcsSiteIdValueString = "0|1|2|3";
           this.pcsSiteNameValueString = "NAVER|DAUM|DANAWA|ENURI";
           console.log("PCS채널 = " + this.pcsSiteIdValueString + "  " + this.pcsSiteNameValueString);

           var formData = new FormData();
           formData.append('file', this.excelFile);

           if (this.txtGroupName.length == 0) {
                this.updateParentValue("내부 관리명을 입력해 주세요");            
                this.$refs.refTxtGroupName.focus();
            }
            else if (this.txtTR.length == 0) {
                this.updateParentValue("TR제한을 입력해 주세요");                
                this.$refs.refTxtTR.focus();
            }
            else if (isNaN(this.txtTR)) {
               this.updateParentValue("TR제한은 숫자만 입력해 주세요");
               this.$refs.refTxtTR.focus();
            } 
            else if (parseInt(this.txtTR) < -50 || parseInt(this.txtTR) > 50) {
                this.updateParentValue("TR제한은 -50% ~ 50% 까지 가능합니다");
                this.$refs.refTxtTR.focus();
            }
            else if (this.issue_selected == null) {
                this.updateParentValue("발행구분을 선택해 주세요");
            }
            else if (this.excelFile === undefined || this.excelFile === null) {
                this.updateParentValue("첨부파일을 등록하세요");                
                this.$refs.refExcelFile.focus();
            }
            else {
                console.log("내부관리명 = " + this.txtGroupName);
                console.log("TR제한 = " + this.txtTR);
                console.log("발행구분 = " + this.issue_selected);
                console.log(this.excelFile);           

                http.post('/postPDFV4P3ManageRegist', formData, {
                   headers: {
                     'Content-Type': 'multipart/form-data'
                   },
                   params:{
                      txtGroupName : this.txtGroupName,
                      txtTR : this.txtTR,
                      s_date1 : this.s_date,
                      e_date1 : this.e_date,
                      issue_selected : this.issue_selected, 
                      pcsSiteIdValueString : this.pcsSiteIdValueString,
                      pcsSiteNameValueString : this.pcsSiteNameValueString,
                    }, 
                }) 
                .then(res=>{
                    console.log("/postPDFV4P3ManageRegist Vue JS Call Success");
                    console.log(res);
                    this.alertTitle = "성공";
                    this.updateParentValue("PCS P3 신규 쿠폰이 등록 되었습니다");  
                })
                .catch(e=>{
                    console.log("/postPDFV4P3ManageRegist Vue JS Call Failure");
                    console.log(e);
                    this.updateParentValue("PCS P3 쿠폰 신규 등록에 실패했습니다");  
                })                
            }

       },

       updateParentValue(alertMessage) {
           this.$emit("updateParentValue", this.alertTitle, alertMessage);
       },       

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
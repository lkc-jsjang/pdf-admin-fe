<template>
<v-container fill-height fluid class="ma-0 pa-0">
    <div style="width:100%;">
    <div class="about_notice">
      <v-row no-gutters style="height:20px">
        <v-col>
            <div style="text-align: center; margin-top: 15px; color: white; font-weight: bold;">
                [PDF Admin Tool 사용에 대한 공지]
            </div>
        </v-col> 
      </v-row>
      <v-row style="height: 230px">        
       <v-col>
           <v-card class="pa-5 ma-3">
                <v-row>
                    <v-col>
                         1. 사전 승인 없이 개인정보 또는 영업비밀을 불법 유출할 경우 관계 볍령에 따라 처벌될 수 있습니다.
                    </v-col>
                </v-row>
                <v-row>
                    <v-col>
                          2. 판매자 정보 공유에 동의하지 않은 회원의 개인정보를 통합 취급(추출, 분석, 가공)하거나 마케팅에 활용하는 행위를 금지합니다.
                    </v-col>
                </v-row>
                <v-row>
                    <v-col>
                          3. 개인정보가 포함된 자료는 이용 목적을 달성하는 즉시 파기하여야 하며 파일형태로 PC보관 시 반드시 암호를 설정하여야 합니다.
                    </v-col>
                </v-row>
           </v-card>
       </v-col> 
      </v-row>
      <v-row style="height:50px;">
        <v-col>
            <div style="text-align: center; margin-top: 15px; color: white; font-weight: bold;">
                [PDF Admin Tool 사용 권한 요청]
            </div>
        </v-col>                 
      </v-row>
      <v-row>
        <v-col>
            <v-card class="pa-5 ma-3">           
                <v-row> 
                    <v-col>
                        1. 카테고리 권한은 팀 카테고리 권한과 동일합니다. (누락된 카테고리가 있을 경우 remedy 요청)
                    </v-col>
                </v-row>
                <v-row>
                    <v-col>
                        2. 팀 카테고리 권한 이외에 추가 카테고리 권한이 필요한 경우 remedy 요청<br/>
                        -> remedy+ : IAC >> 요청관리 - 요청서 작성 (업무분류 : 통합 CM Tool > CM Tool 권한요청)
                    </v-col>
                </v-row>
                <v-row>
                    <v-col>
                        3. PDF Admin Tool 오류 발생시 remedy를 통해 신고<br />
                        -> remedy+ : IAC >> 요청관리 - 요청서 작성 (업무분류 : 통합 CM Tool > 오류 발생 메뉴선택)                        
                    </v-col>
                </v-row>
            </v-card>
        </v-col>                         
      </v-row>
    </div>
    </div>
</v-container>
</template>

<script>
export default {
    name: 'About'
}
</script>

<style scoped>
.container {
    align-items: center;
}

.about_notice {
    width: 800px;
    height: 580px;     
    background-color:#E64A19; 
    margin: 0 auto;
}

</style>

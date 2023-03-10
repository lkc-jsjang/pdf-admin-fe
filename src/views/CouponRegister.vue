<template>
<div>
 <v-row no-gutters>
    <v-col>
        <v-row no-gutters class="register_row">
            <v-col cols=2 class="grey lighten-3">
                <v-card-text class="text-body-2">PCS 쿠폰 타입</v-card-text>
            </v-col>
            <v-col cols=5>
                <v-card-text class="text-body-2">PCS P3(카탈로그)</v-card-text>
            </v-col>
            <v-col cols=2 class="grey lighten-3">
                <v-card-text class="text-body-2">내부관리명</v-card-text>
            </v-col>
            <v-col cols=3>
                <v-card-text class="text-body-2">없음</v-card-text>
            </v-col>
        </v-row>
        <v-row no-gutters class="register_row" style="border-bottom:1px solid #BDBDBD !important;">
            <v-col cols=2 class="grey lighten-3">
                <v-card-text class="text-body-2">PCS 쿠폰 타입</v-card-text>
            </v-col>
            <v-col cols=5>
                <v-card-text class="text-body-2">PCS P3(카탈로그)</v-card-text>
            </v-col>
            <v-col cols=2 class="grey lighten-3">
                <v-card-text class="text-body-2">내부관리명</v-card-text>
            </v-col>
            <v-col cols=3>
                <v-card-text class="text-body-2">없음</v-card-text>
            </v-col>
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
    }
}

</script>                            

<style scoped>
::v-deep .v-card__text {
   line-height: 0.8rem;
}

.register_row {
    border-top:1px solid #BDBDBD !important;
    border-left:1px solid #BDBDBD !important;
    border-right:1px solid #BDBDBD !important;
}
</style>
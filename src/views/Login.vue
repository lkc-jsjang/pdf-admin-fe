<template>
      <v-main class="blue-grey lighten-4">
        <!-- Login Component -->
        <v-container style="max-width: 650px" fill-height>
          <v-layout align-center row wrap>
            <v-flex xs12>
              <v-card>
                <div class="pa-10">
                  <h1 style="text-align: center;" class="blue--text text--darken-1 mb-10">PDF Admin tool은 G마켓 계정으로 접속 가능합니다</h1>
                  <v-card-text>                        
                    <v-form ref="signForm">
                      <v-text-field                                    
                        prepend-icon="mdi-account"
                        v-model="form.domain"                       
                        :rules="domain_rule"
                        label="도메인"
                        disabled
                        type="text"
                        placeholder="ebayKorea 도메인을 입력해주세요."
                        ></v-text-field>                      
                      <v-text-field                                    
                        prepend-icon="mdi-account"      
                        v-model="form.username"                       
                        :rules="username_rule"
                        label="아이디"
                        type="text"
                        placeholder="ebayKorea ID를 입력해주세요."
                        ></v-text-field>
                        <v-text-field
                        prepend-icon="mdi-lock"
                        v-model="form.password"                                    
                        :rules="password_rule"
                        label="비밀번호"
                        type="password"
                        placeholder="ebayKorea Password를 입력해주세요."
                        @keyup.enter="signIn"
                        ></v-text-field>
                    </v-form>
                  </v-card-text>
                  
                  <v-card v-if="show" flat color="grey lighten-4" width="80%" class="d-flex align-center justify-center mb-5" style="margin: 0 auto;">
                      <v-card-text v-model="text" class="red--text d-flex align-center justify-center">
                        {{ message }}
                      </v-card-text>
                  </v-card>
                  <v-card-actions>
                    <v-btn
                      type="submit"
                      color="blue lighten-1 text-capitalize"
                      depressed
                      large
                      block
                      dark
                      class="mb-3"
                      @click.prevent="signIn"
                    >
                      로그인
                    </v-btn>
                  </v-card-actions>
                </div>
              </v-card>
            </v-flex>
          </v-layout>
        </v-container>
      </v-main>
</template>

<script>
import http from "../http-common";
import { mapState } from 'vuex';

export default {
    name: 'Login',

    data() {
      return {
          show : false,
          message : '',
          form: {
            domain: 'ebaykorea',
            username: '',
            password: ''
          },
          domain_rule: [
            v => !!v || 'ebayKorea DOMAIN을 입력해주세요.',
            v => !(v && v.length <= 0) || 'ebayKorea DOMAIN을 입력해주세요.'
          ],
          username_rule: [
            v => !!v || 'ebayKorea ID를 입력해주세요.',
            v => !(v && v.length <= 0) || 'ebayKorea ID를 입력해주세요.'
          ],
          password_rule: [
            v => !!v || 'ebayKorea Password를 입력해주세요.',
            v => !(v && v.length <= 0) || 'ebayKorea Password를 입력해주세요.'
          ],
      }
    },

    methods: {
      signIn() {
        const validate = this.$refs.signForm.validate();

        console.log("this.refs.signform value = " + this.$refs.signForm.$data);

        console.log("vueJs_Login.vue_domain:",this.form.domain);
        console.log("vueJs_Login.vue_username:",this.form.username);
        console.log("vueJs_Login.vue_password:",this.form.password);

        if (validate){

          http.post("/loginLdap", this.form)
          .then(res=>{
            console.log("signIn then START !!");
            console.log(res.data);

            var result = res.data["result"];
            if (result != "fail") {
                if(this.$route.path!=='/about') this.$router.push('/about')
            }
            else {
                this.message = "계정 혹은 비밀번호가 일치하지 않습니다. 입력한 내용을 다시 확인해 주세요.";
                this.show = true;
            }

            console.log("signIn then END !!")
          })
          .catch(e=>{
            console.log("signIn catch !! ")
            console.log(e);

            this.message = "Network 문제가 발생했습니다. 잠시 후 다시 사용해 주세요.";
            this.show = true;
          })
        }
      },
    },

    computed: {
      ...mapState(['project'])
    },

    watch: {  
        show: function(newValue, oldValue) {
           if (newValue == "true") {
               console.log("Invalid ID or Password!");
           }
        }
    },
}
</script>

<style scoped>
</style>
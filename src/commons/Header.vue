<template>
    <v-card class="overflow-hidden"> 
      <v-toolbar>
        <v-container>
          <v-row>
            <v-col cols="2">
              <v-img src="../../public/hcmus-icon.png" height="50px" width="50px" style="cursor:pointer; margin-top:10px;"></v-img>
            </v-col>
            <v-col cols="10"
              style="display:flex; justify-content:space-evenly; align-items:center;">
              <div>
                {{ $t('topCompany') }}
              </div>
        
              <div>
                {{ $t('employers') }}
              </div>
              
              <v-dialog v-if="isLoginedUser==false" v-model="dialog" persistent max-width="600px">
                <template v-slot:activator="{ on }">
                  <div style="cursor:pointer" v-on="on">
                    {{ $t('login') }}
                  </div>
                </template>

                <v-card style="padding:10px 20px 10px 20px">
                  <v-tabs v-model="tab">
                    <v-tab :key="1">Login</v-tab>
                    <v-tab :key="2">Company Register</v-tab>
                  </v-tabs>

                  <v-tabs-items v-model="tab">
                    <v-tab-item
                      :key="1"
                    >
                    <v-container>
                      <v-row>
                        <v-col cols="12">
                          <v-text-field v-model="userLogin.username" label="Email*" required></v-text-field>
                        </v-col>
                        <v-col cols="12">
                          <v-text-field v-model="userLogin.password" label="Password*" type="password" required></v-text-field>
                        </v-col>
                      </v-row>
                      <v-row style="justify-content:flex-end">
                        <v-subheader :style="checkEmptyLogin==true ? 'color:red':''">Please fill full information above</v-subheader>
                      </v-row>
                      <v-row style="justify-content:flex-end">
                        <v-btn color="blue darken-1" text @click="dialog = false">Close</v-btn>
                        <v-btn color="blue darken-1" text @click="loginAction()">Save</v-btn>
                      </v-row>
                    </v-container>
                    </v-tab-item>

                    <v-tab-item
                      :key="2"
                    >
                      <v-container>
                        <v-row>
                          <v-col cols="12">
                            <v-text-field v-model="userForm.fullname" label="Full name" required></v-text-field>
                          </v-col>
                          <v-col cols="12">
                            <v-text-field v-model="userForm.email" label="Email (Prefer: Email Company)" required></v-text-field>
                          </v-col>
                          <v-col cols="12">
                            <v-text-field v-model="userForm.companyName" label="Company Name" required></v-text-field>
                          </v-col>
                          <v-col cols="12">
                            <v-text-field v-model="userForm.phone" label="Phone" required></v-text-field>
                          </v-col>
                          <v-col cols="12">
                            <v-text-field v-model="userForm.password1" label="Password" type="password" required></v-text-field>
                          </v-col>
                          <v-col cols="12">
                            <v-text-field v-model="userForm.password2" label="Re-enter password" type="password" required></v-text-field>
                          </v-col>
                        </v-row>
                        <v-row style="justify-content:flex-end">
                          <v-subheader :style="checkEmpty==true ? 'color:red':''">Please fill full information above</v-subheader>
                        </v-row>
                        <v-row style="justify-content:flex-end">
                          <v-btn color="blue darken-1" text @click="dialog = false">Close</v-btn>
                          <v-btn color="blue darken-1" style="background:rgb(30, 136, 229, 0.3)" text @click="registerForm()">Save</v-btn>
                        </v-row>
                      </v-container>
                    </v-tab-item>

                  </v-tabs-items>
                </v-card>
                
              </v-dialog>

              <v-menu v-if="isLoginedUser==true"
                :close-on-content-click="false"
                :nudge-width="200"
                offset-x
              >
                <template v-slot:activator="{ on }">
                  <v-btn
                    color="indigo"
                    dark
                    v-on="on"
                  >
                    {{userEmail}}
                  </v-btn>
                </template>

                <v-card>
                  <v-list>
                    <v-list-item>
                      <v-list-item-avatar>
                        <img src="https://cdn.vuetifyjs.com/images/john.jpg" alt="John">
                      </v-list-item-avatar>

                      <v-list-item-content>
                        <v-list-item-title>{{userEmail}}</v-list-item-title>
                        <v-list-item-subtitle>Founder of HCMUS</v-list-item-subtitle>
                      </v-list-item-content>

                    </v-list-item>
                  </v-list>

                  <v-divider></v-divider>

                  <v-list>
                    <v-list-item>
                      <v-list-item-title>Profile</v-list-item-title>
                    </v-list-item>

                    <v-list-item>
                      <v-list-item-title>Settings</v-list-item-title>
                    </v-list-item>

                     <v-list-item @click="logoutAction">
                      <v-list-item-title>Logout</v-list-item-title>
                    </v-list-item>
                  </v-list>

                </v-card>
              </v-menu>

              <v-select
                style="max-width:150px; padding-top:25px"
                :items="itemsLanguage"
                :label="$t('language')"
                v-model="valueLanguage"
                item-text="title"
                item-value="lang"
              ></v-select>
            </v-col>
          </v-row>  
        </v-container>

        <v-dialog
          v-model="checkDisplayNotificationSuccessSignUp"
          width="500"
        >
          <v-card>
            <v-card-title
              class="headline grey lighten-2"
              primary-title
            >
              Registration Success
            </v-card-title>

            <v-card-text>
              To ensure that the information from the company is accurate, we will contact you soon for confirmation.
              After successful confirmation you will be logged in.
              Thank you very much.
            </v-card-text>

            <v-divider></v-divider>

            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn
                color="primary"
                text
                @click="checkDisplayNotificationSuccessSignUp = false"
              >
                I accept
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>

      </v-toolbar>
    </v-card>
</template>

<script>
import { mapActions } from "vuex";
    export default {
      name: 'Header',
      data: function () {
        return {
          itemsLanguage: [
            {
              title: "Tiếng Việt",
              lang: "vi"
            },
            {
              title: "English",
              lang: "en"
            }
          ],
          valueLanguage: {
            title: "Tiếng Việt",
            lang: "vi"
          },
          dialog: false,
          tab: null,
          userLogin:{
            username:"",
            password:""
          },
          userForm:{
            email:"",
            fullname: "",
            phone: "",
            password1: "",
            password2: "",
            companyName: ""
          },
          checkEmpty: null,
          checkEmptyLogin: null,
          checkDisplayNotificationSuccessSignUp: false,
          isLoginedUser: false,
          userEmail: null,
        }
      },
      watch:{
        valueLanguage(newValue){
          this.changeLanguage(newValue)
        },
      },
      created(){
        let user = window.localStorage.getItem("userInfo")
        if(user !== null){
          this.userEmail = JSON.parse(user).email
          this.isLoginedUser = true
        }
        else {
          this.isLoginedUser = false
        }
      },
      updated(){
        let user = window.localStorage.getItem("userInfo")
        if(user !== null){
          this.userEmail = JSON.parse(user).email
          this.isLoginedUser = true
        }
        else {
          this.isLoginedUser = false
        }
      },
      methods:{
        ...mapActions({
          setLanguage: "setLanguage",
          register: "register",
          login:"login",
          logout:"logout"
        }),
        logoutAction(){
          this.logout()
          this.$forceUpdate()
        },
        loginAction(){
          let vm = this
          let isFull = Object.values(this.userLogin).every(x => !!x)
          if(isFull){
            this.checkEmptyLogin = false
            this.login(this.userLogin).then(response=>{
              if(response.status == 200){
                this.dialog = false
                Object.keys(this.userLogin).forEach(function(index) {
                  vm.userLogin[index] = ""
                });
              }
            }, error => {
              // eslint-disable-next-line no-console
              console.error("Login Error", error)
            })
          }
          else{
            this.checkEmptyLogin = true
          }
        },
        registerForm(){
          let vm = this
          let isFull = Object.values(this.userForm).every(x => !!x)
          if(isFull){
            this.checkEmpty = false
            this.userForm.company_name = this.userForm.companyName
            delete this.userForm.companyName
            if(this.userForm.password1 == this.userForm.password2){
              this.userForm.password = this.userForm.password1
              delete this.userForm.password1
              delete this.userForm.password2
            }
            else{
              return 0
            } 
            this.register(this.userForm).then(response=>{
              if(response.status == 201){
                this.dialog = false
                this.checkDisplayNotificationSuccessSignUp = true
                Object.keys(this.userForm).forEach(function(index) {
                  vm.userForm[index] = ""
                });
              }
            }, error => {
              // eslint-disable-next-line no-console
              console.error("Register Error", error)
            })
          }else{
            this.checkEmpty = true
          }
        },
        pushToLogin(){
          this.$router.push("/login")
        },
        changeLanguage(lang){
          this.$i18n.locale = lang
          this.setLanguage(lang);
        }
      }
    }
</script>

<style lang="scss" scoped>

</style>
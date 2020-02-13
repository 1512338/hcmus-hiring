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
              
              <v-dialog v-model="dialog" persistent max-width="600px">
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
                          <v-text-field label="Email*" required></v-text-field>
                        </v-col>
                        <v-col cols="12">
                          <v-text-field label="Password*" type="password" required></v-text-field>
                        </v-col>
                      </v-row>
                      <v-row style="justify-content:flex-end">
                        <v-btn color="blue darken-1" text @click="dialog = false">Close</v-btn>
                        <v-btn color="blue darken-1" text @click="dialog = false">Save</v-btn>
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
          userForm:{
            email:"",
            fullname: "",
            phone: "",
            password1: "",
            password2: "",
            companyName: ""
          },
          checkEmpty: null
        }
      },
      watch:{
        valueLanguage(newValue){
          this.changeLanguage(newValue)
        },
      },
      methods:{
        ...mapActions({
          setLanguage: "setLanguage",
          register: "register"
        }),
        registerForm(){
          let isFull = Object.values(this.userForm).every(x => !!x)
          if(isFull){
            this.checkEmpty = false
            this.register(this.userForm)
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
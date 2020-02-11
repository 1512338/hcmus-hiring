<template>
    <v-card class="overflow-hidden"> 
      <v-toolbar>
        <v-container>
          <v-row>
            <v-col cols="2">
              <v-img src="../../public/hcmus-icon.png" height="50px" width="50px" style="margin-top:10px;"></v-img>
            </v-col>
            <v-col cols="10"
              style="display:flex; justify-content:space-evenly; align-items:center;">
              <div>
                {{ $t('topCompany') }}
              </div>
        
              <div>
                {{ $t('employers') }}
              </div>
              
                <div @click="pushToLogin" style="cursor:pointer">
                  {{ $t('login') }}
                </div>

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
        }
      },
      watch:{
        valueLanguage(newValue){
          this.changeLanguage(newValue)
        }
      },
      methods:{
        ...mapActions({
          setLanguage: "setLanguage"
        }),
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
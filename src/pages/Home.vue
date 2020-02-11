<template>
    <div class="home-page">
        <Header/>
        <v-parallax
            height="500"
            src="../assets/home-background.jpg"
        >
            <v-row
            align="center"
            justify="start"
            >
                <v-col class="text-center" cols="6" >
                    <h1 class="display-1 font-weight-bold .text-danger mb-4">Jobs truất cho sinh viên truất's</h1>
                </v-col>
            </v-row>
            <v-row 
            justify="center"
            >
                <v-col class="text-center" cols="6" >
                    <v-select
                        prepend-inner-icon="search"
                        :items="skillsSearch"
                        label="Keyword skills, Job title, Company,..."
                        solo
                        append-icon=""
                    ></v-select>
                </v-col>
                <v-col class="text-center" cols="2" >
                    <v-select
                        prepend-inner-icon="location_on"
                        :items="locationSearch"
                        label="Địa điểm"
                        solo
                        append-icon=""
                    ></v-select>
                </v-col>
                <v-col class="text-center" cols="1" >
                    <v-btn style="height:47px" tile large color="error">Search</v-btn>
                </v-col>
            </v-row>
        </v-parallax>

        <v-container>
            <v-row>
                <div style="
                color: #353535;
                line-height: 35px;
                font-size: 32px;
                font-weight: 400;">Top Employers</div>
            </v-row>

            <v-row>
                <v-col align="center" justify="center" cols="4">
                    <Card/>
                </v-col>
                <v-col align="center" justify="center" cols="4">
                    <Card/>
                </v-col>
                <v-col align="center" justify="center" cols="4">
                    <Card/>
                </v-col>
            </v-row>
        </v-container>

        <v-container>
            <v-row>
                <div style="
                color: #353535;
                line-height: 35px;
                font-size: 32px;
                font-weight: 400;
                margin-bottom:50px">Newest Blogs</div>
            </v-row>

            <v-row>
                <v-col align="center" justify="center" cols="6">
                    <BlogCard/>
                </v-col>
                <v-col align="center" justify="center" cols="6">
                    <BlogCard/>
                </v-col>
            </v-row>
        </v-container>

        <!-- <Footer class="footer" :style="`max-width:${getWindowWidth}`"/> -->
    </div>
</template>

<script>
import Header from "../commons/Header"
import Card from "../commons/Card"
import BlogCard from '../commons/BlogCard'

export default {
    components: {
        Header,
        Card,
        BlogCard,
    },
    data(){
        return{
            skillsSearch:['Java', 'PHP', 'Javascript','Python', 'Android','IOS'],
            locationSearch:['TP.Hồ Chí Minh', 'Hà Nội', 'Đà Nẵng']
        }
    },
    computed:{
        getWindowWidth(){
            return window.innerWidth
        }
    },
    created(){
    }
}
</script>

<style lang="scss" scoped>
    .home-page{
        margin: 0 auto;
        max-width: 1440px;
    }
</style>
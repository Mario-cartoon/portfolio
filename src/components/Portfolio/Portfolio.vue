<template>
    <!-- <h1>dsdd</h1> -->
    
    <div class="portfolio__table">
        <div class="home__title">
            <h1 style="margin:0;text-align: left;">
                <span class="bg-clip-text text-fill-transparent linear-gradient"> Practice 
                <!-- <font-awesome-icon class="bg-clip-text text-fill-transparent linear-gradient"  icon="fa-solid fa-dice" /> -->
                </span>
            </h1>
        </div>
<portfolio-table  v-for="item in portfolio" :key="item" :item=item></portfolio-table>
    </div>
    
    <!-- <div v-for="i in portfolio" :key="i">
        <p>{{i.pic}}</p> -->
        <!-- <img :src="`${i.pic}`" alt="">  -->
        <!-- <img style="width:100%" :src=i.pic alt="">
    </div> -->
</template>
<script>
import PortfolioTable from './PortfolioTable.vue'
export default {
    data(){
        return{
            portfolio:[
                {
                    name:'CS50x landing page',
                    desc:'The landing page was designed specifically for the CS50 course as an exam for the module',
                    stack:['https://www.vectorlogo.zone/logos/w3_css/w3_css-icon.svg',
                        'https://www.vectorlogo.zone/logos/javascript/javascript-icon.svg',
                        'https://www.vectorlogo.zone/logos/w3_html5/w3_html5-icon.svg'
                    ],
                    link:'https://www.figma.com/file/OL81r6vrB11QswtSNwEHiH/cs50x?node-id=0%3A1',
                    pic: require('@/static/cs.png')
                },
                {
                    name:'Voting Application',
                    desc:'It was developed as a replacement for Google forms and survey monkey',
                    link:'https://www.figma.com/file/cJmJ4VZba5UBy9Ba4zIwXG/VoteApp?node-id=136%3A224',
                    stack:['https://www.vectorlogo.zone/logos/vuejs/vuejs-icon.svg',
                        'https://www.vectorlogo.zone/logos/w3_css/w3_css-icon.svg',
                        'https://www.vectorlogo.zone/logos/javascript/javascript-icon.svg',
                        'https://www.vectorlogo.zone/logos/w3_html5/w3_html5-icon.svg',
                        'https://www.vectorlogo.zone/logos/mysql/mysql-icon.svg',
                        'https://www.vectorlogo.zone/logos/phpmyadmin/phpmyadmin-icon.svg',
                        'https://www.vectorlogo.zone/logos/djangoproject/djangoproject-icon.svg',
                        'https://www.vectorlogo.zone/logos/getbootstrap/getbootstrap-icon.svg'],
                    pic: require("@/static/voteapp.png")
                },
                {
                    name:'NTA 2.0',
                    desc:'Redesign of the NTA',
                    link:'https://www.figma.com/file/IjcaQ9WK2CRLcirZg5MMdj/NTA_ws?node-id=0%3A1',
                    stack:['https://www.vectorlogo.zone/logos/w3_css/w3_css-icon.svg',
                        'https://www.vectorlogo.zone/logos/wordpress/wordpress-icon.svg',
                        'https://www.vectorlogo.zone/logos/w3_html5/w3_html5-icon.svg'],
                    pic: require("@/static/nta.png")
                },
                {
                    name:'Service NTA',
                    desc:'The site is an ERP system, namely a service for downloading, checking and publishing articles. Which implements the collection of statistics. Also, all the necessary functionality for working with the service is implemented from the interface (filters, pagination, chat with the reviewer, deletion and editing, graphical representation for displaying statistics data, data upload, etc.',
                    // link:'https://www.figma.com/file/IjcaQ9WK2CRLcirZg5MMdj/NTA_ws?node-id=0%3A1',
                    stack:['https://www.vectorlogo.zone/logos/vuejs/vuejs-icon.svg',
                        'https://www.vectorlogo.zone/logos/w3_css/w3_css-icon.svg',
                        'https://www.vectorlogo.zone/logos/javascript/javascript-icon.svg',
                        'https://www.vectorlogo.zone/logos/w3_html5/w3_html5-icon.svg',
                        'https://www.vectorlogo.zone/logos/mysql/mysql-icon.svg',
                        'https://www.vectorlogo.zone/logos/phpmyadmin/phpmyadmin-icon.svg',
                        'https://www.vectorlogo.zone/logos/djangoproject/djangoproject-icon.svg'],
                    pic: require("@/static/service.png")
                },
                {
                    name:'Process Mining',
                    desc:'Team development of new modules for the in-bank Process Mining software library (Python (pandas, dash, graphviz, plotly)).',
                    // link:'https://www.figma.com/file/IjcaQ9WK2CRLcirZg5MMdj/NTA_ws?node-id=0%3A1',
                    stack:['https://www.vectorlogo.zone/logos/python/python-icon.svg',
                    'https://www.vectorlogo.zone/logos/plot_ly/plot_ly-icon.svg',
                    'https://www.vectorlogo.zone/logos/bitbucket/bitbucket-icon.svg'],
                    pic: require("@/static/pm.png")
                },
                {
                    name:'Паруса 360m',
                    desc:'Project development for 360m',
                    link:'https://www.figma.com/file/gQ1hXlqRbtTyfvcJySUE43/360m?node-id=0%3A1',
                    stack:['https://www.vectorlogo.zone/logos/w3_html5/w3_html5-icon.svg',
                    'https://www.vectorlogo.zone/logos/w3_css/w3_css-icon.svg',
                    'https://www.vectorlogo.zone/logos/javascript/javascript-icon.svg'],
                    pic: require("@/static/360.png")
                },
                {
                    name:'Школа-студия Наталии Дунаевой',
                    desc:'Website development for a studio-school',
                    // link:'https://www.figma.com/file/IjcaQ9WK2CRLcirZg5MMdj/NTA_ws?node-id=0%3A1',
                    stack:['https://www.vectorlogo.zone/logos/w3_html5/w3_html5-icon.svg',
                    'https://www.vectorlogo.zone/logos/w3_css/w3_css-icon.svg',
                    'https://www.vectorlogo.zone/logos/javascript/javascript-icon.svg'],
                    pic: require("@/static/school.png"),
                    linkInt:'https://irkhair.ru/#master'
                },
                {
                    name:'Корпоративный Центр',
                    desc:'Website development for Sberbank Corporate center.',
                    // link:'https://www.figma.com/file/IjcaQ9WK2CRLcirZg5MMdj/NTA_ws?node-id=0%3A1',
                    stack:['https://www.vectorlogo.zone/logos/w3_html5/w3_html5-icon.svg',
                    'https://www.vectorlogo.zone/logos/w3_css/w3_css-icon.svg',
                    'https://www.vectorlogo.zone/logos/javascript/javascript-icon.svg'],
                    pic: require("@/static/cscc.png"),
                    linkInt:'https://sbcc.ru/'
                },
                {
                    name:'Dashboard',
                    desc:'UI/UX design Training Project',
                    link:'https://www.figma.com/file/S2akrRTLLQjTSl4aKOuzBh/DASHBOARD?node-id=0%3A1',
                    stack:[],
                    pic: require("@/static/dasboard.png")
                },
                {
                    name:'Smart banking',
                    desc:'UI/UX design Training Project',
                    link:'https://www.figma.com/file/GWBJ8lUZc2nzhDEN9aRKiz/STUDY_PRJ?node-id=0%3A1',
                    stack:[],
                    pic: require("@/static/smartbaking.png")
                }
                // {
                //     name:'',
                //     desc:'',
                //     link:'',
                        // pic:''
                // }
            ]
        }
    },
    components:{
        PortfolioTable
    }
}
</script>
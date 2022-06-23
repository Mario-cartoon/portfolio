<template>
    <!-- <h1>dsdd</h1> -->
    <div class="portfolio__table">
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
                        'https://www.vectorlogo.zone/logos/w3_html5/w3_html5-icon.svg'],
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
                    name:'Unity projects',
                    desc:'Projects developed during university studies. Technology stack: Unity, C#, Photon PUN.',
                    // link:'https://www.figma.com/file/IjcaQ9WK2CRLcirZg5MMdj/NTA_ws?node-id=0%3A1',
                    stack:['https://www.vectorlogo.zone/logos/unity3d/unity3d-icon.svg'],
                    pic: require("@/static/unity.png")
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
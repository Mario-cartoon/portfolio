<template>
<div class="home__container">
    <div class="home__content-item">
        <div class="home__title">
            <h1>Hello,
                <span class="bg-clip-text text-fill-transparent linear-gradient"> my friend! 
                </span>
            </h1>
        </div>
        <div class="home__sub-title">
             <p>My name's Anastasia. I'm a junior frontend-developer located in Irkutsk 
                 <font-awesome-icon icon="fa-solid fa-otter" /><br> 
                 At the moment I'm looking for a job 😎
            </p>
            <h3>🚀Skills:</h3>
            <div class="social-links__skills-content">
                <skills v-for="item in skills" :key="item" :item=item></skills>
            </div>
            <div class="social-links__content">
                <social-links v-for="item in links" :key="item" :link="item"></social-links>
            </div>
        </div>
        <div class="home__text-skills" style="">
                <h4>Frontend Development</h4> 
                <span>HTML, CSS, SASS, Bootstrap, Vue.js.</span> 
            <hr> 
                <h4>UI\UX Design</h4> 
                <span>Photoshop, Illustrator, Sketch, Figma, User Research, Usability Testing.</span> 
        </div>
        <!-- <button class="social-links__button">About me</button> -->
    </div>
    
    <div>
        <blob></blob>
    </div>
    
</div>
 </template>

<script>
import Skills from './Skills.vue'
import Blob from './Blob.vue'
import SocialLinks from './SocialLinks.vue'
export default {
    data(){
        return{
            message: false,
            skills:[
                {
                    src:"https://www.vectorlogo.zone/logos/vuejs/vuejs-icon.svg",
                    alt:"Vue.js"
                },
                {
                    src:"https://www.vectorlogo.zone/logos/javascript/javascript-icon.svg",
                    alt:"Semicolons"
                },
                {
                    src:"https://www.vectorlogo.zone/logos/w3_html5/w3_html5-icon.svg",
                    alt:"Just for fun"
                },
                {
                    src:"https://www.vectorlogo.zone/logos/sass-lang/sass-lang-icon.svg",
                    alt:"It's important!"
                }
            ],
            links:[
                {
                    name:'Telegram',
                    link: 'https://t.me/Mario_cartoon',
                    fontAwesome: "fa-brands fa-telegram"
                },
                {
                    name: 'Email',
                    link:'mailto:ya.np-98@yandex.ru',
                    fontAwesome:"fa-solid fa-at" 
                },
                {
                    name: 'GitHub',
                    link:'https://github.com/Mario-cartoon',
                    fontAwesome: "fa-brands fa-github" 
                }
            ]
        }   
    },
    methods: {
    mouseover: function(){
      this.message = true
    },    
    mouseleave: function(){
       this.message = false
    }
  },
    components:{
        Blob,
        SocialLinks,
        Skills
    }
}
</script>
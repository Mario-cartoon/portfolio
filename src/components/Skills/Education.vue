<template>
    <div class="home__container">
    <div class="home__content-item">
        <div class="home__title">
            <h1>|
                <span class="bg-clip-text text-fill-transparent linear-gradient"> Education
                <!-- <font-awesome-icon class="bg-clip-text text-fill-transparent linear-gradient"  icon="fa-solid fa-dice" /> -->
                </span>
            </h1>
        </div>
        <div class="home__text-skills" style="">
            <!-- <div> -->
            <div class="education__content-text">
                <h3>English & Computer Science</h3>
                <small>Irkutsk State University</small>
            </div>
                
                <small>Sep, 2016 — Jun, 2021</small><br><br>
                <span>BSc (Hons) in Computer Science. English: A2. </span>
            <!-- </div> -->
            <hr>
            <!-- <div> -->
               <div class="education__content-text">
                <h3>Web development</h3>
                <small>ITMO University</small>
            </div>
                
                <small>Sep, 2019 — Dec, 2019</small><br><br>
                <span>Course from the ITMO University.</span>
            <!-- </div> -->
        </div>
        <div class="home__title">
            <h1>|
                <span class="bg-clip-text text-fill-transparent linear-gradient"> Experience
                <!-- <font-awesome-icon class="bg-clip-text text-fill-transparent linear-gradient"  icon="fa-solid fa-dice" /> -->
                </span>
            </h1>
        </div>
        <div class="home__text-skills" style="">
            <!-- <div> -->
            <div class="education__content-text">
                <h3>Auditor</h3>
                <small>Sber</small>
            </div>
                
                <small>Jul, 2021 — Jun, 2022</small><br><br>
                <span>Support for an existing site + refinement of new functionality (Django Rest Framework,Vue.js).
                    Participation in sprints, team development of the Process Mining library (Python), UX/UI development.</span>
            <!-- </div> -->
            <hr>
            <!-- <div> -->
               <div class="education__content-text">
                <h3>CS50x Teacher</h3>
                <small>Coddy</small>
            </div>
                <small>Feb, 2021 — Jul, 2021</small><br><br>
                <span>Taught the Harvard CS50 course from Coddy.</span>
            <!-- </div> -->
        </div>    
    </div>
    
    <div style="width:100%;" class="cool__backgraund">
        <dv-d></dv-d>
    </div>
    </div>
</template>
<script>
import DvD from './DvD.vue'
export default {
    components:{
        DvD
    }
    
}
</script>
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
    </div>
    
    <div style="width:100%" class="cool__backgraund">
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
<template>
    <div class="portfolio__row">
        <div class="portfolio__main-img">
            <img :src=item.pic alt="">
        </div>
        <div class="portfolio__row-text">
            <div>
                <h1 class="bg-clip-text text-fill-transparent linear-gradient">{{item.name}}</h1>
                <span>{{item.desc}}</span>
            </div> 
            <div>
                <div class="portfolio__stack-tech">
                    <div >
                        <!-- <span>Stack tech:</span> -->
                        <img v-for="stack in item.stack" :key="stack" :src=stack alt="">
                    </div>
                    <a v-if="item.link" :href="item.link"><img style="width:30px;" id="Figma" src="https://www.vectorlogo.zone/logos/figma/figma-icon.svg" alt=""></a>
                    
                </div>
                <!-- <i class="fa-solid fa-c"></i> -->
            </div>
            
        </div>
        

    </div>
</template>
<script>
export default {
    props:['item']
}
</script>
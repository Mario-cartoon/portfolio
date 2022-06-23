<template>
        <div style="text-align:center;">
            <img :src=item.src v-on:mouseover="mouseover"
                    v-on:mouseleave="mouseleave" 
                    alt="just for fun" 
                    width="60" 
                    height="50"/>
        <div class="skills__item-text">
            <Transition><p v-if="message">{{item.alt}}</p> </Transition>
        </div>
   
        </div>
    
</template>
<script>
export default {
    props:['item'],
    data(){
        return{
            message: false,
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
    
}
</script>
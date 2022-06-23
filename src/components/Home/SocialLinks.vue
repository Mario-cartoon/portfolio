<template>
<!-- <slot></slot> -->
<div class="social-links__container">
    <div class="social-links__item-fontAwsm">
        <a :href=link.link><i :class=link.fontAwesome :id=link.name></i></a>
    </div> 
</div>
    
    
</template>
<script>
export default {
    props:['link']
    
}
</script>
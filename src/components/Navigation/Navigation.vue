<template>
 <div class="nav-menu navigation">
     <ul>
         <li class="list " >
              <div class="nav__item">
                  <router-link    class="router" to="/home"><font-awesome-icon class="icon"  icon="fa-brands fa-fort-awesome" /></router-link> 
              </div>
         </li>
         
         <li class="list">
              <div class="nav__item"><router-link class="router" to="/edu"><font-awesome-icon class="icon" icon="fa-solid fa-graduation-cap" /></router-link></div>
         </li>
         <li class="list" >
              <div class="nav__item"><router-link class="router" to="/portfolio"><font-awesome-icon class="icon" icon="fa-solid fa-cart-flatbed-suitcase" /></router-link></div>
         </li>
         <div class="indicator"></div>
     </ul>
 </div>
</template>
<script>
export default {
    methods:{
        changePage(){
            const list = document.querySelectorAll('.list');
            
            list.forEach((item)=>
            item.addEventListener('click', this.activeLink(list)))

        },
         activeLink(list){
                list.forEach((item)=>
                item.classList.remove('active'))
                // this.classList.add
                this.item.add('active')
            }
    }
}
</script>

<style scoped> 
.router{
    color: #31354e;
}
  .navigation .nav__item .icon .router-link-active,
 .router-link-exact-active {
   color: #515ECF;
   cursor: pointer;
 }
</style>
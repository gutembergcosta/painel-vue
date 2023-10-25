<template>
    <div id="app">
        <NavbarDefault/>
        <router-view />
    </div>
</template>
  
<script>
  
    import NavbarDefault from '@/blocos/NavbarDefault.vue'
  
  
    export default {  
        name: 'Base',
        components: {
            NavbarDefault
        }
    }
  </script>
  
  <style lang="scss">  
    .card{
        border:5px solid #1f83ed!important;
        border-radius: 12px!important;
        h3{
            color:#1f83ed ;
            font-weight: 600;
        }

        h5{
            color:#000 ;
            font-weight: 600;
        }
    }
  
  
  </style>
  
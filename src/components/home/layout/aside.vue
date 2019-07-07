<template>
    <div >
       <div>
             <button @click="tosec">列表second</button>
       </div>
        <div>
            <button  @click="chil">列表chil</button>
        </div>
            
       
    </div>
</template>

<script>
export default {
    methods:{
        tosec(){
           this.$router.push('/second') 
        },
        chil(){
            this.$router.push('/chil')
        }
    }
}
</script>

<style scoped>
    
</style>

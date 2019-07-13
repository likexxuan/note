<template>
    <div >
       <div>
             <ul>
                 <li>
                     <button @click="tosec">列表second</button>
                </li>
                <li>
                    <button  @click="chil">列表chil</button>
                </li>
                <li>
                      <button  @click="abc">列表abc</button>
                </li>
                <li>
                     <button  @click="bcd">列表bcd</button>
                </li>
                
           
           
             </ul>
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
        },
        abc(){
            this.$router.push('/abc')
        },
        bcd(){
            this.$router.push('/bcd')
        }
    }
}
</script>

<style scoped>
    
</style>

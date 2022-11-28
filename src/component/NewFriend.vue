<template>
    <section>
        <form @submit.prevent="submitHandler">
            <div>
                <label>Name</label>
                <input type="text" v-model="enterName" />
            </div>
            <div>
                <label>Phone</label>
                <input type="text" v-model="enterPhone" />
            </div>
            <div>
                <label>Email</label>
                <input type="text" v-model="enterEmail" />
            </div>
            <div>
                <button type="submit"> Submit</button>
            </div>


        </form>
    </section>
</template>

<script>
export default {
    emits:['add-contact'],
    data() {
        return{
           enterName:'',
           enterEmail:'', 
           enterPhone:'',
        }
        
    },
    methods:{
        submitHandler(){
            this.$emit('add-contact',this.enterName, this.enterEmail, this.enterPhone)
        }
    }
}
</script>
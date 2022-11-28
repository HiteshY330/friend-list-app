<template>
<li>
    <h2>{{ name}} {{toggle-fav ? '(favorite)':'' }} </h2>
    <button @click="$emit('fav-toggle',id)">Favorite</button>
    <button @click="toggle">{{ visiable ? 'Hide': 'show' }} Details</button>
    <ul v-if="visiable" >
        <li> <strong>Phone: </strong> {{phoneNumber}} </li>
        <li> <strong>Email: </strong> {{emailAddress}} </li>

    </ul>
    <button @click="$emit('delete',id)">Delete</button>
</li>
</template>

<script>
export default {
  emits:['fav-toggle', 'delete'],
    /*props:[
        'name',
        'phoneNumber',
        'emailAddress',
        'isFav'
    ],*/
    props:{
        name:{
            type: String,
            required: true
        },
        phoneNumber:{
            type:String,
            required: true
        },
        emailAddress:{
            type:String,
            required:true
        },
        isFav:{
            type:Boolean,
            required:false,
            default:false
        },
        id:{
          type:Number,
          required:true
        }
    },
  data() {
    return {
      visiable: false,
      //friendIsFav :  this.isFav,
      
      
    };
  },
  methods:{
    toggle(){
        this.visiable = !this.visiable;
    },
    /*favtoggle(){
        //this.friendIsFar = !this.friendIsFar;
        this.$emit('toggle-fav',this.id)
    },*/
    
  }
};
</script>


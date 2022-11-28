//import { vue, vueRouter} from 'vue-router';
//import NewFriend from './component/NewFriend.vue';
//import FriendContact from './component/FriendContact.vue';
import { createRouter, createWebHistory } from 'vue-router';
import Home from './component/HomePage.vue';


const routes=[
    {
        name:'Home',
        path:'/home',
        component:Home
    },
    
    
];

const router = createRouter(
    {
        history:createWebHistory(),
        routes
    }
);
export default router;
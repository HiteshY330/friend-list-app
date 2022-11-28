import { createApp } from 'vue';
import App from './App.vue';
import FriendContact from './component/FriendContact.vue';
import NewFriend from './component/NewFriend.vue';
import router from './routes';

const app= createApp(App).use(router)

app.component('friend-contact', FriendContact)
app.component('new-friend', NewFriend)

app.mount('#app')

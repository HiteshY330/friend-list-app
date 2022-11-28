<template>
  <section>
    <header><h1>Friend List</h1></header>
    <slote-example></slote-example>
    <new-friend @add-contact="addContact"></new-friend>
    <ul>
      <friend-contact
        v-for="friend in friend"
        :key="friend.id"
        :name="friend.name"
        :id="friend.id"
        :phoneNumber="friend.phone"
        :emailAddress="friend.email"
        :is-Fav="friend.isFav"
        @fav-toggle="toggleFav"
        @delete="deleteContact"
      >
      </friend-contact>
    </ul>
  </section>
</template>

<script>

export default {
  
  data() {
    return {
      friend: [
        {
          id: 1,
          name: "Hitesh",
          email: "dgh@hfd",
          phone: "345646",
          isFav: true,
        },
        {
          id: 2,
          name: "Manish",
          email: "dgh@hfd",
          phone: "345646",
          isFav: false,
        },
      ],
    };
  },
  methods: {
    toggleFav(id) {
      const Identif = this.friend.find((friend) => friend.id === id);
      Identif.isFav = !Identif.isFav;
    },
    addContact(name, email, phone) {
      const newFrientContact = {
        id: new Date().toISOString(),
        name: name,
        email: email,
        phone: phone,
        ifFav: false,
      };
      this.friend.push(newFrientContact);
    },
    deleteContact(id) {
      this.friend = this.friend.filter((friend) => friend.id !== id);
    },
  },
};
</script>


<style>
* {
  box-sizing: border-box;
}

html {
  font-family: "Jost", sans-serif;
}

body {
  margin: 0;
}

header {
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  margin: 3rem auto;
  border-radius: 10px;
  padding: 1rem;
  background-color: #58004d;
  color: white;
  text-align: center;
  width: 90%;
  max-width: 40rem;
}

#app ul {
  margin: 0;
  padding: 0;
  list-style: none;
}

#app li,
#app form {
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  margin: 1rem auto;
  border-radius: 10px;
  padding: 1rem;
  text-align: center;
  width: 90%;
  max-width: 40rem;
}

#app h2 {
  font-size: 2rem;
  border-bottom: 4px solid #ccc;
  color: #58004d;
  margin: 0 0 1rem 0;
}

#app button {
  font: inherit;
  cursor: pointer;
  border: 1px solid #ff0077;
  background-color: #ff0077;
  color: white;
  padding: 0.05rem 1rem;
  box-shadow: 1px 1px 2px rgba(0, 0, 0, 0.26);
}

#app button:hover,
#app button:active {
  background-color: #ec3169;
  border-color: #ec3169;
  box-shadow: 1px 1px 4px rgba(0, 0, 0, 0.26);
}
#app input {
  font: inherit;
  padding: 0.15em;
}
#app label {
  font-weight: bold;
  margin-right: 1rem;
  width: 7rem;
  display: inline-block;
}
#app form div {
  margin: 1rem 0;
}
</style>

"use strict";

const { createApp } = Vue;

createApp({
  data() {
    return {
      message: "Hello Vue!",
      myImages: [
        {
          image:
            "https://i1.sndcdn.com/artworks-000066021724-kq5xql-t500x500.jpg",
        },
        {
          image:
            "https://i.kym-cdn.com/photos/images/newsfeed/000/296/441/24a.jpg",
        },
        {
          image:
            "https://media.makeameme.org/created/whats-up-motherfucker.jpg",
        },
        {
          image:
            "https://media.tenor.com/images/f07a41a9e6009bbb325286a669ae519b/tenor.png",
        },
      ],
    };
  },
}).mount("#app");

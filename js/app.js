"use strict";

const { createApp } = Vue;

createApp({
  data() {
    return {
      message: "Hello Vue!",
      myImage:
        "https://i1.sndcdn.com/artworks-000066021724-kq5xql-t500x500.jpg",
    };
  },
}).mount("#app");

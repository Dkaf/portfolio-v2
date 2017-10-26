<template lang="pug">
  #app
    .background-image(:style="{filter: filter, opacity: opacity}")
    home-page
    about-me(:scrollPos="scrollPos")
    project-section
    contact-me
    <!-- <router-view/> -->
</template>

<script>
import HomePage from './components/HomePage';
import AboutMe from './components/AboutMe';
import ProjectSection from './components/ProjectSection';
import ContactMe from './components/ContactMe';

export default {
  name: 'app',
  components: {HomePage, AboutMe, ProjectSection, ContactMe},
  data: function() {
    return {
          scrollPos: 0,
          blur: 0,
          filter: '',
          opacity: .5,
    };
  },
  methods: {
    scrollHandler() {
      this.scrollPos = Math.round(window.scrollY);
      this.imageFilters();
    },
    imageFilters() {
      let scrollPosBlur = (this.scrollPos/100)/2;
      let scrollPosOpacity = 1 - (this.scrollPos/1000);
      if (this.scrollPos < 1000) {
        this.blur = scrollPosBlur;
      } else {
        this.blur = 5;
      }
      if (500 < this.scrollPos && this.scrollPos < 700) {
        this.opacity = scrollPosOpacity;
      } else if (this.scrollPos > 700) {
        this.opacity = 0.3;
      }
      this.filter = 'blur(' + this.blur + 'px)';
    },
  },
  created: function() {
    window.addEventListener('scroll', this.scrollHandler);
  },
};
</script>

<style>
@font-face {
  font-family: "jaapokki";
  src: url("./assets/Jaapokki-font-package-1.0/Regular/web/jaapokki-regular.woff"),
        url("./assets/Jaapokki-font-package-1.0/Regular/web/jaapokki-regular.ttf");
}
@font-face {
  font-family: "jaapokki subtract";
  src: url("./assets/Jaapokki-font-package-1.0/subtract/web/jaapokkisubtract-regular.woff"),
        url("./assets/Jaapokki-font-package-1.0/subtract/web/jaapokkisubtract-regular.ttf");
}
@font-face {
  font-family: "jaapokki enhance";
  src: url("./assets/Jaapokki-font-package-1.0/enchance/web/jaapokkienchance-regular.woff"),
        url("./assets/Jaapokki-font-package-1.0/enchance/web/jaapokkienchance-regular.ttf");
}

#app {
  font-family: 'jaapokki', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  box-sizing: border-box;
  overflow-x: hidden;
}

html, body, #app {
  margin: 0;
}

body {
  color: white;
  background-color: #1a1a1a;
}

body::-webkit-scrollbar {
  width: .7rem;
}

body::-webkit-scrollbar-track {
  box-shadow: inset 0 0 6px rgba(0,0,0,0.3);
}

body::-webkit-scrollbar-thumb {
  background-color:#f45942;
  border-radius: 10px;
}

.background-image {
  height: 100%;
  width: 100%;
  background: url('./assets/shipping_yard.jpeg') no-repeat;
  background-attachment: fixed;
  position: fixed;
  z-index: -1;
  filter: blur(0px);
}

@media screen and (max-width: 770px) {

  .background-image {
    background-size: cover;
    bottom: 0;
  }
}

</style>

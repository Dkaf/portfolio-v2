<template lang="pug">
  .home-page
    .title-container
      h1.title Hi.
        br
        |I'm 
        span.title.important Dan
        |. 
        br
        |I create
        br 
        span.title.important full stack 
        |web apps.
      div.scroll 
        span Scroll
</template>

<script>

export default {
  name: 'HomePage',
  data: function() {
    return {
      // transformAmount: transformHandler(0),
    };
  },
};
</script>

<style>
  .home-page {
    height: 100vh;
    display: flex;
    flex-flow: row wrap;
    justify-content: center;
    align-items: center;
  }

  .title {
    font-size: 7rem;
    color: white;
    margin: 0;
    width: 550px;
    line-height: 120px;
    font-weight: normal;
  }

  .scroll {
    color: white;
    transform: rotate(90deg);
    position: absolute;
    bottom: 15px;
    left: 50%;
    text-decoration: underline;
  }

  @media screen and (max-width:770px) {
    .title {
      font-size: 5rem;
      line-height: 100px;
    }
    .title-container, .title {
      width: 100%;
    }
  }


</style>

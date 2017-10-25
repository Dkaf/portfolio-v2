<template lang="pug">
  .about-me.section-div
    .about-container
      .title-container
        h2.subtitle About Me
      .info-container
        p I'm a Full-Stack Javascript Developer from Iowa. 
          | I started my development journey by teaching myself HTML and CSS before completing a 
          | 1-on-1 mentorship program from Thinkful. 
          | I specialize in UI interactivity with React and jQuery, 
          | but I also write backend code with Node.js and MongoDB databases.     
          | When I'm not coding, I can usually be found learning more about blockchain, 
          | playing indie games or searching YouTube for hidden gems.
    skill-list(:scrollPos="scrollPos")
</template>

<script>
import SkillList from './SkillList';
export default {
  name: 'AboutMe',
  components: {SkillList},
  props: ['scrollPos'],
};
</script>

<style>


  .section-div {
    padding: 100px;
    display: flex;
    flex-flow: row wrap;
    justify-content: space-around;
  }

  .info-container {
    text-align: center;
    font-size: 2rem;
    color: white;
  }

  .info-container p {
    width: 600px;
    margin: 0;
    padding: 30px;
  }

  .subtitle {
    font-size: 8rem;
    margin: 0;
    text-align: center;
    color: #f45942;
    font-weight: normal;
  }

  @media screen and (max-width:770px) {
    .section-div {
      width: 100%;
    }

    .section-div {
      padding: 100px 0;
    }

    .about-me {
      flex-flow: column;
      align-items: center;
      padding: 100px 0;
    }

    .subtitle {
      font-size: 4.5rem;
    }

    .info-container {
      font-size: 1.3rem;
      padding: 0 10px;
    }

    .info-container p {
      padding: 30px 0;
      width: auto;
    }

  }
</style>



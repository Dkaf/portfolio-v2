<template lang="pug">
  .skills.section-div
    .skill-container
      h3.subtitle Skills
      div.skill-list
        skill-item(:skill="html", :isShowing="skillHandler()")
        skill-item(:skill="css", :isShowing="skillHandler()")
        skill-item(:skill="javascript", :isShowing="skillHandler()")
        skill-item(:skill="node", :isShowing="skillHandler()")
        skill-item(:skill="react", :isShowing="skillHandler()")
</template>

<script>
import SkillItem from './SkillItem';
export default {
  name: 'SkillList',
  components: {SkillItem},
  data: function() {
    return {
      isShowing: false,
      html: {
        title: 'HTML5',
        height: 90,
        delay: 0,
      },
      css: {
        title: 'CSS',
        height: 75,
        delay: .1,
      },
      javascript: {
        title: 'JavaScript',
        height: 90,
        delay: .2,
      },
      node: {
        title: 'Node.js',
        height: 80,
        delay: .3,
      },
      react: {
        title: 'React',
        height: 80,
        delay: .4,
      },
    };
  },
  props: ['scrollPos'],
  methods: {
    skillHandler() {
      if (this.scrollPos > 1400) {
        return true;
      }
    },
  },
};
</script>

<style>

  .skills {
    display: flex;
    align-items: center;
  }

  .skill-list {
    color: white;
    font-size: 2rem;
    display: flex;
    align-items: flex-end;
  }

  @media screen and (max-width: 770px) {
    .skill-list {
      flex-flow: column;
      align-items: center;
    }

    .skill-container, .skills, .skill-list {
      width: 100%;
    }

  }

</style>

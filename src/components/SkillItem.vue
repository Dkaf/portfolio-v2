<template lang="pug">
  .skill-item
    skill-bar(:height="skill.height", :delay="skill.delay", :isShowing="isShowing")
    span.skill-name {{ skill.title }}
</template>

<script>
import SkillBar from './SkillBar';
export default {
  name: 'SkillItem',
  components: {SkillBar},
  props: ['skill', 'isShowing'],
};
</script>

<style>

.skill-item {
  display: flex;
  flex-flow: column;
  align-items: center;
  padding: 20px;
}

.skill-name {
  padding: 10px;
}

@media screen and (max-width: 770px) {
  .skill-item {
    flex-flow: row-reverse;
    justify-content: space-between;
    width: 100%;
    padding: 20px 0;
  }
}

</style>


<template lang="pug">
  .skill-bar
    .skill-level(:style="[isShowing ? { height: height + '%', transitionDelay: delay + 's' } : { height: 0 }]")
</template>

<script>
export default {
  name: 'SkillBar',
  props: ['height', 'isShowing', 'delay'],
};
</script>

<style>
.skill-bar {
  height: 140px;
  width: 20px;
  background: transparent;
  border: 1px solid white;
  display: flex;
  flex-flow: column;
  justify-content: flex-end;
}

.skill-level {
  background-color: #f45942;
  width: 100%;
  transition: height linear 1s;
}

@media screen and (max-width: 770px) {
  .skill-bar {
    transform: rotate(90deg);
    margin-right: 100px;
  }
}
</style>



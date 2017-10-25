<template lang="pug">
  .project-div
    .project-container
      h2.project-title {{ title }}
      .img-container
        img.screenshot(:src="screenshot.url", :alt="screenshot.alt")
      .link-container
        a.project-link(v-for="(url,type) in links", :key="type.id", :href="url") {{ type.toUpperCase() }}
      .description-div
        p.description {{ description }}
    tool-list(:tools="tools")
</template>

<script>
 import ToolList from './ToolList';
  export default {
    name: 'ProjectItem',
    props: [
      'title',
      'tools',
      'screenshot',
      'links',
      'description',
      ],
    components: {ToolList},
  };
</script>

<style>
  .project-div {
    padding: 50px;
    display: flex;
    flex-flow: row wrap;
  }

  .project-container {
    display: flex;
    flex-flow: column;
  }


  .project-title {
    color: #f45942;
    font-size: 3rem;
    margin: 0;
  }

  .section-title {
    margin: 0;
  }

  .link-container {
    margin: 10px;
    height: 40px;
  }

  .project-link {
    color: white;
    text-decoration: none;
    padding: 10px;
    font-size: 1.2rem;
    transition: color ease-in-out .2s, font-size ease-in-out .2s;
  }

  .project-link:hover {
    color: #f45942;
    font-size: 1.3rem;
  }
  
  .project-link:active {
    color: white;
  }

  .description, .screenshot{
    color: white;
  }

  .description {
    font-size: 1.5rem;
    max-width: 500px;
    min-width: 400px;
  }

  .screenshot {
    height: auto;
    width: 400px;
  }

  .screenshot

  .img-container {
    position: relative;
  }

  @media screen and (min-width: 770px) {
    .project-container:nth-of-type(even) {
      align-self: flex-end;
    }
  }
  @media screen and (max-width: 770px) {
    .project-container {
      align-items: center;
    }

    .project-div {
      justify-content: center;
    }

    .project-div, .project-container {
      width: 100%;
    }

    .project-title {
      text-align: center;
    }

    .description {
      min-width: 0;
      text-align: center;
      padding: 0 10px;
    }
  }
</style>

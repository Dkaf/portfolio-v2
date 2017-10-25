<template lang="pug">
  .project-section.section-div
    .project-container(v-for="project in projects")
      project-item(:title="project.title", :tools="project.tools", :links="project.links", :screenshot="project.screenshot", :description="project.description")
</template>

<script>
import ProjectItem from './ProjectItem';
export default {
  name: 'ProjectSection',
  components: {ProjectItem},
  data: function() {
    return {
      projects: [
          {
            title: 'Craft Beer Judge',
            links: {
              code: 'https://github.com/Dkaf/craft-beer-judge',
              server: 'https://github.com/Dkaf/craft-beer-judge-api',
            },
            tools: [
              'Node.Js',
              'Express',
              'React',
              'MongoDB',
              'Mongoose',
              'Bcrypt-js',
              'jsonwebtoken',
              'Mocha',
              'Chai',
              'Babel',
              'Webpack',
            ],
            screenshot: {url: '#', alt: 'screenshot'},
            description: `
            For the craft beer enthusiasts out there. Allows the user
            to search from a wideselection of craft beers,
            rate them, and add to their personal collections.
            The backend was built using Node.Js and Express
            with a MongoDB database, using BreweryDB for beer data.
            The frontend is being built with React and React-Router.
            `,
          },
          {
            title: 'MTG Deck Builder',
            links: {
              live: 'https://dkaf.github.io/mtg_react_capstone/',
              code: 'https://github.com/Dkaf/mtg_react_capstone/',
              server: 'https://github.com/Dkaf/mtg_capstone',
            },
            tools: [
              'Node.Js',
              'Express',
              'React',
              'MongoDB',
              'Mongoose',
              'Webpack',
            ],
            screenshot: {
              url: require('./../assets/deck_builder_deck_screenshot.png'),
              alt: 'screenshot',
            },
            description: `
              Deck builder for the Magic: The Gathering card game.
              Allows users to create decks and add cards to them by
              searching the MTG API. The backend was built with Node.Js
              and Express. The frontend is made with React.
            `,
          },
        ],
    };
  },
};
</script>

<style>
  .project-section {
    display: flex;
    justify-content: center;
  }

  @media screen and (max-width: 500px) {
    .project-section, .project-container {
      width: 100%;
    }
    .project-section {
      flex-flow: column;
      align-items: center;
    }
  }
</style>


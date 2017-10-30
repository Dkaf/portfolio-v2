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
              'Node.js',
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
            screenshot: {
              url: '#',
              alt: 'Craft Beer Screenshot',
            },
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
              'Node.js',
              'Express',
              'React',
              'MongoDB',
              'Mongoose',
              'Webpack',
            ],
            screenshot: {
              url: require('./../assets/deck_builder_deck_screenshot.png'),
              alt: 'Deck Builder Screenshot',
            },
            description: `
              Deck builder for the Magic: The Gathering card game.
              Allows users to create decks and add cards to them by
              searching the MTG API. The backend was built with Node.Js
              and Express. The frontend is made with React.
            `,
          },
          {
            title: 'Food Nutrition',
            links: {
              live: 'https://dkaf.github.io/food_nutrition/',
              code: 'https://github.com/Dkaf/food_nutrition',
              server: 'https://github.com/Dkaf/food_nutrition_server',
            },
            tools: [
              'Node.js',
              'Express',
              'React',
              'Redux',
              'React-Router',
              'Babel',
              'Webpack',
            ],
            screenshot: {
              url: require('./../assets/food_nutrition_quiz.png'),
              alt: 'Food Nutrition Screenshot',
            },
            description: `
              Type your recipe in the search bar and some 
              similar recipes will show up. 
              Select the recipe that's closest to yours 
              and healtier options will be displayed. 
              Just click a recipe that you're interested 
              in to see the instructions. 
              Select Nutrition Quiz in the top 
              right corner to start the quiz. 
              Two random recipes will be shown along 
              with a question. 
              Click the button assigned to what you 
              believe to be the correct answer.
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
    /* justify-content: center; */
    align-items: center;
    flex-flow: column;
  }


  @media screen and (max-width: 770px) {
    .project-section {
      align-items: center;
    }
  }
</style>


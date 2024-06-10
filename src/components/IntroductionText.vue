<template>
  <div class="flex mb-32">
    <p class="intro flex-1 ml-96 mr-20 mt-4">
      Hello! I'm <strong>{{ name }}</strong
      >, a passionate Blockchain and AI Engineer. I am constantly eager to learn and explore new
      technologies to push the boundaries of what is possible. I have a diverse background in
      computer science with a strong focus on blockchain technology and artificial intelligence. My
      journey started with a deep curiosity about how things work and a desire to create innovative
      solutions to real-world problems.
    </p>
    <img class="w-48 mr-96" src="/public/photo.png" />
    <!-- <p>
      I am a blockchain and AI engineer with a passion for developing innovative solutions. With my
      expertise in blockchain technology and artificial intelligence, I strive to create secure and
      intelligent systems that revolutionize industries.
    </p>
    <p>
      Through my experience in developing decentralized applications and implementing machine
      learning algorithms, I have gained a deep understanding of the potential of blockchain and AI
      in transforming various sectors such as finance, healthcare, and supply chain.
    </p>
    <p>
      My goal is to leverage the power of blockchain to create transparent and trustless systems,
      while harnessing the capabilities of AI to enable intelligent decision-making and automation.
      I am constantly exploring new technologies and staying up-to-date with the latest advancements
      in the field to ensure that I deliver cutting-edge solutions.
    </p> -->
  </div>
</template>

<script>
export default {
  name: 'IntroductionText',

  setup() {
    return {
      name: 'Kelvin Gevers'
    }
  }
}
</script>

<style scoped>
/* Add your custom styles here */
</style>

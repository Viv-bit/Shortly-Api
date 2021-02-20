<template>
    <main>
      <Header />
      <Hero />
      <TheForm />
      <Statistics />
      <Action />
      <Footer />
    </main>
</template>

<script>
import Header from './components/Header'
import Hero from './components/Hero'
import TheForm from './components/TheForm'
import Statistics from './components/Statistics'
import Action from './components/Action'
import Footer from './components/Footer'
export default {
  components: {
    Header,
    Hero,
    TheForm,
    Statistics,
    Action,
    Footer
  }
}
</script>

<style>
  * {
    box-sizing: border-box;
    margin: 0;
  }
</style>

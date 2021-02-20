<template>
    <main>
      <Header />
      <Hero />
      <Form />
      <Statistics />
      <Action />
      <Footer />
    </main>
</template>

<script>
import Header from './components/Header'
import Hero from './components/Hero'
import Form from './components/Form'
import Statistics from './components/Statistics'
import Action from './components/Action'
import Footer from './components/Footer'
export default {
  components: {
    Header,
    Hero,
    Form,
    Statistics,
    Action,
    Footer
  }
}
</script>

<style>
  * {
    box-sizing: border-box;
  }
</style>

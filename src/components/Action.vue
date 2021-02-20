<template>
  <section>
    <div class="content-container">
      <h3>Boost your links today</h3>
      <button>Get Started</button>
    </div>
  </section>
</template>

<script>

export default {
  
}
</script>

<style scoped>
section {
  background: url("../assets/images/bg-boost-desktop.svg");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  padding: 80px 40px;
  background-color: hsl(257, 27%, 26%);
}
section .content-container {
  margin: 0 auto;
  width: 90%;
  max-width: 600px;
  text-align: center;
}
section .content-container h3 {
  color: #fff;
  font-size: 30px;
  margin-bottom: 20px;
}
button {
  background: hsl(180, 66%, 49%);
  color: #fff;
  border-radius: 30px;
  border: 0;
  display: inline-block;
  outline: none;
  padding: 12px 30px;
  font: inherit;
  font-size: 18px;
  font-weight: 500;
  cursor: pointer;
  transition: all .5s ease-in-out;
}
button:hover,
button:focus{
  background: hsl(180, 85%, 60%);
}
@media screen and (max-width: 416px) {
  section .content-container h3 {
    font-size: 22px;
  }
}
</style>
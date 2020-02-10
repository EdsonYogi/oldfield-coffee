<template>
  <div class="home">
    <section class="intro">
      <div class="container logo">
        <img class="col-md-10 col-12" src="../assets/Logo.png" al="Logo" />
      </div>
    </section>
    <section class="slide">
      <div class="container">
        <div>
          <Slide />
          <router-link class="btn-oc col-6" to="/cardapio">Veja Nosso Cardápio</router-link>
        </div>
      </div>
    </section>
    <section class="sobre">
      <div class="container">
        <h1>Uma mistura de</h1>
        <div class="row no-gutter">
          <div class="paixao col-lg-6 col-12">
            <img class="my-lg-0 my-3" src="../assets/Home/Paixao.jpg" alt="Paixao" />
            <p class="col-sm-6 col-12 p-0">Paixão</p>
          </div>
          <div class="perfeicao col-lg-6 col-12">
            <img class="my-lg-0 my-3" src="../assets/Home/Perfeicao.jpg" alt="Perfeicao" />
            <p class="col-sm-6 col-12 p-0">Perfeição</p>
          </div>
        </div>
        <p
          class="col-12 p-0 mb-5"
        >Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        <router-link class="btn-oc" to="/sobre">Saiba Mais</router-link>
      </div>
    </section>
    <Footer />
  </div>
</template>

<script>
import Slide from "@/components/Slide.vue";
import Footer from "@/components/Footer.vue";

export default {
  name: "home",
  components: {
    Slide,
    Footer
  }
};
</script>

<style scoped>
.home .intro {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 700px;
  background-image: url("../assets/Home/Intro.jpg");
  background-size: cover;
  background-position: center;
}

.home .intro::before {
  display: block;
  content: "";
  width: 100%;
  height: 700px;
  background-color: rgba(0, 0, 0, 0.5);
  position: absolute;
}

.home .intro .logo {
  display: flex;
  justify-content: center;
  position: relative;
  z-index: 1;
  margin-top: 100px;
}

.home .slide {
  margin: 100px 0 40px 0;
}

.home .slide .btn-oc {
  position: relative;
  top: -120px;
}

.home .sobre {
  padding: 100px 0;
  background-color: #fc9c72;
}

.home .sobre h1 {
  text-align: center;
  font-size: 3.125em;
  color: white;
}

.home .sobre img {
  display: block;
  width: 100%;
  height: auto;
}

.home .sobre .paixao p,
.home .sobre .perfeicao p {
  display: block;
  height: 50px;
  line-height: 50px;
  text-align: center;
  text-transform: uppercase;
  letter-spacing: 2.5px;
  font-size: 2em;
  background-color: rgba(0, 0, 0, 0.75);
  position: relative;
  top: -75px;
}

.home .sobre p {
  color: white;
  font-size: 1.25em;
}

@media only screen and (max-width: 768px) {
  .home .intro {
    height: 400px;
  }

  .home .intro::before {
    height: 400px;
  }

  .home .slide {
    margin: 60px 0 0 0;
  }

  .home .slide .btn-oc {
    top: 0;
    background-color: #fc9c72;
    margin-bottom: 60px;
  }
}
</style>
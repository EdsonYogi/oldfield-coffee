<template>
  <div>
    <section class="sobre">
      <div class="container">
        <div class="conteudo">
          <img class="grupo-um row col-md-8 col-12" src="../assets/Logo.png" al="Logo" />
          <div class="grupo-dois row no-gutters">
            <p
              class="col-md-4 col-12 px-4"
            >Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            <div class="centro row col-md-4 col-12">
              <div class="losango"></div>
              <div class="texto row">
                <span>Paixão</span>
                <span>Perfeição</span>
              </div>
            </div>
            <p
              class="col-md-4 col-12 px-4"
            >Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
          </div>
          <div class="grupo-tres row no-gutters">
            <div class="col-md-6 col px-4">
              <h1>Nossa História</h1>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            </div>
            <img class="col-md-6 col px-4" src="../assets/Sobre/Historia.jpg" alt="Historia" />
          </div>
        </div>
      </div>
      <Footer />
    </section>
  </div>
</template>

<script>
import Footer from "@/components/Footer.vue";
export default {
  name: "sobre",
  components: {
    Footer
  }
};
</script>

<style scoped>
.sobre {
  padding-top: 200px;
}

.sobre .conteudo {
  display: block;
  width: 100%;
  height: auto;
  border: 3px solid #fc9c72;
  background-image: linear-gradient(to right, #fc9c72 50%, #4d4845 50%);
}

.sobre .conteudo img {
  display: block;
  height: auto;
  margin: 50px auto;
}

.sobre .conteudo .grupo-dois {
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
}

.grupo-dois .centro {
  display: flex;
  justify-content: center;
  align-items: center;
}

.grupo-dois .centro .losango {
  display: block;
  margin: 50px 0;
  width: 175px;
  height: 175px;
  background-image: linear-gradient(45deg, #4d4845 50%, #fc9c72 50%);
  transform: rotate(45deg);
}

.grupo-dois .centro .texto {
  max-width: 260px;
  position: relative;
  top: -150px;
  text-align: center;
}

.grupo-dois .centro .texto span {
  width: 125px;
  text-transform: uppercase;
  letter-spacing: 2px;
}

.sobre .conteudo .grupo-tres {
  color: white;
}

@media only screen and (max-width: 768px) {
  .sobre .conteudo {
    background-color: #4d4845;
    background-image: none;
  }

  .grupo-dois .centro .losango {
    border: 3px solid #fc9c72;
  }
}
</style>
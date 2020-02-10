<template>
  <section class="contato">
    <div class="container">
      <div class="conteudo">
        <h1 class="titulo">Contato</h1>
        <div class="row">
          <img class="mapa col-md-6" src="../assets/Contato/Mapa.jpg" alt="Contato" />
          <div class="col-md-6">
            <div>
              <h1 class="mt-0">Horário de Funcionamento</h1>
              <ul>
                <li>De Segunda á Domingo e Feriados</li>
                <li>Das 06:00 ás 23:00</li>
              </ul>
            </div>
            <div>
              <h1>Fale Conosco</h1>
              <ul>
                <li>
                  <font-awesome-icon class="icon-contato" icon="phone" />(11) 0000-0000 / (11) 9999-9999
                </li>
                <li>
                  <font-awesome-icon class="icon-contato" icon="envelope" />contato@oldfieldcoffee.com.br
                </li>
              </ul>
            </div>
            <div>
              <h1>Onde estamos</h1>
              <span>
                <font-awesome-icon class="icon-contato" icon="map-marked-alt" />Av. da Pasulista, 0000, Centro
                <br />São Paulo - SP
              </span>
            </div>
            <div>
              <h1>Redes Sociais</h1>
              <ul class="row no-gutters">
                <li>
                  <a class="rede-social" href="https://www.facebook.com/" target="_blank">
                    <img src="../assets/redesSociais/facebook.svg" alt="Facebook" />
                  </a>
                </li>
                <li>
                  <a class="rede-social" href="https://www.instagram.com/" target="_blank">
                    <img src="../assets/redesSociais/instagram.svg" alt="Instagram" />
                  </a>
                </li>
                <li>
                  <a class="rede-social" href="https://twitter.com/" target="_blank">
                    <img src="../assets/redesSociais/twitter.svg" alt="Twitter" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "contato"
};
</script>

<style scoped>
.contato {
  padding: 100px 0;
}

.contato h1 {
  text-transform: uppercase;
  font-size: 1.5em;
  color: white;
}

.contato .titulo {
  background-color: white;
  text-align: center;
  font-size: 3em;
  color: #4d4845;
}

.contato .conteudo {
  background-color: #fc9c72;
  color: white;
  padding: 50px;
}

.contato .mapa {
  display: block;
  width: 100%;
  height: auto;
  max-height: 500px;
  margin-bottom: 20px;
}

.contato li,
.contato span {
  font-size: 1.25em;
  color: #4d4845;
}

.contato svg {
  margin-right: 10px;
}

.rede-social img {
  width: 60px;
  height: 60px;
  margin-right: 20px;
  transition-duration: 0.5s;
}

.rede-social img:hover {
  width: 65px;
  height: 65px;
}

@media only screen and (max-width: 768px) {
  .contato .conteudo {
    padding: 20px;
  }

  .contato .mapa {
    margin-bottom: 50px;
  }
}
</style>
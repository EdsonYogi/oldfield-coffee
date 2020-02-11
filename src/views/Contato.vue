<template>
  <section class="contato">
    <div class="container">
      <div class="conteudo">
        <h1 class="titulo">Contato</h1>
        <div class="row">
          <a class="col-md-6" href="https://www.google.com/maps">
            <img class="mapa" src="../assets/Contato/Mapa.jpg" alt="Contato" />
          </a>
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
                  <font-awesome-icon class="icon-contato" icon="phone" />
                  <a href="tel:(11) 0000-0000">(11) 0000-0000</a> /
                  <a href="tel:(11) 0000-0000">(11) 9999-9999</a>
                </li>
                <li>
                  <font-awesome-icon class="icon-contato" icon="envelope" />
                  <a href="mailto:contato@oldfieldcoffee.com.br">contato@oldfieldcoffee.com.br</a>
                </li>
              </ul>
            </div>
            <div>
              <h1>Onde estamos</h1>
              <font-awesome-icon class="icon-contato" icon="map-marked-alt" />
              <a class="endereco" href="https://www.google.com/maps" target="_blank">
                Av. da Pasulista, 0000, Centro
                <br />São Paulo - SP
              </a>
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
a,
span,
li,
svg {
  font-size: 25px;
  color: #4d4845;
}

a:hover {
  color: white;
}

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
  padding: 50px;
}

.contato .mapa {
  display: block;
  width: 100%;
  height: auto;
  max-height: 500px;
  margin-bottom: 20px;
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

@media only screen and (max-width: 768px) {
  .contato .conteudo {
    padding: 20px;
  }

  .contato .mapa {
    margin-bottom: 50px;
  }
}
</style>
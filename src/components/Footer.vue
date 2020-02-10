<template>
  <section class="footer">
    <div class="container">
      <div class="comp-contato row">
        <div class="col-md-6 my-3">
          <h1>Horário de Funcionamento</h1>
          <ul>
            <li>De Segunda á Domingo e Feriados</li>
            <li>Das 06:00 ás 23:00</li>
          </ul>
        </div>
        <div class="col-md-6 my-3">
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
        <div class="col-md-6 my-3">
          <h1>Onde estamos</h1>
          <span>
            <font-awesome-icon class="icon-contato" icon="map-marked-alt" />Av. da Pasulista, 0000, Centro
            <br />São Paulo - SP
          </span>
        </div>
        <div class="col-md-6 my-3">
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
  </section>
</template>

<script>
export default {
  name: "Footer"
};
</script>

<style scoped>
* {
  color: white;
}

.footer h1 {
  font-size: 1.5em;
  text-transform: uppercase;
  letter-spacing: 2px;
  color: #fc9c72;
}

.icon-contato {
  margin-right: 10px;
}

.rede-social {
  display: block;
  width: 65px;
  height: 65px;
  margin-right: 20px;
  cursor: pointer;
}

.rede-social img {
  width: 60px;
  height: 60px;
  transition-duration: 0.5s;
}

.rede-social img:hover {
  width: 65px;
  height: 65px;
}

.comp-contato {
  justify-content: center;
  margin: 100px 0;
}
</style>
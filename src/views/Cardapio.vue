<template>
  <div>
    <section class="cardapio">
      <div class="container">
        <div class="conteudo">
          <h1>Cardápio</h1>
          <div class="bebidas">
            <h1>Bebidas</h1>
            <div class="row">
              <div class="quentes col-md-6">
                <h2>Quentes</h2>
                <ul>
                  <li class="item row no-gutters">
                    <span class="nome">Café Tradicional</span>
                    <span class="linha col"></span>
                    <span class="preco">9,99</span>
                  </li>
                  <li class="item row no-gutters">
                    <span class="nome">Café Americano</span>
                    <span class="linha col"></span>
                    <span class="preco">9,99</span>
                  </li>
                  <li class="item row no-gutters">
                    <span class="nome">Café Expresso</span>
                    <span class="linha col"></span>
                    <span class="preco">9,99</span>
                  </li>
                  <li class="item row no-gutters">
                    <span class="nome">Chá</span>
                    <span class="linha col"></span>
                    <span class="preco">9,99</span>
                  </li>
                  <li class="item row no-gutters">
                    <span class="nome">Cappuccino</span>
                    <span class="linha col"></span>
                    <span class="preco">9,99</span>
                  </li>
                  <li class="item row no-gutters">
                    <span class="nome">Latte</span>
                    <span class="linha col"></span>
                    <span class="preco">9,99</span>
                  </li>
                  <li class="item row no-gutters">
                    <span class="nome">Mocha</span>
                    <span class="linha col"></span>
                    <span class="preco">9,99</span>
                  </li>
                  <li class="item row no-gutters">
                    <span class="nome">Chocolate Quente</span>
                    <span class="linha col"></span>
                    <span class="preco">9,99</span>
                  </li>
                </ul>
              </div>
              <div class="geladas col-md-6">
                <h2>Geladas</h2>
                <ul>
                  <li class="item row no-gutters">
                    <span class="nome">Chá Gelado</span>
                    <span class="linha col"></span>
                    <span class="preco">9,99</span>
                  </li>
                  <li class="item row no-gutters">
                    <span class="nome">Cold Brew</span>
                    <span class="linha col"></span>
                    <span class="preco">9,99</span>
                  </li>
                  <li class="item row no-gutters">
                    <span class="nome">Frappé</span>
                    <span class="linha col"></span>
                    <span class="preco">9,99</span>
                  </li>
                  <li class="item row no-gutters">
                    <span class="nome">Latte Gelado</span>
                    <span class="linha col"></span>
                    <span class="preco">9,99</span>
                  </li>
                  <li class="item row no-gutters">
                    <span class="nome">Suco</span>
                    <span class="linha col"></span>
                    <span class="preco">9,99</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div class="comidas">
            <h1>Comidas</h1>
            <div class="row">
              <div class="salgadas col-md-6">
                <h2>Salgados</h2>
                <ul>
                  <li class="item row no-gutters">
                    <span class="nome">Coxinha</span>
                    <span class="linha col"></span>
                    <span class="preco">9,99</span>
                  </li>
                  <li class="item row no-gutters">
                    <span class="nome">Empada</span>
                    <span class="linha col"></span>
                    <span class="preco">9,99</span>
                  </li>
                  <li class="item row no-gutters">
                    <span class="nome">Croissant</span>
                    <span class="linha col"></span>
                    <span class="preco">9,99</span>
                  </li>
                  <li class="item row no-gutters">
                    <span class="nome">Pão de Queijo</span>
                    <span class="linha col"></span>
                    <span class="preco">9,99</span>
                  </li>
                  <li class="item row no-gutters">
                    <span class="nome">Sanduíche</span>
                    <span class="linha col"></span>
                    <span class="preco">9,99</span>
                  </li>
                  <li class="item row no-gutters">
                    <span class="nome">Esfira</span>
                    <span class="linha col"></span>
                    <span class="preco">9,99</span>
                  </li>
                </ul>
              </div>
              <div class="doces col-md-6">
                <h2>Doces</h2>
                <ul>
                  <li class="item row no-gutters">
                    <span class="nome">Bolo</span>
                    <span class="linha col"></span>
                    <span class="preco">9,99</span>
                  </li>
                  <li class="item row no-gutters">
                    <span class="nome">Brownie</span>
                    <span class="linha col"></span>
                    <span class="preco">9,99</span>
                  </li>
                  <li class="item row no-gutters">
                    <span class="nome">Donuts</span>
                    <span class="linha col"></span>
                    <span class="preco">9,99</span>
                  </li>
                  <li class="item row no-gutters">
                    <span class="nome">Muffins</span>
                    <span class="linha col"></span>
                    <span class="preco">9,99</span>
                  </li>
                  <li class="item row no-gutters">
                    <span class="nome">Cupcake</span>
                    <span class="linha col"></span>
                    <span class="preco">9,99</span>
                  </li>
                  <li class="item row no-gutters">
                    <span class="nome">Cookie</span>
                    <span class="linha col"></span>
                    <span class="preco">9,99</span>
                  </li>
                  <li class="item row no-gutters">
                    <span class="nome">Torta</span>
                    <span class="linha col"></span>
                    <span class="preco">9,99</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="contato">
        <Footer />
      </div>
    </section>
  </div>
</template>

<script>
import Footer from "@/components/Footer.vue";
export default {
  name: "cardapio",
  components: {
    Footer
  }
};
</script> 

<style scoped>
.cardapio {
  padding-top: 200px;
}

.cardapio .conteudo {
  display: block;
  width: 100%;
  height: auto;
  background-color: #fc9c72;
  padding: 50px;
}

.cardapio .conteudo h1 {
  text-align: center;
  text-transform: uppercase;
  font-size: 3em;
  font-weight: bold;
  letter-spacing: 5px;
  background-color: white;
  color: #4d4845;
}

.cardapio .conteudo h2 {
  text-align: center;
  text-transform: uppercase;
  font-size: 1.5em;
  letter-spacing: 5px;
  background-color: white;
  color: #4d4845;
}

.cardapio .conteudo .item {
  display: flex;
  flex-wrap: nowrap;
}

.cardapio .conteudo .item .nome {
  margin-right: 5px;
}

.cardapio .conteudo .item .preco {
  margin-left: 5px;
}

.cardapio .conteudo .linha {
  display: inline-block;
  width: 100%;
  border-bottom: 1px dotted white;
  margin-bottom: 5px;
}

.cardapio .conteudo .bebidas,
.cardapio .conteudo .comidas {
  display: block;
  width: 100%;
  height: auto;
  padding: 50px;
  margin: 50px 0;
  background-color: #4d4845;
  border: 5px solid white;
  color: white;
}

.cardapio .contato {
  margin: 100px 0;
}

@media only screen and (max-width: 768px) {
  .cardapio .conteudo {
    padding: 10px;
  }

  .cardapio .conteudo .bebidas,
  .cardapio .conteudo .comidas {
    padding: 10px;
  }

  .quentes,
  .geladas,
  .salgadas,
  .doces {
    margin: 20px 0;
  }
}
</style>
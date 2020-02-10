<template>
  <div class="comp-slide">
    <div
      class="imagem"
      :style="{backgroundImage: `url(${imagens[imagem]})`, height: `${altura}px`}"
    ></div>
    <ul class="itens">
      <li class="item" :class="{ativo: imagem == 0}" @click="onSlide(0)"></li>
      <li class="item" :class="{ativo: imagem == 1}" @click="onSlide(1)"></li>
      <li class="item" :class="{ativo: imagem == 2}" @click="onSlide(2)"></li>
      <li class="item" :class="{ativo: imagem == 3}" @click="onSlide(3)"></li>
      <li class="item" :class="{ativo: imagem == 4}" @click="onSlide(4)"></li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "Slide",
  data() {
    return {
      imagens: [
        require("../assets/slide/01.jpg"),
        require("../assets/slide/02.jpg"),
        require("../assets/slide/03.jpg"),
        require("../assets/slide/04.jpg"),
        require("../assets/slide/05.jpg")
      ],
      imagem: 0,
      animar: false,
      timer: "",
      altura: document.querySelector(".container").clientWidth / 1.7777
    };
  },
  methods: {
    onTimerSlide() {
      this.timer = setInterval(this.onAutoSlide, 5000);
    },
    onAutoSlide() {
      if (this.imagem < this.imagens.length - 1) {
        this.imagem += 1;
      } else {
        this.imagem = 0;
      }
    },
    onSlide(value) {
      this.imagem = value;
      clearInterval(this.timer);
      this.onTimerSlide();
    }
  },
  watch: {
    imagem() {
      this.animar = !this.animar;
    }
  },
  created() {
    this.onTimerSlide();
  }
};
</script>

<style scoped>
.comp-slide {
  display: flex;
  flex-direction: column;
}

.comp-slide .imagem {
  display: block;
  width: 100%;
  background-size: 100% auto;
  background-position: center;
  transition: all ease 1s;
}

.comp-slide .itens {
  display: flex;
  justify-content: center;
  width: 100%;
  position: relative;
  top: -30px;
  z-index: 0;
}

.comp-slide .itens .item {
  display: block;
  width: 20px;
  height: 20px;
  border-radius: 100%;
  margin: 0 5px;
  background-color: #4d4845;
  cursor: pointer;
}

.comp-slide .itens .item.ativo {
  background-color: #fc9c72;
}
</style>
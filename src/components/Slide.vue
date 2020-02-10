<template>
  <div class="comp-slide">
    <div
      class="imagem"
      :style="{backgroundImage: `url(${imagens[imagem]})`, height: `${altura}px`}"
    ></div>
    <ul class="itens">
      <li
        class="item"
        v-for="(img, index) in imagens"
        :class="{ativo: imagem == index}"
        @click="onSlide(index)"
        :key="index"
      ></li>
    </ul>
  </div>
</template>

<script>
import img1 from "../assets/slide/01.jpg";
import img2 from "../assets/slide/02.jpg";
import img3 from "../assets/slide/03.jpg";
import img4 from "../assets/slide/04.jpg";
import img5 from "../assets/slide/05.jpg";

export default {
  name: "Slide",
  data() {
    return {
      imagens: [img1, img2, img3, img4, img5],
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
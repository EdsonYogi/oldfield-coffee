<template>
  <header>
    <nav :class="{ativo: navbar}">
      <div class="container">
        <div class="menu">
          <span class="mobile" @click="mobile = !mobile">
            <font-awesome-icon icon="bars" />
          </span>
          <ul :class="{ativo: mobile}">
            <li class="close" @click="mobile = !mobile">
              <font-awesome-icon icon="times-circle" />
            </li>
            <li @click="mobile = !mobile">
              <router-link to="/">Home</router-link>
            </li>
            <li @click="mobile = !mobile">
              <router-link to="/sobre">Sobre Nós</router-link>
            </li>
            <li @click="mobile = !mobile">
              <router-link to="/cardapio">Cardápio</router-link>
            </li>
            <li @click="mobile = !mobile">
              <router-link to="/contato">Contato</router-link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </header>
</template>

<script>
export default {
  name: "Header",
  data() {
    return {
      mobile: false,
      navbar: false
    };
  },
  methods: {
    onScroll() {
      let top = 0;
      window.addEventListener("scroll", () => {
        top = document.body.getBoundingClientRect().top;
        if (top < -100 && !this.navbar) {
          this.navbar = true;
        } else if (top == 0) {
          this.navbar = false;
        }
      });
    }
  },
  mounted() {
    this.onScroll();
  }
};
</script>

<style scoped>
nav {
  display: block;
  width: 100%;
  position: fixed;
  z-index: 999;
  background-color: transparent;
  transition-duration: 0.5s;
}

nav.ativo {
  background-color: rgba(0, 0, 0, 0.5);
}

.mobile {
  display: none;
  font-size: 2em;
  color: white;
  padding: 10px;
  cursor: pointer;
  transition-duration: 0.5s;
}

.menu .close {
  display: none;
  margin: 10px;
  font-size: 2em;
  color: #4d4845;
}

.menu .close:hover {
  color: white;
}

.menu {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 70px;
}

.menu ul {
  display: flex;
  justify-content: space-between;
  width: 100%;
}

.menu ul li a {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 200px;
  height: auto;
  margin: 0 5px;
  text-transform: uppercase;
  font-size: 1em;
  letter-spacing: 2px;
  color: white;
  transition-duration: 0.5s;
}

.menu ul li a:hover,
.mobile:hover {
  color: #fc9c72;
}

@media only screen and (max-width: 768px) {
  .menu .mobile {
    display: block;
  }

  .menu .close {
    display: block;
  }

  .menu ul {
    display: flex;
    flex-direction: column;
    position: absolute;
    top: 0;
    right: 0;
    background-color: #fc9c72;
    transform: translateY(-100%);
    transition: all 0.5s linear;
  }

  .menu ul.ativo {
    transform: translateY(0);
  }

  .menu ul li {
    width: 200px;
    margin: 0 auto;
  }

  .menu ul li a {
    margin: 0 auto;
    padding: 10px 0;
  }

  .menu ul li a:hover {
    color: #4d4845;
  }
}
</style>
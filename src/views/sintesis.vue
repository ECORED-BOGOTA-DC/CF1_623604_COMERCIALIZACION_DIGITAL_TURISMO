<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="fas fa-sitemap" titulo="Síntesis")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5

    .row.justify-content-center
      .col-lg-10.mb-5(data-aos="fade-left")
        figure
          img(src="@/assets/curso/temas/sintesis.svg", alt="Síntesis, resumen que se hace sobre los temas abordados en el componente formativo, que para este caso se desarrollaron:<br>1. Elementos del turismo<br>2. Tipos de turismo<br>3. Sistema turístico<br>4. Experiencias turísticas")
      .col-auto(data-aos="flip-up")
        a.anexo.mb-4(:href="obtenerLink('/downloads/sintesis.pdf')" target="_blank")
          .anexo__icono
            img(src="@/assets/template/icono-pdf.svg")
          .anexo__texto
            p Anexo. Síntesis

</template>

<script>
export default {
  name: 'Sintesis',
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>

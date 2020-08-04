<template>
  <div class="centralizar">
    <h5>Ingrediente</h5>
    <div v-for="(line, index) in lines" :key="index" class="row">
      <div class="col-lg-4">
        <div class="row">
          <div class="col-10">
            <q-input
              v-model="line.Ingrediente"
              label="Ingrediente"
              placeholder="Farinha de Trigo"
              type="tel"
              value=""
            />
          </div>
        </div>
      </div>

      <div class="col-lg-4">
        <div class="row">
        <div class="col-10">
        <q-input
              v-model="line.Quantidade"
              label="Quantidade"
              placeholder="1 kilo"
              type="tel"
              value=""
            />
      </div>
      </div>
      </div>

      <div class="col-lg-2">
        <div class="block float-right">
          <q-btn round @click="removeLine(index)" icon="delete" />
          <q-btn round v-if="index + 1 === lines.length" @click="addLine" icon="add" />
        </div>
      </div>
    </div>

    <h5>Receita</h5>
    <q-input v-model="text" placeholder="Titulo" label="Descrição" />
    <q-input v-model="text" placeholder="4 porções" label="Rendimentos" />
    <q-input v-model="text" placeholder="2 horas" label="Tempo de preparo" />
    <q-input v-model="text" placeholder="Como fazer" label="Modo de preparo" type="textarea"></q-input>
    <q-btn color="primary" class="btnleft" label="Enviar"></q-btn>
  </div>
</template>

<style>
.centralizar{
width: 80%;display:block;margin: 0 auto;}
.btnleft{
margin: 30px 0px;
float:right;
}
</style>

<script>
export default {
  name: 'PhoneNumberLine',
  data () {
    return {
      lines: [],
      blockRemoval: true
    }
  },
  watch: {
    lines () {
      this.blockRemoval = this.lines.length <= 1
    }
  },
  methods: {
    addLine () {
      const checkEmptyLines = this.lines.filter(line => line.number === null)
      if (checkEmptyLines.length >= 1 && this.lines.length > 0) {
        return
      }
      this.lines.push({
        countryCode: null,
        number: null,
        phoneUsageType: null
      })
    },
    removeLine (lineId) {
      if (!this.blockRemoval) {
        this.lines.splice(lineId, 1)
      }
    }
  },
  mounted () {
    this.addLine()
  }
}
</script>

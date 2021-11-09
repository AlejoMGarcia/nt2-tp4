<template>

  <section class="src-components-formulario">
    <vue-form :state="formstate" @submit.prevent="cargarRegistro()">

      <validate tag="div" class="mt-4">
        <label for="name">Nombre</label>
        <input type="text" 
          id="name" 
          name="name" 
          class="form-control"
          v-model.trim="formData.name" 
          :minlength="minlength" 
          :maxlength="maxlength"
          required
          autocomplete="off">

        <field-messages name="name" show="$dirty">
          <div slot="required" class="alert alert-danger mt-2">
            El nombre es requerido.
          </div>
          <div slot="minlength" class="alert alert-danger mt-2">
            El nombre debe tener al menos {{minlength}} caracteres.
          </div>
          <div v-if="nameHasMaxLength()" class="alert alert-danger mt-2">
            El nombre debe tener como máximo {{maxlength}} caracteres.
          </div>
        </field-messages>
      </validate>
      <br>

       
      <validate tag="div">
        <label for="age">Edad</label>
        <input type="number" 
          id="age" 
          name="age" 
          v-model.number="formData.age"
          class="form-control"
          required 
          :min="minAge" 
          :max="maxAge"
          autocomplete="off">

        <field-messages name="age" show="$dirty">
          <div slot="required" class="alert alert-danger mt-2">
            El nombre es requerido.
          </div>
          <div slot="min" class="alert alert-danger mt-2">
            La edad debe ser mayor a {{minAge}}.
          </div>
          <div slot="max" class="alert alert-danger mt-2">
            La edad no debe ser mayor a {{maxAge}}.
          </div>
        </field-messages>

      </validate>
      <br>


      
      <validate tag="div">
        <label for="email">Email</label>
        <input type="email" 
          id="email" 
          name="email" 
          placeholder="me@example.com"
          class="form-control"
          v-model.trim="formData.email" 
          required
          autocomplete="off">

        <field-messages name="email" show="$dirty">
          <div slot="required" class="alert alert-danger mt-2">
            El email es requerido.
          </div>
          <!-- <div v-if="!emailHasValidPatter()" class="alert alert-danger mt-2">
            El formato del email es invalido. El mismo debe ser sometext@sometext.com
          </div> -->
        </field-messages>
      </validate>
      <br>

      <button class="btn btn-success my-4" :disabled="formstate.$invalid" type="submit">Agregar registro</button>

      </vue-form>

      <h2>Registros</h2>
      <br>
       <div v-if="rows.length" class="table-responsive">
        <table class="table">
          <tr>
            <th>Nombre</th>
            <th>Edad</th>
            <th>Email</th>
          </tr>
          <tr v-for="(row,index) in rows" :key="index" >
            <td>{{ row.name }}</td>
            <td>{{ row.age }}</td>
            <td>{{ row.email }}</td>
          </tr>
        </table> 
      </div>
      <h3 v-else class="alert alert-info mt-4">No hay datos ingresados</h3>
  </section>

</template>

<script>

  export default  {
    name: 'src-components-formulario',
    props: [],
    mounted () {

    },
    data () {
      return {
        minlength : 3,
        maxlength : 15,
        minAge : 18,
        maxAge : 120,
        formstate : {},
        formData : this.getInitialData(),
        rows : []
      }
    },
    methods: {
      getInitialData() {
        return {
          name : null,
          age : null,
          email : null,
        }
      },
      nameHasMaxLength() {
        return this.formData.name && this.formData.name.length == this.maxlength
      },
      emailHasValidPatter() {

      },
      cargarRegistro() {
        this.rows.push(this.formData)

        this.formData = this.getInitialData()
        this.formstate._reset() 
      }
    },
    computed: {

    }
}


</script>

<style scoped lang="css">
  .src-components-formulario {

  }
</style>

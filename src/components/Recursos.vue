<template>

  <section class="src-components-recursos">
    <h2 class="mt-4">Recursos XMLHttpRequest</h2>
    <button class="btn btn-primary mt-3" type="button"  @click="execHttpRequest()">
      <div v-if="!disabledHttpRequest">
        <span role="status" aria-hidden="true"></span>
        Ejecutar HttpRequest
      </div>
      <div v-else>
        <span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
        Loading HtppRequest...
      </div>
    </button>
    <br>
      <div v-if="resourcesHttpRequest.length" class="table-responsive mt-3">
      <table class="table">
        <tr>
          <th>Nombre</th>
          <th>Email</th>
          <th>Número de teléfono</th>
        </tr>
        <tr v-for="(resourceHttpRequest, index) in resourcesHttpRequest" :key="index" >
          <td>{{ resourceHttpRequest.name }}</td>
          <td>{{ resourceHttpRequest.email }}</td>
          <td>{{ resourceHttpRequest.telephoneNumber }}</td>
        </tr>
      </table> 
    </div>
    <h3 v-if="shouldExecuteHttpRequest()" class="alert alert-info mt-4">Todavía no se ejecuto el request.</h3>
    <div v-if="disabledHttpRequest" class="spinner-border align-center mt-3" role="status">
      <span class="sr-only">Loading HttpRequest...</span>
    </div>
    <br>

    
    <h2 class="mt-4">Recursos fetch</h2>
    <button class="btn btn-primary mt-3" type="button"  @click="execFetch()">
      <div v-if="!disabledFetch">
        <span role="status" aria-hidden="true"></span>
        Ejecutar Fetch
      </div>
      <div v-else>
        <span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
        Loading Fetch...
      </div>
    </button>
    <br>
      <div v-if="resourcesFetch.length" class="table-responsive mt-3">
      <table class="table">
        <tr>
          <th>Nombre</th>
          <th>Email</th>
          <th>Número de teléfono</th>
        </tr>
        <tr v-for="(resourceFetch, index) in resourcesFetch" :key="index" >
          <td>{{ resourceFetch.name }}</td>
          <td>{{ resourceFetch.email }}</td>
          <td>{{ resourceFetch.telephoneNumber }}</td>
        </tr>
      </table> 
    </div>
    <h3 v-if="shouldExecuteFetch()" class="alert alert-info mt-4">Todavía no se ejecuto el request.</h3>
    <div v-if="disabledFetch" class="spinner-border align-center mt-3" role="status">
      <span class="sr-only">Loading fecth...</span>
    </div>
    <br>

    <h2 class="mt-4">Recursos axios</h2>
    <button class="btn btn-primary mt-3" type="button"  @click="execAxios()">
      <div v-if="!disabledAxios">
        <span role="status" aria-hidden="true"></span>
        Ejecutar Axios
      </div>
      <div v-else>
        <span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
        Loading Axios...
      </div>
    </button>
    <br>
      <div v-if="resourcesAxios.length" class="table-responsive mt-3">
      <table class="table">
        <tr>
          <th>Nombre</th>
          <th>Email</th>
          <th>Número de teléfono</th>
        </tr>
        <tr v-for="(resourceAxios, index) in resourcesAxios" :key="index" >
          <td>{{ resourceAxios.name }}</td>
          <td>{{ resourceAxios.email }}</td>
          <td>{{ resourceAxios.telephoneNumber }}</td>
        </tr>
      </table> 
    </div>
    <h3 v-if="shouldExecuteAxios()" class="alert alert-info mt-4">Todavía no se ejecuto el request.</h3>
    <div v-if="disabledAxios" class="spinner-border align-center mt-3" role="status">
      <span class="sr-only">Loading Axios...</span>
    </div>
    <br>

    
  </section>
</template>

<script>

  export default  {
    name: 'src-components-recursos',
    props: [],
    mounted () {

    },
    data () {
      return {
        url: 'https://618ab08e34b4f400177c4823.mockapi.io/recursos-tp4-nt2',
        disabledHttpRequest: false,
        shouldExecuteHttpRequestData: true,
        disabledFetch : false,
        shouldExecuteFetchData: true,
        disabledAxios : false,
        shouldExecuteAxiosData: true,
        resourcesHttpRequest : [],
        resourcesFetch : [],
        resourcesAxios : [],        
      }
    },
    methods: {
      execHttpRequest() {
        this.resourcesHttpRequest = []
        this.disabledHttpRequest = true
        this.shouldExecuteHttpRequestData = false

        let xhr = new XMLHttpRequest()
        xhr.open('get',this.url)
        xhr.addEventListener('load', () => {
          if(xhr.status == 200) {
            let respuesta = JSON.parse(xhr.response)
            this.resourcesHttpRequest = respuesta
            this.disabledHttpRequest = false
          }

          else {
            console.error(`ERROR XHR Cb (status): ${xhr.status}`)
            this.disabledHttpRequest = false //Para poder volver a ejecutarlo en caso de error  
          }
        })
        
        xhr.addEventListener('error', e => {
            console.error('ERROR XHR Cb (event):', e)
            this.disabledHttpRequest = false //Para poder volver a ejecutarlo en caso de error                  
        })
        xhr.send()
      },
      async execFetch() {
        this.resourcesFetch = []
        this.disabledFetch = true
        this.shouldExecuteFetchData = false

        try {
          let fecth = await fetch(this.url)
          let response = await fecth.json()
          this.resourcesFetch = response
          this.disabledFetch = false
        }
        catch(error) {
          console.error('Error FETCH', error)
          this.disabledFetch = false //Para poder volver a ejecutarlo en caso de error          
        }
      },
      async execAxios() {
        this.resourcesAxios = []
        this.disabledAxios = true
        this.shouldExecuteAxiosData = false

        try {
          let response = await this.axios(this.url)
          this.resourcesAxios = response.data
          this.disabledAxios = false
        }
        catch(error) {
          console.error('Error AXIOS', error)
          this.disabledAxios = false //Para poder volver a ejecutarlo en caso de error
        }
      },
      shouldExecuteHttpRequest() {
        return this.shouldExecuteHttpRequestData
      },
      shouldExecuteFetch() {
        return this.shouldExecuteFetchData
      },
      shouldExecuteAxios() {
        return this.shouldExecuteAxiosData
      }
    },
    computed: {

    }
}


</script>

<style scoped lang="css">
  .src-components-recursos {

  }
</style>

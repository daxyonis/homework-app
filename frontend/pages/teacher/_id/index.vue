<template>
    <div class="row">        
      Classes
    </div>
</template>

<script>

export default {
  //The result from asyncData will be merged with data
  asyncData (context) {
    console.log(context.env);
    console.log(context.params);
    return context.$axios.$get(`${context.env.BASE_API_URL}/teachers/${context.params.id}`)
      .then((res) => {
        console.log(res);
        return { 
          id: res.id,
          firstname: res.firstname,
          lastname: res.lastname }
      })
  },
  
  components : {
    
  },
  methods: {
    
  },
 
}
</script>

<style>
</style>

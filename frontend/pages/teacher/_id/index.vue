<template>
    <div class="row">        
      <div class="col-lg-12 mt-3 ml-3">
        <h1> Mes Classes </h1>
        <ul class="cuteList">
          <li v-for="c in classes" :key="c.id">
            <nuxt-link 
            no-prefetch
            :to="{name: 'teacher-id-class-classId', params:{ id: c.teacher.id, classId: c.id }}">
            {{c.name}}
            </nuxt-link>
          </li>
        </ul>        
      </div>
    </div>
</template>

<script>

export default {
  // This runs before component is rendered
  //The result from asyncData will be merged with data
  asyncData (context) {
    // console.log(context.env);
    // console.log(context.params);
    return context.$axios.$get(`${context.env.BASE_API_URL}/classes?teacher.id=${context.params.id}`)
      .then((res) => {
        // console.log(res);
        return { 
          classes: res
          }
      })
  },
  
  components : {
    
  },
  methods: {
    
  },  
 
}
</script>

<style>
  ul.cuteList {
    list-style: none;
  }
</style>

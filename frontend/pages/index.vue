<template>
<div class="mx-auto mt-5" style="width: 600px;">
  <div class="card-group">
    <div class="card text-white bg-success mb-3" style="max-width: 20rem;">    
      <nuxt-link to="/teacher/1" class="home-link">
        <div class="card-body">
          <h5 class="card-title p-5">Je suis enseignant(e)</h5>        
        </div>    
      </nuxt-link>
    </div>
  
    <div class="card text-white bg-info mb-3" style="max-width: 20rem;">    
      <nuxt-link to="/student/1" class="home-link">
        <div class="card-body">
          <h5 class="card-title p-5">Je suis élève</h5>        
        </div>  
      </nuxt-link>
    </div>  
  </div>
</div>
</template>

<script>
export default {

}
</script>

<style>
  a.home-link:link, a.home-link:visited {
    color: white;
    text-decoration: none;
  }

  a.home-link:hover, a.home-link:active {
    color: black;
    text-decoration: none;
  }
</style>
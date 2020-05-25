<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-primary">
  <a class="navbar-brand" href="#">École Augustin Roscelli</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse" id="navbarColor01">
    <ul class="navbar-nav mr-auto">
      <li class="nav-item active">
        <nuxt-link class="nav-link" to="/">Accueil <span class="sr-only">(current)</span></nuxt-link>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Mes Classes</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Mes Élèves</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">À Propos</a>
      </li>
    </ul>
    <form class="form-inline my-2 my-lg-0">
      <input class="form-control mr-sm-2" type="text" placeholder="Search">
      <button class="btn btn-secondary my-2 my-sm-0" type="submit">Search</button>
    </form>
  </div>
</nav>
</template>

<script>
export default {

}
</script>

<style>

</style>
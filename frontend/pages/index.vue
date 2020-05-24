<template>
<div>    
    <div class="row">
      <div id="week-menu" class="col-lg-4 col-md-6">
        <WeekMenu v-on:select-week="weekSelection"></WeekMenu>
      </div>
    </div>
    <div class="row">
      <div id="content" class="col-lg-10 col-md-12">
        <StudentView v-bind:week="selectedWeek"></StudentView>
      </div>
    </div>  
</div>
</template>

<script>
import WeekMenu from '../components/WeekMenu';
import StudentView from '../components/StudentView';

export default {
  data(){
    return {
      selectedWeek:{}
    }
  },
  components : {    
    WeekMenu,
    StudentView
  },
  methods: {
    weekSelection: function($event){
      this.selectedWeek = $event;
    }
  }
}
</script>

<style>
</style>

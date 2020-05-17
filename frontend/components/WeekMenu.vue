<template>
<div class="pt-4">    
    <h2>{{title}}</h2>
    <div class="form-group">     
      <select class="form-control" id="weekSelect" v-model="selectedWeek"  @change = "selectWeek">
        <option v-for="week in sortedWeeks"
        :key="week.id"
        v-bind:selected="selectedWeek.id==week.id ? 'selected' : ''"
        v-bind:value="week">
        {{week.note}}
        </option>
      </select>
    </div>
  <!-- <nav class="nav nav-pills flex-column">
      <a class="nav-link" 
          v-for="week in sortedWeeks" 
          href="#" 
          :key="week.id" 
          v-bind:class="selectedWeek.id==week.id ? 'active' : ''"
          @click = "selectWeek(week)">
          {{week.note}}
      </a>    
  </nav> -->
</div>
</template>

<script>
import weeksQuery from '~/queries/weeks'

export default {
    data() {
        return {
            title: "Semaine en cours",
            weeks: [],
            selectedWeek: { id:0 }
        };
    },
    methods: {
        selectWeek(){            
            this.$emit('select-week', this.selectedWeek);
        }
    },
    computed: {
        // Sort the weeks by desc date
        sortedWeeks: function(){       
            let vm = this;
            let sorted = this.weeks.sort(function(a,b){
                let momentA = vm.$moment(a.beginDate);
                let momentB = vm.$moment(b.beginDate);
                return momentB.diff(momentA);
                });
            if(this.selectedWeek.id == 0 && sorted.length){
                this.selectedWeek = sorted[0];
                this.selectWeek();
            }
            return sorted;
        }
    },
    apollo:{
        weeks: {
            prefetch: true,
            query: weeksQuery            
        }
    },   

}
</script>

<style>

</style>
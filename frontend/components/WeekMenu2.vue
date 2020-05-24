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
  </div>
</template>

<script>
export default {
    props: ['weeks'],
    data() {
            return {
                title: "Semaine en cours",                
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
}
</script>

<style>

</style>
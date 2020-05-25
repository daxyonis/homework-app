<template>
<div>
    <div class="row">
        <div class="col-lg-12 mt-3 ml-3">
            <h2>{{myClass.name}}</h2>            
            <div class="row">
                <div id="week-menu" class="col-lg-4 col-md-6">        
                    <WeekMenu2 
                        v-bind:weeks="myClass.weeks" 
                        v-on:select-week="weekSelection">
                    </WeekMenu2>
                </div>
            </div>
            <div class="row">
                <div id="content" class="col-lg-10 col-md-12">
                    <TeacherView 
                        v-bind:selectedWeek="selectedWeek">
                    </TeacherView>
                </div>
            </div>
        </div>
    </div>    
</div>
</template>

<script>
import WeekMenu2 from '~/components/WeekMenu2'
import TeacherView from '~/components/TeacherView'

export default {
    asyncData(context){
        return context.$axios.$get(`${context.env.BASE_API_URL}/classes?id=${context.params.classId}`)
        .then((res) => {
            //console.log(res);
            let classFound = {};
            if(res.length){
                classFound = res[0];
            }
            return { 
                myClass: classFound
            }
        });
    },
    data(){
        return {
            selectedWeek: {}
        }
    },
    methods: {
        weekSelection: function($event){
        this.selectedWeek = $event;
        }
    },
    components: {
        WeekMenu2,
        TeacherView
    }
}
</script>

<style>

</style>
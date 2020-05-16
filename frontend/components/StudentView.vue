<template>
<div class="pt-4">
    <h2>Travaux pour la semaine</h2>
    <ul class="nav nav-pills nav-fill" id="myTab" role="tablist">
        <li class="nav-item" role="presentation">
            <a class="nav-link active" id="home-tab" data-toggle="tab" href="#home" role="tab" aria-controls="home" aria-selected="true">Messages</a>
        </li>
        <li class="nav-item" role="presentation">
            <a class="nav-link" id="profile-tab" data-toggle="tab" href="#profile" role="tab" aria-controls="profile" aria-selected="false">Etude</a>
        </li>
        <li class="nav-item" role="presentation">
            <a class="nav-link" id="contact-tab" data-toggle="tab" href="#contact" role="tab" aria-controls="contact" aria-selected="false">Devoirs</a>
        </li>
        <li class="nav-item" role="presentation">
            <a class="nav-link" id="tests-tab" data-toggle="tab" href="#tests" role="tab" aria-controls="contact" aria-selected="false">Controles</a>
        </li>
    </ul>  
    <div class="tab-content" id="myTabContent">
    <div class="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
        <div class="pt-3">
            <div class="card border-primary mb-3" 
                  v-for="message in messages" :key="message.id">
                <div class="card-header">par M. {{message.teacher.firstname}}</div>
                <div class="card-body">                    
                    <p class="card-text">{{message.body}}</p>
                </div>
                <div class="card-footer">
                    {{$moment(message.created_at).format('YYYY-MM-DD HH:mm')}}
                </div>
            </div>
        </div>
    </div>
    <div class="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab">
        <div class="pt-3">
            <div class="card border-primary mb-3" 
                  v-for="message in lessons" :key="message.id">
                <div class="card-header">par M. {{message.teacher.firstname}}</div>
                <div class="card-body">                    
                    <p class="card-text">{{message.body}}</p>
                </div>
                <div class="card-footer">
                    {{$moment(message.created_at).format('YYYY-MM-DD HH:mm')}}
                </div>
            </div>
        </div>
    </div>
    <div class="tab-pane fade" id="contact" role="tabpanel" aria-labelledby="contact-tab">
        <div class="pt-3">
            <div class="card border-primary mb-3" 
                  v-for="message in homeworks" :key="message.id">
                <div class="card-header">par M. {{message.teacher.firstname}}</div>
                <div class="card-body">                    
                    <p class="card-text">{{message.body}}</p>
                </div>
                <div class="card-footer">
                    {{$moment(message.created_at).format('YYYY-MM-DD HH:mm')}}
                </div>
            </div>
        </div>
    </div>
    <div class="tab-pane fade" id="tests" role="tabpanel" aria-labelledby="tests-tab">
        <div class="pt-3">
            <div class="card border-primary mb-3" 
                  v-for="message in tests" :key="message.id">
                <div class="card-header">par M. {{message.teacher.firstname}}</div>
                <div class="card-body">                    
                    <p class="card-text">{{message.body}}</p>
                </div>
                <div class="card-footer">
                    {{$moment(message.created_at).format('YYYY-MM-DD HH:mm')}}
                </div>
            </div>
        </div>
    </div>
    </div>
</div>
</template>

<script>
export default {
    props: ['week'],
    data(){
        return {
            
        };
    },
    computed: {
        messages: function(){     
            if(this.week && this.week.communications)            
                return this.week.communications.filter(c => c.type === 'INFO');
            else
                return [];
        },
        lessons: function(){
            if(this.week && this.week.communications)
                return this.week.communications.filter(c => c.type === 'LESSON');
            else
                return [];
        },
        homeworks: function(){
            if(this.week && this.week.communications)
                return this.week.communications.filter(c => c.type === 'HOMEWORK');
            else
                return [];
        },
        tests: function(){
            if(this.week && this.week.communications)
                return this.week.communications.filter(c => c.type === 'TEST');
            else
                return [];
        }

    }
}
</script>

<style>

</style>
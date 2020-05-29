<template>
<div class="pt-2">
    <div class="float-md-right">
        <button type="button" class="btn btn-primary onem">
            <svg class="bi bi-plus-circle-fill vam" width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8.5 4a.5.5 0 0 0-1 0v3.5H4a.5.5 0 0 0 0 1h3.5V12a.5.5 0 0 0 1 0V8.5H12a.5.5 0 0 0 0-1H8.5V4z"/>
            </svg>
            <span class="vam">Nouvelle communication</span>
        </button>
    </div>
    <div class="clearfix"></div>
    <h2>Communications et travaux pour la semaine</h2>
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
                <div class="card-header">{{message.subject}}</div>
                <div class="card-body">                    
                    <p class="card-text">{{message.body}}</p>
                </div>
                <div class="card-footer">                                     
                    par {{message.teacher.firstname}}                        
                    {{$moment(message.created_at).format('YYYY-MM-DD HH:mm')}}
                </div>
            </div>
        </div>
    </div>
    <div class="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab">
        <div class="pt-3">
            <div class="card border-primary mb-3" 
                  v-for="message in lessons" :key="message.id">
                <div class="card-header">{{message.subject}}</div>
                <div class="card-body">                    
                    <p class="card-text">{{message.body}}</p>
                </div>
                <div class="card-footer">
                    par {{message.teacher.firstname}}    
                    {{$moment(message.created_at).format('YYYY-MM-DD HH:mm')}}
                </div>
            </div>
        </div>
    </div>
    <div class="tab-pane fade" id="contact" role="tabpanel" aria-labelledby="contact-tab">
        <div class="pt-3">
            <div class="card border-primary mb-3" 
                  v-for="message in homeworks" :key="message.id">
                <div class="card-header">{{message.subject}}</div>
                <div class="card-body">                    
                    <p class="card-text">{{message.body}}</p>
                </div>
                <div class="card-footer">
                    par {{message.teacher.firstname}}   
                    {{$moment(message.created_at).format('YYYY-MM-DD HH:mm')}}
                </div>
            </div>
        </div>
    </div>
    <div class="tab-pane fade" id="tests" role="tabpanel" aria-labelledby="tests-tab">
        <div class="pt-3">
            <div class="card border-primary mb-3" 
                  v-for="message in tests" :key="message.id">
                <div class="card-header">{{message.subject}}</div>
                <div class="card-body">                    
                    <p class="card-text">{{message.body}}</p>
                </div>
                <div class="card-footer">
                    par {{message.teacher.firstname}}   
                    {{$moment(message.created_at).format('YYYY-MM-DD HH:mm')}}
                </div>
            </div>
        </div>
    </div>
    </div>
</div>
</template>

<script>
import weekQuery from '~/queries/week'

export default {
    props: ['selectedWeek'],
    data(){
        return {
            week: {}
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

    },
    apollo:{
        week: {
            prefetch: true,
            query: weekQuery,
            variables(){
                // Use vue reactive property here
                return {
                    id: this.selectedWeek.id
                }
            }
        }
    },   
}
</script>

<style>
    .onem {
        font-size: 1em;
    }

    .vam {
        vertical-align: middle;
        margin-right: 5px;
    }
</style>
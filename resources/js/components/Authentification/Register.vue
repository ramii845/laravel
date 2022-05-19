<template>
  <div class="col-md-12">
    <div class="card card-container">
     <router-link :to="{name: 'login'}"> Login </router-link>
      <form @submit.prevent="handleRegister">
      
          <div class="form-group">
            <input placeholder="name" type="text" class="form-control" v-model="user.name"/>
            
          </div>
          <div class="form-group">
        
            <input placeholder="email" type="email" class="form-control" v-model="user.email"/>
           
          </div>
          <div class="form-group">
          
            <input placeholder="password" type="password" class="form-control" v-model="user.password"/>
           
          </div>
            <div class="form-group">
        
            <input placeholder="password_confirmation" type="password" class="form-control" v-model="user.password_confirmation"/>
           
          </div>
          <div class="form-group">
            <button class="btn btn-primary btn-block">
              
              Sign Up
            </button>
       
        </div>
      </form>

     
    </div>
  </div>
</template>

<script>

import axios from 'axios';

const API_URL = 'http://localhost:8000/api/auth/register';

export default {
  name: "Register",
  data(){
      return {
      user: {},
      message: ""
      }
  },
 methods: {
    handleRegister() {
      return axios.post(API_URL, this.user)
                .then(response => (
                        localStorage.setItem('user', JSON.stringify(response.data)),
                        this.$router.push({ name: 'login' })
                    ))
                    .catch(err => console.log(err))
                 }
  },
};
</script>

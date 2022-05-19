<template></template>
<script>
const API_URL = 'http://localhost:8000/api/auth/';
export default {
 name: "Logout",
 methods: {
 handleLogout() {
 let user = JSON.parse(localStorage.getItem('user'));
 this.axios.interceptors.request.use(
 (config) => {
 if (user.token) {
 config.headers['Authorization'] = `Bearer ${user.token}`;
 }
 return config;
 },
 (error) => {
 return Promise.reject(error);
 }
 );
 return this.axios
 .post(API_URL + 'logout')
 .then(response => (
 localStorage.removeItem('user'),
 this.$router.go() 
 ))
 .catch(err => console.log(err))
 }
 },
 created(){
 this.handleLogout()
}
};
</script>

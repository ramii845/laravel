<template>
 <div>

 <h2 class="text-center">Liste des Etudiants</h2>

 <table class="table" id="example">
 <thead>
 <tr>
 <th>nom </th>
 <th>prenom</th>
 <th>email</th>
  <th>groupe</th>
 <th>Actions</th>
 </tr>
 </thead>
 <tbody>
 <tr v-for="cat in etudiant" :key="cat.id">
 <td>{{cat.nom}}</td>
 <td>{{cat.prenom}}</td>
 <td>{{cat.email}}</td>
 <td>{{cat.groupe}}</td>
 <td>
     <router-link :to="{name: 'editetudiant', params: { id: cat.id }}" class="btn
btn-success">Modifier </router-link>
 <button @click.prevent="deleteetudiant(cat.id)" class="btn btn-danger">Delete</button>
 </td>
 </tr>
 </tbody>
 </table>
 </div>
</template>

<script>
import 'bootstrap/dist/css/bootstrap.min.css';
import 'jquery/dist/jquery.min.js';
//Datatable Modules
import "datatables.net-dt/js/dataTables.dataTables"
import "datatables.net-dt/css/jquery.dataTables.min.css"
import $ from 'jquery'; 
 export default {
 data() {
 return {
 etudiant: []
 }
 },
 mounted() {
 this.getetudiant();
 },
 methods: {
 deleteetudiant(id) {
 this.axios
 .delete(`http://localhost:8000/api/etudiant/${id}`)
 .then(res => {
 console.log(res)
 this.getetudiant();
 })
 .catch(error => {
 console.log(error)
 });
 },
 getetudiant(){
 this.axios
 .get('http://localhost:8000/api/etudiant/')
 .then(response => {
 this.etudiant = response.data;
 console.log(response.data)
 $(function() {$('#example').DataTable();}); 
 });
 }
 }
 }
</script>
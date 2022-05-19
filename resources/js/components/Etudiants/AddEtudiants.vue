<template lang="">

<form @submit.prevent="ajouteretudiant">
 <div class="form-group">
 <input type="text" class="form-control" placeholder="Nom" v-model="nom">
 </div>
 <div class="form-group">
 <input type="text" class="form-control" placeholder="prenom" v-model="prenom">
 </div>
 <div class="form-group">
 <input type="text" class="form-control" placeholder="email" v-model="email">
 </div>
 <div class="form-group">
 <input type="text" class="form-control" placeholder="groupe" v-model="groupe">
 </div>
 <button type="submit" class="btn btn-block btn-primary">Ajouter Etudiant</button>
</form>
</template>
<script>
export default {
 data() {
 return {
 nom: "",
 prenom: "",
 email:"",
 groupe:""
 }
 },
 methods: {

 ajouteretudiant(){
 const categ = {
 nom:this.nom,
 prenom:this.prenom,
 email:this.email,
 groupe:this.groupe
 }
 this.axios.post("http://localhost:8000/api/etudiant",categ)
 .then(() => {
 this.$router.push('/etudiant')})
 .catch(error => {
 this.errorMessage = error.message;
 console.error("There was an error!", error);})
 },
 onFileChange(e) {
 this.nom = "categories/"+e.target.files[0].name;
 }
 }
}
</script>
<style lang="">

</style>

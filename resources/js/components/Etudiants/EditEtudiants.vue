<template lang="">

<form @submit.prevent="modifieretudiant">
 <div class="form-group">
 <input type="text" class="form-control" placeholder="Nom" v-model="etudiant.nom">
 </div>
 <div class="form-group">
 <input type="text" class="form-control" placeholder="prenom" v-model="etudiant.prenom">
 </div>
 <div class="form-group">
 <input type="text" class="form-control" placeholder="email" v-model="etudiant.email">
 </div>
 <div class="form-group">
 <input type="text" class="form-control" placeholder="groupe" v-model="etudiant.groupe">
 </div>
 <button type="submit" class="btn btn-block btn-primary">Modifier Etudiant</button>
</form>
</template>
<script>
export default {
 data() {
 return {
 etudiant:[]
 }
 },
 mounted (){
 this.getOneetudiant() ;
 },
 methods: {

 modifieretudiant(){
 const etd = {
    groupe:this.etudiant.groupe,
    nom:this.etudiant.nom,
    prenom:this.etudiant.prenom,
    email:this.etudiant.email,

 }
 this.axios.put(`http://localhost:8000/api/etudiant/${this.$route.params.id}`,etd)
 .then(() => {
 this.$router.push('/etudiant')})
 .catch(error => {
 this.errorMessage = error.message;
 console.error("There was an error!", error);})
 },
 onFileChange(e) {
 this.etudiant.nom ="etudiant/"+e.target.files[0].name;
 },
 getOneetudiant(){
 this.axios
 .get(`http://localhost:8000/api/etudiant/${this.$route.params.id}`)
 .then((res) => {
 this.etudiant = res.data;
 });
 }
 }
}
</script>
<style lang="">

</style>
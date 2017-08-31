<template>
	<div id="preview">
		<h1>{{resume.profile.name}}</h1>
	</div>
<!-- 	<section v-if="resume.projects.length >0">
		{{resume.projects}}
	</section> -->
</template>

<style>
	#preview{
		min-height: 100px;
	}

</style>

<script>
	export default{
		props: ['resume']
	}
</script>
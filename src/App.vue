<template>
	<Header />
	<div class="container">
		<router-view />
	</div>
</template>

<script setup>

import Header from "@/components/Header.vue";
</script>

<style lang="scss">
@import 'src/assets/scss/variables';

#app {
	background-color: $gray1;
	width: 100%;
	min-height: 100vh;
	display: flex;
	flex-direction: column;
	align-items: center;
}

.container {
	width: 100%;
	max-width: 1920px;
	padding: 20px;
}
</style>

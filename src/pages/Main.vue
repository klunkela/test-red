<script setup>
import {useStore} from "vuex";

const store = useStore()
</script>

<template>
	<div class="main-page">
		<div>hello world</div>
		<div v-if="store.state.user.user">Ваш логин: {{ store.state.user.user.login }}</div>
		<div v-if="store.state.user.user">Ваш id: {{ store.state.user.user.id }}</div>
		<router-link v-else to="/login">Войти</router-link>
	</div>
</template>

<style scoped lang="scss">
@import 'src/assets/scss/variables';

.main-page {
	height: calc(100vh - 63px);
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	
	a {
		color: $black;
	}
}
</style>

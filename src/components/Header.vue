<script setup>
import {useStore} from "vuex";
import {useRouter} from "vue-router";

const store = useStore()
const router = useRouter()

const logout = () => {
	localStorage.removeItem('context');
	store.commit('user/setUser', null)
	router.push('/login')
}
</script>

<template>
	<div class="header">
		<div class="container">
			<router-link to="/">Главная</router-link>
			<router-link to="/browse" class="browse">Просмотр</router-link>
			<button v-if="store.state.user.user" @click="logout" class="logout">Выйти</button>
			<router-link v-else to="/login">Войти</router-link>
		</div>
	</div>
</template>

<style scoped lang="scss">
@import 'src/assets/scss/variables';

.header {
	width: 100%;
	display: flex;
	justify-content: center;
	border-bottom: 1px solid $gray2;
}

.container {
	width: 100%;
	max-width: 1920px;
	padding: 20px;
	display: flex;
	gap: 20px;
}

a {
	text-decoration: none;
	color: $black;
}

.browse {
	margin-right: auto;
}

.logout {
	background-color: inherit;
	border: none;
	cursor: pointer;
	font-size: 16px;
}
</style>

<script setup>
import {ref} from "vue";
import {useRouter} from "vue-router";
import {userApi} from "@/api/user";

const router = useRouter()
const login = ref('')
const password = ref('')
const error = ref('')

const submit = () => {
	if (login.value && password.value) {
		userApi.login(login.value, password.value).then(response => {
			if (response) {
				router.push('/')
			} else {
				error.value = 'Неправильный логин или пароль'
			}
		})
	} else {
		error.value = 'Все поля должны быть заполнены'
	}
}
</script>

<template>
	<div class="login-page">
		<input v-model="login" placeholder="Логин" />
		<input v-model="password" placeholder="Пароль" />
		<div v-if="error" class="error">{{ error }}</div>
		<button @click="submit">Войти</button>
	</div>
</template>

<style scoped lang="scss">
@import 'src/assets/scss/variables';

.login-page {
	height: calc(100vh - 63px);
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	gap: 20px;
}

input {
	width: 300px;
	padding: 10px;
	border-radius: 10px;
	outline: none;
}

.error {
	color: $red;
	font-size: 12px;
}

button {
	width: 300px;
	padding: 20px;
	border-radius: 10px;
	background-color: $blue1;
	cursor: pointer;
	
	&:hover {
		background-color: $blue2;
	}
}
</style>

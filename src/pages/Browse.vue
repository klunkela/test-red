<script setup>
import {browseApi} from "@/api/browse";
import {computed, onMounted, ref} from "vue";
import BrowseNode from "@/components/BrowseNode.vue";

const data = ref(null)
const selectedNode = ref(null)
const searchInput = ref('')
const sortOptions = [{id: 1, name: 'По имени'}, {id: 2, name: 'По ключу'}]
const sortOption = ref(sortOptions[0])
const dataSorted = computed(() => sortOption.value.id === 1
	? [...selectedNode.value.children].sort((a, b) => a.name.toLowerCase().localeCompare(b.name.toLowerCase()))
	: [...selectedNode.value.children].sort((a, b) => a.key.toLowerCase().localeCompare(b.key.toLowerCase())))
const dataSortedAndSearched = computed(() => dataSorted.value.filter(e => e.name.toLowerCase().includes(searchInput.value.toLowerCase())))

onMounted(async () => {
	data.value = await browseApi.getData()
})

const selectNode = (node) => {
	selectedNode.value = node
}
</script>

<template>
	<div class="browse-page">
		<div class="left">
			<BrowseNode v-if="data" :data="data" @selectNode="selectNode" :selectedNodeKey="selectedNode?.key" />
		</div>
		<div class="right">
			<div v-if="selectedNode" class="selected-item">
				<div class="selected-item__name">
					<span>Название: </span>{{ selectedNode.name }}
				</div>
				<div class="selected-item__key">
					<span>Key: </span>{{ selectedNode.key }}
				</div>
				<div class="children">
					<div class="title">Элементы:</div>
					<input type="text" v-model="searchInput" :placeholder="'Введите название...'">
					<button>Искать</button>
					<select v-model="sortOption">
						<option v-for="option in sortOptions" :key="option.id" :value="option">{{ option.name }}</option>
					</select>
					<div class="child" v-for="child in dataSortedAndSearched" :key="child.key">
						<div class="key">{{ child.key }}</div>
						{{ child.name }}
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<style scoped lang="scss">
@import 'src/assets/scss/variables';

.browse-page {
	display: flex;
}

.left {
	width: 50%;
	
	:deep(.node:first-child) {
		margin-left: 0;
	}
}

.right {
	width: 50%;
}

.selected-item__key {
	margin-bottom: 20px;
}

.children {
	input {
		height: 40px;
		padding: 10px;
		border-radius: 10px;
	}
	
	button {
		height: 40px;
		padding: 0 20px;
		border-radius: 10px;
		background-color: $blue1;
		cursor: pointer;
		
		&:hover {
			background-color: $blue2;
		}
	}
	
	select {
		height: 40px;
		padding: 0 20px;
		border-radius: 10px;
	}
}

.child {
	display: flex;
}

.key {
	color: $gray2;
	font-size: 10px;
	margin-right: 10px;
}
</style>

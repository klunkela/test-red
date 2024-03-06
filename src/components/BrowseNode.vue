<script setup>
const props = defineProps({
	data: Object,
	selectedNodeKey: String
})
const emit = defineEmits(['selectNode'])
</script>

<template>
	<div class="node" v-if="data.children?.length">
		<div class="name" @click="emit('selectNode', data)" :class="{selected: selectedNodeKey === data.key}">
			- {{ data.name }}
		</div>
		<BrowseNode v-for="item in data.children" :key="item.key" :data="item" @selectNode="(d)=>emit('selectNode', d)" :selectedNodeKey="selectedNodeKey" />
	</div>
</template>

<style scoped lang="scss">
@import 'src/assets/scss/variables';

.node {
	margin-left: 20px;
}

.name {
	cursor: pointer;
	overflow: hidden;
	white-space: nowrap;
	text-overflow: ellipsis;
	
	&.selected {
		text-decoration: underline;
	}
}
</style>

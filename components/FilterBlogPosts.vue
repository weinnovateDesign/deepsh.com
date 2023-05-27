<template>
	<div class="not-prose">
		<ContentQuery path="/blog" :where="{ slug: { $ne: url } }">
			<template #default="{ data }">
				<div v-for="article in data" :key="article._path">
					<NuxtLink
						:to="article._path"
						class="font-bold text-xl decoration-primary decoration-2 underline hover:decoration-dark hover:text-primary"
					>
						<h3 class="mb-4">{{ article.title }}</h3></NuxtLink
					>
				</div>
			</template>
			<template #not-found>
				<p>No blog posts found.</p>
			</template>
		</ContentQuery>
	</div>
</template>
<script setup lang="ts">
const props = defineProps({
	url: {
		type: String,
		default: "",
	},
});
</script>

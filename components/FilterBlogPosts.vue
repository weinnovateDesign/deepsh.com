<template>
	<div class="not-prose">
		<div v-if="posts?.length">
			<div v-for="article in posts" :key="article.path">
				<NuxtLink
					:to="article.path"
					class="font-bold text-xl decoration-primary decoration-2 underline hover:decoration-dark hover:text-primary"
				>
					<h3 class="mb-4">{{ article.title }}</h3></NuxtLink
				>
			</div>
		</div>
		<p v-else>No blog posts found.</p>
	</div>
</template>
<script setup lang="ts">
const props = defineProps({
	url: {
		type: String,
		default: "",
	},
});

// Content v3 dropped <ContentQuery>. The v2 `:where="{ slug: { $ne: url } }"`
// becomes an explicit where() with a SQL operator. Keyed and watched on url so
// the list re-queries when navigating between posts.
const { data: posts } = await useAsyncData(
	() => `blog-others-${props.url || "all"}`,
	() => queryCollection("blog").where("slug", "<>", props.url).all(),
	{ watch: [() => props.url] }
);
</script>

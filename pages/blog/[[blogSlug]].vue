<template>
	<div class="container mx-auto px-4 py-4 prose">
		<template v-if="doc">
			<div class="comicCard">
				{{ doc.abstract }}
			</div>
			<h1>{{ doc.title }}</h1>
			<div class="flex">
				<div
					class="my-auto flex-grow h-1 bg-primary w-full mr-2 rounded-md"
				></div>
				<div class="flex-none font-bold text-light">
					{{ doc.publishedDate }}
				</div>
			</div>
			<ContentRenderer :value="doc" />
		</template>

		<h2>Other Articles</h2>
		<FilterBlogPosts :url="route.params.blogSlug" />
	</div>
</template>
<script setup>
const route = useRoute();

// Content v3 dropped <ContentDoc>; the document is fetched explicitly and
// <ContentRenderer> is given the result. `path` replaces v2's `_path`.
const { data: doc } = await useAsyncData(
	() => `blog-doc-${route.path}`,
	() => queryCollection("blog").path(route.path).first(),
	{ watch: [() => route.path] }
);
</script>

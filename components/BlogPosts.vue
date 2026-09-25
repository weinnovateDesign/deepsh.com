<template>
	<div class="not-prose">
		<div v-if="posts?.length">
			<div v-for="article in posts" :key="article.path" class="flex items-center gap-2 py-2">
				<DocumentTextIcon class="w-6 h-6" width="16" height="20" />
				<NuxtLink :to="article.path"
					class="font-bold text-xl decoration-primary decoration-2 underline hover:decoration-dark hover:text-primary">
					<h3>{{ article.title }}</h3>
				</NuxtLink>
			</div>
		</div>
		<p v-else>No blog posts found.</p>
	</div>
</template>
<script setup>
import { DocumentTextIcon } from '@heroicons/vue/24/solid'

// Content v3 dropped <ContentList>; query the collection directly instead.
// `_path` was renamed to `path` in v3.
const { data: posts } = await useAsyncData('blog-list', () =>
	queryCollection('blog').all()
)
</script>

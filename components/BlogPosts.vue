<template>
	<div class="not-prose">
		<ContentList path="/blog">
			<template #default="{ list }">
				<div v-for="article in list" :key="article._path" class="flex items-center gap-2 py-2">
					<DocumentTextIcon class="w-6 h-6" width="16" height="20" />
					<NuxtLink :to="article._path"
						class="font-bold text-xl decoration-primary decoration-2 underline hover:decoration-dark hover:text-primary">
						<h3>{{ article.title }}</h3>
					</NuxtLink>
				</div>
			</template>
			<template #not-found>
				<p>No blog posts found.</p>
			</template>
		</ContentList>
	</div>
</template>
<script setup>
import { DocumentTextIcon } from '@heroicons/vue/24/solid'
</script>
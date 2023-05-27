<template>
	<div class="container mx-auto px-4 py-4 prose">
		<ContentDoc v-slot="{ doc }">
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
		</ContentDoc>
		<h2>Other Articles</h2>
		<BlogPosts />
	</div>
</template>
<script setup></script>

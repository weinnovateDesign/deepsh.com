<template>
	<div class="not-prose">
		<ContentList path="/blog">
			<template #default="{ list }">
				<div v-for="article in list" :key="article._path">
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
		</ContentList>
	</div>
</template>

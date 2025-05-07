<template>
	<div class="container mx-auto py-4 px-4 grid grid-cols-1 lg:grid-cols-2 gap-4">
		<figure>
			<nuxt-img format="webp" class="mx-auto rounded-md border" src="/images/deep-sherchan.png"
				sizes="sm:90vw md:563px" width="550" height="553" alt="B2b Saas consultant" />
		</figure>
		<div>
			<article class="prose prose-a:text-primary">
				<h1>Ex-B2B Software Startup Founder.</h1>

				<div class="text-sm italic">... also an aspiring comic book artist</div>
				<p>
					After earning my Bachelor's in Engineering, I co-founded a software company called InRev Systems
					(later renamed Simplify360) in late 2008. I served as Director and Co-founder until 2022. In 2023,
					the company was acquired by US-based Nextiva. Today, Simplify360 is a leading AI-driven customer
					experience and analytics firm in India, serving clients across Southeast Asia.
				</p>
				<p>
					In 2018, I moved to Adelaide, South Australia, where I offered my expertise to B2B SaaS companies
					until 2024. I'm currently exploring AI technologies to build AI agents—bringing me full circle to a
					chatbot project I worked on in 2017.
				</p>
				<p>
					I'm eager to share my insights on product research, strategy, and design. During my startup journey
					in India, I was an avid blogger, writing on topics like social media marketing, customer experience,
					data analytics, design, and startups. Now, I'm working on getting back to writing more thoughtful
					and well researched articles.
				</p>
			</article>
		</div>
	</div>
</template>
<script setup>
const title = "Ex-B2B Saas Software Founder Adelaide - Deep Sherchan";
const metaDescription =
	"Helping Saas business with thoughtful product research, design and writings.";

const image = "/images/deep-sherchan.png";
useHead({
	title: title,
	viewport: "width=device-width, initial-scale=1, maximum-scale=1",
	charset: "utf-8",
	robots: "index, follow",
	meta: [
		{ name: "description", content: metaDescription },
		{ name: "twitter:title", content: title },
		{
			hid: "apple-mobile-web-app-title",
			name: "apple-mobile-web-app-title",
			content: title,
		},
		{
			hid: "description",
			name: "description",
			content: metaDescription,
		},

		{
			name: "twitter:description",
			content: metaDescription,
		},
		{
			hid: "twitter:image",
			name: "twitter:image",
			content: image,
		},
		{
			hid: "twitter:image:alt",
			name: "twitter:image:alt",
			content: title,
		},
		{ hid: "og:title", property: "og:title", content: title },
		{
			hid: "og:description",
			property: "og:description",
			content: metaDescription,
		},
		{ hid: "og:image", property: "og:image", content: image },
		{
			hid: "og:image:secure_url",
			property: "og:image:secure_url",
			content: image,
		},
		{
			hid: "og:image:alt",
			property: "og:image:alt",
			content: title,
		},
		{
			hid: "og:site_name",
			property: "og:site_name",
			content: title,
		},
	],
});
</script>
<style lang="postcss" scoped>
.btn-icon {
	@apply p-2 font-semibold inline-flex items-center space-x-2 rounded-full;

	&:hover {
		@apply bg-light;
	}
}
</style>

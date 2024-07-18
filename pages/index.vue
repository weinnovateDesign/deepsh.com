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
					In the mid-2008, I co-founded my first Saas start-up in Bangalore, India called
					Simplify360 (then called InRev Systems). Currently, it is one of the leading AI-driven customer
					experience
					engagement and analytics company in India with clients across Southeast Asia. It was acquired by a US
					based company, Nextiva, in 2023.
				</p>
				<p>
					Since 2018, I have been living in Adelaide, South Australia providing my expertise as a service to multiple Saas software. I also run a small solo product design studio on side called DBS Design Studio.
				</p>
				<p>
					I am keen on sharing my thoughts and learnings in the area of product research, strategy, and design. I
					used to be an avid blogger during my startup phase in India, writing about various topics related to
					social media marketing, customer experience management, data analystics, design and startups. So I am
					trying to get back to writing and sharing more...
				</p>
				<h2>Recent Writings</h2>
				<BlogPosts />
			</article>
		</div>
	</div>
</template>
<script setup>
const title = "B2B Saas Consultant Adelaide - Deep Sherchan";
const metaDescription =
	"Helping Saas business with thoughtful product research, design and strategy writings.";

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

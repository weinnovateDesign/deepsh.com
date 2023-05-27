<template>
	<div
		class="container mx-auto py-4 px-4 grid grid-cols-1 lg:grid-cols-2 gap-4"
	>
		<figure>
			<nuxt-img
				format="webp"
				class="mx-auto rounded-md border"
				src="/images/deep-sherchan.png"
				sizes="sm:90vw md:563px"
				width="550"
				height="553"
				alt="B2b Saas consultant"
			/>
		</figure>
		<div>
			<article class="prose prose-a:text-primary">
				<h1>I’m a B2B Saas Product Consultant.</h1>
				<div class="text-sm italic">... also an aspiring comic book artist</div>
				<p>
					I write about B2B Software as a Service (Saas), product research,
					strategy, design, development and everything Saas.
				</p>

				<p>
					I live in Adelaide, South Australia and work at a B2B tech startup
					company called BigDataCloud and run a solo design studio on side
					called DBS Design Studio.
				</p>

				<p>
					I co-founded my first Saas company in 2008 in Bangalore, India called
					Simplify360. It is one of the leading customer experience engagement
					and analytics company in India. It was acquired by a US based company
					called Nextiva in 2023.
				</p>

				<div class="comicCard">
					... sharing thoughts on design, technology and business, and building
					a value-based Saas company.
				</div>
				<h2>Social Links</h2>
				<div class="flex flex-wrap gap-2 not-prose">
					<button class="btn-icon">
						<a href="https://twitter.com/bexdeep" target="_blank">
							<svg
								class="w-5 h-5 fill-current"
								role="img"
								xmlns="http://www.w3.org/2000/svg"
								viewBox="0 0 24 24"
							>
								<path
									d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"
								/>
							</svg>
						</a>
					</button>

					<button class="btn-icon">
						<a href="https://www.linkedin.com/in/deepsherchan/" target="_blank">
							<svg
								class="w-5 h-5 fill-current"
								role="img"
								viewBox="0 0 256 256"
								xmlns="http://www.w3.org/2000/svg"
							>
								<g>
									<path
										d="M218.123122,218.127392 L180.191928,218.127392 L180.191928,158.724263 C180.191928,144.559023 179.939053,126.323993 160.463756,126.323993 C140.707926,126.323993 137.685284,141.757585 137.685284,157.692986 L137.685284,218.123441 L99.7540894,218.123441 L99.7540894,95.9665207 L136.168036,95.9665207 L136.168036,112.660562 L136.677736,112.660562 C144.102746,99.9650027 157.908637,92.3824528 172.605689,92.9280076 C211.050535,92.9280076 218.138927,118.216023 218.138927,151.114151 L218.123122,218.127392 Z M56.9550587,79.2685282 C44.7981969,79.2707099 34.9413443,69.4171797 34.9391618,57.260052 C34.93698,45.1029244 44.7902948,35.2458562 56.9471566,35.2436736 C69.1040185,35.2414916 78.9608713,45.0950217 78.963054,57.2521493 C78.9641017,63.090208 76.6459976,68.6895714 72.5186979,72.8184433 C68.3913982,76.9473153 62.7929898,79.26748 56.9550587,79.2685282 M75.9206558,218.127392 L37.94995,218.127392 L37.94995,95.9665207 L75.9206558,95.9665207 L75.9206558,218.127392 Z M237.033403,0.0182577091 L18.8895249,0.0182577091 C8.57959469,-0.0980923971 0.124827038,8.16056231 -0.001,18.4706066 L-0.001,237.524091 C0.120519052,247.839103 8.57460631,256.105934 18.8895249,255.9977 L237.033403,255.9977 C247.368728,256.125818 255.855922,247.859464 255.999,237.524091 L255.999,18.4548016 C255.851624,8.12438979 247.363742,-0.133792868 237.033403,0.000790807055"
									></path>
								</g>
							</svg>
						</a>
					</button>
				</div>
				<h2>Articles</h2>
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

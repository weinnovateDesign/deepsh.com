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
			/>
		</figure>
		<div>
			<article class="prose prose-a:text-primary">
				<h1>I’m a B2B Saas Product Consultant.</h1>
				<div class="text-sm italic">... also an aspiring comic book artist</div>
				<p>
					I write about about B2B Software as a Service (Saas), product
					research, strategy, design, development and everything Saas.
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
				<h2>Articles</h2>
				<BlogPosts />
			</article>
		</div>
	</div>
</template>

# deepsherchan.com

Personal site for Deep Sherchan. Built with [Astro](https://astro.build), deployed
to GitHub Pages at **https://deepsherchan.com** on every push to `main`.

Note: the repository is named `deepsh.com`, but that domain does not resolve.
The live host is `deepsherchan.com` (see `public/CNAME` and `site` in
`astro.config.mjs`).

## Commands

| Command | Action |
|---|---|
| `npm install` | Install dependencies |
| `npm run dev` | Dev server at `localhost:4321` |
| `npm run build` | Build the static site to `./dist/` |
| `npm run preview` | Serve the built site locally |
| `npm run check` | Type-check (`astro check`) |

## The blog is built but not published

The site currently publishes **only the home page** and a 404 page.

The blog machinery is complete and working — it was verified live before being
withdrawn — but is deliberately unrouted so nothing is published yet:

- `src/pages/_blog/` — the post and index templates. Astro ignores any directory
  under `src/pages/` whose name starts with an underscore, so these generate no
  routes at all while remaining in the repo and type-checked.
- `src/content/blog/*.md` — two draft posts. Present but unreachable; they are
  not in the sitemap and not crawlable.
- `src/content.config.ts` — the collection schema (`title`, `description`,
  `slug`, `publishedDate`, `abstract`).
- `src/components/BlogPosts.astro`, `OtherPosts.astro` — listing components.

### To publish the blog later

1. `git mv src/pages/_blog src/pages/blog`
2. Add a nav link to `/blog` in `src/components/Header.astro` — nothing links to
   it otherwise, which is how the old Nuxt blog stayed invisible for so long.
3. Review the draft posts in `src/content/blog/`; delete any you do not want
   live, since every file in that directory becomes a page.
4. `npm run check && npm run build`, confirm the routes appear, then push.

### Known cosmetic issue

The post date renders in `text-light` (#E5E5E5) on a white background, which is
effectively invisible. Inherited from the original Nuxt site; worth fixing
before the blog goes live.

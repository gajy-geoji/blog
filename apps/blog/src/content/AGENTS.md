# Blog content guidance

- Apply these rules to content under `apps/blog/src/content`.
- Store technical posts in `blog` and Instagram comic production sources in `instatoon`.
- Name content files with a stable lowercase kebab-case slug, for example `astro-content-collections.md`.
- Use the matching frontmatter schema from `apps/blog/src/content.config.ts`.
- Blog posts must include `title`, `description`, `publishedAt`, `tags`, and `draft`.
- Each Instagram comic scenario belongs in `instatoon/scenarios/<slug>/index.md` and must include `title`, `description`, `publishedAt`, and `draft`.
- Keep shared character profiles and reference images under `instatoon/characters/<character-slug>`.
- Keep reusable style, character, and panel-generation prompts under `instatoon/prompts`.
- Keep episode-specific generated cuts under the scenario's `assets` directory; only scenario `index.md` files are published as pages.
- Add `updatedAt` to a blog post only when revising a published post substantially.
- Start new posts and Instagram comic scenarios with `draft: true` unless the user explicitly asks to publish.
- Use ISO dates in `YYYY-MM-DD` format.
- Keep the description to one useful sentence that can serve as search and social metadata.
- Use fenced code blocks with an explicit language identifier.
- Do not invent sources, quotations, benchmark results, API behavior, or version details.
- Prefer primary sources for technical claims and link them close to the relevant claim.
- Preserve the author's stated opinion and voice when editing an existing post.
- Read `docs/editorial-guide.md` before drafting or substantially rewriting a post.

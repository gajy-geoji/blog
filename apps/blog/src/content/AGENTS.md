# Blog content guidance

- Apply these rules to content under `apps/blog/src/content`.
- Store technical posts in `blog` and diary entries in `diary`.
- Name content files with a stable lowercase kebab-case slug, for example `astro-content-collections.md`.
- Use the matching frontmatter schema from `apps/blog/src/content.config.ts`.
- Blog posts must include `title`, `description`, `publishedAt`, `tags`, and `draft`.
- Diary entries must include `title`, `description`, `publishedAt`, and `draft`.
- Add `updatedAt` to a blog post only when revising a published post substantially.
- Start new posts and diary entries with `draft: true` unless the user explicitly asks to publish.
- Use ISO dates in `YYYY-MM-DD` format.
- Keep the description to one useful sentence that can serve as search and social metadata.
- Use fenced code blocks with an explicit language identifier.
- Do not invent sources, quotations, benchmark results, API behavior, or version details.
- Prefer primary sources for technical claims and link them close to the relevant claim.
- Preserve the author's stated opinion and voice when editing an existing post.
- Read `docs/editorial-guide.md` before drafting or substantially rewriting a post.

# Blog content guidance

- Apply these rules to posts under `src/content/blog`.
- Name post files with a stable lowercase kebab-case slug, for example `astro-content-collections.md`.
- Use the frontmatter schema from `src/content.config.ts`.
- Include `title`, `description`, `publishedAt`, `tags`, and `draft`.
- Add `updatedAt` only when revising a published post substantially.
- Start new posts with `draft: true` unless the user explicitly asks to publish.
- Use ISO dates in `YYYY-MM-DD` format.
- Keep the description to one useful sentence that can serve as search and social metadata.
- Use fenced code blocks with an explicit language identifier.
- Do not invent sources, quotations, benchmark results, API behavior, or version details.
- Prefer primary sources for technical claims and link them close to the relevant claim.
- Preserve the author's stated opinion and voice when editing an existing post.
- Read `docs/editorial-guide.md` before drafting or substantially rewriting a post.

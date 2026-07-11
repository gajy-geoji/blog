---
name: write-blog-post
description: Create, research, revise, and validate Korean technical blog posts for this Astro repository. Use when Codex is asked to turn a topic, notes, code changes, debugging experience, or existing draft into a post under src/content/blog; improve a post's structure or technical accuracy; prepare frontmatter and a stable slug; or review a post before publication.
---

# Write Blog Post

Create posts that are useful, technically defensible, and ready for this repository's content pipeline.

## Establish the assignment

1. Read `src/content.config.ts`, `src/content/AGENTS.md`, and `docs/editorial-guide.md`.
2. Inspect nearby posts to match repository conventions without copying their wording.
3. Identify the topic, target reader, intended takeaway, and whether the request is for an outline, draft, revision, or publication review.
4. Make low-risk editorial assumptions when details are missing. Ask only when a missing choice would materially change the article.

## Research and verify

1. Inspect relevant local code, logs, commits, or notes before searching externally.
2. Browse when claims may be current, niche, uncertain, or source-sensitive.
3. Prefer official documentation, standards, primary repositories, and original papers.
4. Record the version or date for facts that can change.
5. Never invent a source, quotation, result, or behavior. Mark unresolved claims clearly or omit them.

## Plan the post

1. Write a one-sentence reader promise.
2. Build the shortest outline that fulfills that promise.
3. Prefer a narrative of problem, constraints, solution, tradeoffs, and verification when it fits the material.
4. Remove sections that repeat context or do not advance the reader's understanding.

## Draft or revise

1. Choose a stable lowercase kebab-case filename under `src/content/blog`.
2. Populate frontmatter exactly as defined in `src/content.config.ts`.
3. Set `draft: true` for a new post unless the user explicitly requests publication.
4. Write in Korean unless the user requests another language.
5. Keep examples focused and use language-tagged fenced code blocks.
6. Link sources near the claims they support.
7. Preserve the author's voice and opinions when revising existing work.

## Validate

1. Run or test technical examples when feasible. State verification limits when execution is not possible.
2. Check the title, description, dates, tags, slug, links, and draft status.
3. Run `pnpm check`.
4. Run `pnpm build`.
5. Inspect the rendered page when formatting, MDX, images, or layout could be affected.
6. Report the post path, draft status, verification performed, and any unresolved claims.

Do not publish, deploy, or change `draft` to `false` without explicit user direction.

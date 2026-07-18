# Repository guidance

## Workspace

- This repository is a pnpm monorepo containing the Astro blog, related POCs, and reusable packages.
- Keep deployable applications in `apps`, experiments in `pocs`, and proven reusable code in `packages`.
- Keep the blog-independent Instagram comic production workspace in `apps/instatoon`.
- Do not promote POC code into `packages` until at least two consumers or a clear reuse requirement exists.
- Use `workspace:*` for dependencies between workspace packages.
- Write reader-facing content in Korean unless the user requests another language.
- Store posts in `apps/blog/src/content/blog` as Markdown or MDX.
- Keep clean URLs such as `/posts/my-post`; do not expose `index.html` in links.

## Commands

- Use Node.js 22.12 or newer and pnpm 11.
- Start local development with `pnpm dev`.
- Run type and Astro validation with `pnpm check`.
- Build the production site with `pnpm build`.
- Run checks or builds across every workspace package with `pnpm check:all` or `pnpm build:all`.
- Target one workspace package with `pnpm --filter <package-name> <script>`.
- Ask before adding a production dependency.

## Working agreements

- Make the smallest change that satisfies the request.
- Preserve existing user changes and avoid unrelated rewrites.
- Follow `apps/blog/src/content/AGENTS.md` for post content.
- Follow `pocs/AGENTS.md` for experiments and `packages/AGENTS.md` for reusable packages.
- Follow `docs/editorial-guide.md` when drafting or substantially editing a post.
- Use the repository skill `$write-blog-post` for end-to-end post creation.

## Verification

- After content-only changes, run `pnpm check` and `pnpm build`.
- After layout or styling changes, also inspect the affected page in the local server.
- Do not mark a post ready to publish while known validation errors, broken links, or unverified technical claims remain.

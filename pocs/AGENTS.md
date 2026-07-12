# POC guidance

- Create each POC as one direct child of `pocs` with its own `package.json` and README.
- Keep experiments independent from `apps/blog`; link to them instead of coupling the blog build to them.
- Record the hypothesis, related post, run command, verification method, limitations, and lifecycle status.
- Prefer the smallest dependency set that can test the idea.
- Run the POC's own checks before citing its result in a blog post.
- Move code to `packages` only after reuse is demonstrated; do not turn speculative abstractions into shared packages.

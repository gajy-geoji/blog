# Shared package guidance

- Add a shared package only for demonstrated reuse or a clearly owned cross-project contract.
- Give every package an explicit public API and keep internal modules private.
- Declare all dependencies in the package that uses them and use `workspace:*` for local packages.
- Add focused tests and type checks before another workspace consumes the package.
- Avoid dependencies from `packages` back into `apps` or `pocs`.

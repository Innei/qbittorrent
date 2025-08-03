import { defineConfig } from "nbump";

export default defineConfig({
  // leading hooks, run before bumping version
  leading: ["pnpm run build"],

  // tailing hooks, run after bumping version
  trailing: [],

  // finally hooks, run at the end
  finally: [],

  // whether to create git tag
  tag: true,

  // whether to push to remote
  push: true,

  // whether to publish to npm
  publish: true,

  // whether to generate changelog
  changelog: false,

  // allowed branches for release
  allowedBranches: ["main", "master"],

  // tag prefix
  tagPrefix: "v",

  // mode: 'independent' | 'monorepo'
  mode: "independent",

  // allow release on dirty git tree
  allowDirty: false,

  // whether to commit changes
  commit: true,
});

# ssr-benchmarks

This repo contains a set of benchmarks that test how long various UI frameworks (mostly React-like frameworks) take to render 
thousands of components to string containing the HTML.

> ⚠️ **DISCLAIMER** ⚠️: Benchmarks results rarely predict actual real-world results. An effort was made to imitiate a real-world app structure, but there is no guarantee that it does so correctly. There may be bugs in the benchmarking code
that causes inaccurate or inconsistent results. Do not rely heavily on the accuracy of these (or other) benchmarks.

Runs SSR benchmarks for:

* React
* Preact
* Preact with `preact-compat`
* Inferno
* Svelte

## Instructions

```
yarn install
yarn start
```


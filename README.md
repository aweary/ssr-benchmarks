# ssr-benchmarks

This repo contains a set of benchmarks that test how long various UI frameworks (mostly React-like frameworks) take to render 
thousands of components to string containing the HTML.

> ⚠️ **DISCLAIMER** ⚠️: Benchmarks results rarely predict actual real-world results. There may be bugs in the benchmarking code
that causes inaccurate or inconsistent results. Do not rely heavily on this (or other) benchmark to be totally accurate. This is a best-effort and nothing more.

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


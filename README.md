# Nyaakey :cat:

**Nyaakey** is an open-source, federated meowy service! 🐾

Nyaakey is a soft fork of [Misskey](https://joinmisskey.org/) and [Sharkey](https://joinsharkey.org/), with a focus on scalability and performance. It tries to pull from upstream as much as possible, with some cherry-picked features from Sharkey and other Misskey forks, mostly from `misskey.io`.

Most of the changes are focused on backend, with emphasis on enabling multi-container deployments,
allowing for scaling and high availability setups over Kubernetes and other container orchestration platforms.

## Planned features

- Better support for multi-container deployments
  - Dedicated workers
  - Dedicated web servers
  - Kubernetes deployment charts
  - (possibly) Prometheus exporters

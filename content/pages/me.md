---
template: page
title: About
slug: me
description: Michael Cao — Computer Science at UIC, backend systems, AI infrastructure, research, and competitive programming.
---

## Hello

I'm Michael Cao, a Computer Science student at the University of Illinois
Chicago, with a minor in Mathematics. I expect to graduate in May 2028 and
currently hold a 4.0 GPA.

I build reliable backend systems and AI infrastructure. My work spans concurrent
storage, local model orchestration, retrieval systems, and reproducible LLM
evaluation. I'm drawn to the engineering that makes AI useful in practice:
clear interfaces, careful measurement, and systems that hold up under load.

## Experience

At **Finbud AI**, I spent the summers of 2025 and 2026 working on the systems
behind a financial companion. I rebuilt a document-retrieval service using
FastAPI, Redis, and LangChain, sustaining 1,200 concurrent requests under 300 ms
in benchmarks over 10,000+ document chunks. I also fine-tuned Llama 3 routing
models with LoRA and DPO, reducing malformed tool calls from 40% to 20% on a
1,000-case evaluation suite, and automated retrieval and latency checks with
Airflow.

At the **UIC Mathematics Laboratory**, I research LLM-assisted grading of worked
calculus solutions. I built a benchmark of 250 authored solutions across 34
problem families and eight topics, with family-disjoint training, validation,
and test splits. The completed [MURL study](https://github.com/cmkhoa/uic-murl-llm-grader-finetune)
compares structured grading and error detection with parameter-efficient
fine-tuning. The selected Qwen3-4B model achieved 39/47 correct labels (83%) and
0.70 taxonomy macro F1 on the held-out test, with 47/47 schema-valid outputs.

My earlier internships focused on backend and integration work. At **Career
Foundation Hub**, I built a student-counseling platform supporting 1,000+ records
with three permission tiers, and improved an AI application workflow through
caching, request pacing, and exponential backoff. At **eSmart Solutions Agency**,
I built event-driven services connecting CRM, email, and analytics systems,
with schema validation and retry-safe failure handling.

## What I'm building

- [**RedisClone**](https://github.com/cmkhoa/redisclone): a Redis-compatible Go
  server with a 32-shard keyspace, ordered multi-key locking, expiration,
  eviction, and append-only persistence. It is verified with race tests and
  benchmarked at over one million SET and GET requests per second.
- [**myLlama**](https://github.com/cmkhoa/myLlama): a localhost control plane for
  `llama.cpp`, with process supervision, profiles, bounded request queues,
  streaming responses, cancellation, health checks, and metrics.
- [**Canvas MCP**](https://github.com/cmkhoa/canvas-mcp): a Rust server that gives
  AI clients read-only access to course content, deadlines, and grades.
- **VaultShare** (in progress): a file-sharing application built with Next.js,
  Go, PostgreSQL, and S3-compatible storage, with owner, viewer, and editor
  permissions checked before issuing short-lived upload and download URLs.

## Community and competitive programming

I'm a **co-founder of UIC ICPC** and **technical lead for UIC ACM Jobs**.
Competitive programming has been a big part of how I learn to reason about
algorithms and tradeoffs: my results include **Top 8 at the 2026 ICPC
Mid-Central Regional** and **Top 35 at the 2022 ICPC Vietnam National Round**.
I'm also on the UIC Dean's List.

## Beyond engineering

This site is also a place for the things I make and notice outside of code. I'm
into photography and Formula 1—especially McLaren and Oscar Piastri. A photo
section is on the way.

## Contact

You can find me on [GitHub](https://github.com/cmkhoa) and
[LinkedIn](https://linkedin.com/in/cmkhoa), or email me at
[cmkhoa2006@gmail.com](mailto:cmkhoa2006@gmail.com).

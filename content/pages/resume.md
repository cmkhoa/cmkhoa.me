---
template: page
title: Resume
slug: resume
description: Experience and selected work by cmkhoa.
---

## Experience

### Finbud AI — Software Engineering Intern

*2025–2026 · Chicago, IL*

- Built and benchmarked a FastAPI retrieval-augmented generation backend for 10K+ financial documents, using Redis caching and Airflow ingestion to sustain sub-300 ms latency at 1,200+ concurrent requests.
- Fine-tuned Llama 3 with PyTorch and LoRA on 10K+ synthetic routing scenarios, reducing malformed tool calls from 40% to 20% on a 1,000-case evaluation suite.
- Delivered Siri-enabled financial-companion actions and supporting backend integrations for production workflows.

### University of Illinois Chicago Mathematics Laboratory — Undergraduate Researcher

*2026–present · Chicago, IL*

- Built an evaluation pipeline for LLM-assisted grading of Calc I–II integration solutions, including structured feedback, first-error localization, and error taxonomy.
- Completed a cross-family comparison of prompt-only and parameter-efficient fine-tuning approaches with reproducible data splits and versioned evaluation artifacts. The selected Qwen3-4B model achieved 39/47 correct labels and first-error exact match on 24/26 eligible held-out examples.

### Career Foundation Hub — Software Engineering Intern

*2025 · Remote*

- Migrated a student counseling platform to a distributed GCP, Node.js, and MongoDB architecture with role-based access across three permission tiers.
- Improved an agentic job-application workflow with cached context, prompt constraints, request pacing, and retry logic—cutting median step latency from 10 seconds to 5 seconds and rate-limit failures to 5% across 1,000+ runs.

### eSmart Solutions Agency — Software Engineering Intern

*2024 · Saint Paul, MN*

- Built event-driven integration workflows across three client projects using Node.js serverless functions, REST APIs, and webhooks.
- Standardized validation, data normalization, and retry-safe failure handling, reducing malformed CRM records from 10% to 4%.

## Selected work

- [**RedisClone**](https://github.com/cmkhoa/redisclone) — A Go implementation of a Redis-compatible in-memory server with concurrent sharded storage, RESP2/TCP, AOF durability, and benchmarked performance.
- [**myLlama**](https://github.com/cmkhoa/myLlama) — A local LLM runner manager that supervises `llama.cpp`, queues requests, exposes streaming completions, and records health and performance metrics.
- [**MURL**](https://github.com/cmkhoa/uic-murl-llm-grader-finetune) — A completed fine-tuning and evaluation study for structured grading of worked integration solutions; 47/47 valid outputs and 39/47 correct labels on the held-out test.
- [**Canvas MCP**](https://github.com/cmkhoa/canvas-mcp) — A single-binary Rust MCP server with 46 read-only tools for Canvas LMS, including course content, deadlines, grades, and grade scenarios.

## Education and skills

**University of Illinois Chicago** — B.S. in Computer Science, minor in Mathematics, expected May 2028. GPA: 4.0.

**Focus areas:** distributed systems, backend reliability, AI infrastructure, and applied machine learning.

**Tools:** Go, Rust, Python, TypeScript, Java, C/C++, SQL, FastAPI, Node.js, Redis, PostgreSQL, MongoDB, Docker, GitHub Actions, Airflow, PyTorch, AWS, and GCP.

Outside class and work, I practice algorithms and competitive programming through ICPC preparation.

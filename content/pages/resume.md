---
template: page
title: Resume
slug: resume
description: Michael Cao's education, engineering experience, research, and selected projects.
---

## Education

**University of Illinois Chicago** — B.S. in Computer Science, minor in Mathematics. Expected May 2028 · GPA: 4.0.

**Honors:** ICPC Mid-Central Regional 2026 Top 8; ICPC Vietnam National Round 2022 Top 35; UIC Dean's List.

**Leadership:** Co-Founder, UIC ICPC; Technical Lead, UIC ACM Jobs.

**Coursework:** Data Structures & Algorithms, Systems Programming, Software Design, Artificial Intelligence, Machine Learning.

## Experience

### Finbud AI — Software Engineering Intern

*June–August 2026*

- Rebuilt a document-retrieval API over 10,000+ document chunks using FastAPI, Redis, and LangChain/LangGraph, increasing benchmark capacity from 200 to 1,200 concurrent requests while staying under 300 ms.
- Built a PyTorch evaluation workflow with NumPy and Pandas for 1,000 tool-routing scenarios, isolating formatting and routing failures before model updates reached production.
- Automated health checks, cache validation, and latency monitoring with Airflow, catching 25+ regressions before they affected users.

### Finbud AI — Software Engineering Intern

*June–August 2025*

- Fine-tuned Llama 3 with LoRA and DPO on 10,000+ synthetic routing examples, reducing malformed tool calls from 40% to 20% on a 1,000-case evaluation suite.
- Replaced an external GPT-4o routing dependency with a self-hosted Llama 3 inference service, avoiding a projected 20% operating-cost increase.
- Shipped 10 tool integrations for a financial companion through Node.js services and Siri App Intents.

### University of Illinois Chicago Mathematics Laboratory — Undergraduate Researcher

*2026–present*

- Created a benchmark for grading Calc I–II integration solutions, covering 250 authored examples across 34 problem families and eight topics, with family-disjoint training, validation, and test splits.
- Fine-tuned Qwen3-4B with 4-bit NF4 QLoRA on T4 GPUs to generate structured grading labels, error categories, first-error locations, evidence, and feedback.
- Built schema-aware evaluation for output validity, accuracy, taxonomy macro F1, and first-error localization. The selected model achieved 39/47 correct labels (83%), 0.70 taxonomy macro F1, and 47/47 schema-valid outputs on the held-out test.

### Career Foundation Hub — Software Engineering Intern

*September–November 2025*

- Built a student-counseling platform supporting 1,000+ records and three permission tiers with React, Node.js, MongoDB, Docker, and GCP.
- Improved a ReAct-based application workflow with caching, prompt constraints, request pacing, and exponential backoff, cutting median step latency from 10 to 5 seconds and rate-limit failures to 5% across 1,000+ runs.

### eSmart Solutions Agency — Software Engineering Intern

*June–August 2024*

- Built event-driven services for three client projects using Node.js serverless functions, REST APIs, and webhooks to route 900 weekly leads across CRM, email, and analytics systems.
- Standardized schema validation, data normalization, and retry-safe handling, reducing malformed CRM records from 10% to 4% and integration setup time from seven to two days.

## Selected work

- [**RedisClone**](https://github.com/cmkhoa/redisclone) — A Redis-compatible Go server with RESP2/TCP, a 32-shard keyspace, ordered multi-key locking, expiration, eviction, and AOF durability. Validated with unit, end-to-end, and race tests; benchmarked at over one million SET and GET requests per second.
- [**myLlama**](https://github.com/cmkhoa/myLlama) — A local control plane for `llama.cpp` with profiles, process supervision, a bounded FIFO queue, streaming responses, cancellation, runtime limits, health checks, and metrics.
- [**MURL**](https://github.com/cmkhoa/uic-murl-llm-grader-finetune) — A completed fine-tuning and evaluation study for structured grading of worked calculus solutions, with a frozen held-out evaluation and reproducible artifacts.
- [**Canvas MCP**](https://github.com/cmkhoa/canvas-mcp) — A single-binary Rust MCP server with 46 read-only tools for Canvas LMS, including course content, deadlines, grades, and grade scenarios.

## Skills

**Languages:** Go, Rust, Python, C/C++, Java, TypeScript, JavaScript, SQL.

**Backend & data:** FastAPI, Node.js, Express, Spring Boot, React, Next.js, Redis, PostgreSQL, MongoDB, Kafka, REST APIs, S3-compatible storage.

**ML & LLM systems:** PyTorch, NumPy, Pandas, Hugging Face Transformers, PEFT, bitsandbytes, Unsloth, LangChain, LangGraph, LoRA, DPO, QLoRA, RAG, LLM evaluation, MCP, llama.cpp.

**Infrastructure:** GCP, AWS, Docker, Airflow, Git, GitHub Actions, CI/CD, Linux, Bash, TCP.

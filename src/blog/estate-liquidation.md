---
title: "Estate Liquidation App"
slug: "/blog/estate-liquidation"
date: "2026-04-10"
---

## The Problem

Estate liquidation field workers walk through properties photographing items and taking handwritten notes a slow and error-prone process that makes reporting and downstream auction-house integrations painful. I built this app to digitise and automate that workflow.

## How It Works

1. Worker opens the app and creates a **Project** (the property/estate).
2. Under that project they start a **Job**
3. For each item they photograph it in-app.
4. The photo is sent to the **Claude vision API**, which returns a structured inventory entry: item name, description, condition, estimated value range, category, and auction suitability.
5. The worker reviews, edits, and sets a **disposition tag** before saving.
6. At the end of a job a **PDF report** is generated from the underlying JSON.
7. Auction houses can subscribe to access inventory via a **REST API**.

## Tech Stack

- **React Native (Expo)** — iOS first, cross-platform ready
- **AWS** — API Gateway, Lambda, S3, DynamoDB
- **Terraform** — IaC, cloud-agnostic for a future GCP migration
- **Anthropic API (Claude)** — vision/LLM processing of photos
- **PDF generation Lambda** — renders job JSON into a formatted report

## Progress

- ✅ Expo app + Expo Router
- ✅ Camera screen — photo capture
- ✅ Claude vision API integration
- ✅ Review and edit screen with disposition tags
- ✅ Local state management (React Context)
- ✅ Backend bootstrap — Terraform + SSM parameters
- ✅ DynamoDB, S3, Lambdas, API Gateway
- ✅ Mobile app connected to backend API
- ◌ PDF report generation
- ◌ Auth

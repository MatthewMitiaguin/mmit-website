---
title: "Estate Liquidation App"
slug: "/blog/estate-liquidation"
date: "2026-04-10"
---

## The Problem

I got introduced through a mutual contact to someone who runs an estate liquidation business where workers walk through properties photographing items and then doing manual data entry back at the office to create PDFs containing inventory information. That is overall quite a slow and error prone process that makes downstream reporting and auction house integrations a pain. He wanted to digitise and automate the process so I took it on as a contracting project, partly to help him out and partly as an excuse to build something real with AI.

## How It Works

1. Worker opens the app and creates a **Project** (the property/estate)
2. Under that project they start a **Job** (a walkthrough session)
3. For each item they photograph it in app
4. The photos are sent to the **Claude Vision API** which returns a structured inventory entry, item name, description, condition, estimated value range, category and auction suitability
5. The worker reviews, edits and sets a **disposition tag** before saving (`sell` / `donate` / `keep` / `throw` / `hold` / `tbc`)
6. At the end of a job a **PDF report** is generated from the underlying JSON
7. Auction houses can subscribe to access inventory via a **REST API**

## Tech Stack

- **React Native (Expo)** —> iOS first, I wanted to avoid native Swift/Xcode complexity and Expo handles camera, file system and cross-platform stuff out of the box
- **AWS** —> API Gateway, Lambda, S3, DynamoDB, IAM etc
- **Terraform** —> keeping it cloud-agnostic for a potential future GCP migration
- **Anthropic API (Claude)** —> direct API rather than Bedrock, simpler for a prototype and not AWS specific

## Architecture

![Mobile App Architecture](https://s3.ap-southeast-2.amazonaws.com/mattmitiaguin.com/src/blog/images/mobileapp.png)

## Design Decisions

Building this out I made a few calls that changed as the project progressed.

Initially I went with a separate Lambda per endpoint which felt clean in theory, one function one responsibility. This quickly escalated and just seemed like overkill to have so many different lambdas doing very simple calls, remembered I worked on a similar project at Montu where we had generic lambdas that could call lots of different helpers relevant to a specific service. Also cold starts across multiple functions, more Terraform to manage, more IAM roles to wire up was painful 

For state management I used React Context for the MVP since it's built into React and perfectly fine for getting something working quickly. The plan is to swap to Zustand once the backend is properly connected and state gets more complex. Context re-renders the whole tree when state changes which gets painful as the app grows, Zustand handles async calls, loading and error states a lot more cleanly at that point.

For auth, Cognito is the right answer for a proper production app but for a prototype with 5-15 known field workers it's a lot of setup and overhead. Went with a shared secret token stored in SSM Parameter Store instead. Simple, secure enough for now, and easy to swap out for Cognito when it actually needs it.

## Using Claude Code

This was my first React Native project and I used Claude Code pretty heavily for this particularly for wiring up navigation, camera and file system APIs I wasn't familiar with. On the AWS backend side I wrote most of it myself since that's what i've been doing in my past couple roles, still using Claude Code for boilerplate and sanity checking.ß

It was a good way to pick up React Native quickly without getting stuck on syntax. Less writing but felt like a lot of reading as I was still trying to understand every line, just to make sure it's not making a cowboy solution/something decent.

Worth mentioning I built most of this without a MacBook as I was waiting on mine to get delivered. Expo Go made was actually quite useful you can just scan a QR code and the app runs on your phone instantly with hot reload. Big upgrade from the last time I tried to build an iOS app back in 2020 where I was doing a Udemy course using MacInCloud (i didn't have a macbook at the time either). That was genuinely painful slow to compile and fight xCode the whole way, but anyways the dev process probably got better there also

## Screenshots of PoC

![Working Screenshot1](https://s3.ap-southeast-2.amazonaws.com/mattmitiaguin.com/src/blog/images/mobilescreenshot1.png)

![Working Screenshot2](https://s3.ap-southeast-2.amazonaws.com/mattmitiaguin.com/src/blog/images/mobilescreenshot2.png)

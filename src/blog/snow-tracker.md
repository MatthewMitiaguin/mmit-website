---
title: "Building a Snow Tracker with AWS Lambda and Discord"
slug: "/blog/snow-tracker"
date: "2026-04-27"
---

## Why I Built This

I wanted a easy way to answer a simple question during snow season: _is it actually worth going this week?_ 

Resorts and forecast websites already publish conditions and generally speaking since they are in the same state they do overlap. But instead of needing to constantly check social media and those websites to see if i'm missing a good snow trip this small project turns it into an automatic notifcation. Realistically i'm still going to be checking all the time :sweat_smile: but now I won't accidentally miss the conditions if i'm busy.

The current tracker focuses on Australian resorts for alerting, with support for:

- Falls Creek
- Mount Hotham
- Perisher
- Thredbo

There is also a Niseko configuration in the codebase, which I used while building and testing the parser.

## How It Works

At a high level, the app fetches snow reports from `snow-forecast.com`, extracts the useful fields, converts those into a score out of 10, and posts the best results into Discord.

The Lambda loads the Discord webhook from SSM, calculates alerts, checks whether each alert has already been sent, and then posts only new high-scoring results.

## Scraping and Parsing Conditions

Each resort is defined in a shared configuration file with its display name, forecast URL, and the table fields we care about. The parser uses `cheerio` to extract:

- top snow depth
- bottom snow depth
- fresh snowfall depth
- last snowfall
- multi-day forecast data

The forecast view on `snow-forecast.com` is split into three slots per day, so the parser aggregates those into a single daily summary. Snowfall is summed, while temperature and wind are reduced into daily max values. That gives the scoring layer a cleaner input without needing to reason about morning, afternoon, and night separately.

## Turning Raw Weather into a Score

The interesting part of the project is not just scraping data, but turning it into a quick decision signal.

The current scoring model combines:

- fresh snow
- forecast snow over the next few days
- base depth
- weather penalties

Fresh snow can contribute up to 4 points, forecast snow up to 3, and base depth up to 2. After that, the score is penalised if the base is too thin or if forecast wind is high enough to make lift closures likely. The raw total is then normalised onto a 0 to 10 scale.

That means the bot is not only looking for powder, but also asking whether there is enough coverage underneath it and whether the weather looks skiable once you get there.

For example, a strong result might look like:

- 20cm+ of fresh snow
- another 15cm+ forecast
- 120cm+ base depth
- low wind across the forecast window

That type of report crosses the default alert threshold of `8/10` and gets posted to Discord.

## Local CLI for Quick Checks

I also added a simple TypeScript CLI for local testing and manual comparisons. That makes it easy to sanity-check the scoring model without deploying anything.

```bash
pnpm start check falls-creek
pnpm start compare
pnpm start alerts
```

`check` scores one resort, `compare` ranks the Australian resorts side by side, and `alerts` shows only the resorts that would generate a notification. There is also a mock-data mode for testing without depending on live site responses.

## AWS Deployment Design

![Architecture](https://s3.ap-southeast-2.amazonaws.com/mattmitiaguin.com/src/blog/images/snowarchitecture.png)

- AWS Lambda runs the alert job
- EventBridge Scheduler triggers it on a schedule
- DynamoDB stores recently sent alerts
- SSM Parameter Store stores the Discord webhook securely

By default EventBridge schedules the alert Lambda for `7:00 AM` and then DynamoDB records use a 7-day TTL so duplicate alerts naturally expire without needing a cleanup job.

That gives the project a nice balance: low cost, very little infrastructure, and enough state to avoid spamming Discord with the same result every day.

## Discord Alerts

When a resort passes the threshold, the bot sends a Discord embed with:

- the resort name
- the score out of 10
- a quick summary of why it scored that way
- a localised timestamp

The embed colour changes based on the score, so strong conditions are easy to spot at a glance.

![Discord Alert](https://s3.ap-southeast-2.amazonaws.com/mattmitiaguin.com/src/blog/images/discord1.png)


## What I'd Improve Next

There are a few obvious next steps from here:

- add more resorts and make resort lists configurable
- track score trends over time, not just one-off alerts
- expose the results through a small web dashboard
- tune the scoring model using real trip feedback
- add richer Discord messages with forecast tables or charts

## Final Thoughts

For a hobby project, that is exactly the kind of automation I like building: simple, cheap to run, and tied to a real-world decision.

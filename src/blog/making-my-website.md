---
title: "Developing my website"
slug: "/blog/making-my-website"
date: "2021-08-01"
---

## My site

This is my website, I used GatsbyJS which is a static site generator. I used Gatsby plugins to read and understand markdown folders instead of creating unique JS pages for each blog post. Using GraphQL it reads the markdown file and injects it into Gatsby using a data prop. This allows me to have all the customization centralised in one component.

It is hosted with AWS Infrastructure, below is an architecture diagram on how it works.

![AWS Diagram](https://s3.ap-southeast-2.amazonaws.com/mattmitiaguin.com/src/blog/webpagearchitecture_50.png)

- [x] Make it more mobile friendly
- [ ] Update the navigation between pages
- [ ] Add navigation between categories
- [ ] Create CI/CD instead of manually uploading to S3 via CLI
- [ ] Add tests before deploying straight to S3
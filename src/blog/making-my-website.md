---
title: "Developing my website"
slug: "/blog/making-my-website"
date: "2023-05-15"
---

## Design & Architecture

My website was built with GatsbyJS, a static site generator. Instead of creating individual JS pages for each blog post, I utilized Gatsby plugins to parse and interpret markdown folders. With the help of GraphQL, Gatsby can extract the data from the markdown files and inject it into a data prop, which can be centralized in a single component for easy customization. The website is hosted on AWS Infrastructure and the following architecture diagram illustrates how it operates.

![AWS Diagram](https://s3.ap-southeast-2.amazonaws.com/mattmitiaguin.com/src/blog/webpagearchitecture_50.png)

 I opted to utilize two accounts: a "dev" and "production" account. Using the IAM service, an IAM User will be assigned an IAM Role that has minimal privileges, enabling them to make minor adjustments to the S3 bucket and CloudFront settings.

![IAMRoles Diagram](https://s3.ap-southeast-2.amazonaws.com/mattmitiaguin.com/src/blog/images/iamroles.png)

- [x] Make it more mobile friendly
- [ ] Update the navigation between pages
- [ ] Create CI/CD instead of manually uploading to S3 via CLI

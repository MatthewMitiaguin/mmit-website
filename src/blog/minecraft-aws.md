---
title: "Hosting Minecraft Servers On AWS"
slug: "/blog/minecraft-aws"
date: "2023-05-18"
---

## Planning & Design

Currently I have only created a basic CloudFormation file that has an EC2 and Security Group. Within this EC2 I have added some "User Data" so that the server comes pre-installed. However I would like to extend this CloudFormation a lot further so that it has a much smarter and automated design. Below is a diagram that illustrates my proposed architecture.

![AWS Diagram](https://s3.ap-southeast-2.amazonaws.com/mattmitiaguin.com/src/blog/webpagearchitecture_50.png)

Here I have provided a more in detail diagram showing how the containers will sit inside the VPC, Subnets and Availability Zones.

![VPC Diagram](https://s3.ap-southeast-2.amazonaws.com/mattmitiaguin.com/src/blog/images/iamroles.png)

- [ ] Update CloudFormation so that it doesn't require setup via AWS Console
- [ ] Automate deployments
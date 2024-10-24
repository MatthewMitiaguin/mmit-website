# Step 1: Use Node to build the Gatsby site
FROM node:18 AS builder

# Set working directory in the container
WORKDIR /app

# Copy the package.json and yarn.lock (or package-lock.json) to install dependencies
COPY package.json ./

# Install dependencies
RUN npm install -g gatsby-cli
RUN npm install

# Copy the rest of the application files to the container
COPY . .

# Build the Gatsby site
RUN npm run build

# Step 2: Use Nginx to serve the static site
FROM nginx:alpine

# Copy the build output from the Gatsby builder step to the Nginx html directory
COPY --from=builder /app/public /usr/share/nginx/html

# Expose port 80
EXPOSE 80

# Start Nginx
CMD ["nginx", "-g", "daemon off;"]
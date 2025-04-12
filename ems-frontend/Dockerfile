# Base image
FROM node:21-alpine

# Set working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy rest of the project
COPY . .

# Expose Vite's default port
EXPOSE 3000

# Run Vite dev server
CMD ["npm", "run", "dev", "--", "--host"]

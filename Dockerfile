# Step 1: Build stage
FROM node:18-alpine AS build
WORKDIR /app
COPY . .
RUN npm ci && npm run build

# Step 2: Production stage
FROM node:18-alpine AS production
WORKDIR /app
COPY --from=build /app/build ./build

HEALTHCHECK --interval=30s --timeout=10s --start-period=10s --start-interval=3s \
    CMD ["sh", "-c", "wget -q --spider http://127.0.0.1:3000/ || exit 1"]

CMD ["node", "build"]
FROM node:20-alpine AS build
WORKDIR /app
COPY webapp/package*.json ./
RUN npm ci
COPY webapp/ ./
RUN npm run build

FROM nginx:alpine
COPY --from=build /app/dist /usr/share/nginx/html
EXPOSE 80
CMD [ "nginx", "-g", "daemon off;" ]
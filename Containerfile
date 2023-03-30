FROM node:18-alpine AS build
COPY . /srv
WORKDIR /srv
RUN npm i
RUN npm run build

FROM docker.io/nginx:alpine
COPY --from=build /srv/build /usr/share/nginx/html


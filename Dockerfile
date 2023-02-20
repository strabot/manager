FROM node:18.13.0-alpine

RUN apk update && apk add --no-cache build-base gcc autoconf automake zlib-dev libpng-dev nasm bash vips-dev
ENV NODE_ENV=production

WORKDIR /var/www/strabot-manager

COPY package*.json ./
RUN npm ci

COPY . .
RUN cp .env.example .env
RUN NODE_ENV=production npm run build

EXPOSE 1337

CMD [ "npm", "start" ]

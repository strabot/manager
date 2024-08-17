FROM node:20-alpine AS build

RUN apk update && apk add --no-cache \
    build-base=0.5-r3 \
    gcc=13.2.1_git20240309-r0 \
    autoconf=2.72-r0 \
    automake=1.16.5-r2 \
    zlib-dev=1.3.1-r1 \
    libpng-dev=1.6.43-r0 \
    nasm=2.16.03-r0 \
    bash=5.2.26-r0 \
    vips-dev=8.15.2-r1
ENV NODE_ENV=production

WORKDIR /opt/app
COPY package*.json ./
RUN npm ci
COPY . .
RUN cp .env.example .env
RUN NODE_ENV=production npm run build 
# Remove NODE_ENV above?

FROM node:20-alpine
RUN apk add --no-cache vips-dev
ENV NODE_ENV=production
WORKDIR /opt/app
COPY --from=build /opt/app ./

RUN chown -R node:node /opt/app
USER node
EXPOSE 1337
CMD ["npm", "start"]

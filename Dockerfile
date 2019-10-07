FROM node:11-alpine
RUN apk --update --no-cache \
      add  \
      automake \
      git \
      alpine-sdk  \
      nasm  \
      autoconf  \
      build-base \
      zlib \
      zlib-dev \
      libpng \
      libpng-dev\
      libwebp \
      libwebp-dev \
      libjpeg-turbo \
      libjpeg-turbo-dev
RUN mkdir /src
WORKDIR /src
COPY . /src
RUN npm install && npm run build
EXPOSE 8080
CMD ["npm", "run", "serve"] 

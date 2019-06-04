FROM node:11-alpine
RUN mkdir /src
WORKDIR /src
COPY . /src
RUN npm install && npm run build
EXPOSE 8080
CMD ["npm", "run", "serve"] 

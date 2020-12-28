FROM node:12-alpine as build

ENV
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm install
COPY . .
RUN npm install -g @angular/cli
RUN ng build --prod --configuration production --output-path=/dist

FROM nginx:alpine
COPY --from=build /dist /usr/share/nginx/html

CMD ["/bin/sh",  "-c", "exec nginx -g 'daemon off;'"]

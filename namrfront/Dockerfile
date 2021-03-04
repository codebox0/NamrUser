# stage1 - build react app first
#FROM node:12.16.1-alpine3.9 as build
#WORKDIR /app
#ENV PATH /app/node_modules/.bin:$PATH
#COPY ./package.json /app/
#COPY ./yarn.lock /app/
#RUN yarn --silent
#COPY . /app
#EXPOSE 3000
#
#CMD ["yarn", "build"]
#RUN yarn build

# stage 2 - build the final image and copy the react build files

#FROM nginx:1.17.8-alpine
#COPY --from=build /app/build /usr/share/nginx/html
#RUN rm /etc/nginx/conf.d/default.conf
#COPY nginx/nginx.conf /etc/nginx/conf.d
#EXPOSE 80
#CMD ["nginx", "-g", "daemon off;"]


# #############################   Stage 0, Build the app   #####################
# pull official base image
FROM node:13.12.0-alpine as build-stage
# set working directory
WORKDIR /app
# add `/app/node_modules/.bin` to $PATH
ENV PATH /app/node_modules/.bin:$PATH
# install app dependencies
COPY package*.json ./
#RUN npm install
RUN npm install

# add app
COPY . ./

#EXPOSE 3000

#build for production
RUN npm run-script build
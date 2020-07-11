# FROM docker/whalesay:latest
# LABEL Name=pokedexui Version=0.0.0
# RUN apt-get -y update && apt-get install -y fortunes
# CMD /usr/games/fortune -a | cowsay

FROM nginx:alpine

RUN rm -rf /usr/share/nginx/html/*

CMD ["nginx", "-g", "daemon off;"]

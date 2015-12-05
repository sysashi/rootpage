FROM node:latest
WORKDIR /
RUN git clone https://github.com/sysashi/rootpage
WORKDIR rootpage
RUN npm i
CMD node_modules/webpack/bin/webpack.js
VOLUME output/

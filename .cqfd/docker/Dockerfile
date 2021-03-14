FROM node:12.21.0-buster-slim

RUN DEBIAN_FRONTEND=noninteractive apt-get update && apt-get install -y -q --no-install-recommends \
    build-essential \
    cmake \
    mesa-common-dev \
    pkg-config \
    && apt-get clean && rm -rf /var/lib/apt/lists/*


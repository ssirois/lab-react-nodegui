FROM node:12.21.0-buster-slim

RUN DEBIAN_FRONTEND=noninteractive apt-get update && apt-get install -y -q --no-install-recommends \
    build-essential \
    cmake \
    libdbus-1-3 \
    libfontconfig1 \
    libgl1-mesa-glx \
    libxcb1 \
    libxkbcommon-x11-0 \
    mesa-common-dev \
    pkg-config \
    && apt-get clean && rm -rf /var/lib/apt/lists/*


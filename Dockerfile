FROM ghcr.io/parkervcp/yolks:wine_latest

USER root

RUN apt-get update \
    && apt-get install -y --no-install-recommends unzip \
    && apt-get clean \
    && rm -rf /var/lib/apt/lists/*

COPY Reality-Mods-Only.zip /tmp/mods.zip
RUN mkdir -p /opt/bfrm-mods \
    && unzip -q /tmp/mods.zip -d /opt/bfrm-mods \
    && rm /tmp/mods.zip \
    && chmod -R 755 /opt/bfrm-mods

USER container

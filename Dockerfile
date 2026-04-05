FROM ghcr.io/parkervcp/yolks:wine_latest

USER root

# Download and bake BF3 Reality Mod files into the image at build time.
# At server startup, these are copied locally into Admin/Mods — no downloading required.
RUN apt-get update \
    && apt-get install -y --no-install-recommends curl unzip \
    && mkdir -p /opt/bfrm-mods \
    && curl -L -o /tmp/mods.zip "https://github.com/BF3RM/Release_Packaging/releases/download/release/Reality-Mods-Only.zip" \
    && unzip -q /tmp/mods.zip -d /opt/bfrm-mods \
    && rm /tmp/mods.zip \
    && chmod -R 755 /opt/bfrm-mods \
    && apt-get clean \
    && rm -rf /var/lib/apt/lists/*

USER container

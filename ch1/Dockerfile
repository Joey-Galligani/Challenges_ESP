FROM debian:bookworm-slim

RUN apt-get update && apt-get install -y \
    apache2 \
    && rm -rf /var/lib/apt/lists/*

COPY challenge/ /var/www/html/
COPY entrypoint.sh /entrypoint.sh

RUN chmod +x /entrypoint.sh \
    && chown -R www-data:www-data /var/www/html/

EXPOSE 13337

ENTRYPOINT ["/entrypoint.sh"]
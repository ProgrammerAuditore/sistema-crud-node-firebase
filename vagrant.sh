# Este es un script para Vagranfile
# vagrant provision
echo "[...] Provision iniciando [...]"
cd /home/vagrant/workspace
docker-compose stop
docker-compose rm --force
docker-compose build
docker-compose up -d
echo "[...] Provision finalizado exitosamente ! [...]"

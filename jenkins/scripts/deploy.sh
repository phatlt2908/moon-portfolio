set -x
npm run build-prod
set +x

echo 'Build completed -> copying builded file'
set -x
chmod +x -R ${env.WORKSPACE}
cp -a build/. /var/www/moon-port/
set +x

echo 'Build and deploy completed.'
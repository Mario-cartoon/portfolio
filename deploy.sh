#!/usr/bin/env sh
 
set -e
 
npm run build
 
cd dist


git init
git add -A
git commit -m 'deploy'


# если вы публикуете по адресу https://<USERNAME>.github.io/<REPO>
git push -f git@github.com:mario-cartoon/portfolio.git master:gh-pages

cd -
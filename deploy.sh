#!/usr/bin/env sh
# abort on errors 
set -e 

# build 
echo Linting.. 
npm run lint 
echo Building. this may take a minute... 
npm run build 

# if you are deploying to a custom domain add a CNAME (uncomment the next 3 lines) 
#cd docs 
#echo 'yourcustomdomain.com' > CNAME 
#cd - 

# deploy 
echo Deploying.. 
git add -A 
git commit -m 'deploy' 

# если вы публикуете по адресу https://<USERNAME>.github.io/<REPO>
git push -f git@github.com:mario-cartoon/portfolio.git master:gh-pages

cd -
git clone https://github.com/shopglobal/cryptonote-universal-pool cnpool 
cd cnpool 
git pull origin master
git pull origin mynt-patch
git checkout mynt-patch
curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.33.8/install.sh | bash
nvm install 0.10.48
nvm use 0.10.48 && npm install
echo 'DONE, ready for action'
exit

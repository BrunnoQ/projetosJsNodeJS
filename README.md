#Comandos utilizados para rodar o projeto
1- Para iniciar o projeto como nodejs --> npm init
2- Instalando o módulo express e colocando-o como dependência do projeto e definindo a exata versao @4.16.3 e adicionando 
como dependencia de deploy --save-exact --> npm install express@4.16.3 --save-exact 
3- no package.json existe a parte "scripts", onde posso definir scprits
para serem rodados quando executo o comando npm na pasta do projeto.
Ex: npm start vai rodar a porra do projeto.
4- Com o nodemon posso realizar um hotdeploy toda vez que fizer uma alteração no arquivo
de forma automática, sem precisar subir server toda hora.
5- Nodemon não precisa ser uma dependencia de deploy somente de dev!
6- comando para instalar via npm (exact e forcar a versao e nao procurar outra):
npm install nodemon@1.18.4 --save-dev -save-exact
7- Instalar o nodemon de maneira GLOBAL (-g), ou seja, para usar no SO via linha de comando:
npm install -g nodemon@1.18.4 --save-exact

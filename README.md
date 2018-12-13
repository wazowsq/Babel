# Babel

[![GitHub forks](https://img.shields.io/github/forks/rafaeltorres89/tvt-mg-ds.svg)](https://github.com/rafaeltorres89/tvt-mg-ds/network)
[![npm](https://img.shields.io/npm/v/npm.svg)](https://github.com/rafaeltorres89/tvt-mg-ds/npm)

-------

<h3 align="center">
  <img src="https://www.plusoft.com.br/wp-content/uploads/2017/02/Descubra-as-possibilidades-e-oportunidades-do-omni-Plusoft.jpg" alt="Plusoft Omni" />
</h3>

<p align="center">
    <a href="#features">Features</a> &bull;
    <a href="#organization">Organization</a> &bull;
    <a href="#installation">Installation</a>
</p>

## Features

Funcionalidade de interações com clientes via chat/whatsapp. [Figma](https://www.figma.com/proto/aelWB1IF6Bp4kKmFXpExMOCs/Intera%C3%A7%C3%B5es-Omni-Plusoft?node-id=39%3A43&viewport=241%2C201%2C0.160193&scaling=min-zoom)


## Organization

Complete structure

```
Whatsapp Omni Plusoft/
├── node_modules*
├── src
│   ├── css
│   │   │── app.css
│   │   └── style.min.css
│   └── scss
│       │── base
│       │   └── _normalize.scss
│       │── helpers
│       │   └── _animate.scss
│       │── settings
│       │   │── _colors.scss
│       │   │── _mixins.scss
│       │   │── _oocss.scss
│       │   └── _variables.css
│       │── vendor
│       │   └── bootstrap-4.1.1
│       │── _general.scss
│       └── app.scss
├── .gitignore
├── gulpfile.js
├── interacoes.html
├── packege-lock.json
├── packege.json
└── README.md
```



## Installation

For this work, we are using technologies such as [Gulp](https://gulpjs.com/), [Sass](https://sass-lang.com/), [NPM](https://www.npmjs.com/) and [React Native](http://www.reactnative.com/). If you do not know these technologies, click on the links and read about them.

To work on the project, you need to perform some functions on your system and git.

Configure your machine as follows:

* Logue com sua conta no GIT.

<h4 align="center">
  <img src="https://image.ibb.co/cmZs7T/git_init.png" alt="Git" />
</h4>

* Acesse o projeto no link [Life Design Mongeral no Git](https://github.com/rafaeltorres89/tvt-mg-ds).

<h4 align="center">
  <img src="https://image.ibb.co/hzxR1o/git_repositorio.png" alt="Repositorio" />
</h4>

* No botão "FORK", no canto superior do seu git, clique e espere o ok da página. 

<h4 align="center">
  <img src="https://blog.da2k.com.br/uploads/2015/02/fork-repository.png" alt="Fork" />
</h4>

* Após o fork do repositório, repare que abaixo do nome do repositório é mostrado o repositório original.

<h4 align="center">
  <img src="https://blog.da2k.com.br/uploads/2015/02/forked-from.png" alt="Repositório real" />
</h4>

* Clone o respositório no botão verde acima do conteúdo. 

<h4 align="center">
  <img src="https://image.ibb.co/fDvw1o/clone.png" alt="Clone" />
</h4>

Vá ao terminal, encontre a pasta desejada e digite:
```
git clone https://github.com/rafaeltorres89/tvt-mg-ds.git
```

* Crie uma brach para codar as features. 
```
git branch
```
A resposta deve ser: 
```
* master
```
Por convenção, o git utiliza a branch master como padrão, para o código estável do projeto. Então, tudo o que estiver nessa branch, em qualquer repositório, ~~teóricamente~~ é código estável. Logo, você nunca irá mexer diretamente nela, mas em outras branchs, para então fazer merge com a master.

Agora vamos criar a branch com nossa feature. Temos duas formas de fazer isso. A forma mais rápida é:
```
git checkout -b improve_method_watch
```
"improve_method_watch" é o nome da nossa branch

* Em paralelo, instale o npm em sua máquina.
* Agora instale o gulp
* Instale o Dev-Gulp (repare que aparecerá a pasta XPTO)
* Instale o Sass-Gulp
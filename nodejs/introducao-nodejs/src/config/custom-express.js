/**
 * Neste modulo vamos encapsular o modulo EXPRESS de modo que somente a partir deste
 * arquivo o EXPRESS seja referenciado, evitando que trechos de codigo se repitam
 * em demasia e aumentando a coesao dos modulos, ou seja, cada arquivo com uma 
 * responsabilidade!
 * Funcionara como um controler de merda.
 */
//Modulo importando atraves do NPM, retorna uma funcao, cada SO tem os seu binarios!
const express = require('express');
const app = express();

const rotas = require('../app/rotas/rotas');

/** Rotas recebe como para APP utilizando 
 *  uma arrow Function utilizando a especificação ECMAScript6 */
rotas(app);

module.exports = app;//Digo para o meu modulo exportar o objeto express.
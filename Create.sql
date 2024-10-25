CREATE SCHEMA IF NOT EXISTS `produtos` DEFAULT CHARACTER SET utf8 COLLATE utf8_unicode_ci;

use produtos;

CREATE TABLE IF NOT EXISTS `produtos`.`acesso` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `nome` VARCHAR(50) NOT NULL,
  `email` VARCHAR(99) NOT NULL,
  `senha` VARCHAR(255) NOT NULL,
  PRIMARY KEY (`id`));

CREATE TABLE IF NOT EXISTS `produtos`.`produtos` (
    `id` INT NOT NULL AUTO_INCREMENT,
    `nome` VARCHAR(45) NOT NULL,
    `preco` DECIMAL(5 , 2 ) NOT NULL,
    `quantidade` INT NULL,
    PRIMARY KEY (`id`)
);
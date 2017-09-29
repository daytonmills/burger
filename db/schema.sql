CREATE TABLE `burgers` (
    `id` int(11) NOT NULL AUTO_INCREMENT,
    `burger_name` varchar(255) NOT NULL,
    `devoured` BOOLEAN DEFAULT false,
    `time_created` DATETIME DEFAULT NULL,
    PRIMARY KEY (`id`)
);
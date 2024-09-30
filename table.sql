CREATE TABLE user (
    id int primary key AUTO_INCREMENT,
    name varchar(250),
    contactNumber varchar(20),
    email varchar(50),
    password varchar(250),
    status varchar(20),
    role varchar(20),
    UNIQUE(email)
);

INSERT INTO user(name,contactNumber,email,password,status,role) values('Admin', '123456789','admin@gmail.com','admin','true','admin');

CREATE TABLE category(
    id int not null AUTO_INCREMENT,
    name varchar(255) not null,
    primary key(id)
);

CREATE TABLE product(
    id int not null AUTO_INCREMENT,
    name varchar(255) not null,
    categoryId integer not null,
    description varchar(255),
    price integer,
    status varchar(20),
    primary key(id)
);

CREATE TABLE bill(
    id int not NULL AUTO_INCREMENT,
    uuid varchar(200) not null,
    name varchar(255) not null,
    email varchar(255) not null,
    contactNumber varchar(20) not null,
    paymentMethod varchar(50) not null,
    total int not null,
    productDetails JSON DEFAULT NULL,
    createdBy varchar(255) not null,
    primary key(id)
);
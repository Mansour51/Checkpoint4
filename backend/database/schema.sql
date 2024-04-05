CREATE TABLE car (
  id INT AUTO_INCREMENT PRIMARY KEY NOT NULL ,
  make VARCHAR(255),
  model VARCHAR(255),
  year INT,
  price DECIMAL(10, 2),
  mileage INT,
  fuel_type VARCHAR(50),
  image_url VARCHAR(255)
);


CREATE TABLE offer (
  id INT AUTO_INCREMENT PRIMARY KEY,
  car_id INT,
  seller_name VARCHAR(255),
  contact_info VARCHAR(255),
  description TEXT,
  FOREIGN KEY (car_id) REFERENCES car(id)
);


INSERT INTO car (make, model, year, price, mileage, fuel_type, image_url) VALUES
('Toyota', 'Corolla', 2020, 20000.00, 50000, 'Hybride', 'https://i.gaw.to/vehicles/photos/40/22/402204-2020-toyota-corolla.jpg?640x400'),
('Peugeot', 'RCZ', 2013, 13500.00, 144000, 'Diesel', 'https://images.caradisiac.com/logos-ref/modele/modele--peugeot-rcz/S7-modele--peugeot-rcz.jpg'),
('Bmw', '530D e60', 2010, 10000.00, 144000, 'Diesel', 'https://content-eu.invisioncic.com/m304542/monthly_2016_09/large.DSCF7294.jpg.0a9b0ba32bb1d505c2c7a5072d4788cf.jpg'),
('Wolksvagen', 'Golf7 GTI', 2020, 30000.00, 172000, 'Essence', 'https://i.gaw.to/content/photos/44/98/449824-volkswagen-golf-gti-2020-est-elle-toujours-dans-le-coup.jpeg'),
('Renault', 'Clio', 2012, 5900.00, 120000, 'Diesel', 'https://www.blog-moteur.com/wp-content/uploads/2012/07/Renault_Clio_IV_Off_Renault_Clio4_bis17.jpg'),
('Audi', 'RS7', 2022, 134000.00, 33000, 'Essence', 'https://www.reezocar.com/480/mobile.de/RZCMOBDE388327498/AUDI-RS7-00.webp');


INSERT INTO offer(car_id, seller_name, contact_info, description) VALUES
(1, 'John Doe', 'john@gmail.com', 'Great condition Toyota Corolla for sale.'),
(2, 'Alice Smith', 'alice@hotmail.com', 'Well-maintained Peugeot RCZ for sale.'),
(3,'Bob Johnson', 'bob@eoutlook.com', 'Used Bmw 530D e60 in good condition.'),
(4,'Carol Williams', 'carol@gmail.com', 'Selling my Volkswagen Golf7 GTI, low mileage.'),
(5,'David Brown', 'david@gmail.com', 'Renault Clio, perfect for city driving.'),
(6,'Emily Jones', 'emily@outlook.com', 'Luxury Audi RS7 for sale, low mileage.');


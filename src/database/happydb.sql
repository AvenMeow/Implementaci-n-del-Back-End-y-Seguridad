CREATE SCHEMA Ware;

CREATE TABLE "Ware".products (
    id SERIAL PRIMARY KEY,
    name VARCHAR(50) NOT NULL,
    price NUMERIC(10, 2) NOT NULL,
    image VARCHAR(250) NOT NULL,
    deleted SMALLINT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

INSERT INTO "Ware".products (name, price, image, deleted) VALUES
('Nevera No Frost 360 Lts', 2040800, 'nevera.webp',0),
('Televisor OLED 55in', 4499900, 'televisor.webp',0),
('Escritorio Ajustable Modulart', 899990, 'escritorio.webp',0),
('Poltrona Gunnared', 1199990, 'silla.webp',0),
('Audífonos Inalámbricos WH-1000XM5', 1249900, 'audífonos.webp',0),
('Bicicleta de Montaña Marlin 7', 2499900, 'bicicleta.webp',0),
('Nintendo Switch V2 + Joy-Con', 1014035, 'videoconsola',0),
('Apple Watch Series 8', 2149900, 'reloj',0),
('El Juego del Ángel - Carlos Ruiz Zafón', 64900, 'libro 2.webp',0),
('Linterna LED Multifunción 3X1', 179900, 'linterna.webp',0),
('Cafetera Espresso Manual DeLonghi', 799900, 'cafetera.webp',0),
('Monitor UltraSharp 27in', 1499900, 'monitor.webp',0),
('Camiseta Selección Colombia', 349950, 'camiseta.webp',0),
('Cámara EOS M50', 2399900, 'cámara.webp',0),
('Aspiradora Inalámbrica V11', 2899900, 'aspiradora.webp',0),
('El Libro de Bill - Alex Hirsch', 38400, 'libro.webp',0),
('Reloj G-Shock', 599900, 'reloj 2.webp',0),
('Mochila SuperBreak', 149900, 'mochila.webp',0);

SELECT * FROM "Ware".products;
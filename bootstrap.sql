DROP DATABASE apollo_server;
CREATE DATABASE apollo_server;
CREATE USER apollo_server WITH ENCRYPTED PASSWORD 'apollo_server';
GRANT ALL PRIVILEGES ON DATABASE apollo_server TO apollo_server;

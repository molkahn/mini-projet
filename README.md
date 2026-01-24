# fonctionnalité simple Inscription & Connexion

## Description

Cette application web simple permet :

- L'inscription des utilisateurs (nom, prénom, email, mot de passe).
- La connexion avec authentification.
- La sauvegarde des utilisateurs dans une base de données PostgreSQL.

**Technologies utilisées :**

- **Frontend :** Angular
- **Backend :** Spring Boot
- **Base de données :** PostgreSQL

## Prérequis

Avant de lancer l’application, assurez-vous d’avoir :

1. **Node.js** (v18+ recommandé) et **npm**  
   Vérifier l’installation (``bash) :
   node -v
   npm -v

2. **Angular CLI**
   Installer si nécessaire : npm install -g @angular/cli

3. **Java 17+**
   Vérifier l’installation : java -version

4. **Maven**
   Vérifier l’installation : mvn -v

5. installation **PostgreSQL** : https://get.enterprisedb.com/postgresql/postgresql-17.7-2-windows-x64.exe

## Base de données :

1. Créez une base PostgreSQL appelée `molka`.
2. Utilisateur : `postgres`,
   mot de passe : `molka123`.
3. URL de connexion : jdbc:postgresql://localhost:5432/molka

## Backend

1. acceder le backup : cd demo
2. Compilez le projet avec Maven : mvn clean install
3. Lancez le projet : mvn spring-boot:run
   **Le backend sera accessible sur : http://localhost:8081**

4. Endpoints disponibles :
   " POST /api/auth/register" : Inscription d’un utilisateur
   " POST /api/auth/login" : Connexion d’un utilisateur
   " GET /api/auth/test" : Test de connexion

## Frontend

1. Installer les dépendances : npm install
2. Lancer le projet : ng serve
3. Ouvrez votre navigateur à l'adresse: http://localhost:4200
   **Le frontend communique avec le backend Spring Boot qui tourne normalement sur le port 8081**

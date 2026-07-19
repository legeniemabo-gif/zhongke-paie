# ZHONG KE CAOUTCHOU — Plateforme RH & Paie

Application web responsive pour une usine de transformation de caoutchouc en Côte d’Ivoire.

## Modules
Accueil, authentification, tableau de bord, personnel, contrats, pointage et équipes, congés, paie, prêts et avances, recrutement, formation, discipline, QHSE, visites médicales, EPI, documents RH, rapports, organisation et paramètres.

## Lancer localement
```bash
npm install
cp .env.example .env
npm run dev
```
Sans base PostgreSQL, l’interface fonctionne en mode démonstration avec des données locales.

## Installer PostgreSQL
1. Créer une base Neon, Supabase ou Railway.
2. Exécuter `database/schema.sql`, puis `database/seed.sql`.
3. Ajouter `DATABASE_URL` et `JWT_SECRET` dans Netlify > Site configuration > Environment variables.

## Déployer sur Netlify
1. Décompresser le projet et le publier dans un dépôt GitHub.
2. Dans Netlify, choisir **Add new site > Import an existing project**.
3. Build command : `npm run build`.
4. Publish directory : `dist`.
5. Functions directory : `netlify/functions` (déjà défini dans `netlify.toml`).

## Démonstration
E-mail : `admin@zhongke.ci`  
Mot de passe : `Admin123!`

Avant une paie réelle, faire valider les paramètres sociaux et fiscaux par la comptabilité ou un cabinet agréé en Côte d’Ivoire.

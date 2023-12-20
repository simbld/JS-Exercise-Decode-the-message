Étape 1: 

Initialisation du Projet et Configuration de Base

Description : 
Création du projet React avec create vite et configuration initiale de l'environnement de développement.

Commit Message : "Initial commit."

                    ~~~~~~~~~~

Étape 1 : 
-----------

Création du Composant `CodedMessage.`

Description :
Création du module contenant le message codé.

Commit : "Add the module containing the encoded message"

                    ~~~~~~~~~~


Étape 2: 
--------

Création du composant `DecodedMessage`
Intégration du module `CodeMessage`
Création de l'État pour le Message Décodé

Description : 
Mise en place de l'état React decodedMessage en utilisant le hook useState pour stocker le message décodé.

Commit Message : "Add the state to store the decoded message"

                    ~~~~~~~~~~


Étape 3: 
--------

Définition de la Fonction de Décodeur

Description : 
Définition de la fonction decodeHiddenMessage qui traite hiddenMessage pour filtrer les caractères 'X' et ',', et mise à jour de decodedMessage avec le résultat.

Commit Message : "Definition of the function to decode the hidden message"

                    ~~~~~~~~~~


Étape 4: 
--------

Appel de la Fonction de Décodeur au Montage du Composant

Description : 
Utilisation de useEffect pour appeler decodeHiddenMessage au montage du composant App.

Commit Message : "Calling the decoding function when mounting the component"

                    ~~~~~~~~~~


Étape 5: 
--------

Stylisation et Peaufinage


Description : 
Ajout et ajustement des styles CSS pour améliorer l'apparence de l'application.

Commit Message : "
Add styles to improve the user interface"


                    ~~~~~~~~~~


Étape 7: 
--------

Séparer la Logique des Composants

Description : 
Séparer la Logique des Composants pour une meilleur lisibilité du code.
Séparation des Préoccupations : Garder la logique métier séparée de la logique d'interface utilisateur.
Création de hooks personnalisés et passer des props aux composants  useTimer, useFilter

Commit Message : "Refactoring with custom hooks".


                    ~~~~~~~~~~


Étape 8: 
--------

DRY (choisir le message a affiché sans changer de page)

Description:
Créer le deuxième message codé et y acceder depuis le deuxième bouton puis créer le custom hook useDisplay pour afficher l'un ou l'autre des messages codés

Commit Message : Add logic for the second coded message

===========================
Site Linux Presentation Day
===========================

Le site utilise pelican pour générer les pages HTML à partir de fichiers en rst.

Pour générer les pages à partir des fichiers source, il suffit d'installer pelican dans un virtualenv en local.

Il n'est pas utile de l'installer sur le serveur, il faut copier le contenu du dossier `output` pour publier.

Installation
=============

Prérequis
---------

::

    sudo apt-get install curl python python-virtualenv make

Installation
------------

Installer Pelican dans un virtualenv comme indiqué dans `la documentation de Pelican <http://docs.getpelican.com/en/stable/install.html>`_

Installer les dépendances nécessaires::

    pip install -r requirements.txt

Cloner le repository
--------------------

::

    git clone https://github.com/toulibre/lpd-fr-pelican.git --recursive

Le thème du site est dans un sous-module.

Utilisation
=============

Avant de lancer les commandes pour générer les pages, source le virtualenv ::

    source bin/activate

Générer le site en local
-------------------------

Générer le site à l'aide du script de développement :

::

    cd lpd-fr-pelican
    make clean
    make devserver

Puis visiter la page http://localhost:8000/ pour visualiser le site.

Mettre en ligne le site
-------------------------

Pour envoyer les fichiers situés dans "output" sur le serveur, vous pouvez
vous aider de la commande

::

    make rsync_upload

Cette commande génère le site avec les paramètres pour la version de
production, puis synchronise les fichiers avec le serveur.

Les paramètres de connexion sont dans le fichier Makefile, il faut une clé
ssh pour se connecter au serveur bien sûr :-)

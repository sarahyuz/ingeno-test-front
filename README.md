This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Pour installer le projet

### `npm install`


## Pour tester le projet

### `npm start`
localhost:3000


## Expliquation du projet
Simple installation de reactjs avec des fetch à l'api de covid dans un fichier de service.

Puisqu'on devait faire des url qui pourront être partagées selon les items sélectionnés, j'ai beaucoup utilisé les hash en JavaScript, et les props qui détectent les hash lorsqu'ils changent de components.

J'ai créée un repo assets pour le scss, je suis très habile là-dedans mais je me suis dis que je voulais essayer les styled components pour ce projet. Si jamais ça vous intéresse, je vous montrerai une solide base d'assets que j'ai fait par le passé. Là, je voulais apprendre comment ça marchait !

Icon.js assez puissant lorsqu'on veut utiliser plein d'icônes custom.

J'ai dû faire une manipulation de tableau (Fichier Stat, function loadDatas) pour créer un object avec les key qui sont les short_province pour pouvoir mieux communiquer avec la carte. Sacré rodéo de données.


## TODO amélioration
J'ai testé les styles components pour ce projet mais je ne les utilise pas à leur plein potentiel.
J'aurais pu passer des props mais j'ai tout fait en className finalement pour sauver du temps.
Il y a un moyen de faire des variables globales comme des couleurs dans un thème et les utiliser partout.

Les hash dans les url ne sont pas super propres, j'aurais trouver comment bien faire ça avec le router.

J'aurais coloré la map avec les donnée => plus la donnée est élevée plus la couleur est rouge vive.

À le refaire, j'aimerais essayer D3js pour la carte de province.


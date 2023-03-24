import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Pourquoi un blog ?',
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        J'ai choisi de vous présenter mon rapport de stage sous la frome d'un blog car j'ai réalisé mon stage dans une équipe d'informatique, et ce format est donc en adéquation avec mon stage.
        
      </>
    ),
  },
  {
    title: 'Comment est construit ce blog ?',
    Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        Ce blogue est construit avec plusieurs pages, qui vont résumer les activités que nous avons réalisé durant le stage, de ce fait, vous y trouverez des résumés des rendez-vous que nous avons eu avec chacun des membres de l'équipe.
        
      </>
    ),
  },
  {
    title: 'Comment devons nous lire ce blog ?',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        Tout d'abord, veuillez cliquer sur le bouton intitullé blogue en haut de la page à gauche. Puis, si vous le voulez bien, vous pouvez utiliser la "molette" sur le coté droit de la page pour descendre petit à petit dans le blogue et découvrir ce que nous avons appris et fait durant le stage.
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}

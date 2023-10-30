import "./ProjectsCarrousel.css";
import coffeeImage from "../../../../public/coffe.jpg";
const ProjectOne = ({ previous, next }) => {
  return (
    <section className="project-show-container">
      <div className="space-tecnology"></div>

      <img className="image-project" src={coffeeImage} alt="" />

      <div className="tecnologys-projects-show">
        <span className="tecnology-show">Html</span>
        <span className="tecnology-show">Css</span>
        <span className="tecnology-show">JavaScript</span>
        <span className="tecnology-show">React</span>
        <span className="tecnology-show">Git</span>
        <span className="tecnology-show">Figma</span>
      </div>
      <p className="description-project-show">
        "<strong>CODESPRESSO</strong> es un proyecto en desarrollo que tiene
        como objetivo simular un <strong>eCommerce realista</strong>. Como parte
        del equipo, <strong>me encargué, junto a una compañera</strong>, del
        diseño utilizando la herramienta <strong>Figma</strong>. Actualmente,{" "}
        <strong>mi enfoque se centra en el desarrollo del frontend</strong>.
        Trabajamos en colaboración con el equipo de desarrollo para hacer
        realidad CODESPRESSO
      </p>
      <div className="buttons-project-show">
        <a
          className="button-project-web-show"
          href="https://www.calculate-matias-pinho.netlify.app"
          target="a_blank"
        >
          ¿Quieres verlo?
        </a>
        <a
          className="button-project-github-show"
          href="https://github.com/IIAGUSII/Proyecto-Coffe"
          target="a_blank"
        >
          Github
        </a>
        <div className="space-tecnology"></div>
      </div>
    </section>
  );
};

export default ProjectOne;

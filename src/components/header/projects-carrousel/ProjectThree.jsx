import calcu from "../../../../public/calcu.png";

const ProjectThree = ({ previous, next }) => {
  return (
    <section className="project-show-container">
      <div className="space-tecnology"></div>

      <img className="image-project" src={calcu} alt="" />

      <div className="tecnologys-projects-show">
        <span className="tecnology-show">Html</span>
        <span className="tecnology-show">Css</span>
        <span className="tecnology-show">JavaScript</span>

        <span className="tecnology-show">Git</span>
        <span className="tecnology-show">Figma</span>
      </div>
      <p className="description-project-show">
        <strong>Este es un mini proyecto,</strong>{" "}
        <strong>una calculadora totalmente funcional,</strong> que puede
        realizar operaciones matemáticas básicas, incluyendo suma, resta,
        multiplicación y división. Fue creada con el fin de consolidar mis
        conocimientos en JavaScript y el manejo del DOM. Durante el desarrollo,
        enfrenté desafíos en la gestión de la lógica de cálculo y en la creación
        de <strong>una interfaz de usuario intuitiva.</strong>
      </p>
      <div className="buttons-project-show">
        <a
          className="button-project-web-show"
          href="https://www.calculate-matias-pinho.netlify.app"
          target="_blank"
        >
          ¿Quieres verlo?
        </a>

        <a
          className="button-project-github-show"
          href="https://github.com/MatiasPinho/Calculate"
          target="a_blank"
        >
          Github
        </a>

        <div className="space-tecnology"></div>
      </div>
    </section>
  );
};

export default ProjectThree;

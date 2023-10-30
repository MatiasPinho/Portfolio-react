import adivina from "../../../../public/adivina.png";

const ProjectTwo = ({ previous, next }) => {
  return (
    <section className="project-show-container">
      <div className="space-tecnology"></div>

      <img className="image-project" src={adivina} alt="" />

      <div className="tecnologys-projects-show">
        <span className="tecnology-show">Html</span>
        <span className="tecnology-show">Css</span>
        <span className="tecnology-show">JavaScript</span>
        <span className="tecnology-show">React</span>
        <span className="tecnology-show">Git</span>
        <span className="tecnology-show">Figma</span>
      </div>
      <p className="description-project-show">
        Este es un <strong>mini proyecto</strong> que consiste en adivinar un
        número generado de forma aleatoria en cada intento. El proyecto incluye
        un <strong>selector de dificultad</strong> y una mini ayuda.{" "}
        <strong>La finalidad de este proyecto</strong> fue consolidar mis
        conocimientos.
      </p>
      <div className="buttons-project-show">
        <a
          className="button-project-web-show"
          href="https://adivina-el-numero-matias-pinho.netlify.app"
          target="_blank"
        >
          ¿Quieres verlo?
        </a>

        <a
          className="button-project-github-show"
          href="https://github.com/MatiasPinho/Adivina-el-numero"
          target="a_blank"
        >
          Github
        </a>

        <div className="space-tecnology"></div>
      </div>
    </section>
  );
};

export default ProjectTwo;

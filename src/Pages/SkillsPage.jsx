import React from "react";
const SkillsPage = ({ closed }) => {
  return (
    <div className={closed ? "extended" : "body-content"}>
      <div class="container-fluid p-0">
        <section class="resume-section" id="skills">
            <div class="resume-section-content">
                <h2 class="mb-5">Skills</h2>
                <div class="subheading mb-3">Programming Languages & Tools</div>
                <ul class="list-inline dev-icons">
                    <li class="list-inline-item"><i class="fab fa-html5"></i></li>
                    <li class="list-inline-item"><i class="fab fa-css3-alt"></i></li>
                    <li class="list-inline-item"><i class="fab fa-js-square"></i></li>
                    <li class="list-inline-item"><i class="fab fa-angular"></i></li>
                    <li class="list-inline-item"><i class="fab fa-react"></i></li>
                    <li class="list-inline-item"><i class="fab fa-node-js"></i></li>
                    <li class="list-inline-item"><i class="fab fa-sass"></i></li>
                    <li class="list-inline-item"><i class="fab fa-less"></i></li>
                    <li class="list-inline-item"><i class="fab fa-wordpress"></i></li>
                    <li class="list-inline-item"><i class="fab fa-gulp"></i></li>
                    <li class="list-inline-item"><i class="fab fa-grunt"></i></li>
                    <li class="list-inline-item"><i class="fab fa-npm"></i></li>
                </ul>
                <div class="subheading mb-3">Workflow</div>
                <ul class="fa-ul mb-0">
                    <li>
                        <span class="fa-li"><i class="fas fa-check"></i></span> Organized person
                    </li>
                    <li>
                        <span class="fa-li"><i class="fas fa-check"></i></span> Leadership
                    </li>
                    <li>
                        <span class="fa-li"><i class="fas fa-check"></i></span> Finance skills
                    </li>
                    <li>
                        <span class="fa-li"><i class="fas fa-check"></i></span> Pipe Fitting
                    </li>
                    <li>
                        <span class="fa-li"><i class="fas fa-check"></i></span> C.P.R certification
                    </li>
                </ul>
            </div>
        </section>
    </div>
    </div>
  );
};

export default SkillsPage;
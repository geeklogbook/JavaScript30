const projectContainer = document.getElementById('projects-container');
const projectsCount = 50;

const fetchProjects = async () => {
  for (let i = 0; i < projectsCount; i++) {
    await getProject(i);
  }
};

const getProject = async (idx) => {
  const response = await fetch('projects.json');
  const data = await response.json();
  createProjectCard(data[idx]);
};

const createProjectCard = (project) => {
  const projectEl = document.createElement('div');
  projectEl.classList.add('project');

  const { id, name, location, image, url } = project;

  const projectInnerHTML = `
    <div class="img-container">
      <img src="${image}" alt="" />
    </div>
    <div class="info">
      <h2>${name}</h2>
      <p><a href="${url}" target="_blank">Review</a></p>
    </div>
    <button>
      <a href="./projects/${id}.${location}/index.html" class="href" target="_blank">Go to the project</a>
    </button>
  `;
  projectEl.innerHTML = projectInnerHTML;
  projectContainer.appendChild(projectEl);
};

fetchProjects();
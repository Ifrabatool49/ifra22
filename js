$(document).ready(function () {
    // Load projects from JSON
    $.getJSON("data/projects.json", function (data) {
      let projectsHtml = "";
      data.forEach(project => {
        projectsHtml += `
          <div class="col-md-4 mb-4">
            <div class="card shadow h-100">
              <div class="card-body">
                <h5 class="card-title text-danger">${project.title}</h5>
                <p class="card-text">${project.description}</p>
              </div>
            </div>
          </div>
        `;
      });
      $("#project-list").html(projectsHtml);
    });
  });
  
function navigationBar() {
  let navBar = document.querySelector("#navigation");

  navBar.innerHTML =
    navBar.innerHTML +
    `  
   <nav class="navbar navbar-expand-lg navbar-theme fixed-top">
      <div class="container-fluid">
        <a class="navbar-brand" href="#">@suvirote</a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="index.html">
                Home
              </a>
            </li>

            <li class="nav-item">
              <a class="nav-link" href="about-me.html">About</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="projects.html">Projects</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="projects.html#contact">Contact</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    `;
}

function footer() {
  let footerText = document.querySelector("#footer-text");

  footerText.innerHTML =
    footerText.innerHTML +
    ` <div class="icon-links d-flex justify-content-center">
        <a
          href="https://github.com/svirote/"
          target="_blank"
          title="GitHub Suelen Virote"
        >
          <i class="fa-brands fa-github"></i>
        </a>

        <a href="#" target="_blank" title="LinkedIn">
          <i class="fa-brands fa-linkedin-in"></i>
        </a>
      </div>
      <br />

      This project was coded by Suelen Virote, and it's
      <a
        href="https://github.com/svirote/about-me-page"
        target="_blank"
        title="GitHub Suelen Virote"
      >
        open-sourced
      </a>

      <br />
    `;
}

navigationBar();
footer();

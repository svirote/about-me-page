function footer() {
  let footerText = document.querySelector("#footer-text");

  footerText.innerHTML =
    footerText.innerHTML +
    ` <div class="icon-links d-flex justify-content-center">

        <a
          href="mailto:suvirote@yahoo.com.br"
          target="_blank"
          title="E-mail me"
        >
        <i class="fa-solid fa-envelope"></i>
        </a>     

        <a
          href="https://github.com/svirote/"
          target="_blank"
          title="GitHub Suelen Virote"
        >
          <i class="fa-brands fa-github"></i>
        </a>

        <a
          href="https://www.linkedin.com/in/suelenvirote/"
          target="_blank"
          title="Linkedin Suelen Virote"
        >
          <i class="fa-brands fa-linkedin-in"></i>
        </a>
      </div>
      <div class="mt-2">
        This project was coded by Suelen Virote, and it's
        <a
          href="https://github.com/svirote/about-me-page"
          target="_blank"
          title="GitHub Suelen Virote"
        >
          open-sourced
        </a>
      </div>

      <br />
    `;
}

footer();

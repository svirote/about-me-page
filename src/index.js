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

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

const form = document.querySelector("#contact-message");
const submitButton = document.querySelector(".send-message");
const scriptURL =
  "https://script.google.com/macros/s/AKfycbzNxPulIQTrTmRTGBNhXPnPp4jfKUtUV2I20i9AF4uE7VQuUSoS4CcbkfIFk-kS-FY4qA/exec";

form.addEventListener("submit", (event) => {
  submitButton.disabled = true;
  submitButton.innerHTML = "Loading...";
  event.preventDefault();

  fetch(scriptURL, { method: "POST", body: new FormData(form) })
    .then(function () {
      form.innerHTML = `<div class="mx-auto form-control mt-4" style="max-width: 450px">
            <p>
              Your message was successfully send.<br />
              I'll be contacting you as soon as possible.<br />
            </p>

            <div class="signature text-end">Suelen</div>
          </div>
      `;
    })

    .catch(() => {
      form.innerHTML = `<div class="mx-auto" style="max-width: 450px">
            <p>
              Oh no, something went wrong.<br />
              please reload the page and try again.<br />
            </p>

            <div class="signature text-end">Suelen</div>
          </div>
      `;
    });
});

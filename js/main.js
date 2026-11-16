/**
 * ============================================================
 * MAIN.JS — JC PRIME GUINCHO
 * ============================================================
 * Todo o comportamento do site: renderização de conteúdo a
 * partir de config.js, menu mobile, links de WhatsApp/telefone/
 * Instagram, FAQ em accordion, formulário -> WhatsApp e
 * scroll reveal discreto.
 * ============================================================
 */

document.addEventListener("DOMContentLoaded", () => {
  renderServices();
  renderFaq();
  renderServiceOptions();
  fillContactValues();
  wireWhatsappLinks();
  wireInstagramLinks();
  wireNavToggle();
  wireFaqAccordion();
  wireContactForm();
  wireScrollReveal();
  fillFooterCopyright();
});

/* ------------------------------------------------------------
   Ícones (SVG inline, sem dependências externas)
------------------------------------------------------------ */

const ICONS = {
  truck: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M3 17h1a2 2 0 0 0 4 0h7a2 2 0 0 0 4 0h1v-5l-3-4h-4v9"/><path d="M3 17V9h9v8"/></svg>`,
  fuel: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M4 21V6a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v15"/><path d="M4 11h10"/><path d="M14 8h2l3 3v6a1.5 1.5 0 0 1-3 0v-1a1 1 0 0 0-1-1h-1"/><path d="M2 21h14"/></svg>`,
  tire: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="3.2"/><path d="M12 3v3.3M12 17.7V21M21 12h-3.3M6.3 12H3M18.4 5.6l-2.3 2.3M7.9 16.1l-2.3 2.3M18.4 18.4l-2.3-2.3M7.9 7.9 5.6 5.6"/></svg>`,
  battery: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="2" y="7" width="17" height="10" rx="1.5"/><path d="M22 10v4"/><path d="M6 10v4M10 10v4"/></svg>`,
  route: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="5" cy="6" r="2.2"/><circle cx="19" cy="18" r="2.2"/><path d="M5 8.2V13a4 4 0 0 0 4 4h6"/></svg>`,
};

/* ------------------------------------------------------------
   Renderização de conteúdo a partir de config.js
------------------------------------------------------------ */

function renderServices() {
  const grid = document.getElementById("servicesGrid");
  if (!grid) return;

  grid.innerHTML = COMPANY.services
    .map(
      (service) => `
      <div class="service-card reveal">
        <div class="service-icon">${ICONS[service.icon] || ""}</div>
        <h3>${service.name}</h3>
        <p>${service.description}</p>
      </div>
    `
    )
    .join("");
}

function renderServiceOptions() {
  const select = document.getElementById("fieldService");
  if (!select) return;

  COMPANY.services.forEach((service) => {
    const option = document.createElement("option");
    option.value = service.name;
    option.textContent = service.name;
    select.appendChild(option);
  });
}

function renderFaq() {
  const list = document.getElementById("faqList");
  if (!list) return;

  list.innerHTML = COMPANY.faq
    .map(
      (item, index) => `
      <div class="faq-item" data-open="false" data-index="${index}">
        <button class="faq-question" type="button" aria-expanded="false" aria-controls="faq-answer-${index}">
          <span>${item.question}</span>
          <span class="faq-icon">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" aria-hidden="true">
              <line x1="12" y1="5" x2="12" y2="19"/>
              <line x1="5" y1="12" x2="19" y2="12"/>
            </svg>
          </span>
        </button>
        <div class="faq-answer" id="faq-answer-${index}">
          <p>${item.answer}</p>
        </div>
      </div>
    `
    )
    .join("");
}

function fillContactValues() {
  const wa = document.getElementById("contactWhatsappValue");
  const insta = document.getElementById("contactInstaValue");

  if (wa) wa.textContent = COMPANY.whatsappDisplay;
  if (insta) insta.textContent = COMPANY.instagramHandle;

  const footerWa = document.getElementById("footerWhatsapp");
  if (footerWa) footerWa.textContent = COMPANY.whatsappDisplay;
}

function fillFooterCopyright() {
  const el = document.getElementById("footerCopyright");
  if (!el) return;
  const year = new Date().getFullYear();
  el.textContent = `© ${year} ${COMPANY.name}. Todos os direitos reservados.`;
}

/* ------------------------------------------------------------
   Links dinâmicos (WhatsApp / telefone / Instagram)
------------------------------------------------------------ */

function wireWhatsappLinks() {
  document.querySelectorAll(".js-whatsapp-link").forEach((link) => {
    link.setAttribute("href", buildWhatsappUrl());
    link.setAttribute("target", "_blank");
    link.setAttribute("rel", "noopener noreferrer");
  });
}

function wireInstagramLinks() {
  document.querySelectorAll(".js-instagram-link").forEach((link) => {
    link.setAttribute("href", COMPANY.instagramUrl);
  });
}

/* ------------------------------------------------------------
   Menu mobile (hamburger)
------------------------------------------------------------ */

function wireNavToggle() {
  const toggle = document.getElementById("navToggle");
  const nav = document.getElementById("mainNav");
  if (!toggle || !nav) return;

  toggle.addEventListener("click", () => {
    const isOpen = nav.classList.toggle("is-open");
    toggle.setAttribute("aria-expanded", String(isOpen));
    toggle.setAttribute("aria-label", isOpen ? "Fechar menu" : "Abrir menu");
  });

  // Fecha o menu ao clicar em qualquer link
  nav.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      nav.classList.remove("is-open");
      toggle.setAttribute("aria-expanded", "false");
      toggle.setAttribute("aria-label", "Abrir menu");
    });
  });
}

/* ------------------------------------------------------------
   FAQ accordion
------------------------------------------------------------ */

function wireFaqAccordion() {
  const items = document.querySelectorAll(".faq-item");

  items.forEach((item) => {
    const button = item.querySelector(".faq-question");
    const answer = item.querySelector(".faq-answer");

    button.addEventListener("click", () => {
      const isOpen = item.getAttribute("data-open") === "true";

      // Fecha os demais itens (accordion de um item por vez)
      items.forEach((other) => {
        if (other !== item) {
          other.setAttribute("data-open", "false");
          other.querySelector(".faq-question").setAttribute("aria-expanded", "false");
          other.querySelector(".faq-answer").style.maxHeight = null;
        }
      });

      if (isOpen) {
        item.setAttribute("data-open", "false");
        button.setAttribute("aria-expanded", "false");
        answer.style.maxHeight = null;
      } else {
        item.setAttribute("data-open", "true");
        button.setAttribute("aria-expanded", "true");
        answer.style.maxHeight = answer.scrollHeight + "px";
      }
    });
  });
}

/* ------------------------------------------------------------
   Formulário -> WhatsApp (sem backend)
------------------------------------------------------------ */

function wireContactForm() {
  const form = document.getElementById("requestForm");
  if (!form) return;

  form.addEventListener("submit", (event) => {
    event.preventDefault();

    const name = form.name.value.trim();
    const phone = form.phone.value.trim();
    const service = form.service.value.trim();
    const message = form.message.value.trim();

    if (!name || !phone || !service) {
      form.reportValidity();
      return;
    }

    const text =
      `Olá! Meu nome é ${name}.\n` +
      `Preciso de ${service}.\n` +
      `Meu telefone é ${phone}.\n` +
      `Mensagem: ${message || "-"}`;

    window.open(buildWhatsappUrl(text), "_blank", "noopener,noreferrer");
  });
}

/* ------------------------------------------------------------
   Scroll reveal discreto (fade-in ao entrar na viewport)
------------------------------------------------------------ */

function wireScrollReveal() {
  const targets = document.querySelectorAll(".reveal");
  if (!targets.length) return;

  if (!("IntersectionObserver" in window)) {
    targets.forEach((el) => el.classList.add("is-visible"));
    return;
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
  );

  targets.forEach((el) => observer.observe(el));
}

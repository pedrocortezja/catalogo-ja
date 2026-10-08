(function () {
  "use strict";

  var PASTA_IMAGENS = "img/produtos/";
  var EXTENSOES = ["jpg", "png", "webp", "jpeg"]; // ordem de tentativa

  var dados = window.JA_CATALOGO || { categorias: [], produtos: [] };
  var categorias = dados.categorias;
  var produtos = dados.produtos;

  var elCatalogo = document.getElementById("catalogo");
  var elMenu = document.getElementById("categorias");
  var elBusca = document.getElementById("busca");
  var elAbrirMenu = document.getElementById("abrirMenu");
  var elCatAtual = document.getElementById("catAtual");
  var elLayout = document.getElementById("layout");
  var elBanner = document.getElementById("bannerImg");

  var estado = {
    categoria: categoriaDoHash(),
    termo: ""
  };

  function normalizar(texto) {
    return String(texto || "")
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .toLowerCase();
  }

  function esc(texto) {
    return String(texto || "")
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;");
  }

  function categoriaDoHash() {
    var h = decodeURIComponent(location.hash.replace("#", ""));
    return h || "todos";
  }

  function temLink(p) {
    return p.link && String(p.link).trim() !== "";
  }

  var ICONE_DOWNLOAD =
    '<svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true">' +
    '<path d="M12 3v12m0 0l-4-4m4 4l4-4M5 20h14" fill="none" stroke="currentColor" ' +
    'stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"/></svg>';

  var ICONE_RELOGIO =
    '<svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true">' +
    '<circle cx="12" cy="12" r="9" fill="none" stroke="currentColor" stroke-width="2"/>' +
    '<path d="M12 7v5l3 2" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg>';

  function produtosFiltrados() {
    var termo = normalizar(estado.termo.trim());
    return produtos.filter(function (p) {
      if (estado.categoria !== "todos" && p.categoria !== estado.categoria) return false;
      if (!termo) return true;
      return normalizar(p.nome + " " + p.descricao).indexOf(termo) !== -1;
    });
  }

  function htmlCard(p) {
    var base = p.imagem ? "" : PASTA_IMAGENS + p.id;
    var src = p.imagem ? PASTA_IMAGENS + p.imagem : base + "." + EXTENSOES[0];

    var img =
      '<div class="card__img"><img src="' + esc(src) + '" alt="" loading="lazy" ' +
      'data-base="' + esc(base) + '" data-i="0"></div>';

    var corpo =
      '<div class="card__corpo">' +
      '<h3 class="card__nome">' + esc(p.nome) + "</h3>" +
      '<p class="card__desc">' + esc(p.descricao) + "</p></div>";

    if (temLink(p)) {
      return (
        '<a class="card" href="' + esc(p.link) + '" target="_blank" rel="noopener" ' +
        'aria-label="Baixar folheto técnico de ' + esc(p.nome) + '">' +
        img + corpo +
        '<span class="card__acao">' + ICONE_DOWNLOAD + "Folheto técnico</span></a>"
      );
    }

    return (
      '<div class="card card--sem-link">' + img + corpo +
      '<span class="card__acao">' + ICONE_RELOGIO + "Folheto em breve</span></div>"
    );
  }

  function renderMenu() {
    var contagem = {};
    produtos.forEach(function (p) {
      contagem[p.categoria] = (contagem[p.categoria] || 0) + 1;
    });

    if (estado.categoria !== "todos" && !contagem[estado.categoria]) {
      estado.categoria = "todos";
    }

    var html = itemMenu("todos", "Todos", produtos.length);
    categorias.forEach(function (c) {
      if (contagem[c.id]) html += itemMenu(c.id, c.nome, contagem[c.id]);
    });
    elMenu.innerHTML = html;
    atualizarMenu();
  }

  function itemMenu(id, nome, qtd) {
    return (
      '<button type="button" class="menu__item" data-cat="' + esc(id) + '" ' +
      'aria-pressed="' + (estado.categoria === id) + '">' +
      "<span>" + esc(nome) + '</span><span class="menu__qtd">' + qtd + "</span></button>"
    );
  }

  function renderCatalogo() {
    var lista = produtosFiltrados();

    if (lista.length === 0) {
      elCatalogo.innerHTML =
        '<div class="vazio"><p><strong>Nenhum produto encontrado.</strong></p>' +
        "<p>Confira se o nome está correto ou veja todos os produtos.</p>" +
        '<button type="button" id="limpar">Ver todos os produtos</button></div>';
      return;
    }

    var html = "";
    categorias.forEach(function (c) {
      var itens = lista.filter(function (p) { return p.categoria === c.id; });
      if (!itens.length) return;
      html +=
        '<section class="secao" id="sec-' + esc(c.id) + '">' +
        '<h2 class="secao__titulo">' + esc(c.nome) +
        ' <span class="secao__qtd">' + itens.length + (itens.length === 1 ? " produto" : " produtos") + "</span></h2>" +
        '<div class="grade">' + itens.map(htmlCard).join("") + "</div></section>";
    });

    elCatalogo.innerHTML = html;
  }

  function atualizarMenu() {
    var nomeAtual = "Todos";
    Array.prototype.forEach.call(elMenu.querySelectorAll(".menu__item"), function (b) {
      var ativo = b.dataset.cat === estado.categoria;
      b.setAttribute("aria-pressed", String(ativo));
      if (ativo) nomeAtual = b.firstChild.textContent;
    });
    elCatAtual.textContent = nomeAtual;
  }

  function fecharMenuMobile() {
    elMenu.classList.remove("aberto");
    elAbrirMenu.setAttribute("aria-expanded", "false");
  }

  function rolarParaProdutos() {
    var alvo = elLayout.getBoundingClientRect().top + window.scrollY - 12;
    if (window.scrollY > alvo) window.scrollTo({ top: alvo });
  }

  elCatalogo.addEventListener("error", function (e) {
    var img = e.target;
    if (!img || img.tagName !== "IMG") return;
    var base = img.dataset.base;
    var i = parseInt(img.dataset.i, 10) + 1;
    if (base && i < EXTENSOES.length) {
      img.dataset.i = i;
      img.src = base + "." + EXTENSOES[i];
    } else {
      img.remove();
    }
  }, true);
   
  if (elBanner) {
    var tentouSemSource = false;

    var erroBanner = function () {
      if (!elBanner.parentNode) return; // já foi removido
      var sources = elBanner.parentNode.querySelectorAll("source");
      if (sources.length && !tentouSemSource) {
        tentouSemSource = true;
        Array.prototype.forEach.call(sources, function (s) { s.remove(); });
        var src = elBanner.getAttribute("src");
        elBanner.removeAttribute("src");
        elBanner.setAttribute("src", src);
      } else {
        elBanner.remove();
      }
    };

    elBanner.addEventListener("error", erroBanner);
    if (elBanner.complete && elBanner.naturalWidth === 0) erroBanner();
  }

  elAbrirMenu.addEventListener("click", function () {
    var aberto = elMenu.classList.toggle("aberto");
    elAbrirMenu.setAttribute("aria-expanded", String(aberto));
  });

  elMenu.addEventListener("click", function (e) {
    var btn = e.target.closest(".menu__item");
    if (!btn) return;
    estado.categoria = btn.dataset.cat;
    history.replaceState(null, "", estado.categoria === "todos" ? location.pathname + location.search : "#" + estado.categoria);
    atualizarMenu();
    fecharMenuMobile();
    renderCatalogo();
    rolarParaProdutos();
  });

  elBusca.addEventListener("input", function () {
    estado.termo = elBusca.value;
    renderCatalogo();
  });

  elCatalogo.addEventListener("click", function (e) {
    if (e.target.id !== "limpar") return;
    estado.categoria = "todos";
    estado.termo = "";
    elBusca.value = "";
    history.replaceState(null, "", location.pathname + location.search);
    atualizarMenu();
    renderCatalogo();
  });

  window.addEventListener("hashchange", function () {
    estado.categoria = categoriaDoHash();
    atualizarMenu();
    renderCatalogo();
  });

  document.getElementById("ano").textContent = new Date().getFullYear();
  renderMenu();
  renderCatalogo();
})();

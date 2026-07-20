---
title: "Publications"
permalink: /publications/
layout: single
author_profile: true
---

For a complete and up-to-date overview of my publications see [Google Scholar](https://scholar.google.com/citations?user=uJ6yqrwAAAAJ&hl=en) and [DBLP](https://dblp.org/pid/271/8474.html).

{% raw %}
<div class="pub-app">

  <div class="pub-filters" id="pub-filters">
    <button class="pub-filter-btn active" data-filter="all">All</button>
    <button class="pub-filter-btn" data-filter="journal"><span class="pub-dot pub-journal"></span>Journal</button>
    <button class="pub-filter-btn" data-filter="conference"><span class="pub-dot pub-conference"></span>Conference</button>
    <button class="pub-filter-btn" data-filter="workshop"><span class="pub-dot pub-workshop"></span>Workshop &amp; Other</button>
    <button class="pub-filter-btn" data-filter="book"><span class="pub-dot pub-book"></span>Book</button>
    <button class="pub-filter-btn" data-filter="editorship"><span class="pub-dot pub-editorship"></span>Editorship</button>
  </div>

  <div id="pub-list"></div>

</div>

<style>
.pub-app { margin-top: 1em; font-size: 0.95em; }

.pub-filters { display: flex; flex-wrap: wrap; gap: 0.5em; margin-bottom: 1.5em; }
.pub-filter-btn {
  border: 1px solid #d5d5d5; background: #fff; border-radius: 999px;
  padding: 0.35em 0.9em; font-size: 0.85em; cursor: pointer;
  display: inline-flex; align-items: center; gap: 0.4em; color: #333;
  transition: background 0.15s, border-color 0.15s;
}
.pub-filter-btn:hover { border-color: #999; }
.pub-filter-btn.active { background: #333; color: #fff; border-color: #333; }
.pub-filter-btn.active .pub-dot { border-color: #fff; }

.pub-dot { width: 0.7em; height: 0.7em; border-radius: 50%; display: inline-block; border: 1px solid rgba(0,0,0,0.15); }
.pub-journal    { background: #d64545; }
.pub-conference { background: #3a7bd5; }
.pub-workshop   { background: #8a8f98; }
.pub-book       { background: #e0b400; }
.pub-editorship { background: #17a2a2; }

.pub-year-heading {
  font-size: 1.3em; font-weight: 700; margin: 1.6em 0 0.8em;
  padding-bottom: 0.2em; border-bottom: 2px solid #eee;
}
.pub-year-heading:first-child { margin-top: 0.4em; }

.pub-entry {
  position: relative; margin: 0 0 1em; padding: 0.7em 1em 0.7em 1em;
  border-left: 5px solid #8a8f98; background: #fafafa; border-radius: 4px;
}
.pub-entry.pub-journal    { border-left-color: #d64545; }
.pub-entry.pub-conference { border-left-color: #3a7bd5; }
.pub-entry.pub-workshop   { border-left-color: #8a8f98; }
.pub-entry.pub-book       { border-left-color: #e0b400; }
.pub-entry.pub-editorship { border-left-color: #17a2a2; }
.pub-entry.pub-hidden { display: none; }

.pub-badge {
  display: inline-block; font-size: 0.68em; font-weight: 700; text-transform: uppercase;
  letter-spacing: 0.03em; padding: 0.15em 0.55em; border-radius: 3px; color: #fff;
  margin-right: 0.6em; vertical-align: middle;
}
.pub-badge.pub-journal    { background: #d64545; }
.pub-badge.pub-badge.pub-conference { background: #3a7bd5; }
.pub-badge.pub-conference { background: #3a7bd5; }
.pub-badge.pub-workshop   { background: #8a8f98; }
.pub-badge.pub-book       { background: #b5960a; }
.pub-badge.pub-editorship { background: #148a8a; }

.pub-title { font-weight: 600; }
.pub-authors { color: #444; margin-top: 0.15em; }
.pub-venue { font-style: italic; color: #555; margin-top: 0.1em; }

.pub-links { margin-top: 0.5em; display: flex; flex-wrap: wrap; gap: 0.6em; }
.pub-links a, .pub-links summary {
  cursor: pointer; font-size: 0.85em; color: #2757a8; text-decoration: none;
  border: 1px solid #cdd9ea; background: #eef3fb; padding: 0.2em 0.6em; border-radius: 4px;
  display: inline-block; list-style: none;
}
.pub-links a:hover, .pub-links summary:hover { background: #dde9f9; }
.pub-links summary::-webkit-details-marker { display: none; }
.pub-links .pub-pdf { border-color: #cfe3cf; background: #eef7ee; color: #2a7a2a; }
.pub-links .pub-pdf:hover { background: #dcefdc; }

details.pub-fold { flex-basis: 100%; }
.pub-fold-body {
  margin-top: 0.5em; padding: 0.6em 0.8em; background: #fff;
  border: 1px solid #e3e3e3; border-radius: 4px; font-size: 0.92em;
}
.pub-fold-body pre { margin: 0; white-space: pre-wrap; word-break: break-word; font-size: 0.85em; }
.pub-abstract-body { line-height: 1.5; color: #333; }

.pub-empty { color: #777; font-style: italic; padding: 1em 0; }
</style>

<script>
(function () {
  // ---------------------------------------------------------------
  // Publication data
  // type must be one of: "journal", "conference", "book", "editorship", "workshop"
  // pdf: path to a PDF placed in this repo's /files/ folder (or a full URL), or null
  // bibtex / abstract: fill in / replace with exact records as you go
  // year: null is used for entries without a confirmed publication year
  // ---------------------------------------------------------------
  var PUBS = [
    { year: 2025, type: "conference", authors: "Bengel, L., Buraglio, G., Maly, J., & Skiba, K.", title: "An Extension-Based Argument-Ranking Semantics: Social Rankings in Abstract Argumentation", venue: "Proceedings of the AAAI Conference on Artificial Intelligence (AAAI'25)", pdf: null, bibtex: "@inproceedings{BengelBMS2025,\n  author    = {Bengel, Lars and Buraglio, Giovanni and Maly, Jan and Skiba, Kenneth},\n  title     = {An Extension-Based Argument-Ranking Semantics: Social Rankings in Abstract Argumentation},\n  booktitle = {Proceedings of the AAAI Conference on Artificial Intelligence},\n  year      = {2025}\n}", abstract: {In this paper, we introduce a new family of argument-ranking semantics which can be seen as a refinement of the classification of arguments into skeptically accepted, credulously accepted and rejected. To this end we use so-called social ranking functions which have been developed recently to rank individuals based on their performance in groups. We provide necessary and sufficient conditions for a social ranking function to give rise to an argument-ranking semantics satisfying the desired refinement property.} },
  ];

  var TYPE_LABEL = {
    journal: "Journal Paper",
    conference: "Conference Paper",
    workshop: "Workshop / Other",
    book: "Book",
    editorship: "Editorship"
  };

  function escapeHtml(str) {
    return String(str).replace(/[&<>"']/g, function (c) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c];
    });
  }

  function renderEntry(pub) {
    var el = document.createElement("div");
    el.className = "pub-entry pub-" + pub.type;
    el.setAttribute("data-type", pub.type);

    var badge = '<span class="pub-badge pub-' + pub.type + '">' + TYPE_LABEL[pub.type] + '</span>';
    var title = '<div class="pub-title">' + badge + escapeHtml(pub.title) + '</div>';
    var authors = '<div class="pub-authors">' + escapeHtml(pub.authors) + '</div>';
    var venue = pub.venue ? '<div class="pub-venue">' + escapeHtml(pub.venue) + '</div>' : '';

    var links = '<div class="pub-links">';
    if (pub.pdf) {
      links += '<a class="pub-pdf" href="' + escapeHtml(pub.pdf) + '" target="_blank" rel="noopener">PDF</a>';
    }
    if (pub.abstract) {
      links += '<details class="pub-fold"><summary>Abstract</summary>' +
               '<div class="pub-fold-body pub-abstract-body">' + escapeHtml(pub.abstract) + '</div></details>';
    }
    if (pub.bibtex) {
      links += '<details class="pub-fold"><summary>BibTeX</summary>' +
               '<div class="pub-fold-body"><pre>' + escapeHtml(pub.bibtex) + '</pre></div></details>';
    }
    links += '</div>';

    el.innerHTML = title + authors + venue + links;
    return el;
  }

  function render(filter) {
    var list = document.getElementById("pub-list");
    list.innerHTML = "";

    var byYear = {};
    var years = [];
    PUBS.forEach(function (pub) {
      var y = pub.year === null ? "n.d." : pub.year;
      if (!byYear[y]) { byYear[y] = []; years.push(y); }
      byYear[y].push(pub);
    });

    years.sort(function (a, b) {
      if (a === "n.d.") return 1;
      if (b === "n.d.") return -1;
      return b - a;
    });

    var shown = 0;
    years.forEach(function (y) {
      var entries = byYear[y].filter(function (pub) {
        return filter === "all" || pub.type === filter;
      });
      if (entries.length === 0) return;

      var heading = document.createElement("div");
      heading.className = "pub-year-heading";
      heading.textContent = y;
      list.appendChild(heading);

      entries.forEach(function (pub) {
        list.appendChild(renderEntry(pub));
        shown++;
      });
    });

    if (shown === 0) {
      var empty = document.createElement("div");
      empty.className = "pub-empty";
      empty.textContent = "No publications in this category yet.";
      list.appendChild(empty);
    }
  }

  document.querySelectorAll(".pub-filter-btn").forEach(function (btn) {
    btn.addEventListener("click", function () {
      document.querySelectorAll(".pub-filter-btn").forEach(function (b) { b.classList.remove("active"); });
      btn.classList.add("active");
      render(btn.getAttribute("data-filter"));
    });
  });

  render("all");
})();
</script>
{% endraw %}

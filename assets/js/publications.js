(function () {
  // ---------------------------------------------------------------
  // Publication data
  // type must be one of: "journal", "conference", "book", "editorship", "workshop"
  // pdf: path to a PDF placed in this repo's /files/ folder (or a full URL), or null
  // bibtex / abstract: fill in / replace with exact records as you go
  // year: null is used for entries without a confirmed publication year
  // ---------------------------------------------------------------
  var PUBS = [
    { year: 2026, type: "workshop", authors: "Lydia Blümel, Kai Sauerwald, Kenneth Skiba, & Matthias Thimm", title: "On the Complexity of the Discussion-based Semantics in Abstraction Argumentation", venue: "24th International Workshop on Nonmonotonic Reasoning", pdf: "/files/nmr2026_LBKSKSTM.pdf", bibtex: "@article{BluemelSST2026,\n  author  = {Bl\\\"umel, Lydia and Sauerwald, Kai and Skiba, Kenneth and Thimm, Matthias},\n  title   = {On the Complexity of the Discussion-based Semantics in Abstract Argumentation},\n  journal = {arXiv preprint arXiv:2604.11480},\n  year    = {2026}\n}", abstract: "Test" },
    { year: 2026, type: "book", authors: "Kenneth Skiba", title: "Ranking Sets of Arguments in Abstract Argumentation", venue: "University of Hagen, Germany", pdf: "/files/phd_KS.pdf", bibtex: "@phdthesis{DBLP:phd/dnb/Skiba26,\n  author= {Kenneth Skiba}, \n  title = {Ranking Sets of Arguments in Abstract Argumentation},\n school = {University of Hagen, Germany},\n  year= {2026}}", abstract: null },
    { year: 2025, type: "editorship", authors: "Corea, C., Delobelle, J., Grant, J., Mailly, J., Rossit, J., & Skiba, K. (Eds.)", title: "Joint Proceedings of the ECSQARU 2025 Workshops and Tutorials", venue: "Joint Workshop and Tutorials co-located with ECSQARU 2025", pdf: null, bibtex: "@proceedings{CoreaDGMRS2025,\n  editor    = {Corea, Carl and Delobelle, J\\'er\\^ome and Grant, John and Mailly, Jean-Guy and Rossit, Julien and Skiba, Kenneth},\n  title     = {Joint Proceedings of the ECSQARU 2025 Workshops and Tutorials},\n  year      = {2025}\n}", abstract: null },
    { year: 2025, type: "workshop", authors: "Lewin, D. & Skiba, K.", title: "On Uncertainty in Collective Attacks in Abstract Argumentation", venue: "Joint Proceedings of the ECSQARU 2025 Workshops and Tutorials", pdf: null, bibtex: "@inproceedings{LewinSkiba2025,\n  author    = {Lewin, Dominik and Skiba, Kenneth},\n  title     = {On Uncertainty in Collective Attacks in Abstract Argumentation},\n  booktitle = {Joint Proceedings of the ECSQARU 2025 Workshops and Tutorials},\n  year      = {2025}\n}", abstract: null },
    { year: 2025, type: "workshop", authors: "Sauerwald, K., Skiba, K., Fermé, E., & Meyer, T.", title: "Axiomatics of Restricted Choices by Linear Orders of Sets with Minimum as Fallback", venue: "arXiv preprint arXiv:2506.03315", pdf: null, bibtex: "@article{SauerwaldSFM2025,\n  author  = {Sauerwald, Kai and Skiba, Kenneth and Ferm\\'e, Eduardo and Meyer, Thomas},\n  title   = {Axiomatics of Restricted Choices by Linear Orders of Sets with Minimum as Fallback},\n  journal = {arXiv preprint arXiv:2506.03315},\n  year    = {2025}\n}", abstract: null },
    { year: 2025, type: "workshop", authors: "Skiba, K., Rienstra, T., Thimm, M., Heyninck, J., & Kern-Isberner, G.", title: "Extension-ranking Semantics for Abstract Argumentation", venue: "arXiv preprint arXiv:2504.21683", pdf: null, bibtex: "@article{SkibaRTHK2025,\n  author  = {Skiba, Kenneth and Rienstra, Tjitze and Thimm, Matthias and Heyninck, Jesse and Kern-Isberner, Gabriele},\n  title   = {Extension-ranking Semantics for Abstract Argumentation},\n  journal = {arXiv preprint arXiv:2504.21683},\n  year    = {2025}\n}", abstract: null },
    { year: 2025, type: "conference", authors: "Bengel, L., Buraglio, G., Maly, J., & Skiba, K.", title: "An Extension-Based Argument-Ranking Semantics: Social Rankings in Abstract Argumentation", venue: "Proceedings of the AAAI Conference on Artificial Intelligence (AAAI'25)", pdf: null, bibtex: "@inproceedings{BengelBMS2025,\n  author    = {Bengel, Lars and Buraglio, Giovanni and Maly, Jan and Skiba, Kenneth},\n  title     = {An Extension-Based Argument-Ranking Semantics: Social Rankings in Abstract Argumentation},\n  booktitle = {Proceedings of the AAAI Conference on Artificial Intelligence},\n  year      = {2025}\n}", abstract: null },
    { year: 2024, type: "workshop", authors: "Bengel, L., Buraglio, G., Maly, J., & Skiba, K.", title: "An Extension-Based Argument-Ranking Semantics: Social Rankings in Abstract Argumentation", venue: "Proceedings of the 22nd International Workshop on Nonmonotonic Reasoning (NMR 2024), co-located with KR 2024", pdf: null, bibtex: "@inproceedings{BengelBMS2024nmr,\n  author    = {Bengel, Lars and Buraglio, Giovanni and Maly, Jan and Skiba, Kenneth},\n  title     = {An Extension-Based Argument-Ranking Semantics: Social Rankings in Abstract Argumentation},\n  booktitle = {Proceedings of the 22nd International Workshop on Nonmonotonic Reasoning (NMR 2024)},\n  year      = {2024}\n}", abstract: null },
    { year: 2024, type: "workshop", authors: "Bengel, L., Buraglio, G., Maly, J., & Skiba, K.", title: "An Extension-Based Argument-Ranking Semantics: Social Rankings in Abstract Argumentation (Long Version)", venue: "arXiv preprint arXiv:2412.13632", pdf: null, bibtex: "@article{BengelBMS2024arxiv,\n  author  = {Bengel, Lars and Buraglio, Giovanni and Maly, Jan and Skiba, Kenneth},\n  title   = {An Extension-Based Argument-Ranking Semantics: Social Rankings in Abstract Argumentation (Long Version)},\n  journal = {arXiv preprint arXiv:2412.13632},\n  year    = {2024}\n}", abstract: null },
    { year: 2024, type: "conference", authors: "Skiba, K., Thimm, M., & Wallner, J.", title: "Ranking Transition-Based Medical Recommendations Using Assumption-Based Argumentation", venue: "Conference on Advances in Robust Argumentation Machines (RATIO)", pdf: null, bibtex: "@inproceedings{SkibaTW2024,\n  author    = {Skiba, Kenneth and Thimm, Matthias and Wallner, Johannes},\n  title     = {Ranking Transition-Based Medical Recommendations Using Assumption-Based Argumentation},\n  booktitle = {Conference on Advances in Robust Argumentation Machines},\n  year      = {2024}\n}", abstract: null },
    { year: 2023, type: "editorship", authors: "Heyninck, J., Skiba, K., & Thimm, M. (Eds.)", title: "Preface for the special issue on argument strength", venue: "Argument & Computation", pdf: null, bibtex: "@article{HeyninckST2023,\n  author  = {Heyninck, Jesse and Skiba, Kenneth and Thimm, Matthias},\n  title   = {Preface for the special issue on argument strength},\n  journal = {Argument \\& Computation},\n  year    = {2023}\n}", abstract: null },
    { year: 2023, type: "workshop", authors: "Skiba, K.", title: "Bridging the Gap between Ranking-based Semantics and Extension-ranking Semantics", venue: "FCR@KI", pdf: null, bibtex: "@inproceedings{Skiba2023fcr,\n  author    = {Skiba, Kenneth},\n  title     = {Bridging the Gap between Ranking-based Semantics and Extension-ranking Semantics},\n  booktitle = {FCR@KI},\n  year      = {2023}\n}", abstract: null },
    { year: 2023, type: "workshop", authors: "Skiba, K., Thimm, M., & Wallner, J.", title: "Ranking-based Semantics for Assumption-based Argumentation", venue: "FCR@KI", pdf: null, bibtex: "@inproceedings{SkibaTW2023,\n  author    = {Skiba, Kenneth and Thimm, Matthias and Wallner, Johannes},\n  title     = {Ranking-based Semantics for Assumption-based Argumentation},\n  booktitle = {FCR@KI},\n  year      = {2023}\n}", abstract: null },
    { year: 2023, type: "journal", authors: "Heyninck, J., Kern-Isberner, G., Rienstra, T., Skiba, K., & Thimm, M.", title: "Revision, defeasible conditionals and non-monotonic inference for abstract dialectical frameworks", venue: "Artificial Intelligence", pdf: null, bibtex: "@article{HeyninckKRST2023,\n  author  = {Heyninck, Jesse and Kern-Isberner, Gabriele and Rienstra, Tjitze and Skiba, Kenneth and Thimm, Matthias},\n  title   = {Revision, defeasible conditionals and non-monotonic inference for abstract dialectical frameworks},\n  journal = {Artificial Intelligence},\n  year    = {2023}\n}", abstract: null },
    { year: 2022, type: "editorship", authors: "Thimm, M., Landes, J., & Skiba, K. (Eds.)", title: "Proceedings of the First International Conference on Foundations, Applications, and Theory of Inductive Logic (FATIL2022)", venue: "", pdf: null, bibtex: "@proceedings{ThimmLS2022,\n  editor = {Thimm, Matthias and Landes, J\\\"urgen and Skiba, Kenneth},\n  title  = {Proceedings of the First International Conference on Foundations, Applications, and Theory of Inductive Logic (FATIL 2022)},\n  year   = {2022}\n}", abstract: null },
    { year: 2022, type: "workshop", authors: "Lohr, M., Skiba, K., Konersmann, M., Jürjens, J., & Staab, S.", title: "Formalizing cost fairness for two-party exchange protocols using game theory and applications to blockchain (extended version)", venue: "arXiv preprint arXiv:2203.05925", pdf: null, bibtex: "@article{LohrSKJS2022arxiv,\n  author  = {Lohr, Michael and Skiba, Kenneth and Konersmann, Marco and J\\\"urjens, Jan and Staab, Steffen},\n  title   = {Formalizing cost fairness for two-party exchange protocols using game theory and applications to blockchain (extended version)},\n  journal = {arXiv preprint arXiv:2203.05925},\n  year    = {2022}\n}", abstract: null },
    { year: 2022, type: "conference", authors: "Lohr, M., Skiba, K., Konersmann, M., Jürjens, J., & Staab, S.", title: "Formalizing cost fairness for two-party exchange protocols using game theory and applications to blockchain", venue: "2022 IEEE International Conference on Blockchain and Cryptocurrency (ICBC)", pdf: null, bibtex: "@inproceedings{LohrSKJS2022,\n  author    = {Lohr, Michael and Skiba, Kenneth and Konersmann, Marco and J\\\"urjens, Jan and Staab, Steffen},\n  title     = {Formalizing cost fairness for two-party exchange protocols using game theory and applications to blockchain},\n  booktitle = {2022 IEEE International Conference on Blockchain and Cryptocurrency (ICBC)},\n  year      = {2022}\n}", abstract: null },
    { year: 2022, type: "conference", authors: "Skiba, K. & Thimm, M.", title: "Ordinal conditional functions for abstract argumentation", venue: "Computational Models of Argument (COMMA)", pdf: null, bibtex: "@inproceedings{SkibaThimm2022,\n  author    = {Skiba, Kenneth and Thimm, Matthias},\n  title     = {Ordinal conditional functions for abstract argumentation},\n  booktitle = {Computational Models of Argument},\n  year      = {2022}\n}", abstract: null },
    { year: 2022, type: "workshop", authors: "Skiba, K., Thimm, M., Rienstra, T., Heyninck, J., & Kern-Isberner, G.", title: "Realisability of Ranking-based Semantics", venue: "", pdf: null, bibtex: "@unpublished{SkibaTRHK2022,\n  author = {Skiba, Kenneth and Thimm, Matthias and Rienstra, Tjitze and Heyninck, Jesse and Kern-Isberner, Gabriele},\n  title  = {Realisability of Ranking-based Semantics},\n  year   = {2022}\n}", abstract: null },
    { year: 2022, type: "conference", authors: "Heyninck, J., Thimm, M., Kern-Isberner, G., Rienstra, T., & Skiba, K.", title: "Conditional Abstract Dialectical Frameworks", venue: "Proceedings of the AAAI Conference on Artificial Intelligence", pdf: null, bibtex: "@inproceedings{HeyninckTKRS2022,\n  author    = {Heyninck, Jesse and Thimm, Matthias and Kern-Isberner, Gabriele and Rienstra, Tjitze and Skiba, Kenneth},\n  title     = {Conditional Abstract Dialectical Frameworks},\n  booktitle = {Proceedings of the AAAI Conference on Artificial Intelligence},\n  year      = {2022}\n}", abstract: null },
    { year: 2021, type: "workshop", authors: "Rienstra, T., Heyninck, J., Kern-Isberner, G., Skiba, K., & Thimm, M.", title: "Explaining Argument Acceptance in ADFs", venue: "", pdf: null, bibtex: "@unpublished{RienstraHKST2021,\n  author = {Rienstra, Tjitze and Heyninck, Jesse and Kern-Isberner, Gabriele and Skiba, Kenneth and Thimm, Matthias},\n  title  = {Explaining Argument Acceptance in ADFs},\n  year   = {2021}\n}", abstract: null },
    { year: 2021, type: "workshop", authors: "Heyninck, J., Thimm, M., Kern-Isberner, G., Rienstra, T., & Skiba, K.", title: "Arguing about Complex Formulas: Generalizing Abstract Dialectical Frameworks", venue: "", pdf: null, bibtex: "@unpublished{HeyninckTKRS2021b,\n  author = {Heyninck, Jesse and Thimm, Matthias and Kern-Isberner, Gabriele and Rienstra, Tjitze and Skiba, Kenneth},\n  title  = {Arguing about Complex Formulas: Generalizing Abstract Dialectical Frameworks},\n  year   = {2021}\n}", abstract: null },
    { year: 2021, type: "conference", authors: "Neugebauer, D., Rothe, J., & Skiba, K.", title: "Complexity of nonemptiness in control argumentation frameworks", venue: "European Conference on Symbolic and Quantitative Approaches with Uncertainty (ECSQARU)", pdf: null, bibtex: "@inproceedings{NeugebauerRS2021,\n  author    = {Neugebauer, Dorothea and Rothe, J\\\"org and Skiba, Kenneth},\n  title     = {Complexity of nonemptiness in control argumentation frameworks},\n  booktitle = {European Conference on Symbolic and Quantitative Approaches with Uncertainty},\n  year      = {2021}\n}", abstract: null },
    { year: 2021, type: "workshop", authors: "Heyninck, J., Thimm, M., Kern-Isberner, G., Rienstra, T., & Skiba, K.", title: "On the Relation between Possibilistic Logic and Abstract Dialectical Frameworks", venue: "", pdf: null, bibtex: "@unpublished{HeyninckTKRS2021c,\n  author = {Heyninck, Jesse and Thimm, Matthias and Kern-Isberner, Gabriele and Rienstra, Tjitze and Skiba, Kenneth},\n  title  = {On the Relation between Possibilistic Logic and Abstract Dialectical Frameworks},\n  year   = {2021}\n}", abstract: null },
    { year: 2021, type: "conference", authors: "Skiba, K., Rienstra, T., Thimm, M., Heyninck, J., & Kern-Isberner, G.", title: "Ranking Extensions in Abstract Argumentation", venue: "IJCAI", pdf: null, bibtex: "@inproceedings{SkibaRTHK2021,\n  author    = {Skiba, Kenneth and Rienstra, Tjitze and Thimm, Matthias and Heyninck, Jesse and Kern-Isberner, Gabriele},\n  title     = {Ranking Extensions in Abstract Argumentation},\n  booktitle = {IJCAI},\n  year      = {2021}\n}", abstract: null },
    { year: 2021, type: "journal", authors: "Heyninck, J., Kern-Isberner, G., Thimm, M., & Skiba, K.", title: "On the correspondence between abstract dialectical frameworks and nonmonotonic conditional logics", venue: "Annals of Mathematics and Artificial Intelligence", pdf: null, bibtex: "@article{HeyninckKTS2021,\n  author  = {Heyninck, Jesse and Kern-Isberner, Gabriele and Thimm, Matthias and Skiba, Kenneth},\n  title   = {On the correspondence between abstract dialectical frameworks and nonmonotonic conditional logics},\n  journal = {Annals of Mathematics and Artificial Intelligence},\n  year    = {2021}\n}", abstract: null },
    { year: 2021, type: "conference", authors: "Kuhlmann, I., Rienstra, T., Bengel, L., Skiba, K., & Thimm, M.", title: "Distinguishability in Abstract Argumentation", venue: "Proceedings of the International Conference on Principles of Knowledge Representation and Reasoning (KR)", pdf: null, bibtex: "@inproceedings{KuhlmannRBST2021,\n  author    = {Kuhlmann, Isabelle and Rienstra, Tjitze and Bengel, Lars and Skiba, Kenneth and Thimm, Matthias},\n  title     = {Distinguishability in Abstract Argumentation},\n  booktitle = {Proceedings of the International Conference on Principles of Knowledge Representation and Reasoning},\n  year      = {2021}\n}", abstract: null },
    { year: 2020, type: "workshop", authors: "Skiba, K.", title: "Towards a Ranking-Based Semantics using System Z", venue: "1st Doctoral Consortium at the European Conference on Artificial Intelligence (DC-ECAI 2020)", pdf: null, bibtex: "@inproceedings{Skiba2020dc,\n  author    = {Skiba, Kenneth},\n  title     = {Towards a Ranking-Based Semantics using System Z},\n  booktitle = {1st Doctoral Consortium at ECAI (DC-ECAI 2020)},\n  year      = {2020}\n}", abstract: null },
    { year: 2020, type: "conference", authors: "Skiba, K., Thimm, M., Cohen, A., Gottifredi, S., & García, A.", title: "Abstract Argumentation Frameworks with Fallible Evidence", venue: "Computational Models of Argument (COMMA)", pdf: null, bibtex: "@inproceedings{SkibaTCGG2020,\n  author    = {Skiba, Kenneth and Thimm, Matthias and Cohen, Andrea and Gottifredi, Sebasti\\'an and Garc\\'ia, Alejandro},\n  title     = {Abstract Argumentation Frameworks with Fallible Evidence},\n  booktitle = {Computational Models of Argument},\n  year      = {2020}\n}", abstract: null },
    { year: 2020, type: "journal", authors: "Skiba, K., Neugebauer, D., & Rothe, J.", title: "Complexity of Nonempty Existence Problems in Incomplete Argumentation Frameworks", venue: "IEEE Intelligent Systems", pdf: null, bibtex: "@article{SkibaNR2020,\n  author  = {Skiba, Kenneth and Neugebauer, Dorothea and Rothe, J\\\"org},\n  title   = {Complexity of Nonempty Existence Problems in Incomplete Argumentation Frameworks},\n  journal = {IEEE Intelligent Systems},\n  year    = {2020}\n}", abstract: null },
    { year: 2020, type: "workshop", authors: "Skiba, K.", title: "Towards ordering sets of arguments", venue: "Summer School on Argumentation SSA2020, Proceedings", pdf: null, bibtex: "@inproceedings{Skiba2020ssa,\n  author    = {Skiba, Kenneth},\n  title     = {Towards ordering sets of arguments},\n  booktitle = {Summer School on Argumentation SSA2020, Proceedings},\n  year      = {2020}\n}", abstract: null },
    { year: 2020, type: "workshop", authors: "Skiba, K.", title: "A First Idea for a Ranking-Based Semantics using System Z", venue: "Online Handbook of Argumentation for AI", pdf: null, bibtex: "@incollection{Skiba2020ohaai,\n  author    = {Skiba, Kenneth},\n  title     = {A First Idea for a Ranking-Based Semantics using System Z},\n  booktitle = {Online Handbook of Argumentation for AI},\n  year      = {2020}\n}", abstract: null },
    { year: 2020, type: "editorship", authors: "Castagna, F., Kampik, T., Zafarghandi, A., Lafages, M., Mumford, J., Rodosthenous, C., Sá, S., Sarkadi, S., Singleton, J., & Skiba, K. (Eds.)", title: "Online Handbook of Argumentation for AI: Volume 1", venue: "arXiv preprint arXiv:2006.12020", pdf: null, bibtex: "@article{CastagnaEtAl2020,\n  editor  = {Castagna, Federico and Kampik, Timotheus and Zafarghandi, Atefeh and Lafages, Marion and Mumford, Jack and Rodosthenous, Christos and S\\'a, Samy and Sarkadi, Stefan and Singleton, Jaime and Skiba, Kenneth},\n  title   = {Online Handbook of Argumentation for AI: Volume 1},\n  journal = {arXiv preprint arXiv:2006.12020},\n  year    = {2020}\n}", abstract: null },
    { year: 2020, type: "workshop", authors: "Skiba, K. & Thimm, M.", title: "Towards Ranking-based Semantics for Abstract Argumentation using Conditional Logic Semantics", venue: "arXiv preprint arXiv:2008.02735", pdf: null, bibtex: "@article{SkibaThimm2020arxiv,\n  author  = {Skiba, Kenneth and Thimm, Matthias},\n  title   = {Towards Ranking-based Semantics for Abstract Argumentation using Conditional Logic Semantics},\n  journal = {arXiv preprint arXiv:2008.02735},\n  year    = {2020}\n}", abstract: null },
    { year: 2019, type: "workshop", authors: "Heyninck, J., Kern-Isberner, G., Skiba, K., & Thimm, M.", title: "Interpreting Conditionals in Argumentative Environments", venue: "", pdf: null, bibtex: "@unpublished{HeyninckKST2019,\n  author = {Heyninck, Jesse and Kern-Isberner, Gabriele and Skiba, Kenneth and Thimm, Matthias},\n  title  = {Interpreting Conditionals in Argumentative Environments},\n  year   = {2019}\n}", abstract: null },
    { year: null, type: "workshop", authors: "Heyninck, J., Kern-Isberner, G., Rienstra, T., Skiba, K., & Thimm, M.", title: "The semantical structure of conditionals, and its relation to formal argumentation", venue: "", pdf: null, bibtex: "@unpublished{HeyninckKRST,\n  author = {Heyninck, Jesse and Kern-Isberner, Gabriele and Rienstra, Tjitze and Skiba, Kenneth and Thimm, Matthias},\n  title  = {The semantical structure of conditionals, and its relation to formal argumentation}\n}", abstract: null },
    { year: null, type: "workshop", authors: "Skiba, K. & Thimm, M.", title: "Optimisation and Approximation in Abstract Argumentation: The Case of Admissibility", venue: "", pdf: null, bibtex: "@unpublished{SkibaThimmOpt,\n  author = {Skiba, Kenneth and Thimm, Matthias},\n  title  = {Optimisation and Approximation in Abstract Argumentation: The Case of Admissibility}\n}", abstract: null },
    { year: null, type: "workshop", authors: "Skiba, K.", title: "Towards Realisability of Rankings-based Semantics", venue: "", pdf: null, bibtex: "@unpublished{SkibaRealisability,\n  author = {Skiba, Kenneth},\n  title  = {Towards Realisability of Rankings-based Semantics}\n}", abstract: null },
    { year: null, type: "workshop", authors: "Heyninck, J., Kern-Isberner, G., Rienstra, T., Skiba, K., & Thimm, M.", title: "Possibilistic Logic Underlies Abstract Dialectical Frameworks", venue: "", pdf: null, bibtex: "@unpublished{HeyninckKRSTPoss,\n  author = {Heyninck, Jesse and Kern-Isberner, Gabriele and Rienstra, Tjitze and Skiba, Kenneth and Thimm, Matthias},\n  title  = {Possibilistic Logic Underlies Abstract Dialectical Frameworks}\n}", abstract: null },
    { year: null, type: "workshop", authors: "Skiba, K.", title: "Towards Ranking Arguments in Incomplete Argumentation Frameworks", venue: "", pdf: null, bibtex: "@unpublished{SkibaIncomplete,\n  author = {Skiba, Kenneth},\n  title  = {Towards Ranking Arguments in Incomplete Argumentation Frameworks}\n}", abstract: null },
    { year: null, type: "workshop", authors: "Heyninck, J., Kern-Isberner, G., Rienstra, T., Skiba, K., & Thimm, M.", title: "Revision and Conditional Inference for Abstract Dialectical Frameworks", venue: "", pdf: null, bibtex: "@unpublished{HeyninckKRSTRevision,\n  author = {Heyninck, Jesse and Kern-Isberner, Gabriele and Rienstra, Tjitze and Skiba, Kenneth and Thimm, Matthias},\n  title  = {Revision and Conditional Inference for Abstract Dialectical Frameworks}\n}", abstract: null },
    { year: null, type: "workshop", authors: "Skiba, K., Neugebauer, D., & Rothe, J.", title: "Complexity of Possible and Necessary Existence Problems in Abstract Argumentation", venue: "", pdf: null, bibtex: "@unpublished{SkibaNRPossible,\n  author = {Skiba, Kenneth and Neugebauer, Dorothea and Rothe, J\\\"org},\n  title  = {Complexity of Possible and Necessary Existence Problems in Abstract Argumentation}\n}", abstract: null }
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

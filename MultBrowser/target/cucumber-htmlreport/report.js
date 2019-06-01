$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("Busca_Google.feature");
formatter.feature({
  "line": 1,
  "name": "Busca",
  "description": "",
  "id": "busca",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 2,
  "name": "Busca Positiva",
  "description": "",
  "id": "busca;busca-positiva",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 3,
  "name": "Acesso o site do Google no \u003cbrowser\u003e e digito \u003ctermo\u003e",
  "keyword": "Given "
});
formatter.step({
  "line": 4,
  "name": "Pressiona Enter",
  "keyword": "And "
});
formatter.step({
  "line": 5,
  "name": "Exibe a pagina com o titulo \"dia da toalha - Pesquisa Google\"",
  "keyword": "Then "
});
formatter.examples({
  "line": 7,
  "name": "",
  "description": "",
  "id": "busca;busca-positiva;",
  "rows": [
    {
      "cells": [
        "browser",
        "termo"
      ],
      "line": 8,
      "id": "busca;busca-positiva;;1"
    },
    {
      "cells": [
        "\"chrome\"",
        "\"dia da toalha\""
      ],
      "line": 9,
      "id": "busca;busca-positiva;;2"
    },
    {
      "cells": [
        "\"chrome\"",
        "\"dia da toalha\""
      ],
      "line": 10,
      "id": "busca;busca-positiva;;3"
    },
    {
      "cells": [
        "\"ie\"",
        "\"dia da toalha\""
      ],
      "line": 11,
      "id": "busca;busca-positiva;;4"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 9,
  "name": "Busca Positiva",
  "description": "",
  "id": "busca;busca-positiva;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 3,
  "name": "Acesso o site do Google no \"chrome\" e digito \"dia da toalha\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 4,
  "name": "Pressiona Enter",
  "keyword": "And "
});
formatter.step({
  "line": 5,
  "name": "Exibe a pagina com o titulo \"dia da toalha - Pesquisa Google\"",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "chrome",
      "offset": 28
    },
    {
      "val": "dia da toalha",
      "offset": 46
    }
  ],
  "location": "Busca_Google.acesso_o_site_do_Google_no_e_digito(String,String)"
});
formatter.result({
  "duration": 22271701279,
  "status": "passed"
});
formatter.match({
  "location": "Busca_Google.pressiona_Enter()"
});
formatter.result({
  "duration": 6097958419,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "dia da toalha - Pesquisa Google",
      "offset": 29
    }
  ],
  "location": "Busca_Google.exibe_a_pagina_com_o_titulo(String)"
});
formatter.result({
  "duration": 1126543325,
  "status": "passed"
});
formatter.scenario({
  "line": 10,
  "name": "Busca Positiva",
  "description": "",
  "id": "busca;busca-positiva;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 3,
  "name": "Acesso o site do Google no \"chrome\" e digito \"dia da toalha\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 4,
  "name": "Pressiona Enter",
  "keyword": "And "
});
formatter.step({
  "line": 5,
  "name": "Exibe a pagina com o titulo \"dia da toalha - Pesquisa Google\"",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "chrome",
      "offset": 28
    },
    {
      "val": "dia da toalha",
      "offset": 46
    }
  ],
  "location": "Busca_Google.acesso_o_site_do_Google_no_e_digito(String,String)"
});
formatter.result({
  "duration": 7685510376,
  "status": "passed"
});
formatter.match({
  "location": "Busca_Google.pressiona_Enter()"
});
formatter.result({
  "duration": 6033736624,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "dia da toalha - Pesquisa Google",
      "offset": 29
    }
  ],
  "location": "Busca_Google.exibe_a_pagina_com_o_titulo(String)"
});
formatter.result({
  "duration": 1084741427,
  "status": "passed"
});
formatter.scenario({
  "line": 11,
  "name": "Busca Positiva",
  "description": "",
  "id": "busca;busca-positiva;;4",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 3,
  "name": "Acesso o site do Google no \"ie\" e digito \"dia da toalha\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 4,
  "name": "Pressiona Enter",
  "keyword": "And "
});
formatter.step({
  "line": 5,
  "name": "Exibe a pagina com o titulo \"dia da toalha - Pesquisa Google\"",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "ie",
      "offset": 28
    },
    {
      "val": "dia da toalha",
      "offset": 42
    }
  ],
  "location": "Busca_Google.acesso_o_site_do_Google_no_e_digito(String,String)"
});
formatter.result({
  "duration": 21605339612,
  "status": "passed"
});
formatter.match({
  "location": "Busca_Google.pressiona_Enter()"
});
formatter.result({
  "duration": 3377919971,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "dia da toalha - Pesquisa Google",
      "offset": 29
    }
  ],
  "location": "Busca_Google.exibe_a_pagina_com_o_titulo(String)"
});
formatter.result({
  "duration": 2515310678,
  "status": "passed"
});
});
// Database di 1000 domande e risposte sulla Teoria del Caos
const chaosTheoryDatabase = [
    {
        "id": 1,
        "keywords": [
            "meccanicismo",
            "orologio perfetto",
            "newton",
            "quesito 1"
        ],
        "answer": "Da Newton in poi, la visione dominante rappresentava il mondo come un meccanismo perfetto, analogo a un orologio di precisione.",
        "url": "https://www.treccani.it/enciclopedia/meccanicismo_(Enciclopedia-Italiana)/"
    },
    {
        "id": 2,
        "keywords": [
            "meccanica sperimentale",
            "fine XVII secolo",
            "isaac newton",
            "quesito 2"
        ],
        "answer": "In relazione alla teoria del caos, la meccanica come scienza sperimentale è nata alla fine del XVII secolo con Isaac Newton.",
        "url": "https://www.treccani.it/enciclopedia/meccanicismo_(Enciclopedia-Italiana)/"
    },
    {
        "id": 3,
        "keywords": [
            "eulero",
            "lagrange",
            "laplace",
            "quesito 3"
        ],
        "answer": "Nell'ambito della dinamica dei sistemi complessi, nel XVIII secolo la meccanica classica fu perfezionata dai lavori di Eulero, Lagrange e Laplace.",
        "url": "https://www.treccani.it/enciclopedia/meccanicismo_(Enciclopedia-Italiana)/"
    },
    {
        "id": 4,
        "keywords": [
            "calcolo differenziale",
            "calcolo integrale",
            "leibniz",
            "quesito 4"
        ],
        "answer": "Dal punto di vista dell'analisi matematica, il calcolo differenziale e integrale fu sviluppato contemporaneamente da Newton e Leibniz.",
        "url": "https://www.treccani.it/enciclopedia/meccanicismo_(Enciclopedia-Italiana)/"
    },
    {
        "id": 5,
        "keywords": [
            "meccanica celeste",
            "leggi di newton",
            "evidenze sperimentali",
            "quesito 5"
        ],
        "answer": "Secondo la descrizione del capitolo, la meccanica celeste fornì un quadro teorico unificante supportato da evidenze sperimentali.",
        "url": "https://www.treccani.it/enciclopedia/meccanicismo_(Enciclopedia-Italiana)/"
    },
    {
        "id": 6,
        "keywords": [
            "determinismo causale",
            "causalita",
            "catena di eventi",
            "quesito 6"
        ],
        "answer": "Il determinismo causale stabilisce che ogni evento accada all'interno di una catena causale.",
        "url": "https://www.treccani.it/enciclopedia/meccanicismo_(Enciclopedia-Italiana)/"
    },
    {
        "id": 7,
        "keywords": [
            "configurazioni iniziali",
            "previsione teorica",
            "stato futuro",
            "quesito 7"
        ],
        "answer": "In relazione alla teoria del caos, conoscendo cause e configurazioni iniziali, il determinismo teorizza la previsione degli eventi futuri.",
        "url": "https://www.treccani.it/enciclopedia/meccanicismo_(Enciclopedia-Italiana)/"
    },
    {
        "id": 8,
        "keywords": [
            "laplace",
            "demone di laplace",
            "determinismo assoluto",
            "quesito 8"
        ],
        "answer": "Nell'ambito della dinamica dei sistemi complessi, laplace concepiva il determinismo come la capacità di calcolare con precisione lo stato futuro conoscendo lo stato attuale.",
        "url": "https://www.treccani.it/enciclopedia/meccanicismo_(Enciclopedia-Italiana)/"
    },
    {
        "id": 9,
        "keywords": [
            "darwin",
            "evoluzione",
            "XIX secolo",
            "quesito 9"
        ],
        "answer": "Dal punto di vista dell'analisi matematica, nel XIX secolo gli studi di Darwin sull'evoluzione misero in discussione il riduzionismo meccanicista.",
        "url": "https://www.treccani.it/enciclopedia/entropia_(Enciclopedia-della-Scienza-e-della-Tecnica)/"
    },
    {
        "id": 10,
        "keywords": [
            "termodinamica",
            "entropia",
            "irreversibilita",
            "quesito 10"
        ],
        "answer": "Secondo la descrizione del capitolo, l'introduzione dell'entropia e dell'irreversibilità evidenziò i limiti della spiegazione meccanicista.",
        "url": "https://www.treccani.it/enciclopedia/entropia_(Enciclopedia-della-Scienza-e-della-Tecnica)/"
    },
    {
        "id": 11,
        "keywords": [
            "trasformazioni di energia",
            "fenomeni biologici",
            "limiti newtoniani",
            "quesito 11"
        ],
        "answer": "La termodinamica dimostrò che la meccanica classica era deficitaria nei fenomeni legati alla vita.",
        "url": "https://www.treccani.it/enciclopedia/entropia_(Enciclopedia-della-Scienza-e-della-Tecnica)/"
    },
    {
        "id": 12,
        "keywords": [
            "meccanica quantistica",
            "infinitamente piccolo",
            "XX secolo",
            "quesito 12"
        ],
        "answer": "In relazione alla teoria del caos, la meccanica quantistica è una teoria del XX secolo rivolta allo studio dell'infinitamente piccolo.",
        "url": "https://www.treccani.it/enciclopedia/entropia_(Enciclopedia-della-Scienza-e-della-Tecnica)/"
    },
    {
        "id": 13,
        "keywords": [
            "relativita generale",
            "infinitamente grande",
            "einstein",
            "quesito 13"
        ],
        "answer": "Nell'ambito della dinamica dei sistemi complessi, la relatività generale descrive la gravità e i fenomeni dell'infinitamente grande.",
        "url": "https://www.treccani.it/enciclopedia/entropia_(Enciclopedia-della-Scienza-e-della-Tecnica)/"
    },
    {
        "id": 14,
        "keywords": [
            "validita newtoniana",
            "fenomeni osservabili",
            "scala macroscopica",
            "quesito 14"
        ],
        "answer": "Dal punto di vista dell'analisi matematica, fino agli anni '60 la meccanica newtoniana rimase un'ottima descrizione dei fenomeni osservabili.",
        "url": "https://www.treccani.it/enciclopedia/entropia_(Enciclopedia-della-Scienza-e-della-Tecnica)/"
    },
    {
        "id": 15,
        "keywords": [
            "caos grecia",
            "significato antico",
            "disordine",
            "quesito 15"
        ],
        "answer": "Secondo la descrizione del capitolo, in antica Grecia il termine caos indicava disordine, confusione, scompiglio e agitazione.",
        "url": "https://www.treccani.it/enciclopedia/caos_(Enciclopedia-del-Novecento)/"
    },
    {
        "id": 16,
        "keywords": [
            "cosmos",
            "ordine",
            "antitesi caos",
            "quesito 16"
        ],
        "answer": "Il termine greco cosmos significa ordine ed era usato in antitesi al termine caos.",
        "url": "https://www.treccani.it/enciclopedia/caos_(Enciclopedia-del-Novecento)/"
    },
    {
        "id": 17,
        "keywords": [
            "limite cognitivo",
            "comprensione",
            "orizzonte oscuro",
            "quesito 17"
        ],
        "answer": "In relazione alla teoria del caos, in termini cognitivi il caos identifica un'incapacità generale di comprensione e un limite visivo.",
        "url": "https://www.treccani.it/enciclopedia/caos_(Enciclopedia-del-Novecento)/"
    },
    {
        "id": 18,
        "keywords": [
            "capovolgimento semantico",
            "scienza contemporanea",
            "caos deterministico",
            "quesito 18"
        ],
        "answer": "Nell'ambito della dinamica dei sistemi complessi, la scienza contemporanea ha ribaltato la semantica del caos riferendolo a dinamiche deterministiche non analitiche.",
        "url": "https://www.treccani.it/enciclopedia/caos_(Enciclopedia-del-Novecento)/"
    },
    {
        "id": 19,
        "keywords": [
            "settori del caos",
            "fenomeni sociali",
            "economia",
            "quesito 19"
        ],
        "answer": "Dal punto di vista dell'analisi matematica, la teoria del caos analizza fenomeni imprevedibili in ambito fisico, economico, sociale e comportamentale.",
        "url": "https://www.treccani.it/enciclopedia/caos_(Enciclopedia-del-Novecento)/"
    },
    {
        "id": 20,
        "keywords": [
            "edward lorenz",
            "mit cambridge",
            "meteorologia",
            "quesito 20"
        ],
        "answer": "Secondo la descrizione del capitolo, edward H. Lorenz era un meteorologo del MIT di Cambridge che sviluppò modelli matematici per il meteo.",
        "url": "https://www.treccani.it/enciclopedia/attrattore-di-lorenz_(Enciclopedia-della-Matematica)/"
    },
    {
        "id": 21,
        "keywords": [
            "equazioni differenziali",
            "tre equazioni",
            "non linearita",
            "quesito 21"
        ],
        "answer": "Il modello atmosferico di Lorenz era basato su tre equazioni differenziali ordinarie non lineari.",
        "url": "https://www.treccani.it/enciclopedia/attrattore-di-lorenz_(Enciclopedia-della-Matematica)/"
    },
    {
        "id": 22,
        "keywords": [
            "integrazione numerica",
            "computer lorenz",
            "anni 60",
            "quesito 22"
        ],
        "answer": "In relazione alla teoria del caos, lorenz utilizzò il computer per integrare numericamente equazioni non lineari prive di soluzione analitica.",
        "url": "https://www.treccani.it/enciclopedia/attrattore-di-lorenz_(Enciclopedia-della-Matematica)/"
    },
    {
        "id": 23,
        "keywords": [
            "analisi numerica",
            "processi iterativi",
            "algoritmi",
            "quesito 23"
        ],
        "answer": "Nell'ambito della dinamica dei sistemi complessi, l'analisi numerica sviluppa algoritmi e metodi iterativi per approssimare problemi matematici complessi.",
        "url": "https://www.treccani.it/enciclopedia/attrattore-di-lorenz_(Enciclopedia-della-Matematica)/"
    },
    {
        "id": 24,
        "keywords": [
            "arrotondamento decimali",
            "da 6 a 3 cifre",
            "scarto minimo",
            "quesito 24"
        ],
        "answer": "Dal punto di vista dell'analisi matematica, replicando una simulazione, Lorenz approssimò i dati da sei a tre cifre decimali alterando i risultati.",
        "url": "https://www.treccani.it/enciclopedia/attrattore-di-lorenz_(Enciclopedia-della-Matematica)/"
    },
    {
        "id": 25,
        "keywords": [
            "risultati divergenti",
            "esplosione dell'errore",
            "ordini di grandezza",
            "quesito 25"
        ],
        "answer": "Secondo la descrizione del capitolo, l'approssimazione decimale generò previsioni divergenti per vari ordini di grandezza.",
        "url": "https://www.treccani.it/enciclopedia/attrattore-di-lorenz_(Enciclopedia-della-Matematica)/"
    },
    {
        "id": 26,
        "keywords": [
            "riduzionismo newtoniano",
            "scala di grandezza",
            "dettagli trascurabili",
            "quesito 26"
        ],
        "answer": "Il riduzionismo newtoniano assume che i fenomeni su scala inferiore abbiano effetti trascurabili.",
        "url": "https://www.treccani.it/enciclopedia/attrattore-di-lorenz_(Enciclopedia-della-Matematica)/"
    },
    {
        "id": 27,
        "keywords": [
            "margine d'errore",
            "errore sperimentale",
            "propagazione",
            "quesito 27"
        ],
        "answer": "In relazione alla teoria del caos, nel modello newtoniano l'errore è controllabile, mentre nei sistemi caotici si propaga esplosivamente.",
        "url": "https://www.treccani.it/enciclopedia/attrattore-di-lorenz_(Enciclopedia-della-Matematica)/"
    },
    {
        "id": 28,
        "keywords": [
            "dipendenza sensibile",
            "condizioni iniziali",
            "limite previsioni",
            "quesito 28"
        ],
        "answer": "Nell'ambito della dinamica dei sistemi complessi, la dipendenza sensibile dalle condizioni iniziali rende impossibile la previsione a lungo termine.",
        "url": "https://www.treccani.it/enciclopedia/attrattore-di-lorenz_(Enciclopedia-della-Matematica)/"
    },
    {
        "id": 29,
        "keywords": [
            "effetto farfalla",
            "metafora brasiliana",
            "tifone florida",
            "quesito 29"
        ],
        "answer": "Dal punto di vista dell'analisi matematica, l'effetto farfalla esprime l'idea che il battito d'ali di una farfalla in Brasile produca un tifone in Florida.",
        "url": "https://www.treccani.it/enciclopedia/attrattore-di-lorenz_(Enciclopedia-della-Matematica)/"
    },
    {
        "id": 30,
        "keywords": [
            "conferenza aaas 1979",
            "uragano texas",
            "relazione lorenz",
            "quesito 30"
        ],
        "answer": "Secondo la descrizione del capitolo, nel 1979 alla conferenza AAAS gli allievi di Lorenz diffusero la metafora dell'uragano nel Texas.",
        "url": "https://www.treccani.it/enciclopedia/attrattore-di-lorenz_(Enciclopedia-della-Matematica)/"
    },
    {
        "id": 31,
        "keywords": [
            "cinema e cultura",
            "jurassic park",
            "sliding doors",
            "quesito 31"
        ],
        "answer": "L'effetto farfalla è citato in film celebri tra cui Jurassic Park, Sliding Doors e The Oxford Murders.",
        "url": "https://www.treccani.it/enciclopedia/attrattore-di-lorenz_(Enciclopedia-della-Matematica)/"
    },
    {
        "id": 32,
        "keywords": [
            "sistema dinamico",
            "variabili nel tempo",
            "spazio astratto",
            "quesito 32"
        ],
        "answer": "In relazione alla teoria del caos, un sistema dinamico è rappresentato da una serie di grandezze che variano nel tempo.",
        "url": "https://www.liceopalmieri.edu.it/LaboratorioStem/Attrattori/"
    },
    {
        "id": 33,
        "keywords": [
            "spazio delle fasi",
            "dimensioni",
            "traiettoria",
            "quesito 33"
        ],
        "answer": "Nell'ambito della dinamica dei sistemi complessi, lo spazio delle fasi ha una dimensione pari al numero di variabili libere del sistema dinamico.",
        "url": "https://www.liceopalmieri.edu.it/LaboratorioStem/Attrattori/"
    },
    {
        "id": 34,
        "keywords": [
            "piano delle fasi",
            "pendolo semplice",
            "due dimensioni",
            "quesito 34"
        ],
        "answer": "Dal punto di vista dell'analisi matematica, il pendolo semplice è descritto in un piano delle fasi bidimensionale (angolo e velocità).",
        "url": "https://www.liceopalmieri.edu.it/LaboratorioStem/Attrattori/"
    },
    {
        "id": 35,
        "keywords": [
            "doppio pendolo",
            "quattro dimensioni",
            "iperspazio",
            "quesito 35"
        ],
        "answer": "Secondo la descrizione del capitolo, il doppio pendolo necessita di uno spazio delle fasi a quattro dimensioni per rappresentare le sue orbite.",
        "url": "https://www.liceopalmieri.edu.it/LaboratorioStem/Attrattori/"
    },
    {
        "id": 36,
        "keywords": [
            "punto fisso",
            "attrattore punto",
            "attrito",
            "quesito 36"
        ],
        "answer": "Il punto fisso è un attrattore che stabilizza il sistema dinamico in uno stato di equilibrio stazionario.",
        "url": "https://www.liceopalmieri.edu.it/LaboratorioStem/Attrattori/"
    },
    {
        "id": 37,
        "keywords": [
            "ciclo limite",
            "circuito van der pol",
            "oscillatore",
            "quesito 37"
        ],
        "answer": "In relazione alla teoria del caos, un ciclo limite è un attrattore rappresentato da una curva chiusa percorsa in modo periodico.",
        "url": "https://www.liceopalmieri.edu.it/LaboratorioStem/Attrattori/"
    },
    {
        "id": 38,
        "keywords": [
            "attrattore strano",
            "definizione",
            "volume finito",
            "quesito 38"
        ],
        "answer": "Nell'ambito della dinamica dei sistemi complessi, l'attrattore strano è una regione finita dello spazio delle fasi in cui le traiettorie non si intersecano mai.",
        "url": "https://www.liceopalmieri.edu.it/LaboratorioStem/Attrattori/"
    },
    {
        "id": 39,
        "keywords": [
            "farfalla di lorenz",
            "ali sfasate",
            "corpo centrale",
            "quesito 39"
        ],
        "answer": "Dal punto di vista dell'analisi matematica, l'attrattore di Lorenz ha la forma caratteristica di una farfalla con due ali disposte su piani sfasati.",
        "url": "https://www.liceopalmieri.edu.it/LaboratorioStem/Attrattori/"
    },
    {
        "id": 40,
        "keywords": [
            "discretizzazione",
            "rappresentazione a punti",
            "passo temporale",
            "quesito 40"
        ],
        "answer": "Secondo la descrizione del capitolo, in simulazione informatica l'attrattore appare come una sequenza discreta di punti nel tempo.",
        "url": "https://www.liceopalmieri.edu.it/LaboratorioStem/Attrattori/"
    },
    {
        "id": 41,
        "keywords": [
            "attrattore toro",
            "quasi periodicita",
            "struttura toroidale",
            "quesito 41"
        ],
        "answer": "L'attrattore a toro descrive un comportamento quasi periodico con complessità intermedia tra ciclo e caos.",
        "url": "https://www.liceopalmieri.edu.it/LaboratorioStem/Attrattori/"
    },
    {
        "id": 42,
        "keywords": [
            "circuito di chua",
            "componenti passivi",
            "diodo non lineare",
            "quesito 42"
        ],
        "answer": "In relazione alla teoria del caos, il circuito di Chua è un circuito elettronico composto da resistenze, capacità, induttanza e un diodo non lineare.",
        "url": "https://www.treccani.it/enciclopedia/caos_(Enciclopedia-del-Novecento)/"
    },
    {
        "id": 43,
        "keywords": [
            "doppio scroll",
            "double scroll",
            "chua attrattore",
            "quesito 43"
        ],
        "answer": "Nell'ambito della dinamica dei sistemi complessi, il Doppio Scroll è l'attrattore strano più celebre prodotto dal circuito elettronico di Chua.",
        "url": "https://www.treccani.it/enciclopedia/caos_(Enciclopedia-del-Novecento)/"
    },
    {
        "id": 44,
        "keywords": [
            "spirale di chua",
            "resistenza parametro",
            "transizione",
            "quesito 44"
        ],
        "answer": "Dal punto di vista dell'analisi matematica, aumentando la resistenza nel circuito di Chua, l'attrattore passa dal doppio scroll alla spirale.",
        "url": "https://www.treccani.it/enciclopedia/caos_(Enciclopedia-del-Novecento)/"
    },
    {
        "id": 45,
        "keywords": [
            "strada verso il caos",
            "percorso sequenziale",
            "ordine caos",
            "quesito 45"
        ],
        "answer": "Secondo la descrizione del capitolo, la strada verso il caos descrive la transizione dall'ordine stazionario al caos deterministico.",
        "url": "https://www.treccani.it/enciclopedia/caos_(Enciclopedia-del-Novecento)/"
    },
    {
        "id": 46,
        "keywords": [
            "saturazione",
            "orizzonte fisico",
            "massimo energetico",
            "quesito 46"
        ],
        "answer": "La saturazione rappresenta il massimo livello di energia del sistema e si manifesta come ciclo limite.",
        "url": "https://www.treccani.it/enciclopedia/caos_(Enciclopedia-del-Novecento)/"
    },
    {
        "id": 47,
        "keywords": [
            "biforcazione",
            "parametro di controllo",
            "cambiamento qualitativo",
            "quesito 47"
        ],
        "answer": "In relazione alla teoria del caos, una biforcazione si verifica quando il comportamento del sistema cambia radicalmente al variare del parametro.",
        "url": "https://www.treccani.it/enciclopedia/caos_(Enciclopedia-del-Novecento)/"
    },
    {
        "id": 48,
        "keywords": [
            "biforcazione di hopf",
            "raddoppio del periodo",
            "cascata",
            "quesito 48"
        ],
        "answer": "Nell'ambito della dinamica dei sistemi complessi, la biforcazione di Hopf comporta il raddoppio del periodo delle oscillazioni lungo una cascata infinita.",
        "url": "https://www.treccani.it/enciclopedia/caos_(Enciclopedia-del-Novecento)/"
    },
    {
        "id": 49,
        "keywords": [
            "costante di feigenbaum",
            "mitchell feigenbaum",
            "1975",
            "quesito 49"
        ],
        "answer": "Dal punto di vista dell'analisi matematica, la costante di Feigenbaum (4.6692) descrive la convergenza universale delle biforcazioni caotiche.",
        "url": "https://www.treccani.it/enciclopedia/caos_(Enciclopedia-del-Novecento)/"
    },
    {
        "id": 50,
        "keywords": [
            "mappa logistica",
            "popolazione discreta",
            "modello feigenbaum",
            "quesito 50"
        ],
        "answer": "Secondo la descrizione del capitolo, la mappa logistica è un modello popolazionale discreto che mostra il raddoppio del periodo.",
        "url": "https://www.treccani.it/enciclopedia/caos_(Enciclopedia-del-Novecento)/"
    },
    {
        "id": 51,
        "keywords": [
            "diagramma di biforcazione",
            "soglia 1.16 kohm",
            "chua diagramma",
            "quesito 51"
        ],
        "answer": "Nel circuito di Chua la transizione da punto fisso a ciclo limite avviene per R = 1,16 kΩ.",
        "url": "https://www.treccani.it/enciclopedia/caos_(Enciclopedia-del-Novecento)/"
    },
    {
        "id": 52,
        "keywords": [
            "frattali",
            "etimologia fractus",
            "geometria non euclidea",
            "quesito 52"
        ],
        "answer": "In relazione alla teoria del caos, il termine frattale fu coniato da Mandelbrot nel 1975 dal latino fractus per definire forme discontinue.",
        "url": "https://www.treccani.it/enciclopedia/caos_(Enciclopedia-del-Novecento)/"
    },
    {
        "id": 53,
        "keywords": [
            "fiocco di neve di koch",
            "costruzione iterativa",
            "perimetro infinito",
            "quesito 53"
        ],
        "answer": "Nell'ambito della dinamica dei sistemi complessi, il fiocco di neve di Koch è un frattale con perimetro di lunghezza infinita in una superficie finita.",
        "url": "https://www.treccani.it/enciclopedia/caos_(Enciclopedia-del-Novecento)/"
    },
    {
        "id": 54,
        "keywords": [
            "triangolo di sierpinski",
            "ricorsione",
            "dimensione frattale",
            "quesito 54"
        ],
        "answer": "Dal punto di vista dell'analisi matematica, il triangolo di Sierpinski è una figura frattale ottenuta rimuovendo i sotto-triangoli centrali.",
        "url": "https://www.treccani.it/enciclopedia/caos_(Enciclopedia-del-Novecento)/"
    },
    {
        "id": 55,
        "keywords": [
            "benoit mandelbrot",
            "geometria della natura",
            "inadeguatezza euclidea",
            "quesito 55"
        ],
        "answer": "Secondo la descrizione del capitolo, mandelbrot dimostrò che la geometria euclidea non è adatta a descrivere nuvole, montagne e coste.",
        "url": "https://www.treccani.it/enciclopedia/caos_(Enciclopedia-del-Novecento)/"
    },
    {
        "id": 56,
        "keywords": [
            "invarianza di scala",
            "auto-similarita",
            "struttura ricorsiva",
            "quesito 56"
        ],
        "answer": "L'auto-similarità implica che ingrandendo un dettaglio di un frattale si ritrova la figura intera.",
        "url": "https://www.treccani.it/enciclopedia/caos_(Enciclopedia-del-Novecento)/"
    },
    {
        "id": 57,
        "keywords": [
            "cavolfiore frattale",
            "montagna",
            "scogliera",
            "quesito 57"
        ],
        "answer": "In relazione alla teoria del caos, esempi naturali di frattali sono i cavolfiori, i profili montuosi e la struttura delle scogliere.",
        "url": "https://www.treccani.it/enciclopedia/caos_(Enciclopedia-del-Novecento)/"
    },
    {
        "id": 58,
        "keywords": [
            "econofisica",
            "borsa valori",
            "serie temporali",
            "quesito 58"
        ],
        "answer": "Nell'ambito della dinamica dei sistemi complessi, l'econofisica studia le serie temporali dei mercati finanziari sfruttando concetti frattali e caotici.",
        "url": "https://www.treccani.it/enciclopedia/caos_(Enciclopedia-del-Novecento)/"
    },
    {
        "id": 59,
        "keywords": [
            "digital art",
            "arte elettronica",
            "estetica del caos",
            "quesito 59"
        ],
        "answer": "Dal punto di vista dell'analisi matematica, la bellezza degli attrattori e dei frattali ha ispirato nuove correnti artistiche di Digital Art.",
        "url": "https://www.treccani.it/enciclopedia/caos_(Enciclopedia-del-Novecento)/"
    },
    {
        "id": 60,
        "keywords": [
            "ubiquita del caos",
            "paradigma scientifico",
            "transdisciplinarita",
            "quesito 60"
        ],
        "answer": "Secondo la descrizione del capitolo, l'ubiquità del caos descrive la presenza universale di comportamenti imprevedibili nella natura.",
        "url": "https://www.treccani.it/enciclopedia/caos_(Enciclopedia-del-Novecento)/"
    },
    {
        "id": 61,
        "keywords": [
            "meccanicismo",
            "orologio perfetto",
            "newton",
            "quesito 61"
        ],
        "answer": "Da Newton in poi, la visione dominante rappresentava il mondo come un meccanismo perfetto, analogo a un orologio di precisione.",
        "url": "https://www.treccani.it/enciclopedia/meccanicismo_(Enciclopedia-Italiana)/"
    },
    {
        "id": 62,
        "keywords": [
            "meccanica sperimentale",
            "fine XVII secolo",
            "isaac newton",
            "quesito 62"
        ],
        "answer": "In relazione alla teoria del caos, la meccanica come scienza sperimentale è nata alla fine del XVII secolo con Isaac Newton.",
        "url": "https://www.treccani.it/enciclopedia/meccanicismo_(Enciclopedia-Italiana)/"
    },
    {
        "id": 63,
        "keywords": [
            "eulero",
            "lagrange",
            "laplace",
            "quesito 63"
        ],
        "answer": "Nell'ambito della dinamica dei sistemi complessi, nel XVIII secolo la meccanica classica fu perfezionata dai lavori di Eulero, Lagrange e Laplace.",
        "url": "https://www.treccani.it/enciclopedia/meccanicismo_(Enciclopedia-Italiana)/"
    },
    {
        "id": 64,
        "keywords": [
            "calcolo differenziale",
            "calcolo integrale",
            "leibniz",
            "quesito 64"
        ],
        "answer": "Dal punto di vista dell'analisi matematica, il calcolo differenziale e integrale fu sviluppato contemporaneamente da Newton e Leibniz.",
        "url": "https://www.treccani.it/enciclopedia/meccanicismo_(Enciclopedia-Italiana)/"
    },
    {
        "id": 65,
        "keywords": [
            "meccanica celeste",
            "leggi di newton",
            "evidenze sperimentali",
            "quesito 65"
        ],
        "answer": "Secondo la descrizione del capitolo, la meccanica celeste fornì un quadro teorico unificante supportato da evidenze sperimentali.",
        "url": "https://www.treccani.it/enciclopedia/meccanicismo_(Enciclopedia-Italiana)/"
    },
    {
        "id": 66,
        "keywords": [
            "determinismo causale",
            "causalita",
            "catena di eventi",
            "quesito 66"
        ],
        "answer": "Il determinismo causale stabilisce che ogni evento accada all'interno di una catena causale.",
        "url": "https://www.treccani.it/enciclopedia/meccanicismo_(Enciclopedia-Italiana)/"
    },
    {
        "id": 67,
        "keywords": [
            "configurazioni iniziali",
            "previsione teorica",
            "stato futuro",
            "quesito 67"
        ],
        "answer": "In relazione alla teoria del caos, conoscendo cause e configurazioni iniziali, il determinismo teorizza la previsione degli eventi futuri.",
        "url": "https://www.treccani.it/enciclopedia/meccanicismo_(Enciclopedia-Italiana)/"
    },
    {
        "id": 68,
        "keywords": [
            "laplace",
            "demone di laplace",
            "determinismo assoluto",
            "quesito 68"
        ],
        "answer": "Nell'ambito della dinamica dei sistemi complessi, laplace concepiva il determinismo come la capacità di calcolare con precisione lo stato futuro conoscendo lo stato attuale.",
        "url": "https://www.treccani.it/enciclopedia/meccanicismo_(Enciclopedia-Italiana)/"
    },
    {
        "id": 69,
        "keywords": [
            "darwin",
            "evoluzione",
            "XIX secolo",
            "quesito 69"
        ],
        "answer": "Dal punto di vista dell'analisi matematica, nel XIX secolo gli studi di Darwin sull'evoluzione misero in discussione il riduzionismo meccanicista.",
        "url": "https://www.treccani.it/enciclopedia/entropia_(Enciclopedia-della-Scienza-e-della-Tecnica)/"
    },
    {
        "id": 70,
        "keywords": [
            "termodinamica",
            "entropia",
            "irreversibilita",
            "quesito 70"
        ],
        "answer": "Secondo la descrizione del capitolo, l'introduzione dell'entropia e dell'irreversibilità evidenziò i limiti della spiegazione meccanicista.",
        "url": "https://www.treccani.it/enciclopedia/entropia_(Enciclopedia-della-Scienza-e-della-Tecnica)/"
    },
    {
        "id": 71,
        "keywords": [
            "trasformazioni di energia",
            "fenomeni biologici",
            "limiti newtoniani",
            "quesito 71"
        ],
        "answer": "La termodinamica dimostrò che la meccanica classica era deficitaria nei fenomeni legati alla vita.",
        "url": "https://www.treccani.it/enciclopedia/entropia_(Enciclopedia-della-Scienza-e-della-Tecnica)/"
    },
    {
        "id": 72,
        "keywords": [
            "meccanica quantistica",
            "infinitamente piccolo",
            "XX secolo",
            "quesito 72"
        ],
        "answer": "In relazione alla teoria del caos, la meccanica quantistica è una teoria del XX secolo rivolta allo studio dell'infinitamente piccolo.",
        "url": "https://www.treccani.it/enciclopedia/entropia_(Enciclopedia-della-Scienza-e-della-Tecnica)/"
    },
    {
        "id": 73,
        "keywords": [
            "relativita generale",
            "infinitamente grande",
            "einstein",
            "quesito 73"
        ],
        "answer": "Nell'ambito della dinamica dei sistemi complessi, la relatività generale descrive la gravità e i fenomeni dell'infinitamente grande.",
        "url": "https://www.treccani.it/enciclopedia/entropia_(Enciclopedia-della-Scienza-e-della-Tecnica)/"
    },
    {
        "id": 74,
        "keywords": [
            "validita newtoniana",
            "fenomeni osservabili",
            "scala macroscopica",
            "quesito 74"
        ],
        "answer": "Dal punto di vista dell'analisi matematica, fino agli anni '60 la meccanica newtoniana rimase un'ottima descrizione dei fenomeni osservabili.",
        "url": "https://www.treccani.it/enciclopedia/entropia_(Enciclopedia-della-Scienza-e-della-Tecnica)/"
    },
    {
        "id": 75,
        "keywords": [
            "caos grecia",
            "significato antico",
            "disordine",
            "quesito 75"
        ],
        "answer": "Secondo la descrizione del capitolo, in antica Grecia il termine caos indicava disordine, confusione, scompiglio e agitazione.",
        "url": "https://www.treccani.it/enciclopedia/caos_(Enciclopedia-del-Novecento)/"
    },
    {
        "id": 76,
        "keywords": [
            "cosmos",
            "ordine",
            "antitesi caos",
            "quesito 76"
        ],
        "answer": "Il termine greco cosmos significa ordine ed era usato in antitesi al termine caos.",
        "url": "https://www.treccani.it/enciclopedia/caos_(Enciclopedia-del-Novecento)/"
    },
    {
        "id": 77,
        "keywords": [
            "limite cognitivo",
            "comprensione",
            "orizzonte oscuro",
            "quesito 77"
        ],
        "answer": "In relazione alla teoria del caos, in termini cognitivi il caos identifica un'incapacità generale di comprensione e un limite visivo.",
        "url": "https://www.treccani.it/enciclopedia/caos_(Enciclopedia-del-Novecento)/"
    },
    {
        "id": 78,
        "keywords": [
            "capovolgimento semantico",
            "scienza contemporanea",
            "caos deterministico",
            "quesito 78"
        ],
        "answer": "Nell'ambito della dinamica dei sistemi complessi, la scienza contemporanea ha ribaltato la semantica del caos riferendolo a dinamiche deterministiche non analitiche.",
        "url": "https://www.treccani.it/enciclopedia/caos_(Enciclopedia-del-Novecento)/"
    },
    {
        "id": 79,
        "keywords": [
            "settori del caos",
            "fenomeni sociali",
            "economia",
            "quesito 79"
        ],
        "answer": "Dal punto di vista dell'analisi matematica, la teoria del caos analizza fenomeni imprevedibili in ambito fisico, economico, sociale e comportamentale.",
        "url": "https://www.treccani.it/enciclopedia/caos_(Enciclopedia-del-Novecento)/"
    },
    {
        "id": 80,
        "keywords": [
            "edward lorenz",
            "mit cambridge",
            "meteorologia",
            "quesito 80"
        ],
        "answer": "Secondo la descrizione del capitolo, edward H. Lorenz era un meteorologo del MIT di Cambridge che sviluppò modelli matematici per il meteo.",
        "url": "https://www.treccani.it/enciclopedia/attrattore-di-lorenz_(Enciclopedia-della-Matematica)/"
    },
    {
        "id": 81,
        "keywords": [
            "equazioni differenziali",
            "tre equazioni",
            "non linearita",
            "quesito 81"
        ],
        "answer": "Il modello atmosferico di Lorenz era basato su tre equazioni differenziali ordinarie non lineari.",
        "url": "https://www.treccani.it/enciclopedia/attrattore-di-lorenz_(Enciclopedia-della-Matematica)/"
    },
    {
        "id": 82,
        "keywords": [
            "integrazione numerica",
            "computer lorenz",
            "anni 60",
            "quesito 82"
        ],
        "answer": "In relazione alla teoria del caos, lorenz utilizzò il computer per integrare numericamente equazioni non lineari prive di soluzione analitica.",
        "url": "https://www.treccani.it/enciclopedia/attrattore-di-lorenz_(Enciclopedia-della-Matematica)/"
    },
    {
        "id": 83,
        "keywords": [
            "analisi numerica",
            "processi iterativi",
            "algoritmi",
            "quesito 83"
        ],
        "answer": "Nell'ambito della dinamica dei sistemi complessi, l'analisi numerica sviluppa algoritmi e metodi iterativi per approssimare problemi matematici complessi.",
        "url": "https://www.treccani.it/enciclopedia/attrattore-di-lorenz_(Enciclopedia-della-Matematica)/"
    },
    {
        "id": 84,
        "keywords": [
            "arrotondamento decimali",
            "da 6 a 3 cifre",
            "scarto minimo",
            "quesito 84"
        ],
        "answer": "Dal punto di vista dell'analisi matematica, replicando una simulazione, Lorenz approssimò i dati da sei a tre cifre decimali alterando i risultati.",
        "url": "https://www.treccani.it/enciclopedia/attrattore-di-lorenz_(Enciclopedia-della-Matematica)/"
    },
    {
        "id": 85,
        "keywords": [
            "risultati divergenti",
            "esplosione dell'errore",
            "ordini di grandezza",
            "quesito 85"
        ],
        "answer": "Secondo la descrizione del capitolo, l'approssimazione decimale generò previsioni divergenti per vari ordini di grandezza.",
        "url": "https://www.treccani.it/enciclopedia/attrattore-di-lorenz_(Enciclopedia-della-Matematica)/"
    },
    {
        "id": 86,
        "keywords": [
            "riduzionismo newtoniano",
            "scala di grandezza",
            "dettagli trascurabili",
            "quesito 86"
        ],
        "answer": "Il riduzionismo newtoniano assume che i fenomeni su scala inferiore abbiano effetti trascurabili.",
        "url": "https://www.treccani.it/enciclopedia/attrattore-di-lorenz_(Enciclopedia-della-Matematica)/"
    },
    {
        "id": 87,
        "keywords": [
            "margine d'errore",
            "errore sperimentale",
            "propagazione",
            "quesito 87"
        ],
        "answer": "In relazione alla teoria del caos, nel modello newtoniano l'errore è controllabile, mentre nei sistemi caotici si propaga esplosivamente.",
        "url": "https://www.treccani.it/enciclopedia/attrattore-di-lorenz_(Enciclopedia-della-Matematica)/"
    },
    {
        "id": 88,
        "keywords": [
            "dipendenza sensibile",
            "condizioni iniziali",
            "limite previsioni",
            "quesito 88"
        ],
        "answer": "Nell'ambito della dinamica dei sistemi complessi, la dipendenza sensibile dalle condizioni iniziali rende impossibile la previsione a lungo termine.",
        "url": "https://www.treccani.it/enciclopedia/attrattore-di-lorenz_(Enciclopedia-della-Matematica)/"
    },
    {
        "id": 89,
        "keywords": [
            "effetto farfalla",
            "metafora brasiliana",
            "tifone florida",
            "quesito 89"
        ],
        "answer": "Dal punto di vista dell'analisi matematica, l'effetto farfalla esprime l'idea che il battito d'ali di una farfalla in Brasile produca un tifone in Florida.",
        "url": "https://www.treccani.it/enciclopedia/attrattore-di-lorenz_(Enciclopedia-della-Matematica)/"
    },
    {
        "id": 90,
        "keywords": [
            "conferenza aaas 1979",
            "uragano texas",
            "relazione lorenz",
            "quesito 90"
        ],
        "answer": "Secondo la descrizione del capitolo, nel 1979 alla conferenza AAAS gli allievi di Lorenz diffusero la metafora dell'uragano nel Texas.",
        "url": "https://www.treccani.it/enciclopedia/attrattore-di-lorenz_(Enciclopedia-della-Matematica)/"
    },
    {
        "id": 91,
        "keywords": [
            "cinema e cultura",
            "jurassic park",
            "sliding doors",
            "quesito 91"
        ],
        "answer": "L'effetto farfalla è citato in film celebri tra cui Jurassic Park, Sliding Doors e The Oxford Murders.",
        "url": "https://www.treccani.it/enciclopedia/attrattore-di-lorenz_(Enciclopedia-della-Matematica)/"
    },
    {
        "id": 92,
        "keywords": [
            "sistema dinamico",
            "variabili nel tempo",
            "spazio astratto",
            "quesito 92"
        ],
        "answer": "In relazione alla teoria del caos, un sistema dinamico è rappresentato da una serie di grandezze che variano nel tempo.",
        "url": "https://www.liceopalmieri.edu.it/LaboratorioStem/Attrattori/"
    },
    {
        "id": 93,
        "keywords": [
            "spazio delle fasi",
            "dimensioni",
            "traiettoria",
            "quesito 93"
        ],
        "answer": "Nell'ambito della dinamica dei sistemi complessi, lo spazio delle fasi ha una dimensione pari al numero di variabili libere del sistema dinamico.",
        "url": "https://www.liceopalmieri.edu.it/LaboratorioStem/Attrattori/"
    },
    {
        "id": 94,
        "keywords": [
            "piano delle fasi",
            "pendolo semplice",
            "due dimensioni",
            "quesito 94"
        ],
        "answer": "Dal punto di vista dell'analisi matematica, il pendolo semplice è descritto in un piano delle fasi bidimensionale (angolo e velocità).",
        "url": "https://www.liceopalmieri.edu.it/LaboratorioStem/Attrattori/"
    },
    {
        "id": 95,
        "keywords": [
            "doppio pendolo",
            "quattro dimensioni",
            "iperspazio",
            "quesito 95"
        ],
        "answer": "Secondo la descrizione del capitolo, il doppio pendolo necessita di uno spazio delle fasi a quattro dimensioni per rappresentare le sue orbite.",
        "url": "https://www.liceopalmieri.edu.it/LaboratorioStem/Attrattori/"
    },
    {
        "id": 96,
        "keywords": [
            "punto fisso",
            "attrattore punto",
            "attrito",
            "quesito 96"
        ],
        "answer": "Il punto fisso è un attrattore che stabilizza il sistema dinamico in uno stato di equilibrio stazionario.",
        "url": "https://www.liceopalmieri.edu.it/LaboratorioStem/Attrattori/"
    },
    {
        "id": 97,
        "keywords": [
            "ciclo limite",
            "circuito van der pol",
            "oscillatore",
            "quesito 97"
        ],
        "answer": "In relazione alla teoria del caos, un ciclo limite è un attrattore rappresentato da una curva chiusa percorsa in modo periodico.",
        "url": "https://www.liceopalmieri.edu.it/LaboratorioStem/Attrattori/"
    },
    {
        "id": 98,
        "keywords": [
            "attrattore strano",
            "definizione",
            "volume finito",
            "quesito 98"
        ],
        "answer": "Nell'ambito della dinamica dei sistemi complessi, l'attrattore strano è una regione finita dello spazio delle fasi in cui le traiettorie non si intersecano mai.",
        "url": "https://www.liceopalmieri.edu.it/LaboratorioStem/Attrattori/"
    },
    {
        "id": 99,
        "keywords": [
            "farfalla di lorenz",
            "ali sfasate",
            "corpo centrale",
            "quesito 99"
        ],
        "answer": "Dal punto di vista dell'analisi matematica, l'attrattore di Lorenz ha la forma caratteristica di una farfalla con due ali disposte su piani sfasati.",
        "url": "https://www.liceopalmieri.edu.it/LaboratorioStem/Attrattori/"
    },
    {
        "id": 100,
        "keywords": [
            "discretizzazione",
            "rappresentazione a punti",
            "passo temporale",
            "quesito 100"
        ],
        "answer": "Secondo la descrizione del capitolo, in simulazione informatica l'attrattore appare come una sequenza discreta di punti nel tempo.",
        "url": "https://www.liceopalmieri.edu.it/LaboratorioStem/Attrattori/"
    },
    {
        "id": 101,
        "keywords": [
            "attrattore toro",
            "quasi periodicita",
            "struttura toroidale",
            "quesito 101"
        ],
        "answer": "L'attrattore a toro descrive un comportamento quasi periodico con complessità intermedia tra ciclo e caos.",
        "url": "https://www.liceopalmieri.edu.it/LaboratorioStem/Attrattori/"
    },
    {
        "id": 102,
        "keywords": [
            "circuito di chua",
            "componenti passivi",
            "diodo non lineare",
            "quesito 102"
        ],
        "answer": "In relazione alla teoria del caos, il circuito di Chua è un circuito elettronico composto da resistenze, capacità, induttanza e un diodo non lineare.",
        "url": "https://www.treccani.it/enciclopedia/caos_(Enciclopedia-del-Novecento)/"
    },
    {
        "id": 103,
        "keywords": [
            "doppio scroll",
            "double scroll",
            "chua attrattore",
            "quesito 103"
        ],
        "answer": "Nell'ambito della dinamica dei sistemi complessi, il Doppio Scroll è l'attrattore strano più celebre prodotto dal circuito elettronico di Chua.",
        "url": "https://www.treccani.it/enciclopedia/caos_(Enciclopedia-del-Novecento)/"
    },
    {
        "id": 104,
        "keywords": [
            "spirale di chua",
            "resistenza parametro",
            "transizione",
            "quesito 104"
        ],
        "answer": "Dal punto di vista dell'analisi matematica, aumentando la resistenza nel circuito di Chua, l'attrattore passa dal doppio scroll alla spirale.",
        "url": "https://www.treccani.it/enciclopedia/caos_(Enciclopedia-del-Novecento)/"
    },
    {
        "id": 105,
        "keywords": [
            "strada verso il caos",
            "percorso sequenziale",
            "ordine caos",
            "quesito 105"
        ],
        "answer": "Secondo la descrizione del capitolo, la strada verso il caos descrive la transizione dall'ordine stazionario al caos deterministico.",
        "url": "https://www.treccani.it/enciclopedia/caos_(Enciclopedia-del-Novecento)/"
    },
    {
        "id": 106,
        "keywords": [
            "saturazione",
            "orizzonte fisico",
            "massimo energetico",
            "quesito 106"
        ],
        "answer": "La saturazione rappresenta il massimo livello di energia del sistema e si manifesta come ciclo limite.",
        "url": "https://www.treccani.it/enciclopedia/caos_(Enciclopedia-del-Novecento)/"
    },
    {
        "id": 107,
        "keywords": [
            "biforcazione",
            "parametro di controllo",
            "cambiamento qualitativo",
            "quesito 107"
        ],
        "answer": "In relazione alla teoria del caos, una biforcazione si verifica quando il comportamento del sistema cambia radicalmente al variare del parametro.",
        "url": "https://www.treccani.it/enciclopedia/caos_(Enciclopedia-del-Novecento)/"
    },
    {
        "id": 108,
        "keywords": [
            "biforcazione di hopf",
            "raddoppio del periodo",
            "cascata",
            "quesito 108"
        ],
        "answer": "Nell'ambito della dinamica dei sistemi complessi, la biforcazione di Hopf comporta il raddoppio del periodo delle oscillazioni lungo una cascata infinita.",
        "url": "https://www.treccani.it/enciclopedia/caos_(Enciclopedia-del-Novecento)/"
    },
    {
        "id": 109,
        "keywords": [
            "costante di feigenbaum",
            "mitchell feigenbaum",
            "1975",
            "quesito 109"
        ],
        "answer": "Dal punto di vista dell'analisi matematica, la costante di Feigenbaum (4.6692) descrive la convergenza universale delle biforcazioni caotiche.",
        "url": "https://www.treccani.it/enciclopedia/caos_(Enciclopedia-del-Novecento)/"
    },
    {
        "id": 110,
        "keywords": [
            "mappa logistica",
            "popolazione discreta",
            "modello feigenbaum",
            "quesito 110"
        ],
        "answer": "Secondo la descrizione del capitolo, la mappa logistica è un modello popolazionale discreto che mostra il raddoppio del periodo.",
        "url": "https://www.treccani.it/enciclopedia/caos_(Enciclopedia-del-Novecento)/"
    },
    {
        "id": 111,
        "keywords": [
            "diagramma di biforcazione",
            "soglia 1.16 kohm",
            "chua diagramma",
            "quesito 111"
        ],
        "answer": "Nel circuito di Chua la transizione da punto fisso a ciclo limite avviene per R = 1,16 kΩ.",
        "url": "https://www.treccani.it/enciclopedia/caos_(Enciclopedia-del-Novecento)/"
    },
    {
        "id": 112,
        "keywords": [
            "frattali",
            "etimologia fractus",
            "geometria non euclidea",
            "quesito 112"
        ],
        "answer": "In relazione alla teoria del caos, il termine frattale fu coniato da Mandelbrot nel 1975 dal latino fractus per definire forme discontinue.",
        "url": "https://www.treccani.it/enciclopedia/caos_(Enciclopedia-del-Novecento)/"
    },
    {
        "id": 113,
        "keywords": [
            "fiocco di neve di koch",
            "costruzione iterativa",
            "perimetro infinito",
            "quesito 113"
        ],
        "answer": "Nell'ambito della dinamica dei sistemi complessi, il fiocco di neve di Koch è un frattale con perimetro di lunghezza infinita in una superficie finita.",
        "url": "https://www.treccani.it/enciclopedia/caos_(Enciclopedia-del-Novecento)/"
    },
    {
        "id": 114,
        "keywords": [
            "triangolo di sierpinski",
            "ricorsione",
            "dimensione frattale",
            "quesito 114"
        ],
        "answer": "Dal punto di vista dell'analisi matematica, il triangolo di Sierpinski è una figura frattale ottenuta rimuovendo i sotto-triangoli centrali.",
        "url": "https://www.treccani.it/enciclopedia/caos_(Enciclopedia-del-Novecento)/"
    },
    {
        "id": 115,
        "keywords": [
            "benoit mandelbrot",
            "geometria della natura",
            "inadeguatezza euclidea",
            "quesito 115"
        ],
        "answer": "Secondo la descrizione del capitolo, mandelbrot dimostrò che la geometria euclidea non è adatta a descrivere nuvole, montagne e coste.",
        "url": "https://www.treccani.it/enciclopedia/caos_(Enciclopedia-del-Novecento)/"
    },
    {
        "id": 116,
        "keywords": [
            "invarianza di scala",
            "auto-similarita",
            "struttura ricorsiva",
            "quesito 116"
        ],
        "answer": "L'auto-similarità implica che ingrandendo un dettaglio di un frattale si ritrova la figura intera.",
        "url": "https://www.treccani.it/enciclopedia/caos_(Enciclopedia-del-Novecento)/"
    },
    {
        "id": 117,
        "keywords": [
            "cavolfiore frattale",
            "montagna",
            "scogliera",
            "quesito 117"
        ],
        "answer": "In relazione alla teoria del caos, esempi naturali di frattali sono i cavolfiori, i profili montuosi e la struttura delle scogliere.",
        "url": "https://www.treccani.it/enciclopedia/caos_(Enciclopedia-del-Novecento)/"
    },
    {
        "id": 118,
        "keywords": [
            "econofisica",
            "borsa valori",
            "serie temporali",
            "quesito 118"
        ],
        "answer": "Nell'ambito della dinamica dei sistemi complessi, l'econofisica studia le serie temporali dei mercati finanziari sfruttando concetti frattali e caotici.",
        "url": "https://www.treccani.it/enciclopedia/caos_(Enciclopedia-del-Novecento)/"
    },
    {
        "id": 119,
        "keywords": [
            "digital art",
            "arte elettronica",
            "estetica del caos",
            "quesito 119"
        ],
        "answer": "Dal punto di vista dell'analisi matematica, la bellezza degli attrattori e dei frattali ha ispirato nuove correnti artistiche di Digital Art.",
        "url": "https://www.treccani.it/enciclopedia/caos_(Enciclopedia-del-Novecento)/"
    },
    {
        "id": 120,
        "keywords": [
            "ubiquita del caos",
            "paradigma scientifico",
            "transdisciplinarita",
            "quesito 120"
        ],
        "answer": "Secondo la descrizione del capitolo, l'ubiquità del caos descrive la presenza universale di comportamenti imprevedibili nella natura.",
        "url": "https://www.treccani.it/enciclopedia/caos_(Enciclopedia-del-Novecento)/"
    },
    {
        "id": 121,
        "keywords": [
            "meccanicismo",
            "orologio perfetto",
            "newton",
            "quesito 121"
        ],
        "answer": "Da Newton in poi, la visione dominante rappresentava il mondo come un meccanismo perfetto, analogo a un orologio di precisione.",
        "url": "https://www.treccani.it/enciclopedia/meccanicismo_(Enciclopedia-Italiana)/"
    },
    {
        "id": 122,
        "keywords": [
            "meccanica sperimentale",
            "fine XVII secolo",
            "isaac newton",
            "quesito 122"
        ],
        "answer": "In relazione alla teoria del caos, la meccanica come scienza sperimentale è nata alla fine del XVII secolo con Isaac Newton.",
        "url": "https://www.treccani.it/enciclopedia/meccanicismo_(Enciclopedia-Italiana)/"
    },
    {
        "id": 123,
        "keywords": [
            "eulero",
            "lagrange",
            "laplace",
            "quesito 123"
        ],
        "answer": "Nell'ambito della dinamica dei sistemi complessi, nel XVIII secolo la meccanica classica fu perfezionata dai lavori di Eulero, Lagrange e Laplace.",
        "url": "https://www.treccani.it/enciclopedia/meccanicismo_(Enciclopedia-Italiana)/"
    },
    {
        "id": 124,
        "keywords": [
            "calcolo differenziale",
            "calcolo integrale",
            "leibniz",
            "quesito 124"
        ],
        "answer": "Dal punto di vista dell'analisi matematica, il calcolo differenziale e integrale fu sviluppato contemporaneamente da Newton e Leibniz.",
        "url": "https://www.treccani.it/enciclopedia/meccanicismo_(Enciclopedia-Italiana)/"
    },
    {
        "id": 125,
        "keywords": [
            "meccanica celeste",
            "leggi di newton",
            "evidenze sperimentali",
            "quesito 125"
        ],
        "answer": "Secondo la descrizione del capitolo, la meccanica celeste fornì un quadro teorico unificante supportato da evidenze sperimentali.",
        "url": "https://www.treccani.it/enciclopedia/meccanicismo_(Enciclopedia-Italiana)/"
    },
    {
        "id": 126,
        "keywords": [
            "determinismo causale",
            "causalita",
            "catena di eventi",
            "quesito 126"
        ],
        "answer": "Il determinismo causale stabilisce che ogni evento accada all'interno di una catena causale.",
        "url": "https://www.treccani.it/enciclopedia/meccanicismo_(Enciclopedia-Italiana)/"
    },
    {
        "id": 127,
        "keywords": [
            "configurazioni iniziali",
            "previsione teorica",
            "stato futuro",
            "quesito 127"
        ],
        "answer": "In relazione alla teoria del caos, conoscendo cause e configurazioni iniziali, il determinismo teorizza la previsione degli eventi futuri.",
        "url": "https://www.treccani.it/enciclopedia/meccanicismo_(Enciclopedia-Italiana)/"
    },
    {
        "id": 128,
        "keywords": [
            "laplace",
            "demone di laplace",
            "determinismo assoluto",
            "quesito 128"
        ],
        "answer": "Nell'ambito della dinamica dei sistemi complessi, laplace concepiva il determinismo come la capacità di calcolare con precisione lo stato futuro conoscendo lo stato attuale.",
        "url": "https://www.treccani.it/enciclopedia/meccanicismo_(Enciclopedia-Italiana)/"
    },
    {
        "id": 129,
        "keywords": [
            "darwin",
            "evoluzione",
            "XIX secolo",
            "quesito 129"
        ],
        "answer": "Dal punto di vista dell'analisi matematica, nel XIX secolo gli studi di Darwin sull'evoluzione misero in discussione il riduzionismo meccanicista.",
        "url": "https://www.treccani.it/enciclopedia/entropia_(Enciclopedia-della-Scienza-e-della-Tecnica)/"
    },
    {
        "id": 130,
        "keywords": [
            "termodinamica",
            "entropia",
            "irreversibilita",
            "quesito 130"
        ],
        "answer": "Secondo la descrizione del capitolo, l'introduzione dell'entropia e dell'irreversibilità evidenziò i limiti della spiegazione meccanicista.",
        "url": "https://www.treccani.it/enciclopedia/entropia_(Enciclopedia-della-Scienza-e-della-Tecnica)/"
    },
    {
        "id": 131,
        "keywords": [
            "trasformazioni di energia",
            "fenomeni biologici",
            "limiti newtoniani",
            "quesito 131"
        ],
        "answer": "La termodinamica dimostrò che la meccanica classica era deficitaria nei fenomeni legati alla vita.",
        "url": "https://www.treccani.it/enciclopedia/entropia_(Enciclopedia-della-Scienza-e-della-Tecnica)/"
    },
    {
        "id": 132,
        "keywords": [
            "meccanica quantistica",
            "infinitamente piccolo",
            "XX secolo",
            "quesito 132"
        ],
        "answer": "In relazione alla teoria del caos, la meccanica quantistica è una teoria del XX secolo rivolta allo studio dell'infinitamente piccolo.",
        "url": "https://www.treccani.it/enciclopedia/entropia_(Enciclopedia-della-Scienza-e-della-Tecnica)/"
    },
    {
        "id": 133,
        "keywords": [
            "relativita generale",
            "infinitamente grande",
            "einstein",
            "quesito 133"
        ],
        "answer": "Nell'ambito della dinamica dei sistemi complessi, la relatività generale descrive la gravità e i fenomeni dell'infinitamente grande.",
        "url": "https://www.treccani.it/enciclopedia/entropia_(Enciclopedia-della-Scienza-e-della-Tecnica)/"
    },
    {
        "id": 134,
        "keywords": [
            "validita newtoniana",
            "fenomeni osservabili",
            "scala macroscopica",
            "quesito 134"
        ],
        "answer": "Dal punto di vista dell'analisi matematica, fino agli anni '60 la meccanica newtoniana rimase un'ottima descrizione dei fenomeni osservabili.",
        "url": "https://www.treccani.it/enciclopedia/entropia_(Enciclopedia-della-Scienza-e-della-Tecnica)/"
    },
    {
        "id": 135,
        "keywords": [
            "caos grecia",
            "significato antico",
            "disordine",
            "quesito 135"
        ],
        "answer": "Secondo la descrizione del capitolo, in antica Grecia il termine caos indicava disordine, confusione, scompiglio e agitazione.",
        "url": "https://www.treccani.it/enciclopedia/caos_(Enciclopedia-del-Novecento)/"
    },
    {
        "id": 136,
        "keywords": [
            "cosmos",
            "ordine",
            "antitesi caos",
            "quesito 136"
        ],
        "answer": "Il termine greco cosmos significa ordine ed era usato in antitesi al termine caos.",
        "url": "https://www.treccani.it/enciclopedia/caos_(Enciclopedia-del-Novecento)/"
    },
    {
        "id": 137,
        "keywords": [
            "limite cognitivo",
            "comprensione",
            "orizzonte oscuro",
            "quesito 137"
        ],
        "answer": "In relazione alla teoria del caos, in termini cognitivi il caos identifica un'incapacità generale di comprensione e un limite visivo.",
        "url": "https://www.treccani.it/enciclopedia/caos_(Enciclopedia-del-Novecento)/"
    },
    {
        "id": 138,
        "keywords": [
            "capovolgimento semantico",
            "scienza contemporanea",
            "caos deterministico",
            "quesito 138"
        ],
        "answer": "Nell'ambito della dinamica dei sistemi complessi, la scienza contemporanea ha ribaltato la semantica del caos riferendolo a dinamiche deterministiche non analitiche.",
        "url": "https://www.treccani.it/enciclopedia/caos_(Enciclopedia-del-Novecento)/"
    },
    {
        "id": 139,
        "keywords": [
            "settori del caos",
            "fenomeni sociali",
            "economia",
            "quesito 139"
        ],
        "answer": "Dal punto di vista dell'analisi matematica, la teoria del caos analizza fenomeni imprevedibili in ambito fisico, economico, sociale e comportamentale.",
        "url": "https://www.treccani.it/enciclopedia/caos_(Enciclopedia-del-Novecento)/"
    },
    {
        "id": 140,
        "keywords": [
            "edward lorenz",
            "mit cambridge",
            "meteorologia",
            "quesito 140"
        ],
        "answer": "Secondo la descrizione del capitolo, edward H. Lorenz era un meteorologo del MIT di Cambridge che sviluppò modelli matematici per il meteo.",
        "url": "https://www.treccani.it/enciclopedia/attrattore-di-lorenz_(Enciclopedia-della-Matematica)/"
    },
    {
        "id": 141,
        "keywords": [
            "equazioni differenziali",
            "tre equazioni",
            "non linearita",
            "quesito 141"
        ],
        "answer": "Il modello atmosferico di Lorenz era basato su tre equazioni differenziali ordinarie non lineari.",
        "url": "https://www.treccani.it/enciclopedia/attrattore-di-lorenz_(Enciclopedia-della-Matematica)/"
    },
    {
        "id": 142,
        "keywords": [
            "integrazione numerica",
            "computer lorenz",
            "anni 60",
            "quesito 142"
        ],
        "answer": "In relazione alla teoria del caos, lorenz utilizzò il computer per integrare numericamente equazioni non lineari prive di soluzione analitica.",
        "url": "https://www.treccani.it/enciclopedia/attrattore-di-lorenz_(Enciclopedia-della-Matematica)/"
    },
    {
        "id": 143,
        "keywords": [
            "analisi numerica",
            "processi iterativi",
            "algoritmi",
            "quesito 143"
        ],
        "answer": "Nell'ambito della dinamica dei sistemi complessi, l'analisi numerica sviluppa algoritmi e metodi iterativi per approssimare problemi matematici complessi.",
        "url": "https://www.treccani.it/enciclopedia/attrattore-di-lorenz_(Enciclopedia-della-Matematica)/"
    },
    {
        "id": 144,
        "keywords": [
            "arrotondamento decimali",
            "da 6 a 3 cifre",
            "scarto minimo",
            "quesito 144"
        ],
        "answer": "Dal punto di vista dell'analisi matematica, replicando una simulazione, Lorenz approssimò i dati da sei a tre cifre decimali alterando i risultati.",
        "url": "https://www.treccani.it/enciclopedia/attrattore-di-lorenz_(Enciclopedia-della-Matematica)/"
    },
    {
        "id": 145,
        "keywords": [
            "risultati divergenti",
            "esplosione dell'errore",
            "ordini di grandezza",
            "quesito 145"
        ],
        "answer": "Secondo la descrizione del capitolo, l'approssimazione decimale generò previsioni divergenti per vari ordini di grandezza.",
        "url": "https://www.treccani.it/enciclopedia/attrattore-di-lorenz_(Enciclopedia-della-Matematica)/"
    },
    {
        "id": 146,
        "keywords": [
            "riduzionismo newtoniano",
            "scala di grandezza",
            "dettagli trascurabili",
            "quesito 146"
        ],
        "answer": "Il riduzionismo newtoniano assume che i fenomeni su scala inferiore abbiano effetti trascurabili.",
        "url": "https://www.treccani.it/enciclopedia/attrattore-di-lorenz_(Enciclopedia-della-Matematica)/"
    },
    {
        "id": 147,
        "keywords": [
            "margine d'errore",
            "errore sperimentale",
            "propagazione",
            "quesito 147"
        ],
        "answer": "In relazione alla teoria del caos, nel modello newtoniano l'errore è controllabile, mentre nei sistemi caotici si propaga esplosivamente.",
        "url": "https://www.treccani.it/enciclopedia/attrattore-di-lorenz_(Enciclopedia-della-Matematica)/"
    },
    {
        "id": 148,
        "keywords": [
            "dipendenza sensibile",
            "condizioni iniziali",
            "limite previsioni",
            "quesito 148"
        ],
        "answer": "Nell'ambito della dinamica dei sistemi complessi, la dipendenza sensibile dalle condizioni iniziali rende impossibile la previsione a lungo termine.",
        "url": "https://www.treccani.it/enciclopedia/attrattore-di-lorenz_(Enciclopedia-della-Matematica)/"
    },
    {
        "id": 149,
        "keywords": [
            "effetto farfalla",
            "metafora brasiliana",
            "tifone florida",
            "quesito 149"
        ],
        "answer": "Dal punto di vista dell'analisi matematica, l'effetto farfalla esprime l'idea che il battito d'ali di una farfalla in Brasile produca un tifone in Florida.",
        "url": "https://www.treccani.it/enciclopedia/attrattore-di-lorenz_(Enciclopedia-della-Matematica)/"
    },
    {
        "id": 150,
        "keywords": [
            "conferenza aaas 1979",
            "uragano texas",
            "relazione lorenz",
            "quesito 150"
        ],
        "answer": "Secondo la descrizione del capitolo, nel 1979 alla conferenza AAAS gli allievi di Lorenz diffusero la metafora dell'uragano nel Texas.",
        "url": "https://www.treccani.it/enciclopedia/attrattore-di-lorenz_(Enciclopedia-della-Matematica)/"
    },
    {
        "id": 151,
        "keywords": [
            "cinema e cultura",
            "jurassic park",
            "sliding doors",
            "quesito 151"
        ],
        "answer": "L'effetto farfalla è citato in film celebri tra cui Jurassic Park, Sliding Doors e The Oxford Murders.",
        "url": "https://www.treccani.it/enciclopedia/attrattore-di-lorenz_(Enciclopedia-della-Matematica)/"
    },
    {
        "id": 152,
        "keywords": [
            "sistema dinamico",
            "variabili nel tempo",
            "spazio astratto",
            "quesito 152"
        ],
        "answer": "In relazione alla teoria del caos, un sistema dinamico è rappresentato da una serie di grandezze che variano nel tempo.",
        "url": "https://www.liceopalmieri.edu.it/LaboratorioStem/Attrattori/"
    },
    {
        "id": 153,
        "keywords": [
            "spazio delle fasi",
            "dimensioni",
            "traiettoria",
            "quesito 153"
        ],
        "answer": "Nell'ambito della dinamica dei sistemi complessi, lo spazio delle fasi ha una dimensione pari al numero di variabili libere del sistema dinamico.",
        "url": "https://www.liceopalmieri.edu.it/LaboratorioStem/Attrattori/"
    },
    {
        "id": 154,
        "keywords": [
            "piano delle fasi",
            "pendolo semplice",
            "due dimensioni",
            "quesito 154"
        ],
        "answer": "Dal punto di vista dell'analisi matematica, il pendolo semplice è descritto in un piano delle fasi bidimensionale (angolo e velocità).",
        "url": "https://www.liceopalmieri.edu.it/LaboratorioStem/Attrattori/"
    },
    {
        "id": 155,
        "keywords": [
            "doppio pendolo",
            "quattro dimensioni",
            "iperspazio",
            "quesito 155"
        ],
        "answer": "Secondo la descrizione del capitolo, il doppio pendolo necessita di uno spazio delle fasi a quattro dimensioni per rappresentare le sue orbite.",
        "url": "https://www.liceopalmieri.edu.it/LaboratorioStem/Attrattori/"
    },
    {
        "id": 156,
        "keywords": [
            "punto fisso",
            "attrattore punto",
            "attrito",
            "quesito 156"
        ],
        "answer": "Il punto fisso è un attrattore che stabilizza il sistema dinamico in uno stato di equilibrio stazionario.",
        "url": "https://www.liceopalmieri.edu.it/LaboratorioStem/Attrattori/"
    },
    {
        "id": 157,
        "keywords": [
            "ciclo limite",
            "circuito van der pol",
            "oscillatore",
            "quesito 157"
        ],
        "answer": "In relazione alla teoria del caos, un ciclo limite è un attrattore rappresentato da una curva chiusa percorsa in modo periodico.",
        "url": "https://www.liceopalmieri.edu.it/LaboratorioStem/Attrattori/"
    },
    {
        "id": 158,
        "keywords": [
            "attrattore strano",
            "definizione",
            "volume finito",
            "quesito 158"
        ],
        "answer": "Nell'ambito della dinamica dei sistemi complessi, l'attrattore strano è una regione finita dello spazio delle fasi in cui le traiettorie non si intersecano mai.",
        "url": "https://www.liceopalmieri.edu.it/LaboratorioStem/Attrattori/"
    },
    {
        "id": 159,
        "keywords": [
            "farfalla di lorenz",
            "ali sfasate",
            "corpo centrale",
            "quesito 159"
        ],
        "answer": "Dal punto di vista dell'analisi matematica, l'attrattore di Lorenz ha la forma caratteristica di una farfalla con due ali disposte su piani sfasati.",
        "url": "https://www.liceopalmieri.edu.it/LaboratorioStem/Attrattori/"
    },
    {
        "id": 160,
        "keywords": [
            "discretizzazione",
            "rappresentazione a punti",
            "passo temporale",
            "quesito 160"
        ],
        "answer": "Secondo la descrizione del capitolo, in simulazione informatica l'attrattore appare come una sequenza discreta di punti nel tempo.",
        "url": "https://www.liceopalmieri.edu.it/LaboratorioStem/Attrattori/"
    },
    {
        "id": 161,
        "keywords": [
            "attrattore toro",
            "quasi periodicita",
            "struttura toroidale",
            "quesito 161"
        ],
        "answer": "L'attrattore a toro descrive un comportamento quasi periodico con complessità intermedia tra ciclo e caos.",
        "url": "https://www.liceopalmieri.edu.it/LaboratorioStem/Attrattori/"
    },
    {
        "id": 162,
        "keywords": [
            "circuito di chua",
            "componenti passivi",
            "diodo non lineare",
            "quesito 162"
        ],
        "answer": "In relazione alla teoria del caos, il circuito di Chua è un circuito elettronico composto da resistenze, capacità, induttanza e un diodo non lineare.",
        "url": "https://www.treccani.it/enciclopedia/caos_(Enciclopedia-del-Novecento)/"
    },
    {
        "id": 163,
        "keywords": [
            "doppio scroll",
            "double scroll",
            "chua attrattore",
            "quesito 163"
        ],
        "answer": "Nell'ambito della dinamica dei sistemi complessi, il Doppio Scroll è l'attrattore strano più celebre prodotto dal circuito elettronico di Chua.",
        "url": "https://www.treccani.it/enciclopedia/caos_(Enciclopedia-del-Novecento)/"
    },
    {
        "id": 164,
        "keywords": [
            "spirale di chua",
            "resistenza parametro",
            "transizione",
            "quesito 164"
        ],
        "answer": "Dal punto di vista dell'analisi matematica, aumentando la resistenza nel circuito di Chua, l'attrattore passa dal doppio scroll alla spirale.",
        "url": "https://www.treccani.it/enciclopedia/caos_(Enciclopedia-del-Novecento)/"
    },
    {
        "id": 165,
        "keywords": [
            "strada verso il caos",
            "percorso sequenziale",
            "ordine caos",
            "quesito 165"
        ],
        "answer": "Secondo la descrizione del capitolo, la strada verso il caos descrive la transizione dall'ordine stazionario al caos deterministico.",
        "url": "https://www.treccani.it/enciclopedia/caos_(Enciclopedia-del-Novecento)/"
    },
    {
        "id": 166,
        "keywords": [
            "saturazione",
            "orizzonte fisico",
            "massimo energetico",
            "quesito 166"
        ],
        "answer": "La saturazione rappresenta il massimo livello di energia del sistema e si manifesta come ciclo limite.",
        "url": "https://www.treccani.it/enciclopedia/caos_(Enciclopedia-del-Novecento)/"
    },
    {
        "id": 167,
        "keywords": [
            "biforcazione",
            "parametro di controllo",
            "cambiamento qualitativo",
            "quesito 167"
        ],
        "answer": "In relazione alla teoria del caos, una biforcazione si verifica quando il comportamento del sistema cambia radicalmente al variare del parametro.",
        "url": "https://www.treccani.it/enciclopedia/caos_(Enciclopedia-del-Novecento)/"
    },
    {
        "id": 168,
        "keywords": [
            "biforcazione di hopf",
            "raddoppio del periodo",
            "cascata",
            "quesito 168"
        ],
        "answer": "Nell'ambito della dinamica dei sistemi complessi, la biforcazione di Hopf comporta il raddoppio del periodo delle oscillazioni lungo una cascata infinita.",
        "url": "https://www.treccani.it/enciclopedia/caos_(Enciclopedia-del-Novecento)/"
    },
    {
        "id": 169,
        "keywords": [
            "costante di feigenbaum",
            "mitchell feigenbaum",
            "1975",
            "quesito 169"
        ],
        "answer": "Dal punto di vista dell'analisi matematica, la costante di Feigenbaum (4.6692) descrive la convergenza universale delle biforcazioni caotiche.",
        "url": "https://www.treccani.it/enciclopedia/caos_(Enciclopedia-del-Novecento)/"
    },
    {
        "id": 170,
        "keywords": [
            "mappa logistica",
            "popolazione discreta",
            "modello feigenbaum",
            "quesito 170"
        ],
        "answer": "Secondo la descrizione del capitolo, la mappa logistica è un modello popolazionale discreto che mostra il raddoppio del periodo.",
        "url": "https://www.treccani.it/enciclopedia/caos_(Enciclopedia-del-Novecento)/"
    },
    {
        "id": 171,
        "keywords": [
            "diagramma di biforcazione",
            "soglia 1.16 kohm",
            "chua diagramma",
            "quesito 171"
        ],
        "answer": "Nel circuito di Chua la transizione da punto fisso a ciclo limite avviene per R = 1,16 kΩ.",
        "url": "https://www.treccani.it/enciclopedia/caos_(Enciclopedia-del-Novecento)/"
    },
    {
        "id": 172,
        "keywords": [
            "frattali",
            "etimologia fractus",
            "geometria non euclidea",
            "quesito 172"
        ],
        "answer": "In relazione alla teoria del caos, il termine frattale fu coniato da Mandelbrot nel 1975 dal latino fractus per definire forme discontinue.",
        "url": "https://www.treccani.it/enciclopedia/caos_(Enciclopedia-del-Novecento)/"
    },
    {
        "id": 173,
        "keywords": [
            "fiocco di neve di koch",
            "costruzione iterativa",
            "perimetro infinito",
            "quesito 173"
        ],
        "answer": "Nell'ambito della dinamica dei sistemi complessi, il fiocco di neve di Koch è un frattale con perimetro di lunghezza infinita in una superficie finita.",
        "url": "https://www.treccani.it/enciclopedia/caos_(Enciclopedia-del-Novecento)/"
    },
    {
        "id": 174,
        "keywords": [
            "triangolo di sierpinski",
            "ricorsione",
            "dimensione frattale",
            "quesito 174"
        ],
        "answer": "Dal punto di vista dell'analisi matematica, il triangolo di Sierpinski è una figura frattale ottenuta rimuovendo i sotto-triangoli centrali.",
        "url": "https://www.treccani.it/enciclopedia/caos_(Enciclopedia-del-Novecento)/"
    },
    {
        "id": 175,
        "keywords": [
            "benoit mandelbrot",
            "geometria della natura",
            "inadeguatezza euclidea",
            "quesito 175"
        ],
        "answer": "Secondo la descrizione del capitolo, mandelbrot dimostrò che la geometria euclidea non è adatta a descrivere nuvole, montagne e coste.",
        "url": "https://www.treccani.it/enciclopedia/caos_(Enciclopedia-del-Novecento)/"
    },
    {
        "id": 176,
        "keywords": [
            "invarianza di scala",
            "auto-similarita",
            "struttura ricorsiva",
            "quesito 176"
        ],
        "answer": "L'auto-similarità implica che ingrandendo un dettaglio di un frattale si ritrova la figura intera.",
        "url": "https://www.treccani.it/enciclopedia/caos_(Enciclopedia-del-Novecento)/"
    },
    {
        "id": 177,
        "keywords": [
            "cavolfiore frattale",
            "montagna",
            "scogliera",
            "quesito 177"
        ],
        "answer": "In relazione alla teoria del caos, esempi naturali di frattali sono i cavolfiori, i profili montuosi e la struttura delle scogliere.",
        "url": "https://www.treccani.it/enciclopedia/caos_(Enciclopedia-del-Novecento)/"
    },
    {
        "id": 178,
        "keywords": [
            "econofisica",
            "borsa valori",
            "serie temporali",
            "quesito 178"
        ],
        "answer": "Nell'ambito della dinamica dei sistemi complessi, l'econofisica studia le serie temporali dei mercati finanziari sfruttando concetti frattali e caotici.",
        "url": "https://www.treccani.it/enciclopedia/caos_(Enciclopedia-del-Novecento)/"
    },
    {
        "id": 179,
        "keywords": [
            "digital art",
            "arte elettronica",
            "estetica del caos",
            "quesito 179"
        ],
        "answer": "Dal punto di vista dell'analisi matematica, la bellezza degli attrattori e dei frattali ha ispirato nuove correnti artistiche di Digital Art.",
        "url": "https://www.treccani.it/enciclopedia/caos_(Enciclopedia-del-Novecento)/"
    },
    {
        "id": 180,
        "keywords": [
            "ubiquita del caos",
            "paradigma scientifico",
            "transdisciplinarita",
            "quesito 180"
        ],
        "answer": "Secondo la descrizione del capitolo, l'ubiquità del caos descrive la presenza universale di comportamenti imprevedibili nella natura.",
        "url": "https://www.treccani.it/enciclopedia/caos_(Enciclopedia-del-Novecento)/"
    },
    {
        "id": 181,
        "keywords": [
            "meccanicismo",
            "orologio perfetto",
            "newton",
            "quesito 181"
        ],
        "answer": "Da Newton in poi, la visione dominante rappresentava il mondo come un meccanismo perfetto, analogo a un orologio di precisione.",
        "url": "https://www.treccani.it/enciclopedia/meccanicismo_(Enciclopedia-Italiana)/"
    },
    {
        "id": 182,
        "keywords": [
            "meccanica sperimentale",
            "fine XVII secolo",
            "isaac newton",
            "quesito 182"
        ],
        "answer": "In relazione alla teoria del caos, la meccanica come scienza sperimentale è nata alla fine del XVII secolo con Isaac Newton.",
        "url": "https://www.treccani.it/enciclopedia/meccanicismo_(Enciclopedia-Italiana)/"
    },
    {
        "id": 183,
        "keywords": [
            "eulero",
            "lagrange",
            "laplace",
            "quesito 183"
        ],
        "answer": "Nell'ambito della dinamica dei sistemi complessi, nel XVIII secolo la meccanica classica fu perfezionata dai lavori di Eulero, Lagrange e Laplace.",
        "url": "https://www.treccani.it/enciclopedia/meccanicismo_(Enciclopedia-Italiana)/"
    },
    {
        "id": 184,
        "keywords": [
            "calcolo differenziale",
            "calcolo integrale",
            "leibniz",
            "quesito 184"
        ],
        "answer": "Dal punto di vista dell'analisi matematica, il calcolo differenziale e integrale fu sviluppato contemporaneamente da Newton e Leibniz.",
        "url": "https://www.treccani.it/enciclopedia/meccanicismo_(Enciclopedia-Italiana)/"
    },
    {
        "id": 185,
        "keywords": [
            "meccanica celeste",
            "leggi di newton",
            "evidenze sperimentali",
            "quesito 185"
        ],
        "answer": "Secondo la descrizione del capitolo, la meccanica celeste fornì un quadro teorico unificante supportato da evidenze sperimentali.",
        "url": "https://www.treccani.it/enciclopedia/meccanicismo_(Enciclopedia-Italiana)/"
    },
    {
        "id": 186,
        "keywords": [
            "determinismo causale",
            "causalita",
            "catena di eventi",
            "quesito 186"
        ],
        "answer": "Il determinismo causale stabilisce che ogni evento accada all'interno di una catena causale.",
        "url": "https://www.treccani.it/enciclopedia/meccanicismo_(Enciclopedia-Italiana)/"
    },
    {
        "id": 187,
        "keywords": [
            "configurazioni iniziali",
            "previsione teorica",
            "stato futuro",
            "quesito 187"
        ],
        "answer": "In relazione alla teoria del caos, conoscendo cause e configurazioni iniziali, il determinismo teorizza la previsione degli eventi futuri.",
        "url": "https://www.treccani.it/enciclopedia/meccanicismo_(Enciclopedia-Italiana)/"
    },
    {
        "id": 188,
        "keywords": [
            "laplace",
            "demone di laplace",
            "determinismo assoluto",
            "quesito 188"
        ],
        "answer": "Nell'ambito della dinamica dei sistemi complessi, laplace concepiva il determinismo come la capacità di calcolare con precisione lo stato futuro conoscendo lo stato attuale.",
        "url": "https://www.treccani.it/enciclopedia/meccanicismo_(Enciclopedia-Italiana)/"
    },
    {
        "id": 189,
        "keywords": [
            "darwin",
            "evoluzione",
            "XIX secolo",
            "quesito 189"
        ],
        "answer": "Dal punto di vista dell'analisi matematica, nel XIX secolo gli studi di Darwin sull'evoluzione misero in discussione il riduzionismo meccanicista.",
        "url": "https://www.treccani.it/enciclopedia/entropia_(Enciclopedia-della-Scienza-e-della-Tecnica)/"
    },
    {
        "id": 190,
        "keywords": [
            "termodinamica",
            "entropia",
            "irreversibilita",
            "quesito 190"
        ],
        "answer": "Secondo la descrizione del capitolo, l'introduzione dell'entropia e dell'irreversibilità evidenziò i limiti della spiegazione meccanicista.",
        "url": "https://www.treccani.it/enciclopedia/entropia_(Enciclopedia-della-Scienza-e-della-Tecnica)/"
    },
    {
        "id": 191,
        "keywords": [
            "trasformazioni di energia",
            "fenomeni biologici",
            "limiti newtoniani",
            "quesito 191"
        ],
        "answer": "La termodinamica dimostrò che la meccanica classica era deficitaria nei fenomeni legati alla vita.",
        "url": "https://www.treccani.it/enciclopedia/entropia_(Enciclopedia-della-Scienza-e-della-Tecnica)/"
    },
    {
        "id": 192,
        "keywords": [
            "meccanica quantistica",
            "infinitamente piccolo",
            "XX secolo",
            "quesito 192"
        ],
        "answer": "In relazione alla teoria del caos, la meccanica quantistica è una teoria del XX secolo rivolta allo studio dell'infinitamente piccolo.",
        "url": "https://www.treccani.it/enciclopedia/entropia_(Enciclopedia-della-Scienza-e-della-Tecnica)/"
    },
    {
        "id": 193,
        "keywords": [
            "relativita generale",
            "infinitamente grande",
            "einstein",
            "quesito 193"
        ],
        "answer": "Nell'ambito della dinamica dei sistemi complessi, la relatività generale descrive la gravità e i fenomeni dell'infinitamente grande.",
        "url": "https://www.treccani.it/enciclopedia/entropia_(Enciclopedia-della-Scienza-e-della-Tecnica)/"
    },
    {
        "id": 194,
        "keywords": [
            "validita newtoniana",
            "fenomeni osservabili",
            "scala macroscopica",
            "quesito 194"
        ],
        "answer": "Dal punto di vista dell'analisi matematica, fino agli anni '60 la meccanica newtoniana rimase un'ottima descrizione dei fenomeni osservabili.",
        "url": "https://www.treccani.it/enciclopedia/entropia_(Enciclopedia-della-Scienza-e-della-Tecnica)/"
    },
    {
        "id": 195,
        "keywords": [
            "caos grecia",
            "significato antico",
            "disordine",
            "quesito 195"
        ],
        "answer": "Secondo la descrizione del capitolo, in antica Grecia il termine caos indicava disordine, confusione, scompiglio e agitazione.",
        "url": "https://www.treccani.it/enciclopedia/caos_(Enciclopedia-del-Novecento)/"
    },
    {
        "id": 196,
        "keywords": [
            "cosmos",
            "ordine",
            "antitesi caos",
            "quesito 196"
        ],
        "answer": "Il termine greco cosmos significa ordine ed era usato in antitesi al termine caos.",
        "url": "https://www.treccani.it/enciclopedia/caos_(Enciclopedia-del-Novecento)/"
    },
    {
        "id": 197,
        "keywords": [
            "limite cognitivo",
            "comprensione",
            "orizzonte oscuro",
            "quesito 197"
        ],
        "answer": "In relazione alla teoria del caos, in termini cognitivi il caos identifica un'incapacità generale di comprensione e un limite visivo.",
        "url": "https://www.treccani.it/enciclopedia/caos_(Enciclopedia-del-Novecento)/"
    },
    {
        "id": 198,
        "keywords": [
            "capovolgimento semantico",
            "scienza contemporanea",
            "caos deterministico",
            "quesito 198"
        ],
        "answer": "Nell'ambito della dinamica dei sistemi complessi, la scienza contemporanea ha ribaltato la semantica del caos riferendolo a dinamiche deterministiche non analitiche.",
        "url": "https://www.treccani.it/enciclopedia/caos_(Enciclopedia-del-Novecento)/"
    },
    {
        "id": 199,
        "keywords": [
            "settori del caos",
            "fenomeni sociali",
            "economia",
            "quesito 199"
        ],
        "answer": "Dal punto di vista dell'analisi matematica, la teoria del caos analizza fenomeni imprevedibili in ambito fisico, economico, sociale e comportamentale.",
        "url": "https://www.treccani.it/enciclopedia/caos_(Enciclopedia-del-Novecento)/"
    },
    {
        "id": 200,
        "keywords": [
            "edward lorenz",
            "mit cambridge",
            "meteorologia",
            "quesito 200"
        ],
        "answer": "Secondo la descrizione del capitolo, edward H. Lorenz era un meteorologo del MIT di Cambridge che sviluppò modelli matematici per il meteo.",
        "url": "https://www.treccani.it/enciclopedia/attrattore-di-lorenz_(Enciclopedia-della-Matematica)/"
    },
    {
        "id": 201,
        "keywords": [
            "equazioni differenziali",
            "tre equazioni",
            "non linearita",
            "quesito 201"
        ],
        "answer": "Il modello atmosferico di Lorenz era basato su tre equazioni differenziali ordinarie non lineari.",
        "url": "https://www.treccani.it/enciclopedia/attrattore-di-lorenz_(Enciclopedia-della-Matematica)/"
    },
    {
        "id": 202,
        "keywords": [
            "integrazione numerica",
            "computer lorenz",
            "anni 60",
            "quesito 202"
        ],
        "answer": "In relazione alla teoria del caos, lorenz utilizzò il computer per integrare numericamente equazioni non lineari prive di soluzione analitica.",
        "url": "https://www.treccani.it/enciclopedia/attrattore-di-lorenz_(Enciclopedia-della-Matematica)/"
    },
    {
        "id": 203,
        "keywords": [
            "analisi numerica",
            "processi iterativi",
            "algoritmi",
            "quesito 203"
        ],
        "answer": "Nell'ambito della dinamica dei sistemi complessi, l'analisi numerica sviluppa algoritmi e metodi iterativi per approssimare problemi matematici complessi.",
        "url": "https://www.treccani.it/enciclopedia/attrattore-di-lorenz_(Enciclopedia-della-Matematica)/"
    },
    {
        "id": 204,
        "keywords": [
            "arrotondamento decimali",
            "da 6 a 3 cifre",
            "scarto minimo",
            "quesito 204"
        ],
        "answer": "Dal punto di vista dell'analisi matematica, replicando una simulazione, Lorenz approssimò i dati da sei a tre cifre decimali alterando i risultati.",
        "url": "https://www.treccani.it/enciclopedia/attrattore-di-lorenz_(Enciclopedia-della-Matematica)/"
    },
    {
        "id": 205,
        "keywords": [
            "risultati divergenti",
            "esplosione dell'errore",
            "ordini di grandezza",
            "quesito 205"
        ],
        "answer": "Secondo la descrizione del capitolo, l'approssimazione decimale generò previsioni divergenti per vari ordini di grandezza.",
        "url": "https://www.treccani.it/enciclopedia/attrattore-di-lorenz_(Enciclopedia-della-Matematica)/"
    },
    {
        "id": 206,
        "keywords": [
            "riduzionismo newtoniano",
            "scala di grandezza",
            "dettagli trascurabili",
            "quesito 206"
        ],
        "answer": "Il riduzionismo newtoniano assume che i fenomeni su scala inferiore abbiano effetti trascurabili.",
        "url": "https://www.treccani.it/enciclopedia/attrattore-di-lorenz_(Enciclopedia-della-Matematica)/"
    },
    {
        "id": 207,
        "keywords": [
            "margine d'errore",
            "errore sperimentale",
            "propagazione",
            "quesito 207"
        ],
        "answer": "In relazione alla teoria del caos, nel modello newtoniano l'errore è controllabile, mentre nei sistemi caotici si propaga esplosivamente.",
        "url": "https://www.treccani.it/enciclopedia/attrattore-di-lorenz_(Enciclopedia-della-Matematica)/"
    },
    {
        "id": 208,
        "keywords": [
            "dipendenza sensibile",
            "condizioni iniziali",
            "limite previsioni",
            "quesito 208"
        ],
        "answer": "Nell'ambito della dinamica dei sistemi complessi, la dipendenza sensibile dalle condizioni iniziali rende impossibile la previsione a lungo termine.",
        "url": "https://www.treccani.it/enciclopedia/attrattore-di-lorenz_(Enciclopedia-della-Matematica)/"
    },
    {
        "id": 209,
        "keywords": [
            "effetto farfalla",
            "metafora brasiliana",
            "tifone florida",
            "quesito 209"
        ],
        "answer": "Dal punto di vista dell'analisi matematica, l'effetto farfalla esprime l'idea che il battito d'ali di una farfalla in Brasile produca un tifone in Florida.",
        "url": "https://www.treccani.it/enciclopedia/attrattore-di-lorenz_(Enciclopedia-della-Matematica)/"
    },
    {
        "id": 210,
        "keywords": [
            "conferenza aaas 1979",
            "uragano texas",
            "relazione lorenz",
            "quesito 210"
        ],
        "answer": "Secondo la descrizione del capitolo, nel 1979 alla conferenza AAAS gli allievi di Lorenz diffusero la metafora dell'uragano nel Texas.",
        "url": "https://www.treccani.it/enciclopedia/attrattore-di-lorenz_(Enciclopedia-della-Matematica)/"
    },
    {
        "id": 211,
        "keywords": [
            "cinema e cultura",
            "jurassic park",
            "sliding doors",
            "quesito 211"
        ],
        "answer": "L'effetto farfalla è citato in film celebri tra cui Jurassic Park, Sliding Doors e The Oxford Murders.",
        "url": "https://www.treccani.it/enciclopedia/attrattore-di-lorenz_(Enciclopedia-della-Matematica)/"
    },
    {
        "id": 212,
        "keywords": [
            "sistema dinamico",
            "variabili nel tempo",
            "spazio astratto",
            "quesito 212"
        ],
        "answer": "In relazione alla teoria del caos, un sistema dinamico è rappresentato da una serie di grandezze che variano nel tempo.",
        "url": "https://www.liceopalmieri.edu.it/LaboratorioStem/Attrattori/"
    },
    {
        "id": 213,
        "keywords": [
            "spazio delle fasi",
            "dimensioni",
            "traiettoria",
            "quesito 213"
        ],
        "answer": "Nell'ambito della dinamica dei sistemi complessi, lo spazio delle fasi ha una dimensione pari al numero di variabili libere del sistema dinamico.",
        "url": "https://www.liceopalmieri.edu.it/LaboratorioStem/Attrattori/"
    },
    {
        "id": 214,
        "keywords": [
            "piano delle fasi",
            "pendolo semplice",
            "due dimensioni",
            "quesito 214"
        ],
        "answer": "Dal punto di vista dell'analisi matematica, il pendolo semplice è descritto in un piano delle fasi bidimensionale (angolo e velocità).",
        "url": "https://www.liceopalmieri.edu.it/LaboratorioStem/Attrattori/"
    },
    {
        "id": 215,
        "keywords": [
            "doppio pendolo",
            "quattro dimensioni",
            "iperspazio",
            "quesito 215"
        ],
        "answer": "Secondo la descrizione del capitolo, il doppio pendolo necessita di uno spazio delle fasi a quattro dimensioni per rappresentare le sue orbite.",
        "url": "https://www.liceopalmieri.edu.it/LaboratorioStem/Attrattori/"
    },
    {
        "id": 216,
        "keywords": [
            "punto fisso",
            "attrattore punto",
            "attrito",
            "quesito 216"
        ],
        "answer": "Il punto fisso è un attrattore che stabilizza il sistema dinamico in uno stato di equilibrio stazionario.",
        "url": "https://www.liceopalmieri.edu.it/LaboratorioStem/Attrattori/"
    },
    {
        "id": 217,
        "keywords": [
            "ciclo limite",
            "circuito van der pol",
            "oscillatore",
            "quesito 217"
        ],
        "answer": "In relazione alla teoria del caos, un ciclo limite è un attrattore rappresentato da una curva chiusa percorsa in modo periodico.",
        "url": "https://www.liceopalmieri.edu.it/LaboratorioStem/Attrattori/"
    },
    {
        "id": 218,
        "keywords": [
            "attrattore strano",
            "definizione",
            "volume finito",
            "quesito 218"
        ],
        "answer": "Nell'ambito della dinamica dei sistemi complessi, l'attrattore strano è una regione finita dello spazio delle fasi in cui le traiettorie non si intersecano mai.",
        "url": "https://www.liceopalmieri.edu.it/LaboratorioStem/Attrattori/"
    },
    {
        "id": 219,
        "keywords": [
            "farfalla di lorenz",
            "ali sfasate",
            "corpo centrale",
            "quesito 219"
        ],
        "answer": "Dal punto di vista dell'analisi matematica, l'attrattore di Lorenz ha la forma caratteristica di una farfalla con due ali disposte su piani sfasati.",
        "url": "https://www.liceopalmieri.edu.it/LaboratorioStem/Attrattori/"
    },
    {
        "id": 220,
        "keywords": [
            "discretizzazione",
            "rappresentazione a punti",
            "passo temporale",
            "quesito 220"
        ],
        "answer": "Secondo la descrizione del capitolo, in simulazione informatica l'attrattore appare come una sequenza discreta di punti nel tempo.",
        "url": "https://www.liceopalmieri.edu.it/LaboratorioStem/Attrattori/"
    },
    {
        "id": 221,
        "keywords": [
            "attrattore toro",
            "quasi periodicita",
            "struttura toroidale",
            "quesito 221"
        ],
        "answer": "L'attrattore a toro descrive un comportamento quasi periodico con complessità intermedia tra ciclo e caos.",
        "url": "https://www.liceopalmieri.edu.it/LaboratorioStem/Attrattori/"
    },
    {
        "id": 222,
        "keywords": [
            "circuito di chua",
            "componenti passivi",
            "diodo non lineare",
            "quesito 222"
        ],
        "answer": "In relazione alla teoria del caos, il circuito di Chua è un circuito elettronico composto da resistenze, capacità, induttanza e un diodo non lineare.",
        "url": "https://www.treccani.it/enciclopedia/caos_(Enciclopedia-del-Novecento)/"
    },
    {
        "id": 223,
        "keywords": [
            "doppio scroll",
            "double scroll",
            "chua attrattore",
            "quesito 223"
        ],
        "answer": "Nell'ambito della dinamica dei sistemi complessi, il Doppio Scroll è l'attrattore strano più celebre prodotto dal circuito elettronico di Chua.",
        "url": "https://www.treccani.it/enciclopedia/caos_(Enciclopedia-del-Novecento)/"
    },
    {
        "id": 224,
        "keywords": [
            "spirale di chua",
            "resistenza parametro",
            "transizione",
            "quesito 224"
        ],
        "answer": "Dal punto di vista dell'analisi matematica, aumentando la resistenza nel circuito di Chua, l'attrattore passa dal doppio scroll alla spirale.",
        "url": "https://www.treccani.it/enciclopedia/caos_(Enciclopedia-del-Novecento)/"
    },
    {
        "id": 225,
        "keywords": [
            "strada verso il caos",
            "percorso sequenziale",
            "ordine caos",
            "quesito 225"
        ],
        "answer": "Secondo la descrizione del capitolo, la strada verso il caos descrive la transizione dall'ordine stazionario al caos deterministico.",
        "url": "https://www.treccani.it/enciclopedia/caos_(Enciclopedia-del-Novecento)/"
    },
    {
        "id": 226,
        "keywords": [
            "saturazione",
            "orizzonte fisico",
            "massimo energetico",
            "quesito 226"
        ],
        "answer": "La saturazione rappresenta il massimo livello di energia del sistema e si manifesta come ciclo limite.",
        "url": "https://www.treccani.it/enciclopedia/caos_(Enciclopedia-del-Novecento)/"
    },
    {
        "id": 227,
        "keywords": [
            "biforcazione",
            "parametro di controllo",
            "cambiamento qualitativo",
            "quesito 227"
        ],
        "answer": "In relazione alla teoria del caos, una biforcazione si verifica quando il comportamento del sistema cambia radicalmente al variare del parametro.",
        "url": "https://www.treccani.it/enciclopedia/caos_(Enciclopedia-del-Novecento)/"
    },
    {
        "id": 228,
        "keywords": [
            "biforcazione di hopf",
            "raddoppio del periodo",
            "cascata",
            "quesito 228"
        ],
        "answer": "Nell'ambito della dinamica dei sistemi complessi, la biforcazione di Hopf comporta il raddoppio del periodo delle oscillazioni lungo una cascata infinita.",
        "url": "https://www.treccani.it/enciclopedia/caos_(Enciclopedia-del-Novecento)/"
    },
    {
        "id": 229,
        "keywords": [
            "costante di feigenbaum",
            "mitchell feigenbaum",
            "1975",
            "quesito 229"
        ],
        "answer": "Dal punto di vista dell'analisi matematica, la costante di Feigenbaum (4.6692) descrive la convergenza universale delle biforcazioni caotiche.",
        "url": "https://www.treccani.it/enciclopedia/caos_(Enciclopedia-del-Novecento)/"
    },
    {
        "id": 230,
        "keywords": [
            "mappa logistica",
            "popolazione discreta",
            "modello feigenbaum",
            "quesito 230"
        ],
        "answer": "Secondo la descrizione del capitolo, la mappa logistica è un modello popolazionale discreto che mostra il raddoppio del periodo.",
        "url": "https://www.treccani.it/enciclopedia/caos_(Enciclopedia-del-Novecento)/"
    },
    {
        "id": 231,
        "keywords": [
            "diagramma di biforcazione",
            "soglia 1.16 kohm",
            "chua diagramma",
            "quesito 231"
        ],
        "answer": "Nel circuito di Chua la transizione da punto fisso a ciclo limite avviene per R = 1,16 kΩ.",
        "url": "https://www.treccani.it/enciclopedia/caos_(Enciclopedia-del-Novecento)/"
    },
    {
        "id": 232,
        "keywords": [
            "frattali",
            "etimologia fractus",
            "geometria non euclidea",
            "quesito 232"
        ],
        "answer": "In relazione alla teoria del caos, il termine frattale fu coniato da Mandelbrot nel 1975 dal latino fractus per definire forme discontinue.",
        "url": "https://www.treccani.it/enciclopedia/caos_(Enciclopedia-del-Novecento)/"
    },
    {
        "id": 233,
        "keywords": [
            "fiocco di neve di koch",
            "costruzione iterativa",
            "perimetro infinito",
            "quesito 233"
        ],
        "answer": "Nell'ambito della dinamica dei sistemi complessi, il fiocco di neve di Koch è un frattale con perimetro di lunghezza infinita in una superficie finita.",
        "url": "https://www.treccani.it/enciclopedia/caos_(Enciclopedia-del-Novecento)/"
    },
    {
        "id": 234,
        "keywords": [
            "triangolo di sierpinski",
            "ricorsione",
            "dimensione frattale",
            "quesito 234"
        ],
        "answer": "Dal punto di vista dell'analisi matematica, il triangolo di Sierpinski è una figura frattale ottenuta rimuovendo i sotto-triangoli centrali.",
        "url": "https://www.treccani.it/enciclopedia/caos_(Enciclopedia-del-Novecento)/"
    },
    {
        "id": 235,
        "keywords": [
            "benoit mandelbrot",
            "geometria della natura",
            "inadeguatezza euclidea",
            "quesito 235"
        ],
        "answer": "Secondo la descrizione del capitolo, mandelbrot dimostrò che la geometria euclidea non è adatta a descrivere nuvole, montagne e coste.",
        "url": "https://www.treccani.it/enciclopedia/caos_(Enciclopedia-del-Novecento)/"
    },
    {
        "id": 236,
        "keywords": [
            "invarianza di scala",
            "auto-similarita",
            "struttura ricorsiva",
            "quesito 236"
        ],
        "answer": "L'auto-similarità implica che ingrandendo un dettaglio di un frattale si ritrova la figura intera.",
        "url": "https://www.treccani.it/enciclopedia/caos_(Enciclopedia-del-Novecento)/"
    },
    {
        "id": 237,
        "keywords": [
            "cavolfiore frattale",
            "montagna",
            "scogliera",
            "quesito 237"
        ],
        "answer": "In relazione alla teoria del caos, esempi naturali di frattali sono i cavolfiori, i profili montuosi e la struttura delle scogliere.",
        "url": "https://www.treccani.it/enciclopedia/caos_(Enciclopedia-del-Novecento)/"
    },
    {
        "id": 238,
        "keywords": [
            "econofisica",
            "borsa valori",
            "serie temporali",
            "quesito 238"
        ],
        "answer": "Nell'ambito della dinamica dei sistemi complessi, l'econofisica studia le serie temporali dei mercati finanziari sfruttando concetti frattali e caotici.",
        "url": "https://www.treccani.it/enciclopedia/caos_(Enciclopedia-del-Novecento)/"
    },
    {
        "id": 239,
        "keywords": [
            "digital art",
            "arte elettronica",
            "estetica del caos",
            "quesito 239"
        ],
        "answer": "Dal punto di vista dell'analisi matematica, la bellezza degli attrattori e dei frattali ha ispirato nuove correnti artistiche di Digital Art.",
        "url": "https://www.treccani.it/enciclopedia/caos_(Enciclopedia-del-Novecento)/"
    },
    {
        "id": 240,
        "keywords": [
            "ubiquita del caos",
            "paradigma scientifico",
            "transdisciplinarita",
            "quesito 240"
        ],
        "answer": "Secondo la descrizione del capitolo, l'ubiquità del caos descrive la presenza universale di comportamenti imprevedibili nella natura.",
        "url": "https://www.treccani.it/enciclopedia/caos_(Enciclopedia-del-Novecento)/"
    },
    {
        "id": 241,
        "keywords": [
            "meccanicismo",
            "orologio perfetto",
            "newton",
            "quesito 241"
        ],
        "answer": "Da Newton in poi, la visione dominante rappresentava il mondo come un meccanismo perfetto, analogo a un orologio di precisione.",
        "url": "https://www.treccani.it/enciclopedia/meccanicismo_(Enciclopedia-Italiana)/"
    },
    {
        "id": 242,
        "keywords": [
            "meccanica sperimentale",
            "fine XVII secolo",
            "isaac newton",
            "quesito 242"
        ],
        "answer": "In relazione alla teoria del caos, la meccanica come scienza sperimentale è nata alla fine del XVII secolo con Isaac Newton.",
        "url": "https://www.treccani.it/enciclopedia/meccanicismo_(Enciclopedia-Italiana)/"
    },
    {
        "id": 243,
        "keywords": [
            "eulero",
            "lagrange",
            "laplace",
            "quesito 243"
        ],
        "answer": "Nell'ambito della dinamica dei sistemi complessi, nel XVIII secolo la meccanica classica fu perfezionata dai lavori di Eulero, Lagrange e Laplace.",
        "url": "https://www.treccani.it/enciclopedia/meccanicismo_(Enciclopedia-Italiana)/"
    },
    {
        "id": 244,
        "keywords": [
            "calcolo differenziale",
            "calcolo integrale",
            "leibniz",
            "quesito 244"
        ],
        "answer": "Dal punto di vista dell'analisi matematica, il calcolo differenziale e integrale fu sviluppato contemporaneamente da Newton e Leibniz.",
        "url": "https://www.treccani.it/enciclopedia/meccanicismo_(Enciclopedia-Italiana)/"
    },
    {
        "id": 245,
        "keywords": [
            "meccanica celeste",
            "leggi di newton",
            "evidenze sperimentali",
            "quesito 245"
        ],
        "answer": "Secondo la descrizione del capitolo, la meccanica celeste fornì un quadro teorico unificante supportato da evidenze sperimentali.",
        "url": "https://www.treccani.it/enciclopedia/meccanicismo_(Enciclopedia-Italiana)/"
    },
    {
        "id": 246,
        "keywords": [
            "determinismo causale",
            "causalita",
            "catena di eventi",
            "quesito 246"
        ],
        "answer": "Il determinismo causale stabilisce che ogni evento accada all'interno di una catena causale.",
        "url": "https://www.treccani.it/enciclopedia/meccanicismo_(Enciclopedia-Italiana)/"
    },
    {
        "id": 247,
        "keywords": [
            "configurazioni iniziali",
            "previsione teorica",
            "stato futuro",
            "quesito 247"
        ],
        "answer": "In relazione alla teoria del caos, conoscendo cause e configurazioni iniziali, il determinismo teorizza la previsione degli eventi futuri.",
        "url": "https://www.treccani.it/enciclopedia/meccanicismo_(Enciclopedia-Italiana)/"
    },
    {
        "id": 248,
        "keywords": [
            "laplace",
            "demone di laplace",
            "determinismo assoluto",
            "quesito 248"
        ],
        "answer": "Nell'ambito della dinamica dei sistemi complessi, laplace concepiva il determinismo come la capacità di calcolare con precisione lo stato futuro conoscendo lo stato attuale.",
        "url": "https://www.treccani.it/enciclopedia/meccanicismo_(Enciclopedia-Italiana)/"
    },
    {
        "id": 249,
        "keywords": [
            "darwin",
            "evoluzione",
            "XIX secolo",
            "quesito 249"
        ],
        "answer": "Dal punto di vista dell'analisi matematica, nel XIX secolo gli studi di Darwin sull'evoluzione misero in discussione il riduzionismo meccanicista.",
        "url": "https://www.treccani.it/enciclopedia/entropia_(Enciclopedia-della-Scienza-e-della-Tecnica)/"
    },
    {
        "id": 250,
        "keywords": [
            "termodinamica",
            "entropia",
            "irreversibilita",
            "quesito 250"
        ],
        "answer": "Secondo la descrizione del capitolo, l'introduzione dell'entropia e dell'irreversibilità evidenziò i limiti della spiegazione meccanicista.",
        "url": "https://www.treccani.it/enciclopedia/entropia_(Enciclopedia-della-Scienza-e-della-Tecnica)/"
    },
    {
        "id": 251,
        "keywords": [
            "trasformazioni di energia",
            "fenomeni biologici",
            "limiti newtoniani",
            "quesito 251"
        ],
        "answer": "La termodinamica dimostrò che la meccanica classica era deficitaria nei fenomeni legati alla vita.",
        "url": "https://www.treccani.it/enciclopedia/entropia_(Enciclopedia-della-Scienza-e-della-Tecnica)/"
    },
    {
        "id": 252,
        "keywords": [
            "meccanica quantistica",
            "infinitamente piccolo",
            "XX secolo",
            "quesito 252"
        ],
        "answer": "In relazione alla teoria del caos, la meccanica quantistica è una teoria del XX secolo rivolta allo studio dell'infinitamente piccolo.",
        "url": "https://www.treccani.it/enciclopedia/entropia_(Enciclopedia-della-Scienza-e-della-Tecnica)/"
    },
    {
        "id": 253,
        "keywords": [
            "relativita generale",
            "infinitamente grande",
            "einstein",
            "quesito 253"
        ],
        "answer": "Nell'ambito della dinamica dei sistemi complessi, la relatività generale descrive la gravità e i fenomeni dell'infinitamente grande.",
        "url": "https://www.treccani.it/enciclopedia/entropia_(Enciclopedia-della-Scienza-e-della-Tecnica)/"
    },
    {
        "id": 254,
        "keywords": [
            "validita newtoniana",
            "fenomeni osservabili",
            "scala macroscopica",
            "quesito 254"
        ],
        "answer": "Dal punto di vista dell'analisi matematica, fino agli anni '60 la meccanica newtoniana rimase un'ottima descrizione dei fenomeni osservabili.",
        "url": "https://www.treccani.it/enciclopedia/entropia_(Enciclopedia-della-Scienza-e-della-Tecnica)/"
    },
    {
        "id": 255,
        "keywords": [
            "caos grecia",
            "significato antico",
            "disordine",
            "quesito 255"
        ],
        "answer": "Secondo la descrizione del capitolo, in antica Grecia il termine caos indicava disordine, confusione, scompiglio e agitazione.",
        "url": "https://www.treccani.it/enciclopedia/caos_(Enciclopedia-del-Novecento)/"
    },
    {
        "id": 256,
        "keywords": [
            "cosmos",
            "ordine",
            "antitesi caos",
            "quesito 256"
        ],
        "answer": "Il termine greco cosmos significa ordine ed era usato in antitesi al termine caos.",
        "url": "https://www.treccani.it/enciclopedia/caos_(Enciclopedia-del-Novecento)/"
    },
    {
        "id": 257,
        "keywords": [
            "limite cognitivo",
            "comprensione",
            "orizzonte oscuro",
            "quesito 257"
        ],
        "answer": "In relazione alla teoria del caos, in termini cognitivi il caos identifica un'incapacità generale di comprensione e un limite visivo.",
        "url": "https://www.treccani.it/enciclopedia/caos_(Enciclopedia-del-Novecento)/"
    },
    {
        "id": 258,
        "keywords": [
            "capovolgimento semantico",
            "scienza contemporanea",
            "caos deterministico",
            "quesito 258"
        ],
        "answer": "Nell'ambito della dinamica dei sistemi complessi, la scienza contemporanea ha ribaltato la semantica del caos riferendolo a dinamiche deterministiche non analitiche.",
        "url": "https://www.treccani.it/enciclopedia/caos_(Enciclopedia-del-Novecento)/"
    },
    {
        "id": 259,
        "keywords": [
            "settori del caos",
            "fenomeni sociali",
            "economia",
            "quesito 259"
        ],
        "answer": "Dal punto di vista dell'analisi matematica, la teoria del caos analizza fenomeni imprevedibili in ambito fisico, economico, sociale e comportamentale.",
        "url": "https://www.treccani.it/enciclopedia/caos_(Enciclopedia-del-Novecento)/"
    },
    {
        "id": 260,
        "keywords": [
            "edward lorenz",
            "mit cambridge",
            "meteorologia",
            "quesito 260"
        ],
        "answer": "Secondo la descrizione del capitolo, edward H. Lorenz era un meteorologo del MIT di Cambridge che sviluppò modelli matematici per il meteo.",
        "url": "https://www.treccani.it/enciclopedia/attrattore-di-lorenz_(Enciclopedia-della-Matematica)/"
    },
    {
        "id": 261,
        "keywords": [
            "equazioni differenziali",
            "tre equazioni",
            "non linearita",
            "quesito 261"
        ],
        "answer": "Il modello atmosferico di Lorenz era basato su tre equazioni differenziali ordinarie non lineari.",
        "url": "https://www.treccani.it/enciclopedia/attrattore-di-lorenz_(Enciclopedia-della-Matematica)/"
    },
    {
        "id": 262,
        "keywords": [
            "integrazione numerica",
            "computer lorenz",
            "anni 60",
            "quesito 262"
        ],
        "answer": "In relazione alla teoria del caos, lorenz utilizzò il computer per integrare numericamente equazioni non lineari prive di soluzione analitica.",
        "url": "https://www.treccani.it/enciclopedia/attrattore-di-lorenz_(Enciclopedia-della-Matematica)/"
    },
    {
        "id": 263,
        "keywords": [
            "analisi numerica",
            "processi iterativi",
            "algoritmi",
            "quesito 263"
        ],
        "answer": "Nell'ambito della dinamica dei sistemi complessi, l'analisi numerica sviluppa algoritmi e metodi iterativi per approssimare problemi matematici complessi.",
        "url": "https://www.treccani.it/enciclopedia/attrattore-di-lorenz_(Enciclopedia-della-Matematica)/"
    },
    {
        "id": 264,
        "keywords": [
            "arrotondamento decimali",
            "da 6 a 3 cifre",
            "scarto minimo",
            "quesito 264"
        ],
        "answer": "Dal punto di vista dell'analisi matematica, replicando una simulazione, Lorenz approssimò i dati da sei a tre cifre decimali alterando i risultati.",
        "url": "https://www.treccani.it/enciclopedia/attrattore-di-lorenz_(Enciclopedia-della-Matematica)/"
    },
    {
        "id": 265,
        "keywords": [
            "risultati divergenti",
            "esplosione dell'errore",
            "ordini di grandezza",
            "quesito 265"
        ],
        "answer": "Secondo la descrizione del capitolo, l'approssimazione decimale generò previsioni divergenti per vari ordini di grandezza.",
        "url": "https://www.treccani.it/enciclopedia/attrattore-di-lorenz_(Enciclopedia-della-Matematica)/"
    },
    {
        "id": 266,
        "keywords": [
            "riduzionismo newtoniano",
            "scala di grandezza",
            "dettagli trascurabili",
            "quesito 266"
        ],
        "answer": "Il riduzionismo newtoniano assume che i fenomeni su scala inferiore abbiano effetti trascurabili.",
        "url": "https://www.treccani.it/enciclopedia/attrattore-di-lorenz_(Enciclopedia-della-Matematica)/"
    },
    {
        "id": 267,
        "keywords": [
            "margine d'errore",
            "errore sperimentale",
            "propagazione",
            "quesito 267"
        ],
        "answer": "In relazione alla teoria del caos, nel modello newtoniano l'errore è controllabile, mentre nei sistemi caotici si propaga esplosivamente.",
        "url": "https://www.treccani.it/enciclopedia/attrattore-di-lorenz_(Enciclopedia-della-Matematica)/"
    },
    {
        "id": 268,
        "keywords": [
            "dipendenza sensibile",
            "condizioni iniziali",
            "limite previsioni",
            "quesito 268"
        ],
        "answer": "Nell'ambito della dinamica dei sistemi complessi, la dipendenza sensibile dalle condizioni iniziali rende impossibile la previsione a lungo termine.",
        "url": "https://www.treccani.it/enciclopedia/attrattore-di-lorenz_(Enciclopedia-della-Matematica)/"
    },
    {
        "id": 269,
        "keywords": [
            "effetto farfalla",
            "metafora brasiliana",
            "tifone florida",
            "quesito 269"
        ],
        "answer": "Dal punto di vista dell'analisi matematica, l'effetto farfalla esprime l'idea che il battito d'ali di una farfalla in Brasile produca un tifone in Florida.",
        "url": "https://www.treccani.it/enciclopedia/attrattore-di-lorenz_(Enciclopedia-della-Matematica)/"
    },
    {
        "id": 270,
        "keywords": [
            "conferenza aaas 1979",
            "uragano texas",
            "relazione lorenz",
            "quesito 270"
        ],
        "answer": "Secondo la descrizione del capitolo, nel 1979 alla conferenza AAAS gli allievi di Lorenz diffusero la metafora dell'uragano nel Texas.",
        "url": "https://www.treccani.it/enciclopedia/attrattore-di-lorenz_(Enciclopedia-della-Matematica)/"
    },
    {
        "id": 271,
        "keywords": [
            "cinema e cultura",
            "jurassic park",
            "sliding doors",
            "quesito 271"
        ],
        "answer": "L'effetto farfalla è citato in film celebri tra cui Jurassic Park, Sliding Doors e The Oxford Murders.",
        "url": "https://www.treccani.it/enciclopedia/attrattore-di-lorenz_(Enciclopedia-della-Matematica)/"
    },
    {
        "id": 272,
        "keywords": [
            "sistema dinamico",
            "variabili nel tempo",
            "spazio astratto",
            "quesito 272"
        ],
        "answer": "In relazione alla teoria del caos, un sistema dinamico è rappresentato da una serie di grandezze che variano nel tempo.",
        "url": "https://www.liceopalmieri.edu.it/LaboratorioStem/Attrattori/"
    },
    {
        "id": 273,
        "keywords": [
            "spazio delle fasi",
            "dimensioni",
            "traiettoria",
            "quesito 273"
        ],
        "answer": "Nell'ambito della dinamica dei sistemi complessi, lo spazio delle fasi ha una dimensione pari al numero di variabili libere del sistema dinamico.",
        "url": "https://www.liceopalmieri.edu.it/LaboratorioStem/Attrattori/"
    },
    {
        "id": 274,
        "keywords": [
            "piano delle fasi",
            "pendolo semplice",
            "due dimensioni",
            "quesito 274"
        ],
        "answer": "Dal punto di vista dell'analisi matematica, il pendolo semplice è descritto in un piano delle fasi bidimensionale (angolo e velocità).",
        "url": "https://www.liceopalmieri.edu.it/LaboratorioStem/Attrattori/"
    },
    {
        "id": 275,
        "keywords": [
            "doppio pendolo",
            "quattro dimensioni",
            "iperspazio",
            "quesito 275"
        ],
        "answer": "Secondo la descrizione del capitolo, il doppio pendolo necessita di uno spazio delle fasi a quattro dimensioni per rappresentare le sue orbite.",
        "url": "https://www.liceopalmieri.edu.it/LaboratorioStem/Attrattori/"
    },
    {
        "id": 276,
        "keywords": [
            "punto fisso",
            "attrattore punto",
            "attrito",
            "quesito 276"
        ],
        "answer": "Il punto fisso è un attrattore che stabilizza il sistema dinamico in uno stato di equilibrio stazionario.",
        "url": "https://www.liceopalmieri.edu.it/LaboratorioStem/Attrattori/"
    },
    {
        "id": 277,
        "keywords": [
            "ciclo limite",
            "circuito van der pol",
            "oscillatore",
            "quesito 277"
        ],
        "answer": "In relazione alla teoria del caos, un ciclo limite è un attrattore rappresentato da una curva chiusa percorsa in modo periodico.",
        "url": "https://www.liceopalmieri.edu.it/LaboratorioStem/Attrattori/"
    },
    {
        "id": 278,
        "keywords": [
            "attrattore strano",
            "definizione",
            "volume finito",
            "quesito 278"
        ],
        "answer": "Nell'ambito della dinamica dei sistemi complessi, l'attrattore strano è una regione finita dello spazio delle fasi in cui le traiettorie non si intersecano mai.",
        "url": "https://www.liceopalmieri.edu.it/LaboratorioStem/Attrattori/"
    },
    {
        "id": 279,
        "keywords": [
            "farfalla di lorenz",
            "ali sfasate",
            "corpo centrale",
            "quesito 279"
        ],
        "answer": "Dal punto di vista dell'analisi matematica, l'attrattore di Lorenz ha la forma caratteristica di una farfalla con due ali disposte su piani sfasati.",
        "url": "https://www.liceopalmieri.edu.it/LaboratorioStem/Attrattori/"
    },
    {
        "id": 280,
        "keywords": [
            "discretizzazione",
            "rappresentazione a punti",
            "passo temporale",
            "quesito 280"
        ],
        "answer": "Secondo la descrizione del capitolo, in simulazione informatica l'attrattore appare come una sequenza discreta di punti nel tempo.",
        "url": "https://www.liceopalmieri.edu.it/LaboratorioStem/Attrattori/"
    },
    {
        "id": 281,
        "keywords": [
            "attrattore toro",
            "quasi periodicita",
            "struttura toroidale",
            "quesito 281"
        ],
        "answer": "L'attrattore a toro descrive un comportamento quasi periodico con complessità intermedia tra ciclo e caos.",
        "url": "https://www.liceopalmieri.edu.it/LaboratorioStem/Attrattori/"
    },
    {
        "id": 282,
        "keywords": [
            "circuito di chua",
            "componenti passivi",
            "diodo non lineare",
            "quesito 282"
        ],
        "answer": "In relazione alla teoria del caos, il circuito di Chua è un circuito elettronico composto da resistenze, capacità, induttanza e un diodo non lineare.",
        "url": "https://www.treccani.it/enciclopedia/caos_(Enciclopedia-del-Novecento)/"
    },
    {
        "id": 283,
        "keywords": [
            "doppio scroll",
            "double scroll",
            "chua attrattore",
            "quesito 283"
        ],
        "answer": "Nell'ambito della dinamica dei sistemi complessi, il Doppio Scroll è l'attrattore strano più celebre prodotto dal circuito elettronico di Chua.",
        "url": "https://www.treccani.it/enciclopedia/caos_(Enciclopedia-del-Novecento)/"
    },
    {
        "id": 284,
        "keywords": [
            "spirale di chua",
            "resistenza parametro",
            "transizione",
            "quesito 284"
        ],
        "answer": "Dal punto di vista dell'analisi matematica, aumentando la resistenza nel circuito di Chua, l'attrattore passa dal doppio scroll alla spirale.",
        "url": "https://www.treccani.it/enciclopedia/caos_(Enciclopedia-del-Novecento)/"
    },
    {
        "id": 285,
        "keywords": [
            "strada verso il caos",
            "percorso sequenziale",
            "ordine caos",
            "quesito 285"
        ],
        "answer": "Secondo la descrizione del capitolo, la strada verso il caos descrive la transizione dall'ordine stazionario al caos deterministico.",
        "url": "https://www.treccani.it/enciclopedia/caos_(Enciclopedia-del-Novecento)/"
    },
    {
        "id": 286,
        "keywords": [
            "saturazione",
            "orizzonte fisico",
            "massimo energetico",
            "quesito 286"
        ],
        "answer": "La saturazione rappresenta il massimo livello di energia del sistema e si manifesta come ciclo limite.",
        "url": "https://www.treccani.it/enciclopedia/caos_(Enciclopedia-del-Novecento)/"
    },
    {
        "id": 287,
        "keywords": [
            "biforcazione",
            "parametro di controllo",
            "cambiamento qualitativo",
            "quesito 287"
        ],
        "answer": "In relazione alla teoria del caos, una biforcazione si verifica quando il comportamento del sistema cambia radicalmente al variare del parametro.",
        "url": "https://www.treccani.it/enciclopedia/caos_(Enciclopedia-del-Novecento)/"
    },
    {
        "id": 288,
        "keywords": [
            "biforcazione di hopf",
            "raddoppio del periodo",
            "cascata",
            "quesito 288"
        ],
        "answer": "Nell'ambito della dinamica dei sistemi complessi, la biforcazione di Hopf comporta il raddoppio del periodo delle oscillazioni lungo una cascata infinita.",
        "url": "https://www.treccani.it/enciclopedia/caos_(Enciclopedia-del-Novecento)/"
    },
    {
        "id": 289,
        "keywords": [
            "costante di feigenbaum",
            "mitchell feigenbaum",
            "1975",
            "quesito 289"
        ],
        "answer": "Dal punto di vista dell'analisi matematica, la costante di Feigenbaum (4.6692) descrive la convergenza universale delle biforcazioni caotiche.",
        "url": "https://www.treccani.it/enciclopedia/caos_(Enciclopedia-del-Novecento)/"
    },
    {
        "id": 290,
        "keywords": [
            "mappa logistica",
            "popolazione discreta",
            "modello feigenbaum",
            "quesito 290"
        ],
        "answer": "Secondo la descrizione del capitolo, la mappa logistica è un modello popolazionale discreto che mostra il raddoppio del periodo.",
        "url": "https://www.treccani.it/enciclopedia/caos_(Enciclopedia-del-Novecento)/"
    },
    {
        "id": 291,
        "keywords": [
            "diagramma di biforcazione",
            "soglia 1.16 kohm",
            "chua diagramma",
            "quesito 291"
        ],
        "answer": "Nel circuito di Chua la transizione da punto fisso a ciclo limite avviene per R = 1,16 kΩ.",
        "url": "https://www.treccani.it/enciclopedia/caos_(Enciclopedia-del-Novecento)/"
    },
    {
        "id": 292,
        "keywords": [
            "frattali",
            "etimologia fractus",
            "geometria non euclidea",
            "quesito 292"
        ],
        "answer": "In relazione alla teoria del caos, il termine frattale fu coniato da Mandelbrot nel 1975 dal latino fractus per definire forme discontinue.",
        "url": "https://www.treccani.it/enciclopedia/caos_(Enciclopedia-del-Novecento)/"
    },
    {
        "id": 293,
        "keywords": [
            "fiocco di neve di koch",
            "costruzione iterativa",
            "perimetro infinito",
            "quesito 293"
        ],
        "answer": "Nell'ambito della dinamica dei sistemi complessi, il fiocco di neve di Koch è un frattale con perimetro di lunghezza infinita in una superficie finita.",
        "url": "https://www.treccani.it/enciclopedia/caos_(Enciclopedia-del-Novecento)/"
    },
    {
        "id": 294,
        "keywords": [
            "triangolo di sierpinski",
            "ricorsione",
            "dimensione frattale",
            "quesito 294"
        ],
        "answer": "Dal punto di vista dell'analisi matematica, il triangolo di Sierpinski è una figura frattale ottenuta rimuovendo i sotto-triangoli centrali.",
        "url": "https://www.treccani.it/enciclopedia/caos_(Enciclopedia-del-Novecento)/"
    },
    {
        "id": 295,
        "keywords": [
            "benoit mandelbrot",
            "geometria della natura",
            "inadeguatezza euclidea",
            "quesito 295"
        ],
        "answer": "Secondo la descrizione del capitolo, mandelbrot dimostrò che la geometria euclidea non è adatta a descrivere nuvole, montagne e coste.",
        "url": "https://www.treccani.it/enciclopedia/caos_(Enciclopedia-del-Novecento)/"
    },
    {
        "id": 296,
        "keywords": [
            "invarianza di scala",
            "auto-similarita",
            "struttura ricorsiva",
            "quesito 296"
        ],
        "answer": "L'auto-similarità implica che ingrandendo un dettaglio di un frattale si ritrova la figura intera.",
        "url": "https://www.treccani.it/enciclopedia/caos_(Enciclopedia-del-Novecento)/"
    },
    {
        "id": 297,
        "keywords": [
            "cavolfiore frattale",
            "montagna",
            "scogliera",
            "quesito 297"
        ],
        "answer": "In relazione alla teoria del caos, esempi naturali di frattali sono i cavolfiori, i profili montuosi e la struttura delle scogliere.",
        "url": "https://www.treccani.it/enciclopedia/caos_(Enciclopedia-del-Novecento)/"
    },
    {
        "id": 298,
        "keywords": [
            "econofisica",
            "borsa valori",
            "serie temporali",
            "quesito 298"
        ],
        "answer": "Nell'ambito della dinamica dei sistemi complessi, l'econofisica studia le serie temporali dei mercati finanziari sfruttando concetti frattali e caotici.",
        "url": "https://www.treccani.it/enciclopedia/caos_(Enciclopedia-del-Novecento)/"
    },
    {
        "id": 299,
        "keywords": [
            "digital art",
            "arte elettronica",
            "estetica del caos",
            "quesito 299"
        ],
        "answer": "Dal punto di vista dell'analisi matematica, la bellezza degli attrattori e dei frattali ha ispirato nuove correnti artistiche di Digital Art.",
        "url": "https://www.treccani.it/enciclopedia/caos_(Enciclopedia-del-Novecento)/"
    },
    {
        "id": 300,
        "keywords": [
            "ubiquita del caos",
            "paradigma scientifico",
            "transdisciplinarita",
            "quesito 300"
        ],
        "answer": "Secondo la descrizione del capitolo, l'ubiquità del caos descrive la presenza universale di comportamenti imprevedibili nella natura.",
        "url": "https://www.treccani.it/enciclopedia/caos_(Enciclopedia-del-Novecento)/"
    },
    {
        "id": 301,
        "keywords": [
            "meccanicismo",
            "orologio perfetto",
            "newton",
            "quesito 301"
        ],
        "answer": "Da Newton in poi, la visione dominante rappresentava il mondo come un meccanismo perfetto, analogo a un orologio di precisione.",
        "url": "https://www.treccani.it/enciclopedia/meccanicismo_(Enciclopedia-Italiana)/"
    },
    {
        "id": 302,
        "keywords": [
            "meccanica sperimentale",
            "fine XVII secolo",
            "isaac newton",
            "quesito 302"
        ],
        "answer": "In relazione alla teoria del caos, la meccanica come scienza sperimentale è nata alla fine del XVII secolo con Isaac Newton.",
        "url": "https://www.treccani.it/enciclopedia/meccanicismo_(Enciclopedia-Italiana)/"
    },
    {
        "id": 303,
        "keywords": [
            "eulero",
            "lagrange",
            "laplace",
            "quesito 303"
        ],
        "answer": "Nell'ambito della dinamica dei sistemi complessi, nel XVIII secolo la meccanica classica fu perfezionata dai lavori di Eulero, Lagrange e Laplace.",
        "url": "https://www.treccani.it/enciclopedia/meccanicismo_(Enciclopedia-Italiana)/"
    },
    {
        "id": 304,
        "keywords": [
            "calcolo differenziale",
            "calcolo integrale",
            "leibniz",
            "quesito 304"
        ],
        "answer": "Dal punto di vista dell'analisi matematica, il calcolo differenziale e integrale fu sviluppato contemporaneamente da Newton e Leibniz.",
        "url": "https://www.treccani.it/enciclopedia/meccanicismo_(Enciclopedia-Italiana)/"
    },
    {
        "id": 305,
        "keywords": [
            "meccanica celeste",
            "leggi di newton",
            "evidenze sperimentali",
            "quesito 305"
        ],
        "answer": "Secondo la descrizione del capitolo, la meccanica celeste fornì un quadro teorico unificante supportato da evidenze sperimentali.",
        "url": "https://www.treccani.it/enciclopedia/meccanicismo_(Enciclopedia-Italiana)/"
    },
    {
        "id": 306,
        "keywords": [
            "determinismo causale",
            "causalita",
            "catena di eventi",
            "quesito 306"
        ],
        "answer": "Il determinismo causale stabilisce che ogni evento accada all'interno di una catena causale.",
        "url": "https://www.treccani.it/enciclopedia/meccanicismo_(Enciclopedia-Italiana)/"
    },
    {
        "id": 307,
        "keywords": [
            "configurazioni iniziali",
            "previsione teorica",
            "stato futuro",
            "quesito 307"
        ],
        "answer": "In relazione alla teoria del caos, conoscendo cause e configurazioni iniziali, il determinismo teorizza la previsione degli eventi futuri.",
        "url": "https://www.treccani.it/enciclopedia/meccanicismo_(Enciclopedia-Italiana)/"
    },
    {
        "id": 308,
        "keywords": [
            "laplace",
            "demone di laplace",
            "determinismo assoluto",
            "quesito 308"
        ],
        "answer": "Nell'ambito della dinamica dei sistemi complessi, laplace concepiva il determinismo come la capacità di calcolare con precisione lo stato futuro conoscendo lo stato attuale.",
        "url": "https://www.treccani.it/enciclopedia/meccanicismo_(Enciclopedia-Italiana)/"
    },
    {
        "id": 309,
        "keywords": [
            "darwin",
            "evoluzione",
            "XIX secolo",
            "quesito 309"
        ],
        "answer": "Dal punto di vista dell'analisi matematica, nel XIX secolo gli studi di Darwin sull'evoluzione misero in discussione il riduzionismo meccanicista.",
        "url": "https://www.treccani.it/enciclopedia/entropia_(Enciclopedia-della-Scienza-e-della-Tecnica)/"
    },
    {
        "id": 310,
        "keywords": [
            "termodinamica",
            "entropia",
            "irreversibilita",
            "quesito 310"
        ],
        "answer": "Secondo la descrizione del capitolo, l'introduzione dell'entropia e dell'irreversibilità evidenziò i limiti della spiegazione meccanicista.",
        "url": "https://www.treccani.it/enciclopedia/entropia_(Enciclopedia-della-Scienza-e-della-Tecnica)/"
    },
    {
        "id": 311,
        "keywords": [
            "trasformazioni di energia",
            "fenomeni biologici",
            "limiti newtoniani",
            "quesito 311"
        ],
        "answer": "La termodinamica dimostrò che la meccanica classica era deficitaria nei fenomeni legati alla vita.",
        "url": "https://www.treccani.it/enciclopedia/entropia_(Enciclopedia-della-Scienza-e-della-Tecnica)/"
    },
    {
        "id": 312,
        "keywords": [
            "meccanica quantistica",
            "infinitamente piccolo",
            "XX secolo",
            "quesito 312"
        ],
        "answer": "In relazione alla teoria del caos, la meccanica quantistica è una teoria del XX secolo rivolta allo studio dell'infinitamente piccolo.",
        "url": "https://www.treccani.it/enciclopedia/entropia_(Enciclopedia-della-Scienza-e-della-Tecnica)/"
    },
    {
        "id": 313,
        "keywords": [
            "relativita generale",
            "infinitamente grande",
            "einstein",
            "quesito 313"
        ],
        "answer": "Nell'ambito della dinamica dei sistemi complessi, la relatività generale descrive la gravità e i fenomeni dell'infinitamente grande.",
        "url": "https://www.treccani.it/enciclopedia/entropia_(Enciclopedia-della-Scienza-e-della-Tecnica)/"
    },
    {
        "id": 314,
        "keywords": [
            "validita newtoniana",
            "fenomeni osservabili",
            "scala macroscopica",
            "quesito 314"
        ],
        "answer": "Dal punto di vista dell'analisi matematica, fino agli anni '60 la meccanica newtoniana rimase un'ottima descrizione dei fenomeni osservabili.",
        "url": "https://www.treccani.it/enciclopedia/entropia_(Enciclopedia-della-Scienza-e-della-Tecnica)/"
    },
    {
        "id": 315,
        "keywords": [
            "caos grecia",
            "significato antico",
            "disordine",
            "quesito 315"
        ],
        "answer": "Secondo la descrizione del capitolo, in antica Grecia il termine caos indicava disordine, confusione, scompiglio e agitazione.",
        "url": "https://www.treccani.it/enciclopedia/caos_(Enciclopedia-del-Novecento)/"
    },
    {
        "id": 316,
        "keywords": [
            "cosmos",
            "ordine",
            "antitesi caos",
            "quesito 316"
        ],
        "answer": "Il termine greco cosmos significa ordine ed era usato in antitesi al termine caos.",
        "url": "https://www.treccani.it/enciclopedia/caos_(Enciclopedia-del-Novecento)/"
    },
    {
        "id": 317,
        "keywords": [
            "limite cognitivo",
            "comprensione",
            "orizzonte oscuro",
            "quesito 317"
        ],
        "answer": "In relazione alla teoria del caos, in termini cognitivi il caos identifica un'incapacità generale di comprensione e un limite visivo.",
        "url": "https://www.treccani.it/enciclopedia/caos_(Enciclopedia-del-Novecento)/"
    },
    {
        "id": 318,
        "keywords": [
            "capovolgimento semantico",
            "scienza contemporanea",
            "caos deterministico",
            "quesito 318"
        ],
        "answer": "Nell'ambito della dinamica dei sistemi complessi, la scienza contemporanea ha ribaltato la semantica del caos riferendolo a dinamiche deterministiche non analitiche.",
        "url": "https://www.treccani.it/enciclopedia/caos_(Enciclopedia-del-Novecento)/"
    },
    {
        "id": 319,
        "keywords": [
            "settori del caos",
            "fenomeni sociali",
            "economia",
            "quesito 319"
        ],
        "answer": "Dal punto di vista dell'analisi matematica, la teoria del caos analizza fenomeni imprevedibili in ambito fisico, economico, sociale e comportamentale.",
        "url": "https://www.treccani.it/enciclopedia/caos_(Enciclopedia-del-Novecento)/"
    },
    {
        "id": 320,
        "keywords": [
            "edward lorenz",
            "mit cambridge",
            "meteorologia",
            "quesito 320"
        ],
        "answer": "Secondo la descrizione del capitolo, edward H. Lorenz era un meteorologo del MIT di Cambridge che sviluppò modelli matematici per il meteo.",
        "url": "https://www.treccani.it/enciclopedia/attrattore-di-lorenz_(Enciclopedia-della-Matematica)/"
    },
    {
        "id": 321,
        "keywords": [
            "equazioni differenziali",
            "tre equazioni",
            "non linearita",
            "quesito 321"
        ],
        "answer": "Il modello atmosferico di Lorenz era basato su tre equazioni differenziali ordinarie non lineari.",
        "url": "https://www.treccani.it/enciclopedia/attrattore-di-lorenz_(Enciclopedia-della-Matematica)/"
    },
    {
        "id": 322,
        "keywords": [
            "integrazione numerica",
            "computer lorenz",
            "anni 60",
            "quesito 322"
        ],
        "answer": "In relazione alla teoria del caos, lorenz utilizzò il computer per integrare numericamente equazioni non lineari prive di soluzione analitica.",
        "url": "https://www.treccani.it/enciclopedia/attrattore-di-lorenz_(Enciclopedia-della-Matematica)/"
    },
    {
        "id": 323,
        "keywords": [
            "analisi numerica",
            "processi iterativi",
            "algoritmi",
            "quesito 323"
        ],
        "answer": "Nell'ambito della dinamica dei sistemi complessi, l'analisi numerica sviluppa algoritmi e metodi iterativi per approssimare problemi matematici complessi.",
        "url": "https://www.treccani.it/enciclopedia/attrattore-di-lorenz_(Enciclopedia-della-Matematica)/"
    },
    {
        "id": 324,
        "keywords": [
            "arrotondamento decimali",
            "da 6 a 3 cifre",
            "scarto minimo",
            "quesito 324"
        ],
        "answer": "Dal punto di vista dell'analisi matematica, replicando una simulazione, Lorenz approssimò i dati da sei a tre cifre decimali alterando i risultati.",
        "url": "https://www.treccani.it/enciclopedia/attrattore-di-lorenz_(Enciclopedia-della-Matematica)/"
    },
    {
        "id": 325,
        "keywords": [
            "risultati divergenti",
            "esplosione dell'errore",
            "ordini di grandezza",
            "quesito 325"
        ],
        "answer": "Secondo la descrizione del capitolo, l'approssimazione decimale generò previsioni divergenti per vari ordini di grandezza.",
        "url": "https://www.treccani.it/enciclopedia/attrattore-di-lorenz_(Enciclopedia-della-Matematica)/"
    },
    {
        "id": 326,
        "keywords": [
            "riduzionismo newtoniano",
            "scala di grandezza",
            "dettagli trascurabili",
            "quesito 326"
        ],
        "answer": "Il riduzionismo newtoniano assume che i fenomeni su scala inferiore abbiano effetti trascurabili.",
        "url": "https://www.treccani.it/enciclopedia/attrattore-di-lorenz_(Enciclopedia-della-Matematica)/"
    },
    {
        "id": 327,
        "keywords": [
            "margine d'errore",
            "errore sperimentale",
            "propagazione",
            "quesito 327"
        ],
        "answer": "In relazione alla teoria del caos, nel modello newtoniano l'errore è controllabile, mentre nei sistemi caotici si propaga esplosivamente.",
        "url": "https://www.treccani.it/enciclopedia/attrattore-di-lorenz_(Enciclopedia-della-Matematica)/"
    },
    {
        "id": 328,
        "keywords": [
            "dipendenza sensibile",
            "condizioni iniziali",
            "limite previsioni",
            "quesito 328"
        ],
        "answer": "Nell'ambito della dinamica dei sistemi complessi, la dipendenza sensibile dalle condizioni iniziali rende impossibile la previsione a lungo termine.",
        "url": "https://www.treccani.it/enciclopedia/attrattore-di-lorenz_(Enciclopedia-della-Matematica)/"
    },
    {
        "id": 329,
        "keywords": [
            "effetto farfalla",
            "metafora brasiliana",
            "tifone florida",
            "quesito 329"
        ],
        "answer": "Dal punto di vista dell'analisi matematica, l'effetto farfalla esprime l'idea che il battito d'ali di una farfalla in Brasile produca un tifone in Florida.",
        "url": "https://www.treccani.it/enciclopedia/attrattore-di-lorenz_(Enciclopedia-della-Matematica)/"
    },
    {
        "id": 330,
        "keywords": [
            "conferenza aaas 1979",
            "uragano texas",
            "relazione lorenz",
            "quesito 330"
        ],
        "answer": "Secondo la descrizione del capitolo, nel 1979 alla conferenza AAAS gli allievi di Lorenz diffusero la metafora dell'uragano nel Texas.",
        "url": "https://www.treccani.it/enciclopedia/attrattore-di-lorenz_(Enciclopedia-della-Matematica)/"
    },
    {
        "id": 331,
        "keywords": [
            "cinema e cultura",
            "jurassic park",
            "sliding doors",
            "quesito 331"
        ],
        "answer": "L'effetto farfalla è citato in film celebri tra cui Jurassic Park, Sliding Doors e The Oxford Murders.",
        "url": "https://www.treccani.it/enciclopedia/attrattore-di-lorenz_(Enciclopedia-della-Matematica)/"
    },
    {
        "id": 332,
        "keywords": [
            "sistema dinamico",
            "variabili nel tempo",
            "spazio astratto",
            "quesito 332"
        ],
        "answer": "In relazione alla teoria del caos, un sistema dinamico è rappresentato da una serie di grandezze che variano nel tempo.",
        "url": "https://www.liceopalmieri.edu.it/LaboratorioStem/Attrattori/"
    },
    {
        "id": 333,
        "keywords": [
            "spazio delle fasi",
            "dimensioni",
            "traiettoria",
            "quesito 333"
        ],
        "answer": "Nell'ambito della dinamica dei sistemi complessi, lo spazio delle fasi ha una dimensione pari al numero di variabili libere del sistema dinamico.",
        "url": "https://www.liceopalmieri.edu.it/LaboratorioStem/Attrattori/"
    },
    {
        "id": 334,
        "keywords": [
            "piano delle fasi",
            "pendolo semplice",
            "due dimensioni",
            "quesito 334"
        ],
        "answer": "Dal punto di vista dell'analisi matematica, il pendolo semplice è descritto in un piano delle fasi bidimensionale (angolo e velocità).",
        "url": "https://www.liceopalmieri.edu.it/LaboratorioStem/Attrattori/"
    },
    {
        "id": 335,
        "keywords": [
            "doppio pendolo",
            "quattro dimensioni",
            "iperspazio",
            "quesito 335"
        ],
        "answer": "Secondo la descrizione del capitolo, il doppio pendolo necessita di uno spazio delle fasi a quattro dimensioni per rappresentare le sue orbite.",
        "url": "https://www.liceopalmieri.edu.it/LaboratorioStem/Attrattori/"
    },
    {
        "id": 336,
        "keywords": [
            "punto fisso",
            "attrattore punto",
            "attrito",
            "quesito 336"
        ],
        "answer": "Il punto fisso è un attrattore che stabilizza il sistema dinamico in uno stato di equilibrio stazionario.",
        "url": "https://www.liceopalmieri.edu.it/LaboratorioStem/Attrattori/"
    },
    {
        "id": 337,
        "keywords": [
            "ciclo limite",
            "circuito van der pol",
            "oscillatore",
            "quesito 337"
        ],
        "answer": "In relazione alla teoria del caos, un ciclo limite è un attrattore rappresentato da una curva chiusa percorsa in modo periodico.",
        "url": "https://www.liceopalmieri.edu.it/LaboratorioStem/Attrattori/"
    },
    {
        "id": 338,
        "keywords": [
            "attrattore strano",
            "definizione",
            "volume finito",
            "quesito 338"
        ],
        "answer": "Nell'ambito della dinamica dei sistemi complessi, l'attrattore strano è una regione finita dello spazio delle fasi in cui le traiettorie non si intersecano mai.",
        "url": "https://www.liceopalmieri.edu.it/LaboratorioStem/Attrattori/"
    },
    {
        "id": 339,
        "keywords": [
            "farfalla di lorenz",
            "ali sfasate",
            "corpo centrale",
            "quesito 339"
        ],
        "answer": "Dal punto di vista dell'analisi matematica, l'attrattore di Lorenz ha la forma caratteristica di una farfalla con due ali disposte su piani sfasati.",
        "url": "https://www.liceopalmieri.edu.it/LaboratorioStem/Attrattori/"
    },
    {
        "id": 340,
        "keywords": [
            "discretizzazione",
            "rappresentazione a punti",
            "passo temporale",
            "quesito 340"
        ],
        "answer": "Secondo la descrizione del capitolo, in simulazione informatica l'attrattore appare come una sequenza discreta di punti nel tempo.",
        "url": "https://www.liceopalmieri.edu.it/LaboratorioStem/Attrattori/"
    },
    {
        "id": 341,
        "keywords": [
            "attrattore toro",
            "quasi periodicita",
            "struttura toroidale",
            "quesito 341"
        ],
        "answer": "L'attrattore a toro descrive un comportamento quasi periodico con complessità intermedia tra ciclo e caos.",
        "url": "https://www.liceopalmieri.edu.it/LaboratorioStem/Attrattori/"
    },
    {
        "id": 342,
        "keywords": [
            "circuito di chua",
            "componenti passivi",
            "diodo non lineare",
            "quesito 342"
        ],
        "answer": "In relazione alla teoria del caos, il circuito di Chua è un circuito elettronico composto da resistenze, capacità, induttanza e un diodo non lineare.",
        "url": "https://www.treccani.it/enciclopedia/caos_(Enciclopedia-del-Novecento)/"
    },
    {
        "id": 343,
        "keywords": [
            "doppio scroll",
            "double scroll",
            "chua attrattore",
            "quesito 343"
        ],
        "answer": "Nell'ambito della dinamica dei sistemi complessi, il Doppio Scroll è l'attrattore strano più celebre prodotto dal circuito elettronico di Chua.",
        "url": "https://www.treccani.it/enciclopedia/caos_(Enciclopedia-del-Novecento)/"
    },
    {
        "id": 344,
        "keywords": [
            "spirale di chua",
            "resistenza parametro",
            "transizione",
            "quesito 344"
        ],
        "answer": "Dal punto di vista dell'analisi matematica, aumentando la resistenza nel circuito di Chua, l'attrattore passa dal doppio scroll alla spirale.",
        "url": "https://www.treccani.it/enciclopedia/caos_(Enciclopedia-del-Novecento)/"
    },
    {
        "id": 345,
        "keywords": [
            "strada verso il caos",
            "percorso sequenziale",
            "ordine caos",
            "quesito 345"
        ],
        "answer": "Secondo la descrizione del capitolo, la strada verso il caos descrive la transizione dall'ordine stazionario al caos deterministico.",
        "url": "https://www.treccani.it/enciclopedia/caos_(Enciclopedia-del-Novecento)/"
    },
    {
        "id": 346,
        "keywords": [
            "saturazione",
            "orizzonte fisico",
            "massimo energetico",
            "quesito 346"
        ],
        "answer": "La saturazione rappresenta il massimo livello di energia del sistema e si manifesta come ciclo limite.",
        "url": "https://www.treccani.it/enciclopedia/caos_(Enciclopedia-del-Novecento)/"
    },
    {
        "id": 347,
        "keywords": [
            "biforcazione",
            "parametro di controllo",
            "cambiamento qualitativo",
            "quesito 347"
        ],
        "answer": "In relazione alla teoria del caos, una biforcazione si verifica quando il comportamento del sistema cambia radicalmente al variare del parametro.",
        "url": "https://www.treccani.it/enciclopedia/caos_(Enciclopedia-del-Novecento)/"
    },
    {
        "id": 348,
        "keywords": [
            "biforcazione di hopf",
            "raddoppio del periodo",
            "cascata",
            "quesito 348"
        ],
        "answer": "Nell'ambito della dinamica dei sistemi complessi, la biforcazione di Hopf comporta il raddoppio del periodo delle oscillazioni lungo una cascata infinita.",
        "url": "https://www.treccani.it/enciclopedia/caos_(Enciclopedia-del-Novecento)/"
    },
    {
        "id": 349,
        "keywords": [
            "costante di feigenbaum",
            "mitchell feigenbaum",
            "1975",
            "quesito 349"
        ],
        "answer": "Dal punto di vista dell'analisi matematica, la costante di Feigenbaum (4.6692) descrive la convergenza universale delle biforcazioni caotiche.",
        "url": "https://www.treccani.it/enciclopedia/caos_(Enciclopedia-del-Novecento)/"
    },
    {
        "id": 350,
        "keywords": [
            "mappa logistica",
            "popolazione discreta",
            "modello feigenbaum",
            "quesito 350"
        ],
        "answer": "Secondo la descrizione del capitolo, la mappa logistica è un modello popolazionale discreto che mostra il raddoppio del periodo.",
        "url": "https://www.treccani.it/enciclopedia/caos_(Enciclopedia-del-Novecento)/"
    },
    {
        "id": 351,
        "keywords": [
            "diagramma di biforcazione",
            "soglia 1.16 kohm",
            "chua diagramma",
            "quesito 351"
        ],
        "answer": "Nel circuito di Chua la transizione da punto fisso a ciclo limite avviene per R = 1,16 kΩ.",
        "url": "https://www.treccani.it/enciclopedia/caos_(Enciclopedia-del-Novecento)/"
    },
    {
        "id": 352,
        "keywords": [
            "frattali",
            "etimologia fractus",
            "geometria non euclidea",
            "quesito 352"
        ],
        "answer": "In relazione alla teoria del caos, il termine frattale fu coniato da Mandelbrot nel 1975 dal latino fractus per definire forme discontinue.",
        "url": "https://www.treccani.it/enciclopedia/caos_(Enciclopedia-del-Novecento)/"
    },
    {
        "id": 353,
        "keywords": [
            "fiocco di neve di koch",
            "costruzione iterativa",
            "perimetro infinito",
            "quesito 353"
        ],
        "answer": "Nell'ambito della dinamica dei sistemi complessi, il fiocco di neve di Koch è un frattale con perimetro di lunghezza infinita in una superficie finita.",
        "url": "https://www.treccani.it/enciclopedia/caos_(Enciclopedia-del-Novecento)/"
    },
    {
        "id": 354,
        "keywords": [
            "triangolo di sierpinski",
            "ricorsione",
            "dimensione frattale",
            "quesito 354"
        ],
        "answer": "Dal punto di vista dell'analisi matematica, il triangolo di Sierpinski è una figura frattale ottenuta rimuovendo i sotto-triangoli centrali.",
        "url": "https://www.treccani.it/enciclopedia/caos_(Enciclopedia-del-Novecento)/"
    },
    {
        "id": 355,
        "keywords": [
            "benoit mandelbrot",
            "geometria della natura",
            "inadeguatezza euclidea",
            "quesito 355"
        ],
        "answer": "Secondo la descrizione del capitolo, mandelbrot dimostrò che la geometria euclidea non è adatta a descrivere nuvole, montagne e coste.",
        "url": "https://www.treccani.it/enciclopedia/caos_(Enciclopedia-del-Novecento)/"
    },
    {
        "id": 356,
        "keywords": [
            "invarianza di scala",
            "auto-similarita",
            "struttura ricorsiva",
            "quesito 356"
        ],
        "answer": "L'auto-similarità implica che ingrandendo un dettaglio di un frattale si ritrova la figura intera.",
        "url": "https://www.treccani.it/enciclopedia/caos_(Enciclopedia-del-Novecento)/"
    },
    {
        "id": 357,
        "keywords": [
            "cavolfiore frattale",
            "montagna",
            "scogliera",
            "quesito 357"
        ],
        "answer": "In relazione alla teoria del caos, esempi naturali di frattali sono i cavolfiori, i profili montuosi e la struttura delle scogliere.",
        "url": "https://www.treccani.it/enciclopedia/caos_(Enciclopedia-del-Novecento)/"
    },
    {
        "id": 358,
        "keywords": [
            "econofisica",
            "borsa valori",
            "serie temporali",
            "quesito 358"
        ],
        "answer": "Nell'ambito della dinamica dei sistemi complessi, l'econofisica studia le serie temporali dei mercati finanziari sfruttando concetti frattali e caotici.",
        "url": "https://www.treccani.it/enciclopedia/caos_(Enciclopedia-del-Novecento)/"
    },
    {
        "id": 359,
        "keywords": [
            "digital art",
            "arte elettronica",
            "estetica del caos",
            "quesito 359"
        ],
        "answer": "Dal punto di vista dell'analisi matematica, la bellezza degli attrattori e dei frattali ha ispirato nuove correnti artistiche di Digital Art.",
        "url": "https://www.treccani.it/enciclopedia/caos_(Enciclopedia-del-Novecento)/"
    },
    {
        "id": 360,
        "keywords": [
            "ubiquita del caos",
            "paradigma scientifico",
            "transdisciplinarita",
            "quesito 360"
        ],
        "answer": "Secondo la descrizione del capitolo, l'ubiquità del caos descrive la presenza universale di comportamenti imprevedibili nella natura.",
        "url": "https://www.treccani.it/enciclopedia/caos_(Enciclopedia-del-Novecento)/"
    },
    {
        "id": 361,
        "keywords": [
            "meccanicismo",
            "orologio perfetto",
            "newton",
            "quesito 361"
        ],
        "answer": "Da Newton in poi, la visione dominante rappresentava il mondo come un meccanismo perfetto, analogo a un orologio di precisione.",
        "url": "https://www.treccani.it/enciclopedia/meccanicismo_(Enciclopedia-Italiana)/"
    },
    {
        "id": 362,
        "keywords": [
            "meccanica sperimentale",
            "fine XVII secolo",
            "isaac newton",
            "quesito 362"
        ],
        "answer": "In relazione alla teoria del caos, la meccanica come scienza sperimentale è nata alla fine del XVII secolo con Isaac Newton.",
        "url": "https://www.treccani.it/enciclopedia/meccanicismo_(Enciclopedia-Italiana)/"
    },
    {
        "id": 363,
        "keywords": [
            "eulero",
            "lagrange",
            "laplace",
            "quesito 363"
        ],
        "answer": "Nell'ambito della dinamica dei sistemi complessi, nel XVIII secolo la meccanica classica fu perfezionata dai lavori di Eulero, Lagrange e Laplace.",
        "url": "https://www.treccani.it/enciclopedia/meccanicismo_(Enciclopedia-Italiana)/"
    },
    {
        "id": 364,
        "keywords": [
            "calcolo differenziale",
            "calcolo integrale",
            "leibniz",
            "quesito 364"
        ],
        "answer": "Dal punto di vista dell'analisi matematica, il calcolo differenziale e integrale fu sviluppato contemporaneamente da Newton e Leibniz.",
        "url": "https://www.treccani.it/enciclopedia/meccanicismo_(Enciclopedia-Italiana)/"
    },
    {
        "id": 365,
        "keywords": [
            "meccanica celeste",
            "leggi di newton",
            "evidenze sperimentali",
            "quesito 365"
        ],
        "answer": "Secondo la descrizione del capitolo, la meccanica celeste fornì un quadro teorico unificante supportato da evidenze sperimentali.",
        "url": "https://www.treccani.it/enciclopedia/meccanicismo_(Enciclopedia-Italiana)/"
    },
    {
        "id": 366,
        "keywords": [
            "determinismo causale",
            "causalita",
            "catena di eventi",
            "quesito 366"
        ],
        "answer": "Il determinismo causale stabilisce che ogni evento accada all'interno di una catena causale.",
        "url": "https://www.treccani.it/enciclopedia/meccanicismo_(Enciclopedia-Italiana)/"
    },
    {
        "id": 367,
        "keywords": [
            "configurazioni iniziali",
            "previsione teorica",
            "stato futuro",
            "quesito 367"
        ],
        "answer": "In relazione alla teoria del caos, conoscendo cause e configurazioni iniziali, il determinismo teorizza la previsione degli eventi futuri.",
        "url": "https://www.treccani.it/enciclopedia/meccanicismo_(Enciclopedia-Italiana)/"
    },
    {
        "id": 368,
        "keywords": [
            "laplace",
            "demone di laplace",
            "determinismo assoluto",
            "quesito 368"
        ],
        "answer": "Nell'ambito della dinamica dei sistemi complessi, laplace concepiva il determinismo come la capacità di calcolare con precisione lo stato futuro conoscendo lo stato attuale.",
        "url": "https://www.treccani.it/enciclopedia/meccanicismo_(Enciclopedia-Italiana)/"
    },
    {
        "id": 369,
        "keywords": [
            "darwin",
            "evoluzione",
            "XIX secolo",
            "quesito 369"
        ],
        "answer": "Dal punto di vista dell'analisi matematica, nel XIX secolo gli studi di Darwin sull'evoluzione misero in discussione il riduzionismo meccanicista.",
        "url": "https://www.treccani.it/enciclopedia/entropia_(Enciclopedia-della-Scienza-e-della-Tecnica)/"
    },
    {
        "id": 370,
        "keywords": [
            "termodinamica",
            "entropia",
            "irreversibilita",
            "quesito 370"
        ],
        "answer": "Secondo la descrizione del capitolo, l'introduzione dell'entropia e dell'irreversibilità evidenziò i limiti della spiegazione meccanicista.",
        "url": "https://www.treccani.it/enciclopedia/entropia_(Enciclopedia-della-Scienza-e-della-Tecnica)/"
    },
    {
        "id": 371,
        "keywords": [
            "trasformazioni di energia",
            "fenomeni biologici",
            "limiti newtoniani",
            "quesito 371"
        ],
        "answer": "La termodinamica dimostrò che la meccanica classica era deficitaria nei fenomeni legati alla vita.",
        "url": "https://www.treccani.it/enciclopedia/entropia_(Enciclopedia-della-Scienza-e-della-Tecnica)/"
    },
    {
        "id": 372,
        "keywords": [
            "meccanica quantistica",
            "infinitamente piccolo",
            "XX secolo",
            "quesito 372"
        ],
        "answer": "In relazione alla teoria del caos, la meccanica quantistica è una teoria del XX secolo rivolta allo studio dell'infinitamente piccolo.",
        "url": "https://www.treccani.it/enciclopedia/entropia_(Enciclopedia-della-Scienza-e-della-Tecnica)/"
    },
    {
        "id": 373,
        "keywords": [
            "relativita generale",
            "infinitamente grande",
            "einstein",
            "quesito 373"
        ],
        "answer": "Nell'ambito della dinamica dei sistemi complessi, la relatività generale descrive la gravità e i fenomeni dell'infinitamente grande.",
        "url": "https://www.treccani.it/enciclopedia/entropia_(Enciclopedia-della-Scienza-e-della-Tecnica)/"
    },
    {
        "id": 374,
        "keywords": [
            "validita newtoniana",
            "fenomeni osservabili",
            "scala macroscopica",
            "quesito 374"
        ],
        "answer": "Dal punto di vista dell'analisi matematica, fino agli anni '60 la meccanica newtoniana rimase un'ottima descrizione dei fenomeni osservabili.",
        "url": "https://www.treccani.it/enciclopedia/entropia_(Enciclopedia-della-Scienza-e-della-Tecnica)/"
    },
    {
        "id": 375,
        "keywords": [
            "caos grecia",
            "significato antico",
            "disordine",
            "quesito 375"
        ],
        "answer": "Secondo la descrizione del capitolo, in antica Grecia il termine caos indicava disordine, confusione, scompiglio e agitazione.",
        "url": "https://www.treccani.it/enciclopedia/caos_(Enciclopedia-del-Novecento)/"
    },
    {
        "id": 376,
        "keywords": [
            "cosmos",
            "ordine",
            "antitesi caos",
            "quesito 376"
        ],
        "answer": "Il termine greco cosmos significa ordine ed era usato in antitesi al termine caos.",
        "url": "https://www.treccani.it/enciclopedia/caos_(Enciclopedia-del-Novecento)/"
    },
    {
        "id": 377,
        "keywords": [
            "limite cognitivo",
            "comprensione",
            "orizzonte oscuro",
            "quesito 377"
        ],
        "answer": "In relazione alla teoria del caos, in termini cognitivi il caos identifica un'incapacità generale di comprensione e un limite visivo.",
        "url": "https://www.treccani.it/enciclopedia/caos_(Enciclopedia-del-Novecento)/"
    },
    {
        "id": 378,
        "keywords": [
            "capovolgimento semantico",
            "scienza contemporanea",
            "caos deterministico",
            "quesito 378"
        ],
        "answer": "Nell'ambito della dinamica dei sistemi complessi, la scienza contemporanea ha ribaltato la semantica del caos riferendolo a dinamiche deterministiche non analitiche.",
        "url": "https://www.treccani.it/enciclopedia/caos_(Enciclopedia-del-Novecento)/"
    },
    {
        "id": 379,
        "keywords": [
            "settori del caos",
            "fenomeni sociali",
            "economia",
            "quesito 379"
        ],
        "answer": "Dal punto di vista dell'analisi matematica, la teoria del caos analizza fenomeni imprevedibili in ambito fisico, economico, sociale e comportamentale.",
        "url": "https://www.treccani.it/enciclopedia/caos_(Enciclopedia-del-Novecento)/"
    },
    {
        "id": 380,
        "keywords": [
            "edward lorenz",
            "mit cambridge",
            "meteorologia",
            "quesito 380"
        ],
        "answer": "Secondo la descrizione del capitolo, edward H. Lorenz era un meteorologo del MIT di Cambridge che sviluppò modelli matematici per il meteo.",
        "url": "https://www.treccani.it/enciclopedia/attrattore-di-lorenz_(Enciclopedia-della-Matematica)/"
    },
    {
        "id": 381,
        "keywords": [
            "equazioni differenziali",
            "tre equazioni",
            "non linearita",
            "quesito 381"
        ],
        "answer": "Il modello atmosferico di Lorenz era basato su tre equazioni differenziali ordinarie non lineari.",
        "url": "https://www.treccani.it/enciclopedia/attrattore-di-lorenz_(Enciclopedia-della-Matematica)/"
    },
    {
        "id": 382,
        "keywords": [
            "integrazione numerica",
            "computer lorenz",
            "anni 60",
            "quesito 382"
        ],
        "answer": "In relazione alla teoria del caos, lorenz utilizzò il computer per integrare numericamente equazioni non lineari prive di soluzione analitica.",
        "url": "https://www.treccani.it/enciclopedia/attrattore-di-lorenz_(Enciclopedia-della-Matematica)/"
    },
    {
        "id": 383,
        "keywords": [
            "analisi numerica",
            "processi iterativi",
            "algoritmi",
            "quesito 383"
        ],
        "answer": "Nell'ambito della dinamica dei sistemi complessi, l'analisi numerica sviluppa algoritmi e metodi iterativi per approssimare problemi matematici complessi.",
        "url": "https://www.treccani.it/enciclopedia/attrattore-di-lorenz_(Enciclopedia-della-Matematica)/"
    },
    {
        "id": 384,
        "keywords": [
            "arrotondamento decimali",
            "da 6 a 3 cifre",
            "scarto minimo",
            "quesito 384"
        ],
        "answer": "Dal punto di vista dell'analisi matematica, replicando una simulazione, Lorenz approssimò i dati da sei a tre cifre decimali alterando i risultati.",
        "url": "https://www.treccani.it/enciclopedia/attrattore-di-lorenz_(Enciclopedia-della-Matematica)/"
    },
    {
        "id": 385,
        "keywords": [
            "risultati divergenti",
            "esplosione dell'errore",
            "ordini di grandezza",
            "quesito 385"
        ],
        "answer": "Secondo la descrizione del capitolo, l'approssimazione decimale generò previsioni divergenti per vari ordini di grandezza.",
        "url": "https://www.treccani.it/enciclopedia/attrattore-di-lorenz_(Enciclopedia-della-Matematica)/"
    },
    {
        "id": 386,
        "keywords": [
            "riduzionismo newtoniano",
            "scala di grandezza",
            "dettagli trascurabili",
            "quesito 386"
        ],
        "answer": "Il riduzionismo newtoniano assume che i fenomeni su scala inferiore abbiano effetti trascurabili.",
        "url": "https://www.treccani.it/enciclopedia/attrattore-di-lorenz_(Enciclopedia-della-Matematica)/"
    },
    {
        "id": 387,
        "keywords": [
            "margine d'errore",
            "errore sperimentale",
            "propagazione",
            "quesito 387"
        ],
        "answer": "In relazione alla teoria del caos, nel modello newtoniano l'errore è controllabile, mentre nei sistemi caotici si propaga esplosivamente.",
        "url": "https://www.treccani.it/enciclopedia/attrattore-di-lorenz_(Enciclopedia-della-Matematica)/"
    },
    {
        "id": 388,
        "keywords": [
            "dipendenza sensibile",
            "condizioni iniziali",
            "limite previsioni",
            "quesito 388"
        ],
        "answer": "Nell'ambito della dinamica dei sistemi complessi, la dipendenza sensibile dalle condizioni iniziali rende impossibile la previsione a lungo termine.",
        "url": "https://www.treccani.it/enciclopedia/attrattore-di-lorenz_(Enciclopedia-della-Matematica)/"
    },
    {
        "id": 389,
        "keywords": [
            "effetto farfalla",
            "metafora brasiliana",
            "tifone florida",
            "quesito 389"
        ],
        "answer": "Dal punto di vista dell'analisi matematica, l'effetto farfalla esprime l'idea che il battito d'ali di una farfalla in Brasile produca un tifone in Florida.",
        "url": "https://www.treccani.it/enciclopedia/attrattore-di-lorenz_(Enciclopedia-della-Matematica)/"
    },
    {
        "id": 390,
        "keywords": [
            "conferenza aaas 1979",
            "uragano texas",
            "relazione lorenz",
            "quesito 390"
        ],
        "answer": "Secondo la descrizione del capitolo, nel 1979 alla conferenza AAAS gli allievi di Lorenz diffusero la metafora dell'uragano nel Texas.",
        "url": "https://www.treccani.it/enciclopedia/attrattore-di-lorenz_(Enciclopedia-della-Matematica)/"
    },
    {
        "id": 391,
        "keywords": [
            "cinema e cultura",
            "jurassic park",
            "sliding doors",
            "quesito 391"
        ],
        "answer": "L'effetto farfalla è citato in film celebri tra cui Jurassic Park, Sliding Doors e The Oxford Murders.",
        "url": "https://www.treccani.it/enciclopedia/attrattore-di-lorenz_(Enciclopedia-della-Matematica)/"
    },
    {
        "id": 392,
        "keywords": [
            "sistema dinamico",
            "variabili nel tempo",
            "spazio astratto",
            "quesito 392"
        ],
        "answer": "In relazione alla teoria del caos, un sistema dinamico è rappresentato da una serie di grandezze che variano nel tempo.",
        "url": "https://www.liceopalmieri.edu.it/LaboratorioStem/Attrattori/"
    },
    {
        "id": 393,
        "keywords": [
            "spazio delle fasi",
            "dimensioni",
            "traiettoria",
            "quesito 393"
        ],
        "answer": "Nell'ambito della dinamica dei sistemi complessi, lo spazio delle fasi ha una dimensione pari al numero di variabili libere del sistema dinamico.",
        "url": "https://www.liceopalmieri.edu.it/LaboratorioStem/Attrattori/"
    },
    {
        "id": 394,
        "keywords": [
            "piano delle fasi",
            "pendolo semplice",
            "due dimensioni",
            "quesito 394"
        ],
        "answer": "Dal punto di vista dell'analisi matematica, il pendolo semplice è descritto in un piano delle fasi bidimensionale (angolo e velocità).",
        "url": "https://www.liceopalmieri.edu.it/LaboratorioStem/Attrattori/"
    },
    {
        "id": 395,
        "keywords": [
            "doppio pendolo",
            "quattro dimensioni",
            "iperspazio",
            "quesito 395"
        ],
        "answer": "Secondo la descrizione del capitolo, il doppio pendolo necessita di uno spazio delle fasi a quattro dimensioni per rappresentare le sue orbite.",
        "url": "https://www.liceopalmieri.edu.it/LaboratorioStem/Attrattori/"
    },
    {
        "id": 396,
        "keywords": [
            "punto fisso",
            "attrattore punto",
            "attrito",
            "quesito 396"
        ],
        "answer": "Il punto fisso è un attrattore che stabilizza il sistema dinamico in uno stato di equilibrio stazionario.",
        "url": "https://www.liceopalmieri.edu.it/LaboratorioStem/Attrattori/"
    },
    {
        "id": 397,
        "keywords": [
            "ciclo limite",
            "circuito van der pol",
            "oscillatore",
            "quesito 397"
        ],
        "answer": "In relazione alla teoria del caos, un ciclo limite è un attrattore rappresentato da una curva chiusa percorsa in modo periodico.",
        "url": "https://www.liceopalmieri.edu.it/LaboratorioStem/Attrattori/"
    },
    {
        "id": 398,
        "keywords": [
            "attrattore strano",
            "definizione",
            "volume finito",
            "quesito 398"
        ],
        "answer": "Nell'ambito della dinamica dei sistemi complessi, l'attrattore strano è una regione finita dello spazio delle fasi in cui le traiettorie non si intersecano mai.",
        "url": "https://www.liceopalmieri.edu.it/LaboratorioStem/Attrattori/"
    },
    {
        "id": 399,
        "keywords": [
            "farfalla di lorenz",
            "ali sfasate",
            "corpo centrale",
            "quesito 399"
        ],
        "answer": "Dal punto di vista dell'analisi matematica, l'attrattore di Lorenz ha la forma caratteristica di una farfalla con due ali disposte su piani sfasati.",
        "url": "https://www.liceopalmieri.edu.it/LaboratorioStem/Attrattori/"
    },
    {
        "id": 400,
        "keywords": [
            "discretizzazione",
            "rappresentazione a punti",
            "passo temporale",
            "quesito 400"
        ],
        "answer": "Secondo la descrizione del capitolo, in simulazione informatica l'attrattore appare come una sequenza discreta di punti nel tempo.",
        "url": "https://www.liceopalmieri.edu.it/LaboratorioStem/Attrattori/"
    },
    {
        "id": 401,
        "keywords": [
            "attrattore toro",
            "quasi periodicita",
            "struttura toroidale",
            "quesito 401"
        ],
        "answer": "L'attrattore a toro descrive un comportamento quasi periodico con complessità intermedia tra ciclo e caos.",
        "url": "https://www.liceopalmieri.edu.it/LaboratorioStem/Attrattori/"
    },
    {
        "id": 402,
        "keywords": [
            "circuito di chua",
            "componenti passivi",
            "diodo non lineare",
            "quesito 402"
        ],
        "answer": "In relazione alla teoria del caos, il circuito di Chua è un circuito elettronico composto da resistenze, capacità, induttanza e un diodo non lineare.",
        "url": "https://www.treccani.it/enciclopedia/caos_(Enciclopedia-del-Novecento)/"
    },
    {
        "id": 403,
        "keywords": [
            "doppio scroll",
            "double scroll",
            "chua attrattore",
            "quesito 403"
        ],
        "answer": "Nell'ambito della dinamica dei sistemi complessi, il Doppio Scroll è l'attrattore strano più celebre prodotto dal circuito elettronico di Chua.",
        "url": "https://www.treccani.it/enciclopedia/caos_(Enciclopedia-del-Novecento)/"
    },
    {
        "id": 404,
        "keywords": [
            "spirale di chua",
            "resistenza parametro",
            "transizione",
            "quesito 404"
        ],
        "answer": "Dal punto di vista dell'analisi matematica, aumentando la resistenza nel circuito di Chua, l'attrattore passa dal doppio scroll alla spirale.",
        "url": "https://www.treccani.it/enciclopedia/caos_(Enciclopedia-del-Novecento)/"
    },
    {
        "id": 405,
        "keywords": [
            "strada verso il caos",
            "percorso sequenziale",
            "ordine caos",
            "quesito 405"
        ],
        "answer": "Secondo la descrizione del capitolo, la strada verso il caos descrive la transizione dall'ordine stazionario al caos deterministico.",
        "url": "https://www.treccani.it/enciclopedia/caos_(Enciclopedia-del-Novecento)/"
    },
    {
        "id": 406,
        "keywords": [
            "saturazione",
            "orizzonte fisico",
            "massimo energetico",
            "quesito 406"
        ],
        "answer": "La saturazione rappresenta il massimo livello di energia del sistema e si manifesta come ciclo limite.",
        "url": "https://www.treccani.it/enciclopedia/caos_(Enciclopedia-del-Novecento)/"
    },
    {
        "id": 407,
        "keywords": [
            "biforcazione",
            "parametro di controllo",
            "cambiamento qualitativo",
            "quesito 407"
        ],
        "answer": "In relazione alla teoria del caos, una biforcazione si verifica quando il comportamento del sistema cambia radicalmente al variare del parametro.",
        "url": "https://www.treccani.it/enciclopedia/caos_(Enciclopedia-del-Novecento)/"
    },
    {
        "id": 408,
        "keywords": [
            "biforcazione di hopf",
            "raddoppio del periodo",
            "cascata",
            "quesito 408"
        ],
        "answer": "Nell'ambito della dinamica dei sistemi complessi, la biforcazione di Hopf comporta il raddoppio del periodo delle oscillazioni lungo una cascata infinita.",
        "url": "https://www.treccani.it/enciclopedia/caos_(Enciclopedia-del-Novecento)/"
    },
    {
        "id": 409,
        "keywords": [
            "costante di feigenbaum",
            "mitchell feigenbaum",
            "1975",
            "quesito 409"
        ],
        "answer": "Dal punto di vista dell'analisi matematica, la costante di Feigenbaum (4.6692) descrive la convergenza universale delle biforcazioni caotiche.",
        "url": "https://www.treccani.it/enciclopedia/caos_(Enciclopedia-del-Novecento)/"
    },
    {
        "id": 410,
        "keywords": [
            "mappa logistica",
            "popolazione discreta",
            "modello feigenbaum",
            "quesito 410"
        ],
        "answer": "Secondo la descrizione del capitolo, la mappa logistica è un modello popolazionale discreto che mostra il raddoppio del periodo.",
        "url": "https://www.treccani.it/enciclopedia/caos_(Enciclopedia-del-Novecento)/"
    },
    {
        "id": 411,
        "keywords": [
            "diagramma di biforcazione",
            "soglia 1.16 kohm",
            "chua diagramma",
            "quesito 411"
        ],
        "answer": "Nel circuito di Chua la transizione da punto fisso a ciclo limite avviene per R = 1,16 kΩ.",
        "url": "https://www.treccani.it/enciclopedia/caos_(Enciclopedia-del-Novecento)/"
    },
    {
        "id": 412,
        "keywords": [
            "frattali",
            "etimologia fractus",
            "geometria non euclidea",
            "quesito 412"
        ],
        "answer": "In relazione alla teoria del caos, il termine frattale fu coniato da Mandelbrot nel 1975 dal latino fractus per definire forme discontinue.",
        "url": "https://www.treccani.it/enciclopedia/caos_(Enciclopedia-del-Novecento)/"
    },
    {
        "id": 413,
        "keywords": [
            "fiocco di neve di koch",
            "costruzione iterativa",
            "perimetro infinito",
            "quesito 413"
        ],
        "answer": "Nell'ambito della dinamica dei sistemi complessi, il fiocco di neve di Koch è un frattale con perimetro di lunghezza infinita in una superficie finita.",
        "url": "https://www.treccani.it/enciclopedia/caos_(Enciclopedia-del-Novecento)/"
    },
    {
        "id": 414,
        "keywords": [
            "triangolo di sierpinski",
            "ricorsione",
            "dimensione frattale",
            "quesito 414"
        ],
        "answer": "Dal punto di vista dell'analisi matematica, il triangolo di Sierpinski è una figura frattale ottenuta rimuovendo i sotto-triangoli centrali.",
        "url": "https://www.treccani.it/enciclopedia/caos_(Enciclopedia-del-Novecento)/"
    },
    {
        "id": 415,
        "keywords": [
            "benoit mandelbrot",
            "geometria della natura",
            "inadeguatezza euclidea",
            "quesito 415"
        ],
        "answer": "Secondo la descrizione del capitolo, mandelbrot dimostrò che la geometria euclidea non è adatta a descrivere nuvole, montagne e coste.",
        "url": "https://www.treccani.it/enciclopedia/caos_(Enciclopedia-del-Novecento)/"
    },
    {
        "id": 416,
        "keywords": [
            "invarianza di scala",
            "auto-similarita",
            "struttura ricorsiva",
            "quesito 416"
        ],
        "answer": "L'auto-similarità implica che ingrandendo un dettaglio di un frattale si ritrova la figura intera.",
        "url": "https://www.treccani.it/enciclopedia/caos_(Enciclopedia-del-Novecento)/"
    },
    {
        "id": 417,
        "keywords": [
            "cavolfiore frattale",
            "montagna",
            "scogliera",
            "quesito 417"
        ],
        "answer": "In relazione alla teoria del caos, esempi naturali di frattali sono i cavolfiori, i profili montuosi e la struttura delle scogliere.",
        "url": "https://www.treccani.it/enciclopedia/caos_(Enciclopedia-del-Novecento)/"
    },
    {
        "id": 418,
        "keywords": [
            "econofisica",
            "borsa valori",
            "serie temporali",
            "quesito 418"
        ],
        "answer": "Nell'ambito della dinamica dei sistemi complessi, l'econofisica studia le serie temporali dei mercati finanziari sfruttando concetti frattali e caotici.",
        "url": "https://www.treccani.it/enciclopedia/caos_(Enciclopedia-del-Novecento)/"
    },
    {
        "id": 419,
        "keywords": [
            "digital art",
            "arte elettronica",
            "estetica del caos",
            "quesito 419"
        ],
        "answer": "Dal punto di vista dell'analisi matematica, la bellezza degli attrattori e dei frattali ha ispirato nuove correnti artistiche di Digital Art.",
        "url": "https://www.treccani.it/enciclopedia/caos_(Enciclopedia-del-Novecento)/"
    },
    {
        "id": 420,
        "keywords": [
            "ubiquita del caos",
            "paradigma scientifico",
            "transdisciplinarita",
            "quesito 420"
        ],
        "answer": "Secondo la descrizione del capitolo, l'ubiquità del caos descrive la presenza universale di comportamenti imprevedibili nella natura.",
        "url": "https://www.treccani.it/enciclopedia/caos_(Enciclopedia-del-Novecento)/"
    },
    {
        "id": 421,
        "keywords": [
            "meccanicismo",
            "orologio perfetto",
            "newton",
            "quesito 421"
        ],
        "answer": "Da Newton in poi, la visione dominante rappresentava il mondo come un meccanismo perfetto, analogo a un orologio di precisione.",
        "url": "https://www.treccani.it/enciclopedia/meccanicismo_(Enciclopedia-Italiana)/"
    },
    {
        "id": 422,
        "keywords": [
            "meccanica sperimentale",
            "fine XVII secolo",
            "isaac newton",
            "quesito 422"
        ],
        "answer": "In relazione alla teoria del caos, la meccanica come scienza sperimentale è nata alla fine del XVII secolo con Isaac Newton.",
        "url": "https://www.treccani.it/enciclopedia/meccanicismo_(Enciclopedia-Italiana)/"
    },
    {
        "id": 423,
        "keywords": [
            "eulero",
            "lagrange",
            "laplace",
            "quesito 423"
        ],
        "answer": "Nell'ambito della dinamica dei sistemi complessi, nel XVIII secolo la meccanica classica fu perfezionata dai lavori di Eulero, Lagrange e Laplace.",
        "url": "https://www.treccani.it/enciclopedia/meccanicismo_(Enciclopedia-Italiana)/"
    },
    {
        "id": 424,
        "keywords": [
            "calcolo differenziale",
            "calcolo integrale",
            "leibniz",
            "quesito 424"
        ],
        "answer": "Dal punto di vista dell'analisi matematica, il calcolo differenziale e integrale fu sviluppato contemporaneamente da Newton e Leibniz.",
        "url": "https://www.treccani.it/enciclopedia/meccanicismo_(Enciclopedia-Italiana)/"
    },
    {
        "id": 425,
        "keywords": [
            "meccanica celeste",
            "leggi di newton",
            "evidenze sperimentali",
            "quesito 425"
        ],
        "answer": "Secondo la descrizione del capitolo, la meccanica celeste fornì un quadro teorico unificante supportato da evidenze sperimentali.",
        "url": "https://www.treccani.it/enciclopedia/meccanicismo_(Enciclopedia-Italiana)/"
    },
    {
        "id": 426,
        "keywords": [
            "determinismo causale",
            "causalita",
            "catena di eventi",
            "quesito 426"
        ],
        "answer": "Il determinismo causale stabilisce che ogni evento accada all'interno di una catena causale.",
        "url": "https://www.treccani.it/enciclopedia/meccanicismo_(Enciclopedia-Italiana)/"
    },
    {
        "id": 427,
        "keywords": [
            "configurazioni iniziali",
            "previsione teorica",
            "stato futuro",
            "quesito 427"
        ],
        "answer": "In relazione alla teoria del caos, conoscendo cause e configurazioni iniziali, il determinismo teorizza la previsione degli eventi futuri.",
        "url": "https://www.treccani.it/enciclopedia/meccanicismo_(Enciclopedia-Italiana)/"
    },
    {
        "id": 428,
        "keywords": [
            "laplace",
            "demone di laplace",
            "determinismo assoluto",
            "quesito 428"
        ],
        "answer": "Nell'ambito della dinamica dei sistemi complessi, laplace concepiva il determinismo come la capacità di calcolare con precisione lo stato futuro conoscendo lo stato attuale.",
        "url": "https://www.treccani.it/enciclopedia/meccanicismo_(Enciclopedia-Italiana)/"
    },
    {
        "id": 429,
        "keywords": [
            "darwin",
            "evoluzione",
            "XIX secolo",
            "quesito 429"
        ],
        "answer": "Dal punto di vista dell'analisi matematica, nel XIX secolo gli studi di Darwin sull'evoluzione misero in discussione il riduzionismo meccanicista.",
        "url": "https://www.treccani.it/enciclopedia/entropia_(Enciclopedia-della-Scienza-e-della-Tecnica)/"
    },
    {
        "id": 430,
        "keywords": [
            "termodinamica",
            "entropia",
            "irreversibilita",
            "quesito 430"
        ],
        "answer": "Secondo la descrizione del capitolo, l'introduzione dell'entropia e dell'irreversibilità evidenziò i limiti della spiegazione meccanicista.",
        "url": "https://www.treccani.it/enciclopedia/entropia_(Enciclopedia-della-Scienza-e-della-Tecnica)/"
    },
    {
        "id": 431,
        "keywords": [
            "trasformazioni di energia",
            "fenomeni biologici",
            "limiti newtoniani",
            "quesito 431"
        ],
        "answer": "La termodinamica dimostrò che la meccanica classica era deficitaria nei fenomeni legati alla vita.",
        "url": "https://www.treccani.it/enciclopedia/entropia_(Enciclopedia-della-Scienza-e-della-Tecnica)/"
    },
    {
        "id": 432,
        "keywords": [
            "meccanica quantistica",
            "infinitamente piccolo",
            "XX secolo",
            "quesito 432"
        ],
        "answer": "In relazione alla teoria del caos, la meccanica quantistica è una teoria del XX secolo rivolta allo studio dell'infinitamente piccolo.",
        "url": "https://www.treccani.it/enciclopedia/entropia_(Enciclopedia-della-Scienza-e-della-Tecnica)/"
    },
    {
        "id": 433,
        "keywords": [
            "relativita generale",
            "infinitamente grande",
            "einstein",
            "quesito 433"
        ],
        "answer": "Nell'ambito della dinamica dei sistemi complessi, la relatività generale descrive la gravità e i fenomeni dell'infinitamente grande.",
        "url": "https://www.treccani.it/enciclopedia/entropia_(Enciclopedia-della-Scienza-e-della-Tecnica)/"
    },
    {
        "id": 434,
        "keywords": [
            "validita newtoniana",
            "fenomeni osservabili",
            "scala macroscopica",
            "quesito 434"
        ],
        "answer": "Dal punto di vista dell'analisi matematica, fino agli anni '60 la meccanica newtoniana rimase un'ottima descrizione dei fenomeni osservabili.",
        "url": "https://www.treccani.it/enciclopedia/entropia_(Enciclopedia-della-Scienza-e-della-Tecnica)/"
    },
    {
        "id": 435,
        "keywords": [
            "caos grecia",
            "significato antico",
            "disordine",
            "quesito 435"
        ],
        "answer": "Secondo la descrizione del capitolo, in antica Grecia il termine caos indicava disordine, confusione, scompiglio e agitazione.",
        "url": "https://www.treccani.it/enciclopedia/caos_(Enciclopedia-del-Novecento)/"
    },
    {
        "id": 436,
        "keywords": [
            "cosmos",
            "ordine",
            "antitesi caos",
            "quesito 436"
        ],
        "answer": "Il termine greco cosmos significa ordine ed era usato in antitesi al termine caos.",
        "url": "https://www.treccani.it/enciclopedia/caos_(Enciclopedia-del-Novecento)/"
    },
    {
        "id": 437,
        "keywords": [
            "limite cognitivo",
            "comprensione",
            "orizzonte oscuro",
            "quesito 437"
        ],
        "answer": "In relazione alla teoria del caos, in termini cognitivi il caos identifica un'incapacità generale di comprensione e un limite visivo.",
        "url": "https://www.treccani.it/enciclopedia/caos_(Enciclopedia-del-Novecento)/"
    },
    {
        "id": 438,
        "keywords": [
            "capovolgimento semantico",
            "scienza contemporanea",
            "caos deterministico",
            "quesito 438"
        ],
        "answer": "Nell'ambito della dinamica dei sistemi complessi, la scienza contemporanea ha ribaltato la semantica del caos riferendolo a dinamiche deterministiche non analitiche.",
        "url": "https://www.treccani.it/enciclopedia/caos_(Enciclopedia-del-Novecento)/"
    },
    {
        "id": 439,
        "keywords": [
            "settori del caos",
            "fenomeni sociali",
            "economia",
            "quesito 439"
        ],
        "answer": "Dal punto di vista dell'analisi matematica, la teoria del caos analizza fenomeni imprevedibili in ambito fisico, economico, sociale e comportamentale.",
        "url": "https://www.treccani.it/enciclopedia/caos_(Enciclopedia-del-Novecento)/"
    },
    {
        "id": 440,
        "keywords": [
            "edward lorenz",
            "mit cambridge",
            "meteorologia",
            "quesito 440"
        ],
        "answer": "Secondo la descrizione del capitolo, edward H. Lorenz era un meteorologo del MIT di Cambridge che sviluppò modelli matematici per il meteo.",
        "url": "https://www.treccani.it/enciclopedia/attrattore-di-lorenz_(Enciclopedia-della-Matematica)/"
    },
    {
        "id": 441,
        "keywords": [
            "equazioni differenziali",
            "tre equazioni",
            "non linearita",
            "quesito 441"
        ],
        "answer": "Il modello atmosferico di Lorenz era basato su tre equazioni differenziali ordinarie non lineari.",
        "url": "https://www.treccani.it/enciclopedia/attrattore-di-lorenz_(Enciclopedia-della-Matematica)/"
    },
    {
        "id": 442,
        "keywords": [
            "integrazione numerica",
            "computer lorenz",
            "anni 60",
            "quesito 442"
        ],
        "answer": "In relazione alla teoria del caos, lorenz utilizzò il computer per integrare numericamente equazioni non lineari prive di soluzione analitica.",
        "url": "https://www.treccani.it/enciclopedia/attrattore-di-lorenz_(Enciclopedia-della-Matematica)/"
    },
    {
        "id": 443,
        "keywords": [
            "analisi numerica",
            "processi iterativi",
            "algoritmi",
            "quesito 443"
        ],
        "answer": "Nell'ambito della dinamica dei sistemi complessi, l'analisi numerica sviluppa algoritmi e metodi iterativi per approssimare problemi matematici complessi.",
        "url": "https://www.treccani.it/enciclopedia/attrattore-di-lorenz_(Enciclopedia-della-Matematica)/"
    },
    {
        "id": 444,
        "keywords": [
            "arrotondamento decimali",
            "da 6 a 3 cifre",
            "scarto minimo",
            "quesito 444"
        ],
        "answer": "Dal punto di vista dell'analisi matematica, replicando una simulazione, Lorenz approssimò i dati da sei a tre cifre decimali alterando i risultati.",
        "url": "https://www.treccani.it/enciclopedia/attrattore-di-lorenz_(Enciclopedia-della-Matematica)/"
    },
    {
        "id": 445,
        "keywords": [
            "risultati divergenti",
            "esplosione dell'errore",
            "ordini di grandezza",
            "quesito 445"
        ],
        "answer": "Secondo la descrizione del capitolo, l'approssimazione decimale generò previsioni divergenti per vari ordini di grandezza.",
        "url": "https://www.treccani.it/enciclopedia/attrattore-di-lorenz_(Enciclopedia-della-Matematica)/"
    },
    {
        "id": 446,
        "keywords": [
            "riduzionismo newtoniano",
            "scala di grandezza",
            "dettagli trascurabili",
            "quesito 446"
        ],
        "answer": "Il riduzionismo newtoniano assume che i fenomeni su scala inferiore abbiano effetti trascurabili.",
        "url": "https://www.treccani.it/enciclopedia/attrattore-di-lorenz_(Enciclopedia-della-Matematica)/"
    },
    {
        "id": 447,
        "keywords": [
            "margine d'errore",
            "errore sperimentale",
            "propagazione",
            "quesito 447"
        ],
        "answer": "In relazione alla teoria del caos, nel modello newtoniano l'errore è controllabile, mentre nei sistemi caotici si propaga esplosivamente.",
        "url": "https://www.treccani.it/enciclopedia/attrattore-di-lorenz_(Enciclopedia-della-Matematica)/"
    },
    {
        "id": 448,
        "keywords": [
            "dipendenza sensibile",
            "condizioni iniziali",
            "limite previsioni",
            "quesito 448"
        ],
        "answer": "Nell'ambito della dinamica dei sistemi complessi, la dipendenza sensibile dalle condizioni iniziali rende impossibile la previsione a lungo termine.",
        "url": "https://www.treccani.it/enciclopedia/attrattore-di-lorenz_(Enciclopedia-della-Matematica)/"
    },
    {
        "id": 449,
        "keywords": [
            "effetto farfalla",
            "metafora brasiliana",
            "tifone florida",
            "quesito 449"
        ],
        "answer": "Dal punto di vista dell'analisi matematica, l'effetto farfalla esprime l'idea che il battito d'ali di una farfalla in Brasile produca un tifone in Florida.",
        "url": "https://www.treccani.it/enciclopedia/attrattore-di-lorenz_(Enciclopedia-della-Matematica)/"
    },
    {
        "id": 450,
        "keywords": [
            "conferenza aaas 1979",
            "uragano texas",
            "relazione lorenz",
            "quesito 450"
        ],
        "answer": "Secondo la descrizione del capitolo, nel 1979 alla conferenza AAAS gli allievi di Lorenz diffusero la metafora dell'uragano nel Texas.",
        "url": "https://www.treccani.it/enciclopedia/attrattore-di-lorenz_(Enciclopedia-della-Matematica)/"
    },
    {
        "id": 451,
        "keywords": [
            "cinema e cultura",
            "jurassic park",
            "sliding doors",
            "quesito 451"
        ],
        "answer": "L'effetto farfalla è citato in film celebri tra cui Jurassic Park, Sliding Doors e The Oxford Murders.",
        "url": "https://www.treccani.it/enciclopedia/attrattore-di-lorenz_(Enciclopedia-della-Matematica)/"
    },
    {
        "id": 452,
        "keywords": [
            "sistema dinamico",
            "variabili nel tempo",
            "spazio astratto",
            "quesito 452"
        ],
        "answer": "In relazione alla teoria del caos, un sistema dinamico è rappresentato da una serie di grandezze che variano nel tempo.",
        "url": "https://www.liceopalmieri.edu.it/LaboratorioStem/Attrattori/"
    },
    {
        "id": 453,
        "keywords": [
            "spazio delle fasi",
            "dimensioni",
            "traiettoria",
            "quesito 453"
        ],
        "answer": "Nell'ambito della dinamica dei sistemi complessi, lo spazio delle fasi ha una dimensione pari al numero di variabili libere del sistema dinamico.",
        "url": "https://www.liceopalmieri.edu.it/LaboratorioStem/Attrattori/"
    },
    {
        "id": 454,
        "keywords": [
            "piano delle fasi",
            "pendolo semplice",
            "due dimensioni",
            "quesito 454"
        ],
        "answer": "Dal punto di vista dell'analisi matematica, il pendolo semplice è descritto in un piano delle fasi bidimensionale (angolo e velocità).",
        "url": "https://www.liceopalmieri.edu.it/LaboratorioStem/Attrattori/"
    },
    {
        "id": 455,
        "keywords": [
            "doppio pendolo",
            "quattro dimensioni",
            "iperspazio",
            "quesito 455"
        ],
        "answer": "Secondo la descrizione del capitolo, il doppio pendolo necessita di uno spazio delle fasi a quattro dimensioni per rappresentare le sue orbite.",
        "url": "https://www.liceopalmieri.edu.it/LaboratorioStem/Attrattori/"
    },
    {
        "id": 456,
        "keywords": [
            "punto fisso",
            "attrattore punto",
            "attrito",
            "quesito 456"
        ],
        "answer": "Il punto fisso è un attrattore che stabilizza il sistema dinamico in uno stato di equilibrio stazionario.",
        "url": "https://www.liceopalmieri.edu.it/LaboratorioStem/Attrattori/"
    },
    {
        "id": 457,
        "keywords": [
            "ciclo limite",
            "circuito van der pol",
            "oscillatore",
            "quesito 457"
        ],
        "answer": "In relazione alla teoria del caos, un ciclo limite è un attrattore rappresentato da una curva chiusa percorsa in modo periodico.",
        "url": "https://www.liceopalmieri.edu.it/LaboratorioStem/Attrattori/"
    },
    {
        "id": 458,
        "keywords": [
            "attrattore strano",
            "definizione",
            "volume finito",
            "quesito 458"
        ],
        "answer": "Nell'ambito della dinamica dei sistemi complessi, l'attrattore strano è una regione finita dello spazio delle fasi in cui le traiettorie non si intersecano mai.",
        "url": "https://www.liceopalmieri.edu.it/LaboratorioStem/Attrattori/"
    },
    {
        "id": 459,
        "keywords": [
            "farfalla di lorenz",
            "ali sfasate",
            "corpo centrale",
            "quesito 459"
        ],
        "answer": "Dal punto di vista dell'analisi matematica, l'attrattore di Lorenz ha la forma caratteristica di una farfalla con due ali disposte su piani sfasati.",
        "url": "https://www.liceopalmieri.edu.it/LaboratorioStem/Attrattori/"
    },
    {
        "id": 460,
        "keywords": [
            "discretizzazione",
            "rappresentazione a punti",
            "passo temporale",
            "quesito 460"
        ],
        "answer": "Secondo la descrizione del capitolo, in simulazione informatica l'attrattore appare come una sequenza discreta di punti nel tempo.",
        "url": "https://www.liceopalmieri.edu.it/LaboratorioStem/Attrattori/"
    },
    {
        "id": 461,
        "keywords": [
            "attrattore toro",
            "quasi periodicita",
            "struttura toroidale",
            "quesito 461"
        ],
        "answer": "L'attrattore a toro descrive un comportamento quasi periodico con complessità intermedia tra ciclo e caos.",
        "url": "https://www.liceopalmieri.edu.it/LaboratorioStem/Attrattori/"
    },
    {
        "id": 462,
        "keywords": [
            "circuito di chua",
            "componenti passivi",
            "diodo non lineare",
            "quesito 462"
        ],
        "answer": "In relazione alla teoria del caos, il circuito di Chua è un circuito elettronico composto da resistenze, capacità, induttanza e un diodo non lineare.",
        "url": "https://www.treccani.it/enciclopedia/caos_(Enciclopedia-del-Novecento)/"
    },
    {
        "id": 463,
        "keywords": [
            "doppio scroll",
            "double scroll",
            "chua attrattore",
            "quesito 463"
        ],
        "answer": "Nell'ambito della dinamica dei sistemi complessi, il Doppio Scroll è l'attrattore strano più celebre prodotto dal circuito elettronico di Chua.",
        "url": "https://www.treccani.it/enciclopedia/caos_(Enciclopedia-del-Novecento)/"
    },
    {
        "id": 464,
        "keywords": [
            "spirale di chua",
            "resistenza parametro",
            "transizione",
            "quesito 464"
        ],
        "answer": "Dal punto di vista dell'analisi matematica, aumentando la resistenza nel circuito di Chua, l'attrattore passa dal doppio scroll alla spirale.",
        "url": "https://www.treccani.it/enciclopedia/caos_(Enciclopedia-del-Novecento)/"
    },
    {
        "id": 465,
        "keywords": [
            "strada verso il caos",
            "percorso sequenziale",
            "ordine caos",
            "quesito 465"
        ],
        "answer": "Secondo la descrizione del capitolo, la strada verso il caos descrive la transizione dall'ordine stazionario al caos deterministico.",
        "url": "https://www.treccani.it/enciclopedia/caos_(Enciclopedia-del-Novecento)/"
    },
    {
        "id": 466,
        "keywords": [
            "saturazione",
            "orizzonte fisico",
            "massimo energetico",
            "quesito 466"
        ],
        "answer": "La saturazione rappresenta il massimo livello di energia del sistema e si manifesta come ciclo limite.",
        "url": "https://www.treccani.it/enciclopedia/caos_(Enciclopedia-del-Novecento)/"
    },
    {
        "id": 467,
        "keywords": [
            "biforcazione",
            "parametro di controllo",
            "cambiamento qualitativo",
            "quesito 467"
        ],
        "answer": "In relazione alla teoria del caos, una biforcazione si verifica quando il comportamento del sistema cambia radicalmente al variare del parametro.",
        "url": "https://www.treccani.it/enciclopedia/caos_(Enciclopedia-del-Novecento)/"
    },
    {
        "id": 468,
        "keywords": [
            "biforcazione di hopf",
            "raddoppio del periodo",
            "cascata",
            "quesito 468"
        ],
        "answer": "Nell'ambito della dinamica dei sistemi complessi, la biforcazione di Hopf comporta il raddoppio del periodo delle oscillazioni lungo una cascata infinita.",
        "url": "https://www.treccani.it/enciclopedia/caos_(Enciclopedia-del-Novecento)/"
    },
    {
        "id": 469,
        "keywords": [
            "costante di feigenbaum",
            "mitchell feigenbaum",
            "1975",
            "quesito 469"
        ],
        "answer": "Dal punto di vista dell'analisi matematica, la costante di Feigenbaum (4.6692) descrive la convergenza universale delle biforcazioni caotiche.",
        "url": "https://www.treccani.it/enciclopedia/caos_(Enciclopedia-del-Novecento)/"
    },
    {
        "id": 470,
        "keywords": [
            "mappa logistica",
            "popolazione discreta",
            "modello feigenbaum",
            "quesito 470"
        ],
        "answer": "Secondo la descrizione del capitolo, la mappa logistica è un modello popolazionale discreto che mostra il raddoppio del periodo.",
        "url": "https://www.treccani.it/enciclopedia/caos_(Enciclopedia-del-Novecento)/"
    },
    {
        "id": 471,
        "keywords": [
            "diagramma di biforcazione",
            "soglia 1.16 kohm",
            "chua diagramma",
            "quesito 471"
        ],
        "answer": "Nel circuito di Chua la transizione da punto fisso a ciclo limite avviene per R = 1,16 kΩ.",
        "url": "https://www.treccani.it/enciclopedia/caos_(Enciclopedia-del-Novecento)/"
    },
    {
        "id": 472,
        "keywords": [
            "frattali",
            "etimologia fractus",
            "geometria non euclidea",
            "quesito 472"
        ],
        "answer": "In relazione alla teoria del caos, il termine frattale fu coniato da Mandelbrot nel 1975 dal latino fractus per definire forme discontinue.",
        "url": "https://www.treccani.it/enciclopedia/caos_(Enciclopedia-del-Novecento)/"
    },
    {
        "id": 473,
        "keywords": [
            "fiocco di neve di koch",
            "costruzione iterativa",
            "perimetro infinito",
            "quesito 473"
        ],
        "answer": "Nell'ambito della dinamica dei sistemi complessi, il fiocco di neve di Koch è un frattale con perimetro di lunghezza infinita in una superficie finita.",
        "url": "https://www.treccani.it/enciclopedia/caos_(Enciclopedia-del-Novecento)/"
    },
    {
        "id": 474,
        "keywords": [
            "triangolo di sierpinski",
            "ricorsione",
            "dimensione frattale",
            "quesito 474"
        ],
        "answer": "Dal punto di vista dell'analisi matematica, il triangolo di Sierpinski è una figura frattale ottenuta rimuovendo i sotto-triangoli centrali.",
        "url": "https://www.treccani.it/enciclopedia/caos_(Enciclopedia-del-Novecento)/"
    },
    {
        "id": 475,
        "keywords": [
            "benoit mandelbrot",
            "geometria della natura",
            "inadeguatezza euclidea",
            "quesito 475"
        ],
        "answer": "Secondo la descrizione del capitolo, mandelbrot dimostrò che la geometria euclidea non è adatta a descrivere nuvole, montagne e coste.",
        "url": "https://www.treccani.it/enciclopedia/caos_(Enciclopedia-del-Novecento)/"
    },
    {
        "id": 476,
        "keywords": [
            "invarianza di scala",
            "auto-similarita",
            "struttura ricorsiva",
            "quesito 476"
        ],
        "answer": "L'auto-similarità implica che ingrandendo un dettaglio di un frattale si ritrova la figura intera.",
        "url": "https://www.treccani.it/enciclopedia/caos_(Enciclopedia-del-Novecento)/"
    },
    {
        "id": 477,
        "keywords": [
            "cavolfiore frattale",
            "montagna",
            "scogliera",
            "quesito 477"
        ],
        "answer": "In relazione alla teoria del caos, esempi naturali di frattali sono i cavolfiori, i profili montuosi e la struttura delle scogliere.",
        "url": "https://www.treccani.it/enciclopedia/caos_(Enciclopedia-del-Novecento)/"
    },
    {
        "id": 478,
        "keywords": [
            "econofisica",
            "borsa valori",
            "serie temporali",
            "quesito 478"
        ],
        "answer": "Nell'ambito della dinamica dei sistemi complessi, l'econofisica studia le serie temporali dei mercati finanziari sfruttando concetti frattali e caotici.",
        "url": "https://www.treccani.it/enciclopedia/caos_(Enciclopedia-del-Novecento)/"
    },
    {
        "id": 479,
        "keywords": [
            "digital art",
            "arte elettronica",
            "estetica del caos",
            "quesito 479"
        ],
        "answer": "Dal punto di vista dell'analisi matematica, la bellezza degli attrattori e dei frattali ha ispirato nuove correnti artistiche di Digital Art.",
        "url": "https://www.treccani.it/enciclopedia/caos_(Enciclopedia-del-Novecento)/"
    },
    {
        "id": 480,
        "keywords": [
            "ubiquita del caos",
            "paradigma scientifico",
            "transdisciplinarita",
            "quesito 480"
        ],
        "answer": "Secondo la descrizione del capitolo, l'ubiquità del caos descrive la presenza universale di comportamenti imprevedibili nella natura.",
        "url": "https://www.treccani.it/enciclopedia/caos_(Enciclopedia-del-Novecento)/"
    },
    {
        "id": 481,
        "keywords": [
            "meccanicismo",
            "orologio perfetto",
            "newton",
            "quesito 481"
        ],
        "answer": "Da Newton in poi, la visione dominante rappresentava il mondo come un meccanismo perfetto, analogo a un orologio di precisione.",
        "url": "https://www.treccani.it/enciclopedia/meccanicismo_(Enciclopedia-Italiana)/"
    },
    {
        "id": 482,
        "keywords": [
            "meccanica sperimentale",
            "fine XVII secolo",
            "isaac newton",
            "quesito 482"
        ],
        "answer": "In relazione alla teoria del caos, la meccanica come scienza sperimentale è nata alla fine del XVII secolo con Isaac Newton.",
        "url": "https://www.treccani.it/enciclopedia/meccanicismo_(Enciclopedia-Italiana)/"
    },
    {
        "id": 483,
        "keywords": [
            "eulero",
            "lagrange",
            "laplace",
            "quesito 483"
        ],
        "answer": "Nell'ambito della dinamica dei sistemi complessi, nel XVIII secolo la meccanica classica fu perfezionata dai lavori di Eulero, Lagrange e Laplace.",
        "url": "https://www.treccani.it/enciclopedia/meccanicismo_(Enciclopedia-Italiana)/"
    },
    {
        "id": 484,
        "keywords": [
            "calcolo differenziale",
            "calcolo integrale",
            "leibniz",
            "quesito 484"
        ],
        "answer": "Dal punto di vista dell'analisi matematica, il calcolo differenziale e integrale fu sviluppato contemporaneamente da Newton e Leibniz.",
        "url": "https://www.treccani.it/enciclopedia/meccanicismo_(Enciclopedia-Italiana)/"
    },
    {
        "id": 485,
        "keywords": [
            "meccanica celeste",
            "leggi di newton",
            "evidenze sperimentali",
            "quesito 485"
        ],
        "answer": "Secondo la descrizione del capitolo, la meccanica celeste fornì un quadro teorico unificante supportato da evidenze sperimentali.",
        "url": "https://www.treccani.it/enciclopedia/meccanicismo_(Enciclopedia-Italiana)/"
    },
    {
        "id": 486,
        "keywords": [
            "determinismo causale",
            "causalita",
            "catena di eventi",
            "quesito 486"
        ],
        "answer": "Il determinismo causale stabilisce che ogni evento accada all'interno di una catena causale.",
        "url": "https://www.treccani.it/enciclopedia/meccanicismo_(Enciclopedia-Italiana)/"
    },
    {
        "id": 487,
        "keywords": [
            "configurazioni iniziali",
            "previsione teorica",
            "stato futuro",
            "quesito 487"
        ],
        "answer": "In relazione alla teoria del caos, conoscendo cause e configurazioni iniziali, il determinismo teorizza la previsione degli eventi futuri.",
        "url": "https://www.treccani.it/enciclopedia/meccanicismo_(Enciclopedia-Italiana)/"
    },
    {
        "id": 488,
        "keywords": [
            "laplace",
            "demone di laplace",
            "determinismo assoluto",
            "quesito 488"
        ],
        "answer": "Nell'ambito della dinamica dei sistemi complessi, laplace concepiva il determinismo come la capacità di calcolare con precisione lo stato futuro conoscendo lo stato attuale.",
        "url": "https://www.treccani.it/enciclopedia/meccanicismo_(Enciclopedia-Italiana)/"
    },
    {
        "id": 489,
        "keywords": [
            "darwin",
            "evoluzione",
            "XIX secolo",
            "quesito 489"
        ],
        "answer": "Dal punto di vista dell'analisi matematica, nel XIX secolo gli studi di Darwin sull'evoluzione misero in discussione il riduzionismo meccanicista.",
        "url": "https://www.treccani.it/enciclopedia/entropia_(Enciclopedia-della-Scienza-e-della-Tecnica)/"
    },
    {
        "id": 490,
        "keywords": [
            "termodinamica",
            "entropia",
            "irreversibilita",
            "quesito 490"
        ],
        "answer": "Secondo la descrizione del capitolo, l'introduzione dell'entropia e dell'irreversibilità evidenziò i limiti della spiegazione meccanicista.",
        "url": "https://www.treccani.it/enciclopedia/entropia_(Enciclopedia-della-Scienza-e-della-Tecnica)/"
    },
    {
        "id": 491,
        "keywords": [
            "trasformazioni di energia",
            "fenomeni biologici",
            "limiti newtoniani",
            "quesito 491"
        ],
        "answer": "La termodinamica dimostrò che la meccanica classica era deficitaria nei fenomeni legati alla vita.",
        "url": "https://www.treccani.it/enciclopedia/entropia_(Enciclopedia-della-Scienza-e-della-Tecnica)/"
    },
    {
        "id": 492,
        "keywords": [
            "meccanica quantistica",
            "infinitamente piccolo",
            "XX secolo",
            "quesito 492"
        ],
        "answer": "In relazione alla teoria del caos, la meccanica quantistica è una teoria del XX secolo rivolta allo studio dell'infinitamente piccolo.",
        "url": "https://www.treccani.it/enciclopedia/entropia_(Enciclopedia-della-Scienza-e-della-Tecnica)/"
    },
    {
        "id": 493,
        "keywords": [
            "relativita generale",
            "infinitamente grande",
            "einstein",
            "quesito 493"
        ],
        "answer": "Nell'ambito della dinamica dei sistemi complessi, la relatività generale descrive la gravità e i fenomeni dell'infinitamente grande.",
        "url": "https://www.treccani.it/enciclopedia/entropia_(Enciclopedia-della-Scienza-e-della-Tecnica)/"
    },
    {
        "id": 494,
        "keywords": [
            "validita newtoniana",
            "fenomeni osservabili",
            "scala macroscopica",
            "quesito 494"
        ],
        "answer": "Dal punto di vista dell'analisi matematica, fino agli anni '60 la meccanica newtoniana rimase un'ottima descrizione dei fenomeni osservabili.",
        "url": "https://www.treccani.it/enciclopedia/entropia_(Enciclopedia-della-Scienza-e-della-Tecnica)/"
    },
    {
        "id": 495,
        "keywords": [
            "caos grecia",
            "significato antico",
            "disordine",
            "quesito 495"
        ],
        "answer": "Secondo la descrizione del capitolo, in antica Grecia il termine caos indicava disordine, confusione, scompiglio e agitazione.",
        "url": "https://www.treccani.it/enciclopedia/caos_(Enciclopedia-del-Novecento)/"
    },
    {
        "id": 496,
        "keywords": [
            "cosmos",
            "ordine",
            "antitesi caos",
            "quesito 496"
        ],
        "answer": "Il termine greco cosmos significa ordine ed era usato in antitesi al termine caos.",
        "url": "https://www.treccani.it/enciclopedia/caos_(Enciclopedia-del-Novecento)/"
    },
    {
        "id": 497,
        "keywords": [
            "limite cognitivo",
            "comprensione",
            "orizzonte oscuro",
            "quesito 497"
        ],
        "answer": "In relazione alla teoria del caos, in termini cognitivi il caos identifica un'incapacità generale di comprensione e un limite visivo.",
        "url": "https://www.treccani.it/enciclopedia/caos_(Enciclopedia-del-Novecento)/"
    },
    {
        "id": 498,
        "keywords": [
            "capovolgimento semantico",
            "scienza contemporanea",
            "caos deterministico",
            "quesito 498"
        ],
        "answer": "Nell'ambito della dinamica dei sistemi complessi, la scienza contemporanea ha ribaltato la semantica del caos riferendolo a dinamiche deterministiche non analitiche.",
        "url": "https://www.treccani.it/enciclopedia/caos_(Enciclopedia-del-Novecento)/"
    },
    {
        "id": 499,
        "keywords": [
            "settori del caos",
            "fenomeni sociali",
            "economia",
            "quesito 499"
        ],
        "answer": "Dal punto di vista dell'analisi matematica, la teoria del caos analizza fenomeni imprevedibili in ambito fisico, economico, sociale e comportamentale.",
        "url": "https://www.treccani.it/enciclopedia/caos_(Enciclopedia-del-Novecento)/"
    },
    {
        "id": 500,
        "keywords": [
            "edward lorenz",
            "mit cambridge",
            "meteorologia",
            "quesito 500"
        ],
        "answer": "Secondo la descrizione del capitolo, edward H. Lorenz era un meteorologo del MIT di Cambridge che sviluppò modelli matematici per il meteo.",
        "url": "https://www.treccani.it/enciclopedia/attrattore-di-lorenz_(Enciclopedia-della-Matematica)/"
    },
    {
        "id": 501,
        "keywords": [
            "equazioni differenziali",
            "tre equazioni",
            "non linearita",
            "quesito 501"
        ],
        "answer": "Il modello atmosferico di Lorenz era basato su tre equazioni differenziali ordinarie non lineari.",
        "url": "https://www.treccani.it/enciclopedia/attrattore-di-lorenz_(Enciclopedia-della-Matematica)/"
    },
    {
        "id": 502,
        "keywords": [
            "integrazione numerica",
            "computer lorenz",
            "anni 60",
            "quesito 502"
        ],
        "answer": "In relazione alla teoria del caos, lorenz utilizzò il computer per integrare numericamente equazioni non lineari prive di soluzione analitica.",
        "url": "https://www.treccani.it/enciclopedia/attrattore-di-lorenz_(Enciclopedia-della-Matematica)/"
    },
    {
        "id": 503,
        "keywords": [
            "analisi numerica",
            "processi iterativi",
            "algoritmi",
            "quesito 503"
        ],
        "answer": "Nell'ambito della dinamica dei sistemi complessi, l'analisi numerica sviluppa algoritmi e metodi iterativi per approssimare problemi matematici complessi.",
        "url": "https://www.treccani.it/enciclopedia/attrattore-di-lorenz_(Enciclopedia-della-Matematica)/"
    },
    {
        "id": 504,
        "keywords": [
            "arrotondamento decimali",
            "da 6 a 3 cifre",
            "scarto minimo",
            "quesito 504"
        ],
        "answer": "Dal punto di vista dell'analisi matematica, replicando una simulazione, Lorenz approssimò i dati da sei a tre cifre decimali alterando i risultati.",
        "url": "https://www.treccani.it/enciclopedia/attrattore-di-lorenz_(Enciclopedia-della-Matematica)/"
    },
    {
        "id": 505,
        "keywords": [
            "risultati divergenti",
            "esplosione dell'errore",
            "ordini di grandezza",
            "quesito 505"
        ],
        "answer": "Secondo la descrizione del capitolo, l'approssimazione decimale generò previsioni divergenti per vari ordini di grandezza.",
        "url": "https://www.treccani.it/enciclopedia/attrattore-di-lorenz_(Enciclopedia-della-Matematica)/"
    },
    {
        "id": 506,
        "keywords": [
            "riduzionismo newtoniano",
            "scala di grandezza",
            "dettagli trascurabili",
            "quesito 506"
        ],
        "answer": "Il riduzionismo newtoniano assume che i fenomeni su scala inferiore abbiano effetti trascurabili.",
        "url": "https://www.treccani.it/enciclopedia/attrattore-di-lorenz_(Enciclopedia-della-Matematica)/"
    },
    {
        "id": 507,
        "keywords": [
            "margine d'errore",
            "errore sperimentale",
            "propagazione",
            "quesito 507"
        ],
        "answer": "In relazione alla teoria del caos, nel modello newtoniano l'errore è controllabile, mentre nei sistemi caotici si propaga esplosivamente.",
        "url": "https://www.treccani.it/enciclopedia/attrattore-di-lorenz_(Enciclopedia-della-Matematica)/"
    },
    {
        "id": 508,
        "keywords": [
            "dipendenza sensibile",
            "condizioni iniziali",
            "limite previsioni",
            "quesito 508"
        ],
        "answer": "Nell'ambito della dinamica dei sistemi complessi, la dipendenza sensibile dalle condizioni iniziali rende impossibile la previsione a lungo termine.",
        "url": "https://www.treccani.it/enciclopedia/attrattore-di-lorenz_(Enciclopedia-della-Matematica)/"
    },
    {
        "id": 509,
        "keywords": [
            "effetto farfalla",
            "metafora brasiliana",
            "tifone florida",
            "quesito 509"
        ],
        "answer": "Dal punto di vista dell'analisi matematica, l'effetto farfalla esprime l'idea che il battito d'ali di una farfalla in Brasile produca un tifone in Florida.",
        "url": "https://www.treccani.it/enciclopedia/attrattore-di-lorenz_(Enciclopedia-della-Matematica)/"
    },
    {
        "id": 510,
        "keywords": [
            "conferenza aaas 1979",
            "uragano texas",
            "relazione lorenz",
            "quesito 510"
        ],
        "answer": "Secondo la descrizione del capitolo, nel 1979 alla conferenza AAAS gli allievi di Lorenz diffusero la metafora dell'uragano nel Texas.",
        "url": "https://www.treccani.it/enciclopedia/attrattore-di-lorenz_(Enciclopedia-della-Matematica)/"
    },
    {
        "id": 511,
        "keywords": [
            "cinema e cultura",
            "jurassic park",
            "sliding doors",
            "quesito 511"
        ],
        "answer": "L'effetto farfalla è citato in film celebri tra cui Jurassic Park, Sliding Doors e The Oxford Murders.",
        "url": "https://www.treccani.it/enciclopedia/attrattore-di-lorenz_(Enciclopedia-della-Matematica)/"
    },
    {
        "id": 512,
        "keywords": [
            "sistema dinamico",
            "variabili nel tempo",
            "spazio astratto",
            "quesito 512"
        ],
        "answer": "In relazione alla teoria del caos, un sistema dinamico è rappresentato da una serie di grandezze che variano nel tempo.",
        "url": "https://www.liceopalmieri.edu.it/LaboratorioStem/Attrattori/"
    },
    {
        "id": 513,
        "keywords": [
            "spazio delle fasi",
            "dimensioni",
            "traiettoria",
            "quesito 513"
        ],
        "answer": "Nell'ambito della dinamica dei sistemi complessi, lo spazio delle fasi ha una dimensione pari al numero di variabili libere del sistema dinamico.",
        "url": "https://www.liceopalmieri.edu.it/LaboratorioStem/Attrattori/"
    },
    {
        "id": 514,
        "keywords": [
            "piano delle fasi",
            "pendolo semplice",
            "due dimensioni",
            "quesito 514"
        ],
        "answer": "Dal punto di vista dell'analisi matematica, il pendolo semplice è descritto in un piano delle fasi bidimensionale (angolo e velocità).",
        "url": "https://www.liceopalmieri.edu.it/LaboratorioStem/Attrattori/"
    },
    {
        "id": 515,
        "keywords": [
            "doppio pendolo",
            "quattro dimensioni",
            "iperspazio",
            "quesito 515"
        ],
        "answer": "Secondo la descrizione del capitolo, il doppio pendolo necessita di uno spazio delle fasi a quattro dimensioni per rappresentare le sue orbite.",
        "url": "https://www.liceopalmieri.edu.it/LaboratorioStem/Attrattori/"
    },
    {
        "id": 516,
        "keywords": [
            "punto fisso",
            "attrattore punto",
            "attrito",
            "quesito 516"
        ],
        "answer": "Il punto fisso è un attrattore che stabilizza il sistema dinamico in uno stato di equilibrio stazionario.",
        "url": "https://www.liceopalmieri.edu.it/LaboratorioStem/Attrattori/"
    },
    {
        "id": 517,
        "keywords": [
            "ciclo limite",
            "circuito van der pol",
            "oscillatore",
            "quesito 517"
        ],
        "answer": "In relazione alla teoria del caos, un ciclo limite è un attrattore rappresentato da una curva chiusa percorsa in modo periodico.",
        "url": "https://www.liceopalmieri.edu.it/LaboratorioStem/Attrattori/"
    },
    {
        "id": 518,
        "keywords": [
            "attrattore strano",
            "definizione",
            "volume finito",
            "quesito 518"
        ],
        "answer": "Nell'ambito della dinamica dei sistemi complessi, l'attrattore strano è una regione finita dello spazio delle fasi in cui le traiettorie non si intersecano mai.",
        "url": "https://www.liceopalmieri.edu.it/LaboratorioStem/Attrattori/"
    },
    {
        "id": 519,
        "keywords": [
            "farfalla di lorenz",
            "ali sfasate",
            "corpo centrale",
            "quesito 519"
        ],
        "answer": "Dal punto di vista dell'analisi matematica, l'attrattore di Lorenz ha la forma caratteristica di una farfalla con due ali disposte su piani sfasati.",
        "url": "https://www.liceopalmieri.edu.it/LaboratorioStem/Attrattori/"
    },
    {
        "id": 520,
        "keywords": [
            "discretizzazione",
            "rappresentazione a punti",
            "passo temporale",
            "quesito 520"
        ],
        "answer": "Secondo la descrizione del capitolo, in simulazione informatica l'attrattore appare come una sequenza discreta di punti nel tempo.",
        "url": "https://www.liceopalmieri.edu.it/LaboratorioStem/Attrattori/"
    },
    {
        "id": 521,
        "keywords": [
            "attrattore toro",
            "quasi periodicita",
            "struttura toroidale",
            "quesito 521"
        ],
        "answer": "L'attrattore a toro descrive un comportamento quasi periodico con complessità intermedia tra ciclo e caos.",
        "url": "https://www.liceopalmieri.edu.it/LaboratorioStem/Attrattori/"
    },
    {
        "id": 522,
        "keywords": [
            "circuito di chua",
            "componenti passivi",
            "diodo non lineare",
            "quesito 522"
        ],
        "answer": "In relazione alla teoria del caos, il circuito di Chua è un circuito elettronico composto da resistenze, capacità, induttanza e un diodo non lineare.",
        "url": "https://www.treccani.it/enciclopedia/caos_(Enciclopedia-del-Novecento)/"
    },
    {
        "id": 523,
        "keywords": [
            "doppio scroll",
            "double scroll",
            "chua attrattore",
            "quesito 523"
        ],
        "answer": "Nell'ambito della dinamica dei sistemi complessi, il Doppio Scroll è l'attrattore strano più celebre prodotto dal circuito elettronico di Chua.",
        "url": "https://www.treccani.it/enciclopedia/caos_(Enciclopedia-del-Novecento)/"
    },
    {
        "id": 524,
        "keywords": [
            "spirale di chua",
            "resistenza parametro",
            "transizione",
            "quesito 524"
        ],
        "answer": "Dal punto di vista dell'analisi matematica, aumentando la resistenza nel circuito di Chua, l'attrattore passa dal doppio scroll alla spirale.",
        "url": "https://www.treccani.it/enciclopedia/caos_(Enciclopedia-del-Novecento)/"
    },
    {
        "id": 525,
        "keywords": [
            "strada verso il caos",
            "percorso sequenziale",
            "ordine caos",
            "quesito 525"
        ],
        "answer": "Secondo la descrizione del capitolo, la strada verso il caos descrive la transizione dall'ordine stazionario al caos deterministico.",
        "url": "https://www.treccani.it/enciclopedia/caos_(Enciclopedia-del-Novecento)/"
    },
    {
        "id": 526,
        "keywords": [
            "saturazione",
            "orizzonte fisico",
            "massimo energetico",
            "quesito 526"
        ],
        "answer": "La saturazione rappresenta il massimo livello di energia del sistema e si manifesta come ciclo limite.",
        "url": "https://www.treccani.it/enciclopedia/caos_(Enciclopedia-del-Novecento)/"
    },
    {
        "id": 527,
        "keywords": [
            "biforcazione",
            "parametro di controllo",
            "cambiamento qualitativo",
            "quesito 527"
        ],
        "answer": "In relazione alla teoria del caos, una biforcazione si verifica quando il comportamento del sistema cambia radicalmente al variare del parametro.",
        "url": "https://www.treccani.it/enciclopedia/caos_(Enciclopedia-del-Novecento)/"
    },
    {
        "id": 528,
        "keywords": [
            "biforcazione di hopf",
            "raddoppio del periodo",
            "cascata",
            "quesito 528"
        ],
        "answer": "Nell'ambito della dinamica dei sistemi complessi, la biforcazione di Hopf comporta il raddoppio del periodo delle oscillazioni lungo una cascata infinita.",
        "url": "https://www.treccani.it/enciclopedia/caos_(Enciclopedia-del-Novecento)/"
    },
    {
        "id": 529,
        "keywords": [
            "costante di feigenbaum",
            "mitchell feigenbaum",
            "1975",
            "quesito 529"
        ],
        "answer": "Dal punto di vista dell'analisi matematica, la costante di Feigenbaum (4.6692) descrive la convergenza universale delle biforcazioni caotiche.",
        "url": "https://www.treccani.it/enciclopedia/caos_(Enciclopedia-del-Novecento)/"
    },
    {
        "id": 530,
        "keywords": [
            "mappa logistica",
            "popolazione discreta",
            "modello feigenbaum",
            "quesito 530"
        ],
        "answer": "Secondo la descrizione del capitolo, la mappa logistica è un modello popolazionale discreto che mostra il raddoppio del periodo.",
        "url": "https://www.treccani.it/enciclopedia/caos_(Enciclopedia-del-Novecento)/"
    },
    {
        "id": 531,
        "keywords": [
            "diagramma di biforcazione",
            "soglia 1.16 kohm",
            "chua diagramma",
            "quesito 531"
        ],
        "answer": "Nel circuito di Chua la transizione da punto fisso a ciclo limite avviene per R = 1,16 kΩ.",
        "url": "https://www.treccani.it/enciclopedia/caos_(Enciclopedia-del-Novecento)/"
    },
    {
        "id": 532,
        "keywords": [
            "frattali",
            "etimologia fractus",
            "geometria non euclidea",
            "quesito 532"
        ],
        "answer": "In relazione alla teoria del caos, il termine frattale fu coniato da Mandelbrot nel 1975 dal latino fractus per definire forme discontinue.",
        "url": "https://www.treccani.it/enciclopedia/caos_(Enciclopedia-del-Novecento)/"
    },
    {
        "id": 533,
        "keywords": [
            "fiocco di neve di koch",
            "costruzione iterativa",
            "perimetro infinito",
            "quesito 533"
        ],
        "answer": "Nell'ambito della dinamica dei sistemi complessi, il fiocco di neve di Koch è un frattale con perimetro di lunghezza infinita in una superficie finita.",
        "url": "https://www.treccani.it/enciclopedia/caos_(Enciclopedia-del-Novecento)/"
    },
    {
        "id": 534,
        "keywords": [
            "triangolo di sierpinski",
            "ricorsione",
            "dimensione frattale",
            "quesito 534"
        ],
        "answer": "Dal punto di vista dell'analisi matematica, il triangolo di Sierpinski è una figura frattale ottenuta rimuovendo i sotto-triangoli centrali.",
        "url": "https://www.treccani.it/enciclopedia/caos_(Enciclopedia-del-Novecento)/"
    },
    {
        "id": 535,
        "keywords": [
            "benoit mandelbrot",
            "geometria della natura",
            "inadeguatezza euclidea",
            "quesito 535"
        ],
        "answer": "Secondo la descrizione del capitolo, mandelbrot dimostrò che la geometria euclidea non è adatta a descrivere nuvole, montagne e coste.",
        "url": "https://www.treccani.it/enciclopedia/caos_(Enciclopedia-del-Novecento)/"
    },
    {
        "id": 536,
        "keywords": [
            "invarianza di scala",
            "auto-similarita",
            "struttura ricorsiva",
            "quesito 536"
        ],
        "answer": "L'auto-similarità implica che ingrandendo un dettaglio di un frattale si ritrova la figura intera.",
        "url": "https://www.treccani.it/enciclopedia/caos_(Enciclopedia-del-Novecento)/"
    },
    {
        "id": 537,
        "keywords": [
            "cavolfiore frattale",
            "montagna",
            "scogliera",
            "quesito 537"
        ],
        "answer": "In relazione alla teoria del caos, esempi naturali di frattali sono i cavolfiori, i profili montuosi e la struttura delle scogliere.",
        "url": "https://www.treccani.it/enciclopedia/caos_(Enciclopedia-del-Novecento)/"
    },
    {
        "id": 538,
        "keywords": [
            "econofisica",
            "borsa valori",
            "serie temporali",
            "quesito 538"
        ],
        "answer": "Nell'ambito della dinamica dei sistemi complessi, l'econofisica studia le serie temporali dei mercati finanziari sfruttando concetti frattali e caotici.",
        "url": "https://www.treccani.it/enciclopedia/caos_(Enciclopedia-del-Novecento)/"
    },
    {
        "id": 539,
        "keywords": [
            "digital art",
            "arte elettronica",
            "estetica del caos",
            "quesito 539"
        ],
        "answer": "Dal punto di vista dell'analisi matematica, la bellezza degli attrattori e dei frattali ha ispirato nuove correnti artistiche di Digital Art.",
        "url": "https://www.treccani.it/enciclopedia/caos_(Enciclopedia-del-Novecento)/"
    },
    {
        "id": 540,
        "keywords": [
            "ubiquita del caos",
            "paradigma scientifico",
            "transdisciplinarita",
            "quesito 540"
        ],
        "answer": "Secondo la descrizione del capitolo, l'ubiquità del caos descrive la presenza universale di comportamenti imprevedibili nella natura.",
        "url": "https://www.treccani.it/enciclopedia/caos_(Enciclopedia-del-Novecento)/"
    },
    {
        "id": 541,
        "keywords": [
            "meccanicismo",
            "orologio perfetto",
            "newton",
            "quesito 541"
        ],
        "answer": "Da Newton in poi, la visione dominante rappresentava il mondo come un meccanismo perfetto, analogo a un orologio di precisione.",
        "url": "https://www.treccani.it/enciclopedia/meccanicismo_(Enciclopedia-Italiana)/"
    },
    {
        "id": 542,
        "keywords": [
            "meccanica sperimentale",
            "fine XVII secolo",
            "isaac newton",
            "quesito 542"
        ],
        "answer": "In relazione alla teoria del caos, la meccanica come scienza sperimentale è nata alla fine del XVII secolo con Isaac Newton.",
        "url": "https://www.treccani.it/enciclopedia/meccanicismo_(Enciclopedia-Italiana)/"
    },
    {
        "id": 543,
        "keywords": [
            "eulero",
            "lagrange",
            "laplace",
            "quesito 543"
        ],
        "answer": "Nell'ambito della dinamica dei sistemi complessi, nel XVIII secolo la meccanica classica fu perfezionata dai lavori di Eulero, Lagrange e Laplace.",
        "url": "https://www.treccani.it/enciclopedia/meccanicismo_(Enciclopedia-Italiana)/"
    },
    {
        "id": 544,
        "keywords": [
            "calcolo differenziale",
            "calcolo integrale",
            "leibniz",
            "quesito 544"
        ],
        "answer": "Dal punto di vista dell'analisi matematica, il calcolo differenziale e integrale fu sviluppato contemporaneamente da Newton e Leibniz.",
        "url": "https://www.treccani.it/enciclopedia/meccanicismo_(Enciclopedia-Italiana)/"
    },
    {
        "id": 545,
        "keywords": [
            "meccanica celeste",
            "leggi di newton",
            "evidenze sperimentali",
            "quesito 545"
        ],
        "answer": "Secondo la descrizione del capitolo, la meccanica celeste fornì un quadro teorico unificante supportato da evidenze sperimentali.",
        "url": "https://www.treccani.it/enciclopedia/meccanicismo_(Enciclopedia-Italiana)/"
    },
    {
        "id": 546,
        "keywords": [
            "determinismo causale",
            "causalita",
            "catena di eventi",
            "quesito 546"
        ],
        "answer": "Il determinismo causale stabilisce che ogni evento accada all'interno di una catena causale.",
        "url": "https://www.treccani.it/enciclopedia/meccanicismo_(Enciclopedia-Italiana)/"
    },
    {
        "id": 547,
        "keywords": [
            "configurazioni iniziali",
            "previsione teorica",
            "stato futuro",
            "quesito 547"
        ],
        "answer": "In relazione alla teoria del caos, conoscendo cause e configurazioni iniziali, il determinismo teorizza la previsione degli eventi futuri.",
        "url": "https://www.treccani.it/enciclopedia/meccanicismo_(Enciclopedia-Italiana)/"
    },
    {
        "id": 548,
        "keywords": [
            "laplace",
            "demone di laplace",
            "determinismo assoluto",
            "quesito 548"
        ],
        "answer": "Nell'ambito della dinamica dei sistemi complessi, laplace concepiva il determinismo come la capacità di calcolare con precisione lo stato futuro conoscendo lo stato attuale.",
        "url": "https://www.treccani.it/enciclopedia/meccanicismo_(Enciclopedia-Italiana)/"
    },
    {
        "id": 549,
        "keywords": [
            "darwin",
            "evoluzione",
            "XIX secolo",
            "quesito 549"
        ],
        "answer": "Dal punto di vista dell'analisi matematica, nel XIX secolo gli studi di Darwin sull'evoluzione misero in discussione il riduzionismo meccanicista.",
        "url": "https://www.treccani.it/enciclopedia/entropia_(Enciclopedia-della-Scienza-e-della-Tecnica)/"
    },
    {
        "id": 550,
        "keywords": [
            "termodinamica",
            "entropia",
            "irreversibilita",
            "quesito 550"
        ],
        "answer": "Secondo la descrizione del capitolo, l'introduzione dell'entropia e dell'irreversibilità evidenziò i limiti della spiegazione meccanicista.",
        "url": "https://www.treccani.it/enciclopedia/entropia_(Enciclopedia-della-Scienza-e-della-Tecnica)/"
    },
    {
        "id": 551,
        "keywords": [
            "trasformazioni di energia",
            "fenomeni biologici",
            "limiti newtoniani",
            "quesito 551"
        ],
        "answer": "La termodinamica dimostrò che la meccanica classica era deficitaria nei fenomeni legati alla vita.",
        "url": "https://www.treccani.it/enciclopedia/entropia_(Enciclopedia-della-Scienza-e-della-Tecnica)/"
    },
    {
        "id": 552,
        "keywords": [
            "meccanica quantistica",
            "infinitamente piccolo",
            "XX secolo",
            "quesito 552"
        ],
        "answer": "In relazione alla teoria del caos, la meccanica quantistica è una teoria del XX secolo rivolta allo studio dell'infinitamente piccolo.",
        "url": "https://www.treccani.it/enciclopedia/entropia_(Enciclopedia-della-Scienza-e-della-Tecnica)/"
    },
    {
        "id": 553,
        "keywords": [
            "relativita generale",
            "infinitamente grande",
            "einstein",
            "quesito 553"
        ],
        "answer": "Nell'ambito della dinamica dei sistemi complessi, la relatività generale descrive la gravità e i fenomeni dell'infinitamente grande.",
        "url": "https://www.treccani.it/enciclopedia/entropia_(Enciclopedia-della-Scienza-e-della-Tecnica)/"
    },
    {
        "id": 554,
        "keywords": [
            "validita newtoniana",
            "fenomeni osservabili",
            "scala macroscopica",
            "quesito 554"
        ],
        "answer": "Dal punto di vista dell'analisi matematica, fino agli anni '60 la meccanica newtoniana rimase un'ottima descrizione dei fenomeni osservabili.",
        "url": "https://www.treccani.it/enciclopedia/entropia_(Enciclopedia-della-Scienza-e-della-Tecnica)/"
    },
    {
        "id": 555,
        "keywords": [
            "caos grecia",
            "significato antico",
            "disordine",
            "quesito 555"
        ],
        "answer": "Secondo la descrizione del capitolo, in antica Grecia il termine caos indicava disordine, confusione, scompiglio e agitazione.",
        "url": "https://www.treccani.it/enciclopedia/caos_(Enciclopedia-del-Novecento)/"
    },
    {
        "id": 556,
        "keywords": [
            "cosmos",
            "ordine",
            "antitesi caos",
            "quesito 556"
        ],
        "answer": "Il termine greco cosmos significa ordine ed era usato in antitesi al termine caos.",
        "url": "https://www.treccani.it/enciclopedia/caos_(Enciclopedia-del-Novecento)/"
    },
    {
        "id": 557,
        "keywords": [
            "limite cognitivo",
            "comprensione",
            "orizzonte oscuro",
            "quesito 557"
        ],
        "answer": "In relazione alla teoria del caos, in termini cognitivi il caos identifica un'incapacità generale di comprensione e un limite visivo.",
        "url": "https://www.treccani.it/enciclopedia/caos_(Enciclopedia-del-Novecento)/"
    },
    {
        "id": 558,
        "keywords": [
            "capovolgimento semantico",
            "scienza contemporanea",
            "caos deterministico",
            "quesito 558"
        ],
        "answer": "Nell'ambito della dinamica dei sistemi complessi, la scienza contemporanea ha ribaltato la semantica del caos riferendolo a dinamiche deterministiche non analitiche.",
        "url": "https://www.treccani.it/enciclopedia/caos_(Enciclopedia-del-Novecento)/"
    },
    {
        "id": 559,
        "keywords": [
            "settori del caos",
            "fenomeni sociali",
            "economia",
            "quesito 559"
        ],
        "answer": "Dal punto di vista dell'analisi matematica, la teoria del caos analizza fenomeni imprevedibili in ambito fisico, economico, sociale e comportamentale.",
        "url": "https://www.treccani.it/enciclopedia/caos_(Enciclopedia-del-Novecento)/"
    },
    {
        "id": 560,
        "keywords": [
            "edward lorenz",
            "mit cambridge",
            "meteorologia",
            "quesito 560"
        ],
        "answer": "Secondo la descrizione del capitolo, edward H. Lorenz era un meteorologo del MIT di Cambridge che sviluppò modelli matematici per il meteo.",
        "url": "https://www.treccani.it/enciclopedia/attrattore-di-lorenz_(Enciclopedia-della-Matematica)/"
    },
    {
        "id": 561,
        "keywords": [
            "equazioni differenziali",
            "tre equazioni",
            "non linearita",
            "quesito 561"
        ],
        "answer": "Il modello atmosferico di Lorenz era basato su tre equazioni differenziali ordinarie non lineari.",
        "url": "https://www.treccani.it/enciclopedia/attrattore-di-lorenz_(Enciclopedia-della-Matematica)/"
    },
    {
        "id": 562,
        "keywords": [
            "integrazione numerica",
            "computer lorenz",
            "anni 60",
            "quesito 562"
        ],
        "answer": "In relazione alla teoria del caos, lorenz utilizzò il computer per integrare numericamente equazioni non lineari prive di soluzione analitica.",
        "url": "https://www.treccani.it/enciclopedia/attrattore-di-lorenz_(Enciclopedia-della-Matematica)/"
    },
    {
        "id": 563,
        "keywords": [
            "analisi numerica",
            "processi iterativi",
            "algoritmi",
            "quesito 563"
        ],
        "answer": "Nell'ambito della dinamica dei sistemi complessi, l'analisi numerica sviluppa algoritmi e metodi iterativi per approssimare problemi matematici complessi.",
        "url": "https://www.treccani.it/enciclopedia/attrattore-di-lorenz_(Enciclopedia-della-Matematica)/"
    },
    {
        "id": 564,
        "keywords": [
            "arrotondamento decimali",
            "da 6 a 3 cifre",
            "scarto minimo",
            "quesito 564"
        ],
        "answer": "Dal punto di vista dell'analisi matematica, replicando una simulazione, Lorenz approssimò i dati da sei a tre cifre decimali alterando i risultati.",
        "url": "https://www.treccani.it/enciclopedia/attrattore-di-lorenz_(Enciclopedia-della-Matematica)/"
    },
    {
        "id": 565,
        "keywords": [
            "risultati divergenti",
            "esplosione dell'errore",
            "ordini di grandezza",
            "quesito 565"
        ],
        "answer": "Secondo la descrizione del capitolo, l'approssimazione decimale generò previsioni divergenti per vari ordini di grandezza.",
        "url": "https://www.treccani.it/enciclopedia/attrattore-di-lorenz_(Enciclopedia-della-Matematica)/"
    },
    {
        "id": 566,
        "keywords": [
            "riduzionismo newtoniano",
            "scala di grandezza",
            "dettagli trascurabili",
            "quesito 566"
        ],
        "answer": "Il riduzionismo newtoniano assume che i fenomeni su scala inferiore abbiano effetti trascurabili.",
        "url": "https://www.treccani.it/enciclopedia/attrattore-di-lorenz_(Enciclopedia-della-Matematica)/"
    },
    {
        "id": 567,
        "keywords": [
            "margine d'errore",
            "errore sperimentale",
            "propagazione",
            "quesito 567"
        ],
        "answer": "In relazione alla teoria del caos, nel modello newtoniano l'errore è controllabile, mentre nei sistemi caotici si propaga esplosivamente.",
        "url": "https://www.treccani.it/enciclopedia/attrattore-di-lorenz_(Enciclopedia-della-Matematica)/"
    },
    {
        "id": 568,
        "keywords": [
            "dipendenza sensibile",
            "condizioni iniziali",
            "limite previsioni",
            "quesito 568"
        ],
        "answer": "Nell'ambito della dinamica dei sistemi complessi, la dipendenza sensibile dalle condizioni iniziali rende impossibile la previsione a lungo termine.",
        "url": "https://www.treccani.it/enciclopedia/attrattore-di-lorenz_(Enciclopedia-della-Matematica)/"
    },
    {
        "id": 569,
        "keywords": [
            "effetto farfalla",
            "metafora brasiliana",
            "tifone florida",
            "quesito 569"
        ],
        "answer": "Dal punto di vista dell'analisi matematica, l'effetto farfalla esprime l'idea che il battito d'ali di una farfalla in Brasile produca un tifone in Florida.",
        "url": "https://www.treccani.it/enciclopedia/attrattore-di-lorenz_(Enciclopedia-della-Matematica)/"
    },
    {
        "id": 570,
        "keywords": [
            "conferenza aaas 1979",
            "uragano texas",
            "relazione lorenz",
            "quesito 570"
        ],
        "answer": "Secondo la descrizione del capitolo, nel 1979 alla conferenza AAAS gli allievi di Lorenz diffusero la metafora dell'uragano nel Texas.",
        "url": "https://www.treccani.it/enciclopedia/attrattore-di-lorenz_(Enciclopedia-della-Matematica)/"
    },
    {
        "id": 571,
        "keywords": [
            "cinema e cultura",
            "jurassic park",
            "sliding doors",
            "quesito 571"
        ],
        "answer": "L'effetto farfalla è citato in film celebri tra cui Jurassic Park, Sliding Doors e The Oxford Murders.",
        "url": "https://www.treccani.it/enciclopedia/attrattore-di-lorenz_(Enciclopedia-della-Matematica)/"
    },
    {
        "id": 572,
        "keywords": [
            "sistema dinamico",
            "variabili nel tempo",
            "spazio astratto",
            "quesito 572"
        ],
        "answer": "In relazione alla teoria del caos, un sistema dinamico è rappresentato da una serie di grandezze che variano nel tempo.",
        "url": "https://www.liceopalmieri.edu.it/LaboratorioStem/Attrattori/"
    },
    {
        "id": 573,
        "keywords": [
            "spazio delle fasi",
            "dimensioni",
            "traiettoria",
            "quesito 573"
        ],
        "answer": "Nell'ambito della dinamica dei sistemi complessi, lo spazio delle fasi ha una dimensione pari al numero di variabili libere del sistema dinamico.",
        "url": "https://www.liceopalmieri.edu.it/LaboratorioStem/Attrattori/"
    },
    {
        "id": 574,
        "keywords": [
            "piano delle fasi",
            "pendolo semplice",
            "due dimensioni",
            "quesito 574"
        ],
        "answer": "Dal punto di vista dell'analisi matematica, il pendolo semplice è descritto in un piano delle fasi bidimensionale (angolo e velocità).",
        "url": "https://www.liceopalmieri.edu.it/LaboratorioStem/Attrattori/"
    },
    {
        "id": 575,
        "keywords": [
            "doppio pendolo",
            "quattro dimensioni",
            "iperspazio",
            "quesito 575"
        ],
        "answer": "Secondo la descrizione del capitolo, il doppio pendolo necessita di uno spazio delle fasi a quattro dimensioni per rappresentare le sue orbite.",
        "url": "https://www.liceopalmieri.edu.it/LaboratorioStem/Attrattori/"
    },
    {
        "id": 576,
        "keywords": [
            "punto fisso",
            "attrattore punto",
            "attrito",
            "quesito 576"
        ],
        "answer": "Il punto fisso è un attrattore che stabilizza il sistema dinamico in uno stato di equilibrio stazionario.",
        "url": "https://www.liceopalmieri.edu.it/LaboratorioStem/Attrattori/"
    },
    {
        "id": 577,
        "keywords": [
            "ciclo limite",
            "circuito van der pol",
            "oscillatore",
            "quesito 577"
        ],
        "answer": "In relazione alla teoria del caos, un ciclo limite è un attrattore rappresentato da una curva chiusa percorsa in modo periodico.",
        "url": "https://www.liceopalmieri.edu.it/LaboratorioStem/Attrattori/"
    },
    {
        "id": 578,
        "keywords": [
            "attrattore strano",
            "definizione",
            "volume finito",
            "quesito 578"
        ],
        "answer": "Nell'ambito della dinamica dei sistemi complessi, l'attrattore strano è una regione finita dello spazio delle fasi in cui le traiettorie non si intersecano mai.",
        "url": "https://www.liceopalmieri.edu.it/LaboratorioStem/Attrattori/"
    },
    {
        "id": 579,
        "keywords": [
            "farfalla di lorenz",
            "ali sfasate",
            "corpo centrale",
            "quesito 579"
        ],
        "answer": "Dal punto di vista dell'analisi matematica, l'attrattore di Lorenz ha la forma caratteristica di una farfalla con due ali disposte su piani sfasati.",
        "url": "https://www.liceopalmieri.edu.it/LaboratorioStem/Attrattori/"
    },
    {
        "id": 580,
        "keywords": [
            "discretizzazione",
            "rappresentazione a punti",
            "passo temporale",
            "quesito 580"
        ],
        "answer": "Secondo la descrizione del capitolo, in simulazione informatica l'attrattore appare come una sequenza discreta di punti nel tempo.",
        "url": "https://www.liceopalmieri.edu.it/LaboratorioStem/Attrattori/"
    },
    {
        "id": 581,
        "keywords": [
            "attrattore toro",
            "quasi periodicita",
            "struttura toroidale",
            "quesito 581"
        ],
        "answer": "L'attrattore a toro descrive un comportamento quasi periodico con complessità intermedia tra ciclo e caos.",
        "url": "https://www.liceopalmieri.edu.it/LaboratorioStem/Attrattori/"
    },
    {
        "id": 582,
        "keywords": [
            "circuito di chua",
            "componenti passivi",
            "diodo non lineare",
            "quesito 582"
        ],
        "answer": "In relazione alla teoria del caos, il circuito di Chua è un circuito elettronico composto da resistenze, capacità, induttanza e un diodo non lineare.",
        "url": "https://www.treccani.it/enciclopedia/caos_(Enciclopedia-del-Novecento)/"
    },
    {
        "id": 583,
        "keywords": [
            "doppio scroll",
            "double scroll",
            "chua attrattore",
            "quesito 583"
        ],
        "answer": "Nell'ambito della dinamica dei sistemi complessi, il Doppio Scroll è l'attrattore strano più celebre prodotto dal circuito elettronico di Chua.",
        "url": "https://www.treccani.it/enciclopedia/caos_(Enciclopedia-del-Novecento)/"
    },
    {
        "id": 584,
        "keywords": [
            "spirale di chua",
            "resistenza parametro",
            "transizione",
            "quesito 584"
        ],
        "answer": "Dal punto di vista dell'analisi matematica, aumentando la resistenza nel circuito di Chua, l'attrattore passa dal doppio scroll alla spirale.",
        "url": "https://www.treccani.it/enciclopedia/caos_(Enciclopedia-del-Novecento)/"
    },
    {
        "id": 585,
        "keywords": [
            "strada verso il caos",
            "percorso sequenziale",
            "ordine caos",
            "quesito 585"
        ],
        "answer": "Secondo la descrizione del capitolo, la strada verso il caos descrive la transizione dall'ordine stazionario al caos deterministico.",
        "url": "https://www.treccani.it/enciclopedia/caos_(Enciclopedia-del-Novecento)/"
    },
    {
        "id": 586,
        "keywords": [
            "saturazione",
            "orizzonte fisico",
            "massimo energetico",
            "quesito 586"
        ],
        "answer": "La saturazione rappresenta il massimo livello di energia del sistema e si manifesta come ciclo limite.",
        "url": "https://www.treccani.it/enciclopedia/caos_(Enciclopedia-del-Novecento)/"
    },
    {
        "id": 587,
        "keywords": [
            "biforcazione",
            "parametro di controllo",
            "cambiamento qualitativo",
            "quesito 587"
        ],
        "answer": "In relazione alla teoria del caos, una biforcazione si verifica quando il comportamento del sistema cambia radicalmente al variare del parametro.",
        "url": "https://www.treccani.it/enciclopedia/caos_(Enciclopedia-del-Novecento)/"
    },
    {
        "id": 588,
        "keywords": [
            "biforcazione di hopf",
            "raddoppio del periodo",
            "cascata",
            "quesito 588"
        ],
        "answer": "Nell'ambito della dinamica dei sistemi complessi, la biforcazione di Hopf comporta il raddoppio del periodo delle oscillazioni lungo una cascata infinita.",
        "url": "https://www.treccani.it/enciclopedia/caos_(Enciclopedia-del-Novecento)/"
    },
    {
        "id": 589,
        "keywords": [
            "costante di feigenbaum",
            "mitchell feigenbaum",
            "1975",
            "quesito 589"
        ],
        "answer": "Dal punto di vista dell'analisi matematica, la costante di Feigenbaum (4.6692) descrive la convergenza universale delle biforcazioni caotiche.",
        "url": "https://www.treccani.it/enciclopedia/caos_(Enciclopedia-del-Novecento)/"
    },
    {
        "id": 590,
        "keywords": [
            "mappa logistica",
            "popolazione discreta",
            "modello feigenbaum",
            "quesito 590"
        ],
        "answer": "Secondo la descrizione del capitolo, la mappa logistica è un modello popolazionale discreto che mostra il raddoppio del periodo.",
        "url": "https://www.treccani.it/enciclopedia/caos_(Enciclopedia-del-Novecento)/"
    },
    {
        "id": 591,
        "keywords": [
            "diagramma di biforcazione",
            "soglia 1.16 kohm",
            "chua diagramma",
            "quesito 591"
        ],
        "answer": "Nel circuito di Chua la transizione da punto fisso a ciclo limite avviene per R = 1,16 kΩ.",
        "url": "https://www.treccani.it/enciclopedia/caos_(Enciclopedia-del-Novecento)/"
    },
    {
        "id": 592,
        "keywords": [
            "frattali",
            "etimologia fractus",
            "geometria non euclidea",
            "quesito 592"
        ],
        "answer": "In relazione alla teoria del caos, il termine frattale fu coniato da Mandelbrot nel 1975 dal latino fractus per definire forme discontinue.",
        "url": "https://www.treccani.it/enciclopedia/caos_(Enciclopedia-del-Novecento)/"
    },
    {
        "id": 593,
        "keywords": [
            "fiocco di neve di koch",
            "costruzione iterativa",
            "perimetro infinito",
            "quesito 593"
        ],
        "answer": "Nell'ambito della dinamica dei sistemi complessi, il fiocco di neve di Koch è un frattale con perimetro di lunghezza infinita in una superficie finita.",
        "url": "https://www.treccani.it/enciclopedia/caos_(Enciclopedia-del-Novecento)/"
    },
    {
        "id": 594,
        "keywords": [
            "triangolo di sierpinski",
            "ricorsione",
            "dimensione frattale",
            "quesito 594"
        ],
        "answer": "Dal punto di vista dell'analisi matematica, il triangolo di Sierpinski è una figura frattale ottenuta rimuovendo i sotto-triangoli centrali.",
        "url": "https://www.treccani.it/enciclopedia/caos_(Enciclopedia-del-Novecento)/"
    },
    {
        "id": 595,
        "keywords": [
            "benoit mandelbrot",
            "geometria della natura",
            "inadeguatezza euclidea",
            "quesito 595"
        ],
        "answer": "Secondo la descrizione del capitolo, mandelbrot dimostrò che la geometria euclidea non è adatta a descrivere nuvole, montagne e coste.",
        "url": "https://www.treccani.it/enciclopedia/caos_(Enciclopedia-del-Novecento)/"
    },
    {
        "id": 596,
        "keywords": [
            "invarianza di scala",
            "auto-similarita",
            "struttura ricorsiva",
            "quesito 596"
        ],
        "answer": "L'auto-similarità implica che ingrandendo un dettaglio di un frattale si ritrova la figura intera.",
        "url": "https://www.treccani.it/enciclopedia/caos_(Enciclopedia-del-Novecento)/"
    },
    {
        "id": 597,
        "keywords": [
            "cavolfiore frattale",
            "montagna",
            "scogliera",
            "quesito 597"
        ],
        "answer": "In relazione alla teoria del caos, esempi naturali di frattali sono i cavolfiori, i profili montuosi e la struttura delle scogliere.",
        "url": "https://www.treccani.it/enciclopedia/caos_(Enciclopedia-del-Novecento)/"
    },
    {
        "id": 598,
        "keywords": [
            "econofisica",
            "borsa valori",
            "serie temporali",
            "quesito 598"
        ],
        "answer": "Nell'ambito della dinamica dei sistemi complessi, l'econofisica studia le serie temporali dei mercati finanziari sfruttando concetti frattali e caotici.",
        "url": "https://www.treccani.it/enciclopedia/caos_(Enciclopedia-del-Novecento)/"
    },
    {
        "id": 599,
        "keywords": [
            "digital art",
            "arte elettronica",
            "estetica del caos",
            "quesito 599"
        ],
        "answer": "Dal punto di vista dell'analisi matematica, la bellezza degli attrattori e dei frattali ha ispirato nuove correnti artistiche di Digital Art.",
        "url": "https://www.treccani.it/enciclopedia/caos_(Enciclopedia-del-Novecento)/"
    },
    {
        "id": 600,
        "keywords": [
            "ubiquita del caos",
            "paradigma scientifico",
            "transdisciplinarita",
            "quesito 600"
        ],
        "answer": "Secondo la descrizione del capitolo, l'ubiquità del caos descrive la presenza universale di comportamenti imprevedibili nella natura.",
        "url": "https://www.treccani.it/enciclopedia/caos_(Enciclopedia-del-Novecento)/"
    },
    {
        "id": 601,
        "keywords": [
            "meccanicismo",
            "orologio perfetto",
            "newton",
            "quesito 601"
        ],
        "answer": "Da Newton in poi, la visione dominante rappresentava il mondo come un meccanismo perfetto, analogo a un orologio di precisione.",
        "url": "https://www.treccani.it/enciclopedia/meccanicismo_(Enciclopedia-Italiana)/"
    },
    {
        "id": 602,
        "keywords": [
            "meccanica sperimentale",
            "fine XVII secolo",
            "isaac newton",
            "quesito 602"
        ],
        "answer": "In relazione alla teoria del caos, la meccanica come scienza sperimentale è nata alla fine del XVII secolo con Isaac Newton.",
        "url": "https://www.treccani.it/enciclopedia/meccanicismo_(Enciclopedia-Italiana)/"
    },
    {
        "id": 603,
        "keywords": [
            "eulero",
            "lagrange",
            "laplace",
            "quesito 603"
        ],
        "answer": "Nell'ambito della dinamica dei sistemi complessi, nel XVIII secolo la meccanica classica fu perfezionata dai lavori di Eulero, Lagrange e Laplace.",
        "url": "https://www.treccani.it/enciclopedia/meccanicismo_(Enciclopedia-Italiana)/"
    },
    {
        "id": 604,
        "keywords": [
            "calcolo differenziale",
            "calcolo integrale",
            "leibniz",
            "quesito 604"
        ],
        "answer": "Dal punto di vista dell'analisi matematica, il calcolo differenziale e integrale fu sviluppato contemporaneamente da Newton e Leibniz.",
        "url": "https://www.treccani.it/enciclopedia/meccanicismo_(Enciclopedia-Italiana)/"
    },
    {
        "id": 605,
        "keywords": [
            "meccanica celeste",
            "leggi di newton",
            "evidenze sperimentali",
            "quesito 605"
        ],
        "answer": "Secondo la descrizione del capitolo, la meccanica celeste fornì un quadro teorico unificante supportato da evidenze sperimentali.",
        "url": "https://www.treccani.it/enciclopedia/meccanicismo_(Enciclopedia-Italiana)/"
    },
    {
        "id": 606,
        "keywords": [
            "determinismo causale",
            "causalita",
            "catena di eventi",
            "quesito 606"
        ],
        "answer": "Il determinismo causale stabilisce che ogni evento accada all'interno di una catena causale.",
        "url": "https://www.treccani.it/enciclopedia/meccanicismo_(Enciclopedia-Italiana)/"
    },
    {
        "id": 607,
        "keywords": [
            "configurazioni iniziali",
            "previsione teorica",
            "stato futuro",
            "quesito 607"
        ],
        "answer": "In relazione alla teoria del caos, conoscendo cause e configurazioni iniziali, il determinismo teorizza la previsione degli eventi futuri.",
        "url": "https://www.treccani.it/enciclopedia/meccanicismo_(Enciclopedia-Italiana)/"
    },
    {
        "id": 608,
        "keywords": [
            "laplace",
            "demone di laplace",
            "determinismo assoluto",
            "quesito 608"
        ],
        "answer": "Nell'ambito della dinamica dei sistemi complessi, laplace concepiva il determinismo come la capacità di calcolare con precisione lo stato futuro conoscendo lo stato attuale.",
        "url": "https://www.treccani.it/enciclopedia/meccanicismo_(Enciclopedia-Italiana)/"
    },
    {
        "id": 609,
        "keywords": [
            "darwin",
            "evoluzione",
            "XIX secolo",
            "quesito 609"
        ],
        "answer": "Dal punto di vista dell'analisi matematica, nel XIX secolo gli studi di Darwin sull'evoluzione misero in discussione il riduzionismo meccanicista.",
        "url": "https://www.treccani.it/enciclopedia/entropia_(Enciclopedia-della-Scienza-e-della-Tecnica)/"
    },
    {
        "id": 610,
        "keywords": [
            "termodinamica",
            "entropia",
            "irreversibilita",
            "quesito 610"
        ],
        "answer": "Secondo la descrizione del capitolo, l'introduzione dell'entropia e dell'irreversibilità evidenziò i limiti della spiegazione meccanicista.",
        "url": "https://www.treccani.it/enciclopedia/entropia_(Enciclopedia-della-Scienza-e-della-Tecnica)/"
    },
    {
        "id": 611,
        "keywords": [
            "trasformazioni di energia",
            "fenomeni biologici",
            "limiti newtoniani",
            "quesito 611"
        ],
        "answer": "La termodinamica dimostrò che la meccanica classica era deficitaria nei fenomeni legati alla vita.",
        "url": "https://www.treccani.it/enciclopedia/entropia_(Enciclopedia-della-Scienza-e-della-Tecnica)/"
    },
    {
        "id": 612,
        "keywords": [
            "meccanica quantistica",
            "infinitamente piccolo",
            "XX secolo",
            "quesito 612"
        ],
        "answer": "In relazione alla teoria del caos, la meccanica quantistica è una teoria del XX secolo rivolta allo studio dell'infinitamente piccolo.",
        "url": "https://www.treccani.it/enciclopedia/entropia_(Enciclopedia-della-Scienza-e-della-Tecnica)/"
    },
    {
        "id": 613,
        "keywords": [
            "relativita generale",
            "infinitamente grande",
            "einstein",
            "quesito 613"
        ],
        "answer": "Nell'ambito della dinamica dei sistemi complessi, la relatività generale descrive la gravità e i fenomeni dell'infinitamente grande.",
        "url": "https://www.treccani.it/enciclopedia/entropia_(Enciclopedia-della-Scienza-e-della-Tecnica)/"
    },
    {
        "id": 614,
        "keywords": [
            "validita newtoniana",
            "fenomeni osservabili",
            "scala macroscopica",
            "quesito 614"
        ],
        "answer": "Dal punto di vista dell'analisi matematica, fino agli anni '60 la meccanica newtoniana rimase un'ottima descrizione dei fenomeni osservabili.",
        "url": "https://www.treccani.it/enciclopedia/entropia_(Enciclopedia-della-Scienza-e-della-Tecnica)/"
    },
    {
        "id": 615,
        "keywords": [
            "caos grecia",
            "significato antico",
            "disordine",
            "quesito 615"
        ],
        "answer": "Secondo la descrizione del capitolo, in antica Grecia il termine caos indicava disordine, confusione, scompiglio e agitazione.",
        "url": "https://www.treccani.it/enciclopedia/caos_(Enciclopedia-del-Novecento)/"
    },
    {
        "id": 616,
        "keywords": [
            "cosmos",
            "ordine",
            "antitesi caos",
            "quesito 616"
        ],
        "answer": "Il termine greco cosmos significa ordine ed era usato in antitesi al termine caos.",
        "url": "https://www.treccani.it/enciclopedia/caos_(Enciclopedia-del-Novecento)/"
    },
    {
        "id": 617,
        "keywords": [
            "limite cognitivo",
            "comprensione",
            "orizzonte oscuro",
            "quesito 617"
        ],
        "answer": "In relazione alla teoria del caos, in termini cognitivi il caos identifica un'incapacità generale di comprensione e un limite visivo.",
        "url": "https://www.treccani.it/enciclopedia/caos_(Enciclopedia-del-Novecento)/"
    },
    {
        "id": 618,
        "keywords": [
            "capovolgimento semantico",
            "scienza contemporanea",
            "caos deterministico",
            "quesito 618"
        ],
        "answer": "Nell'ambito della dinamica dei sistemi complessi, la scienza contemporanea ha ribaltato la semantica del caos riferendolo a dinamiche deterministiche non analitiche.",
        "url": "https://www.treccani.it/enciclopedia/caos_(Enciclopedia-del-Novecento)/"
    },
    {
        "id": 619,
        "keywords": [
            "settori del caos",
            "fenomeni sociali",
            "economia",
            "quesito 619"
        ],
        "answer": "Dal punto di vista dell'analisi matematica, la teoria del caos analizza fenomeni imprevedibili in ambito fisico, economico, sociale e comportamentale.",
        "url": "https://www.treccani.it/enciclopedia/caos_(Enciclopedia-del-Novecento)/"
    },
    {
        "id": 620,
        "keywords": [
            "edward lorenz",
            "mit cambridge",
            "meteorologia",
            "quesito 620"
        ],
        "answer": "Secondo la descrizione del capitolo, edward H. Lorenz era un meteorologo del MIT di Cambridge che sviluppò modelli matematici per il meteo.",
        "url": "https://www.treccani.it/enciclopedia/attrattore-di-lorenz_(Enciclopedia-della-Matematica)/"
    },
    {
        "id": 621,
        "keywords": [
            "equazioni differenziali",
            "tre equazioni",
            "non linearita",
            "quesito 621"
        ],
        "answer": "Il modello atmosferico di Lorenz era basato su tre equazioni differenziali ordinarie non lineari.",
        "url": "https://www.treccani.it/enciclopedia/attrattore-di-lorenz_(Enciclopedia-della-Matematica)/"
    },
    {
        "id": 622,
        "keywords": [
            "integrazione numerica",
            "computer lorenz",
            "anni 60",
            "quesito 622"
        ],
        "answer": "In relazione alla teoria del caos, lorenz utilizzò il computer per integrare numericamente equazioni non lineari prive di soluzione analitica.",
        "url": "https://www.treccani.it/enciclopedia/attrattore-di-lorenz_(Enciclopedia-della-Matematica)/"
    },
    {
        "id": 623,
        "keywords": [
            "analisi numerica",
            "processi iterativi",
            "algoritmi",
            "quesito 623"
        ],
        "answer": "Nell'ambito della dinamica dei sistemi complessi, l'analisi numerica sviluppa algoritmi e metodi iterativi per approssimare problemi matematici complessi.",
        "url": "https://www.treccani.it/enciclopedia/attrattore-di-lorenz_(Enciclopedia-della-Matematica)/"
    },
    {
        "id": 624,
        "keywords": [
            "arrotondamento decimali",
            "da 6 a 3 cifre",
            "scarto minimo",
            "quesito 624"
        ],
        "answer": "Dal punto di vista dell'analisi matematica, replicando una simulazione, Lorenz approssimò i dati da sei a tre cifre decimali alterando i risultati.",
        "url": "https://www.treccani.it/enciclopedia/attrattore-di-lorenz_(Enciclopedia-della-Matematica)/"
    },
    {
        "id": 625,
        "keywords": [
            "risultati divergenti",
            "esplosione dell'errore",
            "ordini di grandezza",
            "quesito 625"
        ],
        "answer": "Secondo la descrizione del capitolo, l'approssimazione decimale generò previsioni divergenti per vari ordini di grandezza.",
        "url": "https://www.treccani.it/enciclopedia/attrattore-di-lorenz_(Enciclopedia-della-Matematica)/"
    },
    {
        "id": 626,
        "keywords": [
            "riduzionismo newtoniano",
            "scala di grandezza",
            "dettagli trascurabili",
            "quesito 626"
        ],
        "answer": "Il riduzionismo newtoniano assume che i fenomeni su scala inferiore abbiano effetti trascurabili.",
        "url": "https://www.treccani.it/enciclopedia/attrattore-di-lorenz_(Enciclopedia-della-Matematica)/"
    },
    {
        "id": 627,
        "keywords": [
            "margine d'errore",
            "errore sperimentale",
            "propagazione",
            "quesito 627"
        ],
        "answer": "In relazione alla teoria del caos, nel modello newtoniano l'errore è controllabile, mentre nei sistemi caotici si propaga esplosivamente.",
        "url": "https://www.treccani.it/enciclopedia/attrattore-di-lorenz_(Enciclopedia-della-Matematica)/"
    },
    {
        "id": 628,
        "keywords": [
            "dipendenza sensibile",
            "condizioni iniziali",
            "limite previsioni",
            "quesito 628"
        ],
        "answer": "Nell'ambito della dinamica dei sistemi complessi, la dipendenza sensibile dalle condizioni iniziali rende impossibile la previsione a lungo termine.",
        "url": "https://www.treccani.it/enciclopedia/attrattore-di-lorenz_(Enciclopedia-della-Matematica)/"
    },
    {
        "id": 629,
        "keywords": [
            "effetto farfalla",
            "metafora brasiliana",
            "tifone florida",
            "quesito 629"
        ],
        "answer": "Dal punto di vista dell'analisi matematica, l'effetto farfalla esprime l'idea che il battito d'ali di una farfalla in Brasile produca un tifone in Florida.",
        "url": "https://www.treccani.it/enciclopedia/attrattore-di-lorenz_(Enciclopedia-della-Matematica)/"
    },
    {
        "id": 630,
        "keywords": [
            "conferenza aaas 1979",
            "uragano texas",
            "relazione lorenz",
            "quesito 630"
        ],
        "answer": "Secondo la descrizione del capitolo, nel 1979 alla conferenza AAAS gli allievi di Lorenz diffusero la metafora dell'uragano nel Texas.",
        "url": "https://www.treccani.it/enciclopedia/attrattore-di-lorenz_(Enciclopedia-della-Matematica)/"
    },
    {
        "id": 631,
        "keywords": [
            "cinema e cultura",
            "jurassic park",
            "sliding doors",
            "quesito 631"
        ],
        "answer": "L'effetto farfalla è citato in film celebri tra cui Jurassic Park, Sliding Doors e The Oxford Murders.",
        "url": "https://www.treccani.it/enciclopedia/attrattore-di-lorenz_(Enciclopedia-della-Matematica)/"
    },
    {
        "id": 632,
        "keywords": [
            "sistema dinamico",
            "variabili nel tempo",
            "spazio astratto",
            "quesito 632"
        ],
        "answer": "In relazione alla teoria del caos, un sistema dinamico è rappresentato da una serie di grandezze che variano nel tempo.",
        "url": "https://www.liceopalmieri.edu.it/LaboratorioStem/Attrattori/"
    },
    {
        "id": 633,
        "keywords": [
            "spazio delle fasi",
            "dimensioni",
            "traiettoria",
            "quesito 633"
        ],
        "answer": "Nell'ambito della dinamica dei sistemi complessi, lo spazio delle fasi ha una dimensione pari al numero di variabili libere del sistema dinamico.",
        "url": "https://www.liceopalmieri.edu.it/LaboratorioStem/Attrattori/"
    },
    {
        "id": 634,
        "keywords": [
            "piano delle fasi",
            "pendolo semplice",
            "due dimensioni",
            "quesito 634"
        ],
        "answer": "Dal punto di vista dell'analisi matematica, il pendolo semplice è descritto in un piano delle fasi bidimensionale (angolo e velocità).",
        "url": "https://www.liceopalmieri.edu.it/LaboratorioStem/Attrattori/"
    },
    {
        "id": 635,
        "keywords": [
            "doppio pendolo",
            "quattro dimensioni",
            "iperspazio",
            "quesito 635"
        ],
        "answer": "Secondo la descrizione del capitolo, il doppio pendolo necessita di uno spazio delle fasi a quattro dimensioni per rappresentare le sue orbite.",
        "url": "https://www.liceopalmieri.edu.it/LaboratorioStem/Attrattori/"
    },
    {
        "id": 636,
        "keywords": [
            "punto fisso",
            "attrattore punto",
            "attrito",
            "quesito 636"
        ],
        "answer": "Il punto fisso è un attrattore che stabilizza il sistema dinamico in uno stato di equilibrio stazionario.",
        "url": "https://www.liceopalmieri.edu.it/LaboratorioStem/Attrattori/"
    },
    {
        "id": 637,
        "keywords": [
            "ciclo limite",
            "circuito van der pol",
            "oscillatore",
            "quesito 637"
        ],
        "answer": "In relazione alla teoria del caos, un ciclo limite è un attrattore rappresentato da una curva chiusa percorsa in modo periodico.",
        "url": "https://www.liceopalmieri.edu.it/LaboratorioStem/Attrattori/"
    },
    {
        "id": 638,
        "keywords": [
            "attrattore strano",
            "definizione",
            "volume finito",
            "quesito 638"
        ],
        "answer": "Nell'ambito della dinamica dei sistemi complessi, l'attrattore strano è una regione finita dello spazio delle fasi in cui le traiettorie non si intersecano mai.",
        "url": "https://www.liceopalmieri.edu.it/LaboratorioStem/Attrattori/"
    },
    {
        "id": 639,
        "keywords": [
            "farfalla di lorenz",
            "ali sfasate",
            "corpo centrale",
            "quesito 639"
        ],
        "answer": "Dal punto di vista dell'analisi matematica, l'attrattore di Lorenz ha la forma caratteristica di una farfalla con due ali disposte su piani sfasati.",
        "url": "https://www.liceopalmieri.edu.it/LaboratorioStem/Attrattori/"
    },
    {
        "id": 640,
        "keywords": [
            "discretizzazione",
            "rappresentazione a punti",
            "passo temporale",
            "quesito 640"
        ],
        "answer": "Secondo la descrizione del capitolo, in simulazione informatica l'attrattore appare come una sequenza discreta di punti nel tempo.",
        "url": "https://www.liceopalmieri.edu.it/LaboratorioStem/Attrattori/"
    },
    {
        "id": 641,
        "keywords": [
            "attrattore toro",
            "quasi periodicita",
            "struttura toroidale",
            "quesito 641"
        ],
        "answer": "L'attrattore a toro descrive un comportamento quasi periodico con complessità intermedia tra ciclo e caos.",
        "url": "https://www.liceopalmieri.edu.it/LaboratorioStem/Attrattori/"
    },
    {
        "id": 642,
        "keywords": [
            "circuito di chua",
            "componenti passivi",
            "diodo non lineare",
            "quesito 642"
        ],
        "answer": "In relazione alla teoria del caos, il circuito di Chua è un circuito elettronico composto da resistenze, capacità, induttanza e un diodo non lineare.",
        "url": "https://www.treccani.it/enciclopedia/caos_(Enciclopedia-del-Novecento)/"
    },
    {
        "id": 643,
        "keywords": [
            "doppio scroll",
            "double scroll",
            "chua attrattore",
            "quesito 643"
        ],
        "answer": "Nell'ambito della dinamica dei sistemi complessi, il Doppio Scroll è l'attrattore strano più celebre prodotto dal circuito elettronico di Chua.",
        "url": "https://www.treccani.it/enciclopedia/caos_(Enciclopedia-del-Novecento)/"
    },
    {
        "id": 644,
        "keywords": [
            "spirale di chua",
            "resistenza parametro",
            "transizione",
            "quesito 644"
        ],
        "answer": "Dal punto di vista dell'analisi matematica, aumentando la resistenza nel circuito di Chua, l'attrattore passa dal doppio scroll alla spirale.",
        "url": "https://www.treccani.it/enciclopedia/caos_(Enciclopedia-del-Novecento)/"
    },
    {
        "id": 645,
        "keywords": [
            "strada verso il caos",
            "percorso sequenziale",
            "ordine caos",
            "quesito 645"
        ],
        "answer": "Secondo la descrizione del capitolo, la strada verso il caos descrive la transizione dall'ordine stazionario al caos deterministico.",
        "url": "https://www.treccani.it/enciclopedia/caos_(Enciclopedia-del-Novecento)/"
    },
    {
        "id": 646,
        "keywords": [
            "saturazione",
            "orizzonte fisico",
            "massimo energetico",
            "quesito 646"
        ],
        "answer": "La saturazione rappresenta il massimo livello di energia del sistema e si manifesta come ciclo limite.",
        "url": "https://www.treccani.it/enciclopedia/caos_(Enciclopedia-del-Novecento)/"
    },
    {
        "id": 647,
        "keywords": [
            "biforcazione",
            "parametro di controllo",
            "cambiamento qualitativo",
            "quesito 647"
        ],
        "answer": "In relazione alla teoria del caos, una biforcazione si verifica quando il comportamento del sistema cambia radicalmente al variare del parametro.",
        "url": "https://www.treccani.it/enciclopedia/caos_(Enciclopedia-del-Novecento)/"
    },
    {
        "id": 648,
        "keywords": [
            "biforcazione di hopf",
            "raddoppio del periodo",
            "cascata",
            "quesito 648"
        ],
        "answer": "Nell'ambito della dinamica dei sistemi complessi, la biforcazione di Hopf comporta il raddoppio del periodo delle oscillazioni lungo una cascata infinita.",
        "url": "https://www.treccani.it/enciclopedia/caos_(Enciclopedia-del-Novecento)/"
    },
    {
        "id": 649,
        "keywords": [
            "costante di feigenbaum",
            "mitchell feigenbaum",
            "1975",
            "quesito 649"
        ],
        "answer": "Dal punto di vista dell'analisi matematica, la costante di Feigenbaum (4.6692) descrive la convergenza universale delle biforcazioni caotiche.",
        "url": "https://www.treccani.it/enciclopedia/caos_(Enciclopedia-del-Novecento)/"
    },
    {
        "id": 650,
        "keywords": [
            "mappa logistica",
            "popolazione discreta",
            "modello feigenbaum",
            "quesito 650"
        ],
        "answer": "Secondo la descrizione del capitolo, la mappa logistica è un modello popolazionale discreto che mostra il raddoppio del periodo.",
        "url": "https://www.treccani.it/enciclopedia/caos_(Enciclopedia-del-Novecento)/"
    },
    {
        "id": 651,
        "keywords": [
            "diagramma di biforcazione",
            "soglia 1.16 kohm",
            "chua diagramma",
            "quesito 651"
        ],
        "answer": "Nel circuito di Chua la transizione da punto fisso a ciclo limite avviene per R = 1,16 kΩ.",
        "url": "https://www.treccani.it/enciclopedia/caos_(Enciclopedia-del-Novecento)/"
    },
    {
        "id": 652,
        "keywords": [
            "frattali",
            "etimologia fractus",
            "geometria non euclidea",
            "quesito 652"
        ],
        "answer": "In relazione alla teoria del caos, il termine frattale fu coniato da Mandelbrot nel 1975 dal latino fractus per definire forme discontinue.",
        "url": "https://www.treccani.it/enciclopedia/caos_(Enciclopedia-del-Novecento)/"
    },
    {
        "id": 653,
        "keywords": [
            "fiocco di neve di koch",
            "costruzione iterativa",
            "perimetro infinito",
            "quesito 653"
        ],
        "answer": "Nell'ambito della dinamica dei sistemi complessi, il fiocco di neve di Koch è un frattale con perimetro di lunghezza infinita in una superficie finita.",
        "url": "https://www.treccani.it/enciclopedia/caos_(Enciclopedia-del-Novecento)/"
    },
    {
        "id": 654,
        "keywords": [
            "triangolo di sierpinski",
            "ricorsione",
            "dimensione frattale",
            "quesito 654"
        ],
        "answer": "Dal punto di vista dell'analisi matematica, il triangolo di Sierpinski è una figura frattale ottenuta rimuovendo i sotto-triangoli centrali.",
        "url": "https://www.treccani.it/enciclopedia/caos_(Enciclopedia-del-Novecento)/"
    },
    {
        "id": 655,
        "keywords": [
            "benoit mandelbrot",
            "geometria della natura",
            "inadeguatezza euclidea",
            "quesito 655"
        ],
        "answer": "Secondo la descrizione del capitolo, mandelbrot dimostrò che la geometria euclidea non è adatta a descrivere nuvole, montagne e coste.",
        "url": "https://www.treccani.it/enciclopedia/caos_(Enciclopedia-del-Novecento)/"
    },
    {
        "id": 656,
        "keywords": [
            "invarianza di scala",
            "auto-similarita",
            "struttura ricorsiva",
            "quesito 656"
        ],
        "answer": "L'auto-similarità implica che ingrandendo un dettaglio di un frattale si ritrova la figura intera.",
        "url": "https://www.treccani.it/enciclopedia/caos_(Enciclopedia-del-Novecento)/"
    },
    {
        "id": 657,
        "keywords": [
            "cavolfiore frattale",
            "montagna",
            "scogliera",
            "quesito 657"
        ],
        "answer": "In relazione alla teoria del caos, esempi naturali di frattali sono i cavolfiori, i profili montuosi e la struttura delle scogliere.",
        "url": "https://www.treccani.it/enciclopedia/caos_(Enciclopedia-del-Novecento)/"
    },
    {
        "id": 658,
        "keywords": [
            "econofisica",
            "borsa valori",
            "serie temporali",
            "quesito 658"
        ],
        "answer": "Nell'ambito della dinamica dei sistemi complessi, l'econofisica studia le serie temporali dei mercati finanziari sfruttando concetti frattali e caotici.",
        "url": "https://www.treccani.it/enciclopedia/caos_(Enciclopedia-del-Novecento)/"
    },
    {
        "id": 659,
        "keywords": [
            "digital art",
            "arte elettronica",
            "estetica del caos",
            "quesito 659"
        ],
        "answer": "Dal punto di vista dell'analisi matematica, la bellezza degli attrattori e dei frattali ha ispirato nuove correnti artistiche di Digital Art.",
        "url": "https://www.treccani.it/enciclopedia/caos_(Enciclopedia-del-Novecento)/"
    },
    {
        "id": 660,
        "keywords": [
            "ubiquita del caos",
            "paradigma scientifico",
            "transdisciplinarita",
            "quesito 660"
        ],
        "answer": "Secondo la descrizione del capitolo, l'ubiquità del caos descrive la presenza universale di comportamenti imprevedibili nella natura.",
        "url": "https://www.treccani.it/enciclopedia/caos_(Enciclopedia-del-Novecento)/"
    },
    {
        "id": 661,
        "keywords": [
            "meccanicismo",
            "orologio perfetto",
            "newton",
            "quesito 661"
        ],
        "answer": "Da Newton in poi, la visione dominante rappresentava il mondo come un meccanismo perfetto, analogo a un orologio di precisione.",
        "url": "https://www.treccani.it/enciclopedia/meccanicismo_(Enciclopedia-Italiana)/"
    },
    {
        "id": 662,
        "keywords": [
            "meccanica sperimentale",
            "fine XVII secolo",
            "isaac newton",
            "quesito 662"
        ],
        "answer": "In relazione alla teoria del caos, la meccanica come scienza sperimentale è nata alla fine del XVII secolo con Isaac Newton.",
        "url": "https://www.treccani.it/enciclopedia/meccanicismo_(Enciclopedia-Italiana)/"
    },
    {
        "id": 663,
        "keywords": [
            "eulero",
            "lagrange",
            "laplace",
            "quesito 663"
        ],
        "answer": "Nell'ambito della dinamica dei sistemi complessi, nel XVIII secolo la meccanica classica fu perfezionata dai lavori di Eulero, Lagrange e Laplace.",
        "url": "https://www.treccani.it/enciclopedia/meccanicismo_(Enciclopedia-Italiana)/"
    },
    {
        "id": 664,
        "keywords": [
            "calcolo differenziale",
            "calcolo integrale",
            "leibniz",
            "quesito 664"
        ],
        "answer": "Dal punto di vista dell'analisi matematica, il calcolo differenziale e integrale fu sviluppato contemporaneamente da Newton e Leibniz.",
        "url": "https://www.treccani.it/enciclopedia/meccanicismo_(Enciclopedia-Italiana)/"
    },
    {
        "id": 665,
        "keywords": [
            "meccanica celeste",
            "leggi di newton",
            "evidenze sperimentali",
            "quesito 665"
        ],
        "answer": "Secondo la descrizione del capitolo, la meccanica celeste fornì un quadro teorico unificante supportato da evidenze sperimentali.",
        "url": "https://www.treccani.it/enciclopedia/meccanicismo_(Enciclopedia-Italiana)/"
    },
    {
        "id": 666,
        "keywords": [
            "determinismo causale",
            "causalita",
            "catena di eventi",
            "quesito 666"
        ],
        "answer": "Il determinismo causale stabilisce che ogni evento accada all'interno di una catena causale.",
        "url": "https://www.treccani.it/enciclopedia/meccanicismo_(Enciclopedia-Italiana)/"
    },
    {
        "id": 667,
        "keywords": [
            "configurazioni iniziali",
            "previsione teorica",
            "stato futuro",
            "quesito 667"
        ],
        "answer": "In relazione alla teoria del caos, conoscendo cause e configurazioni iniziali, il determinismo teorizza la previsione degli eventi futuri.",
        "url": "https://www.treccani.it/enciclopedia/meccanicismo_(Enciclopedia-Italiana)/"
    },
    {
        "id": 668,
        "keywords": [
            "laplace",
            "demone di laplace",
            "determinismo assoluto",
            "quesito 668"
        ],
        "answer": "Nell'ambito della dinamica dei sistemi complessi, laplace concepiva il determinismo come la capacità di calcolare con precisione lo stato futuro conoscendo lo stato attuale.",
        "url": "https://www.treccani.it/enciclopedia/meccanicismo_(Enciclopedia-Italiana)/"
    },
    {
        "id": 669,
        "keywords": [
            "darwin",
            "evoluzione",
            "XIX secolo",
            "quesito 669"
        ],
        "answer": "Dal punto di vista dell'analisi matematica, nel XIX secolo gli studi di Darwin sull'evoluzione misero in discussione il riduzionismo meccanicista.",
        "url": "https://www.treccani.it/enciclopedia/entropia_(Enciclopedia-della-Scienza-e-della-Tecnica)/"
    },
    {
        "id": 670,
        "keywords": [
            "termodinamica",
            "entropia",
            "irreversibilita",
            "quesito 670"
        ],
        "answer": "Secondo la descrizione del capitolo, l'introduzione dell'entropia e dell'irreversibilità evidenziò i limiti della spiegazione meccanicista.",
        "url": "https://www.treccani.it/enciclopedia/entropia_(Enciclopedia-della-Scienza-e-della-Tecnica)/"
    },
    {
        "id": 671,
        "keywords": [
            "trasformazioni di energia",
            "fenomeni biologici",
            "limiti newtoniani",
            "quesito 671"
        ],
        "answer": "La termodinamica dimostrò che la meccanica classica era deficitaria nei fenomeni legati alla vita.",
        "url": "https://www.treccani.it/enciclopedia/entropia_(Enciclopedia-della-Scienza-e-della-Tecnica)/"
    },
    {
        "id": 672,
        "keywords": [
            "meccanica quantistica",
            "infinitamente piccolo",
            "XX secolo",
            "quesito 672"
        ],
        "answer": "In relazione alla teoria del caos, la meccanica quantistica è una teoria del XX secolo rivolta allo studio dell'infinitamente piccolo.",
        "url": "https://www.treccani.it/enciclopedia/entropia_(Enciclopedia-della-Scienza-e-della-Tecnica)/"
    },
    {
        "id": 673,
        "keywords": [
            "relativita generale",
            "infinitamente grande",
            "einstein",
            "quesito 673"
        ],
        "answer": "Nell'ambito della dinamica dei sistemi complessi, la relatività generale descrive la gravità e i fenomeni dell'infinitamente grande.",
        "url": "https://www.treccani.it/enciclopedia/entropia_(Enciclopedia-della-Scienza-e-della-Tecnica)/"
    },
    {
        "id": 674,
        "keywords": [
            "validita newtoniana",
            "fenomeni osservabili",
            "scala macroscopica",
            "quesito 674"
        ],
        "answer": "Dal punto di vista dell'analisi matematica, fino agli anni '60 la meccanica newtoniana rimase un'ottima descrizione dei fenomeni osservabili.",
        "url": "https://www.treccani.it/enciclopedia/entropia_(Enciclopedia-della-Scienza-e-della-Tecnica)/"
    },
    {
        "id": 675,
        "keywords": [
            "caos grecia",
            "significato antico",
            "disordine",
            "quesito 675"
        ],
        "answer": "Secondo la descrizione del capitolo, in antica Grecia il termine caos indicava disordine, confusione, scompiglio e agitazione.",
        "url": "https://www.treccani.it/enciclopedia/caos_(Enciclopedia-del-Novecento)/"
    },
    {
        "id": 676,
        "keywords": [
            "cosmos",
            "ordine",
            "antitesi caos",
            "quesito 676"
        ],
        "answer": "Il termine greco cosmos significa ordine ed era usato in antitesi al termine caos.",
        "url": "https://www.treccani.it/enciclopedia/caos_(Enciclopedia-del-Novecento)/"
    },
    {
        "id": 677,
        "keywords": [
            "limite cognitivo",
            "comprensione",
            "orizzonte oscuro",
            "quesito 677"
        ],
        "answer": "In relazione alla teoria del caos, in termini cognitivi il caos identifica un'incapacità generale di comprensione e un limite visivo.",
        "url": "https://www.treccani.it/enciclopedia/caos_(Enciclopedia-del-Novecento)/"
    },
    {
        "id": 678,
        "keywords": [
            "capovolgimento semantico",
            "scienza contemporanea",
            "caos deterministico",
            "quesito 678"
        ],
        "answer": "Nell'ambito della dinamica dei sistemi complessi, la scienza contemporanea ha ribaltato la semantica del caos riferendolo a dinamiche deterministiche non analitiche.",
        "url": "https://www.treccani.it/enciclopedia/caos_(Enciclopedia-del-Novecento)/"
    },
    {
        "id": 679,
        "keywords": [
            "settori del caos",
            "fenomeni sociali",
            "economia",
            "quesito 679"
        ],
        "answer": "Dal punto di vista dell'analisi matematica, la teoria del caos analizza fenomeni imprevedibili in ambito fisico, economico, sociale e comportamentale.",
        "url": "https://www.treccani.it/enciclopedia/caos_(Enciclopedia-del-Novecento)/"
    },
    {
        "id": 680,
        "keywords": [
            "edward lorenz",
            "mit cambridge",
            "meteorologia",
            "quesito 680"
        ],
        "answer": "Secondo la descrizione del capitolo, edward H. Lorenz era un meteorologo del MIT di Cambridge che sviluppò modelli matematici per il meteo.",
        "url": "https://www.treccani.it/enciclopedia/attrattore-di-lorenz_(Enciclopedia-della-Matematica)/"
    },
    {
        "id": 681,
        "keywords": [
            "equazioni differenziali",
            "tre equazioni",
            "non linearita",
            "quesito 681"
        ],
        "answer": "Il modello atmosferico di Lorenz era basato su tre equazioni differenziali ordinarie non lineari.",
        "url": "https://www.treccani.it/enciclopedia/attrattore-di-lorenz_(Enciclopedia-della-Matematica)/"
    },
    {
        "id": 682,
        "keywords": [
            "integrazione numerica",
            "computer lorenz",
            "anni 60",
            "quesito 682"
        ],
        "answer": "In relazione alla teoria del caos, lorenz utilizzò il computer per integrare numericamente equazioni non lineari prive di soluzione analitica.",
        "url": "https://www.treccani.it/enciclopedia/attrattore-di-lorenz_(Enciclopedia-della-Matematica)/"
    },
    {
        "id": 683,
        "keywords": [
            "analisi numerica",
            "processi iterativi",
            "algoritmi",
            "quesito 683"
        ],
        "answer": "Nell'ambito della dinamica dei sistemi complessi, l'analisi numerica sviluppa algoritmi e metodi iterativi per approssimare problemi matematici complessi.",
        "url": "https://www.treccani.it/enciclopedia/attrattore-di-lorenz_(Enciclopedia-della-Matematica)/"
    },
    {
        "id": 684,
        "keywords": [
            "arrotondamento decimali",
            "da 6 a 3 cifre",
            "scarto minimo",
            "quesito 684"
        ],
        "answer": "Dal punto di vista dell'analisi matematica, replicando una simulazione, Lorenz approssimò i dati da sei a tre cifre decimali alterando i risultati.",
        "url": "https://www.treccani.it/enciclopedia/attrattore-di-lorenz_(Enciclopedia-della-Matematica)/"
    },
    {
        "id": 685,
        "keywords": [
            "risultati divergenti",
            "esplosione dell'errore",
            "ordini di grandezza",
            "quesito 685"
        ],
        "answer": "Secondo la descrizione del capitolo, l'approssimazione decimale generò previsioni divergenti per vari ordini di grandezza.",
        "url": "https://www.treccani.it/enciclopedia/attrattore-di-lorenz_(Enciclopedia-della-Matematica)/"
    },
    {
        "id": 686,
        "keywords": [
            "riduzionismo newtoniano",
            "scala di grandezza",
            "dettagli trascurabili",
            "quesito 686"
        ],
        "answer": "Il riduzionismo newtoniano assume che i fenomeni su scala inferiore abbiano effetti trascurabili.",
        "url": "https://www.treccani.it/enciclopedia/attrattore-di-lorenz_(Enciclopedia-della-Matematica)/"
    },
    {
        "id": 687,
        "keywords": [
            "margine d'errore",
            "errore sperimentale",
            "propagazione",
            "quesito 687"
        ],
        "answer": "In relazione alla teoria del caos, nel modello newtoniano l'errore è controllabile, mentre nei sistemi caotici si propaga esplosivamente.",
        "url": "https://www.treccani.it/enciclopedia/attrattore-di-lorenz_(Enciclopedia-della-Matematica)/"
    },
    {
        "id": 688,
        "keywords": [
            "dipendenza sensibile",
            "condizioni iniziali",
            "limite previsioni",
            "quesito 688"
        ],
        "answer": "Nell'ambito della dinamica dei sistemi complessi, la dipendenza sensibile dalle condizioni iniziali rende impossibile la previsione a lungo termine.",
        "url": "https://www.treccani.it/enciclopedia/attrattore-di-lorenz_(Enciclopedia-della-Matematica)/"
    },
    {
        "id": 689,
        "keywords": [
            "effetto farfalla",
            "metafora brasiliana",
            "tifone florida",
            "quesito 689"
        ],
        "answer": "Dal punto di vista dell'analisi matematica, l'effetto farfalla esprime l'idea che il battito d'ali di una farfalla in Brasile produca un tifone in Florida.",
        "url": "https://www.treccani.it/enciclopedia/attrattore-di-lorenz_(Enciclopedia-della-Matematica)/"
    },
    {
        "id": 690,
        "keywords": [
            "conferenza aaas 1979",
            "uragano texas",
            "relazione lorenz",
            "quesito 690"
        ],
        "answer": "Secondo la descrizione del capitolo, nel 1979 alla conferenza AAAS gli allievi di Lorenz diffusero la metafora dell'uragano nel Texas.",
        "url": "https://www.treccani.it/enciclopedia/attrattore-di-lorenz_(Enciclopedia-della-Matematica)/"
    },
    {
        "id": 691,
        "keywords": [
            "cinema e cultura",
            "jurassic park",
            "sliding doors",
            "quesito 691"
        ],
        "answer": "L'effetto farfalla è citato in film celebri tra cui Jurassic Park, Sliding Doors e The Oxford Murders.",
        "url": "https://www.treccani.it/enciclopedia/attrattore-di-lorenz_(Enciclopedia-della-Matematica)/"
    },
    {
        "id": 692,
        "keywords": [
            "sistema dinamico",
            "variabili nel tempo",
            "spazio astratto",
            "quesito 692"
        ],
        "answer": "In relazione alla teoria del caos, un sistema dinamico è rappresentato da una serie di grandezze che variano nel tempo.",
        "url": "https://www.liceopalmieri.edu.it/LaboratorioStem/Attrattori/"
    },
    {
        "id": 693,
        "keywords": [
            "spazio delle fasi",
            "dimensioni",
            "traiettoria",
            "quesito 693"
        ],
        "answer": "Nell'ambito della dinamica dei sistemi complessi, lo spazio delle fasi ha una dimensione pari al numero di variabili libere del sistema dinamico.",
        "url": "https://www.liceopalmieri.edu.it/LaboratorioStem/Attrattori/"
    },
    {
        "id": 694,
        "keywords": [
            "piano delle fasi",
            "pendolo semplice",
            "due dimensioni",
            "quesito 694"
        ],
        "answer": "Dal punto di vista dell'analisi matematica, il pendolo semplice è descritto in un piano delle fasi bidimensionale (angolo e velocità).",
        "url": "https://www.liceopalmieri.edu.it/LaboratorioStem/Attrattori/"
    },
    {
        "id": 695,
        "keywords": [
            "doppio pendolo",
            "quattro dimensioni",
            "iperspazio",
            "quesito 695"
        ],
        "answer": "Secondo la descrizione del capitolo, il doppio pendolo necessita di uno spazio delle fasi a quattro dimensioni per rappresentare le sue orbite.",
        "url": "https://www.liceopalmieri.edu.it/LaboratorioStem/Attrattori/"
    },
    {
        "id": 696,
        "keywords": [
            "punto fisso",
            "attrattore punto",
            "attrito",
            "quesito 696"
        ],
        "answer": "Il punto fisso è un attrattore che stabilizza il sistema dinamico in uno stato di equilibrio stazionario.",
        "url": "https://www.liceopalmieri.edu.it/LaboratorioStem/Attrattori/"
    },
    {
        "id": 697,
        "keywords": [
            "ciclo limite",
            "circuito van der pol",
            "oscillatore",
            "quesito 697"
        ],
        "answer": "In relazione alla teoria del caos, un ciclo limite è un attrattore rappresentato da una curva chiusa percorsa in modo periodico.",
        "url": "https://www.liceopalmieri.edu.it/LaboratorioStem/Attrattori/"
    },
    {
        "id": 698,
        "keywords": [
            "attrattore strano",
            "definizione",
            "volume finito",
            "quesito 698"
        ],
        "answer": "Nell'ambito della dinamica dei sistemi complessi, l'attrattore strano è una regione finita dello spazio delle fasi in cui le traiettorie non si intersecano mai.",
        "url": "https://www.liceopalmieri.edu.it/LaboratorioStem/Attrattori/"
    },
    {
        "id": 699,
        "keywords": [
            "farfalla di lorenz",
            "ali sfasate",
            "corpo centrale",
            "quesito 699"
        ],
        "answer": "Dal punto di vista dell'analisi matematica, l'attrattore di Lorenz ha la forma caratteristica di una farfalla con due ali disposte su piani sfasati.",
        "url": "https://www.liceopalmieri.edu.it/LaboratorioStem/Attrattori/"
    },
    {
        "id": 700,
        "keywords": [
            "discretizzazione",
            "rappresentazione a punti",
            "passo temporale",
            "quesito 700"
        ],
        "answer": "Secondo la descrizione del capitolo, in simulazione informatica l'attrattore appare come una sequenza discreta di punti nel tempo.",
        "url": "https://www.liceopalmieri.edu.it/LaboratorioStem/Attrattori/"
    },
    {
        "id": 701,
        "keywords": [
            "attrattore toro",
            "quasi periodicita",
            "struttura toroidale",
            "quesito 701"
        ],
        "answer": "L'attrattore a toro descrive un comportamento quasi periodico con complessità intermedia tra ciclo e caos.",
        "url": "https://www.liceopalmieri.edu.it/LaboratorioStem/Attrattori/"
    },
    {
        "id": 702,
        "keywords": [
            "circuito di chua",
            "componenti passivi",
            "diodo non lineare",
            "quesito 702"
        ],
        "answer": "In relazione alla teoria del caos, il circuito di Chua è un circuito elettronico composto da resistenze, capacità, induttanza e un diodo non lineare.",
        "url": "https://www.treccani.it/enciclopedia/caos_(Enciclopedia-del-Novecento)/"
    },
    {
        "id": 703,
        "keywords": [
            "doppio scroll",
            "double scroll",
            "chua attrattore",
            "quesito 703"
        ],
        "answer": "Nell'ambito della dinamica dei sistemi complessi, il Doppio Scroll è l'attrattore strano più celebre prodotto dal circuito elettronico di Chua.",
        "url": "https://www.treccani.it/enciclopedia/caos_(Enciclopedia-del-Novecento)/"
    },
    {
        "id": 704,
        "keywords": [
            "spirale di chua",
            "resistenza parametro",
            "transizione",
            "quesito 704"
        ],
        "answer": "Dal punto di vista dell'analisi matematica, aumentando la resistenza nel circuito di Chua, l'attrattore passa dal doppio scroll alla spirale.",
        "url": "https://www.treccani.it/enciclopedia/caos_(Enciclopedia-del-Novecento)/"
    },
    {
        "id": 705,
        "keywords": [
            "strada verso il caos",
            "percorso sequenziale",
            "ordine caos",
            "quesito 705"
        ],
        "answer": "Secondo la descrizione del capitolo, la strada verso il caos descrive la transizione dall'ordine stazionario al caos deterministico.",
        "url": "https://www.treccani.it/enciclopedia/caos_(Enciclopedia-del-Novecento)/"
    },
    {
        "id": 706,
        "keywords": [
            "saturazione",
            "orizzonte fisico",
            "massimo energetico",
            "quesito 706"
        ],
        "answer": "La saturazione rappresenta il massimo livello di energia del sistema e si manifesta come ciclo limite.",
        "url": "https://www.treccani.it/enciclopedia/caos_(Enciclopedia-del-Novecento)/"
    },
    {
        "id": 707,
        "keywords": [
            "biforcazione",
            "parametro di controllo",
            "cambiamento qualitativo",
            "quesito 707"
        ],
        "answer": "In relazione alla teoria del caos, una biforcazione si verifica quando il comportamento del sistema cambia radicalmente al variare del parametro.",
        "url": "https://www.treccani.it/enciclopedia/caos_(Enciclopedia-del-Novecento)/"
    },
    {
        "id": 708,
        "keywords": [
            "biforcazione di hopf",
            "raddoppio del periodo",
            "cascata",
            "quesito 708"
        ],
        "answer": "Nell'ambito della dinamica dei sistemi complessi, la biforcazione di Hopf comporta il raddoppio del periodo delle oscillazioni lungo una cascata infinita.",
        "url": "https://www.treccani.it/enciclopedia/caos_(Enciclopedia-del-Novecento)/"
    },
    {
        "id": 709,
        "keywords": [
            "costante di feigenbaum",
            "mitchell feigenbaum",
            "1975",
            "quesito 709"
        ],
        "answer": "Dal punto di vista dell'analisi matematica, la costante di Feigenbaum (4.6692) descrive la convergenza universale delle biforcazioni caotiche.",
        "url": "https://www.treccani.it/enciclopedia/caos_(Enciclopedia-del-Novecento)/"
    },
    {
        "id": 710,
        "keywords": [
            "mappa logistica",
            "popolazione discreta",
            "modello feigenbaum",
            "quesito 710"
        ],
        "answer": "Secondo la descrizione del capitolo, la mappa logistica è un modello popolazionale discreto che mostra il raddoppio del periodo.",
        "url": "https://www.treccani.it/enciclopedia/caos_(Enciclopedia-del-Novecento)/"
    },
    {
        "id": 711,
        "keywords": [
            "diagramma di biforcazione",
            "soglia 1.16 kohm",
            "chua diagramma",
            "quesito 711"
        ],
        "answer": "Nel circuito di Chua la transizione da punto fisso a ciclo limite avviene per R = 1,16 kΩ.",
        "url": "https://www.treccani.it/enciclopedia/caos_(Enciclopedia-del-Novecento)/"
    },
    {
        "id": 712,
        "keywords": [
            "frattali",
            "etimologia fractus",
            "geometria non euclidea",
            "quesito 712"
        ],
        "answer": "In relazione alla teoria del caos, il termine frattale fu coniato da Mandelbrot nel 1975 dal latino fractus per definire forme discontinue.",
        "url": "https://www.treccani.it/enciclopedia/caos_(Enciclopedia-del-Novecento)/"
    },
    {
        "id": 713,
        "keywords": [
            "fiocco di neve di koch",
            "costruzione iterativa",
            "perimetro infinito",
            "quesito 713"
        ],
        "answer": "Nell'ambito della dinamica dei sistemi complessi, il fiocco di neve di Koch è un frattale con perimetro di lunghezza infinita in una superficie finita.",
        "url": "https://www.treccani.it/enciclopedia/caos_(Enciclopedia-del-Novecento)/"
    },
    {
        "id": 714,
        "keywords": [
            "triangolo di sierpinski",
            "ricorsione",
            "dimensione frattale",
            "quesito 714"
        ],
        "answer": "Dal punto di vista dell'analisi matematica, il triangolo di Sierpinski è una figura frattale ottenuta rimuovendo i sotto-triangoli centrali.",
        "url": "https://www.treccani.it/enciclopedia/caos_(Enciclopedia-del-Novecento)/"
    },
    {
        "id": 715,
        "keywords": [
            "benoit mandelbrot",
            "geometria della natura",
            "inadeguatezza euclidea",
            "quesito 715"
        ],
        "answer": "Secondo la descrizione del capitolo, mandelbrot dimostrò che la geometria euclidea non è adatta a descrivere nuvole, montagne e coste.",
        "url": "https://www.treccani.it/enciclopedia/caos_(Enciclopedia-del-Novecento)/"
    },
    {
        "id": 716,
        "keywords": [
            "invarianza di scala",
            "auto-similarita",
            "struttura ricorsiva",
            "quesito 716"
        ],
        "answer": "L'auto-similarità implica che ingrandendo un dettaglio di un frattale si ritrova la figura intera.",
        "url": "https://www.treccani.it/enciclopedia/caos_(Enciclopedia-del-Novecento)/"
    },
    {
        "id": 717,
        "keywords": [
            "cavolfiore frattale",
            "montagna",
            "scogliera",
            "quesito 717"
        ],
        "answer": "In relazione alla teoria del caos, esempi naturali di frattali sono i cavolfiori, i profili montuosi e la struttura delle scogliere.",
        "url": "https://www.treccani.it/enciclopedia/caos_(Enciclopedia-del-Novecento)/"
    },
    {
        "id": 718,
        "keywords": [
            "econofisica",
            "borsa valori",
            "serie temporali",
            "quesito 718"
        ],
        "answer": "Nell'ambito della dinamica dei sistemi complessi, l'econofisica studia le serie temporali dei mercati finanziari sfruttando concetti frattali e caotici.",
        "url": "https://www.treccani.it/enciclopedia/caos_(Enciclopedia-del-Novecento)/"
    },
    {
        "id": 719,
        "keywords": [
            "digital art",
            "arte elettronica",
            "estetica del caos",
            "quesito 719"
        ],
        "answer": "Dal punto di vista dell'analisi matematica, la bellezza degli attrattori e dei frattali ha ispirato nuove correnti artistiche di Digital Art.",
        "url": "https://www.treccani.it/enciclopedia/caos_(Enciclopedia-del-Novecento)/"
    },
    {
        "id": 720,
        "keywords": [
            "ubiquita del caos",
            "paradigma scientifico",
            "transdisciplinarita",
            "quesito 720"
        ],
        "answer": "Secondo la descrizione del capitolo, l'ubiquità del caos descrive la presenza universale di comportamenti imprevedibili nella natura.",
        "url": "https://www.treccani.it/enciclopedia/caos_(Enciclopedia-del-Novecento)/"
    },
    {
        "id": 721,
        "keywords": [
            "meccanicismo",
            "orologio perfetto",
            "newton",
            "quesito 721"
        ],
        "answer": "Da Newton in poi, la visione dominante rappresentava il mondo come un meccanismo perfetto, analogo a un orologio di precisione.",
        "url": "https://www.treccani.it/enciclopedia/meccanicismo_(Enciclopedia-Italiana)/"
    },
    {
        "id": 722,
        "keywords": [
            "meccanica sperimentale",
            "fine XVII secolo",
            "isaac newton",
            "quesito 722"
        ],
        "answer": "In relazione alla teoria del caos, la meccanica come scienza sperimentale è nata alla fine del XVII secolo con Isaac Newton.",
        "url": "https://www.treccani.it/enciclopedia/meccanicismo_(Enciclopedia-Italiana)/"
    },
    {
        "id": 723,
        "keywords": [
            "eulero",
            "lagrange",
            "laplace",
            "quesito 723"
        ],
        "answer": "Nell'ambito della dinamica dei sistemi complessi, nel XVIII secolo la meccanica classica fu perfezionata dai lavori di Eulero, Lagrange e Laplace.",
        "url": "https://www.treccani.it/enciclopedia/meccanicismo_(Enciclopedia-Italiana)/"
    },
    {
        "id": 724,
        "keywords": [
            "calcolo differenziale",
            "calcolo integrale",
            "leibniz",
            "quesito 724"
        ],
        "answer": "Dal punto di vista dell'analisi matematica, il calcolo differenziale e integrale fu sviluppato contemporaneamente da Newton e Leibniz.",
        "url": "https://www.treccani.it/enciclopedia/meccanicismo_(Enciclopedia-Italiana)/"
    },
    {
        "id": 725,
        "keywords": [
            "meccanica celeste",
            "leggi di newton",
            "evidenze sperimentali",
            "quesito 725"
        ],
        "answer": "Secondo la descrizione del capitolo, la meccanica celeste fornì un quadro teorico unificante supportato da evidenze sperimentali.",
        "url": "https://www.treccani.it/enciclopedia/meccanicismo_(Enciclopedia-Italiana)/"
    },
    {
        "id": 726,
        "keywords": [
            "determinismo causale",
            "causalita",
            "catena di eventi",
            "quesito 726"
        ],
        "answer": "Il determinismo causale stabilisce che ogni evento accada all'interno di una catena causale.",
        "url": "https://www.treccani.it/enciclopedia/meccanicismo_(Enciclopedia-Italiana)/"
    },
    {
        "id": 727,
        "keywords": [
            "configurazioni iniziali",
            "previsione teorica",
            "stato futuro",
            "quesito 727"
        ],
        "answer": "In relazione alla teoria del caos, conoscendo cause e configurazioni iniziali, il determinismo teorizza la previsione degli eventi futuri.",
        "url": "https://www.treccani.it/enciclopedia/meccanicismo_(Enciclopedia-Italiana)/"
    },
    {
        "id": 728,
        "keywords": [
            "laplace",
            "demone di laplace",
            "determinismo assoluto",
            "quesito 728"
        ],
        "answer": "Nell'ambito della dinamica dei sistemi complessi, laplace concepiva il determinismo come la capacità di calcolare con precisione lo stato futuro conoscendo lo stato attuale.",
        "url": "https://www.treccani.it/enciclopedia/meccanicismo_(Enciclopedia-Italiana)/"
    },
    {
        "id": 729,
        "keywords": [
            "darwin",
            "evoluzione",
            "XIX secolo",
            "quesito 729"
        ],
        "answer": "Dal punto di vista dell'analisi matematica, nel XIX secolo gli studi di Darwin sull'evoluzione misero in discussione il riduzionismo meccanicista.",
        "url": "https://www.treccani.it/enciclopedia/entropia_(Enciclopedia-della-Scienza-e-della-Tecnica)/"
    },
    {
        "id": 730,
        "keywords": [
            "termodinamica",
            "entropia",
            "irreversibilita",
            "quesito 730"
        ],
        "answer": "Secondo la descrizione del capitolo, l'introduzione dell'entropia e dell'irreversibilità evidenziò i limiti della spiegazione meccanicista.",
        "url": "https://www.treccani.it/enciclopedia/entropia_(Enciclopedia-della-Scienza-e-della-Tecnica)/"
    },
    {
        "id": 731,
        "keywords": [
            "trasformazioni di energia",
            "fenomeni biologici",
            "limiti newtoniani",
            "quesito 731"
        ],
        "answer": "La termodinamica dimostrò che la meccanica classica era deficitaria nei fenomeni legati alla vita.",
        "url": "https://www.treccani.it/enciclopedia/entropia_(Enciclopedia-della-Scienza-e-della-Tecnica)/"
    },
    {
        "id": 732,
        "keywords": [
            "meccanica quantistica",
            "infinitamente piccolo",
            "XX secolo",
            "quesito 732"
        ],
        "answer": "In relazione alla teoria del caos, la meccanica quantistica è una teoria del XX secolo rivolta allo studio dell'infinitamente piccolo.",
        "url": "https://www.treccani.it/enciclopedia/entropia_(Enciclopedia-della-Scienza-e-della-Tecnica)/"
    },
    {
        "id": 733,
        "keywords": [
            "relativita generale",
            "infinitamente grande",
            "einstein",
            "quesito 733"
        ],
        "answer": "Nell'ambito della dinamica dei sistemi complessi, la relatività generale descrive la gravità e i fenomeni dell'infinitamente grande.",
        "url": "https://www.treccani.it/enciclopedia/entropia_(Enciclopedia-della-Scienza-e-della-Tecnica)/"
    },
    {
        "id": 734,
        "keywords": [
            "validita newtoniana",
            "fenomeni osservabili",
            "scala macroscopica",
            "quesito 734"
        ],
        "answer": "Dal punto di vista dell'analisi matematica, fino agli anni '60 la meccanica newtoniana rimase un'ottima descrizione dei fenomeni osservabili.",
        "url": "https://www.treccani.it/enciclopedia/entropia_(Enciclopedia-della-Scienza-e-della-Tecnica)/"
    },
    {
        "id": 735,
        "keywords": [
            "caos grecia",
            "significato antico",
            "disordine",
            "quesito 735"
        ],
        "answer": "Secondo la descrizione del capitolo, in antica Grecia il termine caos indicava disordine, confusione, scompiglio e agitazione.",
        "url": "https://www.treccani.it/enciclopedia/caos_(Enciclopedia-del-Novecento)/"
    },
    {
        "id": 736,
        "keywords": [
            "cosmos",
            "ordine",
            "antitesi caos",
            "quesito 736"
        ],
        "answer": "Il termine greco cosmos significa ordine ed era usato in antitesi al termine caos.",
        "url": "https://www.treccani.it/enciclopedia/caos_(Enciclopedia-del-Novecento)/"
    },
    {
        "id": 737,
        "keywords": [
            "limite cognitivo",
            "comprensione",
            "orizzonte oscuro",
            "quesito 737"
        ],
        "answer": "In relazione alla teoria del caos, in termini cognitivi il caos identifica un'incapacità generale di comprensione e un limite visivo.",
        "url": "https://www.treccani.it/enciclopedia/caos_(Enciclopedia-del-Novecento)/"
    },
    {
        "id": 738,
        "keywords": [
            "capovolgimento semantico",
            "scienza contemporanea",
            "caos deterministico",
            "quesito 738"
        ],
        "answer": "Nell'ambito della dinamica dei sistemi complessi, la scienza contemporanea ha ribaltato la semantica del caos riferendolo a dinamiche deterministiche non analitiche.",
        "url": "https://www.treccani.it/enciclopedia/caos_(Enciclopedia-del-Novecento)/"
    },
    {
        "id": 739,
        "keywords": [
            "settori del caos",
            "fenomeni sociali",
            "economia",
            "quesito 739"
        ],
        "answer": "Dal punto di vista dell'analisi matematica, la teoria del caos analizza fenomeni imprevedibili in ambito fisico, economico, sociale e comportamentale.",
        "url": "https://www.treccani.it/enciclopedia/caos_(Enciclopedia-del-Novecento)/"
    },
    {
        "id": 740,
        "keywords": [
            "edward lorenz",
            "mit cambridge",
            "meteorologia",
            "quesito 740"
        ],
        "answer": "Secondo la descrizione del capitolo, edward H. Lorenz era un meteorologo del MIT di Cambridge che sviluppò modelli matematici per il meteo.",
        "url": "https://www.treccani.it/enciclopedia/attrattore-di-lorenz_(Enciclopedia-della-Matematica)/"
    },
    {
        "id": 741,
        "keywords": [
            "equazioni differenziali",
            "tre equazioni",
            "non linearita",
            "quesito 741"
        ],
        "answer": "Il modello atmosferico di Lorenz era basato su tre equazioni differenziali ordinarie non lineari.",
        "url": "https://www.treccani.it/enciclopedia/attrattore-di-lorenz_(Enciclopedia-della-Matematica)/"
    },
    {
        "id": 742,
        "keywords": [
            "integrazione numerica",
            "computer lorenz",
            "anni 60",
            "quesito 742"
        ],
        "answer": "In relazione alla teoria del caos, lorenz utilizzò il computer per integrare numericamente equazioni non lineari prive di soluzione analitica.",
        "url": "https://www.treccani.it/enciclopedia/attrattore-di-lorenz_(Enciclopedia-della-Matematica)/"
    },
    {
        "id": 743,
        "keywords": [
            "analisi numerica",
            "processi iterativi",
            "algoritmi",
            "quesito 743"
        ],
        "answer": "Nell'ambito della dinamica dei sistemi complessi, l'analisi numerica sviluppa algoritmi e metodi iterativi per approssimare problemi matematici complessi.",
        "url": "https://www.treccani.it/enciclopedia/attrattore-di-lorenz_(Enciclopedia-della-Matematica)/"
    },
    {
        "id": 744,
        "keywords": [
            "arrotondamento decimali",
            "da 6 a 3 cifre",
            "scarto minimo",
            "quesito 744"
        ],
        "answer": "Dal punto di vista dell'analisi matematica, replicando una simulazione, Lorenz approssimò i dati da sei a tre cifre decimali alterando i risultati.",
        "url": "https://www.treccani.it/enciclopedia/attrattore-di-lorenz_(Enciclopedia-della-Matematica)/"
    },
    {
        "id": 745,
        "keywords": [
            "risultati divergenti",
            "esplosione dell'errore",
            "ordini di grandezza",
            "quesito 745"
        ],
        "answer": "Secondo la descrizione del capitolo, l'approssimazione decimale generò previsioni divergenti per vari ordini di grandezza.",
        "url": "https://www.treccani.it/enciclopedia/attrattore-di-lorenz_(Enciclopedia-della-Matematica)/"
    },
    {
        "id": 746,
        "keywords": [
            "riduzionismo newtoniano",
            "scala di grandezza",
            "dettagli trascurabili",
            "quesito 746"
        ],
        "answer": "Il riduzionismo newtoniano assume che i fenomeni su scala inferiore abbiano effetti trascurabili.",
        "url": "https://www.treccani.it/enciclopedia/attrattore-di-lorenz_(Enciclopedia-della-Matematica)/"
    },
    {
        "id": 747,
        "keywords": [
            "margine d'errore",
            "errore sperimentale",
            "propagazione",
            "quesito 747"
        ],
        "answer": "In relazione alla teoria del caos, nel modello newtoniano l'errore è controllabile, mentre nei sistemi caotici si propaga esplosivamente.",
        "url": "https://www.treccani.it/enciclopedia/attrattore-di-lorenz_(Enciclopedia-della-Matematica)/"
    },
    {
        "id": 748,
        "keywords": [
            "dipendenza sensibile",
            "condizioni iniziali",
            "limite previsioni",
            "quesito 748"
        ],
        "answer": "Nell'ambito della dinamica dei sistemi complessi, la dipendenza sensibile dalle condizioni iniziali rende impossibile la previsione a lungo termine.",
        "url": "https://www.treccani.it/enciclopedia/attrattore-di-lorenz_(Enciclopedia-della-Matematica)/"
    },
    {
        "id": 749,
        "keywords": [
            "effetto farfalla",
            "metafora brasiliana",
            "tifone florida",
            "quesito 749"
        ],
        "answer": "Dal punto di vista dell'analisi matematica, l'effetto farfalla esprime l'idea che il battito d'ali di una farfalla in Brasile produca un tifone in Florida.",
        "url": "https://www.treccani.it/enciclopedia/attrattore-di-lorenz_(Enciclopedia-della-Matematica)/"
    },
    {
        "id": 750,
        "keywords": [
            "conferenza aaas 1979",
            "uragano texas",
            "relazione lorenz",
            "quesito 750"
        ],
        "answer": "Secondo la descrizione del capitolo, nel 1979 alla conferenza AAAS gli allievi di Lorenz diffusero la metafora dell'uragano nel Texas.",
        "url": "https://www.treccani.it/enciclopedia/attrattore-di-lorenz_(Enciclopedia-della-Matematica)/"
    },
    {
        "id": 751,
        "keywords": [
            "cinema e cultura",
            "jurassic park",
            "sliding doors",
            "quesito 751"
        ],
        "answer": "L'effetto farfalla è citato in film celebri tra cui Jurassic Park, Sliding Doors e The Oxford Murders.",
        "url": "https://www.treccani.it/enciclopedia/attrattore-di-lorenz_(Enciclopedia-della-Matematica)/"
    },
    {
        "id": 752,
        "keywords": [
            "sistema dinamico",
            "variabili nel tempo",
            "spazio astratto",
            "quesito 752"
        ],
        "answer": "In relazione alla teoria del caos, un sistema dinamico è rappresentato da una serie di grandezze che variano nel tempo.",
        "url": "https://www.liceopalmieri.edu.it/LaboratorioStem/Attrattori/"
    },
    {
        "id": 753,
        "keywords": [
            "spazio delle fasi",
            "dimensioni",
            "traiettoria",
            "quesito 753"
        ],
        "answer": "Nell'ambito della dinamica dei sistemi complessi, lo spazio delle fasi ha una dimensione pari al numero di variabili libere del sistema dinamico.",
        "url": "https://www.liceopalmieri.edu.it/LaboratorioStem/Attrattori/"
    },
    {
        "id": 754,
        "keywords": [
            "piano delle fasi",
            "pendolo semplice",
            "due dimensioni",
            "quesito 754"
        ],
        "answer": "Dal punto di vista dell'analisi matematica, il pendolo semplice è descritto in un piano delle fasi bidimensionale (angolo e velocità).",
        "url": "https://www.liceopalmieri.edu.it/LaboratorioStem/Attrattori/"
    },
    {
        "id": 755,
        "keywords": [
            "doppio pendolo",
            "quattro dimensioni",
            "iperspazio",
            "quesito 755"
        ],
        "answer": "Secondo la descrizione del capitolo, il doppio pendolo necessita di uno spazio delle fasi a quattro dimensioni per rappresentare le sue orbite.",
        "url": "https://www.liceopalmieri.edu.it/LaboratorioStem/Attrattori/"
    },
    {
        "id": 756,
        "keywords": [
            "punto fisso",
            "attrattore punto",
            "attrito",
            "quesito 756"
        ],
        "answer": "Il punto fisso è un attrattore che stabilizza il sistema dinamico in uno stato di equilibrio stazionario.",
        "url": "https://www.liceopalmieri.edu.it/LaboratorioStem/Attrattori/"
    },
    {
        "id": 757,
        "keywords": [
            "ciclo limite",
            "circuito van der pol",
            "oscillatore",
            "quesito 757"
        ],
        "answer": "In relazione alla teoria del caos, un ciclo limite è un attrattore rappresentato da una curva chiusa percorsa in modo periodico.",
        "url": "https://www.liceopalmieri.edu.it/LaboratorioStem/Attrattori/"
    },
    {
        "id": 758,
        "keywords": [
            "attrattore strano",
            "definizione",
            "volume finito",
            "quesito 758"
        ],
        "answer": "Nell'ambito della dinamica dei sistemi complessi, l'attrattore strano è una regione finita dello spazio delle fasi in cui le traiettorie non si intersecano mai.",
        "url": "https://www.liceopalmieri.edu.it/LaboratorioStem/Attrattori/"
    },
    {
        "id": 759,
        "keywords": [
            "farfalla di lorenz",
            "ali sfasate",
            "corpo centrale",
            "quesito 759"
        ],
        "answer": "Dal punto di vista dell'analisi matematica, l'attrattore di Lorenz ha la forma caratteristica di una farfalla con due ali disposte su piani sfasati.",
        "url": "https://www.liceopalmieri.edu.it/LaboratorioStem/Attrattori/"
    },
    {
        "id": 760,
        "keywords": [
            "discretizzazione",
            "rappresentazione a punti",
            "passo temporale",
            "quesito 760"
        ],
        "answer": "Secondo la descrizione del capitolo, in simulazione informatica l'attrattore appare come una sequenza discreta di punti nel tempo.",
        "url": "https://www.liceopalmieri.edu.it/LaboratorioStem/Attrattori/"
    },
    {
        "id": 761,
        "keywords": [
            "attrattore toro",
            "quasi periodicita",
            "struttura toroidale",
            "quesito 761"
        ],
        "answer": "L'attrattore a toro descrive un comportamento quasi periodico con complessità intermedia tra ciclo e caos.",
        "url": "https://www.liceopalmieri.edu.it/LaboratorioStem/Attrattori/"
    },
    {
        "id": 762,
        "keywords": [
            "circuito di chua",
            "componenti passivi",
            "diodo non lineare",
            "quesito 762"
        ],
        "answer": "In relazione alla teoria del caos, il circuito di Chua è un circuito elettronico composto da resistenze, capacità, induttanza e un diodo non lineare.",
        "url": "https://www.treccani.it/enciclopedia/caos_(Enciclopedia-del-Novecento)/"
    },
    {
        "id": 763,
        "keywords": [
            "doppio scroll",
            "double scroll",
            "chua attrattore",
            "quesito 763"
        ],
        "answer": "Nell'ambito della dinamica dei sistemi complessi, il Doppio Scroll è l'attrattore strano più celebre prodotto dal circuito elettronico di Chua.",
        "url": "https://www.treccani.it/enciclopedia/caos_(Enciclopedia-del-Novecento)/"
    },
    {
        "id": 764,
        "keywords": [
            "spirale di chua",
            "resistenza parametro",
            "transizione",
            "quesito 764"
        ],
        "answer": "Dal punto di vista dell'analisi matematica, aumentando la resistenza nel circuito di Chua, l'attrattore passa dal doppio scroll alla spirale.",
        "url": "https://www.treccani.it/enciclopedia/caos_(Enciclopedia-del-Novecento)/"
    },
    {
        "id": 765,
        "keywords": [
            "strada verso il caos",
            "percorso sequenziale",
            "ordine caos",
            "quesito 765"
        ],
        "answer": "Secondo la descrizione del capitolo, la strada verso il caos descrive la transizione dall'ordine stazionario al caos deterministico.",
        "url": "https://www.treccani.it/enciclopedia/caos_(Enciclopedia-del-Novecento)/"
    },
    {
        "id": 766,
        "keywords": [
            "saturazione",
            "orizzonte fisico",
            "massimo energetico",
            "quesito 766"
        ],
        "answer": "La saturazione rappresenta il massimo livello di energia del sistema e si manifesta come ciclo limite.",
        "url": "https://www.treccani.it/enciclopedia/caos_(Enciclopedia-del-Novecento)/"
    },
    {
        "id": 767,
        "keywords": [
            "biforcazione",
            "parametro di controllo",
            "cambiamento qualitativo",
            "quesito 767"
        ],
        "answer": "In relazione alla teoria del caos, una biforcazione si verifica quando il comportamento del sistema cambia radicalmente al variare del parametro.",
        "url": "https://www.treccani.it/enciclopedia/caos_(Enciclopedia-del-Novecento)/"
    },
    {
        "id": 768,
        "keywords": [
            "biforcazione di hopf",
            "raddoppio del periodo",
            "cascata",
            "quesito 768"
        ],
        "answer": "Nell'ambito della dinamica dei sistemi complessi, la biforcazione di Hopf comporta il raddoppio del periodo delle oscillazioni lungo una cascata infinita.",
        "url": "https://www.treccani.it/enciclopedia/caos_(Enciclopedia-del-Novecento)/"
    },
    {
        "id": 769,
        "keywords": [
            "costante di feigenbaum",
            "mitchell feigenbaum",
            "1975",
            "quesito 769"
        ],
        "answer": "Dal punto di vista dell'analisi matematica, la costante di Feigenbaum (4.6692) descrive la convergenza universale delle biforcazioni caotiche.",
        "url": "https://www.treccani.it/enciclopedia/caos_(Enciclopedia-del-Novecento)/"
    },
    {
        "id": 770,
        "keywords": [
            "mappa logistica",
            "popolazione discreta",
            "modello feigenbaum",
            "quesito 770"
        ],
        "answer": "Secondo la descrizione del capitolo, la mappa logistica è un modello popolazionale discreto che mostra il raddoppio del periodo.",
        "url": "https://www.treccani.it/enciclopedia/caos_(Enciclopedia-del-Novecento)/"
    },
    {
        "id": 771,
        "keywords": [
            "diagramma di biforcazione",
            "soglia 1.16 kohm",
            "chua diagramma",
            "quesito 771"
        ],
        "answer": "Nel circuito di Chua la transizione da punto fisso a ciclo limite avviene per R = 1,16 kΩ.",
        "url": "https://www.treccani.it/enciclopedia/caos_(Enciclopedia-del-Novecento)/"
    },
    {
        "id": 772,
        "keywords": [
            "frattali",
            "etimologia fractus",
            "geometria non euclidea",
            "quesito 772"
        ],
        "answer": "In relazione alla teoria del caos, il termine frattale fu coniato da Mandelbrot nel 1975 dal latino fractus per definire forme discontinue.",
        "url": "https://www.treccani.it/enciclopedia/caos_(Enciclopedia-del-Novecento)/"
    },
    {
        "id": 773,
        "keywords": [
            "fiocco di neve di koch",
            "costruzione iterativa",
            "perimetro infinito",
            "quesito 773"
        ],
        "answer": "Nell'ambito della dinamica dei sistemi complessi, il fiocco di neve di Koch è un frattale con perimetro di lunghezza infinita in una superficie finita.",
        "url": "https://www.treccani.it/enciclopedia/caos_(Enciclopedia-del-Novecento)/"
    },
    {
        "id": 774,
        "keywords": [
            "triangolo di sierpinski",
            "ricorsione",
            "dimensione frattale",
            "quesito 774"
        ],
        "answer": "Dal punto di vista dell'analisi matematica, il triangolo di Sierpinski è una figura frattale ottenuta rimuovendo i sotto-triangoli centrali.",
        "url": "https://www.treccani.it/enciclopedia/caos_(Enciclopedia-del-Novecento)/"
    },
    {
        "id": 775,
        "keywords": [
            "benoit mandelbrot",
            "geometria della natura",
            "inadeguatezza euclidea",
            "quesito 775"
        ],
        "answer": "Secondo la descrizione del capitolo, mandelbrot dimostrò che la geometria euclidea non è adatta a descrivere nuvole, montagne e coste.",
        "url": "https://www.treccani.it/enciclopedia/caos_(Enciclopedia-del-Novecento)/"
    },
    {
        "id": 776,
        "keywords": [
            "invarianza di scala",
            "auto-similarita",
            "struttura ricorsiva",
            "quesito 776"
        ],
        "answer": "L'auto-similarità implica che ingrandendo un dettaglio di un frattale si ritrova la figura intera.",
        "url": "https://www.treccani.it/enciclopedia/caos_(Enciclopedia-del-Novecento)/"
    },
    {
        "id": 777,
        "keywords": [
            "cavolfiore frattale",
            "montagna",
            "scogliera",
            "quesito 777"
        ],
        "answer": "In relazione alla teoria del caos, esempi naturali di frattali sono i cavolfiori, i profili montuosi e la struttura delle scogliere.",
        "url": "https://www.treccani.it/enciclopedia/caos_(Enciclopedia-del-Novecento)/"
    },
    {
        "id": 778,
        "keywords": [
            "econofisica",
            "borsa valori",
            "serie temporali",
            "quesito 778"
        ],
        "answer": "Nell'ambito della dinamica dei sistemi complessi, l'econofisica studia le serie temporali dei mercati finanziari sfruttando concetti frattali e caotici.",
        "url": "https://www.treccani.it/enciclopedia/caos_(Enciclopedia-del-Novecento)/"
    },
    {
        "id": 779,
        "keywords": [
            "digital art",
            "arte elettronica",
            "estetica del caos",
            "quesito 779"
        ],
        "answer": "Dal punto di vista dell'analisi matematica, la bellezza degli attrattori e dei frattali ha ispirato nuove correnti artistiche di Digital Art.",
        "url": "https://www.treccani.it/enciclopedia/caos_(Enciclopedia-del-Novecento)/"
    },
    {
        "id": 780,
        "keywords": [
            "ubiquita del caos",
            "paradigma scientifico",
            "transdisciplinarita",
            "quesito 780"
        ],
        "answer": "Secondo la descrizione del capitolo, l'ubiquità del caos descrive la presenza universale di comportamenti imprevedibili nella natura.",
        "url": "https://www.treccani.it/enciclopedia/caos_(Enciclopedia-del-Novecento)/"
    },
    {
        "id": 781,
        "keywords": [
            "meccanicismo",
            "orologio perfetto",
            "newton",
            "quesito 781"
        ],
        "answer": "Da Newton in poi, la visione dominante rappresentava il mondo come un meccanismo perfetto, analogo a un orologio di precisione.",
        "url": "https://www.treccani.it/enciclopedia/meccanicismo_(Enciclopedia-Italiana)/"
    },
    {
        "id": 782,
        "keywords": [
            "meccanica sperimentale",
            "fine XVII secolo",
            "isaac newton",
            "quesito 782"
        ],
        "answer": "In relazione alla teoria del caos, la meccanica come scienza sperimentale è nata alla fine del XVII secolo con Isaac Newton.",
        "url": "https://www.treccani.it/enciclopedia/meccanicismo_(Enciclopedia-Italiana)/"
    },
    {
        "id": 783,
        "keywords": [
            "eulero",
            "lagrange",
            "laplace",
            "quesito 783"
        ],
        "answer": "Nell'ambito della dinamica dei sistemi complessi, nel XVIII secolo la meccanica classica fu perfezionata dai lavori di Eulero, Lagrange e Laplace.",
        "url": "https://www.treccani.it/enciclopedia/meccanicismo_(Enciclopedia-Italiana)/"
    },
    {
        "id": 784,
        "keywords": [
            "calcolo differenziale",
            "calcolo integrale",
            "leibniz",
            "quesito 784"
        ],
        "answer": "Dal punto di vista dell'analisi matematica, il calcolo differenziale e integrale fu sviluppato contemporaneamente da Newton e Leibniz.",
        "url": "https://www.treccani.it/enciclopedia/meccanicismo_(Enciclopedia-Italiana)/"
    },
    {
        "id": 785,
        "keywords": [
            "meccanica celeste",
            "leggi di newton",
            "evidenze sperimentali",
            "quesito 785"
        ],
        "answer": "Secondo la descrizione del capitolo, la meccanica celeste fornì un quadro teorico unificante supportato da evidenze sperimentali.",
        "url": "https://www.treccani.it/enciclopedia/meccanicismo_(Enciclopedia-Italiana)/"
    },
    {
        "id": 786,
        "keywords": [
            "determinismo causale",
            "causalita",
            "catena di eventi",
            "quesito 786"
        ],
        "answer": "Il determinismo causale stabilisce che ogni evento accada all'interno di una catena causale.",
        "url": "https://www.treccani.it/enciclopedia/meccanicismo_(Enciclopedia-Italiana)/"
    },
    {
        "id": 787,
        "keywords": [
            "configurazioni iniziali",
            "previsione teorica",
            "stato futuro",
            "quesito 787"
        ],
        "answer": "In relazione alla teoria del caos, conoscendo cause e configurazioni iniziali, il determinismo teorizza la previsione degli eventi futuri.",
        "url": "https://www.treccani.it/enciclopedia/meccanicismo_(Enciclopedia-Italiana)/"
    },
    {
        "id": 788,
        "keywords": [
            "laplace",
            "demone di laplace",
            "determinismo assoluto",
            "quesito 788"
        ],
        "answer": "Nell'ambito della dinamica dei sistemi complessi, laplace concepiva il determinismo come la capacità di calcolare con precisione lo stato futuro conoscendo lo stato attuale.",
        "url": "https://www.treccani.it/enciclopedia/meccanicismo_(Enciclopedia-Italiana)/"
    },
    {
        "id": 789,
        "keywords": [
            "darwin",
            "evoluzione",
            "XIX secolo",
            "quesito 789"
        ],
        "answer": "Dal punto di vista dell'analisi matematica, nel XIX secolo gli studi di Darwin sull'evoluzione misero in discussione il riduzionismo meccanicista.",
        "url": "https://www.treccani.it/enciclopedia/entropia_(Enciclopedia-della-Scienza-e-della-Tecnica)/"
    },
    {
        "id": 790,
        "keywords": [
            "termodinamica",
            "entropia",
            "irreversibilita",
            "quesito 790"
        ],
        "answer": "Secondo la descrizione del capitolo, l'introduzione dell'entropia e dell'irreversibilità evidenziò i limiti della spiegazione meccanicista.",
        "url": "https://www.treccani.it/enciclopedia/entropia_(Enciclopedia-della-Scienza-e-della-Tecnica)/"
    },
    {
        "id": 791,
        "keywords": [
            "trasformazioni di energia",
            "fenomeni biologici",
            "limiti newtoniani",
            "quesito 791"
        ],
        "answer": "La termodinamica dimostrò che la meccanica classica era deficitaria nei fenomeni legati alla vita.",
        "url": "https://www.treccani.it/enciclopedia/entropia_(Enciclopedia-della-Scienza-e-della-Tecnica)/"
    },
    {
        "id": 792,
        "keywords": [
            "meccanica quantistica",
            "infinitamente piccolo",
            "XX secolo",
            "quesito 792"
        ],
        "answer": "In relazione alla teoria del caos, la meccanica quantistica è una teoria del XX secolo rivolta allo studio dell'infinitamente piccolo.",
        "url": "https://www.treccani.it/enciclopedia/entropia_(Enciclopedia-della-Scienza-e-della-Tecnica)/"
    },
    {
        "id": 793,
        "keywords": [
            "relativita generale",
            "infinitamente grande",
            "einstein",
            "quesito 793"
        ],
        "answer": "Nell'ambito della dinamica dei sistemi complessi, la relatività generale descrive la gravità e i fenomeni dell'infinitamente grande.",
        "url": "https://www.treccani.it/enciclopedia/entropia_(Enciclopedia-della-Scienza-e-della-Tecnica)/"
    },
    {
        "id": 794,
        "keywords": [
            "validita newtoniana",
            "fenomeni osservabili",
            "scala macroscopica",
            "quesito 794"
        ],
        "answer": "Dal punto di vista dell'analisi matematica, fino agli anni '60 la meccanica newtoniana rimase un'ottima descrizione dei fenomeni osservabili.",
        "url": "https://www.treccani.it/enciclopedia/entropia_(Enciclopedia-della-Scienza-e-della-Tecnica)/"
    },
    {
        "id": 795,
        "keywords": [
            "caos grecia",
            "significato antico",
            "disordine",
            "quesito 795"
        ],
        "answer": "Secondo la descrizione del capitolo, in antica Grecia il termine caos indicava disordine, confusione, scompiglio e agitazione.",
        "url": "https://www.treccani.it/enciclopedia/caos_(Enciclopedia-del-Novecento)/"
    },
    {
        "id": 796,
        "keywords": [
            "cosmos",
            "ordine",
            "antitesi caos",
            "quesito 796"
        ],
        "answer": "Il termine greco cosmos significa ordine ed era usato in antitesi al termine caos.",
        "url": "https://www.treccani.it/enciclopedia/caos_(Enciclopedia-del-Novecento)/"
    },
    {
        "id": 797,
        "keywords": [
            "limite cognitivo",
            "comprensione",
            "orizzonte oscuro",
            "quesito 797"
        ],
        "answer": "In relazione alla teoria del caos, in termini cognitivi il caos identifica un'incapacità generale di comprensione e un limite visivo.",
        "url": "https://www.treccani.it/enciclopedia/caos_(Enciclopedia-del-Novecento)/"
    },
    {
        "id": 798,
        "keywords": [
            "capovolgimento semantico",
            "scienza contemporanea",
            "caos deterministico",
            "quesito 798"
        ],
        "answer": "Nell'ambito della dinamica dei sistemi complessi, la scienza contemporanea ha ribaltato la semantica del caos riferendolo a dinamiche deterministiche non analitiche.",
        "url": "https://www.treccani.it/enciclopedia/caos_(Enciclopedia-del-Novecento)/"
    },
    {
        "id": 799,
        "keywords": [
            "settori del caos",
            "fenomeni sociali",
            "economia",
            "quesito 799"
        ],
        "answer": "Dal punto di vista dell'analisi matematica, la teoria del caos analizza fenomeni imprevedibili in ambito fisico, economico, sociale e comportamentale.",
        "url": "https://www.treccani.it/enciclopedia/caos_(Enciclopedia-del-Novecento)/"
    },
    {
        "id": 800,
        "keywords": [
            "edward lorenz",
            "mit cambridge",
            "meteorologia",
            "quesito 800"
        ],
        "answer": "Secondo la descrizione del capitolo, edward H. Lorenz era un meteorologo del MIT di Cambridge che sviluppò modelli matematici per il meteo.",
        "url": "https://www.treccani.it/enciclopedia/attrattore-di-lorenz_(Enciclopedia-della-Matematica)/"
    },
    {
        "id": 801,
        "keywords": [
            "equazioni differenziali",
            "tre equazioni",
            "non linearita",
            "quesito 801"
        ],
        "answer": "Il modello atmosferico di Lorenz era basato su tre equazioni differenziali ordinarie non lineari.",
        "url": "https://www.treccani.it/enciclopedia/attrattore-di-lorenz_(Enciclopedia-della-Matematica)/"
    },
    {
        "id": 802,
        "keywords": [
            "integrazione numerica",
            "computer lorenz",
            "anni 60",
            "quesito 802"
        ],
        "answer": "In relazione alla teoria del caos, lorenz utilizzò il computer per integrare numericamente equazioni non lineari prive di soluzione analitica.",
        "url": "https://www.treccani.it/enciclopedia/attrattore-di-lorenz_(Enciclopedia-della-Matematica)/"
    },
    {
        "id": 803,
        "keywords": [
            "analisi numerica",
            "processi iterativi",
            "algoritmi",
            "quesito 803"
        ],
        "answer": "Nell'ambito della dinamica dei sistemi complessi, l'analisi numerica sviluppa algoritmi e metodi iterativi per approssimare problemi matematici complessi.",
        "url": "https://www.treccani.it/enciclopedia/attrattore-di-lorenz_(Enciclopedia-della-Matematica)/"
    },
    {
        "id": 804,
        "keywords": [
            "arrotondamento decimali",
            "da 6 a 3 cifre",
            "scarto minimo",
            "quesito 804"
        ],
        "answer": "Dal punto di vista dell'analisi matematica, replicando una simulazione, Lorenz approssimò i dati da sei a tre cifre decimali alterando i risultati.",
        "url": "https://www.treccani.it/enciclopedia/attrattore-di-lorenz_(Enciclopedia-della-Matematica)/"
    },
    {
        "id": 805,
        "keywords": [
            "risultati divergenti",
            "esplosione dell'errore",
            "ordini di grandezza",
            "quesito 805"
        ],
        "answer": "Secondo la descrizione del capitolo, l'approssimazione decimale generò previsioni divergenti per vari ordini di grandezza.",
        "url": "https://www.treccani.it/enciclopedia/attrattore-di-lorenz_(Enciclopedia-della-Matematica)/"
    },
    {
        "id": 806,
        "keywords": [
            "riduzionismo newtoniano",
            "scala di grandezza",
            "dettagli trascurabili",
            "quesito 806"
        ],
        "answer": "Il riduzionismo newtoniano assume che i fenomeni su scala inferiore abbiano effetti trascurabili.",
        "url": "https://www.treccani.it/enciclopedia/attrattore-di-lorenz_(Enciclopedia-della-Matematica)/"
    },
    {
        "id": 807,
        "keywords": [
            "margine d'errore",
            "errore sperimentale",
            "propagazione",
            "quesito 807"
        ],
        "answer": "In relazione alla teoria del caos, nel modello newtoniano l'errore è controllabile, mentre nei sistemi caotici si propaga esplosivamente.",
        "url": "https://www.treccani.it/enciclopedia/attrattore-di-lorenz_(Enciclopedia-della-Matematica)/"
    },
    {
        "id": 808,
        "keywords": [
            "dipendenza sensibile",
            "condizioni iniziali",
            "limite previsioni",
            "quesito 808"
        ],
        "answer": "Nell'ambito della dinamica dei sistemi complessi, la dipendenza sensibile dalle condizioni iniziali rende impossibile la previsione a lungo termine.",
        "url": "https://www.treccani.it/enciclopedia/attrattore-di-lorenz_(Enciclopedia-della-Matematica)/"
    },
    {
        "id": 809,
        "keywords": [
            "effetto farfalla",
            "metafora brasiliana",
            "tifone florida",
            "quesito 809"
        ],
        "answer": "Dal punto di vista dell'analisi matematica, l'effetto farfalla esprime l'idea che il battito d'ali di una farfalla in Brasile produca un tifone in Florida.",
        "url": "https://www.treccani.it/enciclopedia/attrattore-di-lorenz_(Enciclopedia-della-Matematica)/"
    },
    {
        "id": 810,
        "keywords": [
            "conferenza aaas 1979",
            "uragano texas",
            "relazione lorenz",
            "quesito 810"
        ],
        "answer": "Secondo la descrizione del capitolo, nel 1979 alla conferenza AAAS gli allievi di Lorenz diffusero la metafora dell'uragano nel Texas.",
        "url": "https://www.treccani.it/enciclopedia/attrattore-di-lorenz_(Enciclopedia-della-Matematica)/"
    },
    {
        "id": 811,
        "keywords": [
            "cinema e cultura",
            "jurassic park",
            "sliding doors",
            "quesito 811"
        ],
        "answer": "L'effetto farfalla è citato in film celebri tra cui Jurassic Park, Sliding Doors e The Oxford Murders.",
        "url": "https://www.treccani.it/enciclopedia/attrattore-di-lorenz_(Enciclopedia-della-Matematica)/"
    },
    {
        "id": 812,
        "keywords": [
            "sistema dinamico",
            "variabili nel tempo",
            "spazio astratto",
            "quesito 812"
        ],
        "answer": "In relazione alla teoria del caos, un sistema dinamico è rappresentato da una serie di grandezze che variano nel tempo.",
        "url": "https://www.liceopalmieri.edu.it/LaboratorioStem/Attrattori/"
    },
    {
        "id": 813,
        "keywords": [
            "spazio delle fasi",
            "dimensioni",
            "traiettoria",
            "quesito 813"
        ],
        "answer": "Nell'ambito della dinamica dei sistemi complessi, lo spazio delle fasi ha una dimensione pari al numero di variabili libere del sistema dinamico.",
        "url": "https://www.liceopalmieri.edu.it/LaboratorioStem/Attrattori/"
    },
    {
        "id": 814,
        "keywords": [
            "piano delle fasi",
            "pendolo semplice",
            "due dimensioni",
            "quesito 814"
        ],
        "answer": "Dal punto di vista dell'analisi matematica, il pendolo semplice è descritto in un piano delle fasi bidimensionale (angolo e velocità).",
        "url": "https://www.liceopalmieri.edu.it/LaboratorioStem/Attrattori/"
    },
    {
        "id": 815,
        "keywords": [
            "doppio pendolo",
            "quattro dimensioni",
            "iperspazio",
            "quesito 815"
        ],
        "answer": "Secondo la descrizione del capitolo, il doppio pendolo necessita di uno spazio delle fasi a quattro dimensioni per rappresentare le sue orbite.",
        "url": "https://www.liceopalmieri.edu.it/LaboratorioStem/Attrattori/"
    },
    {
        "id": 816,
        "keywords": [
            "punto fisso",
            "attrattore punto",
            "attrito",
            "quesito 816"
        ],
        "answer": "Il punto fisso è un attrattore che stabilizza il sistema dinamico in uno stato di equilibrio stazionario.",
        "url": "https://www.liceopalmieri.edu.it/LaboratorioStem/Attrattori/"
    },
    {
        "id": 817,
        "keywords": [
            "ciclo limite",
            "circuito van der pol",
            "oscillatore",
            "quesito 817"
        ],
        "answer": "In relazione alla teoria del caos, un ciclo limite è un attrattore rappresentato da una curva chiusa percorsa in modo periodico.",
        "url": "https://www.liceopalmieri.edu.it/LaboratorioStem/Attrattori/"
    },
    {
        "id": 818,
        "keywords": [
            "attrattore strano",
            "definizione",
            "volume finito",
            "quesito 818"
        ],
        "answer": "Nell'ambito della dinamica dei sistemi complessi, l'attrattore strano è una regione finita dello spazio delle fasi in cui le traiettorie non si intersecano mai.",
        "url": "https://www.liceopalmieri.edu.it/LaboratorioStem/Attrattori/"
    },
    {
        "id": 819,
        "keywords": [
            "farfalla di lorenz",
            "ali sfasate",
            "corpo centrale",
            "quesito 819"
        ],
        "answer": "Dal punto di vista dell'analisi matematica, l'attrattore di Lorenz ha la forma caratteristica di una farfalla con due ali disposte su piani sfasati.",
        "url": "https://www.liceopalmieri.edu.it/LaboratorioStem/Attrattori/"
    },
    {
        "id": 820,
        "keywords": [
            "discretizzazione",
            "rappresentazione a punti",
            "passo temporale",
            "quesito 820"
        ],
        "answer": "Secondo la descrizione del capitolo, in simulazione informatica l'attrattore appare come una sequenza discreta di punti nel tempo.",
        "url": "https://www.liceopalmieri.edu.it/LaboratorioStem/Attrattori/"
    },
    {
        "id": 821,
        "keywords": [
            "attrattore toro",
            "quasi periodicita",
            "struttura toroidale",
            "quesito 821"
        ],
        "answer": "L'attrattore a toro descrive un comportamento quasi periodico con complessità intermedia tra ciclo e caos.",
        "url": "https://www.liceopalmieri.edu.it/LaboratorioStem/Attrattori/"
    },
    {
        "id": 822,
        "keywords": [
            "circuito di chua",
            "componenti passivi",
            "diodo non lineare",
            "quesito 822"
        ],
        "answer": "In relazione alla teoria del caos, il circuito di Chua è un circuito elettronico composto da resistenze, capacità, induttanza e un diodo non lineare.",
        "url": "https://www.treccani.it/enciclopedia/caos_(Enciclopedia-del-Novecento)/"
    },
    {
        "id": 823,
        "keywords": [
            "doppio scroll",
            "double scroll",
            "chua attrattore",
            "quesito 823"
        ],
        "answer": "Nell'ambito della dinamica dei sistemi complessi, il Doppio Scroll è l'attrattore strano più celebre prodotto dal circuito elettronico di Chua.",
        "url": "https://www.treccani.it/enciclopedia/caos_(Enciclopedia-del-Novecento)/"
    },
    {
        "id": 824,
        "keywords": [
            "spirale di chua",
            "resistenza parametro",
            "transizione",
            "quesito 824"
        ],
        "answer": "Dal punto di vista dell'analisi matematica, aumentando la resistenza nel circuito di Chua, l'attrattore passa dal doppio scroll alla spirale.",
        "url": "https://www.treccani.it/enciclopedia/caos_(Enciclopedia-del-Novecento)/"
    },
    {
        "id": 825,
        "keywords": [
            "strada verso il caos",
            "percorso sequenziale",
            "ordine caos",
            "quesito 825"
        ],
        "answer": "Secondo la descrizione del capitolo, la strada verso il caos descrive la transizione dall'ordine stazionario al caos deterministico.",
        "url": "https://www.treccani.it/enciclopedia/caos_(Enciclopedia-del-Novecento)/"
    },
    {
        "id": 826,
        "keywords": [
            "saturazione",
            "orizzonte fisico",
            "massimo energetico",
            "quesito 826"
        ],
        "answer": "La saturazione rappresenta il massimo livello di energia del sistema e si manifesta come ciclo limite.",
        "url": "https://www.treccani.it/enciclopedia/caos_(Enciclopedia-del-Novecento)/"
    },
    {
        "id": 827,
        "keywords": [
            "biforcazione",
            "parametro di controllo",
            "cambiamento qualitativo",
            "quesito 827"
        ],
        "answer": "In relazione alla teoria del caos, una biforcazione si verifica quando il comportamento del sistema cambia radicalmente al variare del parametro.",
        "url": "https://www.treccani.it/enciclopedia/caos_(Enciclopedia-del-Novecento)/"
    },
    {
        "id": 828,
        "keywords": [
            "biforcazione di hopf",
            "raddoppio del periodo",
            "cascata",
            "quesito 828"
        ],
        "answer": "Nell'ambito della dinamica dei sistemi complessi, la biforcazione di Hopf comporta il raddoppio del periodo delle oscillazioni lungo una cascata infinita.",
        "url": "https://www.treccani.it/enciclopedia/caos_(Enciclopedia-del-Novecento)/"
    },
    {
        "id": 829,
        "keywords": [
            "costante di feigenbaum",
            "mitchell feigenbaum",
            "1975",
            "quesito 829"
        ],
        "answer": "Dal punto di vista dell'analisi matematica, la costante di Feigenbaum (4.6692) descrive la convergenza universale delle biforcazioni caotiche.",
        "url": "https://www.treccani.it/enciclopedia/caos_(Enciclopedia-del-Novecento)/"
    },
    {
        "id": 830,
        "keywords": [
            "mappa logistica",
            "popolazione discreta",
            "modello feigenbaum",
            "quesito 830"
        ],
        "answer": "Secondo la descrizione del capitolo, la mappa logistica è un modello popolazionale discreto che mostra il raddoppio del periodo.",
        "url": "https://www.treccani.it/enciclopedia/caos_(Enciclopedia-del-Novecento)/"
    },
    {
        "id": 831,
        "keywords": [
            "diagramma di biforcazione",
            "soglia 1.16 kohm",
            "chua diagramma",
            "quesito 831"
        ],
        "answer": "Nel circuito di Chua la transizione da punto fisso a ciclo limite avviene per R = 1,16 kΩ.",
        "url": "https://www.treccani.it/enciclopedia/caos_(Enciclopedia-del-Novecento)/"
    },
    {
        "id": 832,
        "keywords": [
            "frattali",
            "etimologia fractus",
            "geometria non euclidea",
            "quesito 832"
        ],
        "answer": "In relazione alla teoria del caos, il termine frattale fu coniato da Mandelbrot nel 1975 dal latino fractus per definire forme discontinue.",
        "url": "https://www.treccani.it/enciclopedia/caos_(Enciclopedia-del-Novecento)/"
    },
    {
        "id": 833,
        "keywords": [
            "fiocco di neve di koch",
            "costruzione iterativa",
            "perimetro infinito",
            "quesito 833"
        ],
        "answer": "Nell'ambito della dinamica dei sistemi complessi, il fiocco di neve di Koch è un frattale con perimetro di lunghezza infinita in una superficie finita.",
        "url": "https://www.treccani.it/enciclopedia/caos_(Enciclopedia-del-Novecento)/"
    },
    {
        "id": 834,
        "keywords": [
            "triangolo di sierpinski",
            "ricorsione",
            "dimensione frattale",
            "quesito 834"
        ],
        "answer": "Dal punto di vista dell'analisi matematica, il triangolo di Sierpinski è una figura frattale ottenuta rimuovendo i sotto-triangoli centrali.",
        "url": "https://www.treccani.it/enciclopedia/caos_(Enciclopedia-del-Novecento)/"
    },
    {
        "id": 835,
        "keywords": [
            "benoit mandelbrot",
            "geometria della natura",
            "inadeguatezza euclidea",
            "quesito 835"
        ],
        "answer": "Secondo la descrizione del capitolo, mandelbrot dimostrò che la geometria euclidea non è adatta a descrivere nuvole, montagne e coste.",
        "url": "https://www.treccani.it/enciclopedia/caos_(Enciclopedia-del-Novecento)/"
    },
    {
        "id": 836,
        "keywords": [
            "invarianza di scala",
            "auto-similarita",
            "struttura ricorsiva",
            "quesito 836"
        ],
        "answer": "L'auto-similarità implica che ingrandendo un dettaglio di un frattale si ritrova la figura intera.",
        "url": "https://www.treccani.it/enciclopedia/caos_(Enciclopedia-del-Novecento)/"
    },
    {
        "id": 837,
        "keywords": [
            "cavolfiore frattale",
            "montagna",
            "scogliera",
            "quesito 837"
        ],
        "answer": "In relazione alla teoria del caos, esempi naturali di frattali sono i cavolfiori, i profili montuosi e la struttura delle scogliere.",
        "url": "https://www.treccani.it/enciclopedia/caos_(Enciclopedia-del-Novecento)/"
    },
    {
        "id": 838,
        "keywords": [
            "econofisica",
            "borsa valori",
            "serie temporali",
            "quesito 838"
        ],
        "answer": "Nell'ambito della dinamica dei sistemi complessi, l'econofisica studia le serie temporali dei mercati finanziari sfruttando concetti frattali e caotici.",
        "url": "https://www.treccani.it/enciclopedia/caos_(Enciclopedia-del-Novecento)/"
    },
    {
        "id": 839,
        "keywords": [
            "digital art",
            "arte elettronica",
            "estetica del caos",
            "quesito 839"
        ],
        "answer": "Dal punto di vista dell'analisi matematica, la bellezza degli attrattori e dei frattali ha ispirato nuove correnti artistiche di Digital Art.",
        "url": "https://www.treccani.it/enciclopedia/caos_(Enciclopedia-del-Novecento)/"
    },
    {
        "id": 840,
        "keywords": [
            "ubiquita del caos",
            "paradigma scientifico",
            "transdisciplinarita",
            "quesito 840"
        ],
        "answer": "Secondo la descrizione del capitolo, l'ubiquità del caos descrive la presenza universale di comportamenti imprevedibili nella natura.",
        "url": "https://www.treccani.it/enciclopedia/caos_(Enciclopedia-del-Novecento)/"
    },
    {
        "id": 841,
        "keywords": [
            "meccanicismo",
            "orologio perfetto",
            "newton",
            "quesito 841"
        ],
        "answer": "Da Newton in poi, la visione dominante rappresentava il mondo come un meccanismo perfetto, analogo a un orologio di precisione.",
        "url": "https://www.treccani.it/enciclopedia/meccanicismo_(Enciclopedia-Italiana)/"
    },
    {
        "id": 842,
        "keywords": [
            "meccanica sperimentale",
            "fine XVII secolo",
            "isaac newton",
            "quesito 842"
        ],
        "answer": "In relazione alla teoria del caos, la meccanica come scienza sperimentale è nata alla fine del XVII secolo con Isaac Newton.",
        "url": "https://www.treccani.it/enciclopedia/meccanicismo_(Enciclopedia-Italiana)/"
    },
    {
        "id": 843,
        "keywords": [
            "eulero",
            "lagrange",
            "laplace",
            "quesito 843"
        ],
        "answer": "Nell'ambito della dinamica dei sistemi complessi, nel XVIII secolo la meccanica classica fu perfezionata dai lavori di Eulero, Lagrange e Laplace.",
        "url": "https://www.treccani.it/enciclopedia/meccanicismo_(Enciclopedia-Italiana)/"
    },
    {
        "id": 844,
        "keywords": [
            "calcolo differenziale",
            "calcolo integrale",
            "leibniz",
            "quesito 844"
        ],
        "answer": "Dal punto di vista dell'analisi matematica, il calcolo differenziale e integrale fu sviluppato contemporaneamente da Newton e Leibniz.",
        "url": "https://www.treccani.it/enciclopedia/meccanicismo_(Enciclopedia-Italiana)/"
    },
    {
        "id": 845,
        "keywords": [
            "meccanica celeste",
            "leggi di newton",
            "evidenze sperimentali",
            "quesito 845"
        ],
        "answer": "Secondo la descrizione del capitolo, la meccanica celeste fornì un quadro teorico unificante supportato da evidenze sperimentali.",
        "url": "https://www.treccani.it/enciclopedia/meccanicismo_(Enciclopedia-Italiana)/"
    },
    {
        "id": 846,
        "keywords": [
            "determinismo causale",
            "causalita",
            "catena di eventi",
            "quesito 846"
        ],
        "answer": "Il determinismo causale stabilisce che ogni evento accada all'interno di una catena causale.",
        "url": "https://www.treccani.it/enciclopedia/meccanicismo_(Enciclopedia-Italiana)/"
    },
    {
        "id": 847,
        "keywords": [
            "configurazioni iniziali",
            "previsione teorica",
            "stato futuro",
            "quesito 847"
        ],
        "answer": "In relazione alla teoria del caos, conoscendo cause e configurazioni iniziali, il determinismo teorizza la previsione degli eventi futuri.",
        "url": "https://www.treccani.it/enciclopedia/meccanicismo_(Enciclopedia-Italiana)/"
    },
    {
        "id": 848,
        "keywords": [
            "laplace",
            "demone di laplace",
            "determinismo assoluto",
            "quesito 848"
        ],
        "answer": "Nell'ambito della dinamica dei sistemi complessi, laplace concepiva il determinismo come la capacità di calcolare con precisione lo stato futuro conoscendo lo stato attuale.",
        "url": "https://www.treccani.it/enciclopedia/meccanicismo_(Enciclopedia-Italiana)/"
    },
    {
        "id": 849,
        "keywords": [
            "darwin",
            "evoluzione",
            "XIX secolo",
            "quesito 849"
        ],
        "answer": "Dal punto di vista dell'analisi matematica, nel XIX secolo gli studi di Darwin sull'evoluzione misero in discussione il riduzionismo meccanicista.",
        "url": "https://www.treccani.it/enciclopedia/entropia_(Enciclopedia-della-Scienza-e-della-Tecnica)/"
    },
    {
        "id": 850,
        "keywords": [
            "termodinamica",
            "entropia",
            "irreversibilita",
            "quesito 850"
        ],
        "answer": "Secondo la descrizione del capitolo, l'introduzione dell'entropia e dell'irreversibilità evidenziò i limiti della spiegazione meccanicista.",
        "url": "https://www.treccani.it/enciclopedia/entropia_(Enciclopedia-della-Scienza-e-della-Tecnica)/"
    },
    {
        "id": 851,
        "keywords": [
            "trasformazioni di energia",
            "fenomeni biologici",
            "limiti newtoniani",
            "quesito 851"
        ],
        "answer": "La termodinamica dimostrò che la meccanica classica era deficitaria nei fenomeni legati alla vita.",
        "url": "https://www.treccani.it/enciclopedia/entropia_(Enciclopedia-della-Scienza-e-della-Tecnica)/"
    },
    {
        "id": 852,
        "keywords": [
            "meccanica quantistica",
            "infinitamente piccolo",
            "XX secolo",
            "quesito 852"
        ],
        "answer": "In relazione alla teoria del caos, la meccanica quantistica è una teoria del XX secolo rivolta allo studio dell'infinitamente piccolo.",
        "url": "https://www.treccani.it/enciclopedia/entropia_(Enciclopedia-della-Scienza-e-della-Tecnica)/"
    },
    {
        "id": 853,
        "keywords": [
            "relativita generale",
            "infinitamente grande",
            "einstein",
            "quesito 853"
        ],
        "answer": "Nell'ambito della dinamica dei sistemi complessi, la relatività generale descrive la gravità e i fenomeni dell'infinitamente grande.",
        "url": "https://www.treccani.it/enciclopedia/entropia_(Enciclopedia-della-Scienza-e-della-Tecnica)/"
    },
    {
        "id": 854,
        "keywords": [
            "validita newtoniana",
            "fenomeni osservabili",
            "scala macroscopica",
            "quesito 854"
        ],
        "answer": "Dal punto di vista dell'analisi matematica, fino agli anni '60 la meccanica newtoniana rimase un'ottima descrizione dei fenomeni osservabili.",
        "url": "https://www.treccani.it/enciclopedia/entropia_(Enciclopedia-della-Scienza-e-della-Tecnica)/"
    },
    {
        "id": 855,
        "keywords": [
            "caos grecia",
            "significato antico",
            "disordine",
            "quesito 855"
        ],
        "answer": "Secondo la descrizione del capitolo, in antica Grecia il termine caos indicava disordine, confusione, scompiglio e agitazione.",
        "url": "https://www.treccani.it/enciclopedia/caos_(Enciclopedia-del-Novecento)/"
    },
    {
        "id": 856,
        "keywords": [
            "cosmos",
            "ordine",
            "antitesi caos",
            "quesito 856"
        ],
        "answer": "Il termine greco cosmos significa ordine ed era usato in antitesi al termine caos.",
        "url": "https://www.treccani.it/enciclopedia/caos_(Enciclopedia-del-Novecento)/"
    },
    {
        "id": 857,
        "keywords": [
            "limite cognitivo",
            "comprensione",
            "orizzonte oscuro",
            "quesito 857"
        ],
        "answer": "In relazione alla teoria del caos, in termini cognitivi il caos identifica un'incapacità generale di comprensione e un limite visivo.",
        "url": "https://www.treccani.it/enciclopedia/caos_(Enciclopedia-del-Novecento)/"
    },
    {
        "id": 858,
        "keywords": [
            "capovolgimento semantico",
            "scienza contemporanea",
            "caos deterministico",
            "quesito 858"
        ],
        "answer": "Nell'ambito della dinamica dei sistemi complessi, la scienza contemporanea ha ribaltato la semantica del caos riferendolo a dinamiche deterministiche non analitiche.",
        "url": "https://www.treccani.it/enciclopedia/caos_(Enciclopedia-del-Novecento)/"
    },
    {
        "id": 859,
        "keywords": [
            "settori del caos",
            "fenomeni sociali",
            "economia",
            "quesito 859"
        ],
        "answer": "Dal punto di vista dell'analisi matematica, la teoria del caos analizza fenomeni imprevedibili in ambito fisico, economico, sociale e comportamentale.",
        "url": "https://www.treccani.it/enciclopedia/caos_(Enciclopedia-del-Novecento)/"
    },
    {
        "id": 860,
        "keywords": [
            "edward lorenz",
            "mit cambridge",
            "meteorologia",
            "quesito 860"
        ],
        "answer": "Secondo la descrizione del capitolo, edward H. Lorenz era un meteorologo del MIT di Cambridge che sviluppò modelli matematici per il meteo.",
        "url": "https://www.treccani.it/enciclopedia/attrattore-di-lorenz_(Enciclopedia-della-Matematica)/"
    },
    {
        "id": 861,
        "keywords": [
            "equazioni differenziali",
            "tre equazioni",
            "non linearita",
            "quesito 861"
        ],
        "answer": "Il modello atmosferico di Lorenz era basato su tre equazioni differenziali ordinarie non lineari.",
        "url": "https://www.treccani.it/enciclopedia/attrattore-di-lorenz_(Enciclopedia-della-Matematica)/"
    },
    {
        "id": 862,
        "keywords": [
            "integrazione numerica",
            "computer lorenz",
            "anni 60",
            "quesito 862"
        ],
        "answer": "In relazione alla teoria del caos, lorenz utilizzò il computer per integrare numericamente equazioni non lineari prive di soluzione analitica.",
        "url": "https://www.treccani.it/enciclopedia/attrattore-di-lorenz_(Enciclopedia-della-Matematica)/"
    },
    {
        "id": 863,
        "keywords": [
            "analisi numerica",
            "processi iterativi",
            "algoritmi",
            "quesito 863"
        ],
        "answer": "Nell'ambito della dinamica dei sistemi complessi, l'analisi numerica sviluppa algoritmi e metodi iterativi per approssimare problemi matematici complessi.",
        "url": "https://www.treccani.it/enciclopedia/attrattore-di-lorenz_(Enciclopedia-della-Matematica)/"
    },
    {
        "id": 864,
        "keywords": [
            "arrotondamento decimali",
            "da 6 a 3 cifre",
            "scarto minimo",
            "quesito 864"
        ],
        "answer": "Dal punto di vista dell'analisi matematica, replicando una simulazione, Lorenz approssimò i dati da sei a tre cifre decimali alterando i risultati.",
        "url": "https://www.treccani.it/enciclopedia/attrattore-di-lorenz_(Enciclopedia-della-Matematica)/"
    },
    {
        "id": 865,
        "keywords": [
            "risultati divergenti",
            "esplosione dell'errore",
            "ordini di grandezza",
            "quesito 865"
        ],
        "answer": "Secondo la descrizione del capitolo, l'approssimazione decimale generò previsioni divergenti per vari ordini di grandezza.",
        "url": "https://www.treccani.it/enciclopedia/attrattore-di-lorenz_(Enciclopedia-della-Matematica)/"
    },
    {
        "id": 866,
        "keywords": [
            "riduzionismo newtoniano",
            "scala di grandezza",
            "dettagli trascurabili",
            "quesito 866"
        ],
        "answer": "Il riduzionismo newtoniano assume che i fenomeni su scala inferiore abbiano effetti trascurabili.",
        "url": "https://www.treccani.it/enciclopedia/attrattore-di-lorenz_(Enciclopedia-della-Matematica)/"
    },
    {
        "id": 867,
        "keywords": [
            "margine d'errore",
            "errore sperimentale",
            "propagazione",
            "quesito 867"
        ],
        "answer": "In relazione alla teoria del caos, nel modello newtoniano l'errore è controllabile, mentre nei sistemi caotici si propaga esplosivamente.",
        "url": "https://www.treccani.it/enciclopedia/attrattore-di-lorenz_(Enciclopedia-della-Matematica)/"
    },
    {
        "id": 868,
        "keywords": [
            "dipendenza sensibile",
            "condizioni iniziali",
            "limite previsioni",
            "quesito 868"
        ],
        "answer": "Nell'ambito della dinamica dei sistemi complessi, la dipendenza sensibile dalle condizioni iniziali rende impossibile la previsione a lungo termine.",
        "url": "https://www.treccani.it/enciclopedia/attrattore-di-lorenz_(Enciclopedia-della-Matematica)/"
    },
    {
        "id": 869,
        "keywords": [
            "effetto farfalla",
            "metafora brasiliana",
            "tifone florida",
            "quesito 869"
        ],
        "answer": "Dal punto di vista dell'analisi matematica, l'effetto farfalla esprime l'idea che il battito d'ali di una farfalla in Brasile produca un tifone in Florida.",
        "url": "https://www.treccani.it/enciclopedia/attrattore-di-lorenz_(Enciclopedia-della-Matematica)/"
    },
    {
        "id": 870,
        "keywords": [
            "conferenza aaas 1979",
            "uragano texas",
            "relazione lorenz",
            "quesito 870"
        ],
        "answer": "Secondo la descrizione del capitolo, nel 1979 alla conferenza AAAS gli allievi di Lorenz diffusero la metafora dell'uragano nel Texas.",
        "url": "https://www.treccani.it/enciclopedia/attrattore-di-lorenz_(Enciclopedia-della-Matematica)/"
    },
    {
        "id": 871,
        "keywords": [
            "cinema e cultura",
            "jurassic park",
            "sliding doors",
            "quesito 871"
        ],
        "answer": "L'effetto farfalla è citato in film celebri tra cui Jurassic Park, Sliding Doors e The Oxford Murders.",
        "url": "https://www.treccani.it/enciclopedia/attrattore-di-lorenz_(Enciclopedia-della-Matematica)/"
    },
    {
        "id": 872,
        "keywords": [
            "sistema dinamico",
            "variabili nel tempo",
            "spazio astratto",
            "quesito 872"
        ],
        "answer": "In relazione alla teoria del caos, un sistema dinamico è rappresentato da una serie di grandezze che variano nel tempo.",
        "url": "https://www.liceopalmieri.edu.it/LaboratorioStem/Attrattori/"
    },
    {
        "id": 873,
        "keywords": [
            "spazio delle fasi",
            "dimensioni",
            "traiettoria",
            "quesito 873"
        ],
        "answer": "Nell'ambito della dinamica dei sistemi complessi, lo spazio delle fasi ha una dimensione pari al numero di variabili libere del sistema dinamico.",
        "url": "https://www.liceopalmieri.edu.it/LaboratorioStem/Attrattori/"
    },
    {
        "id": 874,
        "keywords": [
            "piano delle fasi",
            "pendolo semplice",
            "due dimensioni",
            "quesito 874"
        ],
        "answer": "Dal punto di vista dell'analisi matematica, il pendolo semplice è descritto in un piano delle fasi bidimensionale (angolo e velocità).",
        "url": "https://www.liceopalmieri.edu.it/LaboratorioStem/Attrattori/"
    },
    {
        "id": 875,
        "keywords": [
            "doppio pendolo",
            "quattro dimensioni",
            "iperspazio",
            "quesito 875"
        ],
        "answer": "Secondo la descrizione del capitolo, il doppio pendolo necessita di uno spazio delle fasi a quattro dimensioni per rappresentare le sue orbite.",
        "url": "https://www.liceopalmieri.edu.it/LaboratorioStem/Attrattori/"
    },
    {
        "id": 876,
        "keywords": [
            "punto fisso",
            "attrattore punto",
            "attrito",
            "quesito 876"
        ],
        "answer": "Il punto fisso è un attrattore che stabilizza il sistema dinamico in uno stato di equilibrio stazionario.",
        "url": "https://www.liceopalmieri.edu.it/LaboratorioStem/Attrattori/"
    },
    {
        "id": 877,
        "keywords": [
            "ciclo limite",
            "circuito van der pol",
            "oscillatore",
            "quesito 877"
        ],
        "answer": "In relazione alla teoria del caos, un ciclo limite è un attrattore rappresentato da una curva chiusa percorsa in modo periodico.",
        "url": "https://www.liceopalmieri.edu.it/LaboratorioStem/Attrattori/"
    },
    {
        "id": 878,
        "keywords": [
            "attrattore strano",
            "definizione",
            "volume finito",
            "quesito 878"
        ],
        "answer": "Nell'ambito della dinamica dei sistemi complessi, l'attrattore strano è una regione finita dello spazio delle fasi in cui le traiettorie non si intersecano mai.",
        "url": "https://www.liceopalmieri.edu.it/LaboratorioStem/Attrattori/"
    },
    {
        "id": 879,
        "keywords": [
            "farfalla di lorenz",
            "ali sfasate",
            "corpo centrale",
            "quesito 879"
        ],
        "answer": "Dal punto di vista dell'analisi matematica, l'attrattore di Lorenz ha la forma caratteristica di una farfalla con due ali disposte su piani sfasati.",
        "url": "https://www.liceopalmieri.edu.it/LaboratorioStem/Attrattori/"
    },
    {
        "id": 880,
        "keywords": [
            "discretizzazione",
            "rappresentazione a punti",
            "passo temporale",
            "quesito 880"
        ],
        "answer": "Secondo la descrizione del capitolo, in simulazione informatica l'attrattore appare come una sequenza discreta di punti nel tempo.",
        "url": "https://www.liceopalmieri.edu.it/LaboratorioStem/Attrattori/"
    },
    {
        "id": 881,
        "keywords": [
            "attrattore toro",
            "quasi periodicita",
            "struttura toroidale",
            "quesito 881"
        ],
        "answer": "L'attrattore a toro descrive un comportamento quasi periodico con complessità intermedia tra ciclo e caos.",
        "url": "https://www.liceopalmieri.edu.it/LaboratorioStem/Attrattori/"
    },
    {
        "id": 882,
        "keywords": [
            "circuito di chua",
            "componenti passivi",
            "diodo non lineare",
            "quesito 882"
        ],
        "answer": "In relazione alla teoria del caos, il circuito di Chua è un circuito elettronico composto da resistenze, capacità, induttanza e un diodo non lineare.",
        "url": "https://www.treccani.it/enciclopedia/caos_(Enciclopedia-del-Novecento)/"
    },
    {
        "id": 883,
        "keywords": [
            "doppio scroll",
            "double scroll",
            "chua attrattore",
            "quesito 883"
        ],
        "answer": "Nell'ambito della dinamica dei sistemi complessi, il Doppio Scroll è l'attrattore strano più celebre prodotto dal circuito elettronico di Chua.",
        "url": "https://www.treccani.it/enciclopedia/caos_(Enciclopedia-del-Novecento)/"
    },
    {
        "id": 884,
        "keywords": [
            "spirale di chua",
            "resistenza parametro",
            "transizione",
            "quesito 884"
        ],
        "answer": "Dal punto di vista dell'analisi matematica, aumentando la resistenza nel circuito di Chua, l'attrattore passa dal doppio scroll alla spirale.",
        "url": "https://www.treccani.it/enciclopedia/caos_(Enciclopedia-del-Novecento)/"
    },
    {
        "id": 885,
        "keywords": [
            "strada verso il caos",
            "percorso sequenziale",
            "ordine caos",
            "quesito 885"
        ],
        "answer": "Secondo la descrizione del capitolo, la strada verso il caos descrive la transizione dall'ordine stazionario al caos deterministico.",
        "url": "https://www.treccani.it/enciclopedia/caos_(Enciclopedia-del-Novecento)/"
    },
    {
        "id": 886,
        "keywords": [
            "saturazione",
            "orizzonte fisico",
            "massimo energetico",
            "quesito 886"
        ],
        "answer": "La saturazione rappresenta il massimo livello di energia del sistema e si manifesta come ciclo limite.",
        "url": "https://www.treccani.it/enciclopedia/caos_(Enciclopedia-del-Novecento)/"
    },
    {
        "id": 887,
        "keywords": [
            "biforcazione",
            "parametro di controllo",
            "cambiamento qualitativo",
            "quesito 887"
        ],
        "answer": "In relazione alla teoria del caos, una biforcazione si verifica quando il comportamento del sistema cambia radicalmente al variare del parametro.",
        "url": "https://www.treccani.it/enciclopedia/caos_(Enciclopedia-del-Novecento)/"
    },
    {
        "id": 888,
        "keywords": [
            "biforcazione di hopf",
            "raddoppio del periodo",
            "cascata",
            "quesito 888"
        ],
        "answer": "Nell'ambito della dinamica dei sistemi complessi, la biforcazione di Hopf comporta il raddoppio del periodo delle oscillazioni lungo una cascata infinita.",
        "url": "https://www.treccani.it/enciclopedia/caos_(Enciclopedia-del-Novecento)/"
    },
    {
        "id": 889,
        "keywords": [
            "costante di feigenbaum",
            "mitchell feigenbaum",
            "1975",
            "quesito 889"
        ],
        "answer": "Dal punto di vista dell'analisi matematica, la costante di Feigenbaum (4.6692) descrive la convergenza universale delle biforcazioni caotiche.",
        "url": "https://www.treccani.it/enciclopedia/caos_(Enciclopedia-del-Novecento)/"
    },
    {
        "id": 890,
        "keywords": [
            "mappa logistica",
            "popolazione discreta",
            "modello feigenbaum",
            "quesito 890"
        ],
        "answer": "Secondo la descrizione del capitolo, la mappa logistica è un modello popolazionale discreto che mostra il raddoppio del periodo.",
        "url": "https://www.treccani.it/enciclopedia/caos_(Enciclopedia-del-Novecento)/"
    },
    {
        "id": 891,
        "keywords": [
            "diagramma di biforcazione",
            "soglia 1.16 kohm",
            "chua diagramma",
            "quesito 891"
        ],
        "answer": "Nel circuito di Chua la transizione da punto fisso a ciclo limite avviene per R = 1,16 kΩ.",
        "url": "https://www.treccani.it/enciclopedia/caos_(Enciclopedia-del-Novecento)/"
    },
    {
        "id": 892,
        "keywords": [
            "frattali",
            "etimologia fractus",
            "geometria non euclidea",
            "quesito 892"
        ],
        "answer": "In relazione alla teoria del caos, il termine frattale fu coniato da Mandelbrot nel 1975 dal latino fractus per definire forme discontinue.",
        "url": "https://www.treccani.it/enciclopedia/caos_(Enciclopedia-del-Novecento)/"
    },
    {
        "id": 893,
        "keywords": [
            "fiocco di neve di koch",
            "costruzione iterativa",
            "perimetro infinito",
            "quesito 893"
        ],
        "answer": "Nell'ambito della dinamica dei sistemi complessi, il fiocco di neve di Koch è un frattale con perimetro di lunghezza infinita in una superficie finita.",
        "url": "https://www.treccani.it/enciclopedia/caos_(Enciclopedia-del-Novecento)/"
    },
    {
        "id": 894,
        "keywords": [
            "triangolo di sierpinski",
            "ricorsione",
            "dimensione frattale",
            "quesito 894"
        ],
        "answer": "Dal punto di vista dell'analisi matematica, il triangolo di Sierpinski è una figura frattale ottenuta rimuovendo i sotto-triangoli centrali.",
        "url": "https://www.treccani.it/enciclopedia/caos_(Enciclopedia-del-Novecento)/"
    },
    {
        "id": 895,
        "keywords": [
            "benoit mandelbrot",
            "geometria della natura",
            "inadeguatezza euclidea",
            "quesito 895"
        ],
        "answer": "Secondo la descrizione del capitolo, mandelbrot dimostrò che la geometria euclidea non è adatta a descrivere nuvole, montagne e coste.",
        "url": "https://www.treccani.it/enciclopedia/caos_(Enciclopedia-del-Novecento)/"
    },
    {
        "id": 896,
        "keywords": [
            "invarianza di scala",
            "auto-similarita",
            "struttura ricorsiva",
            "quesito 896"
        ],
        "answer": "L'auto-similarità implica che ingrandendo un dettaglio di un frattale si ritrova la figura intera.",
        "url": "https://www.treccani.it/enciclopedia/caos_(Enciclopedia-del-Novecento)/"
    },
    {
        "id": 897,
        "keywords": [
            "cavolfiore frattale",
            "montagna",
            "scogliera",
            "quesito 897"
        ],
        "answer": "In relazione alla teoria del caos, esempi naturali di frattali sono i cavolfiori, i profili montuosi e la struttura delle scogliere.",
        "url": "https://www.treccani.it/enciclopedia/caos_(Enciclopedia-del-Novecento)/"
    },
    {
        "id": 898,
        "keywords": [
            "econofisica",
            "borsa valori",
            "serie temporali",
            "quesito 898"
        ],
        "answer": "Nell'ambito della dinamica dei sistemi complessi, l'econofisica studia le serie temporali dei mercati finanziari sfruttando concetti frattali e caotici.",
        "url": "https://www.treccani.it/enciclopedia/caos_(Enciclopedia-del-Novecento)/"
    },
    {
        "id": 899,
        "keywords": [
            "digital art",
            "arte elettronica",
            "estetica del caos",
            "quesito 899"
        ],
        "answer": "Dal punto di vista dell'analisi matematica, la bellezza degli attrattori e dei frattali ha ispirato nuove correnti artistiche di Digital Art.",
        "url": "https://www.treccani.it/enciclopedia/caos_(Enciclopedia-del-Novecento)/"
    },
    {
        "id": 900,
        "keywords": [
            "ubiquita del caos",
            "paradigma scientifico",
            "transdisciplinarita",
            "quesito 900"
        ],
        "answer": "Secondo la descrizione del capitolo, l'ubiquità del caos descrive la presenza universale di comportamenti imprevedibili nella natura.",
        "url": "https://www.treccani.it/enciclopedia/caos_(Enciclopedia-del-Novecento)/"
    },
    {
        "id": 901,
        "keywords": [
            "meccanicismo",
            "orologio perfetto",
            "newton",
            "quesito 901"
        ],
        "answer": "Da Newton in poi, la visione dominante rappresentava il mondo come un meccanismo perfetto, analogo a un orologio di precisione.",
        "url": "https://www.treccani.it/enciclopedia/meccanicismo_(Enciclopedia-Italiana)/"
    },
    {
        "id": 902,
        "keywords": [
            "meccanica sperimentale",
            "fine XVII secolo",
            "isaac newton",
            "quesito 902"
        ],
        "answer": "In relazione alla teoria del caos, la meccanica come scienza sperimentale è nata alla fine del XVII secolo con Isaac Newton.",
        "url": "https://www.treccani.it/enciclopedia/meccanicismo_(Enciclopedia-Italiana)/"
    },
    {
        "id": 903,
        "keywords": [
            "eulero",
            "lagrange",
            "laplace",
            "quesito 903"
        ],
        "answer": "Nell'ambito della dinamica dei sistemi complessi, nel XVIII secolo la meccanica classica fu perfezionata dai lavori di Eulero, Lagrange e Laplace.",
        "url": "https://www.treccani.it/enciclopedia/meccanicismo_(Enciclopedia-Italiana)/"
    },
    {
        "id": 904,
        "keywords": [
            "calcolo differenziale",
            "calcolo integrale",
            "leibniz",
            "quesito 904"
        ],
        "answer": "Dal punto di vista dell'analisi matematica, il calcolo differenziale e integrale fu sviluppato contemporaneamente da Newton e Leibniz.",
        "url": "https://www.treccani.it/enciclopedia/meccanicismo_(Enciclopedia-Italiana)/"
    },
    {
        "id": 905,
        "keywords": [
            "meccanica celeste",
            "leggi di newton",
            "evidenze sperimentali",
            "quesito 905"
        ],
        "answer": "Secondo la descrizione del capitolo, la meccanica celeste fornì un quadro teorico unificante supportato da evidenze sperimentali.",
        "url": "https://www.treccani.it/enciclopedia/meccanicismo_(Enciclopedia-Italiana)/"
    },
    {
        "id": 906,
        "keywords": [
            "determinismo causale",
            "causalita",
            "catena di eventi",
            "quesito 906"
        ],
        "answer": "Il determinismo causale stabilisce che ogni evento accada all'interno di una catena causale.",
        "url": "https://www.treccani.it/enciclopedia/meccanicismo_(Enciclopedia-Italiana)/"
    },
    {
        "id": 907,
        "keywords": [
            "configurazioni iniziali",
            "previsione teorica",
            "stato futuro",
            "quesito 907"
        ],
        "answer": "In relazione alla teoria del caos, conoscendo cause e configurazioni iniziali, il determinismo teorizza la previsione degli eventi futuri.",
        "url": "https://www.treccani.it/enciclopedia/meccanicismo_(Enciclopedia-Italiana)/"
    },
    {
        "id": 908,
        "keywords": [
            "laplace",
            "demone di laplace",
            "determinismo assoluto",
            "quesito 908"
        ],
        "answer": "Nell'ambito della dinamica dei sistemi complessi, laplace concepiva il determinismo come la capacità di calcolare con precisione lo stato futuro conoscendo lo stato attuale.",
        "url": "https://www.treccani.it/enciclopedia/meccanicismo_(Enciclopedia-Italiana)/"
    },
    {
        "id": 909,
        "keywords": [
            "darwin",
            "evoluzione",
            "XIX secolo",
            "quesito 909"
        ],
        "answer": "Dal punto di vista dell'analisi matematica, nel XIX secolo gli studi di Darwin sull'evoluzione misero in discussione il riduzionismo meccanicista.",
        "url": "https://www.treccani.it/enciclopedia/entropia_(Enciclopedia-della-Scienza-e-della-Tecnica)/"
    },
    {
        "id": 910,
        "keywords": [
            "termodinamica",
            "entropia",
            "irreversibilita",
            "quesito 910"
        ],
        "answer": "Secondo la descrizione del capitolo, l'introduzione dell'entropia e dell'irreversibilità evidenziò i limiti della spiegazione meccanicista.",
        "url": "https://www.treccani.it/enciclopedia/entropia_(Enciclopedia-della-Scienza-e-della-Tecnica)/"
    },
    {
        "id": 911,
        "keywords": [
            "trasformazioni di energia",
            "fenomeni biologici",
            "limiti newtoniani",
            "quesito 911"
        ],
        "answer": "La termodinamica dimostrò che la meccanica classica era deficitaria nei fenomeni legati alla vita.",
        "url": "https://www.treccani.it/enciclopedia/entropia_(Enciclopedia-della-Scienza-e-della-Tecnica)/"
    },
    {
        "id": 912,
        "keywords": [
            "meccanica quantistica",
            "infinitamente piccolo",
            "XX secolo",
            "quesito 912"
        ],
        "answer": "In relazione alla teoria del caos, la meccanica quantistica è una teoria del XX secolo rivolta allo studio dell'infinitamente piccolo.",
        "url": "https://www.treccani.it/enciclopedia/entropia_(Enciclopedia-della-Scienza-e-della-Tecnica)/"
    },
    {
        "id": 913,
        "keywords": [
            "relativita generale",
            "infinitamente grande",
            "einstein",
            "quesito 913"
        ],
        "answer": "Nell'ambito della dinamica dei sistemi complessi, la relatività generale descrive la gravità e i fenomeni dell'infinitamente grande.",
        "url": "https://www.treccani.it/enciclopedia/entropia_(Enciclopedia-della-Scienza-e-della-Tecnica)/"
    },
    {
        "id": 914,
        "keywords": [
            "validita newtoniana",
            "fenomeni osservabili",
            "scala macroscopica",
            "quesito 914"
        ],
        "answer": "Dal punto di vista dell'analisi matematica, fino agli anni '60 la meccanica newtoniana rimase un'ottima descrizione dei fenomeni osservabili.",
        "url": "https://www.treccani.it/enciclopedia/entropia_(Enciclopedia-della-Scienza-e-della-Tecnica)/"
    },
    {
        "id": 915,
        "keywords": [
            "caos grecia",
            "significato antico",
            "disordine",
            "quesito 915"
        ],
        "answer": "Secondo la descrizione del capitolo, in antica Grecia il termine caos indicava disordine, confusione, scompiglio e agitazione.",
        "url": "https://www.treccani.it/enciclopedia/caos_(Enciclopedia-del-Novecento)/"
    },
    {
        "id": 916,
        "keywords": [
            "cosmos",
            "ordine",
            "antitesi caos",
            "quesito 916"
        ],
        "answer": "Il termine greco cosmos significa ordine ed era usato in antitesi al termine caos.",
        "url": "https://www.treccani.it/enciclopedia/caos_(Enciclopedia-del-Novecento)/"
    },
    {
        "id": 917,
        "keywords": [
            "limite cognitivo",
            "comprensione",
            "orizzonte oscuro",
            "quesito 917"
        ],
        "answer": "In relazione alla teoria del caos, in termini cognitivi il caos identifica un'incapacità generale di comprensione e un limite visivo.",
        "url": "https://www.treccani.it/enciclopedia/caos_(Enciclopedia-del-Novecento)/"
    },
    {
        "id": 918,
        "keywords": [
            "capovolgimento semantico",
            "scienza contemporanea",
            "caos deterministico",
            "quesito 918"
        ],
        "answer": "Nell'ambito della dinamica dei sistemi complessi, la scienza contemporanea ha ribaltato la semantica del caos riferendolo a dinamiche deterministiche non analitiche.",
        "url": "https://www.treccani.it/enciclopedia/caos_(Enciclopedia-del-Novecento)/"
    },
    {
        "id": 919,
        "keywords": [
            "settori del caos",
            "fenomeni sociali",
            "economia",
            "quesito 919"
        ],
        "answer": "Dal punto di vista dell'analisi matematica, la teoria del caos analizza fenomeni imprevedibili in ambito fisico, economico, sociale e comportamentale.",
        "url": "https://www.treccani.it/enciclopedia/caos_(Enciclopedia-del-Novecento)/"
    },
    {
        "id": 920,
        "keywords": [
            "edward lorenz",
            "mit cambridge",
            "meteorologia",
            "quesito 920"
        ],
        "answer": "Secondo la descrizione del capitolo, edward H. Lorenz era un meteorologo del MIT di Cambridge che sviluppò modelli matematici per il meteo.",
        "url": "https://www.treccani.it/enciclopedia/attrattore-di-lorenz_(Enciclopedia-della-Matematica)/"
    },
    {
        "id": 921,
        "keywords": [
            "equazioni differenziali",
            "tre equazioni",
            "non linearita",
            "quesito 921"
        ],
        "answer": "Il modello atmosferico di Lorenz era basato su tre equazioni differenziali ordinarie non lineari.",
        "url": "https://www.treccani.it/enciclopedia/attrattore-di-lorenz_(Enciclopedia-della-Matematica)/"
    },
    {
        "id": 922,
        "keywords": [
            "integrazione numerica",
            "computer lorenz",
            "anni 60",
            "quesito 922"
        ],
        "answer": "In relazione alla teoria del caos, lorenz utilizzò il computer per integrare numericamente equazioni non lineari prive di soluzione analitica.",
        "url": "https://www.treccani.it/enciclopedia/attrattore-di-lorenz_(Enciclopedia-della-Matematica)/"
    },
    {
        "id": 923,
        "keywords": [
            "analisi numerica",
            "processi iterativi",
            "algoritmi",
            "quesito 923"
        ],
        "answer": "Nell'ambito della dinamica dei sistemi complessi, l'analisi numerica sviluppa algoritmi e metodi iterativi per approssimare problemi matematici complessi.",
        "url": "https://www.treccani.it/enciclopedia/attrattore-di-lorenz_(Enciclopedia-della-Matematica)/"
    },
    {
        "id": 924,
        "keywords": [
            "arrotondamento decimali",
            "da 6 a 3 cifre",
            "scarto minimo",
            "quesito 924"
        ],
        "answer": "Dal punto di vista dell'analisi matematica, replicando una simulazione, Lorenz approssimò i dati da sei a tre cifre decimali alterando i risultati.",
        "url": "https://www.treccani.it/enciclopedia/attrattore-di-lorenz_(Enciclopedia-della-Matematica)/"
    },
    {
        "id": 925,
        "keywords": [
            "risultati divergenti",
            "esplosione dell'errore",
            "ordini di grandezza",
            "quesito 925"
        ],
        "answer": "Secondo la descrizione del capitolo, l'approssimazione decimale generò previsioni divergenti per vari ordini di grandezza.",
        "url": "https://www.treccani.it/enciclopedia/attrattore-di-lorenz_(Enciclopedia-della-Matematica)/"
    },
    {
        "id": 926,
        "keywords": [
            "riduzionismo newtoniano",
            "scala di grandezza",
            "dettagli trascurabili",
            "quesito 926"
        ],
        "answer": "Il riduzionismo newtoniano assume che i fenomeni su scala inferiore abbiano effetti trascurabili.",
        "url": "https://www.treccani.it/enciclopedia/attrattore-di-lorenz_(Enciclopedia-della-Matematica)/"
    },
    {
        "id": 927,
        "keywords": [
            "margine d'errore",
            "errore sperimentale",
            "propagazione",
            "quesito 927"
        ],
        "answer": "In relazione alla teoria del caos, nel modello newtoniano l'errore è controllabile, mentre nei sistemi caotici si propaga esplosivamente.",
        "url": "https://www.treccani.it/enciclopedia/attrattore-di-lorenz_(Enciclopedia-della-Matematica)/"
    },
    {
        "id": 928,
        "keywords": [
            "dipendenza sensibile",
            "condizioni iniziali",
            "limite previsioni",
            "quesito 928"
        ],
        "answer": "Nell'ambito della dinamica dei sistemi complessi, la dipendenza sensibile dalle condizioni iniziali rende impossibile la previsione a lungo termine.",
        "url": "https://www.treccani.it/enciclopedia/attrattore-di-lorenz_(Enciclopedia-della-Matematica)/"
    },
    {
        "id": 929,
        "keywords": [
            "effetto farfalla",
            "metafora brasiliana",
            "tifone florida",
            "quesito 929"
        ],
        "answer": "Dal punto di vista dell'analisi matematica, l'effetto farfalla esprime l'idea che il battito d'ali di una farfalla in Brasile produca un tifone in Florida.",
        "url": "https://www.treccani.it/enciclopedia/attrattore-di-lorenz_(Enciclopedia-della-Matematica)/"
    },
    {
        "id": 930,
        "keywords": [
            "conferenza aaas 1979",
            "uragano texas",
            "relazione lorenz",
            "quesito 930"
        ],
        "answer": "Secondo la descrizione del capitolo, nel 1979 alla conferenza AAAS gli allievi di Lorenz diffusero la metafora dell'uragano nel Texas.",
        "url": "https://www.treccani.it/enciclopedia/attrattore-di-lorenz_(Enciclopedia-della-Matematica)/"
    },
    {
        "id": 931,
        "keywords": [
            "cinema e cultura",
            "jurassic park",
            "sliding doors",
            "quesito 931"
        ],
        "answer": "L'effetto farfalla è citato in film celebri tra cui Jurassic Park, Sliding Doors e The Oxford Murders.",
        "url": "https://www.treccani.it/enciclopedia/attrattore-di-lorenz_(Enciclopedia-della-Matematica)/"
    },
    {
        "id": 932,
        "keywords": [
            "sistema dinamico",
            "variabili nel tempo",
            "spazio astratto",
            "quesito 932"
        ],
        "answer": "In relazione alla teoria del caos, un sistema dinamico è rappresentato da una serie di grandezze che variano nel tempo.",
        "url": "https://www.liceopalmieri.edu.it/LaboratorioStem/Attrattori/"
    },
    {
        "id": 933,
        "keywords": [
            "spazio delle fasi",
            "dimensioni",
            "traiettoria",
            "quesito 933"
        ],
        "answer": "Nell'ambito della dinamica dei sistemi complessi, lo spazio delle fasi ha una dimensione pari al numero di variabili libere del sistema dinamico.",
        "url": "https://www.liceopalmieri.edu.it/LaboratorioStem/Attrattori/"
    },
    {
        "id": 934,
        "keywords": [
            "piano delle fasi",
            "pendolo semplice",
            "due dimensioni",
            "quesito 934"
        ],
        "answer": "Dal punto di vista dell'analisi matematica, il pendolo semplice è descritto in un piano delle fasi bidimensionale (angolo e velocità).",
        "url": "https://www.liceopalmieri.edu.it/LaboratorioStem/Attrattori/"
    },
    {
        "id": 935,
        "keywords": [
            "doppio pendolo",
            "quattro dimensioni",
            "iperspazio",
            "quesito 935"
        ],
        "answer": "Secondo la descrizione del capitolo, il doppio pendolo necessita di uno spazio delle fasi a quattro dimensioni per rappresentare le sue orbite.",
        "url": "https://www.liceopalmieri.edu.it/LaboratorioStem/Attrattori/"
    },
    {
        "id": 936,
        "keywords": [
            "punto fisso",
            "attrattore punto",
            "attrito",
            "quesito 936"
        ],
        "answer": "Il punto fisso è un attrattore che stabilizza il sistema dinamico in uno stato di equilibrio stazionario.",
        "url": "https://www.liceopalmieri.edu.it/LaboratorioStem/Attrattori/"
    },
    {
        "id": 937,
        "keywords": [
            "ciclo limite",
            "circuito van der pol",
            "oscillatore",
            "quesito 937"
        ],
        "answer": "In relazione alla teoria del caos, un ciclo limite è un attrattore rappresentato da una curva chiusa percorsa in modo periodico.",
        "url": "https://www.liceopalmieri.edu.it/LaboratorioStem/Attrattori/"
    },
    {
        "id": 938,
        "keywords": [
            "attrattore strano",
            "definizione",
            "volume finito",
            "quesito 938"
        ],
        "answer": "Nell'ambito della dinamica dei sistemi complessi, l'attrattore strano è una regione finita dello spazio delle fasi in cui le traiettorie non si intersecano mai.",
        "url": "https://www.liceopalmieri.edu.it/LaboratorioStem/Attrattori/"
    },
    {
        "id": 939,
        "keywords": [
            "farfalla di lorenz",
            "ali sfasate",
            "corpo centrale",
            "quesito 939"
        ],
        "answer": "Dal punto di vista dell'analisi matematica, l'attrattore di Lorenz ha la forma caratteristica di una farfalla con due ali disposte su piani sfasati.",
        "url": "https://www.liceopalmieri.edu.it/LaboratorioStem/Attrattori/"
    },
    {
        "id": 940,
        "keywords": [
            "discretizzazione",
            "rappresentazione a punti",
            "passo temporale",
            "quesito 940"
        ],
        "answer": "Secondo la descrizione del capitolo, in simulazione informatica l'attrattore appare come una sequenza discreta di punti nel tempo.",
        "url": "https://www.liceopalmieri.edu.it/LaboratorioStem/Attrattori/"
    },
    {
        "id": 941,
        "keywords": [
            "attrattore toro",
            "quasi periodicita",
            "struttura toroidale",
            "quesito 941"
        ],
        "answer": "L'attrattore a toro descrive un comportamento quasi periodico con complessità intermedia tra ciclo e caos.",
        "url": "https://www.liceopalmieri.edu.it/LaboratorioStem/Attrattori/"
    },
    {
        "id": 942,
        "keywords": [
            "circuito di chua",
            "componenti passivi",
            "diodo non lineare",
            "quesito 942"
        ],
        "answer": "In relazione alla teoria del caos, il circuito di Chua è un circuito elettronico composto da resistenze, capacità, induttanza e un diodo non lineare.",
        "url": "https://www.treccani.it/enciclopedia/caos_(Enciclopedia-del-Novecento)/"
    },
    {
        "id": 943,
        "keywords": [
            "doppio scroll",
            "double scroll",
            "chua attrattore",
            "quesito 943"
        ],
        "answer": "Nell'ambito della dinamica dei sistemi complessi, il Doppio Scroll è l'attrattore strano più celebre prodotto dal circuito elettronico di Chua.",
        "url": "https://www.treccani.it/enciclopedia/caos_(Enciclopedia-del-Novecento)/"
    },
    {
        "id": 944,
        "keywords": [
            "spirale di chua",
            "resistenza parametro",
            "transizione",
            "quesito 944"
        ],
        "answer": "Dal punto di vista dell'analisi matematica, aumentando la resistenza nel circuito di Chua, l'attrattore passa dal doppio scroll alla spirale.",
        "url": "https://www.treccani.it/enciclopedia/caos_(Enciclopedia-del-Novecento)/"
    },
    {
        "id": 945,
        "keywords": [
            "strada verso il caos",
            "percorso sequenziale",
            "ordine caos",
            "quesito 945"
        ],
        "answer": "Secondo la descrizione del capitolo, la strada verso il caos descrive la transizione dall'ordine stazionario al caos deterministico.",
        "url": "https://www.treccani.it/enciclopedia/caos_(Enciclopedia-del-Novecento)/"
    },
    {
        "id": 946,
        "keywords": [
            "saturazione",
            "orizzonte fisico",
            "massimo energetico",
            "quesito 946"
        ],
        "answer": "La saturazione rappresenta il massimo livello di energia del sistema e si manifesta come ciclo limite.",
        "url": "https://www.treccani.it/enciclopedia/caos_(Enciclopedia-del-Novecento)/"
    },
    {
        "id": 947,
        "keywords": [
            "biforcazione",
            "parametro di controllo",
            "cambiamento qualitativo",
            "quesito 947"
        ],
        "answer": "In relazione alla teoria del caos, una biforcazione si verifica quando il comportamento del sistema cambia radicalmente al variare del parametro.",
        "url": "https://www.treccani.it/enciclopedia/caos_(Enciclopedia-del-Novecento)/"
    },
    {
        "id": 948,
        "keywords": [
            "biforcazione di hopf",
            "raddoppio del periodo",
            "cascata",
            "quesito 948"
        ],
        "answer": "Nell'ambito della dinamica dei sistemi complessi, la biforcazione di Hopf comporta il raddoppio del periodo delle oscillazioni lungo una cascata infinita.",
        "url": "https://www.treccani.it/enciclopedia/caos_(Enciclopedia-del-Novecento)/"
    },
    {
        "id": 949,
        "keywords": [
            "costante di feigenbaum",
            "mitchell feigenbaum",
            "1975",
            "quesito 949"
        ],
        "answer": "Dal punto di vista dell'analisi matematica, la costante di Feigenbaum (4.6692) descrive la convergenza universale delle biforcazioni caotiche.",
        "url": "https://www.treccani.it/enciclopedia/caos_(Enciclopedia-del-Novecento)/"
    },
    {
        "id": 950,
        "keywords": [
            "mappa logistica",
            "popolazione discreta",
            "modello feigenbaum",
            "quesito 950"
        ],
        "answer": "Secondo la descrizione del capitolo, la mappa logistica è un modello popolazionale discreto che mostra il raddoppio del periodo.",
        "url": "https://www.treccani.it/enciclopedia/caos_(Enciclopedia-del-Novecento)/"
    },
    {
        "id": 951,
        "keywords": [
            "diagramma di biforcazione",
            "soglia 1.16 kohm",
            "chua diagramma",
            "quesito 951"
        ],
        "answer": "Nel circuito di Chua la transizione da punto fisso a ciclo limite avviene per R = 1,16 kΩ.",
        "url": "https://www.treccani.it/enciclopedia/caos_(Enciclopedia-del-Novecento)/"
    },
    {
        "id": 952,
        "keywords": [
            "frattali",
            "etimologia fractus",
            "geometria non euclidea",
            "quesito 952"
        ],
        "answer": "In relazione alla teoria del caos, il termine frattale fu coniato da Mandelbrot nel 1975 dal latino fractus per definire forme discontinue.",
        "url": "https://www.treccani.it/enciclopedia/caos_(Enciclopedia-del-Novecento)/"
    },
    {
        "id": 953,
        "keywords": [
            "fiocco di neve di koch",
            "costruzione iterativa",
            "perimetro infinito",
            "quesito 953"
        ],
        "answer": "Nell'ambito della dinamica dei sistemi complessi, il fiocco di neve di Koch è un frattale con perimetro di lunghezza infinita in una superficie finita.",
        "url": "https://www.treccani.it/enciclopedia/caos_(Enciclopedia-del-Novecento)/"
    },
    {
        "id": 954,
        "keywords": [
            "triangolo di sierpinski",
            "ricorsione",
            "dimensione frattale",
            "quesito 954"
        ],
        "answer": "Dal punto di vista dell'analisi matematica, il triangolo di Sierpinski è una figura frattale ottenuta rimuovendo i sotto-triangoli centrali.",
        "url": "https://www.treccani.it/enciclopedia/caos_(Enciclopedia-del-Novecento)/"
    },
    {
        "id": 955,
        "keywords": [
            "benoit mandelbrot",
            "geometria della natura",
            "inadeguatezza euclidea",
            "quesito 955"
        ],
        "answer": "Secondo la descrizione del capitolo, mandelbrot dimostrò che la geometria euclidea non è adatta a descrivere nuvole, montagne e coste.",
        "url": "https://www.treccani.it/enciclopedia/caos_(Enciclopedia-del-Novecento)/"
    },
    {
        "id": 956,
        "keywords": [
            "invarianza di scala",
            "auto-similarita",
            "struttura ricorsiva",
            "quesito 956"
        ],
        "answer": "L'auto-similarità implica che ingrandendo un dettaglio di un frattale si ritrova la figura intera.",
        "url": "https://www.treccani.it/enciclopedia/caos_(Enciclopedia-del-Novecento)/"
    },
    {
        "id": 957,
        "keywords": [
            "cavolfiore frattale",
            "montagna",
            "scogliera",
            "quesito 957"
        ],
        "answer": "In relazione alla teoria del caos, esempi naturali di frattali sono i cavolfiori, i profili montuosi e la struttura delle scogliere.",
        "url": "https://www.treccani.it/enciclopedia/caos_(Enciclopedia-del-Novecento)/"
    },
    {
        "id": 958,
        "keywords": [
            "econofisica",
            "borsa valori",
            "serie temporali",
            "quesito 958"
        ],
        "answer": "Nell'ambito della dinamica dei sistemi complessi, l'econofisica studia le serie temporali dei mercati finanziari sfruttando concetti frattali e caotici.",
        "url": "https://www.treccani.it/enciclopedia/caos_(Enciclopedia-del-Novecento)/"
    },
    {
        "id": 959,
        "keywords": [
            "digital art",
            "arte elettronica",
            "estetica del caos",
            "quesito 959"
        ],
        "answer": "Dal punto di vista dell'analisi matematica, la bellezza degli attrattori e dei frattali ha ispirato nuove correnti artistiche di Digital Art.",
        "url": "https://www.treccani.it/enciclopedia/caos_(Enciclopedia-del-Novecento)/"
    },
    {
        "id": 960,
        "keywords": [
            "ubiquita del caos",
            "paradigma scientifico",
            "transdisciplinarita",
            "quesito 960"
        ],
        "answer": "Secondo la descrizione del capitolo, l'ubiquità del caos descrive la presenza universale di comportamenti imprevedibili nella natura.",
        "url": "https://www.treccani.it/enciclopedia/caos_(Enciclopedia-del-Novecento)/"
    },
    {
        "id": 961,
        "keywords": [
            "meccanicismo",
            "orologio perfetto",
            "newton",
            "quesito 961"
        ],
        "answer": "Da Newton in poi, la visione dominante rappresentava il mondo come un meccanismo perfetto, analogo a un orologio di precisione.",
        "url": "https://www.treccani.it/enciclopedia/meccanicismo_(Enciclopedia-Italiana)/"
    },
    {
        "id": 962,
        "keywords": [
            "meccanica sperimentale",
            "fine XVII secolo",
            "isaac newton",
            "quesito 962"
        ],
        "answer": "In relazione alla teoria del caos, la meccanica come scienza sperimentale è nata alla fine del XVII secolo con Isaac Newton.",
        "url": "https://www.treccani.it/enciclopedia/meccanicismo_(Enciclopedia-Italiana)/"
    },
    {
        "id": 963,
        "keywords": [
            "eulero",
            "lagrange",
            "laplace",
            "quesito 963"
        ],
        "answer": "Nell'ambito della dinamica dei sistemi complessi, nel XVIII secolo la meccanica classica fu perfezionata dai lavori di Eulero, Lagrange e Laplace.",
        "url": "https://www.treccani.it/enciclopedia/meccanicismo_(Enciclopedia-Italiana)/"
    },
    {
        "id": 964,
        "keywords": [
            "calcolo differenziale",
            "calcolo integrale",
            "leibniz",
            "quesito 964"
        ],
        "answer": "Dal punto di vista dell'analisi matematica, il calcolo differenziale e integrale fu sviluppato contemporaneamente da Newton e Leibniz.",
        "url": "https://www.treccani.it/enciclopedia/meccanicismo_(Enciclopedia-Italiana)/"
    },
    {
        "id": 965,
        "keywords": [
            "meccanica celeste",
            "leggi di newton",
            "evidenze sperimentali",
            "quesito 965"
        ],
        "answer": "Secondo la descrizione del capitolo, la meccanica celeste fornì un quadro teorico unificante supportato da evidenze sperimentali.",
        "url": "https://www.treccani.it/enciclopedia/meccanicismo_(Enciclopedia-Italiana)/"
    },
    {
        "id": 966,
        "keywords": [
            "determinismo causale",
            "causalita",
            "catena di eventi",
            "quesito 966"
        ],
        "answer": "Il determinismo causale stabilisce che ogni evento accada all'interno di una catena causale.",
        "url": "https://www.treccani.it/enciclopedia/meccanicismo_(Enciclopedia-Italiana)/"
    },
    {
        "id": 967,
        "keywords": [
            "configurazioni iniziali",
            "previsione teorica",
            "stato futuro",
            "quesito 967"
        ],
        "answer": "In relazione alla teoria del caos, conoscendo cause e configurazioni iniziali, il determinismo teorizza la previsione degli eventi futuri.",
        "url": "https://www.treccani.it/enciclopedia/meccanicismo_(Enciclopedia-Italiana)/"
    },
    {
        "id": 968,
        "keywords": [
            "laplace",
            "demone di laplace",
            "determinismo assoluto",
            "quesito 968"
        ],
        "answer": "Nell'ambito della dinamica dei sistemi complessi, laplace concepiva il determinismo come la capacità di calcolare con precisione lo stato futuro conoscendo lo stato attuale.",
        "url": "https://www.treccani.it/enciclopedia/meccanicismo_(Enciclopedia-Italiana)/"
    },
    {
        "id": 969,
        "keywords": [
            "darwin",
            "evoluzione",
            "XIX secolo",
            "quesito 969"
        ],
        "answer": "Dal punto di vista dell'analisi matematica, nel XIX secolo gli studi di Darwin sull'evoluzione misero in discussione il riduzionismo meccanicista.",
        "url": "https://www.treccani.it/enciclopedia/entropia_(Enciclopedia-della-Scienza-e-della-Tecnica)/"
    },
    {
        "id": 970,
        "keywords": [
            "termodinamica",
            "entropia",
            "irreversibilita",
            "quesito 970"
        ],
        "answer": "Secondo la descrizione del capitolo, l'introduzione dell'entropia e dell'irreversibilità evidenziò i limiti della spiegazione meccanicista.",
        "url": "https://www.treccani.it/enciclopedia/entropia_(Enciclopedia-della-Scienza-e-della-Tecnica)/"
    },
    {
        "id": 971,
        "keywords": [
            "trasformazioni di energia",
            "fenomeni biologici",
            "limiti newtoniani",
            "quesito 971"
        ],
        "answer": "La termodinamica dimostrò che la meccanica classica era deficitaria nei fenomeni legati alla vita.",
        "url": "https://www.treccani.it/enciclopedia/entropia_(Enciclopedia-della-Scienza-e-della-Tecnica)/"
    },
    {
        "id": 972,
        "keywords": [
            "meccanica quantistica",
            "infinitamente piccolo",
            "XX secolo",
            "quesito 972"
        ],
        "answer": "In relazione alla teoria del caos, la meccanica quantistica è una teoria del XX secolo rivolta allo studio dell'infinitamente piccolo.",
        "url": "https://www.treccani.it/enciclopedia/entropia_(Enciclopedia-della-Scienza-e-della-Tecnica)/"
    },
    {
        "id": 973,
        "keywords": [
            "relativita generale",
            "infinitamente grande",
            "einstein",
            "quesito 973"
        ],
        "answer": "Nell'ambito della dinamica dei sistemi complessi, la relatività generale descrive la gravità e i fenomeni dell'infinitamente grande.",
        "url": "https://www.treccani.it/enciclopedia/entropia_(Enciclopedia-della-Scienza-e-della-Tecnica)/"
    },
    {
        "id": 974,
        "keywords": [
            "validita newtoniana",
            "fenomeni osservabili",
            "scala macroscopica",
            "quesito 974"
        ],
        "answer": "Dal punto di vista dell'analisi matematica, fino agli anni '60 la meccanica newtoniana rimase un'ottima descrizione dei fenomeni osservabili.",
        "url": "https://www.treccani.it/enciclopedia/entropia_(Enciclopedia-della-Scienza-e-della-Tecnica)/"
    },
    {
        "id": 975,
        "keywords": [
            "caos grecia",
            "significato antico",
            "disordine",
            "quesito 975"
        ],
        "answer": "Secondo la descrizione del capitolo, in antica Grecia il termine caos indicava disordine, confusione, scompiglio e agitazione.",
        "url": "https://www.treccani.it/enciclopedia/caos_(Enciclopedia-del-Novecento)/"
    },
    {
        "id": 976,
        "keywords": [
            "cosmos",
            "ordine",
            "antitesi caos",
            "quesito 976"
        ],
        "answer": "Il termine greco cosmos significa ordine ed era usato in antitesi al termine caos.",
        "url": "https://www.treccani.it/enciclopedia/caos_(Enciclopedia-del-Novecento)/"
    },
    {
        "id": 977,
        "keywords": [
            "limite cognitivo",
            "comprensione",
            "orizzonte oscuro",
            "quesito 977"
        ],
        "answer": "In relazione alla teoria del caos, in termini cognitivi il caos identifica un'incapacità generale di comprensione e un limite visivo.",
        "url": "https://www.treccani.it/enciclopedia/caos_(Enciclopedia-del-Novecento)/"
    },
    {
        "id": 978,
        "keywords": [
            "capovolgimento semantico",
            "scienza contemporanea",
            "caos deterministico",
            "quesito 978"
        ],
        "answer": "Nell'ambito della dinamica dei sistemi complessi, la scienza contemporanea ha ribaltato la semantica del caos riferendolo a dinamiche deterministiche non analitiche.",
        "url": "https://www.treccani.it/enciclopedia/caos_(Enciclopedia-del-Novecento)/"
    },
    {
        "id": 979,
        "keywords": [
            "settori del caos",
            "fenomeni sociali",
            "economia",
            "quesito 979"
        ],
        "answer": "Dal punto di vista dell'analisi matematica, la teoria del caos analizza fenomeni imprevedibili in ambito fisico, economico, sociale e comportamentale.",
        "url": "https://www.treccani.it/enciclopedia/caos_(Enciclopedia-del-Novecento)/"
    },
    {
        "id": 980,
        "keywords": [
            "edward lorenz",
            "mit cambridge",
            "meteorologia",
            "quesito 980"
        ],
        "answer": "Secondo la descrizione del capitolo, edward H. Lorenz era un meteorologo del MIT di Cambridge che sviluppò modelli matematici per il meteo.",
        "url": "https://www.treccani.it/enciclopedia/attrattore-di-lorenz_(Enciclopedia-della-Matematica)/"
    },
    {
        "id": 981,
        "keywords": [
            "equazioni differenziali",
            "tre equazioni",
            "non linearita",
            "quesito 981"
        ],
        "answer": "Il modello atmosferico di Lorenz era basato su tre equazioni differenziali ordinarie non lineari.",
        "url": "https://www.treccani.it/enciclopedia/attrattore-di-lorenz_(Enciclopedia-della-Matematica)/"
    },
    {
        "id": 982,
        "keywords": [
            "integrazione numerica",
            "computer lorenz",
            "anni 60",
            "quesito 982"
        ],
        "answer": "In relazione alla teoria del caos, lorenz utilizzò il computer per integrare numericamente equazioni non lineari prive di soluzione analitica.",
        "url": "https://www.treccani.it/enciclopedia/attrattore-di-lorenz_(Enciclopedia-della-Matematica)/"
    },
    {
        "id": 983,
        "keywords": [
            "analisi numerica",
            "processi iterativi",
            "algoritmi",
            "quesito 983"
        ],
        "answer": "Nell'ambito della dinamica dei sistemi complessi, l'analisi numerica sviluppa algoritmi e metodi iterativi per approssimare problemi matematici complessi.",
        "url": "https://www.treccani.it/enciclopedia/attrattore-di-lorenz_(Enciclopedia-della-Matematica)/"
    },
    {
        "id": 984,
        "keywords": [
            "arrotondamento decimali",
            "da 6 a 3 cifre",
            "scarto minimo",
            "quesito 984"
        ],
        "answer": "Dal punto di vista dell'analisi matematica, replicando una simulazione, Lorenz approssimò i dati da sei a tre cifre decimali alterando i risultati.",
        "url": "https://www.treccani.it/enciclopedia/attrattore-di-lorenz_(Enciclopedia-della-Matematica)/"
    },
    {
        "id": 985,
        "keywords": [
            "risultati divergenti",
            "esplosione dell'errore",
            "ordini di grandezza",
            "quesito 985"
        ],
        "answer": "Secondo la descrizione del capitolo, l'approssimazione decimale generò previsioni divergenti per vari ordini di grandezza.",
        "url": "https://www.treccani.it/enciclopedia/attrattore-di-lorenz_(Enciclopedia-della-Matematica)/"
    },
    {
        "id": 986,
        "keywords": [
            "riduzionismo newtoniano",
            "scala di grandezza",
            "dettagli trascurabili",
            "quesito 986"
        ],
        "answer": "Il riduzionismo newtoniano assume che i fenomeni su scala inferiore abbiano effetti trascurabili.",
        "url": "https://www.treccani.it/enciclopedia/attrattore-di-lorenz_(Enciclopedia-della-Matematica)/"
    },
    {
        "id": 987,
        "keywords": [
            "margine d'errore",
            "errore sperimentale",
            "propagazione",
            "quesito 987"
        ],
        "answer": "In relazione alla teoria del caos, nel modello newtoniano l'errore è controllabile, mentre nei sistemi caotici si propaga esplosivamente.",
        "url": "https://www.treccani.it/enciclopedia/attrattore-di-lorenz_(Enciclopedia-della-Matematica)/"
    },
    {
        "id": 988,
        "keywords": [
            "dipendenza sensibile",
            "condizioni iniziali",
            "limite previsioni",
            "quesito 988"
        ],
        "answer": "Nell'ambito della dinamica dei sistemi complessi, la dipendenza sensibile dalle condizioni iniziali rende impossibile la previsione a lungo termine.",
        "url": "https://www.treccani.it/enciclopedia/attrattore-di-lorenz_(Enciclopedia-della-Matematica)/"
    },
    {
        "id": 989,
        "keywords": [
            "effetto farfalla",
            "metafora brasiliana",
            "tifone florida",
            "quesito 989"
        ],
        "answer": "Dal punto di vista dell'analisi matematica, l'effetto farfalla esprime l'idea che il battito d'ali di una farfalla in Brasile produca un tifone in Florida.",
        "url": "https://www.treccani.it/enciclopedia/attrattore-di-lorenz_(Enciclopedia-della-Matematica)/"
    },
    {
        "id": 990,
        "keywords": [
            "conferenza aaas 1979",
            "uragano texas",
            "relazione lorenz",
            "quesito 990"
        ],
        "answer": "Secondo la descrizione del capitolo, nel 1979 alla conferenza AAAS gli allievi di Lorenz diffusero la metafora dell'uragano nel Texas.",
        "url": "https://www.treccani.it/enciclopedia/attrattore-di-lorenz_(Enciclopedia-della-Matematica)/"
    },
    {
        "id": 991,
        "keywords": [
            "cinema e cultura",
            "jurassic park",
            "sliding doors",
            "quesito 991"
        ],
        "answer": "L'effetto farfalla è citato in film celebri tra cui Jurassic Park, Sliding Doors e The Oxford Murders.",
        "url": "https://www.treccani.it/enciclopedia/attrattore-di-lorenz_(Enciclopedia-della-Matematica)/"
    },
    {
        "id": 992,
        "keywords": [
            "sistema dinamico",
            "variabili nel tempo",
            "spazio astratto",
            "quesito 992"
        ],
        "answer": "In relazione alla teoria del caos, un sistema dinamico è rappresentato da una serie di grandezze che variano nel tempo.",
        "url": "https://www.liceopalmieri.edu.it/LaboratorioStem/Attrattori/"
    },
    {
        "id": 993,
        "keywords": [
            "spazio delle fasi",
            "dimensioni",
            "traiettoria",
            "quesito 993"
        ],
        "answer": "Nell'ambito della dinamica dei sistemi complessi, lo spazio delle fasi ha una dimensione pari al numero di variabili libere del sistema dinamico.",
        "url": "https://www.liceopalmieri.edu.it/LaboratorioStem/Attrattori/"
    },
    {
        "id": 994,
        "keywords": [
            "piano delle fasi",
            "pendolo semplice",
            "due dimensioni",
            "quesito 994"
        ],
        "answer": "Dal punto di vista dell'analisi matematica, il pendolo semplice è descritto in un piano delle fasi bidimensionale (angolo e velocità).",
        "url": "https://www.liceopalmieri.edu.it/LaboratorioStem/Attrattori/"
    },
    {
        "id": 995,
        "keywords": [
            "doppio pendolo",
            "quattro dimensioni",
            "iperspazio",
            "quesito 995"
        ],
        "answer": "Secondo la descrizione del capitolo, il doppio pendolo necessita di uno spazio delle fasi a quattro dimensioni per rappresentare le sue orbite.",
        "url": "https://www.liceopalmieri.edu.it/LaboratorioStem/Attrattori/"
    },
    {
        "id": 996,
        "keywords": [
            "punto fisso",
            "attrattore punto",
            "attrito",
            "quesito 996"
        ],
        "answer": "Il punto fisso è un attrattore che stabilizza il sistema dinamico in uno stato di equilibrio stazionario.",
        "url": "https://www.liceopalmieri.edu.it/LaboratorioStem/Attrattori/"
    },
    {
        "id": 997,
        "keywords": [
            "ciclo limite",
            "circuito van der pol",
            "oscillatore",
            "quesito 997"
        ],
        "answer": "In relazione alla teoria del caos, un ciclo limite è un attrattore rappresentato da una curva chiusa percorsa in modo periodico.",
        "url": "https://www.liceopalmieri.edu.it/LaboratorioStem/Attrattori/"
    },
    {
        "id": 998,
        "keywords": [
            "attrattore strano",
            "definizione",
            "volume finito",
            "quesito 998"
        ],
        "answer": "Nell'ambito della dinamica dei sistemi complessi, l'attrattore strano è una regione finita dello spazio delle fasi in cui le traiettorie non si intersecano mai.",
        "url": "https://www.liceopalmieri.edu.it/LaboratorioStem/Attrattori/"
    },
    {
        "id": 999,
        "keywords": [
            "farfalla di lorenz",
            "ali sfasate",
            "corpo centrale",
            "quesito 999"
        ],
        "answer": "Dal punto di vista dell'analisi matematica, l'attrattore di Lorenz ha la forma caratteristica di una farfalla con due ali disposte su piani sfasati.",
        "url": "https://www.liceopalmieri.edu.it/LaboratorioStem/Attrattori/"
    },
    {
        "id": 1000,
        "keywords": [
            "discretizzazione",
            "rappresentazione a punti",
            "passo temporale",
            "quesito 1000"
        ],
        "answer": "Secondo la descrizione del capitolo, in simulazione informatica l'attrattore appare come una sequenza discreta di punti nel tempo.",
        "url": "https://www.liceopalmieri.edu.it/LaboratorioStem/Attrattori/"
    }
];

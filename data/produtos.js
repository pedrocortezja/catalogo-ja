/* =====================================================================
   CATÁLOGO JA SAÚDE ANIMAL — DADOS DOS PRODUTOS
   =====================================================================

   COMO ADICIONAR UM PRODUTO
   Copie uma linha e preencha:

     { id: "nome-do-produto", nome: "Nome do Produto", categoria: "antimicrobianos",
       descricao: "Descrição curta.", link: "https://..." },

   - id         : sem espaço, sem acento, minúsculo. É o nome da imagem!
                  Ex.: id "cetofur"  ->  img/produtos/cetofur.jpg
                  (também funciona .png, .webp ou .jpeg)
   - categoria  : use um dos ids da lista CATEGORIAS logo abaixo.
   - link       : link do OneDrive / Google Drive com o folheto técnico.
                  Se deixar vazio (""), o card aparece como "Folheto em breve"
                  e não é clicável.
   - imagem     : (opcional) só use se a imagem tiver outro nome.
                  Ex.: imagem: "foto-especial.png"

   DICA GOOGLE DRIVE: para o PDF baixar direto, use o link no formato
     https://drive.google.com/uc?export=download&id=ID_DO_ARQUIVO
   Se preferir abrir a visualização, pode usar o link normal de compartilhar.
   ===================================================================== */

window.JA_CATALOGO = {

  /* Categorias (mesma ordem do site jasaudeanimal.com.br).
     Categoria sem nenhum produto fica escondida automaticamente. */
  categorias: [
    { id: "especialidades",   nome: "Especialidades" },
    { id: "anestesicos",      nome: "Anestésicos" },
    { id: "anti-inflamatorios", nome: "Anti-inflamatórios" },
    { id: "antimicrobianos",  nome: "Antimicrobianos" },
    { id: "antiparasitarios", nome: "Antiparasitários" },
    { id: "fortificantes",    nome: "Fortificantes" },
    { id: "intramamarios",    nome: "Intramamários" },
    { id: "reproducao",       nome: "Reprodução" }
  ],

  produtos: [

    /* ---------- Anestésicos ---------- */
    { id: "bloc",      nome: "BLOC",      categoria: "anestesicos", descricao: "Anestesia local potencializada.", link: "" },
    { id: "dettovet",  nome: "Dettovet",  categoria: "anestesicos", descricao: "Sedativo, miorrelaxante e analgésico.", link: "" },
    { id: "egg-ppu",   nome: "EGG PPU",   categoria: "anestesicos", descricao: "Único pronto para uso do mercado.", link: "" },
    { id: "equisedan", nome: "Equisedan", categoria: "anestesicos", descricao: "Sedação imediata à base de xilazina.", link: "" },
    { id: "lidocol",   nome: "Lidocol",   categoria: "anestesicos", descricao: "Anestesia local sem sedação e vasoconstrição.", link: "" },

    /* ---------- Anti-inflamatórios ---------- */
    { id: "dexa-ja",       nome: "Dexa-JA",       categoria: "anti-inflamatorios", descricao: "O mais potente anti-inflamatório.", link: "" },
    { id: "diclofenaco-ja", nome: "Diclofenaco JA", categoria: "anti-inflamatorios", descricao: "Alta eficácia anti-inflamatória.", link: "" },
    { id: "flumax",        nome: "Flumax®",       categoria: "anti-inflamatorios", descricao: "Anti-inflamatório de alta performance.", link: "https://jasaudeanimal-my.sharepoint.com/:b:/g/personal/pedrohenrique_cortez_jasaudeanimal_com_br/IQCgUbgKj8fwSpuurYXCPppqAYCrbAN5rhDGiudFYw0miRk?e=Ittk6A" },
    { id: "prador",        nome: "Prador®",       categoria: "anti-inflamatorios", descricao: "Sem dor, sem inflamação e sem gastrite.", link: "" },
    { id: "vetprofen",     nome: "Vetprofen",     categoria: "anti-inflamatorios", descricao: "Ação rápida, recuperação eficiente.", link: "" },

    /* ---------- Antimicrobianos ---------- */
    { id: "agrothal",     nome: "Agrothal",     categoria: "antimicrobianos", descricao: "Antibiótico com anti-inflamatório não hormonal.", link: "" },
    { id: "amox-la",      nome: "Amox L.A",     categoria: "antimicrobianos", descricao: "Longa ação e alta seringabilidade.", link: "" },
    { id: "benzafort-12-milhoes", nome: "Benzafort® 12 Milhões", categoria: "antimicrobianos", descricao: "Antibiótico de extra longa ação.", link: "" },
    { id: "cetofur",      nome: "Cetofur®",     categoria: "antimicrobianos", descricao: "A melhor escolha para seu rebanho leiteiro!", link: "" },
    { id: "cursotril",    nome: "Cursotril",    categoria: "antimicrobianos", descricao: "Dupla ação no tratamento das diarreias.", link: "https://jasaudeanimal-my.sharepoint.com/:b:/g/personal/pedrohenrique_cortez_jasaudeanimal_com_br/IQAeMPRAmFcSRpbH49jtm9ruAaCAmw1ZQ-MqqgJdFCF_OF8?e=aJlk9V" },
    { id: "diclopen-5-milhoes",  nome: "Diclopen 5 milhões®",  categoria: "antimicrobianos", descricao: "A penicilina 5 milhões de rápida ação e alta eficácia.", link: "" },
    { id: "diclopen-10-milhoes", nome: "Diclopen 10 milhões®", categoria: "antimicrobianos", descricao: "A penicilina 10 milhões de rápida ação e alta eficácia.", link: "" },
    { id: "diclotril",    nome: "Diclotril®",   categoria: "antimicrobianos", descricao: "Antimicrobiano de rápida ação e amplo espectro.", link: "" },
    { id: "enro10",       nome: "Enro 10",      categoria: "antimicrobianos", descricao: "Eficácia mais economia nota 10!", link: "" },
    { id: "gentopen",     nome: "Gentopen®",    categoria: "antimicrobianos", descricao: "Associação inovadora sinérgica de ação imediata e alta eficácia.", link: "" },
    { id: "paracurso",    nome: "Paracurso",    categoria: "antimicrobianos", descricao: "Solução para diarreia em bezerros.", link: "" },
    { id: "pro-bezerro",  nome: "Pró-Bezerro®", categoria: "antimicrobianos", descricao: "Proteção máxima para o recém-nascido.", link: "" },
    { id: "prontostrep",  nome: "Prontostrep®", categoria: "antimicrobianos", descricao: "A única estreptomicina PPU do mercado.", link: "" },
    { id: "tormicina-100", nome: "Tormicina 100", categoria: "antimicrobianos", descricao: "Antibiótico de amplo espectro.", link: "" },
    { id: "tormicina-la", nome: "Tormicina LA", categoria: "antimicrobianos", descricao: "Antibiótico de amplo espectro com ação prolongada.", link: "" },
    { id: "vetipen-la",   nome: "Vetipen LA",   categoria: "antimicrobianos", descricao: "Penicilina PPU de longa ação.", link: "" },
    { id: "vetsulfa",     nome: "Vetsulfa",     categoria: "antimicrobianos", descricao: "Único sulfametoxazol associado a anti-inflamatório.", link: "" },

    /* ---------- Antiparasitários ---------- */
    { id: "albendathor-10",       nome: "Albendathor 10",       categoria: "antiparasitarios", descricao: "Anti-helmíntico oral de amplo espectro.", link: "" },
    { id: "albendathor-injetavel", nome: "Albendathor Injetável", categoria: "antiparasitarios", descricao: "Antiparasitário de amplo espectro.", link: "" },
    { id: "doragold",     nome: "Doragold",     categoria: "antiparasitarios", descricao: "Eficácia que vale ouro!", link: "https://jasaudeanimal-my.sharepoint.com/:b:/g/personal/pedrohenrique_cortez_jasaudeanimal_com_br/IQC9YuAcj4kITLEG2hh5nFn3AQWay4lJLJA_DXCOgaen6GY?e=OfqVtf" },
    { id: "duplatak",     nome: "Duplatak",     categoria: "antiparasitarios", descricao: "Dupla ação no ataque aos parasitas!", link: "https://jasaudeanimal-my.sharepoint.com/:b:/g/personal/pedrohenrique_cortez_jasaudeanimal_com_br/IQArV97VEDElQI2czhNuveo1ATGi7z_LGUxFSy9mcL5ldDc?e=MpRpdN" },
    { id: "eprigold",     nome: "Eprigold",     categoria: "antiparasitarios", descricao: "O endectocida à base de eprinomectina da JA.", link: "" },
    { id: "equijet",      nome: "Equijet®",     categoria: "antiparasitarios", descricao: "O fim das verminoses.", link: "" },
    { id: "frigoboi-facilite", nome: "Frigoboi® Facilite", categoria: "antiparasitarios", descricao: "Alta eficácia e praticidade no manejo.", link: "" },
    { id: "frigoboi-producao", nome: "Frigoboi® Produção", categoria: "antiparasitarios", descricao: "Vermífugo injetável de alta eficácia.", link: "" },
    { id: "ganavet-plus", nome: "Ganavet® Plus", categoria: "antiparasitarios", descricao: "Babesicida associado a antitérmico.", link: "" },
    { id: "imidovet",     nome: "Imidovet",     categoria: "antiparasitarios", descricao: "Alta eficácia hemoparasiticida.", link: "" },
    { id: "insemax-pour-on", nome: "Insemax® Pour-on", categoria: "antiparasitarios", descricao: "Máxima eficácia contra carrapatos, moscas e bernes.", link: "" },
    { id: "iverequi",     nome: "IverEqui",     categoria: "antiparasitarios", descricao: "Pasta antiparasitária de amplo espectro para equinos.", link: "" },
    { id: "ivermectina-1-ja", nome: "Ivermectina 1% JA", categoria: "antiparasitarios", descricao: "Amplo espectro no combate aos parasitas.", link: "" },
    { id: "longamectina-premium-35", nome: "Longamectina® Premium 3,5%", categoria: "antiparasitarios", descricao: "Alta concentração e longa ação.", link: "https://jasaudeanimal-my.sharepoint.com/:b:/g/personal/pedrohenrique_cortez_jasaudeanimal_com_br/IQBPImaoH8IlS5-ZydywpFzYATS6tqjpWDQYsLtLSHVCiD8?e=wWvO31" },
    { id: "proverme",     nome: "Proverme",     categoria: "antiparasitarios", descricao: "Vermífugo solúvel para animais.", link: "" },
    { id: "proverme-injetavel", nome: "Proverme Injetável", categoria: "antiparasitarios", descricao: "Vermífugo + imunoestimulante.", link: "https://jasaudeanimal-my.sharepoint.com/:b:/g/personal/pedrohenrique_cortez_jasaudeanimal_com_br/IQAQFIjkVp75R7DZIMggBmplAVMUDBNtGD9R4HFuDVGKD00?e=7MG9mc" },
    { id: "rambo-pulverizacao", nome: "Rambo Pulverização", categoria: "antiparasitarios", descricao: "Certeiro no combate aos parasitas.", link: "" },
    { id: "trifon-50",    nome: "Trifon 50",    categoria: "antiparasitarios", descricao: "Parasiticida de ação sistêmica.", link: "" },

    /* ---------- Fortificantes ---------- */
    { id: "adethor",      nome: "Adethor",      categoria: "fortificantes", descricao: "Solução vitamínica em alta concentração.", link: "" },
    { id: "ative-ade",    nome: "Ative A.D.E",  categoria: "fortificantes", descricao: "Ative mais produtividade!", link: "" },
    { id: "calfomag",     nome: "Calfomag",     categoria: "fortificantes", descricao: "Repositor mineral e energético.", link: "" },
    { id: "catofos-b12",  nome: "Catofós® B12", categoria: "fortificantes", descricao: "Alto desempenho energético.", link: "" },
    { id: "ferrodex",     nome: "Ferrodex",     categoria: "fortificantes", descricao: "Solução de ferro dextrano.", link: "" },
    { id: "ferrodex-b12", nome: "Ferrodex B12", categoria: "fortificantes", descricao: "Solução de ferro dextrano com vitamina B12.", link: "" },
    { id: "glicoton-b12", nome: "Glicoton B12", categoria: "fortificantes", descricao: "Alta eficácia energética.", link: "" },
    { id: "hidralac",     nome: "Hidralac",     categoria: "fortificantes", descricao: "Repositor hidroeletrolítico e energético.", link: "" },
    { id: "probacter-bezerro", nome: "Probacter Bezerro", categoria: "fortificantes", descricao: "Suplemento vitamínico enriquecido com probióticos.", link: "" },
    { id: "probacter-bov", nome: "Probacter Bov", categoria: "fortificantes", descricao: "Suplemento vitamínico enriquecido com probióticos.", link: "" },
    { id: "turbocalcio",  nome: "Turbocálcio",  categoria: "fortificantes", descricao: "Repositor de minerais, energético e protetor hepático.", link: "" },
    { id: "vitagold-avicola",    nome: "Vitagold Avícola",    categoria: "fortificantes", descricao: "Suplemento vitamínico para aves.", link: "" },
    { id: "vitagold-potenciado", nome: "Vitagold Potenciado", categoria: "fortificantes", descricao: "Suplemento vitamínico oral para alimentação animal.", link: "" },

    /* ---------- Intramamários ---------- */
    { id: "mastclin",           nome: "Mastclin®",           categoria: "intramamarios", descricao: "Potente ação bactericida à base de cefalosporina.", link: "" },
    { id: "mastite-clinica-vl", nome: "Mastite Clínica VL®", categoria: "intramamarios", descricao: "O antimastítico completo.", link: "https://jasaudeanimal-my.sharepoint.com/:b:/g/personal/pedrohenrique_cortez_jasaudeanimal_com_br/IQBs4jBdmrq-TLQgfsaAEwWFASBDBIZn4l25Xgyb98sEb3c?e=o6I4fa" },

    /* ---------- Reprodução ---------- */
    { id: "benzogest", nome: "Benzogest®", categoria: "reproducao", descricao: "Melhore seus índices reprodutivos.", link: "" },
    { id: "cioton",    nome: "Cioton®",    categoria: "reproducao", descricao: "Agente luteolítico injetável.", link: "" },
    { id: "lactocina", nome: "Lactocina®", categoria: "reproducao", descricao: "Mais leite. Mais lucro.", link: "" },
    { id: "metrifim",  nome: "Metrifim®",  categoria: "reproducao", descricao: "O fim da endometrite crônica.", link: "" },
    { id: "profertil", nome: "Profertil",  categoria: "reproducao", descricao: "Gonadorelina liofilizada.", link: "" },
    { id: "prolacton", nome: "Prolacton",  categoria: "reproducao", descricao: "Ocitocina injetável.", link: "" }

  ]
};

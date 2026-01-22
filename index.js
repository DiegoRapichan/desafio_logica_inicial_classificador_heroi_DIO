let cadastroCampeao = [
  { nome: "Ezreal", xp: 10002 },
  { nome: "Ashe", xp: 8002 },
  { nome: "Kaisa", xp: 5002 },
  { nome: "Jinx", xp: 10002 },
  { nome: "Twitch", xp: 9200 },
  { nome: "Draven", xp: 3000 },
  { nome: "Varus", xp: 1500 },
  { nome: "Teemo", xp: 500 },
  { nome: "Xayah", xp: 6003 },
  { nome: "Aphelius", xp: 7400 },
];

// Resolução 1

function verificaElo(nomeCampeao) {
  const campeao = cadastroCampeao.find(
    (h) => h.nome.toLowerCase() === nomeCampeao.toLowerCase(),
  );
  let elo;
  if (campeao) {
    if (campeao.xp <= 1000) elo = "Ferro";
    else if (campeao.xp > 1000 && campeao.xp <= 2000) elo = "Bronze";
    else if (campeao.xp > 2000 && campeao.xp <= 5000) elo = "Prata";
    else if (campeao.xp > 5000 && campeao.xp <= 7000) elo = "Ouro";
    else if (campeao.xp > 7000 && campeao.xp <= 8000) elo = "Platina";
    else if (campeao.xp > 8000 && campeao.xp <= 9000) elo = "Diamante";
    else if (campeao.xp > 9000 && campeao.xp <= 10000) elo = "Mestre";
    else if (campeao.xp > 10000) elo = "Challenger";
    console.log(
      `O campeão ${nomeCampeao} com xp de ${campeao.xp} está no elo: ${elo}!!!`,
    );
  } else {
    console.log(
      `Campeão ${nomeCampeao} digitado não foi encontrado em nosso sistema de Elos.`,
    );
  }
}

verificaElo("Ezreal");
verificaElo("Ashe");
verificaElo("Kaisa");
verificaElo("Jinx");
verificaElo("Twitch");
verificaElo("Draven");
verificaElo("Varus");
verificaElo("Teemo");
verificaElo("Xayah");
verificaElo("Aphelius");
verificaElo("Ziggs");

console.log("-----------------------------------------------------");
// Resolução 2

const tabelaElo = [
  { max: 1000, elo: "Ferro" },
  { max: 2000, elo: "Bronze" },
  { max: 5000, elo: "Prata" },
  { max: 7000, elo: "Ouro" },
  { max: 8000, elo: "Platina" },
  { max: 9000, elo: "Diamante" },
  { max: 10000, elo: "Mestre" },
  { max: Infinity, elo: "Challenger" },
];

function calcularElo(xp) {
  return tabelaElo.find((faixa) => xp <= faixa.max).elo;
}

function verificaElo2(nomeCampeao) {
  const campeao = cadastroCampeao.find(
    (c) => c.nome.toLowerCase() === nomeCampeao.toLowerCase(),
  );

  if (!campeao) {
    console.log(`Campeão ${nomeCampeao} não encontrado.`);
    return;
  }

  const elo = calcularElo(campeao.xp);

  console.log(
    `O campeão ${campeao.nome} com XP de ${campeao.xp} está no elo: ${elo}`,
  );
}

verificaElo2("Ezreal");
verificaElo2("Ashe");
verificaElo2("Kaisa");
verificaElo2("Jinx");
verificaElo2("Twitch");
verificaElo2("Draven");
verificaElo2("Varus");
verificaElo2("Teemo");
verificaElo2("Xayah");
verificaElo2("Aphelius");
verificaElo2("Ziggs");

// # 2️⃣ Calculadora de partidas Rankeadas

// **O Que deve ser utilizado**
// - Variáveis
// - Operadores
// - Laços de repetição
// - Estruturas de decisões
// - Funções

// ## Objetivo:
// Crie uma função que recebe como parâmetro a quantidade de vitórias e derrotas de um jogador,
// depois disso retorne o resultado para uma variável, o saldo de Rankeadas deve ser feito através do calculo (vitórias - derrotas)

// Se vitórias for menor do que 10 = Ferro
// Se vitórias for entre 11 e 20 = Bronze
// Se vitórias for entre 21 e 50 = Prata
// Se vitórias for entre 51 e 80 = Ouro
// Se vitórias for entre 81 e 90 = Diamante
// Se vitórias for entre 91 e 100= Lendário
// Se vitórias for maior ou igual a 101 = Imortal

// ## Saída
// Ao final deve se exibir uma mensagem:
// "O Herói tem de saldo de **{saldoVitorias}** está no nível de **{nivel}**"

saldoVitorias = saldarVitorias(102, 1)

const definirNivel = 
[
    {min: 0, max: 10, nivel: "Ferro", mensagem: "Continue avançando!"},
    {min: 11, max: 20, nivel: "Bronze", mensagem: "Continue assim!" },
    {min: 21, max: 50, nivel: "Prata", mensagem: "Continue crescendo!"},
    {min: 51, max: 80, nivel: "Ouro", mensagem: "Mantenha o bom trabalho!"},
    {min: 81, max: 90, nivel: "Diamante", mensagem: "Continue aprimorando suas habilidades!"},
    {min: 91, max: 100, nivel: "Lendário", mensagem: "Continue buscando a perfeição!"},
    {min: 101, max: Infinity, nivel: "Imortal", mensagem: "Parabéns, você é o melhor!"}

]

const patente = parseInt(saldoVitorias)

const {nivel, mensagem } = definirNivel.find(({min, max}) => patente >= min && patente <= max)



function saldarVitorias(vitorias, derrotas)
{
    return vitorias - derrotas
}

console.log(`O Herói tem de saldo de ${saldoVitorias} vitorias, ele está no nível ${nivel}, ${mensagem}`)
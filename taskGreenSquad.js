//1 Montar um Objeto para cada filme que contenha
var filme1 = {
    nome: "Uma Nova Esperança", 
    ano: 1977,
    ordenacao: 1, 
    episodio: "IV",
    secao: "classica",
    imagem: "https://bit.ly/2TIetq4"    
}
var filme2 = {
    nome: "O Império Contra Ataca",
    ano: 1980,
    ordenacao: 2,
    episodio: "V",
    secao: "classica",
    imagem: "https://bit.ly/3gtXArQ"
}
var filme3 = {
    nome: "O retorno Jedi",
    ano: 1983,
    ordenacao: 3,
    episodio: "VI",
    secao: "classica",
    imagem: "https://bit.ly/3cNern8"
}
var filme4 = {
    nome: "A Ameaça Fantasma",
    ano: 1993,
    ordenacao: 4,
    episodio:"I",
    secao: "prequel",
    imagem: "https://bit.ly/3xsioFX"
}
var filme5 = {
    nome: "Ataque dos Clones",
    ano: 2002, 
    ordenacao: 5,
    episodio: "II",
    secao: "prequel",
    imagem: "https://bit.ly/3vur0ud" 
}
var filme6 = {
    nome: "A Vingança dos Sith",
    ano: 2005, 
    ordenacao: 6,
    episodio: "III",
    secao: "prequel",
    imagem:"https://bit.ly/35qWXZJ"
}
var filme7 = {
    nome: "Rogue One",
    ano: 2016, 
    ordenacao: 7,
    secao: "spinoff",
    imagem: "https://bit.ly/3guHP44"
}
var filme8 = {
    nome: "Han Solo",
    ano: 2018,
    ordenacao: 8,
    secao: "spinoff",
    imagem: "https://bit.ly/3iOIa34"
}
var filme9 = {
    nome: "The Mandalorian",
    ano: 2019,
    ordenacao: 9,
    secao: "spinoff",
    imagem: "https://bit.ly/3xuocim"
}
var filme10 = {
    nome: "O Despertar da Força",
    ano: 2015, 
    ordenacao: 10,
    episodio: "VII",
    secao: "nova",
    imagem: "https://bit.ly/3zsIzOJ"
}
var filme11 = {
    nome: "Os Últimos Jedi",
    ano: 2017,
    ordenacao: 11,
    episodio: "VIII",
    secao: "nova",
    imagem:"https://bit.ly/3xvaPhw"
}
var filme12 = {
    nome: "A Ascenção de Skywalker", 
    ano: 2019,
    ordenacao: 12,
    episodio: "IX",
    secao: "nova",
    imagem: "https://bit.ly/3vx59lS"
}


//2 Exibir Todos os Filmes na Sequência definida pelo Time
console.log(
    `________________________________________________________________________
    |                                                                        |
    |           > > > A MELHOR SEQUÊNCIA PARA ASSISTIR STAR WARS < < <       |
    |________________________________________________________________________|
    |__________________________POR ONDE COMEÇAR?_____________________________|
    |            PRIMEIRA TRILOGIA LANÇADA - C L Á S S I C A                 |
    |>> PRIMEIRO FILME:                                                      |
    |Título ___________|__________________________________ ${filme1.nome}|
    |Ano de Lançamento |________________________________________________ ${filme1.ano}|
    |Imagem(URL) ______|                               ${filme1.imagem}|
    |________________________________________________________________________|
    |>> SEGUNDO FILME:                                                       |
    |Título ___________|______________________________ ${filme2.nome}|
    |Ano de Lançamento |________________________________________________ ${filme2.ano}|
    |Imagem(URL) ______|                               ${filme2.imagem}|
    |________________________________________________________________________|
    |>> TERCEIRO FILME:                                                      |
    |Título ___________|______________________________________ ${filme3.nome}|
    |Ano de Lançamento |________________________________________________ ${filme3.ano}|
    |Imagem(URL) ______|                               ${filme3.imagem}|
    |________________________________________________________________________|
    |              SEGUNDA TRILOGIA LANÇADA - P R E Q U E L S                |
    |>> QUARTO FILME:                                                        |
    |Título ___________|___________________________________ ${filme4.nome}|
    |Ano de Lançamento |________________________________________________ ${filme4.ano}|
    |Imagem(URL) ______|                               ${filme4.imagem}|
    |________________________________________________________________________|
    |>> QUINTO FILME:                                                        |
    |Título ___________|___________________________________ ${filme5.nome}|
    |Ano de Lançamento |________________________________________________ ${filme5.ano}|
    |Imagem(URL) ______|                               ${filme5.imagem}|
    |________________________________________________________________________|
    |>> SEXTO FILME:                                                         |
    |Título ___________|_________________________________ ${filme6.nome}|
    |Ano de Lançamento |________________________________________________ ${filme6.ano}|
    |Imagem(URL) ______|                               ${filme6.imagem}|
    |________________________________________________________________________|
    |                         S P I N - O F F                                |
    |>> SÉTIMO FILME:                                                        |
    |Título ___________|___________________________________________ ${filme7.nome}|
    |Ano de Lançamento |________________________________________________ ${filme7.ano}|
    |Imagem(URL) ______|                               ${filme7.imagem}|
    |________________________________________________________________________|
    |>> OITAVO FILME:                                                        |
    |Título ___________|____________________________________________ ${filme8.nome}|
    |Ano de Lançamento |________________________________________________ ${filme8.ano}|
    |Imagem(URL) ______|                               ${filme8.imagem}|
    |________________________________________________________________________|
    |>> NONO FILME:                                                          |
    |Título ___________|_____________________________________ ${filme9.nome}|
    |Ano de Lançamento |________________________________________________ ${filme9.ano}|
    |Imagem(URL) ______|                               ${filme9.imagem}|
    |________________________________________________________________________|
    |        TERCEIRA TRILOGIA - Ú L T I M O S  L A N Ç A M E N T O S        |
    |>> DÉCIMO FILME:                                                        |
    |Título ___________|________________________________ ${filme10.nome}|
    |Ano de Lançamento |________________________________________________ ${filme10.ano}|
    |Imagem(URL) ______|                               ${filme10.imagem}|
    |________________________________________________________________________|
    |>> DÉCIMO PRIMEIRO FILME:                                               |
    |Título ___________|_____________________________________ ${filme11.nome}|
    |Ano de Lançamento |________________________________________________ ${filme11.ano}|
    |Imagem(URL) ______|                               ${filme11.imagem}|
    |________________________________________________________________________|
    |>> DÉCIMO SEGUNDO  FILME:                                               |
    |Título ___________|_____________________________ ${filme12.nome}|
    |Ano de Lançamento |________________________________________________ ${filme12.ano}|
    |Imagem(URL) ______|                               ${filme12.imagem}|
    |________________________________________________________________________|`)
 


//3 Exibir uma Seção para a Trilogia Clássica
console.log(filme1.nome)
console.log(filme1.ano)
console.log(filme1.imagem)

console.log(filme2.nome)
console.log(filme2.ano)
console.log(filme2.imagem)

console.log(filme3.nome)
console.log(filme3.ano)
console.log(filme3.imagem)

//4 Exibir uma Seção para a Trilogia Prequel


//5 Exibir uma Seção para a Nova Trilogia
console.log(`
 _________________________________________________________________________
|                              Nova Trilogia                              |
|                                                                         |
|Nome: ${filme10.nome}                                               |
|Ano de Lançamento: ${filme10.ano}                                                  |
|                                                                         |
|Nome: ${filme11.nome}                                                    |
|Ano de Lançamento: ${filme11.ano}                                                  |
|                                                                         |
|Nome: ${filme12.nome}                                            |
|Ano de Lançamento: ${filme12.ano}                                                  |
|_________________________________________________________________________|
`);

//6 Exibir uma Seção para os Filmes Spin Off
console.log(`

-------------------------------------------------------
-------------->>>>> Filmes:Spin Off <<<<<--------------
-------------------------------------------------------




||||||Filme 7|||||||


${filme7.nome},
Exibido em : ${filme7.ano},


||||||Filme 8|||||||

${filme8.nome},
Exibido em : ${filme8.ano},

||||||Filme 9|||||||

${filme9.nome},
Exibido em : ${filme9.ano},

------------------FIM!------------------

`)

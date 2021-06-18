// Objeto, Funções, Funções que Criam Objetos, Arrays, Arrays de Objeto, Map

movies = [
    {
        nome: "UMA NOVA ESPERANÇA", 
        ano: 1977,
        ordenacao: 'primeiro', 
        episodio: "IV",
        secao: "classica",
        imagem: "https://bit.ly/2TIetq4"    
    },
    {
        nome: "O IMPÉRIO CONTRA ATACA",
        ano: 1980,
        ordenacao: 'segundo',
        episodio: "V",
        secao: "classica",
        imagem: "https://bit.ly/3gtXArQ"
    },
    {
        nome: "O RETORNO JEDI",
        ano: 1983,
        ordenacao: 'terceiro',
        episodio: "VI",
        secao: "classica",
        imagem: "https://bit.ly/3cNern8"
    },
    {
        nome: "A AMEAÇA FANTASMA",
        ano: 1993,
        ordenacao: 'quarto',
        episodio:"I",
        secao: "prequel",
        imagem: "https://bit.ly/3xsioFX"
    },
    {
        nome: "ATAQUE DOS CLONES",
        ano: 2002, 
        ordenacao: 'quinto',
        episodio: "II",
        secao: "prequel",
        imagem: "https://bit.ly/3vur0ud" 
    },
    {
        nome: "A VINGANÇA DOS SITH",
        ano: 2005, 
        ordenacao: 'sexto',
        episodio: "III",
        secao: "prequel",
        imagem:"https://bit.ly/35qWXZJ"
    },
    {
        nome: "ROGUE ONE",
        ano: 2016, 
        ordenacao: 'sétimo',
        secao: "spinoff",
        imagem: "https://bit.ly/3guHP44"
    },
    {
        nome: "HAN SOLO",
        ano: 2018,
        ordenacao: 'oitavo',
        secao: "spinoff",
        imagem: "https://bit.ly/3iOIa34"
    },
    {
        nome: "O DESPERTAR DA FORÇA",
        ano: 2015, 
        ordenacao: 'nono',
        episodio: "VII",
        secao: "nova",
        imagem: "https://bit.ly/3zsIzOJ"
    },
    {
        nome: "OS ÚLTIMOS JEDI",
        ano: 2017,
        ordenacao: 'décimo',
        episodio: "VIII",
        secao: "nova",
        imagem:"https://bit.ly/3xvaPhw"
    },
    {
        nome: "A ASCENÇÃO DE SKYWALKER", 
        ano: 2019,
        ordenacao: 'décimo primeiro',
        episodio: "IX",
        secao: "nova",
        imagem: "https://bit.ly/3vx59lS"
    },
    {
        nome: "THE MANDALORIAN",
        ano: 2019,
        secao: "serie",
        temporada: 2,
        imagem: "https://bit.ly/3xuocim"
    }
]

function showAllMovies(filme){
    
    switch(filme.secao){
        
        case 'classica':
            
            console.log
            (`
            #######################################################
            
            "${filme.nome}" 

            Este foi o ${filme.ordenacao} filme da saga.
            Foi lançado em ${filme.ano} como o Episódio ${filme.episodio}
            e faz parte da TRILOGIA CLÁSSICA.

            Clique abaixo para ver o poster 
            ${filme.imagem}

            #######################################################
            `)
        break;

        case "prequel":
            console.log
            (`
            #######################################################
            
            "${filme.nome}" 

            Este foi o ${filme.ordenacao} filme da saga.
            Foi lançado em ${filme.ano} como o Episódio ${filme.episodio}
            e faz parte da TRILOGIA PREQUEL.
            
            Clique abaixo para ver o poster 
            ${filme.imagem}

            #######################################################
            `)
        break;

        case "spinoff":
            console.log
            (`
            #######################################################
            
            "${filme.nome}" 

            Este foi o ${filme.ordenacao} filme da saga.
            Foi lançado em ${filme.ano} como um SPIN OFF.
            
            Clique abaixo para ver o poster 
            ${filme.imagem}

            #######################################################
            `)
        break;

        case "nova":
            console.log
            (`
            #######################################################
            
            "${filme.nome}" 

            Este foi o ${filme.ordenacao} filme da saga.
            Foi lançado em ${filme.ano} como o Episódio ${filme.episodio}
            e faz parte da NOVA TRILOGIA.
            
            Clique abaixo para ver o poster 
            ${filme.imagem}

            #######################################################
            `)
        break;

        case 'serie':
            console.log
            (`
            #######################################################
            
            "${filme.nome}" 

            Este serie foi lançada em ${filme.ano} na plataforma de
            streaming da Disney e ja tem ${filme.temporada} temporadas.
            
            Clique abaixo para ver o poster 
            ${filme.imagem}

            #######################################################
            `)
        
        break;
        default:
            console.log('Erro ao gerar exibir filme. Favor entre em contato com a equipe tecnica')
    }
    
}

function showOldTrilogy(filme){

}

const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function retornaOuEncerra(){
    rl.question('DESEJA FAZER UMA NOVA CONSULTA? DIGITE "S" PARA SIM | DIGITE "N" PARA ENCERRAR', function(opcao){
        switch (opcao){
            case 'S':
                rl.on("close", function() {
                    console.log("\nOBRIGADO PELA VISITA, QUE A FORCA ESTEJA COM VOCE!");
                    process.exit(0);
                });
            break;
    
            case 'N':
                iniciaPrograma()
            break;

            default:
                rl.on("close", function() {
                    console.log(`A opcao "${opcao}" nao existe. PROGRAMA ENCERRADO`);
                    process.exit(0);
                });

        }   

    });
}

function iniciaPrograma(){

    console.log(`
    ----==== STAR
    
    DIGITE 1 PARA LISTAR TODAS AS OBRAS AUDIOVISUAIS DA SAGA
    DIGITE 2 PARA LISTAR APENAS OS FILMES DA TRILOGIA ANTIGA
    DIGITE 3 PARA LISTAR APENAS OS FILMES DA TRILOGIA PREQUEL
    DIGITE 4 PARA LISTAR APENAS OS FILMES DA TRILOGIA NOVA
    DIGITE 5 PARA LISTAR APENAS OS FILMES SPINOFF
    DIGITE 6 PARA LISTAR APENAS AS SERIES
    `);
    
    rl.question('DIGITE AQUI: ', function(opcao) {
        switch (opcao){
            case '1':
                console.log(` VOCE ESCOLHEU A OPCAO ${opcao}`);
                movies.map(showAllMovies);
    
                retornaOuEncerra()
            break;
    
            case '2':
                console.log(`Opcao ${opcao} ainda em desenvolvimento`)
                retornaOuEncerra()
            break;
    
            case '3':
                console.log(`Opcao ${opcao} ainda em desenvolvimento`)
                retornaOuEncerra()
            case '4':
                console.log(`Opcao ${opcao} ainda em desenvolvimento`)
                retornaOuEncerra()
            break;
    
            case '5':
                console.log(`Opcao ${opcao} ainda em desenvolvimento`)
                retornaOuEncerra()
            break;
    
            case '6':
                console.log(`Opcao ${opcao} ainda em desenvolvimento`)
                retornaOuEncerra()
            break;

            default:
                rl.on("close", function() {
                    console.log(`A opcao "${opcao}" nao existe. PROGRAMA ENCERRADO`);
                    process.exit(0);
                });
        } 
        
        
       rl.close();
    
    });

}

iniciaPrograma();



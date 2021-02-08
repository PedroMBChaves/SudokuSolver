const grid = [
    [0, 0, 8, 0, 0, 0, 0, 0, 6],
    [0, 0, 0, 9, 0, 0, 1, 3, 0],
    [0, 0, 5, 0, 1, 3, 0, 0, 0],
    [7, 0, 1, 8, 0, 0, 6, 0, 0],
    [0, 9, 0, 0, 0, 0, 0, 0, 2],
    [0, 0, 0, 1, 9, 0, 0, 0, 0],
    [0, 0, 4, 0, 7, 0, 0, 0, 0],
    [0, 6, 0, 0, 2, 0, 0, 0, 0],
    [8, 0, 0, 0, 0, 0, 4, 7, 0]
    ];


const gridteste = [
    [1, 2, 3, 4, 5, 6, 7, 8, 9],
    [2, 3, 4, 5, 6, 7, 8, 9, 1],
    [3, 4, 5, 6, 7, 8, 9, 1, 2],
    [4, 5, 6, 7, 8, 9, 1, 2, 3],
    [5, 6, 7, 8, 9, 1, 2, 3, 4],
    [6, 7, 8, 9, 1, 2, 3, 4, 5],
    [7, 8, 9, 1, 2, 3, 4, 5, 6],
    [8, 9, 1, 2, 3, 4, 5, 6, 7],
    [9, 1, 2, 3, 4, 5, 6, 7, 8]
    ];

const gridquad = [
    [1, 2, 3, 1, 2, 3, 1, 2, 3],
    [4, 5, 6, 4, 5, 6, 4, 5, 6],
    [7, 8, 9, 7, 8, 9, 7, 8, 9],
    [1, 2, 3, 1, 2, 3, 1, 2, 3],
    [4, 5, 6, 4, 5, 6, 4, 5, 6],
    [7, 8, 9, 7, 8, 9, 7, 8, 9],
    [1, 2, 3, 1, 2, 3, 1, 2, 3],
    [4, 5, 6, 4, 5, 6, 4, 5, 6],
    [7, 8, 9, 7, 8, 9, 7, 8, 9]
    ];
    

const gridcorreto = [
    [5, 3, 4, 6, 7, 8, 9, 1, 2],
    [6, 7, 2, 1, 9, 5, 3, 4, 8],
    [1, 9, 8, 3, 4, 2, 5, 6, 7],
    [8, 5, 9, 7, 6, 1, 4, 2, 3],
    [4, 2, 6, 8, 5, 3, 7, 9, 1],
    [7, 1, 3, 9, 2, 4, 8, 5, 6],
    [9, 6, 1, 5, 3, 7, 2, 8, 4],
    [2, 8, 7, 4, 1, 9, 6, 3, 5],
    [3, 4, 5, 2, 8, 6, 1, 7, 9]
];

const eita = [
    [1, 2, 8, 4, 5, 7, 9, 0, 6],
    [4, 7, 6, 9, 8, 2, 1, 3, 5],
    [9, 0, 5, 6, 1, 3, 2, 4, 7],
    [7, 3, 1, 8, 4, 5, 6, 9, 0],
    [5, 9, 0, 3, 6, 0, 7, 1, 2],
    [2, 4, 0, 1, 9, 0, 3, 5, 8],
    [3, 1, 4, 5, 7, 6, 8, 2, 9],
    [0, 6, 7, 0, 2, 1, 5, 0, 3],
    [8, 5, 2, 0, 3, 9, 4, 7, 1]
];

function preencher(puzzle){
    const linhas = document.querySelectorAll(".linha");
    const colunas = document.querySelectorAll(".coluna");

    for (let linha = 0; linha < linhas.length; linha++) {
        for (let coluna = 0; coluna < 9; coluna++) {
            const numero = puzzle[linha][coluna];
            document.getElementById('lin'+(linha+1)+'col'+(coluna+1)).value = numero;
        }
    }
};

function getsolution(){
    const linhas = document.querySelectorAll(".linha");
    var solution = [];

    // pega os valores preenchidos e coloca na lista solution
    for (let linha = 0; linha < linhas.length; linha++) {
        solution.push([]);
        for (let coluna = 0; coluna < 9; coluna++) {
            if (document.getElementById('lin'+(linha+1)+'col'+(coluna+1)).value == ''){
                solution[linha][coluna] = parseInt(0);
            } else {
            solution[linha][coluna] = parseInt(document.getElementById('lin'+(linha+1)+'col'+(coluna+1)).value);
            }
        }
    }
    return solution;
};


// verifica se há números repetidos na lista de entrada, retornando uma lista contendo estes números repetidos. 
function contador_repeticoes(lista){
    var valores = [];
    var repetido = 0;
    var num_repetidos = [];
    for (let numero = 0; numero < lista.length; numero++) {
        var atual = lista[numero];
        if (valores.indexOf(atual) !== -1) {
            repetido = lista[valores.length]
            num_repetidos.push(repetido);
        }
        valores.push(atual);
    }
    return num_repetidos;
};

// Verifica se o campo está preenchido com valores válidos (1 a 9) retornando uma lista com as posições dos erros.
function checkvalues(puzzle){
    var errosvalores = [];
    for (let linha = 0; linha < puzzle.length; linha++) {   
        for (let coluna = 0; coluna < puzzle[linha].length; coluna++) {
            if (puzzle[linha][coluna] == 0 || puzzle[linha][coluna] > 9) {
                errosvalores.push([linha, coluna]);
            }
        }
    }
    return errosvalores;
};

// verifica se há repetições de números nas linhas do tabuleiro retornando uma lista com as posições dos erros.
function checkline(puzzle){
    var erroslinha = [];
    for (let x = 0; x < puzzle.length; x++) {
        var repeticoes = contador_repeticoes(puzzle[x]);
        if (repeticoes.length > 0){
            for (let y = 0; y < puzzle[x].length; y++) {
                for (let w = 0; w < repeticoes.length; w++) {
                    if (puzzle[x][y] === repeticoes[w]) {
                        erroslinha.push([x,y]);
                    }
                }
            }
        }
    }
    return erroslinha;
};

// verifica se há repetições de números nas colunas do tabuleiro retornando uma lista com as posições dos erros.
function checkcolumn(puzzle){
    var erroscoluna = [];
    for (let x = 0; x < puzzle.length; x++) {
        var coluna = [];
        for (let y = 0; y < puzzle.length; y++) {
            const element = puzzle[y][x];
            coluna.push(element);
        }   
        var repeticoes = contador_repeticoes(coluna);
            if (repeticoes.length > 0){
                for (let pos = 0; pos < coluna.length; pos++){
                    for (let w = 0; w < repeticoes.length; w++) {
                        if (coluna[pos] === repeticoes[w]){
                            erroscoluna.push([pos, x])
                        }
                    }
                }
            }
    }
    return erroscoluna;
}

// verifica se há repetições de números nos quadrantes do tabuleiro retornando uma lista com as posições dos erros.
function checkquad(puzzle){
    var errosquad = [];
    for (let lim1 = 0; lim1 < 7; lim1 += 3) {
        for (let lim2 = 0; lim2 < 7; lim2 += 3) {
            var quad = [];
            var posicoes = {};
            let contador = 0;
            for (let x = 0; x < 3; x++) {
                for (let y = 0; y < 3; y++) {
                    quad.push(puzzle[lim1+x][lim2+y]);
                    posicoes[contador] = [lim1+x,lim2+y];
                    contador++;
                }
            }
            var repeticoes = contador_repeticoes(quad);
            if (repeticoes.length > 0){
                for (let pos = 0; pos < quad.length; pos++){
                    for (let w = 0; w < repeticoes.length; w++) {
                        if (quad[pos] === repeticoes[w]){
                            errosquad.push(posicoes[pos])
                        }
                    }
                }
            }
        }  
    }
    return errosquad;
}

// recebe um jogo de entrada e chama as funções para verificar o tabuleiro completo e retorna a lista com os possíveis erros
function checkall(puzzle){
    var errosvalores = checkvalues(puzzle);
    var erroslinhas = checkline(puzzle);
    var erroscolunas = checkcolumn(puzzle);
    var errosquadrantes = checkquad(puzzle);
    var erros = errosvalores.concat(erroslinhas, erroscolunas, errosquadrantes);
    return erros; 
}

// Verifica se há algum erro no tabuleiro e assinala as posições que eles ocorrem ou assinala se não houver nenhum erro.
function checkpuzzle(){
    const quadro = document.querySelector(".tabuleiro");
    const jogo = getsolution();
    const erros = checkall(jogo);
    quadro.classList.remove('errado');
    quadro.classList.remove('correto');
    for (let lin = 0; lin < jogo.length; lin++){
        for (let col = 0; col < jogo[lin].length; col++){
            document.getElementById('l'+(lin+1)+'col'+(col+1)).classList.remove('erro');
        }
    }
    for (let x = 0; x < erros.length; x++) {
        document.getElementById('l'+((erros[x][0])+1)+'col'+((erros[x][1])+1)).classList.add('erro');
        }
    if (erros.length > 0) {
        quadro.classList.add('errado');
    } else {
        quadro.classList.add('correto');
    }
};

// Encontra e retorna as coordenadas de uma posição preenchida com um 0.
function PosicaoPossivel(puzzle){
    for (let x = 0; x < 9; x++){
        for (let y = 0; y < 9; y++){
            if (puzzle[x][y] ===0){
                return [x, y];
            }
        }
    }
    return [-1, -1];
};

// Verifica se determinado valor pode ser colocado nesta posição baseado na linha.
function LinhaPossivel(puzzle, lin, num){
    for (let x = 0; x < 9; x++){
        if (puzzle[lin][x] == num) {
            return false;
        }
    }
    return true;
};

// Verifica se determinado valor pode ser colocado nesta posição baseado na coluna.
function ColunaPossivel(puzzle, col, num){
    for (let x = 0; x < 9; x++){
        if (puzzle[x][col] == num){
            return false;
        }
    }
    return true;
};

// Verifica se determinado valor pode ser colocado nesta posição baseado no quadrante.
function QuadPossivel(puzzle, lin, col, num){
    var quad1 = Math.floor(lin / 3) * 3;
    var quad2 = Math.floor(col / 3) * 3;
    for (let x = 0; x < 3; x++) {
        for (let y = 0; y < 3; y++){
            //console.log(quad1+x, quad2+y);
            if (puzzle[quad1+x][quad2+y] === num) {
                return false;
            }
        }
    }
    return true;
};

// Compila as três regras (linha, coluna e quadrante) para determinar se o valor pode ser colocado na posição
function Possivel(puzzle, lin, col, num){
    if (LinhaPossivel(puzzle, lin, num) &&
        ColunaPossivel(puzzle, col, num) &&
        QuadPossivel(puzzle, lin, col, num)) {
        return true;
    }
    return false;
};

// Testa os valores nas posições até completar de preencher o tabuleiro com uma solução válida
function Solucionar(puzzle){
    var posicaovalida = PosicaoPossivel(puzzle);
    var linha = posicaovalida[0];
    var coluna = posicaovalida[1];
    if (linha === -1){
        return puzzle;
    }
    for (let num = 1; num < 10; num++) {
        if (Possivel(puzzle, linha, coluna, num)){
            puzzle[linha][coluna] = num;
            Solucionar(puzzle);
        }
    }
    if (PosicaoPossivel(puzzle)[0] !== -1){
        puzzle[linha][coluna] = 0;
    }
    return puzzle;
};

function Resolver(){
    var jogo = getsolution();
    var resposta = Solucionar(jogo);
    preencher(resposta);
};


/*
function solver(puzzle){
    var resposta = [];
    for (lin = 0; lin < 9; lin++){
        for (col = 0; col < 9; col++){
            if (puzzle[lin][col] == 0) {
                for (numero = 1; numero < 10; numero++){
                    var valido = Possivel(puzzle, lin, col, numero);
                    if (valido == true){
                        puzzle[lin][col] = numero;
                        solver(puzzle);
                    }
                }
                if (checkall(puzzle)[0] !== -1){
                    puzzle[lin][col] = 0;
                }
            }
        }
    }
    resposta = puzzle;
    return puzzle;
};
*/




let pessoa = {
    nome: 'João', 
    idade: 35, 
    casado: true 
    };
    console.log(pessoa);
    console.log(pessoa.nome);
    console.log(pessoa['nome']);

    let prop = 'nome';
    console.log(pessoa[prop]);

    pessoa.numeroDeFilhos = 2;
    console.log(pessoa);
    
    // let pessoa2={};
    // pessoa2.nome = 'Maria';
    // pessoa2.idade = 28;
    // pessoa2.casado = false;
    // pessoa2.numeroDeFilhos = 0;
    // console.log(pessoa2);

    function criaPessoa(n, i, c, f) { //1° maneira de fazer um objeto
        let p={};
        p.nome = n; 
        p.idade = i;
        p.casado = c;
        p.numeroDeFilhos = f;
        return p; 
    }

    let pessoa1 = criaPessoa('João', 35, true, 2);
    let pessoa2 = criaPessoa('Maria', 28, false, 0);
    console.log(1, pessoa1);
    console.log(2, pessoa2);

    function criandoPessoa(n, i, c, f) { //2° maneira de fazer um objeto
        return {
        nome: n, 
        idade: i,
        casado: c,
        numeroDeFilhos: f,
        maiorDeIdade: function() {
            return this.idade >= 18;
        },
        };
    }

    let pessoa3 = criandoPessoa('Augusto', 19, false, 0);
    console.log(3, pessoa3, pessoa3.maiorDeIdade());

    function Pessoa(n, i, c, f) { //função construtora
        this.nome = n; 
        this.idade = i;
        this.casado = c;
        this.numeroDeFilhos = f;
        this.maiorDeIdade = function () {return this.idade>=18}
    //  this.maiorDeIdade = () => this.idade >= 18; // também poderia ser escrito assim.
        };
    
    let pessoa4 = new Pessoa('Marcos', 35, true, 9);
    console.log(4, pessoa4);
    console.log(pessoa4.maiorDeIdade());
    
    for(let chave in pessoa4) {
        if (typeof pessoa4[chave] != 'function')
        console.log(`O valor de "${chave}" é "${pessoa3[chave]}"`);
    }

    let pessoa5 = pessoa4; // cópia da referência para o objeto
    console.log(5, pessoa5);

    pessoa4.nome = 'José Carlos';
    console.log(6, pessoa5);

    let pessoa6 = {};
    for(let chave in pessoa4) {
        pessoa6[chave] = pessoa4[chave];
    }
    console.log(7, pessoa6);
    pessoa4.nome = 'João';
    console.log(8, pessoa4);
    console.log(9, pessoa6);
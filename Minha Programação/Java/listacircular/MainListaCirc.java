package listacircular;
import java.util.Scanner;

public class MainListaCirc {
   
public static void main(String[] args) throws Exception { 
    Scanner tec = new Scanner(System.in);

            System.out.println("==== LISTA LINEAR ====");
Lista lista = new Lista(6);











/*
int x=0, pos=0, cont=0;
while(cont!=9) { 
    System.out.println("Digite 1 para inserir um valor ao inicio");
    System.out.println("Digite 2 para inserir um valor ao fim");
    System.out.println("Digite 3 para inserir um valor e em qual posição ele ficará");
    System.out.println("Digite 4 para remover o valor do inicio");
    System.out.println("Digite 5 para remover o valor do fim");
    System.out.println("Digite 6 para remover o valor de um posição específica");
    System.out.println("Digite 7 para mostrar o vetor");
    System.out.println("Digite 9 para ir para proxima fase do programa");
    cont = tec.nextInt();
    switch (cont) {
        case 1:           
        System.out.println("Digite o valor: ");
        x = tec.nextInt();
        lista.inserirInicio(x);
        break;

        case 2:
        System.out.println("Digite o valor: ");
        x = tec.nextInt();
        lista.inserirFim(x);
        break;

        case 3:
        System.out.println("Digite o valor: ");
        x = tec.nextInt();
        System.out.println("Digite a posição: ");
        pos = tec.nextInt();
        lista.inserir(x,pos);
        break;

        case 4:
        lista.removerInicio();
        break;

        case 5:
        lista.removerFim();
        break;

        case 6:
        System.out.println("Digite a posição: ");
        pos = tec.nextInt();
        lista.remover(pos);
        break;

        case 7:
        lista.mostrar();
        break;
    }

   
    //lista.mostrar();
}

while(cont!=0) {
   System.out.println("Digite 1 se quiser saber se aquela posição está vazia");
   System.out.println("Digite 2 se quiser ver o vetor funcionando recursivamente"); 
   System.out.println("Digite 3 para saber se determinado valor se encontra no vetor");
   System.out.println("Digite 4 para escolher uma posição e descobrir o valor que ela contém");
   System.out.println("Digite 7 para mostrar o vetor");
   System.out.println("Digite 0 para finalizar o programa");
   cont = tec.nextInt();

   switch (cont) {
       case 1:
        System.out.println("Digite a posição: ");
        pos = tec.nextInt();
        System.out.println(lista.isVazio(pos));
        break;

        case 3:
        System.out.println("Digite o valor: ");
        x = tec.nextInt();
        System.out.println(lista.pesquisar(x));
        break;

        case 4:
        System.out.println("Digite a posição: ");
        pos = tec.nextInt();
        System.out.println(lista.retornaPos(pos)); 
        break;

        case 7:
        lista.mostrar();
        break;
   }

   System.out.println("FIM DO PROGRAMA");
}

*/
int x1, x2, x3;
lista.inserirInicio(1);
lista.inserirFim(7);
lista.inserirFim(9);
lista.inserirInicio(3);
lista.inserir(8, 3);
lista.inserir(4, 2);

lista.mostrar();

x1 = lista.removerInicio();
lista.mostrar();
x2 = lista.removerFim();
lista.mostrar();
x3 = lista.remover(2);

System.out.println(x1 + ", " + x2 + ", " + x3);

lista.mostrar();

System.out.println(lista.isVazio(4));

//lista.mostrarRec(, 0);

System.out.println(lista.pesquisar(9));

System.out.println(lista.retornaPos(2));


}
}
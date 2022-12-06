package listacircular;

public class Lista {
    static int minhaVar[] = new int[6];
    static int n;
    

    Lista () { this(6); }
    Lista (int tamanho){
        int minhaVar[] = new int[tamanho];
        n = 0;
    }

    static void inserirInicio(int x) throws Exception{
        if (n>=minhaVar.length) 
            throw new Exception("Erro!");
        
        //levar elementos para o fim do array
        for (int i=n; i>0;i--) {
            minhaVar[i] = minhaVar[i-1];
        }
        minhaVar[0] = x;
        n++;
    }

    static void inserirFim(int x) throws Exception{
        if (n>=minhaVar.length) 
            throw new Exception("Erro!");
        
            minhaVar[n] = x;
        n++;         
    }

    static void inserir(int x, int pos) throws Exception{
        if (n>=minhaVar.length || pos < 0 || pos > n) 
            throw new Exception("Erro!");
        
        //levar elementos para o fim do array
        for(int i=n; i>pos;i--){
            minhaVar[i] = minhaVar[i-1];
        }
        minhaVar[pos] = x;
        n++;
    }

    static int removerInicio() throws Exception {
        if (n == 0) {
        throw new Exception("Erro!");
        }
        int resp = minhaVar[0];
        n--;

        for (int i=0; i<n; i++){
            minhaVar[i] = minhaVar[i+1];
        }
        return resp;
    }

    static int removerFim() throws Exception{
        if(n==0) {
            throw new Exception("Erro!");
        }       
        return minhaVar[--n];
    }

    static int remover(int pos) throws Exception{
        if (n==0 || pos<0 || pos>=n) {
            throw new Exception("Erro!");
        }
        int resp = minhaVar[pos];
        n--;
        for(int i= pos; i<n; i++){
            minhaVar[i] = minhaVar[i+1];
        }
        return resp;        
    }

    void mostrar() {
        System.out.print("[ ");
        for (int i=0; i<n; i++) {
            System.out.print(minhaVar[i] + " ");
        }
        System.out.println("]");
    }

    boolean isVazio(int pos) {
        boolean a=true;
        for(int i=0; i<n; i++){
            Integer fg = minhaVar[i];
            if(pos == i) {
                if(fg==null) {
                    a=true;
                } else {
                   a = false;    
                }
            }
        }
        return a;
    }

    
    /*
    void mostrarRec(int tam)  {
        if (tam<=minhaVar.length-2) {
    		System.out.print(+minhaVar[(int) tam]+" | ");    
    		mostrarRec(minhaVar, tam+1);
    	}
        }
     */
    

    boolean pesquisar(int elemento) {
        boolean a=false;
        for(int i=0; i<n; i++) {
            if(elemento==minhaVar[i]) {
                a = true;
            }
        }
        return a;
    }

    int retornaPos(int posicao) throws Exception{
        if (posicao>n) {
            throw new Exception("Erro!");
        }        
        int a = minhaVar[posicao];    

        return a;    
    }
}    
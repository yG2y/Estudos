import java.util.Random;

public class BubbleSort {
      
    public static void main(String args[]){
        Random random =  new Random();
                 
        int[] array = {random.nextInt(100), random.nextInt(100), random.nextInt(100), random.nextInt(100), random.nextInt(100)};
        int cont = 0; int i = 0;
    
        for(i =  0; i<array.length; i++){ 
            for(int j = 0; j<array.length -  1; j++){
                if(array[j] > array[j + 1]){
                    cont = array[j];  
                    array[j ]  = array[j+1];
                    array[j+1] = cont;
                }
            }
        }

        System.out.println("Ordem crescente dos valores");

        for(i = 0; i<array.length;   i++){
            System.out.println(" "+array[i]);
        }
    }
}
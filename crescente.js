import java.util.Arrays;

public class OrdenaVetor {

    public static void main(String[] args) {
      
        int[] numeros = {35, 12, 22};

              String mensagemResultado = ordenarNumeros(numeros);

             System.out.println(mensagemResultado);
    }

   
    public static String ordenarNumeros(int[] vetor) {
        // Cria uma cópia para não alterar o vetor original diretamente
        int[] vetorOrdenado = vetor.clone();
        
               Arrays.sort(vetorOrdenado);

              return "Os números em ordem crescente são: " 
                + vetorOrdenado[0] + ", " 
                + vetorOrdenado[1] + " e " 
                + vetorOrdenado[2];
    }
}




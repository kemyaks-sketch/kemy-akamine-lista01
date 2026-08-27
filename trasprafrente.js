public class VetorInvertido {

    public static void main(String[] args) {
      
        int[] numeros = {12, 25, 47, 8, 93};

        System.out.println("Elementos do vetor de trás para frente:");

             for (int i = numeros.length - 1; i >= 0; i--) {
            System.out.print(numeros[i] + " ");
        }
        
                System.out.println(); 
    }
}

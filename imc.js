public class CalculadoraIMC {

    public static void main(String[] args) {
      
        double peso = 70.0;
        double altura = 1.75;

      
        String mensagemResultado = verificarIMC(peso, altura);

       
        System.out.println(mensagemResultado);
    }

    
    public static String verificarIMC(double peso, double altura) {
               double imc = peso / (altura * altura);

              System.out.printf("Seu IMC atual é: %.2f%n", imc);

                if (imc >= 18.5 && imc <= 24.9) {
            return "Seu IMC está ideal!";
        } else {
            return "Você precisa se cuidar.";
        }
    }
}

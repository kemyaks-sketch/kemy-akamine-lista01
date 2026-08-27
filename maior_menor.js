#include <stdio.h>

int main() {
       int vetor[5] = {12, 45, 3, 67, 21};

    int maior = vetor[0];
    int menor = vetor[0];

      for (int i = 1; i < 5; i++) {
        if (vetor[i] > maior) {
            maior = vetor[i];
        }
        if (vetor[i] < menor) {
            menor = vetor[i];
        }
    }

 
    printf("O maior valor e: %d\n", maior);
    printf("O menor valor e: %d\n", menor);

    return 0;
}

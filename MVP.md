# Estrutura de um MVP

- Minimum Viable Product (MVP)

---

erro:

- **Objetivo**: Construir um carro! (6 meses)

  - versões:
    - [x] Roda (1 semana)
    - [x] Lataria (3 semanas)
    - [x] Chassi (4 semanas)
    - [x] Motor (2 meses)
    - [x] **Carro (6 meses)**

---

certo:

- **Objetivo**: Construir um carro! (6 meses)

  - versões:
    - [x] Patinete (1 semana)
    - [x] Bicicleta (3 semanas)
    - [x] Moto (2 meses)
    - [x] **Carro (6 meses)**

- O MVP deve sempre solucionar a _Questão_ independente da versão

## Enviar emails pra uma lista de uma forma fácil

- RF

  - Importar uma lista em CSV e relacionar ela com um tag
  - Enviar mensagem para uma lista ou mais tags
  - Vizualização do progresso de envio (concluído/não concluído)

- RNF

  - Utilizar Amazon SES (1$ - 10.000)
  - Utilizar Mongo DB
  - Utilizar serviço de mensageria (Redis)

- RN
  - Na importação, se a tag não existir ela deve ser criada
  - Na importação, se o usuário já existir, só vamos veicula-lo com a tag
  - A importação deve permitir múltiplas tags

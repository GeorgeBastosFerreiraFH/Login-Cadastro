# Projeto: Tela de Login e Cadastro (Simulando um API)

## Descrição
Este projeto é uma interface simples de login e cadastro utilizando HTML, CSS e JavaScript puro. Ele simula um sistema de autenticação básico validando e-mails com base em uma lista de dados mockados (simulação de um banco de dados).

## Funcionalidades
- **Login:** O usuário insere um e-mail e uma senha. Se o e-mail existir na lista de mock, o login é realizado com sucesso.
- **Cadastro:** O usuário insere nome, e-mail e senha. Se o e-mail já estiver cadastrado, o sistema exibe um aviso.
- **Troca entre telas:** Links para alternar entre as telas de login e cadastro.

## Tecnologias Utilizadas
- HTML5
- CSS3
- JavaScript

## Como Funciona a Validação
### Cadastro
1. O usuário insere nome, e-mail e senha.
2. O sistema verifica se todos os campos estão preenchidos.
3. Compara se o e-mail já está cadastrado na lista `emailExistentes`.
4. Se o e-mail existir, o cadastro é negado.
5. Se for um novo e-mail, ele é adicionado à lista e o usuário é redirecionado para a tela de login.

### Login
1. O usuário insere um e-mail e uma senha.
2. O sistema verifica se o e-mail existe na lista `emailExistentes`.
3. Se existir, o login é autorizado e uma mensagem de sucesso é exibida.
4. Caso contrário, o sistema informa que o e-mail não está cadastrado.

## Lista de E-mails para Testes
Os seguintes e-mails estão pré-cadastrados para testes:
- `carlos@email.com`
- `maria@email.com`
- `joao@email.com`
- `ana@email.com`
- `pedro@email.com`
- `lucas@email.com`
- `mariana@email.com`
- `fernando@email.com`
- `beatriz@email.com`
- `rafael@email.com`

## Como Executar o Projeto
1. Clone o repositório:
   ```sh
   git clone https://github.com/GeorgeBastosFerreiraFH/Login-Cadastro.git
   ```
2. Acesse a pasta do projeto:
   ```sh
   cd Login-Cadastro
   ```
3. Abra o arquivo `index.html` no navegador.

## Melhorias Futuras
- Implementação de uma API real para autenticação.
- Uso de um banco de dados para armazenamento dos usuários.
- Criptografia de senhas para maior segurança.

---

Feito com ❤️ por [George Bastos]


const emailExistentes = [
  "carlos@email.com",
  "maria@email.com",
  "joao@email.com",
  "ana@email.com",
  "pedro@email.com",
  "lucas@email.com",
  "mariana@email.com",
  "fernando@email.com",
  "beatriz@email.com",
  "rafael@email.com",
];

document
  .getElementById("show-register")
  .addEventListener("click", function (event) {
    event.preventDefault();
    document.getElementById("login-container").classList.add("hidden");
    document.getElementById("register-container").classList.remove("hidden");
  });

document
  .getElementById("show-login")
  .addEventListener("click", function (event) {
    event.preventDefault();
    document.getElementById("register-container").classList.add("hidden");
    document.getElementById("login-container").classList.remove("hidden");
  });

async function verificarEmailDisponivel(email) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(!emailExistentes.includes(email));
    }, 500);
  });
}

document
  .getElementById("btn-cadastrar")
  .addEventListener("click", async function (event) {
    event.preventDefault();

    const nome = document.getElementById("register-name").value.trim();
    const email = document.getElementById("register-email").value.trim();
    const senha = document.getElementById("register-password").value;
    const confirmar = document.getElementById("confirm-password").value;

    if (!nome || !email || !senha || !confirmar) {
      alert("Preencha todos os campos!");
      return;
    }

    if (senha !== confirmar) {
      alert("As senhas não coincidem!");
      return;
    }

    try {
      const emailDisponivel = await verificarEmailDisponivel(email);
      if (!emailDisponivel) {
        alert("E-mail já cadastrado!");
        return;
      }

      emailExistentes.push(email);
      alert("Cadastro realizado com sucesso!");

      document.getElementById("register-name").value = "";
      document.getElementById("register-email").value = "";
      document.getElementById("register-password").value = "";
      document.getElementById("confirm-password").value = "";

      document.getElementById("register-container").classList.add("hidden");
      document.getElementById("login-container").classList.remove("hidden");
    } catch (error) {
      console.error("Erro na verificação do email", error);
      alert("Erro ao verificar o e-mail. Tente novamente.");
    }
  });

document
  .getElementById("btn-login")
  .addEventListener("click", function (event) {
    event.preventDefault();

    const email = document.getElementById("login-email").value.trim();
    const senha = document.getElementById("login-password").value;

    if (!email || !senha) {
      alert("Preencha todos os campos!");
      return;
    }

    const emailValido = emailExistentes.includes(email);

    if (emailValido) {
      alert("Login realizado com sucesso!");
    } else {
      alert("E-mail não cadastrado!");
    }
  });

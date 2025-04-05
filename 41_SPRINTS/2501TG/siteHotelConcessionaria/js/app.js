// Função para salvar o usuário no localStorage
function salvarUsuario(usuario) {
    let usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];
    usuarios.push(usuario);
    localStorage.setItem("usuarios", JSON.stringify(usuarios));
  }
  
  // Função para verificar se o usuário está cadastrado
  function verificarUsuario(email, senha) {
    let usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];
    return usuarios.find(usuario => usuario.email === email && usuario.senha === senha);
  }
  
  // Cadastro
    document.getElementById("cadastroForm")?.addEventListener("submit", function(event) {
    event.preventDefault();
  
    const nome = document.getElementById("nome").value;
    const email = document.getElementById("email").value;
    const senha = document.getElementById("senha").value;
    const dealer = document.getElementById("dealer").value;
    const dataEstadia = document.getElementById("dataEstadia").value;
  
    const novoUsuario = { nome, email, senha, dealer, dataEstadia };
    salvarUsuario(novoUsuario);
  
    window.location.href = "login.html";
  });
  
  // Login
    document.getElementById("loginForm")?.addEventListener("submit", function(event) {
    event.preventDefault();
  
    const email = document.getElementById("email").value;
    const senha = document.getElementById("senha").value;
  
    const usuario = verificarUsuario(email, senha);
  
    if (usuario) {
      // Redirecionamento para a página inicial ou dashboard
      window.location.href = "dashboard.html";
    } else {
      alert("Usuário ou senha inválidos.");
    }
  });

// Get the elements with class="column"
var elements = document.getElementsByClassName("column");

// Declare a "loop" variable
var i;

// Full-width images
function one() {
  for (i = 0; i < elements.length; i++) {
    elements[i].style.flex = "100%";
  }
}

// Two images side by side
function two() {
  for (i = 0; i < elements.length; i++) {
    elements[i].style.flex = "50%";
  }
}

// Four images side by side
function four() {
  for (i = 0; i < elements.length; i++) {
    elements[i].style.flex = "25%";
  }
}

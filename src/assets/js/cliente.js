//armazenar o valor das variáveis
function preenchimentoCampos(
  inpNome,
  inpCpf,
  inpEmail,
  inpTelefone,
  inpEndereco
) {
  let nome = document.getElementById(inpNome).value;
  let cpf = document.getElementById(inpCpf).value;
  let email = document.getElementById(inpEmail).value;
  let telefone = document.getElementById(inpTelefone).value;
  let endereco = document.getElementById(inpEndereco).value;
  cadastrarCli(nome, cpf, email, telefone, endereco);
}
//criar um registro novo ou atualizá-lo e enviar um alert de sucesso
function cadastrarCli(nome, cpf, email, telefone, endereco) {
  let cliCadastro = {
    name: nome,
    register: cpf,
    type: email,
    phone: telefone,
    adress: endereco,
  };
  let cadastros = localStorage.getItem("dadosCadastros");
  if (cadastros == null) cadastros = [];
  else cadastros = JSON.parse(cadastros);
  cadastros.push(cliCadastro);
  localStorage.setItem("dadosCadastros", JSON.stringify(cadastros));
  //alert("Cadastro do cliente " + nome + " realizado com sucesso!");
  location.reload();
  listarCadastros();
}
//exibir todo cadastro realizado
function listarCadastros() {
  let cadastros = localStorage.getItem("dadosCadastros");
  document.write("<h2>Clientes Cadastrados</h2>");
  if (cadastros == null)
    document.write(
      "<h3>Ainda não há cadastros realizados para consultar.</h3>"
    );
  else {
    cadastros = JSON.parse(cadastros);
    cadastros.forEach((cadastro) => {
      document.write("<ul>");
      document.write("<li>Nome: " + cadastro.name + "</li>");
      document.write("<li>CPF: " + cadastro.register + "</li>");
      document.write("<li>E-mail: " + cadastro.type + "</li>");
      document.write("<li>Telefone: " + cadastro.phone + "</li>");
      document.write("<li>Endereço: " + cadastro.adress + "</li>");
      document.write("</ul><p></p>");
    });
  }
}
//limpar o objeto localStorage esvaziando os campos
function limparStorage(limpar) {
  localStorage.clear(limpar);
}

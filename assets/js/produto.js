function preenchimentoCampos(inpCodigo, inpProd, inpQtdade, inpMarca) {
  let codigo = document.getElementById(inpCodigo).value;
  let produto = document.getElementById(inpProd).value;
  let qtdade = document.getElementById(inpQtdade).value;
  let marca = document.getElementById(inpMarca).value;
  cadastrarCli(codigo, produto, qtdade, marca);
}
//criar um registro novo ou atualizar
function cadastrarCli(codigo, produto, qtdade, marca) {
  let cliCadastro = {
    code: codigo,
    product: produto,
    amount: qtdade,
    brand: marca,
  };
  let cadastros = localStorage.getItem("dadosCadastros");
  if (cadastros == null) cadastros = [];
  else cadastros = JSON.parse(cadastros);
  cadastros.push(cliCadastro);
  localStorage.setItem("dadosCadastros", JSON.stringify(cadastros));
  alert("Cadastro do produto " + produto + " realizado com sucesso!");
  location.reload();
  listarCadastros();
}
//exibir todo cadastro realizado no mini sistema
function listarCadastros() {
  let cadastros = localStorage.getItem("dadosCadastros");
  document.write("<h2>Produtos Cadastrados:</h2>");
  if (cadastros == null)
    document.write(
      "<h3>Ainda não há cadastros realizados para consultar.</h3>"
    );
  else {
    cadastros = JSON.parse(cadastros);
    cadastros.forEach((cadastro) => {
      document.write("<ul>");
      document.write("<li>Nome: " + cadastro.code + "</li>");
      document.write("<li>CPF: " + cadastro.product + "</li>");
      document.write("<li>E-mail: " + cadastro.amount + "</li>");
      document.write("<li>Telefone: " + cadastro.brand + "</li>");
      document.write("</ul><p></p>");
    });
  }
}
//limpar o objeto localStorage esvaziando os campos
function limparStorage(limpar) {
  localStorage.clear(limpar);
}

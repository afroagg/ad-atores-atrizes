const grid = document.querySelector("#grid");
const campoBusca = document.querySelector("#busca");
const contador = document.querySelector("#contador");

// "1979-08-27" -> "27/08/1979"
const formatarData = (data) => {
  const partes = data.split("-");
  return `${partes[2]}/${partes[1]}/${partes[0]}`;
};

const renderizar = (lista) => {
  grid.innerHTML = "";

  if (lista.length === 0) {
    grid.innerHTML = '<p class="vazio">Nenhum ator ou atriz encontrado.</p>';
  }

  lista.forEach((ator) => {
    grid.innerHTML += `
      <div class="card">
        <img src="${ator.foto}" alt="Foto de ${ator.nome}">
        <div class="info">
          <h2>${ator.nome}</h2>
          <p>País: ${ator.pais}</p>
          <p>Nascimento: ${formatarData(ator.nascimento)}</p>
        </div>
      </div>
    `;
  });

  contador.textContent = `${lista.length} de ${atores.length} exibidos`;
};

function filtrar() {
  const texto = campoBusca.value.toLowerCase();
  const filtrados = atores.filter((ator) => ator.nome.toLowerCase().includes(texto));
  renderizar(filtrados);
}

renderizar(atores);

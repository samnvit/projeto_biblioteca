const campoBusca = document.getElementById('busca');
const livros = document.querySelectorAll('.livro');

const formulario = document.getElementById('form-sugestao');
const tituloLivro = document.getElementById('titulo-livro');
const mensagem = document.getElementById('mensagem');

campoBusca.addEventListener('input', function () {
    const texto = campoBusca.value.toLocaleLowerCase();

    livros.forEach(function (livro) {
        const titulo = livro.querySelector('h3').textContent.toLocaleLowerCase();

        if (titulo.includes(texto)) {
            livro.hidden = false;
        } else {
            livro.hidden = true;
        }
    });
});

formulario.addEventListener('submit', function (evento) {
    evento.preventDefault();

    if (tituloLivro.value.length < 3) {
        mensagem.textContent = 'Erro: o título precisa ter pelo menos 3 caracteres.';
        mensagem.className = 'erro';
    } else {
        mensagem.textContent = 'Sugestão enviada com sucesso! Obrigado.';
        mensagem.className = 'sucesso';
        formulario.reset();
    }
});

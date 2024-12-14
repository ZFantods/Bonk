// Selecionar os elementos
const textInput = document.getElementById('textInput');
const generateButton = document.getElementById('generateImage');
const canvas = document.getElementById('canvas');
const downloadLink = document.getElementById('downloadLink');

// Contexto do Canvas
const ctx = canvas.getContext('2d');

// Função para gerar a imagem
generateButton.addEventListener('click', () => {
    const text = textInput.value;

    // Limpar o canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Configurar estilo do texto
    ctx.fillStyle = 'white'; // Fundo branco
    ctx.fillRect(0, 0, canvas.width, canvas.height); // Preenche o fundo
    ctx.fillStyle = 'black'; // Cor do texto
    ctx.font = '20px Arial'; // Estilo do texto
    ctx.textAlign = 'center'; // Centralizar texto
    ctx.textBaseline = 'middle'; // Alinhar ao centro
    ctx.fillText(text, canvas.width / 2, canvas.height / 2); // Desenhar texto

    // Gerar link de download
    const imageURL = canvas.toDataURL('image/png'); // Converter canvas em URL de imagem
    downloadLink.href = imageURL;
    downloadLink.style.display = 'block'; // Mostrar o link
    downloadLink.textContent = 'Clique aqui para baixar a imagem';
});

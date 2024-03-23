document.addEventListener("DOMContentLoaded", function() {
    // Função para mostrar a caixa de mensagem
    function showMessage() {
        var messageBox = document.getElementById("message-box");
        if (messageBox) {
            messageBox.style.display = "block";
        }
    }

    // Adiciona o evento de mover o mouse para mostrar a caixa de mensagem
    document.body.addEventListener("mousemove", showMessage);

    // Lógica para aplicar o efeito de blur no vídeo de fundo, se necessário
    function applyBlurEffect() {
        var backgroundVideo = document.getElementById("background-video");
        if (backgroundVideo && backgroundVideo.classList.contains("video-blur")) {
            backgroundVideo.classList.add("active-blur");
            setTimeout(() => {
                backgroundVideo.classList.remove("active-blur");
            }, 3000); // Remove o blur após 3 segundos
        }
    }

    // Aplica o efeito de blur ao mover o mouse, se aplicável
    document.body.addEventListener("mousemove", applyBlurEffect);

    // Aqui você pode adicionar mais lógicas específicas para diferentes páginas
    // Você pode fazer isso verificando a URL da página, IDs únicos de elementos presentes somente em determinadas páginas, etc.
});

// ====== CARREGAMENTO DO MENU ======
function carregarMenu() {
    const header = document.getElementById('header');
    if (header) {
        fetch('menu.html')
            .then(response => {
                if (!response.ok) throw new Error('Menu não encontrado');
                return response.text();
            })
            .then(data => {
                header.innerHTML = data;
            })
            .catch(error => {
                console.error('Erro ao carregar o menu:', error);
                header.innerHTML = '<div class="interface"><p>Menu não disponível</p></div>';
            });
    }
}

// ====== TOGGLE BUTTONS ======
function inicializarToggleButtons() {
    document.querySelectorAll('.toggle-btn, .card-btn').forEach(button => {
        button.addEventListener('click', () => {
            const content = button.nextElementSibling;
            content.classList.toggle('open');
        });
    });
}

// ====== INICIALIZAÇÃO ======
document.addEventListener('DOMContentLoaded', function() {
    carregarMenu();
    inicializarToggleButtons();
});
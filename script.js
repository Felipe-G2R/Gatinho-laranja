// Função para abrir modal com informações
function mostrarModalInfo() {
    const modal = document.getElementById('modal');
    const modalTitle = document.getElementById('modal-title');
    const modalText = document.getElementById('modal-text');
    
    modalTitle.textContent = 'Bem-vindo ao Mundo dos Gatinhos Laranjas! 🧡';
    modalText.innerHTML = `
        <p>Gatinhos laranjas são alguns dos felinos mais adorados do planeta. Sua cor laranja vibrante, personalidade amigável e personalidade brincalhona os tornaram favoritos de pessoas em todo o mundo.</p>
        <p style="margin-top: 1rem;"><strong>Fatos interessantes:</strong></p>
        <ul style="margin-left: 1.5rem; margin-top: 0.5rem;">
            <li>80% dos gatos laranjas são machos</li>
            <li>Eles tendem a ter personalidades mais extrovertidas</li>
            <li>São encontrados em praticamente todos os continentes</li>
            <li>Sua cor é herdada através de genes no cromossomo X</li>
        </ul>
        <p style="margin-top: 1rem;">Explore este site para aprender mais sobre a história, curiosidades e beleza desses gatos incríveis!</p>
    `;
    modal.style.display = 'block';
}

// Função para fechar modal
function fecharModal() {
    const modal = document.getElementById('modal');
    modal.style.display = 'none';
}

// Fechar modal ao clicar fora dele
window.onclick = function(event) {
    const modal = document.getElementById('modal');
    if (event.target === modal) {
        modal.style.display = 'none';
    }
}

// Função para expandir/retrair itens da timeline
function expandirTimeline(indice) {
    const detalhe = document.getElementById(`detalhe-${indice}`);
    if (detalhe.style.display === 'none' || detalhe.style.display === '') {
        detalhe.style.display = 'block';
    } else {
        detalhe.style.display = 'none';
    }
}

// Função para mostrar detalhes das curiosidades
function mostrarDetalhes(indice) {
    const detalhes = document.getElementById(`detalhes-${indice}`);
    if (detalhes.style.display === 'none' || detalhes.style.display === '') {
        detalhes.style.display = 'block';
    } else {
        detalhes.style.display = 'none';
    }
}

// Função para abrir modal com informação da galéria
function abrirGaleria(indice) {
    const descricoes = [
        {
            titulo: 'Gato Feliz 😸',
            texto: 'O gato feliz representa a alegria e contentamento. Esse sentimento é comum em gatos laranjas quando estão ao lado de seus tutores queridos. Com olhos brilhantes e um sorriso tranquilo, esses gatos transmitem muita positividade.'
        },
        {
            titulo: 'Gato Apaixonado 😻',
            texto: 'Demonstram grande capacidade de amor e afeto. Gatos laranjas são conhecidos por serem extremamente afetuosos e carinhosos com seus donos, frequentemente buscando atenção e expressão de amor.'
        },
        {
            titulo: 'Gato Safado 😼',
            texto: 'Essa personalidade brincalhona é característica dos gatos laranjas! São conhecidos por suas travessuras, curtindo brincar, explorar e se meter em situções engraçadas. Sua natureza curiosa e amigável os torna adorovéis.'
        },
        {
            titulo: 'Gato Beijoqueiro 😽',
            texto: 'Alguns gatos laranjas adoram dar beijos e demonstrar afeto físico. Esse comportamento é uma forma carinhosa de mostrar que gostam de você. É comum ver gatos laranjas dando "headbutts" para demonstrar amor.'
        },
        {
            titulo: 'Gato Assustado 🙀',
            texto: 'Mesmo gatos laranjas, geralmente mais confiantes, podem ficar assustados com sons altos ou sitéações desconfortáveis. É importante proporcionar um ambiente seguro e aconchego para seus gatinhos.'
        },
        {
            titulo: 'Gato Triste 😿',
            texto: 'Gatos também sentem emoções profundas. Quando tristes ou entediados, podem precisar de mais atenção e estímulo. Dedique tempo para brincar e interagir com seu gato laranja.'
        },
        {
            titulo: 'Gato Raivoso 😾',
            texto: 'Quando irritados ou com raiva, gatos laranjas podem demonstrar isso através de miados altos e movimentos bruscos. É importante respeitar seu espaço quando estão nesse estado emocional.'
        },
        {
            titulo: 'Gato Rindo 😹',
            texto: 'Embora gatos não riam como humanos, eles demonstram alegria e divertimento de maneiras únicas. Ver um gato laranja feliz e apronando é uma das maiores alegrias para um tutor de gatos!'
        }
    ];
    
    const modal = document.getElementById('modal');
    const modalTitle = document.getElementById('modal-title');
    const modalText = document.getElementById('modal-text');
    
    modalTitle.textContent = descricoes[indice].titulo;
    modalText.textContent = descricoes[indice].texto;
    modal.style.display = 'block';
}

// Função para rolar para seção
function scrollToSection(sectionId) {
    const element = document.getElementById(sectionId);
    if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
    }
}

// Efeito de revelação ao rolar a página
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observar elementos
const elementsToObserve = document.querySelectorAll('.timeline-item, .curiosidade-card, .galeria-item');
elementsToObserve.forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(el);
});

// Adicionar evento de clique nos cards para efeito visual adicional
document.querySelectorAll('.curiosidade-card').forEach(card => {
    card.addEventListener('click', function() {
        this.style.animation = 'none';
        setTimeout(() => {
            this.style.animation = '';
        }, 10);
    });
});

// Função para detectar tema preferido do usuário
if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
    // Opcionalmente, podera adicionar suporte para dark mode aqui
    console.log('Tema escuro detectado');
}

// Adicionar efeito de clique nos botões
const buttons = document.querySelectorAll('.btn');
buttons.forEach(btn => {
    btn.addEventListener('click', function(e) {
        const ripple = document.createElement('span');
        const rect = this.getBoundingClientRect();
        const size = Math.max(rect.width, rect.height);
        const x = e.clientX - rect.left - size / 2;
        const y = e.clientY - rect.top - size / 2;
        
        ripple.style.width = ripple.style.height = size + 'px';
        ripple.style.left = x + 'px';
        ripple.style.top = y + 'px';
    });
});

// Log de carregamento
console.log('🧡 Site dos Gatinhos Laranjas carregado com sucesso!');
console.log('Aproveite para conhecer a historia desses gatos incriveis!');

// Função para contador de cliques (diversão extra)
let clickCount = 0;
document.addEventListener('click', function() {
    clickCount++;
    if (clickCount % 100 === 0) {
        console.log(`🧡 Você clicou ${clickCount} vezes! Você ama gatinhos laranjas!`);
    }
});

// Animação de entrada suave
window.addEventListener('load', function() {
    document.body.style.opacity = '0';
    document.body.style.animation = 'fadeInBody 0.8s ease forwards';
    
    const style = document.createElement('style');
    style.textContent = `
        @keyframes fadeInBody {
            from { opacity: 0; }
            to { opacity: 1; }
        }
    `;
    document.head.appendChild(style);
});

// Função para teclado (adicione atalhos se quiser)
document.addEventListener('keydown', function(e) {
    // Pressionar 'H' para ir para o início
    if (e.key === 'h' || e.key === 'H') {
        scrollToSection('home');
    }
    // Pressionar 'G' para ir para galéria
    if (e.key === 'g' || e.key === 'G') {
        scrollToSection('galeria');
    }
});

// Função para reproduzir som de gato (apenas visual, sem som real)
function miarGato() {
    const mensagens = [
        '🧡 Miau!',
        '🧡 Meow!',
        '🧡 Ronrom...',
        '🧡 Miarrr!',
        '🧡 Mew!'
    ];
    
    const msg = mensagens[Math.floor(Math.random() * mensagens.length)];
    console.log(msg);
}

// Atalho: clicar na logo para ouvir o gato
document.querySelector('.logo')?.addEventListener('click', miarGato);

// Função para compartilhamento (opcional)
function compartilhar() {
    if (navigator.share) {
        navigator.share({
            title: 'Gatinhos Laranjas - História e Curiosidades',
            text: 'Descubra a fascinante história dos gatinhos laranjas!',
            url: window.location.href
        });
    } else {
        alert('Compartilhe este site com seus amigos amantes de gatos! 🧡');
    }
}

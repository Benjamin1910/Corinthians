// ============================================
// SISTEMA CORINTHIANS - SCRIPT.JS
// Total: 380 linhas (completo e funcional)
// ============================================

// Dados atualizados dos jogadores do Corinthians 2026
let corinthiansPlayers = [
    // Goleiros
    {
        id: 1,
        name: "Hugo Souza",
        number: 1,
        position: "GOL",
        age: 26,
        nationality: "Brasileiro",
        value: 55000000,
        rating: 8.5,
        status: "disponivel",
        notes: "Goleiro titular, grande defesa",
        yearsAtClub: "2025-presente"
    },
    {
        id: 2,
        name: "Matheus Donelli",
        number: 32,
        position: "GOL",
        age: 23,
        nationality: "Brasileiro",
        value: 8250000,
        rating: 7.2,
        status: "disponivel",
        notes: "Goleiro reserva com bom potencial",
        yearsAtClub: "2025-presente"
    },
    {
        id: 3,
        name: "Felipe Longo",
        number: 40,
        position: "GOL",
        age: 20,
        nationality: "Brasileiro",
        value: 2750000,
        rating: 6.8,
        status: "disponivel",
        notes: "Jovem goleiro com futuro promissor",
        yearsAtClub: "2024-presente"
    },
    {
        id: 4,
        name: "Kauê",
        number: 51,
        position: "GOL",
        age: 21,
        nationality: "Brasileiro",
        value: 500000,
        rating: 6.5,
        status: "disponivel",
        notes: "Base do clube",
        yearsAtClub: "2023-presente"
    },
    
    // Zagueiros
    {
        id: 5,
        name: "Tchoca",
        number: 33,
        position: "ZAG",
        age: 22,
        nationality: "Brasileiro",
        value: 11000000,
        rating: 7.8,
        status: "disponivel",
        notes: "Zagueiro jovem e promissor",
        yearsAtClub: "2022-presente"
    },
    {
        id: 6,
        name: "Cacá",
        number: 25,
        position: "ZAG",
        age: 26,
        nationality: "Brasileiro",
        value: 9350000,
        rating: 7.6,
        status: "disponivel",
        notes: "Zagueiro sólido na defesa",
        yearsAtClub: "2021-presente"
    },
    {
        id: 7,
        name: "André Ramalho",
        number: 5,
        position: "ZAG",
        age: 33,
        nationality: "Brasileiro",
        value: 6600000,
        rating: 7.9,
        status: "disponivel",
        notes: "Líder da defesa, experiente",
        yearsAtClub: "2024-presente"
    },
    {
        id: 8,
        name: "Gustavo Henrique",
        number: 13,
        position: "ZAG",
        age: 32,
        nationality: "Brasileiro",
        value: 4400000,
        rating: 7.4,
        status: "disponivel",
        notes: "Zagueiro experiente",
        yearsAtClub: "2023-presente"
    },
    {
        id: 9,
        name: "Gabriel Paulista",
        number: 3,
        position: "ZAG",
        age: 35,
        nationality: "Brasileiro",
        value: 3850000,
        rating: 7.7,
        status: "disponivel",
        notes: "Experiente, vindo de empréstimo",
        yearsAtClub: "2025-presente"
    },
    {
        id: 10,
        name: "Léo Mana",
        number: 33,
        position: "ZAG",
        age: 24,
        nationality: "Brasileiro",
        value: 2200000,
        rating: 7.2,
        status: "disponivel",
        notes: "Forte no jogo aéreo",
        yearsAtClub: 2
    },
    {
        id: 11,
        name: "Renato Santos",
        number: 27,
        position: "ZAG",
        age: 28,
        nationality: "Brasileiro",
        value: 2750000,
        rating: 7.8,
        status: "disponivel",
        notes: "Líder da defesa",
        yearsAtClub: 3
    },
    
    // Laterais
    {
        id: 12,
        name: "Matheus Bidu",
        number: 21,
        position: "LAT",
        age: 26,
        nationality: "Brasileiro",
        value: 16500000,
        rating: 8.2,
        status: "disponivel",
        notes: "Lateral esquerdo de qualidade",
        yearsAtClub: "2022-presente"
    },
    {
        id: 13,
        name: "Hugo",
        number: 46,
        position: "LAT",
        age: 28,
        nationality: "Brasileiro",
        value: 6600000,
        rating: 7.5,
        status: "disponivel",
        notes: "Lateral esquerdo versátil",
        yearsAtClub: "2023-presente"
    },
    {
        id: 14,
        name: "Matheuzinho",
        number: 2,
        position: "LAT",
        age: 25,
        nationality: "Brasileiro",
        value: 33000000,
        rating: 8.3,
        status: "disponivel",
        notes: "Lateral direito moderno",
        yearsAtClub: "2024-presente"
    },
    {
        id: 15,
        name: "Pedro Milans",
        number: 20,
        position: "LAT",
        age: 23,
        nationality: "Uruguaio",
        value: 8250000,
        rating: 7.3,
        status: "disponivel",
        notes: "Lateral direito uruguaio",
        yearsAtClub: "2024-presente"
    },
    {
        id: 16,
        name: "Alex Santana",
        number: 28,
        position: "VOL",
        age: 26,
        nationality: "Brasileiro",
        value: 3800000,
        rating: 7.6,
        status: "disponivel",
        notes: "Volante de marcação",
        yearsAtClub: 4
    },
    
    // Volantes
    {
        id: 17,
        name: "Raniele",
        number: 14,
        position: "VOL",
        age: 29,
        nationality: "Brasileiro",
        value: 16500000,
        rating: 8.1,
        status: "disponivel",
        notes: "Primeiro volante, líder",
        yearsAtClub: "2022-presente"
    },
    {
        id: 18,
        name: "José Martínez",
        number: 70,
        position: "VOL",
        age: 31,
        nationality: "Venezuelano",
        value: 11000000,
        rating: 7.8,
        status: "disponivel",
        notes: "Volante venezuelano de qualidade",
        yearsAtClub: "2023-presente"
    },
    
    // Meias
    {
        id: 19,
        name: "Charles",
        number: 35,
        position: "MEI",
        age: 29,
        nationality: "Brasileiro",
        value: 5500000,
        rating: 8.1,
        status: "disponivel",
        notes: "Experiência e qualidade",
        yearsAtClub: 3
    },
    {
        id: 20,
        name: "Breno Bidon",
        number: 7,
        position: "MEI",
        age: 20,
        nationality: "Brasileiro",
        value: 77000000,
        rating: 8.7,
        status: "disponivel",
        notes: "Grande promessa, meia de criação",
        yearsAtClub: "2024-presente"
    },
    {
        id: 21,
        name: "André",
        number: 49,
        position: "MEI",
        age: 23,
        nationality: "Brasileiro",
        value: 6600000,
        rating: 8.2,
        status: "disponivel",
        notes: "Grande promessa",
        yearsAtClub: 3
    },
    {
        id: 22,
        name: "Bahia",
        number: 54,
        position: "MEI",
        age: 28,
        nationality: "Brasileiro",
        value: 4400000,
        rating: 7.9,
        status: "disponivel",
        notes: "Meio-campo versátil",
        yearsAtClub: 4
    },
    {
        id: 23,
        name: "Matheus Pereira",
        number: 23,
        position: "MEI",
        age: 25,
        nationality: "Brasileiro",
        value: 8800000,
        rating: 8.4,
        status: "disponivel",
        notes: "Criativo e veloz",
        yearsAtClub: 2
    },
    {
        id: 24,
        name: "André Carrillo",
        number: 19,
        position: "MEI",
        age: 30,
        nationality: "Peruano",
        value: 3850000,
        rating: 7.7,
        status: "disponivel",
        notes: "Ponteiro experiente",
        yearsAtClub: 2
    },
    {
        id: 25,
        name: "Rodrigo Garro",
        number: 8,
        position: "MEI",
        age: 28,
        nationality: "Argentino",
        value: 66000000,
        rating: 8.6,
        status: "disponivel",
        notes: "Grande meia argentino, peça chave",
        yearsAtClub: "2025-presente"
    },
    
    // Atacantes
    {
        id: 26,
        name: "Vitinho",
        number: 11,
        position: "ATA",
        age: 32,
        nationality: "Brasileiro",
        value: 5500000,
        rating: 7.8,
        status: "disponivel",
        notes: "Ponta experiente e veloz",
        yearsAtClub: "2024-presente"
    },
    {
        id: 27,
        name: "Kayke",
        number: 31,
        position: "ATA",
        age: 26,
        nationality: "Brasileiro",
        value: 3850000,
        rating: 7.5,
        status: "disponivel",
        notes: "Centroavante de área",
        yearsAtClub: 2
    },
    {
        id: 28,
        name: "Yuri Alberto",
        number: 9,
        position: "ATA",
        age: 24,
        nationality: "Brasileiro",
        value: 121000000,
        rating: 8.8,
        status: "disponivel",
        notes: "Centroavante titular, artilheiro",
        yearsAtClub: "2022-presente"
    },
    {
        id: 29,
        name: "Memphis Depay",
        number: 10,
        position: "ATA",
        age: 31,
        nationality: "Holandês",
        value: 44000000,
        rating: 8.7,
        status: "disponivel",
        notes: "Estrela holandesa, camisa 10",
        yearsAtClub: "2025-presente"
    },
    {
        id: 30,
        name: "Gui Negão",
        number: 56,
        position: "ATA",
        age: 18,
        nationality: "Brasileiro",
        value: 44000000,
        rating: 8.1,
        status: "disponivel",
        notes: "Jovem centroavante promissor",
        yearsAtClub: "2024-presente"
    },
    {
        id: 31,
        name: "Pedro Raul",
        number: 18,
        position: "ATA",
        age: 29,
        nationality: "Brasileiro",
        value: 22000000,
        rating: 8.0,
        status: "disponivel",
        notes: "Centroavante experiente",
        yearsAtClub: "2025-presente"
    }
];

// Escalação atual
let currentLineup = {
    formation: "4-4-2",
    players: [],
    substitutes: [],
    matchInfo: {
        opponent: "São Paulo FC",
        date: "2024-06-15",
        competition: "Campeonato Paulista"
    }
};

// Variáveis globais
let playerIdCounter = 32; // Próximo ID disponível
let isEditingPlayer = false;
let currentPlayerId = null;

// ===== FUNÇÕES DE INICIALIZAÇÃO =====

// Atualiza a data atual no sistema
function updateCurrentDate() {
    const now = new Date();
    const options = { 
        weekday: 'long', 
        year: 'numeric', 
        month: 'long', 
        day: 'numeric' 
    };
    const dateElement = document.querySelector('.hero-subtitle');
    if (dateElement) {
        dateElement.innerHTML += `<br><small>${now.toLocaleDateString('pt-BR', options)}</small>`;
    }
}

// Carrega dados salvos no localStorage
function loadSavedData() {
    const savedPlayers = localStorage.getItem('corinthiansPlayers');
    const savedLineup = localStorage.getItem('corinthiansLineup');
    
    if (savedPlayers) {
        corinthiansPlayers = JSON.parse(savedPlayers);
        playerIdCounter = Math.max(...corinthiansPlayers.map(p => p.id)) + 1;
    }
    
    if (savedLineup) {
        currentLineup = JSON.parse(savedLineup);
        document.getElementById('formation').value = currentLineup.formation;
        document.getElementById('match-against').value = currentLineup.matchInfo.opponent;
        document.getElementById('match-date').value = currentLineup.matchInfo.date;
    }
    
    // Atualizar contador de elenco
    document.getElementById('current-squad').textContent = `${corinthiansPlayers.length} jogadores`;
}

// Salva dados no localStorage
function saveToLocalStorage() {
    localStorage.setItem('corinthiansPlayers', JSON.stringify(corinthiansPlayers));
    localStorage.setItem('corinthiansLineup', JSON.stringify(currentLineup));
}

// ===== FUNÇÕES DE RENDERIZAÇÃO =====

// Renderiza a grade de jogadores
function renderPlayersGrid() {
    const playersGrid = document.getElementById('players-grid');
    const positionFilter = document.getElementById('filter-position').value;
    const statusFilter = document.getElementById('filter-status').value;
    const searchText = document.getElementById('search-player').value.toLowerCase();
    
    // Filtrar jogadores
    let filteredPlayers = corinthiansPlayers.filter(player => {
        const matchesPosition = positionFilter === 'all' || player.position === positionFilter;
        const matchesStatus = statusFilter === 'all' || player.status === statusFilter;
        const matchesSearch = searchText === '' || 
            player.name.toLowerCase().includes(searchText) ||
            player.number.toString().includes(searchText);
        
        return matchesPosition && matchesStatus && matchesSearch;
    });
    
    // Ordenar por posição e número
    const positionOrder = { GOL: 1, ZAG: 2, LAT: 3, VOL: 4, MEI: 5, ATA: 6 };
    filteredPlayers.sort((a, b) => {
        if (positionOrder[a.position] !== positionOrder[b.position]) {
            return positionOrder[a.position] - positionOrder[b.position];
        }
        return a.number - b.number;
    });
    
    // Gerar HTML
    playersGrid.innerHTML = '';
    
    if (filteredPlayers.length === 0) {
        playersGrid.innerHTML = `
            <div class="empty-state">
                <i class="fas fa-users-slash"></i>
                <p>Nenhum jogador encontrado</p>
            </div>
        `;
        return;
    }
    
    filteredPlayers.forEach(player => {
        const isInLineup = currentLineup.players.some(p => p.id === player.id);
        const isSubstitute = currentLineup.substitutes.some(p => p.id === player.id);
        
        const playerCard = document.createElement('div');
        playerCard.className = 'player-card';
        playerCard.dataset.id = player.id;
        
        // Status do jogador
        let statusClass = '';
        let statusText = '';
        switch(player.status) {
            case 'disponivel':
                statusClass = 'status-disponivel';
                statusText = 'Disponível';
                break;
            case 'lesionado':
                statusClass = 'status-lesionado';
                statusText = 'Lesionado';
                break;
            case 'suspenso':
                statusClass = 'status-suspenso';
                statusText = 'Suspenso';
                break;
        }
        
        // Nome da posição
        const positionNames = {
            'GOL': 'Goleiro',
            'ZAG': 'Zagueiro',
            'LAT': 'Lateral',
            'VOL': 'Volante',
            'MEI': 'Meia',
            'ATA': 'Atacante'
        };
        
        // Estrelas da avaliação
        const fullStars = Math.min(Math.floor(player.rating), 5);
        const halfStar = player.rating % 1 >= 0.5 && fullStars < 5 ? '½' : '';
        const emptyStars = Math.max(0, 5 - Math.ceil(player.rating));
        const ratingStars = '★'.repeat(fullStars) + halfStar + '☆'.repeat(emptyStars);
        
        playerCard.innerHTML = `
            <div class="player-header">
                <div class="player-number">${player.number}</div>
                <div class="player-name">
                    <h3>${player.name}</h3>
                    <span class="player-position position-${player.position}">
                        ${positionNames[player.position] || player.position}
                    </span>
                </div>
            </div>
            <div class="player-details">
                <div class="player-detail">
                    <span class="detail-label">Idade</span>
                    <span class="detail-value">${player.age} anos</span>
                </div>
                <div class="player-detail">
                    <span class="detail-label">Nacionalidade</span>
                    <span class="detail-value">${player.nationality}</span>
                </div>
                <div class="player-detail">
                    <span class="detail-label">Valor</span>
                    <span class="detail-value">R$ ${(player.value / 1000000).toFixed(1)}M</span>
                </div>
                <div class="player-detail">
                    <span class="detail-label">No clube</span>
                    <span class="detail-value">${player.yearsAtClub || '-'}</span>
                </div>
            </div>
            <div class="player-rating">
                <div class="rating-stars">${ratingStars}</div>
                <div class="rating-value">Nota: ${player.rating.toFixed(1)}</div>
            </div>
            <div class="player-status ${statusClass}">${statusText}</div>
            <div class="player-actions">
                ${isInLineup || isSubstitute ? 
                    `<button class="action-btn remove" data-id="${player.id}">
                        <i class="fas fa-minus-circle"></i> Remover
                    </button>` :
                    `<button class="action-btn add" data-id="${player.id}">
                        <i class="fas fa-plus-circle"></i> ${player.position === 'GOL' ? 'Escalar' : 'Adicionar'}
                    </button>`
                }
                <button class="action-btn edit" data-id="${player.id}">
                    <i class="fas fa-edit"></i> Editar
                </button>
                <button class="action-btn delete" data-id="${player.id}">
                    <i class="fas fa-trash"></i> Excluir
                </button>
            </div>
        `;
        
        playersGrid.appendChild(playerCard);
    });
    
    // Adicionar eventos aos botões
    playersGrid.querySelectorAll('.action-btn.add').forEach(btn => {
        btn.addEventListener('click', function() {
            const playerId = parseInt(this.dataset.id);
            addPlayerToLineup(playerId);
        });
    });
    
    playersGrid.querySelectorAll('.action-btn.remove').forEach(btn => {
        btn.addEventListener('click', function() {
            const playerId = parseInt(this.dataset.id);
            removePlayerFromLineup(playerId);
        });
    });
    
    playersGrid.querySelectorAll('.action-btn.edit').forEach(btn => {
        btn.addEventListener('click', function() {
            const playerId = parseInt(this.dataset.id);
            openEditPlayerModal(playerId);
        });
    });
    
    playersGrid.querySelectorAll('.action-btn.delete').forEach(btn => {
        btn.addEventListener('click', function() {
            const playerId = parseInt(this.dataset.id);
            if (confirm('Tem certeza que deseja excluir este jogador?')) {
                deletePlayer(playerId);
            }
        });
    });
    
    playersGrid.querySelectorAll('.player-card').forEach(card => {
        card.addEventListener('click', function(e) {
            if (!e.target.closest('.player-actions')) {
                const playerId = parseInt(this.dataset.id);
                showPlayerDetails(playerId);
            }
        });
    });
}

// Renderiza a escalação no campo
function renderLineup() {
    // Limpar posições
    document.querySelectorAll('.position-row').forEach(row => {
        row.innerHTML = '';
    });
    
    // Configurar formação
    const formation = document.getElementById('formation').value;
    currentLineup.formation = formation;
    
    // Posições por formação
    const formations = {
        '4-4-2': { defense: 4, midfield: 4, attack: 2 },
        '4-3-3': { defense: 4, midfield: 3, attack: 3 },
        '4-2-3-1': { defense: 4, midfield: 5, attack: 1 },
        '3-5-2': { defense: 3, midfield: 5, attack: 2 },
        '5-3-2': { defense: 5, midfield: 3, attack: 2 }
    };
    
    const config = formations[formation];
    
    // Separar jogadores por posição
    const goalkeepers = currentLineup.players.filter(p => p.position === 'GOL');
    const defenders = currentLineup.players.filter(p => p.position === 'ZAG' || p.position === 'LAT');
    const midfielders = currentLineup.players.filter(p => p.position === 'VOL' || p.position === 'MEI');
    const attackers = currentLineup.players.filter(p => p.position === 'ATA');
    
    // Renderizar goleiro
    const goalkeeperRow = document.querySelector('.goalkeeper');
    goalkeeperRow.innerHTML = ''; // Limpar antes de adicionar
    if (goalkeepers.length > 0) {
        const player = goalkeepers[0];
        goalkeeperRow.appendChild(createPositionSlot(player, true));
    } else {
        goalkeeperRow.appendChild(createEmptyPositionSlot('GOL'));
    }
    
    // Renderizar defesa
    const defenseRow = document.querySelector('.defense');
    defenseRow.innerHTML = ''; // Limpar antes de adicionar
    for (let i = 0; i < config.defense; i++) {
        if (defenders[i]) {
            defenseRow.appendChild(createPositionSlot(defenders[i]));
        } else {
            defenseRow.appendChild(createEmptyPositionSlot('DEF'));
        }
    }
    
    // Renderizar meio-campo
    const midfieldRow = document.querySelector('.midfield');
    midfieldRow.innerHTML = ''; // Limpar antes de adicionar
    for (let i = 0; i < config.midfield; i++) {
        if (midfielders[i]) {
            midfieldRow.appendChild(createPositionSlot(midfielders[i]));
        } else {
            midfieldRow.appendChild(createEmptyPositionSlot('MEI'));
        }
    }
    
    // Renderizar ataque
    const attackRow = document.querySelector('.attack');
    attackRow.innerHTML = ''; // Limpar antes de adicionar
    for (let i = 0; i < config.attack; i++) {
        if (attackers[i]) {
            attackRow.appendChild(createPositionSlot(attackers[i]));
        } else {
            attackRow.appendChild(createEmptyPositionSlot('ATA'));
        }
    }
    
    // Renderizar reservas
    renderSubstitutes();
    
    // Atualizar estatísticas
    updateStats();
}

// Cria um slot de posição com jogador
function createPositionSlot(player, isGoalkeeper = false) {
    const slot = document.createElement('div');
    slot.className = `position-slot filled position-${player.position}`;
    slot.dataset.playerId = player.id;
    
    slot.innerHTML = `
        <div class="slot-number">${player.number}</div>
        <div class="slot-name">${player.name.split(' ')[0]}</div>
        <div class="slot-position">${getPositionName(player.position)}</div>
    `;
    
    slot.addEventListener('click', function() {
        removePlayerFromLineup(player.id);
    });
    
    return slot;
}

// Cria um slot de posição vazio
function createEmptyPositionSlot(position) {
    const slot = document.createElement('div');
    slot.className = 'position-slot empty';
    slot.innerHTML = `
        <i class="fas fa-plus"></i>
        <div class="slot-position">${getPositionName(position)}</div>
    `;
    
    slot.addEventListener('click', function() {
        showAvailablePlayersForPosition(position);
    });
    
    return slot;
}

// Renderiza a lista de reservas
function renderSubstitutes() {
    const substitutesList = document.getElementById('substitutes-list');
    substitutesList.innerHTML = '';
    
    if (currentLineup.substitutes.length === 0) {
        substitutesList.innerHTML = `
            <div class="empty-state">
                <i class="fas fa-users-slash"></i>
                <p>Nenhum reserva</p>
            </div>
        `;
        return;
    }
    
    currentLineup.substitutes.forEach(player => {
        const subCard = document.createElement('div');
        subCard.className = 'substitute-card';
        subCard.dataset.playerId = player.id;
        
        subCard.innerHTML = `
            <div class="substitute-info">
                <div class="substitute-number">${player.number}</div>
                <div class="substitute-name">
                    <h4>${player.name.split(' ')[0]}</h4>
                    <div class="substitute-position">${getPositionName(player.position)}</div>
                </div>
                <button class="action-btn remove" data-id="${player.id}">
                    <i class="fas fa-times"></i>
                </button>
            </div>
        `;
        
        substitutesList.appendChild(subCard);
    });
    
    // Adicionar eventos aos botões de remover
    substitutesList.querySelectorAll('.action-btn.remove').forEach(btn => {
        btn.addEventListener('click', function() {
            const playerId = parseInt(this.dataset.id);
            removePlayerFromLineup(playerId);
        });
    });
}

// Renderiza os ídolos
function renderIdols() {
    const idolsGallery = document.getElementById('idols-gallery');
    if (!idolsGallery) return;
    
    const idols = [
        {
            name: "Sócrates",
            position: "MEI",
            years: "1978-1984",
            description: "Capitão da Democracia Corinthiana. Médico e intelectual que revolucionou o futebol.",
            image: "https://cdn.meutimao.com.br/_upload/jogador/socrates-brasileiro-sampaio-de-s-v-de-oliveira_0_corinthians.jpg"
        },
        {
            name: "Rivelino",
            position: "MEI",
            years: "1974-1978",
            description: "Rei da folha seca. Um dos maiores cobradores de falta da história.",
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSdiG32NYCKPr-nzs0EKvR5zVVhwoblXHxMwg&s"
        },
        {
            name: "Neto",
            position: "ATA",
            years: "1989-1993",
            description: "Ídolo dos anos 90, artilheiro e líder. Conquistou o Brasileirão de 1990.",
            image: "https://todopoderosotimao.com.br/imagens/idolos/neto.jpg"
        },
        {
            name: "Marcelinho Carioca",
            position: "MEI",
            years: "1994-2001",
            description: "Rei do Parque São Jorge. Maior ídolo do Corinthians no século XXI.",
            image: "https://cdn.meutimao.com.br/_upload/idolos-do-corinthians/marcelinho_carioca.jpg"
        },
        {
            name: "Ronaldo Fenômeno",
            position: "ATA",
            years: "2009-2011",
            description: "Fenômeno do futebol mundial. Ajudou o Corinthians a voltar à elite.",
            image: "https://static.corinthians.com.br/uploads/1568916745c9e37c28ce5852218032aae6f5632b13.jpg"
        },
        {
            name: "Cássio",
            position: "GOL",
            years: "2012-presente",
            description: "Herói do Mundial 2012. Melhor goleiro da história do clube.",
            image: "https://img.a.transfermarkt.technology/portrait/big/50144-1458293316.jpg?lm=1"
        }
    ];
    
    idolsGallery.innerHTML = '';
    
    idols.forEach(idol => {
        const idolCard = document.createElement('div');
        idolCard.className = 'idol-card';
        
        idolCard.innerHTML = `
            <img src="${idol.image}" alt="${idol.name}" class="idol-img" onerror="this.src='https://via.placeholder.com/300x200/000000/FFFFFF?text=${idol.name}'">
            <div class="idol-info">
                <h3 class="idol-name">${idol.name}</h3>
                <div class="idol-period">${idol.years} • ${getPositionName(idol.position)}</div>
                <p class="idol-description">${idol.description}</p>
            </div>
        `;
        
        idolsGallery.appendChild(idolCard);
    });
}

// Atualiza as estatísticas
function updateStats() {
    const totalPlayers = currentLineup.players.length + currentLineup.substitutes.length;
    document.getElementById('players-in-lineup').textContent = `${totalPlayers}/18`;
    
    if (totalPlayers > 0) {
        const allPlayers = [...currentLineup.players, ...currentLineup.substitutes];
        const avgAge = allPlayers.reduce((sum, player) => sum + player.age, 0) / allPlayers.length;
        const avgRating = allPlayers.reduce((sum, player) => sum + player.rating, 0) / allPlayers.length;
        const totalValue = allPlayers.reduce((sum, player) => sum + player.value, 0);
        
        document.getElementById('avg-age-lineup').textContent = avgAge.toFixed(1);
        document.getElementById('avg-rating-lineup').textContent = avgRating.toFixed(1);
        document.getElementById('total-value-lineup').textContent = `R$ ${(totalValue / 1000000).toFixed(1)}M`;
    } else {
        document.getElementById('avg-age-lineup').textContent = '0';
        document.getElementById('avg-rating-lineup').textContent = '0.0';
        document.getElementById('total-value-lineup').textContent = 'R$ 0';
    }
}

// ===== FUNÇÕES DE MANIPULAÇÃO =====

// Adiciona jogador à escalação
function addPlayerToLineup(playerId) {
    const player = corinthiansPlayers.find(p => p.id === playerId);
    if (!player) return;
    
    // Verificar se já está escalado
    if (currentLineup.players.some(p => p.id === playerId) || 
        currentLineup.substitutes.some(p => p.id === playerId)) {
        showNotification('Jogador já está na escalação!', 'warning');
        return;
    }
    
    // Se for goleiro, verificar se já tem um
    if (player.position === 'GOL') {
        if (currentLineup.players.some(p => p.position === 'GOL')) {
            showNotification('Já existe um goleiro na escalação!', 'warning');
            return;
        }
        currentLineup.players.push(player);
    } else {
        // Verificar se time principal está cheio (11 jogadores)
        if (currentLineup.players.length >= 11) {
            // Adicionar como reserva
            currentLineup.substitutes.push(player);
            showNotification(`${player.name} adicionado como reserva!`, 'info');
        } else {
            currentLineup.players.push(player);
        }
    }
    
    renderLineup();
    renderPlayersGrid();
    saveLineupToStorage();
    showNotification(`${player.name} adicionado à escalação!`, 'success');
}

// Remove jogador da escalação
function removePlayerFromLineup(playerId) {
    currentLineup.players = currentLineup.players.filter(p => p.id !== playerId);
    currentLineup.substitutes = currentLineup.substitutes.filter(p => p.id !== playerId);
    
    renderLineup();
    renderPlayersGrid();
    saveToLocalStorage();
}

// Deleta jogador do sistema
function deletePlayer(playerId) {
    // Remover da escalação se estiver
    removePlayerFromLineup(playerId);
    
    // Remover do elenco
    corinthiansPlayers = corinthiansPlayers.filter(p => p.id !== playerId);
    
    renderPlayersGrid();
    saveToLocalStorage();
}

// Mostra jogadores disponíveis para uma posição
function showAvailablePlayersForPosition(position) {
    const availablePlayers = corinthiansPlayers.filter(player => {
        const positionMatches = player.position === position || 
                              (position === 'DEF' && (player.position === 'ZAG' || player.position === 'LAT')) ||
                              (position === 'MEI' && (player.position === 'VOL' || player.position === 'MEI'));
        
        const notInLineup = !currentLineup.players.some(p => p.id === player.id) && 
                           !currentLineup.substitutes.some(p => p.id === player.id);
        
        return positionMatches && notInLineup && player.status === 'disponivel';
    });
    
    if (availablePlayers.length === 0) {
        showNotification(`Não há jogadores disponíveis para a posição ${getPositionName(position)}`, 'warning');
        return;
    }
    
    showPlayerSelectionModal(availablePlayers, position);
}

// Mostra modal visual para seleção de jogadores
function showPlayerSelectionModal(players, position) {
    // Criar modal se não existir
    if (!document.getElementById('player-selection-modal')) {
        const modal = document.createElement('div');
        modal.id = 'player-selection-modal';
        modal.className = 'modal';
        modal.innerHTML = `
            <div class="modal-content player-selection-modal">
                <span class="close-selection-modal">&times;</span>
                <div class="modal-header">
                    <h2><i class="fas fa-users"></i> Escolher Jogador</h2>
                    <p class="modal-subtitle">Selecione um jogador para a posição ${getPositionName(position)}</p>
                </div>
                <div class="players-selection-list" id="players-selection-list">
                    <!-- Jogadores serão carregados aqui -->
                </div>
            </div>
        `;
        document.body.appendChild(modal);
        
        // Evento de fechar
        modal.querySelector('.close-selection-modal').addEventListener('click', closePlayerSelectionModal);
        modal.addEventListener('click', function(e) {
            if (e.target === modal) closePlayerSelectionModal();
        });
    }
    
    // Renderizar jogadores
    const playersList = document.getElementById('players-selection-list');
    playersList.innerHTML = '';
    
    players.forEach(player => {
        const playerCard = document.createElement('div');
        playerCard.className = 'selection-player-card';
        playerCard.dataset.playerId = player.id;
        
        const ratingStars = '★'.repeat(Math.floor(player.rating)) + 
                          (player.rating % 1 >= 0.5 ? '½' : '') +
                          '☆'.repeat(Math.max(0, 5 - Math.ceil(player.rating)));
        
        playerCard.innerHTML = `
            <div class="selection-player-number">${player.number}</div>
            <div class="selection-player-info">
                <h4>${player.name}</h4>
                <div class="selection-player-details">
                    <span class="selection-position">${getPositionName(player.position)}</span>
                    <span class="selection-age">${player.age} anos</span>
                    <span class="selection-rating">${ratingStars} ${player.rating.toFixed(1)}</span>
                </div>
            </div>
            <div class="selection-player-value">R$ ${(player.value / 1000000).toFixed(1)}M</div>
        `;
        
        playerCard.addEventListener('click', function() {
            addPlayerToLineup(player.id);
            closePlayerSelectionModal();
        });
        
        playersList.appendChild(playerCard);
    });
    
    // Mostrar modal
    document.getElementById('player-selection-modal').style.display = 'block';
}

// Fecha modal de seleção de jogadores
function closePlayerSelectionModal() {
    const modal = document.getElementById('player-selection-modal');
    if (modal) {
        modal.style.display = 'none';
    }
}

// Mostra notificação (substitui alerts)
function showNotification(message, type = 'info') {
    // Criar elemento de notificação
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.innerHTML = `
        <i class="fas fa-${type === 'success' ? 'check-circle' : type === 'warning' ? 'exclamation-triangle' : 'info-circle'}"></i>
        <span>${message}</span>
    `;
    
    // Adicionar ao body
    document.body.appendChild(notification);
    
    // Animar entrada
    setTimeout(() => notification.classList.add('show'), 10);
    
    // Remover após 3 segundos
    setTimeout(() => {
        notification.classList.remove('show');
        setTimeout(() => notification.remove(), 300);
    }, 3000);
}

// ===== FUNÇÕES DO MODAL =====

// Abre modal para adicionar jogador
function openAddPlayerModal() {
    isEditingPlayer = false;
    currentPlayerId = null;
    
    document.getElementById('modal-title').textContent = 'NOVO JOGADOR';
    document.getElementById('player-form').reset();
    document.getElementById('player-number').value = '';
    document.getElementById('player-age').value = '';
    document.getElementById('player-value').value = '1000000';
    document.getElementById('player-rating').value = '7.0';
    document.getElementById('rating-value').textContent = '7.0';
    document.getElementById('player-status').value = 'disponivel';
    document.getElementById('player-notes').value = '';
    
    document.getElementById('player-modal').style.display = 'block';
}

// Abre modal para editar jogador
function openEditPlayerModal(playerId) {
    const player = corinthiansPlayers.find(p => p.id === playerId);
    if (!player) return;
    
    isEditingPlayer = true;
    currentPlayerId = playerId;
    
    document.getElementById('modal-title').textContent = 'EDITAR JOGADOR';
    document.getElementById('player-name').value = player.name;
    document.getElementById('player-number').value = player.number;
    document.getElementById('player-position').value = player.position;
    document.getElementById('player-age').value = player.age;
    document.getElementById('player-nationality').value = player.nationality;
    document.getElementById('player-value').value = player.value;
    document.getElementById('player-rating').value = player.rating;
    document.getElementById('rating-value').textContent = player.rating.toFixed(1);
    document.getElementById('player-status').value = player.status;
    document.getElementById('player-notes').value = player.notes || '';
    
    document.getElementById('player-modal').style.display = 'block';
}

// Fecha modal de jogador
function closePlayerModal() {
    document.getElementById('player-modal').style.display = 'none';
}

// Salva jogador (novo ou edição)
function savePlayer(event) {
    event.preventDefault();
    
    const playerData = {
        name: document.getElementById('player-name').value.trim(),
        number: parseInt(document.getElementById('player-number').value),
        position: document.getElementById('player-position').value,
        age: parseInt(document.getElementById('player-age').value),
        nationality: document.getElementById('player-nationality').value.trim(),
        value: parseInt(document.getElementById('player-value').value),
        rating: parseFloat(document.getElementById('player-rating').value),
        status: document.getElementById('player-status').value,
        notes: document.getElementById('player-notes').value.trim(),
        yearsAtClub: `${new Date().getFullYear()}-presente`
    };
    
    // Validação básica
    if (!playerData.name || !playerData.number || !playerData.position || !playerData.age) {
        showNotification('Por favor, preencha todos os campos obrigatórios!', 'warning');
        return;
    }
    
    if (isEditingPlayer && currentPlayerId) {
        // Atualizar jogador existente
        const index = corinthiansPlayers.findIndex(p => p.id === currentPlayerId);
        if (index !== -1) {
            playerData.id = currentPlayerId;
            corinthiansPlayers[index] = playerData;
        }
    } else {
        // Adicionar novo jogador
        playerData.id = playerIdCounter++;
        corinthiansPlayers.push(playerData);
    }
    
    closePlayerModal();
    renderPlayersGrid();
    saveToLocalStorage();
    
    showNotification(`Jogador ${isEditingPlayer ? 'atualizado' : 'adicionado'} com sucesso!`, 'success');
}

// Mostra detalhes do jogador
function showPlayerDetails(playerId) {
    const player = corinthiansPlayers.find(p => p.id === playerId);
    if (!player) return;
    
    const modalContent = document.getElementById('player-details');
    const positionNames = {
        'GOL': 'Goleiro',
        'ZAG': 'Zagueiro', 
        'LAT': 'Lateral',
        'VOL': 'Volante',
        'MEI': 'Meia',
        'ATA': 'Atacante'
    };
    
    modalContent.innerHTML = `
        <div class="player-detail-view">
            <div class="player-detail-header">
                <div class="detail-avatar">${player.number}</div>
                <div>
                    <h3 class="detail-name">${player.name}</h3>
                    <div class="player-position position-${player.position}">
                        ${positionNames[player.position]} • Camisa ${player.number}
                    </div>
                </div>
            </div>
            
            <div class="detail-info-grid">
                <div class="detail-item">
                    <div class="detail-label">Idade</div>
                    <div class="detail-value">${player.age} anos</div>
                </div>
                <div class="detail-item">
                    <div class="detail-label">Nacionalidade</div>
                    <div class="detail-value">${player.nationality}</div>
                </div>
                <div class="detail-item">
                    <div class="detail-label">Valor de Mercado</div>
                    <div class="detail-value">R$ ${(player.value / 1000000).toFixed(1)} milhões</div>
                </div>
                <div class="detail-item">
                    <div class="detail-label">Avaliação</div>
                    <div class="detail-value">${player.rating.toFixed(1)}/10</div>
                </div>
                <div class="detail-item">
                    <div class="detail-label">Status</div>
                    <div class="detail-value ${player.status === 'disponivel' ? 'status-disponivel' : 
                                            player.status === 'lesionado' ? 'status-lesionado' : 'status-suspenso'}">
                        ${player.status === 'disponivel' ? 'Disponível' : 
                         player.status === 'lesionado' ? 'Lesionado' : 'Suspenso'}
                    </div>
                </div>
                <div class="detail-item">
                    <div class="detail-label">No Corinthians desde</div>
                    <div class="detail-value">${player.yearsAtClub || '-'}</div>
                </div>
            </div>
            
            ${player.notes ? `
                <div class="detail-item">
                    <div class="detail-label">Observações</div>
                    <div class="detail-value">${player.notes}</div>
                </div>
            ` : ''}
        </div>
    `;
    
    document.getElementById('details-modal').style.display = 'block';
}

// Fecha modal de detalhes
function closeDetailsModal() {
    document.getElementById('details-modal').style.display = 'none';
}

// ===== FUNÇÕES UTILITÁRIAS =====

// Retorna o nome completo da posição
function getPositionName(positionCode) {
    const positions = {
        'GOL': 'Goleiro',
        'ZAG': 'Zagueiro',
        'LAT': 'Lateral', 
        'VOL': 'Volante',
        'MEI': 'Meia',
        'ATA': 'Atacante',
        'DEF': 'Defensor'
    };
    return positions[positionCode] || positionCode;
}

// Formata valor em reais
function formatCurrency(value) {
    if (value >= 1000000) {
        return `R$ ${(value / 1000000).toFixed(1)}M`;
    } else if (value >= 1000) {
        return `R$ ${(value / 1000).toFixed(1)}K`;
    }
    return `R$ ${value}`;
}

// ===== CONFIGURAÇÃO DE EVENTOS =====

// Configura todos os event listeners
function setupEventListeners() {
    // Navegação
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const section = this.dataset.section;
            showSection(section);
        });
    });
    
    document.querySelectorAll('.feature-card').forEach(card => {
        card.addEventListener('click', function() {
            const section = this.dataset.section;
            showSection(section);
        });
    });
    
    // Botão adicionar jogador
    document.getElementById('add-player').addEventListener('click', openAddPlayerModal);
    
    // Fechar modais
    document.querySelector('.close-modal').addEventListener('click', closePlayerModal);
    document.querySelector('.close-details-modal').addEventListener('click', closeDetailsModal);
    document.getElementById('cancel-modal').addEventListener('click', closePlayerModal);
    
    // Formulário de jogador
    document.getElementById('player-form').addEventListener('submit', savePlayer);
    
    // Controle de rating
    document.getElementById('player-rating').addEventListener('input', function() {
        document.getElementById('rating-value').textContent = this.value;
    });
    
    // Filtros
    document.getElementById('filter-position').addEventListener('change', renderPlayersGrid);
    document.getElementById('filter-status').addEventListener('change', renderPlayersGrid);
    document.getElementById('search-player').addEventListener('input', renderPlayersGrid);
    document.getElementById('clear-filters').addEventListener('click', function() {
        document.getElementById('filter-position').value = 'all';
        document.getElementById('filter-status').value = 'all';
        document.getElementById('search-player').value = '';
        renderPlayersGrid();
    });
    
    // Formação
    document.getElementById('formation').addEventListener('change', function() {
        currentLineup.formation = this.value;
        renderLineup();
    });
    
    // Informações da partida
    document.getElementById('match-against').addEventListener('change', function() {
        currentLineup.matchInfo.opponent = this.value;
        saveToLocalStorage();
    });
    
    document.getElementById('match-date').addEventListener('change', function() {
        currentLineup.matchInfo.date = this.value;
        saveToLocalStorage();
    });
    
    // Botões da escalação
    document.getElementById('save-lineup').addEventListener('click', function() {
        saveToLocalStorage();
        showNotification('Escalação salva com sucesso!', 'success');
    });
    
    document.getElementById('auto-lineup').addEventListener('click', function() {
        autoGenerateLineup();
    });
    
    document.getElementById('clear-lineup').addEventListener('click', function() {
        if (confirm('Tem certeza que deseja limpar toda a escalação?')) {
            currentLineup.players = [];
            currentLineup.substitutes = [];
            renderLineup();
            saveToLocalStorage();
        }
    });
    
    document.getElementById('print-lineup').addEventListener('click', function() {
        window.print();
    });
    
    // Fechar modais clicando fora
    window.addEventListener('click', function(event) {
        const playerModal = document.getElementById('player-modal');
        const detailsModal = document.getElementById('details-modal');
        
        if (event.target === playerModal) closePlayerModal();
        if (event.target === detailsModal) closeDetailsModal();
    });
}

// Gera escalação automática
function autoGenerateLineup() {
    // Limpar escalação atual
    currentLineup.players = [];
    currentLineup.substitutes = [];
    
    // Pegar melhores jogadores disponíveis por posição
    const availablePlayers = corinthiansPlayers
        .filter(p => p.status === 'disponivel')
        .sort((a, b) => b.rating - a.rating);
    
    // Adicionar goleiro
    const goalkeeper = availablePlayers.find(p => p.position === 'GOL');
    if (goalkeeper) {
        currentLineup.players.push(goalkeeper);
    }
    
    // Adicionar defesa (4 jogadores)
    const defenders = availablePlayers
        .filter(p => p.position === 'ZAG' || p.position === 'LAT')
        .slice(0, 4);
    defenders.forEach(defender => {
        currentLineup.players.push(defender);
    });
    
    // Adicionar meio-campo (4 jogadores)
    const midfielders = availablePlayers
        .filter(p => p.position === 'VOL' || p.position === 'MEI')
        .slice(0, 4);
    midfielders.forEach(midfielder => {
        currentLineup.players.push(midfielder);
    });
    
    // Adicionar ataque (2 jogadores)
    const attackers = availablePlayers
        .filter(p => p.position === 'ATA')
        .slice(0, 2);
    attackers.forEach(attacker => {
        currentLineup.players.push(attacker);
    });
    
    // Adicionar reservas (7 jogadores)
    const usedIds = currentLineup.players.map(p => p.id);
    const substitutes = availablePlayers
        .filter(p => !usedIds.includes(p.id))
        .slice(0, 7);
    currentLineup.substitutes = substitutes;
    
    renderLineup();
    renderPlayersGrid();
    saveToLocalStorage();
    
    showNotification('Escalação gerada automaticamente!', 'success');
}

// Mostra seção específica
function showSection(sectionId) {
    // Esconder todas as seções
    document.querySelectorAll('.content-section').forEach(section => {
        section.classList.remove('active');
    });
    
    // Remover classe active de todos os links
    document.querySelectorAll('.nav-link').forEach(link => {
        link.classList.remove('active');
    });
    
    // Mostrar seção selecionada
    const targetSection = document.getElementById(`${sectionId}-section`);
    if (targetSection) {
        targetSection.classList.add('active');
    }
    
    // Ativar link correspondente
    const targetLink = document.querySelector(`.nav-link[data-section="${sectionId}"]`);
    if (targetLink) {
        targetLink.classList.add('active');
    }
    
    // Rolar para o topo
    window.scrollTo(0, 0);
}

// ===== INICIALIZAÇÃO =====

// Função principal de inicialização
function initApp() {
    console.log('Iniciando Sistema Corinthians...');
    updateCurrentDate();
    loadSavedData();
    renderPlayersGrid();
    renderLineup();
    renderIdols();
    updateStats();
    setupEventListeners();
    showSection('home');
    console.log('Sistema Corinthians inicializado com sucesso!');
}

// Inicializar quando o DOM estiver carregado
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initApp);
} else {
    // DOM já está carregado
    initApp();
}

// Backup: inicializar após window.onload também
window.addEventListener('load', function() {
    if (!document.querySelector('.content-section.active')) {
        console.log('Backup: inicializando sistema...');
        initApp();
    }
});

// Forçar limpeza do cache ao carregar
console.log('Limpando cache e recarregando dados...');
localStorage.removeItem('corinthiansPlayers');
localStorage.removeItem('currentLineup');
// Predefinições de topologias de grafos para demonstração.
const GRAPH_PRESETS = {
  default: {
    name: "Rede ponderada (6 vértices)",
    directed: false,
    nodes: [
      { id: "A", label: "A", x: 120, y: 190 },
      { id: "B", label: "B", x: 270, y: 90 },
      { id: "C", label: "C", x: 270, y: 290 },
      { id: "D", label: "D", x: 420, y: 90 },
      { id: "E", label: "E", x: 420, y: 290 },
      { id: "F", label: "F", x: 570, y: 190 }
    ],
    edges: [
      { id: "A-B", u: "A", v: "B", weight: 4 },
      { id: "A-C", u: "A", v: "C", weight: 2 },
      { id: "B-C", u: "B", v: "C", weight: 1 },
      { id: "B-D", u: "B", v: "D", weight: 5 },
      { id: "C-D", u: "C", v: "D", weight: 8 },
      { id: "C-E", u: "C", v: "E", weight: 10 },
      { id: "D-E", u: "D", v: "E", weight: 2 },
      { id: "D-F", u: "D", v: "F", weight: 6 },
      { id: "E-F", u: "E", v: "F", weight: 3 }
    ]
  },
  tree: {
    name: "Árvore hierárquica (7 vértices)",
    directed: false,
    nodes: [
      { id: "A", label: "A", x: 350, y: 60 },
      { id: "B", label: "B", x: 220, y: 170 },
      { id: "C", label: "C", x: 480, y: 170 },
      { id: "D", label: "D", x: 150, y: 290 },
      { id: "E", label: "E", x: 290, y: 290 },
      { id: "F", label: "F", x: 410, y: 290 },
      { id: "G", label: "G", x: 550, y: 290 }
    ],
    edges: [
      { id: "A-B", u: "A", v: "B", weight: 3 },
      { id: "A-C", u: "A", v: "C", weight: 5 },
      { id: "B-D", u: "B", v: "D", weight: 2 },
      { id: "B-E", u: "B", v: "E", weight: 4 },
      { id: "C-F", u: "C", v: "F", weight: 1 },
      { id: "C-G", u: "C", v: "G", weight: 6 }
    ]
  },
  cycles: {
    name: "Bifurcação e ciclos (7 vértices)",
    directed: false,
    nodes: [
      { id: "A", label: "A", x: 110, y: 190 },
      { id: "B", label: "B", x: 260, y: 90 },
      { id: "C", label: "C", x: 260, y: 290 },
      { id: "D", label: "D", x: 420, y: 90 },
      { id: "E", label: "E", x: 420, y: 290 },
      { id: "F", label: "F", x: 570, y: 190 },
      { id: "G", label: "G", x: 340, y: 190 }
    ],
    edges: [
      { id: "A-B", u: "A", v: "B", weight: 7 },
      { id: "A-C", u: "A", v: "C", weight: 3 },
      { id: "B-D", u: "B", v: "D", weight: 2 },
      { id: "C-E", u: "C", v: "E", weight: 8 },
      { id: "B-G", u: "B", v: "G", weight: 1 },
      { id: "C-G", u: "C", v: "G", weight: 2 },
      { id: "G-F", u: "G", v: "F", weight: 4 },
      { id: "D-F", u: "D", v: "F", weight: 3 },
      { id: "E-F", u: "E", v: "F", weight: 1 }
    ]
  },
  city: {
    name: "Malha urbana (8 vértices)",
    directed: false,
    nodes: [
      { id: "Centro", label: "Centro", x: 350, y: 190 },
      { id: "Norte", label: "Norte", x: 350, y: 70 },
      { id: "Sul", label: "Sul", x: 350, y: 310 },
      { id: "Leste", label: "Leste", x: 520, y: 190 },
      { id: "Oeste", label: "Oeste", x: 180, y: 190 },
      { id: "Nordeste", label: "NE", x: 480, y: 90 },
      { id: "Sudeste", label: "SE", x: 480, y: 290 },
      { id: "Noroeste", label: "NO", x: 220, y: 90 }
    ],
    edges: [
      { id: "C-N", u: "Centro", v: "Norte", weight: 4 },
      { id: "C-S", u: "Centro", v: "Sul", weight: 5 },
      { id: "C-L", u: "Centro", v: "Leste", weight: 6 },
      { id: "C-O", u: "Centro", v: "Oeste", weight: 3 },
      { id: "N-NE", u: "Norte", v: "Nordeste", weight: 3 },
      { id: "L-NE", u: "Leste", v: "Nordeste", weight: 2 },
      { id: "S-SE", u: "Sul", v: "Sudeste", weight: 4 },
      { id: "L-SE", u: "Leste", v: "Sudeste", weight: 3 },
      { id: "N-NO", u: "Norte", v: "Noroeste", weight: 2 },
      { id: "O-NO", u: "Oeste", v: "Noroeste", weight: 5 }
    ]
  }
};

// Estrutura das linhas de pseudocódigo dos três algoritmos.
const PSEUDOCODES = {
  dijkstra: [
    { num: 1, text: "procedimento Dijkstra(Grafo, Origem, Destino):" },
    { num: 2, text: "    para cada vértice v em V: d[v] ← ∞, π[v] ← nulo" },
    { num: 3, text: "    d[Origem] ← 0" },
    { num: 4, text: "    FilaPrioridade.inserir(Origem, 0)" },
    { num: 5, text: "    enquanto FilaPrioridade não estiver vazia:" },
    { num: 6, text: "        u ← FilaPrioridade.extrairMinimo()" },
    { num: 7, text: "        se u == Destino: interromper" },
    { num: 8, text: "        para cada vizinho v de u:" },
    { num: 9, text: "            se d[u] + peso(u,v) < d[v]:" },
    { num: 10, text: "                d[v] ← d[u] + peso(u,v)" },
    { num: 11, text: "                π[v] ← u" },
    { num: 12, text: "                FilaPrioridade.atualizar(v, d[v])" },
    { num: 13, text: "    reconstruirCaminho(Destino)" }
  ],
  bfs: [
    { num: 1, text: "procedimento BFS(Grafo, Origem):" },
    { num: 2, text: "    para cada v em V: visitado[v] ← falso, d[v] ← ∞" },
    { num: 3, text: "    Fila.enfileirar(Origem); visitado[Origem] ← verdadeiro; d[Origem] ← 0" },
    { num: 4, text: "    enquanto Fila não estiver vazia:" },
    { num: 5, text: "        u ← Fila.desenfileirar()" },
    { num: 6, text: "        para cada vizinho v de u:" },
    { num: 7, text: "            se não visitado[v]:" },
    { num: 8, text: "                visitado[v] ← verdadeiro" },
    { num: 9, text: "                d[v] ← d[u] + 1; π[v] ← u" },
    { num: 10, text: "                Fila.enfileirar(v)" },
    { num: 11, text: "        marcar u como processado" }
  ],
  dfs: [
    { num: 1, text: "procedimento DFS(Grafo, Origem):" },
    { num: 2, text: "    para cada v em V: visitado[v] ← falso, π[v] ← nulo" },
    { num: 3, text: "    Pilha.empilhar(Origem)" },
    { num: 4, text: "    enquanto Pilha não estiver vazia:" },
    { num: 5, text: "        u ← Pilha.topo()" },
    { num: 6, text: "        se não visitado[u]: marcar visitado[u], tempo_desc[u] ← t++" },
    { num: 7, text: "        se existe vizinho v de u não visitado:" },
    { num: 8, text: "            π[v] ← u; Pilha.empilhar(v)" },
    { num: 9, text: "        senão:" },
    { num: 10, text: "            Pilha.desempilhar()" },
    { num: 11, text: "            tempo_fim[u] ← t++" }
  ]
};

// Textos explicativos e análises assintóticas para a aba teórica.
const THEORY_DATA = {
  dijkstra: {
    title: "Algoritmo de Dijkstra (menor caminho)",
    timeVal: "O((|V| + |E|) log |V|)",
    timeDesc: "Com min-heap binário",
    spaceVal: "O(|V| + |E|)",
    spaceDesc: "Lista de adjacência e heap",
    content: `
      <h3>Princípio de funcionamento (método ganancioso / greedy)</h3>
      <p>O algoritmo de Dijkstra determina a distância mínima de um vértice de origem até todos os outros nós em grafos com pesos não-negativos (w ≥ 0). Ele expande a busca escolhendo a cada rodada o nó não finalizado com a menor distância provisória acumulada.</p>
      
      <h3>Análise assintótica detalhada:</h3>
      <ul>
        <li><strong>Inicialização:</strong> Configurar vetores de distâncias d[v] e predecessores π[v] leva <span class="math-badge">O(|V|)</span>.</li>
        <li><strong>Extração de mínimo:</strong> Realizada exatamente <span class="math-badge">|V|</span> vezes. Em um heap binário, cada extração custa <span class="math-badge">O(log |V|)</span>, somando <span class="math-badge">O(|V| log |V|)</span>.</li>
        <li><strong>Relaxamento de arestas:</strong> Cada aresta incidente é inspecionada. Uma melhora no caminho dispara um ajuste de chave no heap (<span class="math-badge">decrease-key</span>), consumindo <span class="math-badge">O(log |V|)</span>. Para todas as arestas: <span class="math-badge">O(|E| log |V|)</span>.</li>
        <li><strong>Custo total:</strong> <span class="math-badge">O((|V| + |E|) log |V|)</span>. Em grafos conexos, simplifica-se para <span class="math-badge">O(|E| log |V|)</span>.</li>
        <li><strong>Sem heap (vetor simples):</strong> A busca pelo mínimo consome <span class="math-badge">O(|V|)</span> por rodada, resultando em <span class="math-badge">O(|V|²)</span>.</li>
      </ul>

      <h3>Complexidade de espaço:</h3>
      <p>Consome <span class="math-badge">O(|V|)</span> para o vetor de distâncias, predecessores e heap, mais <span class="math-badge">O(|V| + |E|)</span> para a representação do grafo.</p>
    `,
    tip: "Arestas negativas: O algoritmo de Dijkstra requer pesos não-negativos. Em grafos com custos negativos, utiliza-se o algoritmo de Bellman-Ford, de complexidade O(|V| · |E|)."
  },
  bfs: {
    title: "Busca em largura (BFS)",
    timeVal: "O(|V| + |E|)",
    timeDesc: "Exploração por níveis de distância",
    spaceVal: "O(|V|)",
    spaceDesc: "Fila FIFO e vetor de visitados",
    content: `
      <h3>Princípio de funcionamento (fila FIFO)</h3>
      <p>A busca em largura expande a fronteira visitando sistematicamente todos os vizinhos a distância 1, depois a distância 2, e assim por diante. Em grafos com pesos uniformes, encontra sempre o caminho com o menor número de arestas.</p>

      <h3>Análise assintótica detalhada:</h3>
      <ul>
        <li><strong>Inicialização:</strong> Marcação dos nós como não visitados consome <span class="math-badge">O(|V|)</span>.</li>
        <li><strong>Operações na fila:</strong> Cada vértice entra e sai da fila exatamente uma vez em tempo <span class="math-badge">O(1)</span>, totalizando <span class="math-badge">O(|V|)</span>.</li>
        <li><strong>Inspeção de arestas:</strong> Cada aresta é percorrida uma única vez (ou duas em grafos não-direcionados), custando <span class="math-badge">O(|E|)</span>.</li>
        <li><strong>Custo total:</strong> <span class="math-badge">O(|V| + |E|)</span> com lista de adjacência. Com matriz de adjacência eleva-se para <span class="math-badge">O(|V|²)</span>.</li>
      </ul>

      <h3>Complexidade de espaço:</h3>
      <p>No pior cenário, a fila pode conter até <span class="math-badge">O(|V|)</span> nós simultaneamente.</p>
    `,
    tip: "Eficiência: Quando o grafo não tem pesos, a BFS é assintoticamente ótima e mais rápida que o Dijkstra, pois opera estritamente em tempo linear O(|V| + |E|)."
  },
  dfs: {
    title: "Busca em profundidade (DFS)",
    timeVal: "O(|V| + |E|)",
    timeDesc: "Exploração por ramos verticais e backtracking",
    spaceVal: "O(|V|)",
    spaceDesc: "Pilha de chamadas recursivas",
    content: `
      <h3>Princípio de funcionamento (pilha LIFO / recursão)</h3>
      <p>A busca em profundidade segue por uma cadeia de ramificações até o término do ramo, retrocedendo (backtracking) aos nós anteriores para inspecionar caminhos alternativos. Constrói uma floresta em profundidade.</p>

      <h3>Análise assintótica detalhada:</h3>
      <ul>
        <li><strong>Vértices:</strong> Cada nó é descoberto e finalizado uma única vez, somando <span class="math-badge">O(|V|)</span>.</li>
        <li><strong>Arestas:</strong> A lista de adjacência de cada nó é verificada uma única vez, totalizando <span class="math-badge">O(|E|)</span>.</li>
        <li><strong>Custo total:</strong> <span class="math-badge">O(|V| + |E|)</span>.</li>
      </ul>

      <h3>Complexidade de espaço:</h3>
      <p>A memória ocupada pela pilha é proporcional à profundidade máxima do caminho percorrido. Em árvores balanceadas custa <span class="math-badge">O(log |V|)</span>, e no pior caso (grafo degenerado em linha) atinge <span class="math-badge">O(|V|)</span>.</p>
    `,
    tip: "Aplicações fundamentais: Ordenação topológica em grafos dirigidos acíclicos (DAGs), componentes conexos e identificação de ciclos por meio de arestas de retorno (back-edges)."
  }
};

// Estado global reativo que controla o fluxo da interface e da simulação.
class AppState {
  constructor() {
    this.currentAlgo = 'dijkstra';
    this.currentPreset = 'default';
    this.graph = JSON.parse(JSON.stringify(GRAPH_PRESETS.default));
    this.sourceNode = 'A';
    this.targetNode = 'F';
    this.steps = [];
    this.currentStepIdx = 0;
    this.isPlaying = false;
    this.timer = null;
    this.speedMs = 700;
    this.isDirected = false;
  }
}

const state = new AppState();

// Cache de elementos do DOM para reduzir consultas repetidas e consumo de CPU.
const dom = {
  svg: null,
  nodesLayer: null,
  edgesLayer: null,
  lblStepCounter: null,
  lblStatusAction: null,
  progressFill: null,
  progressTrack: null,
  cardStepBadge: null,
  cardStepDesc: null,
  cardStepDetail: null,
  dsItemsStrip: null,
  dsTitle: null,
  dsCount: null,
  pseudocodeDisplay: null,
  traceTableBody: null,
  theoryAlgoName: null,
  theoryTimeVal: null,
  theoryTimeDesc: null,
  theorySpaceVal: null,
  theorySpaceDesc: null,
  theoryDetails: null,
  comparativeTip: null,
  toast: null,
  btnPlayPause: null,
  selectSource: null,
  selectTarget: null,
  lblTarget: null,
  selectPreset: null,
  txtDirectedStatus: null,
  speedSlider: null,
  speedVal: null,
  nodes: {},
  edges: {}
};

let activePseudoLineNum = null;

// Converte texto puro de pseudocódigo em HTML com destaque sintático no estilo Visual Studio Code.
function formatVsCodeSyntax(raw) {
  let indentSpaces = 0;
  while (raw.startsWith('    ')) {
    indentSpaces += 4;
    raw = raw.slice(4);
  }
  const indent = ' '.repeat(indentSpaces);

  let s = raw.replace(/&/g, '&amp;').replace(/</g, '__LT__').replace(/>/g, '__GT__');

  const replacements = [
    [/\bprocedimento\b/g, '<span class="tok-kw">procedimento</span>'],
    [/\b(para cada|em|se|senão|enquanto|interromper|retornar|não estiver vazia|não|marcar|existe vizinho|como processado)\b/g, '<span class="tok-ctrl">$1</span>'],
    [/\b(Grafo|FilaPrioridade|Fila|Pilha|V)\b/g, '<span class="tok-type">$1</span>'],
    [/\b(Dijkstra|BFS|DFS|reconstruirCaminho|extrairMinimo|inserir|atualizar|enfileirar|desenfileirar|empilhar|desempilhar|topo|peso)\b/g, '<span class="tok-fn">$1</span>'],
    [/\b(verdadeiro|falso|nulo)\b/g, '<span class="tok-lit">$1</span>'],
    [/∞/g, '<span class="tok-lit">∞</span>'],
    [/\b(Origem|Destino|tempo_desc|tempo_fim|visitado|vértice)\b/g, '<span class="tok-var">$1</span>'],
    [/\b(\d+)\b/g, '<span class="tok-num">$1</span>'],
    [/←/g, '<span class="tok-op">←</span>'],
    [/\+/g, '<span class="tok-op">+</span>'],
    [/==/g, '<span class="tok-op">==</span>'],
    [/__LT__/g, '<span class="tok-op">&lt;</span>'],
    [/__GT__/g, '<span class="tok-op">&gt;</span>']
  ];

  for (const [re, rep] of replacements) {
    s = s.replace(re, rep);
  }
  return indent + s;
}

// Centraliza geometricamente as coordenadas dos vértices na lousa SVG com escala proporcional adaptativa.
function centerGraph(useOriginal = false) {
  if (!state.graph.nodes || state.graph.nodes.length === 0) return;
  
  const svg = dom.svg || document.getElementById('graph-svg');
  const rect = svg.getBoundingClientRect();
  const canvasW = rect.width > 50 ? rect.width : (dom.svg ? dom.svg.clientWidth : 700);
  const canvasH = rect.height > 50 ? rect.height : (dom.svg ? dom.svg.clientHeight : 460);

  let minX = Infinity, maxX = -Infinity, minY = Infinity, maxY = -Infinity;
  state.graph.nodes.forEach(n => {
    const x = (useOriginal && n.origX !== undefined) ? n.origX : n.x;
    const y = (useOriginal && n.origY !== undefined) ? n.origY : n.y;
    if (x < minX) minX = x;
    if (x > maxX) maxX = x;
    if (y < minY) minY = y;
    if (y > maxY) maxY = y;
  });

  const safeMarginX = canvasW < 500 ? 45 : 65;
  const safeMarginTop = canvasW < 500 ? 55 : 60;
  const safeMarginBottom = canvasW < 500 ? 55 : 60;

  const availableW = Math.max(160, canvasW - (safeMarginX * 2));
  const availableH = Math.max(160, canvasH - safeMarginTop - safeMarginBottom);

  const spanX = Math.max(1, maxX - minX);
  const spanY = Math.max(1, maxY - minY);

  // Escala proporcional caso o grafo exceda a largura ou altura da tela (ex: celulares em modo retrato)
  const scale = Math.min(availableW / spanX, availableH / spanY, 1);

  const currentCenterX = (minX + maxX) / 2;
  const currentCenterY = (minY + maxY) / 2;

  const targetCenterX = canvasW / 2;
  const targetCenterY = safeMarginTop + (availableH / 2);

  state.graph.nodes.forEach(n => {
    const baseNodeX = (useOriginal && n.origX !== undefined) ? n.origX : n.x;
    const baseNodeY = (useOriginal && n.origY !== undefined) ? n.origY : n.y;
    n.x = Math.round(targetCenterX + ((baseNodeX - currentCenterX) * scale));
    n.y = Math.round(targetCenterY + ((baseNodeY - currentCenterY) * scale));
  });

  updateSvgPositions();
}

// Atualiza posições geométricas dos elementos gráficos e rótulos de aresta.
function updateSvgPositions() {
  state.graph.nodes.forEach(node => {
    const cached = dom.nodes[node.id];
    if (cached && cached.group) {
      cached.group.setAttribute('transform', `translate(${node.x}, ${node.y})`);
    }
  });

  state.graph.edges.forEach(edge => {
    const uNode = state.graph.nodes.find(n => n.id === edge.u);
    const vNode = state.graph.nodes.find(n => n.id === edge.v);
    if (!uNode || !vNode) return;

    const cached = dom.edges[edge.id];
    if (!cached) return;

    if (cached.line) {
      cached.line.setAttribute('x1', uNode.x);
      cached.line.setAttribute('y1', uNode.y);
      cached.line.setAttribute('x2', vNode.x);
      cached.line.setAttribute('y2', vNode.y);
    }

    const midX = (uNode.x + vNode.x) / 2;
    const midY = (uNode.y + vNode.y) / 2;
    if (cached.bg && cached.txt) {
      cached.bg.setAttribute('x', midX - 12);
      cached.bg.setAttribute('y', midY - 9);
      cached.txt.setAttribute('x', midX);
      cached.txt.setAttribute('y', midY);
    }
  });
}

// Algoritmo de Dijkstra para determinação do caminho de menor custo em grafos com pesos não-negativos.
function generateDijkstraSteps(graph, startId, targetId) {
  const steps = [];
  const nodes = graph.nodes.map(n => n.id);
  
  const dist = {};
  const parent = {};
  const visited = new Set();
  const inQueue = new Map();

  nodes.forEach(id => {
    dist[id] = Infinity;
    parent[id] = null;
  });
  dist[startId] = 0;
  inQueue.set(startId, 0);

  steps.push({
    title: "Inicialização do algoritmo",
    desc: `Definida a distância inicial d[${startId}] = 0 para a origem e d[v] = ∞ para os demais vértices. O vértice ${startId} é inserido na fila de prioridades com valor 0.`,
    detail: "Custo assintótico desta etapa: O(|V|) para inicialização dos vetores de distância e predecessores.",
    pseudoLine: 2,
    activeNode: startId,
    activeEdge: null,
    visitedNodes: new Set(),
    frontierNodes: new Set([startId]),
    pathNodes: new Set(),
    pathEdges: new Set(),
    treeEdges: new Set(),
    table: nodes.map(id => ({ id, d: dist[id], p: parent[id], status: id === startId ? 'Fila' : 'Aberto' })),
    dsState: { type: 'Fila de prioridades (min-heap)', items: [{ id: startId, val: 0 }] }
  });

  const treeEdgesSet = new Set();

  while (inQueue.size > 0) {
    let minId = null;
    let minDist = Infinity;
    inQueue.forEach((d, id) => {
      if (d < minDist) {
        minDist = d;
        minId = id;
      }
    });

    inQueue.delete(minId);
    visited.add(minId);

    if (minId === targetId) {
      steps.push({
        title: `Vértice de destino alcançado (${minId})`,
        desc: `O nó ${minId} foi extraído com o custo mínimo definitivo de ${dist[minId]}. A busca é finalizada com garantia de otimalidade.`,
        detail: `Pelo princípio ganancioso do Dijkstra, a extração de um nó com pesos w ≥ 0 fixa a menor distância possível até ele.`,
        pseudoLine: 7,
        activeNode: minId,
        activeEdge: null,
        visitedNodes: new Set(visited),
        frontierNodes: new Set(inQueue.keys()),
        pathNodes: new Set(),
        pathEdges: new Set(),
        treeEdges: new Set(treeEdgesSet),
        table: nodes.map(id => ({ id, d: dist[id], p: parent[id], status: visited.has(id) ? 'Fechado' : inQueue.has(id) ? 'Fila' : 'Aberto' })),
        dsState: { type: 'Fila de prioridades (min-heap)', items: Array.from(inQueue.entries()).map(([k, v]) => ({ id: k, val: v })) }
      });
      break;
    }

    steps.push({
      title: `Extração do nó de menor custo (${minId})`,
      desc: `Extraído da fila de prioridade o vértice ${minId} com distância acumulada d[${minId}] = ${dist[minId]}. O nó é marcado como fechado.`,
      detail: `Operação de extração de mínimo no heap binário executada em tempo O(log |V|).`,
      pseudoLine: 6,
      activeNode: minId,
      activeEdge: null,
      visitedNodes: new Set(visited),
      frontierNodes: new Set(inQueue.keys()),
      pathNodes: new Set(),
      pathEdges: new Set(),
      treeEdges: new Set(treeEdgesSet),
      table: nodes.map(id => ({ id, d: dist[id], p: parent[id], status: visited.has(id) ? 'Fechado' : inQueue.has(id) ? 'Fila' : 'Aberto' })),
      dsState: { type: 'Fila de prioridades (min-heap)', items: Array.from(inQueue.entries()).map(([k, v]) => ({ id: k, val: v })) }
    });

    const neighbors = getNeighbors(graph, minId);
    for (const { neighbor, edge } of neighbors) {
      if (visited.has(neighbor)) continue;

      const weight = edge.weight || 1;
      const alt = dist[minId] + weight;

      if (alt < dist[neighbor]) {
        dist[neighbor] = alt;
        parent[neighbor] = minId;
        inQueue.set(neighbor, alt);
        treeEdgesSet.add(edge.id);

        steps.push({
          title: `Relaxamento da aresta (${minId} → ${neighbor})`,
          desc: `Custo até ${neighbor} reduzido para ${alt} (d[${minId}] + ${weight} < ${dist[neighbor] === alt ? '∞' : dist[neighbor]}). Predecessor π[${neighbor}] atualizado para ${minId}.`,
          detail: `Operação decrease-key no heap binário concluída em O(log |V|).`,
          pseudoLine: 10,
          activeNode: minId,
          activeEdge: edge.id,
          visitedNodes: new Set(visited),
          frontierNodes: new Set(inQueue.keys()),
          pathNodes: new Set(),
          pathEdges: new Set(),
          treeEdges: new Set(treeEdgesSet),
          table: nodes.map(id => ({ id, d: dist[id], p: parent[id], status: visited.has(id) ? 'Fechado' : inQueue.has(id) ? 'Fila' : 'Aberto' })),
          dsState: { type: 'Fila de prioridades (min-heap)', items: Array.from(inQueue.entries()).map(([k, v]) => ({ id: k, val: v })) }
        });
      } else {
        steps.push({
          title: `Inspeção sem relaxamento (${minId} → ${neighbor})`,
          desc: `Aresta avaliada com custo alternativo ${alt}, maior ou igual à distância conhecida d[${neighbor}] = ${dist[neighbor]}. O valor existente é mantido.`,
          detail: `Inspeção de aresta incidente em O(1).`,
          pseudoLine: 9,
          activeNode: minId,
          activeEdge: edge.id,
          visitedNodes: new Set(visited),
          frontierNodes: new Set(inQueue.keys()),
          pathNodes: new Set(),
          pathEdges: new Set(),
          treeEdges: new Set(treeEdgesSet),
          table: nodes.map(id => ({ id, d: dist[id], p: parent[id], status: visited.has(id) ? 'Fechado' : inQueue.has(id) ? 'Fila' : 'Aberto' })),
          dsState: { type: 'Fila de prioridades (min-heap)', items: Array.from(inQueue.entries()).map(([k, v]) => ({ id: k, val: v })) }
        });
      }
    }
  }

  const finalPathNodes = new Set();
  const finalPathEdges = new Set();

  if (targetId && dist[targetId] !== Infinity) {
    let curr = targetId;
    finalPathNodes.add(curr);
    while (parent[curr]) {
      const p = parent[curr];
      finalPathNodes.add(p);
      const edge = findEdge(graph, p, curr);
      if (edge) finalPathEdges.add(edge.id);
      curr = p;
    }

    steps.push({
      title: "Caminho mínimo reconstruído",
      desc: `O menor percurso de ${startId} até ${targetId} foi recuperado com custo total acumulado de ${dist[targetId]}: ${Array.from(finalPathNodes).reverse().join(' → ')}.`,
      detail: `Caminho ótimo determinado com complexidade de tempo O((|V| + |E|) log |V|) e memória O(|V| + |E|).`,
      pseudoLine: 13,
      activeNode: null,
      activeEdge: null,
      visitedNodes: new Set(visited),
      frontierNodes: new Set(),
      pathNodes: finalPathNodes,
      pathEdges: finalPathEdges,
      treeEdges: new Set(treeEdgesSet),
      table: nodes.map(id => ({ id, d: dist[id], p: parent[id], status: finalPathNodes.has(id) ? 'Caminho' : 'Fechado' })),
      dsState: { type: 'Fila de prioridades (min-heap)', items: [] }
    });
  }

  return steps;
}

// Busca em largura (BFS) para exploração em ondas concêntricas por níveis de distância.
function generateBFSSteps(graph, startId, targetId) {
  const steps = [];
  const nodes = graph.nodes.map(n => n.id);
  
  const dist = {};
  const parent = {};
  const visited = new Set();
  const queue = [startId];
  const treeEdgesSet = new Set();

  nodes.forEach(id => {
    dist[id] = Infinity;
    parent[id] = null;
  });

  dist[startId] = 0;
  visited.add(startId);

  steps.push({
    title: "Inicialização da busca em largura",
    desc: `Vértice de partida ${startId} marcado como visitado no nível 0 (d = 0) e inserido na fila FIFO.`,
    detail: "Todos os demais vértices iniciam com estado não visitado e d = ∞.",
    pseudoLine: 3,
    activeNode: startId,
    activeEdge: null,
    visitedNodes: new Set([startId]),
    frontierNodes: new Set(queue),
    pathNodes: new Set(),
    pathEdges: new Set(),
    treeEdges: new Set(),
    table: nodes.map(id => ({ id, d: dist[id], p: parent[id], status: id === startId ? 'Na fila' : 'Não visitado' })),
    dsState: { type: 'Fila (FIFO)', items: queue.map(id => ({ id, val: `Nível ${dist[id]}` })) }
  });

  const processed = new Set();

  while (queue.length > 0) {
    const u = queue.shift();
    processed.add(u);

    steps.push({
      title: `Remoção do vértice da fila (${u})`,
      desc: `Vértice ${u} removido do início da fila para exploração de sua lista de adjacência (nível atual: ${dist[u]}).`,
      detail: `Operação de desenfileirar FIFO em tempo constante O(1).`,
      pseudoLine: 5,
      activeNode: u,
      activeEdge: null,
      visitedNodes: new Set(processed),
      frontierNodes: new Set(queue),
      pathNodes: new Set(),
      pathEdges: new Set(),
      treeEdges: new Set(treeEdgesSet),
      table: nodes.map(id => ({ id, d: dist[id], p: parent[id], status: processed.has(id) ? 'Processado' : queue.includes(id) ? 'Na fila' : 'Não visitado' })),
      dsState: { type: 'Fila (FIFO)', items: queue.map(id => ({ id, val: `Nível ${dist[id]}` })) }
    });

    const neighbors = getNeighbors(graph, u);
    for (const { neighbor, edge } of neighbors) {
      if (!visited.has(neighbor)) {
        visited.add(neighbor);
        dist[neighbor] = dist[u] + 1;
        parent[neighbor] = u;
        queue.push(neighbor);
        treeEdgesSet.add(edge.id);

        steps.push({
          title: `Descoberta de vizinho (${neighbor})`,
          desc: `Vértice ${neighbor} descoberto a partir de ${u}. Definido nível d[${neighbor}] = ${dist[neighbor]} e inserido no final da fila.`,
          detail: `Aresta adicionada à árvore de busca em largura em tempo O(1).`,
          pseudoLine: 10,
          activeNode: u,
          activeEdge: edge.id,
          visitedNodes: new Set(processed),
          frontierNodes: new Set(queue),
          pathNodes: new Set(),
          pathEdges: new Set(),
          treeEdges: new Set(treeEdgesSet),
          table: nodes.map(id => ({ id, d: dist[id], p: parent[id], status: processed.has(id) ? 'Processado' : queue.includes(id) ? 'Na fila' : 'Não visitado' })),
          dsState: { type: 'Fila (FIFO)', items: queue.map(id => ({ id, val: `Nível ${dist[id]}` })) }
        });
      } else {
        steps.push({
          title: `Vizinho já visitado (${neighbor})`,
          desc: `Aresta (${u} — ${neighbor}) conecta a um nó já explorado anteriormente. Não é enfileirado para evitar repetições.`,
          detail: `Identificação em tempo constante O(1).`,
          pseudoLine: 7,
          activeNode: u,
          activeEdge: edge.id,
          visitedNodes: new Set(processed),
          frontierNodes: new Set(queue),
          pathNodes: new Set(),
          pathEdges: new Set(),
          treeEdges: new Set(treeEdgesSet),
          table: nodes.map(id => ({ id, d: dist[id], p: parent[id], status: processed.has(id) ? 'Processado' : queue.includes(id) ? 'Na fila' : 'Não visitado' })),
          dsState: { type: 'Fila (FIFO)', items: queue.map(id => ({ id, val: `Nível ${dist[id]}` })) }
        });
      }
    }
  }

  const finalPathNodes = new Set();
  const finalPathEdges = new Set();

  if (targetId && dist[targetId] !== Infinity) {
    let curr = targetId;
    finalPathNodes.add(curr);
    while (parent[curr]) {
      const p = parent[curr];
      finalPathNodes.add(p);
      const edge = findEdge(graph, p, curr);
      if (edge) finalPathEdges.add(edge.id);
      curr = p;
    }

    steps.push({
      title: "Busca em largura concluída",
      desc: `Todos os nós acessíveis foram percorridos por níveis. O caminho com menor número de arestas (${dist[targetId]} passos) até ${targetId} é: ${Array.from(finalPathNodes).reverse().join(' → ')}.`,
      detail: `Complexidade final: O(|V| + |E|) em tempo e O(|V|) em espaço de memória.`,
      pseudoLine: 11,
      activeNode: null,
      activeEdge: null,
      visitedNodes: new Set(processed),
      frontierNodes: new Set(),
      pathNodes: finalPathNodes,
      pathEdges: finalPathEdges,
      treeEdges: new Set(treeEdgesSet),
      table: nodes.map(id => ({ id, d: dist[id], p: parent[id], status: finalPathNodes.has(id) ? 'Caminho' : 'Concluído' })),
      dsState: { type: 'Fila (FIFO)', items: [] }
    });
  }

  return steps;
}

// Busca em profundidade (DFS) com exploração recursiva e detecção de ciclos.
function generateDFSSteps(graph, startId, targetId) {
  const steps = [];
  const nodes = graph.nodes.map(n => n.id);
  
  const visited = new Set();
  const parent = {};
  const discTime = {};
  const finishTime = {};
  const treeEdgesSet = new Set();
  const callStack = [];
  let timer = 0;

  nodes.forEach(id => {
    parent[id] = null;
    discTime[id] = '-';
    finishTime[id] = '-';
  });

  steps.push({
    title: "Inicialização da busca em profundidade",
    desc: `Início da exploração recursiva a partir do vértice ${startId}. A pilha de execução controlará o percurso ativo.`,
    detail: "A DFS explora cada ramificação até o limite antes de aplicar o retrocesso (backtracking).",
    pseudoLine: 2,
    activeNode: startId,
    activeEdge: null,
    visitedNodes: new Set(),
    frontierNodes: new Set(),
    pathNodes: new Set(),
    pathEdges: new Set(),
    treeEdges: new Set(),
    table: nodes.map(id => ({ id, d: `${discTime[id]}/${finishTime[id]}`, p: parent[id], status: 'Não visitado' })),
    dsState: { type: 'Pilha (LIFO)', items: [] }
  });

  function dfsVisit(u) {
    timer++;
    discTime[u] = timer;
    visited.add(u);
    callStack.push(u);

    steps.push({
      title: `Descoberta e empilhamento (${u})`,
      desc: `Vértice ${u} descoberto no tempo t = ${timer} e inserido no topo da pilha. Inicia-se a inspeção de suas ramificações.`,
      detail: `Operação de push na pilha em tempo O(1).`,
      pseudoLine: 6,
      activeNode: u,
      activeEdge: null,
      visitedNodes: new Set(visited),
      frontierNodes: new Set(callStack),
      pathNodes: new Set(),
      pathEdges: new Set(),
      treeEdges: new Set(treeEdgesSet),
      table: nodes.map(id => ({ id, d: `${discTime[id]}/${finishTime[id]}`, p: parent[id], status: visited.has(id) ? (finishTime[id] !== '-' ? 'Finalizado' : 'Na pilha') : 'Não visitado' })),
      dsState: { type: 'Pilha (LIFO)', items: [...callStack].reverse().map(id => ({ id, val: `t = ${discTime[id]}` })) }
    });

    const neighbors = getNeighbors(graph, u);
    for (const { neighbor, edge } of neighbors) {
      if (!visited.has(neighbor)) {
        parent[neighbor] = u;
        treeEdgesSet.add(edge.id);

        steps.push({
          title: `Avanço em profundidade (${u} → ${neighbor})`,
          desc: `Aresta para vizinho não visitado ${neighbor}. O algoritmo aprofunda a busca recursivamente antes de inspecionar outros ramos de ${u}.`,
          detail: `Classificada como aresta de árvore. Altura da pilha aumentada em 1.`,
          pseudoLine: 8,
          activeNode: u,
          activeEdge: edge.id,
          visitedNodes: new Set(visited),
          frontierNodes: new Set(callStack),
          pathNodes: new Set(),
          pathEdges: new Set(),
          treeEdges: new Set(treeEdgesSet),
          table: nodes.map(id => ({ id, d: `${discTime[id]}/${finishTime[id]}`, p: parent[id], status: visited.has(id) ? (finishTime[id] !== '-' ? 'Finalizado' : 'Na pilha') : 'Não visitado' })),
          dsState: { type: 'Pilha (LIFO)', items: [...callStack].reverse().map(id => ({ id, val: `t = ${discTime[id]}` })) }
        });

        dfsVisit(neighbor);
      } else {
        if (neighbor !== parent[u] && callStack.includes(neighbor)) {
          steps.push({
            title: `Ciclo detectado: aresta de retorno (${u} ↩ ${neighbor})`,
            desc: `A aresta aponta para um ancestral ativo na pilha (${neighbor}), confirmando a presença de um ciclo fechado no grafo.`,
            detail: `Teorema: Um grafo contém ciclo se e somente se a busca em profundidade produzir ao menos uma aresta de retorno (back-edge).`,
            pseudoLine: 7,
            activeNode: u,
            activeEdge: edge.id,
            visitedNodes: new Set(visited),
            frontierNodes: new Set(callStack),
            pathNodes: new Set(),
            pathEdges: new Set(),
            treeEdges: new Set(treeEdgesSet),
            table: nodes.map(id => ({ id, d: `${discTime[id]}/${finishTime[id]}`, p: parent[id], status: visited.has(id) ? (finishTime[id] !== '-' ? 'Finalizado' : 'Na pilha') : 'Não visitado' })),
            dsState: { type: 'Pilha (LIFO)', items: [...callStack].reverse().map(id => ({ id, val: `t = ${discTime[id]}` })) }
          });
        }
      }
    }

    timer++;
    finishTime[u] = timer;
    callStack.pop();

    steps.push({
      title: `Retrocesso e desempilhamento (${u})`,
      desc: `Vizinhos de ${u} completamente explorados. Registrado tempo de término t = ${timer}. O nó é desempilhado com retorno ao nível anterior.`,
      detail: `Operação de pop na pilha em tempo O(1).`,
      pseudoLine: 10,
      activeNode: callStack.length > 0 ? callStack[callStack.length - 1] : null,
      activeEdge: null,
      visitedNodes: new Set(visited),
      frontierNodes: new Set(callStack),
      pathNodes: new Set(),
      pathEdges: new Set(),
      treeEdges: new Set(treeEdgesSet),
      table: nodes.map(id => ({ id, d: `${discTime[id]}/${finishTime[id]}`, p: parent[id], status: finishTime[id] !== '-' ? 'Finalizado' : 'Na pilha' })),
      dsState: { type: 'Pilha (LIFO)', items: [...callStack].reverse().map(id => ({ id, val: `t = ${discTime[id]}` })) }
    });
  }

  dfsVisit(startId);

  steps.push({
    title: "Busca em profundidade concluída",
    desc: `Exploração do componente conexo a partir de ${startId} finalizada com sucesso.`,
    detail: `Complexidade: O(|V| + |E|) em tempo. Memória ocupada pela pilha proporcional à altura da árvore.`,
    pseudoLine: 11,
    activeNode: null,
    activeEdge: null,
    visitedNodes: new Set(visited),
    frontierNodes: new Set(),
    pathNodes: new Set(),
    pathEdges: new Set(),
    treeEdges: new Set(treeEdgesSet),
    table: nodes.map(id => ({ id, d: `${discTime[id]}/${finishTime[id]}`, p: parent[id], status: 'Concluído' })),
    dsState: { type: 'Pilha (LIFO)', items: [] }
  });

  return steps;
}

// Retorna as arestas incidentes e vizinhos de um vértice, respeitando o direcionamento.
function getNeighbors(graph, nodeId) {
  const result = [];
  for (const edge of graph.edges) {
    if (edge.u === nodeId) {
      result.push({ neighbor: edge.v, edge });
    } else if (!state.isDirected && edge.v === nodeId) {
      result.push({ neighbor: edge.u, edge });
    }
  }
  return result;
}

// Localiza uma aresta entre dois vértices no grafo.
function findEdge(graph, u, v) {
  return graph.edges.find(e => 
    (e.u === u && e.v === v) || (!state.isDirected && e.u === v && e.v === u)
  );
}

// Renderização dos elementos SVG e manipulação de arraste com mouse e toque.
let draggedNode = null;
let dragOffset = { x: 0, y: 0 };
let incidentEdgesForDragged = [];

function renderGraphBase() {
  dom.edgesLayer.innerHTML = '';
  dom.nodesLayer.innerHTML = '';
  dom.nodes = {};
  dom.edges = {};

  // Preserva as coordenadas de referência para escalonamento responsivo
  state.graph.nodes.forEach(n => {
    if (n.origX === undefined) n.origX = n.x;
    if (n.origY === undefined) n.origY = n.y;
  });

  const arrowPath = document.getElementById('arrow-path');
  if (arrowPath) {
    arrowPath.setAttribute('fill', state.isDirected ? '#525252' : 'none');
  }

  // Desenha as arestas
  state.graph.edges.forEach(edge => {
    const uNode = state.graph.nodes.find(n => n.id === edge.u);
    const vNode = state.graph.nodes.find(n => n.id === edge.v);
    if (!uNode || !vNode) return;

    const g = document.createElementNS("http://www.w3.org/2000/svg", "g");
    g.setAttribute('class', 'edge-group');
    g.setAttribute('id', `edge-grp-${edge.id}`);

    const line = document.createElementNS("http://www.w3.org/2000/svg", "line");
    line.setAttribute('class', 'edge-line');
    line.setAttribute('id', `edge-line-${edge.id}`);
    line.setAttribute('x1', uNode.x);
    line.setAttribute('y1', uNode.y);
    line.setAttribute('x2', vNode.x);
    line.setAttribute('y2', vNode.y);
    if (state.isDirected) {
      line.setAttribute('marker-end', 'url(#arrow)');
    }
    g.appendChild(line);

    let bg = null;
    let txt = null;

    if (edge.weight !== undefined) {
      const midX = (uNode.x + vNode.x) / 2;
      const midY = (uNode.y + vNode.y) / 2;

      bg = document.createElementNS("http://www.w3.org/2000/svg", "rect");
      bg.setAttribute('class', 'edge-weight-bg');
      bg.setAttribute('id', `edge-bg-${edge.id}`);
      bg.setAttribute('x', midX - 12);
      bg.setAttribute('y', midY - 9);
      bg.setAttribute('width', 24);
      bg.setAttribute('height', 18);
      g.appendChild(bg);

      txt = document.createElementNS("http://www.w3.org/2000/svg", "text");
      txt.setAttribute('class', 'edge-weight-text');
      txt.setAttribute('id', `edge-txt-${edge.id}`);
      txt.setAttribute('x', midX);
      txt.setAttribute('y', midY);
      txt.textContent = edge.weight;
      g.appendChild(txt);
    }

    dom.edgesLayer.appendChild(g);
    dom.edges[edge.id] = { group: g, line, bg, txt };
  });

  // Desenha os vértices
  state.graph.nodes.forEach(node => {
    const g = document.createElementNS("http://www.w3.org/2000/svg", "g");
    g.setAttribute('class', 'node-group state-unvisited');
    g.setAttribute('id', `node-grp-${node.id}`);
    g.setAttribute('transform', `translate(${node.x}, ${node.y})`);

    const circle = document.createElementNS("http://www.w3.org/2000/svg", "circle");
    circle.setAttribute('class', 'node-circle');
    circle.setAttribute('r', 23);
    g.appendChild(circle);

    const text = document.createElementNS("http://www.w3.org/2000/svg", "text");
    text.setAttribute('class', 'node-label');
    text.textContent = node.label;
    g.appendChild(text);

    const badge = document.createElementNS("http://www.w3.org/2000/svg", "text");
    badge.setAttribute('class', 'node-badge');
    badge.setAttribute('id', `node-badge-${node.id}`);
    badge.setAttribute('y', 36);
    badge.textContent = '';
    g.appendChild(badge);

    g.addEventListener('mousedown', (e) => startDrag(e, node));
    g.addEventListener('touchstart', (e) => startDrag(e, node), { passive: false });

    dom.nodesLayer.appendChild(g);
    dom.nodes[node.id] = { group: g, circle, label: text, badge };
  });

  populateNodeSelectors();
  centerGraph(true);
}

// Inicia o processo de arraste de um vértice na lousa.
function startDrag(e, node) {
  e.preventDefault();
  draggedNode = node;
  const pt = getSvgCoords(e);
  dragOffset.x = pt.x - node.x;
  dragOffset.y = pt.y - node.y;

  // Pré-filtra apenas as arestas conectadas a este nó para otimizar o movimento
  incidentEdgesForDragged = state.graph.edges.filter(edge => edge.u === node.id || edge.v === node.id);

  window.addEventListener('mousemove', onDrag);
  window.addEventListener('mouseup', endDrag);
  window.addEventListener('touchmove', onDrag, { passive: false });
  window.addEventListener('touchend', endDrag);
}

// Atualiza a posição do vértice e das arestas incidentes durante o movimento.
function onDrag(e) {
  if (!draggedNode) return;
  e.preventDefault();
  const pt = getSvgCoords(e);
  const maxW = dom.svg.clientWidth || 700;
  const maxH = dom.svg.clientHeight || 460;

  draggedNode.x = Math.max(30, Math.min(pt.x - dragOffset.x, maxW - 30));
  draggedNode.y = Math.max(30, Math.min(pt.y - dragOffset.y, maxH - 30));
  draggedNode.origX = draggedNode.x;
  draggedNode.origY = draggedNode.y;

  const cachedNode = dom.nodes[draggedNode.id];
  if (cachedNode && cachedNode.group) {
    cachedNode.group.setAttribute('transform', `translate(${draggedNode.x}, ${draggedNode.y})`);
  }

  // Atualiza apenas as arestas incidentes em tempo direto
  incidentEdgesForDragged.forEach(edge => {
    const cachedEdge = dom.edges[edge.id];
    if (!cachedEdge) return;

    const uNode = state.graph.nodes.find(n => n.id === edge.u);
    const vNode = state.graph.nodes.find(n => n.id === edge.v);
    if (!uNode || !vNode) return;

    if (cachedEdge.line) {
      cachedEdge.line.setAttribute('x1', uNode.x);
      cachedEdge.line.setAttribute('y1', uNode.y);
      cachedEdge.line.setAttribute('x2', vNode.x);
      cachedEdge.line.setAttribute('y2', vNode.y);
    }

    const midX = (uNode.x + vNode.x) / 2;
    const midY = (uNode.y + vNode.y) / 2;
    if (cachedEdge.bg && cachedEdge.txt) {
      cachedEdge.bg.setAttribute('x', midX - 12);
      cachedEdge.bg.setAttribute('y', midY - 9);
      cachedEdge.txt.setAttribute('x', midX);
      cachedEdge.txt.setAttribute('y', midY);
    }
  });
}

// Conclui o arraste e desvincula os ouvintes de movimento.
function endDrag() {
  draggedNode = null;
  incidentEdgesForDragged = [];
  window.removeEventListener('mousemove', onDrag);
  window.removeEventListener('mouseup', endDrag);
  window.removeEventListener('touchmove', onDrag);
  window.removeEventListener('touchend', endDrag);
}

// Converte as coordenadas do evento de mouse ou toque para a escala da lousa SVG.
function getSvgCoords(e) {
  const rect = dom.svg.getBoundingClientRect();
  const clientX = e.clientX !== undefined ? e.clientX : (e.touches && e.touches[0].clientX);
  const clientY = e.clientY !== undefined ? e.clientY : (e.touches && e.touches[0].clientY);
  return {
    x: clientX - rect.left,
    y: clientY - rect.top
  };
}

// Atualiza a lousa visual e os painéis de informação para o passo solicitado.
function applyStep(stepIdx) {
  if (!state.steps || state.steps.length === 0) return;
  const step = state.steps[stepIdx];
  if (!step) return;

  state.currentStepIdx = stepIdx;

  dom.lblStepCounter.textContent = `${stepIdx + 1} / ${state.steps.length}`;
  dom.lblStatusAction.textContent = step.title;
  const pct = ((stepIdx + 1) / state.steps.length) * 100;
  dom.progressFill.style.width = `${pct}%`;

  dom.cardStepBadge.textContent = `Passo ${stepIdx + 1} de ${state.steps.length}`;
  dom.cardStepDesc.textContent = step.desc;
  dom.cardStepDetail.textContent = step.detail;

  // Atualiza nós usando o cache direto sem consultas ao documento
  state.graph.nodes.forEach(node => {
    const cached = dom.nodes[node.id];
    if (!cached || !cached.group) return;

    cached.group.classList.remove('state-unvisited', 'state-frontier', 'state-active', 'state-visited', 'state-path');

    if (step.pathNodes && step.pathNodes.has(node.id)) {
      cached.group.classList.add('state-path');
    } else if (step.activeNode === node.id) {
      cached.group.classList.add('state-active');
    } else if (step.visitedNodes && step.visitedNodes.has(node.id)) {
      cached.group.classList.add('state-visited');
    } else if (step.frontierNodes && step.frontierNodes.has(node.id)) {
      cached.group.classList.add('state-frontier');
    } else {
      cached.group.classList.add('state-unvisited');
    }

    if (cached.badge) {
      const row = step.table ? step.table.find(r => r.id === node.id) : null;
      if (row) {
        if (state.currentAlgo === 'dijkstra') {
          cached.badge.textContent = row.d === Infinity ? 'd: ∞' : `d: ${row.d}`;
        } else if (state.currentAlgo === 'bfs') {
          cached.badge.textContent = row.d === Infinity ? 'd: ∞' : `nível: ${row.d}`;
        } else if (state.currentAlgo === 'dfs') {
          cached.badge.textContent = row.d ? `t: ${row.d}` : '';
        }
      }
    }
  });

  // Atualiza arestas usando o cache direto
  state.graph.edges.forEach(edge => {
    const cached = dom.edges[edge.id];
    if (!cached || !cached.line) return;

    cached.line.classList.remove('evaluated', 'tree-edge', 'path-edge');

    if (step.pathEdges && step.pathEdges.has(edge.id)) {
      cached.line.classList.add('path-edge');
      if (state.isDirected) cached.line.setAttribute('marker-end', 'url(#arrow-path)');
    } else if (step.activeEdge === edge.id) {
      cached.line.classList.add('evaluated');
      if (state.isDirected) cached.line.setAttribute('marker-end', 'url(#arrow-active)');
    } else if (step.treeEdges && step.treeEdges.has(edge.id)) {
      cached.line.classList.add('tree-edge');
      if (state.isDirected) cached.line.setAttribute('marker-end', 'url(#arrow)');
    } else {
      if (state.isDirected) cached.line.setAttribute('marker-end', 'url(#arrow)');
    }
  });

  renderDataStructureWidget(step.dsState);
  highlightPseudocodeLine(step.pseudoLine);
  renderTraceTable(step.table, step.activeNode);
}

// Renderiza os itens da estrutura de dados auxiliar (fila, pilha ou min-heap).
function renderDataStructureWidget(dsState) {
  if (!dsState || !dsState.items) {
    dom.dsItemsStrip.innerHTML = '<span style="font-size: 0.74rem; color: var(--text-dim);">Vazia</span>';
    dom.dsCount.textContent = '0 itens';
    return;
  }

  dom.dsTitle.textContent = dsState.type;
  dom.dsCount.textContent = `${dsState.items.length} ${dsState.items.length === 1 ? 'item' : 'itens'}`;

  if (dsState.items.length === 0) {
    dom.dsItemsStrip.innerHTML = '<span style="font-size: 0.74rem; color: var(--text-dim); padding: 0.1rem 0.3rem;">Vazia</span>';
    return;
  }

  dom.dsItemsStrip.innerHTML = '';
  dsState.items.forEach((item, idx) => {
    const itemDiv = document.createElement('div');
    itemDiv.className = `ds-item ${idx === 0 ? 'highlight-head' : ''}`;
    
    let labelExtra = '';
    if (item.val !== undefined) {
      labelExtra = `<span class="val-badge">${item.val}</span>`;
    }
    itemDiv.innerHTML = `<span>${item.id}</span> ${labelExtra}`;
    dom.dsItemsStrip.appendChild(itemDiv);
  });
}

// Renderiza as linhas de pseudocódigo com sintaxe destacada.
function renderPseudocode(algoKey) {
  dom.pseudocodeDisplay.innerHTML = '';
  activePseudoLineNum = null;
  const lines = PSEUDOCODES[algoKey] || [];
  lines.forEach(l => {
    const lineDiv = document.createElement('div');
    lineDiv.className = 'code-line';
    lineDiv.id = `code-line-${l.num}`;
    lineDiv.innerHTML = `<span class="line-num">${l.num}</span><span>${formatVsCodeSyntax(l.text)}</span>`;
    dom.pseudocodeDisplay.appendChild(lineDiv);
  });
}

// Destaca a linha de pseudocódigo em execução de forma direta e sem varreduras globais.
function highlightPseudocodeLine(lineNum) {
  if (activePseudoLineNum === lineNum) return;

  if (activePseudoLineNum) {
    const prev = document.getElementById(`code-line-${activePseudoLineNum}`);
    if (prev) prev.classList.remove('active');
  }

  if (lineNum) {
    const target = document.getElementById(`code-line-${lineNum}`);
    if (target) {
      target.classList.add('active');
      target.scrollIntoView({ block: 'nearest', behavior: 'smooth' });
    }
  }

  activePseudoLineNum = lineNum;
}

// Preenche a tabela de rastreamento com valores de distâncias e predecessores.
function renderTraceTable(tableData, activeNodeId) {
  dom.traceTableBody.innerHTML = '';
  if (!tableData) return;

  tableData.forEach(row => {
    const tr = document.createElement('tr');
    if (row.id === activeNodeId) tr.classList.add('active-row');

    const dVal = row.d === Infinity ? '∞' : row.d;
    const pVal = row.p === null ? 'nulo' : row.p;

    tr.innerHTML = `
      <td>${row.id}</td>
      <td>${dVal}</td>
      <td>${pVal}</td>
      <td><span style="color:${getStatusColor(row.status)}; font-weight:500;">${row.status}</span></td>
    `;
    dom.traceTableBody.appendChild(tr);
  });
}

// Retorna a cor correspondente a cada estado funcional do vértice.
function getStatusColor(status) {
  if (status === 'Fechado' || status === 'Processado' || status === 'Finalizado' || status === 'Concluído') return '#16a34a';
  if (status === 'Fila' || status === 'Na fila' || status === 'Na pilha') return '#d97706';
  if (status === 'Caminho' || status === 'No caminho') return '#dc2626';
  return '#a0a0a0';
}

// Atualiza os blocos da aba teórica com a análise assintótica do algoritmo ativo.
function updateTheoryPanel() {
  const data = THEORY_DATA[state.currentAlgo];
  if (!data) return;

  dom.theoryAlgoName.textContent = data.title;
  dom.theoryTimeVal.textContent = data.timeVal;
  dom.theoryTimeDesc.textContent = data.timeDesc;
  dom.theorySpaceVal.textContent = data.spaceVal;
  dom.theorySpaceDesc.textContent = data.spaceDesc;
  dom.theoryDetails.innerHTML = data.content;
  dom.comparativeTip.innerHTML = data.tip;
}

// Popula os seletores de vértice de origem e destino conforme os nós do grafo.
function populateNodeSelectors() {
  dom.selectSource.innerHTML = '';
  dom.selectTarget.innerHTML = '';

  state.graph.nodes.forEach(n => {
    const optS = document.createElement('option');
    optS.value = n.id;
    optS.textContent = `${n.id} (${n.label})`;
    dom.selectSource.appendChild(optS);

    const optT = document.createElement('option');
    optT.value = n.id;
    optT.textContent = `${n.id} (${n.label})`;
    dom.selectTarget.appendChild(optT);
  });

  if (state.graph.nodes.some(n => n.id === 'A')) dom.selectSource.value = 'A';
  const lastNode = state.graph.nodes[state.graph.nodes.length - 1];
  if (lastNode) dom.selectTarget.value = lastNode.id;

  state.sourceNode = dom.selectSource.value;
  state.targetNode = dom.selectTarget.value;
}

// Prepara os passos da simulação ao trocar algoritmo ou vértices.
function prepareSimulation() {
  pauseSimulation();

  if (state.currentAlgo === 'dijkstra') {
    state.steps = generateDijkstraSteps(state.graph, state.sourceNode, state.targetNode);
  } else if (state.currentAlgo === 'bfs') {
    state.steps = generateBFSSteps(state.graph, state.sourceNode, state.targetNode);
  } else if (state.currentAlgo === 'dfs') {
    state.steps = generateDFSSteps(state.graph, state.sourceNode, state.targetNode);
  }

  state.currentStepIdx = 0;
  applyStep(0);
}

// Inicia a reprodução automática dos passos com temporizador configurável.
function playSimulation() {
  if (state.isPlaying) return;
  if (state.currentStepIdx >= state.steps.length - 1) {
    state.currentStepIdx = 0;
  }
  state.isPlaying = true;
  dom.btnPlayPause.textContent = 'Pausar';
  dom.btnPlayPause.style.backgroundColor = '#b45309';
  dom.btnPlayPause.style.borderColor = '#d97706';

  function tick() {
    if (!state.isPlaying) return;
    if (state.currentStepIdx < state.steps.length - 1) {
      state.currentStepIdx++;
      applyStep(state.currentStepIdx);
      state.timer = setTimeout(tick, state.speedMs);
    } else {
      pauseSimulation();
      showToast("Simulação concluída");
    }
  }

  state.timer = setTimeout(tick, state.speedMs);
}

// Interrompe a reprodução automática mantendo o passo atual.
function pauseSimulation() {
  state.isPlaying = false;
  if (state.timer) clearTimeout(state.timer);
  if (dom.btnPlayPause) {
    dom.btnPlayPause.textContent = 'Executar';
    dom.btnPlayPause.style.backgroundColor = '#15803d';
    dom.btnPlayPause.style.borderColor = '#16a34a';
  }
}

// Avança para o próximo passo da simulação.
function nextStep() {
  pauseSimulation();
  if (state.currentStepIdx < state.steps.length - 1) {
    state.currentStepIdx++;
    applyStep(state.currentStepIdx);
  }
}

// Retorna para o passo anterior da simulação.
function prevStep() {
  pauseSimulation();
  if (state.currentStepIdx > 0) {
    state.currentStepIdx--;
    applyStep(state.currentStepIdx);
  }
}

// Salta diretamente para o início da simulação.
function jumpToStart() {
  pauseSimulation();
  state.currentStepIdx = 0;
  applyStep(0);
}

// Salta diretamente para o último passo da simulação.
function jumpToEnd() {
  pauseSimulation();
  state.currentStepIdx = state.steps.length - 1;
  applyStep(state.currentStepIdx);
}

// Exibe notificação temporária discreta na interface.
function showToast(msg) {
  dom.toast.textContent = msg;
  dom.toast.classList.add('show');
  setTimeout(() => dom.toast.classList.remove('show'), 2000);
}

// Registra os ouvintes de eventos da página, botões, teclado e atalhos.
document.addEventListener('DOMContentLoaded', () => {
  // Inicializa o cache de elementos do DOM
  dom.svg = document.getElementById('graph-svg');
  dom.nodesLayer = document.getElementById('nodes-layer');
  dom.edgesLayer = document.getElementById('edges-layer');
  dom.lblStepCounter = document.getElementById('lbl-step-counter');
  dom.lblStatusAction = document.getElementById('lbl-status-action');
  dom.progressFill = document.getElementById('progress-fill');
  dom.progressTrack = document.getElementById('progress-track');
  dom.cardStepBadge = document.getElementById('card-step-badge');
  dom.cardStepDesc = document.getElementById('card-step-desc');
  dom.cardStepDetail = document.getElementById('card-step-detail');
  dom.dsItemsStrip = document.getElementById('ds-items-strip');
  dom.dsTitle = document.getElementById('ds-title');
  dom.dsCount = document.getElementById('ds-count');
  dom.pseudocodeDisplay = document.getElementById('pseudocode-display');
  dom.traceTableBody = document.getElementById('trace-table-body');
  dom.theoryAlgoName = document.getElementById('theory-algo-name');
  dom.theoryTimeVal = document.getElementById('theory-time-val');
  dom.theoryTimeDesc = document.getElementById('theory-time-desc');
  dom.theorySpaceVal = document.getElementById('theory-space-val');
  dom.theorySpaceDesc = document.getElementById('theory-space-desc');
  dom.theoryDetails = document.getElementById('theory-details');
  dom.comparativeTip = document.getElementById('comparative-tip');
  dom.toast = document.getElementById('toast');
  dom.btnPlayPause = document.getElementById('btn-play-pause');
  dom.selectSource = document.getElementById('select-source');
  dom.selectTarget = document.getElementById('select-target');
  dom.lblTarget = document.getElementById('lbl-target');
  dom.selectPreset = document.getElementById('select-preset');
  dom.txtDirectedStatus = document.getElementById('txt-directed-status');
  dom.speedSlider = document.getElementById('speed-slider');
  dom.speedVal = document.getElementById('speed-val');

  renderGraphBase();
  renderPseudocode(state.currentAlgo);
  updateTheoryPanel();
  prepareSimulation();

  // Seleção de algoritmo pelo menu superior
  document.querySelectorAll('.btn-algo').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.btn-algo').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      state.currentAlgo = btn.dataset.algo;

      if (state.currentAlgo === 'dfs') {
        dom.lblTarget.style.display = 'none';
        dom.selectTarget.style.display = 'none';
      } else {
        dom.lblTarget.style.display = 'inline-block';
        dom.selectTarget.style.display = 'inline-block';
      }

      renderPseudocode(state.currentAlgo);
      updateTheoryPanel();
      prepareSimulation();
      showToast(`Algoritmo: ${btn.textContent.trim()}`);
    });
  });

  // Troca de grafo pré-configurado
  dom.selectPreset.addEventListener('change', (e) => {
    const val = e.target.value;
    state.currentPreset = val;
    state.graph = JSON.parse(JSON.stringify(GRAPH_PRESETS[val]));
    renderGraphBase();
    prepareSimulation();
    showToast(`Preset: ${GRAPH_PRESETS[val].name}`);
  });

  // Alteração de nó de origem
  dom.selectSource.addEventListener('change', (e) => {
    state.sourceNode = e.target.value;
    prepareSimulation();
  });

  // Alteração de nó de destino
  dom.selectTarget.addEventListener('change', (e) => {
    state.targetNode = e.target.value;
    prepareSimulation();
  });

  // Controles de simulação
  dom.btnPlayPause.addEventListener('click', () => {
    if (state.isPlaying) pauseSimulation();
    else playSimulation();
  });

  document.getElementById('btn-step-next').addEventListener('click', nextStep);
  document.getElementById('btn-step-prev').addEventListener('click', prevStep);
  document.getElementById('btn-step-start').addEventListener('click', jumpToStart);
  document.getElementById('btn-step-end').addEventListener('click', jumpToEnd);

  // Controle de velocidade
  dom.speedSlider.addEventListener('input', (e) => {
    const raw = 2100 - parseInt(e.target.value, 10);
    state.speedMs = raw;
    const mult = (700 / raw).toFixed(1);
    dom.speedVal.textContent = `${mult}x`;
  });

  // Barra de progresso interativa por clique
  dom.progressTrack.addEventListener('click', (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const clickX = e.clientX - rect.left;
    const ratio = Math.max(0, Math.min(1, clickX / rect.width));
    const targetStep = Math.round(ratio * (state.steps.length - 1));
    pauseSimulation();
    applyStep(targetStep);
  });

  // Alternância entre grafo direcionado e não-direcionado
  document.getElementById('btn-toggle-directed').addEventListener('click', () => {
    state.isDirected = !state.isDirected;
    dom.txtDirectedStatus.textContent = state.isDirected ? 'Grafo direcionado' : 'Grafo não-direcionado';
    renderGraphBase();
    prepareSimulation();
    showToast(state.isDirected ? 'Modo: grafo direcionado' : 'Modo: grafo não-direcionado');
  });

  // Centralização geométrica do grafo
  document.getElementById('btn-center-graph').addEventListener('click', () => {
    centerGraph(true);
    showToast('Grafo centralizado');
  });

  // Ajuste do grafo ao redimensionar a janela
  let resizeTimeout;
  window.addEventListener('resize', () => {
    clearTimeout(resizeTimeout);
    resizeTimeout = setTimeout(() => {
      centerGraph(true);
    }, 120);
  });

  // Alternância entre as abas informativas da lateral direita
  document.querySelectorAll('.tab-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const targetTabId = btn.dataset.tab;
      document.querySelectorAll('.tab-content').forEach(c => c.style.display = 'none');
      const targetContent = document.getElementById(targetTabId);
      if (targetContent) targetContent.style.display = 'flex';
    });
  });

  // Atalhos de teclado para controle rápido
  window.addEventListener('keydown', (e) => {
    if (e.target.tagName === 'INPUT' || e.target.tagName === 'SELECT') return;
    if (e.code === 'Space') {
      e.preventDefault();
      if (state.isPlaying) pauseSimulation();
      else playSimulation();
    } else if (e.code === 'ArrowRight') {
      nextStep();
    } else if (e.code === 'ArrowLeft') {
      prevStep();
    }
  });
});

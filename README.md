# GraphLab - visualizador educacional de algoritmos em grafos

## Visão geral
Aplicação interativa desenvolvida em html, css e javascript para visualização passo a passo e análise assintótica dos principais algoritmos da teoria dos grafos: dijkstra (caminho mais curto), busca em largura (bfs) e busca em profundidade (dfs).

O projeto foi concebido para uso didático no contexto de cursos de ciência da computação e engenharia, servindo como ferramenta prática de apoio ao estudo de estruturas de dados avançadas.

## Funcionalidades
- Lousa interativa baseada em svg com suporte ao reposicionamento manual dos nós por arraste.
- Quatro topologias pré-configuradas: rede ponderada geral, árvore hierárquica, bifurcação com ciclos e malha urbana.
- Suporte a arestas ponderadas e alternância entre grafos direcionados e não-direcionados.
- Centralização geométrica automática do grafo na área de desenho.
- Controle de simulação completo com execução contínua, pausa, avanço e retrocesso passo a passo, salto para início ou fim e controle de velocidade.
- Inspeção em tempo real das estruturas de dados auxiliares: fila fifo na busca em largura, pilha lifo na busca em profundidade e fila de prioridades (min-heap) no algoritmo de dijkstra.
- Sincronização do pseudocódigo com indicação da linha em execução a cada etapa.
- Tabela de rastreamento com atualização dos vetores de distâncias acumuladas d[v], predecessores pi[v] e tempos de descoberta e término.
- Layout responsivo adaptado para computadores desktop (sem barra de rolagem de página) e dispositivos móveis (smartphones e tablets android e ios).
- Design monocromático em fundo preto com cores sólidas e sem transparências.

## Algoritmos e complexidade assintótica

### 1. Algoritmo de dijkstra (caminho mais curto)
- Descrição: Encontra a rota de menor custo total a partir de uma origem até todos os outros vértices em grafos com pesos não-negativos. Emprega a abordagem gananciosa (greedy), relaxando arestas e extraindo reiteradamente o nó com menor custo acumulado provisório.
- Complexidade de tempo com min-heap binário: O((|V| + |E|) log |V|), simplificada para O(|E| log |V|) em grafos conexos.
- Complexidade de tempo com vetor linear simples: O(|V|^2).
- Complexidade de espaço: O(|V| + |E|).

### 2. Busca em largura (bfs - breadth-first search)
- Descrição: Percorre o grafo em ondas concêntricas por camadas ou níveis de distância em relação à origem. Garante o menor caminho em quantidade de arestas em grafos sem pesos ou com pesos uniformes.
- Complexidade de tempo com lista de adjacência: O(|V| + |E|).
- Complexidade de tempo com matriz de adjacência: O(|V|^2).
- Complexidade de espaço: O(|V|).

### 3. Busca em profundidade (dfs - depth-first search)
- Descrição: Explora verticalmente os ramos do grafo até as folhas antes de retroceder (backtracking). Produz uma floresta de busca em profundidade e classifica as arestas, permitindo a detecção formal de ciclos mediante arestas de retorno.
- Complexidade de tempo com lista de adjacência: O(|V| + |E|).
- Complexidade de tempo com matriz de adjacência: O(|V|^2).
- Complexidade de espaço: O(|V|) no pior caso (grafo degenerado em linha) e O(log |V|) no melhor caso (árvore balanceada).

## Comparativo assintótico
| Algoritmo | Estrutura auxiliar | Tempo (lista de adjacência) | Tempo (matriz de adjacência) | Espaço | Objetivo principal |
| :--- | :--- | :--- | :--- | :--- | :--- |
| Dijkstra | Fila de prioridades (min-heap) | O((|V| + |E|) log |V|) | O(|V|^2) | O(|V| + |E|) | Caminho de menor custo acumulado (pesos não-negativos) |
| BFS | Fila (fifo) | O(|V| + |E|) | O(|V|^2) | O(|V|) | Menor número de arestas e percurso por níveis |
| DFS | Pilha (lifo / recursão) | O(|V| + |E|) | O(|V|^2) | O(|V|) | Detecção de ciclos, ordenação topológica e componentes conexos |

## Estrutura dos arquivos
- index.html: Estrutura semântica da aplicação e marcação da interface.
- style.css: Folha de estilos com tom escuro unificado, tipografia Arial e destaque de código no padrão Visual Studio Code.
- script.js: Motor lógico otimizado com renderização SVG, simulação dos algoritmos e cache de elementos DOM.
- README.md: Documentação técnica e guia de execução para o repositório.

## Como executar o projeto
1. Clone este repositório ou faça o download dos arquivos em sua máquina local.
2. Não é necessária a instalação de dependências, servidores locais ou compiladores.
3. Abra o arquivo index.html com um duplo clique ou através de qualquer navegador moderno (google chrome, mozilla firefox, microsoft edge, safari ou opera).

## Atalhos de teclado
- Barra de espaço: Inicia ou pausa a reprodução da simulação.
- Seta para a direita: Avança para a próxima etapa.
- Seta para a esquerda: Retorna para a etapa anterior.

## Referências bibliográficas
- Szwarcfiter, Jayme Luiz; Markenzon, Lilian. Estruturas de dados e seus algoritmos. Rio de Janeiro: LTC.
- Schouery, Rafael. MC-202: Estruturas de dados - grafos, conceitos, representações e buscas. Instituto de Computação, Unicamp.
- Cormen, Thomas H.; Leiserson, Charles E.; Rivest, Ronald L.; Stein, Clifford. Algoritmos: teoria e prática. Rio de Janeiro: Elsevier.

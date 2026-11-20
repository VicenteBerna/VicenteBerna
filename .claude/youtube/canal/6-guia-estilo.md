# ProfitMoments — guia de estilo visual

Base: simulação aprovada pelo criador em 2026-11-20 e análise de 4 vídeos do @MagnatesMedia
(referência de linguagem, nunca de identidade). O Motor 33 aplica este guia em todo vídeo. Os modelos
de gráficos ficam em `.claude/skills/pm-33/graphics/`.

**Em uma frase:** documentário de negócios cinematográfico, escuro e premium, com números grandes,
dados animados e citações elegantes — **calmo, nunca alarmista**.

---

## 1. Cores

| Uso | Cor | Hex |
|---|---|---|
| Fundo (base) | Grafite quase preto, com vinheta suave | `#0E0F12` |
| Texto principal | Branco quente | `#F2EFE8` |
| **Assinatura do canal** — destaques, números-chave, linhas de dados | Dourado | `#D4A84B` |
| Alertas, quedas, riscos (com moderação) | Vermelho terroso | `#C8553D` |
| Rótulos, fontes, eixos, marca d'água | Cinza | `#8A8F98` |
| Linhas de grade | Grafite claro | `#2A2C33` |

Regra: **no máximo uma cor de destaque por tela** (dourado), mais o vermelho só quando o dado é uma
queda ou um risco. Leve granulação de filme sobre tudo.

## 2. Tipografia (fontes gratuitas para uso comercial — Google Fonts)

| Uso | Fonte | Estilo |
|---|---|---|
| Títulos, números grandes | **Montserrat** | Black (900) ou ExtraBold (800); números gigantes |
| Textos de apoio | Montserrat | SemiBold (600) |
| Rótulos e "kickers" (linha acima do título) | Montserrat | SemiBold, CAIXA ALTA, espaçamento largo |
| Citações e títulos de capítulo | **Playfair Display** | Itálico (citações) · Bold (capítulos) |

Texto na tela: **curto e exato** — as palavras e os números exatamente como na narração e na fonte.
Nunca um parágrafo na tela.

## 3. Elementos padrão (modelos prontos)

| Elemento | Quando usar | Como é |
|---|---|---|
| **Gancho tipográfico** | Abertura e frases de impacto | Kicker cinza + palavra-chave gigante em dourado + linha de apoio |
| **Número grande** | Todo número central da narração | Número gigante (pode contar até o valor) + o que ele mede + fonte e data no rodapé |
| **Gráfico animado** | Tendências e comparações | Linha que se desenha da esquerda para a direita; só pontos verificados; **meses sem dado em tracejado**; fonte no rodapé |
| **Cartão de citação** | Citações de fontes | Playfair itálico, palavras-chave sublinhadas em dourado, autor · organização · data |
| **Cartão de capítulo** | Início de cada parte (4 ou 5 por vídeo) | "PART N" em dourado + título em Playfair, moldura dourada fina |
| **Marca** | Todas as telas de gráfico | "PROFIT**MOMENTS**" pequeno no canto inferior esquerdo |

**Toda tela com dado mostra a fonte e a data** (canto inferior direito, cinza). Cálculos nossos são
indicados ("our calculation").

## 4. Movimento — nada fica parado

- **Toda imagem se move.** Gráficos, números e citações entram animados (MP4). Imagens de cena usam as
  animações do Editor do Arsenal (Efeitos → Animações → Trocar animação) ou, se necessário, o Claude
  converte a imagem em clipe com movimento.
- **Gancho (0:00–0:20):** cortes a cada ~2 segundos; movimentos mais marcados.
- **Meio do vídeo:** cortes a cada 3–5 segundos; **aproximações lentas e suaves** (sensação premium).
- **Revelações:** um movimento marcado **ou** uma pausa no silêncio antes do número.
- **Evitar:** tremidas, glitch, scanlines de TV, zooms bruscos sem motivo, "Variar automaticamente"
  sem revisão. A animação "Pulsar" do Editor: testar antes de adotar.
- **Pendente:** lista de animações do Editor — definir no primeiro projeto (usar / reservar / evitar).

## 5. Imagens de cena (Google Flow / Video Lab)

- **Pessoas:** silhuetas e figuras **sem rosto identificável**, de terno ou roupa de escritório,
  estilizadas (estilo "manequim 3D" escuro). Nunca rostos realistas de pessoas reais.
- **Cenários:** escritórios à noite, corredores corporativos, mesas, telas, cidades americanas ao
  entardecer — luz baixa, contraste alto, tons frios com toques dourados.
- **Prompt de estilo do projeto (texto único no Video Lab), ponto de partida:**
  > Cinematic documentary still, dark moody lighting, high contrast, deep charcoal tones with warm
  > gold accents, subtle film grain, faceless stylized figures in business attire, no readable text,
  > no logos, no real people, premium editorial look.
- Uma imagem por ideia dominante. **Seguir o sentido da narração, não os substantivos** (a frase
  "AI was cited" não pede um robô).
- **Proibido (lista do Motor 33):** cérebros brilhando, robôs ameaçadores, túneis de IA, código
  digitando em loop, interfaces falsas, clichês de "substituição", documentos ou telas falsas que
  pareçam reais.

## 6. Vídeo com IA

4 a 6 clipes por vídeo, no **gancho**, nas **revelações** e nas **viradas** (política de produção,
seção 3). Mesmo estilo das imagens. Nenhum clipe pode parecer filmagem real de um evento.

## 7. Som

- **Trilha:** Biblioteca de Áudio do YouTube. Tensa, mas contida — cinematográfica, ambiente,
  eletrônica suave. Nada de épico orquestral ou percussão pesada a cada corte.
- **Efeitos:** whoosh e graves **com moderação** (transições de capítulo e revelações).
- **Silêncio:** uma pausa curta de música antes das revelações principais.
- **Voz sempre acima da música:** música baixa sob a narração.

## 8. Legendas

Legendas completas e sincronizadas ("Gerar legendas" no Editor). Fonte limpa, branca, com sombra ou
fundo escuro; no máximo 2 linhas; nunca cobrir números ou citações na tela.

## 9. Thumbnail (ThumbLab do Arsenal)

- Fundo escuro, **número ou contraste em dourado gigante** (ex.: "40% → 3%"), no máximo 3 palavras.
- Uma figura sem rosto ou um objeto simbólico — nunca uma pessoa real.
- Texto diferente do título (o título pergunta, a thumbnail mostra).
- Legível em tamanho pequeno (testar reduzida a ~160 px de largura).
- Mesma paleta do vídeo: o espectador deve reconhecer o canal pela thumbnail.

## 10. O que pegamos do @MagnatesMedia — e o que não

| Adotar | Adaptar | Evitar |
|---|---|---|
| Base escura cinematográfica, números gigantes, citações com destaque, silhuetas sem rosto, cartões de capítulo, gancho rápido, silêncio antes de revelar | Trilha contida em vez de épica; efeitos com moderação; cartões de citação nossos em vez de prints de terceiros | Títulos com "INSANE", "IDIOT"; glitch e scanlines; logotipos, vinhetas e trilhas deles; música paga; vídeos de 40+ minutos |

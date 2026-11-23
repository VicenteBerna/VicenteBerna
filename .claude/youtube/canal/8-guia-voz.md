# ProfitMoments — guia de criação da voz (clone da voz do criador)

Decisão de 2026-11-23: todos os vídeos usam um clone da voz do criador no ElevenLabs, falando inglês a
partir de gravações em português brasileiro. Fonte: documentação oficial do ElevenLabs, conferida em
2026-11-23.

## Sotaque

- Meta: **inglês americano natural e fluente** (público dos EUA).
- Gravar em **português**; gerar em inglês com o modelo **Eleven v4**. Documentação: *"With Eleven v4,
  speech generated in the same language as the samples keeps the original accent. Speech generated in
  a different language is fluent in the target language."* Em modelos anteriores (ex.: Multilingual
  v2), o clone pode manter o sotaque da língua original e errar pronúncias.
- Não existe seletor de sotaque para clones; para mudar o resultado, mudar as gravações.

## Tipos de clone

| | Instant Voice Clone | Professional Voice Clone |
|---|---|---|
| Áudio | 1–2 min (mais de 3 min pode piorar) | 30 min a 3 h |
| Tempo | Imediato | 3–6 h de treinamento, após verificação de que a voz é do próprio usuário |
| Plano | Conferir no plano do criador | Creator ou superior |

Começar pelo **Instant**; se não capturar bem a voz, partir para o Professional.

## Gravação

- Ambiente silencioso e sem eco (cortinas, tapete, roupas); evitar cozinha e banheiro.
- Um só microfone do começo ao fim, a 15–20 cm da boca (evitar o do notebook).
- Tom constante: **calmo, pausado, grave, de documentário** — a IA imita velocidade, entonação,
  respiração e até ruídos.
- Sem música, sem ruído de fundo, uma só pessoa. 1–2 minutos no total, de preferência numa gravação.
  MP3 serve: importa a qualidade da captação, não o formato.

## Passo a passo

1. ElevenLabs → **Voices** → criar nova voz → **Instant Voice Clone** → enviar ou gravar → nome
   (ex.: "ProfitMoments Narrator") → confirmar que a voz é sua.
2. **Text to Speech** → escolher a voz → modelo **Eleven v4** → colar o gancho do vídeo 1 → gerar.
3. Anotar as configurações (stability, similarity etc.) ou tirar print.
4. Avaliar: soa como o criador? inglês natural? ritmo calmo? Se não, trocar a gravação.

Gancho de teste (vídeo 1):
> This spring, AI was the number one reason American companies gave for cutting jobs. By October, it
> had almost disappeared from their announcements. The technology didn't change that fast. The story
> did. And your risk was never in the story.

## Texto para gravar (português, ~1 min 30 s)

> Durante muitos anos, eu acreditei que estabilidade era a mesma coisa que segurança. Um salário no
> fim do mês, um crachá, uma rotina previsível. Parecia o suficiente.
>
> Mas existe uma pergunta que quase ninguém faz enquanto as coisas estão bem: quantas escolhas eu
> realmente tenho? Não as escolhas que a empresa me oferece. As minhas.
>
> Os números contam uma parte dessa história. As demissões anunciadas, as vagas abertas, os relatórios
> que saem todo mês. Mas os números não dizem quanto tempo você teria para decidir, se tudo mudasse
> amanhã. Isso, só você sabe.
>
> Este canal não é sobre fugir da vida que você construiu. É sobre construir mais liberdade dentro
> dela, e mais opções além dela. Com calma, com dados reais e com honestidade.
>
> Porque o verdadeiro lucro não é só o que entra. É o que permanece. É o tempo que volta para você. É
> poder escolher.

## Fontes

- https://elevenlabs.io/docs/product-guides/voices/voice-cloning
- https://elevenlabs.io/docs/product-guides/voices/voice-cloning/instant-voice-cloning
- https://elevenlabs.io/docs/product-guides/voices/voice-cloning/professional-voice-cloning

## Registro (preencher após o teste)

- Tipo de clone: —
- Nome da voz / Voice ID: —
- Modelo: —
- Configurações: —
- Resultado do teste do gancho: —

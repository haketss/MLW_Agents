# MLW Agents — Front-end

Interface web do projeto MLW Agents. Aplicação construída com Vite + React + TypeScript e empacotada/executada com Bun.

**Descrição**

Este repositório contém o front-end da aplicação MLW Agents, que consome a API localizada em `MLW_Agents_API` para gerenciar salas, perguntas e upload de áudio.

**Stack principal**

- Vite
- React (TSX)
- TypeScript
- Bun (runtime / package manager)
- dayjs (tratamento de datas)

**Pré-requisitos**

- Bun instalado (https://bun.sh)
- Ter a API `MLW_Agents_API` rodando e acessível

**Instalação e execução (desenvolvimento)**

```bash
# instalar dependências
bun install

# rodar em modo desenvolvimento (Vite)
bun run dev
```

A aplicação ficará disponível em http://localhost:5173 por padrão.

**Build e preview**

```bash
# gerar build
bun run build

# visualizar build localmente
bun run preview
```

**Estrutura do projeto (resumo)**

- `src/`
  - `main.tsx` / `app.tsx` — boot do React
  - `index.css` — estilos globais
  - `pages/` — páginas da aplicação (`create-room.tsx`, `room.tsx`, `record-rooma-udio.tsx`)
  - `components/` — componentes e subcomponentes reutilizáveis
    - `create-room-form.tsx` — formulário para criar sala
    - `question-form.tsx` — formulário para criar pergunta
    - `question-item.tsx` — item de pergunta
    - `question-list.tsx` — lista de perguntas
    - `room-list.tsx` — lista de salas
  - `http/` — hooks para chamadas à API
    - `use-create-room.ts`, `use-rooms.ts`, `use-create-question.ts`, `use-room-questions.ts`
  - `lib/` — utilitários (ex.: `dayjs.ts`, `utils.ts`)
  - `ui/` — componentes de UI (botões, inputs, cards, etc.)

**Observações importantes / Troubleshooting**

- Day.js locale import error

  Se durante `bun run dev` surgir erro do tipo "Failed to resolve import \"@dayjs/locale/pt-BR\"", aplique a correção no arquivo `src/lib/dayjs.ts` (ou `src/components/lib/dayjs.ts` caso exista):

  Altere:

  ```ts
  import '@dayjs/locale/pt-BR'
  ```

  Para:

  ```ts
  import 'dayjs/locale/pt-br'
  ```

  Em seguida reinicie o servidor de desenvolvimento.

- `.env` não está sendo ignorado pelo Git

  Se você já tiver um arquivo `.gitignore` contendo `.env`, mas o `.env` ainda aparece no repositório, remova-o do índice e faça commit novamente:

  ```bash
  git rm --cached .env
  git commit -m "Remove .env do index do git"
  git push
  ```

- CORS / API inacessível

  Verifique se a `VITE_API_URL` está correta e se a API `MLW_Agents_API` está rodando. Habilite CORS no backend caso receba erros de acesso.

**Contribuição**

- Siga as convenções de commit e garanta que a API correspondente esteja executando para testes manuais das funcionalidades.

**Links úteis**

- API (backend): `../MLW_Agents_API`
- Endpoint de testes: veja `client.http` na pasta do backend para exemplos de chamadas.

---

Se quiser, eu posso também:
- adicionar um `README` mais detalhado com diagramas e exemplos de requests;
- criar um `.env.example` com as variáveis esperadas;
- configurar um script `dev:api` que inicia backend e frontend juntos via `docker-compose`.

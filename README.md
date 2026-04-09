# SaaS PM + CEO Auditor Skill

Agent skill for deep SaaS launch-readiness audits across product, architecture, security, billing, and operations.

---

## English

### What this skill does

`saas-pm-ceo-auditor` performs a full audit and returns:

- What is already stable and launch-ready
- What is missing for MVP/go-live (with acceptance criteria)
- Immediate risks (security, multitenancy, billing/webhooks, reliability)
- Non-technical gaps (legal, telemetry, support, feedback loop)
- Prioritized execution plan (High/Medium/Low)

### Invoke command

```text
/saas-pm-ceo-auditor
```

### Install from GitHub (recommended)

Install for all supported agents detected in your machine:

```bash
npx -y skills add gustavczar/saas-pm-ceo-auditor --skill saas-pm-ceo-auditor --agent '*' -y
```

Install only for specific agents:

```bash
npx -y skills add gustavczar/saas-pm-ceo-auditor --skill saas-pm-ceo-auditor -a github-copilot -y
npx -y skills add gustavczar/saas-pm-ceo-auditor --skill saas-pm-ceo-auditor -a claude-code -y
npx -y skills add gustavczar/saas-pm-ceo-auditor --skill saas-pm-ceo-auditor -a gemini-cli -y
```

### Install via npm

```bash
npm i -D saas-pm-ceo-auditor-skill
```

The package runs `postinstall` and syncs skills automatically to detected agents.
If needed, run manual sync:

```bash
npx -y skills experimental_sync -a '*' -y
```

### Publish your own npm release

```bash
npm login
npm publish --access public
```

> If you use a scoped package (recommended), update `name` in `package.json`, for example: `@your-user/saas-pm-ceo-auditor`.

### Make it discoverable on skills.sh

1. Keep this repository public.
2. Keep at least one valid `SKILL.md` with `name` and `description`.
3. Push to GitHub.
4. Install at least once with `npx skills add ...`.
5. Search on https://skills.sh (indexing may take a short time).

---

## Portugues (Brasil)

### O que esta skill faz

`saas-pm-ceo-auditor` executa uma auditoria completa e entrega:

- O que ja esta estavel e pronto para lancar
- O que falta para MVP/go-live (com criterio de aceite)
- Riscos imediatos (seguranca, multitenancy, cobranca/webhooks, confiabilidade)
- Pendencias nao-tecnicas (legal, telemetria, suporte, feedback)
- Plano de execucao priorizado (Alta/Media/Baixa)

### Comando de invocacao

```text
/saas-pm-ceo-auditor
```

### Instalacao via GitHub (recomendado)

Instalar para todos os agentes suportados detectados na maquina:

```bash
npx -y skills add gustavczar/saas-pm-ceo-auditor --skill saas-pm-ceo-auditor --agent '*' -y
```

Instalar somente para agentes especificos:

```bash
npx -y skills add gustavczar/saas-pm-ceo-auditor --skill saas-pm-ceo-auditor -a github-copilot -y
npx -y skills add gustavczar/saas-pm-ceo-auditor --skill saas-pm-ceo-auditor -a claude-code -y
npx -y skills add gustavczar/saas-pm-ceo-auditor --skill saas-pm-ceo-auditor -a gemini-cli -y
```

### Instalacao via npm

```bash
npm i -D saas-pm-ceo-auditor-skill
```

O pacote roda `postinstall` e sincroniza a skill automaticamente para os agentes detectados.
Se precisar, rode sincronizacao manual:

```bash
npx -y skills experimental_sync -a '*' -y
```

### Publicar sua versao no npm

```bash
npm login
npm publish --access public
```

> Se usar pacote com escopo (recomendado), ajuste `name` no `package.json`, por exemplo: `@seu-user/saas-pm-ceo-auditor`.

### Como aparecer no skills.sh

1. Mantenha este repositorio publico.
2. Mantenha pelo menos um `SKILL.md` valido com `name` e `description`.
3. Faça push no GitHub.
4. Faça pelo menos uma instalacao com `npx skills add ...`.
5. Pesquise em https://skills.sh (a indexacao pode levar um pequeno tempo).

---

## Repository layout

```text
skills/
  saas-pm-ceo-auditor/
    SKILL.md
scripts/
  postinstall.cjs
package.json
README.md
```

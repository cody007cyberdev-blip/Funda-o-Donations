# Fundação Infância Feliz (FIF) - Plataforma de Doações

## Descrição do Projeto

A **Fundação Infância Feliz (FIF)** é uma plataforma de doações dedicada a apoiar crianças e jovens em Cabo Verde. Com mais de 20 anos de atuação, a fundação utiliza esta plataforma para conectar doadores a causas urgentes, permitindo a criação e gestão de campanhas de arrecadação de fundos de forma transparente e eficiente.

O sistema foi redesenhado com uma interface **UI/UX minimalista em preto e branco**, focando na clareza, objetividade e facilidade de uso para todos os perfis de utilizadores, desde doadores individuais até grandes parceiros institucionais.

### Missão

Promover os direitos e o bem-estar das crianças e jovens de Cabo Verde, garantindo acesso à educação, saúde, proteção e um ambiente familiar saudável através da mobilização de recursos e solidariedade da comunidade.

## Por que a FIF Donations é necessária?

A plataforma resolve desafios críticos na gestão de ajuda humanitária:
*   **Transparência:** Permite que os doadores acompanhem o progresso das campanhas em tempo real, construindo confiança e credibilidade.
*   **Acessibilidade:** Uma interface simplificada e intuitiva que remove barreiras visuais, facilitando a doação e a participação em qualquer dispositivo e para qualquer utilizador.
*   **Gestão Centralizada:** Coordenadores e administradores podem gerir múltiplas campanhas, doadores e estatísticas de impacto em um único painel, otimizando a operação.
*   **Mobilização Rápida:** Facilita a criação e lançamento de campanhas de emergência com fluxos de aprovação otimizados, permitindo uma resposta ágil a necessidades urgentes.

## Apresentação Visual (Minimalista Preto e Branco)

A nova interface minimalista prioriza o conteúdo e a facilidade de navegação, utilizando uma paleta rigorosamente monocromática para transmitir seriedade, foco e elegância. As imagens abaixo representam o estilo visual da plataforma:

### Página Inicial
![Página Inicial](https://via.placeholder.com/800x450/000000/FFFFFF?text=Página+Inicial+Minimalista)
*Design limpo focado na mensagem institucional e nas campanhas ativas, com tipografia clara e espaçamento generoso.*

### Painel de Gestão (Dashboard)
![Painel de Gestão](https://via.placeholder.com/800x450/000000/FFFFFF?text=Dashboard+Minimalista)
*Visualização clara de métricas, doações recebidas e status das campanhas, sem distrações visuais desnecessárias. Gráficos e tabelas com design sóbrio.*

### Detalhes da Campanha
![Detalhes da Campanha](https://via.placeholder.com/800x450/000000/FFFFFF?text=Detalhes+da+Campanha+Minimalista)
*Foco total na história da causa, progresso financeiro e botão de ação direta, garantindo que o impacto social seja o protagonista. Imagens de campanha em destaque, mas sem sobrecarregar o design.*

## Guia de Uso e Configuração

Este projeto é uma aplicação moderna baseada em **React** e **Vite**. A execução e gestão do projeto são feitas exclusivamente através do gestor de pacotes **npm**.

### Pré-requisitos
*   [Node.js](https://nodejs.org/en/) (versão 18 ou superior).
*   [npm](https://www.npmjs.com/) (instalado automaticamente com o Node.js).

### Passos para Instalação e Execução

1.  **Clonar o Repositório:**
    ```bash
    git clone https://github.com/cody007cyberdev-blip/Funda-o-Donations.git
    cd Funda-o-Donations
    ```

2.  **Instalar Dependências:**
    Utilize o npm para instalar todas as bibliotecas necessárias listadas no `package.json`:
    ```bash
    npm install --legacy-peer-deps
    ```
    *Nota:* É provável que o projeto não execute corretamente após `npm install --legacy-peer-deps` e `npm run dev` devido a atualizações recentes de dependências. Se isso ocorrer, execute o seguinte comando para adaptar as atualizações:
    ```bash
    npm audit fix --legacy-peer-deps
    ```

3.  **Iniciar o Servidor de Desenvolvimento:**
    Para executar o projeto localmente com hot-reload (Vite):
    ```bash
    npm run dev
    ```

4.  **Aceder à Aplicação:**
    Após iniciar o servidor, abra o seu navegador web e aceda ao endereço indicado no terminal (geralmente `http://localhost:5173`).

5.  **Gerar Build de Produção (Opcional):**
    Para criar uma versão otimizada para publicação:
    ```bash
    npm run build
    ```

### Estrutura de Pastas

*   `src/theme/`: Configurações do tema minimalista (Mantine).
*   `src/pages/`: Páginas principais da aplicação.
*   `src/components/`: Componentes UI reutilizáveis.
*   `src/data/`: Ficheiros JSON com dados mockados para demonstração.
*   `public/`: Ativos estáticos e imagens globais.

---
*Desenvolvido com foco no impacto social e na simplicidade através de tecnologias modernas de frontend.*

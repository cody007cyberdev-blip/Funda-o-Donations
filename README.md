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

## Guia de Uso e Configuração (WampServer)

Este projeto é uma aplicação web desenvolvida com React e Mantine. Para configurar e executar o projeto no seu ambiente local, siga os passos abaixo. Recomenda-se o uso de um ambiente de desenvolvimento como o WampServer para simular um servidor web completo.

### Pré-requisitos
*   [Node.js](https://nodejs.org/en/) (versão 18 ou superior) e [npm](https://www.npmjs.com/) (geralmente vem com o Node.js) ou [Yarn](https://yarnpkg.com/).
*   [Git](https://git-scm.com/downloads) instalado.
*   Um servidor web local como [WampServer](https://www.wampserver.com/en/) (para Windows) ou [XAMPP](https://www.apachefriends.org/index.html) (para Windows, macOS, Linux) para simular um servidor web completo, caso haja integração com backend PHP no futuro. Para este frontend, o WampServer não é estritamente necessário, mas é útil para projetos que combinam frontend e backend PHP.

### Passos para Instalação

1.  **Clonar o Repositório:**
    Abra o terminal ou Git Bash e clone o repositório para a pasta desejada. Se estiver a usar WampServer e quiser que o projeto seja acessível via `localhost`, clone-o diretamente na pasta `www` (ex: `C:\wamp64\www\`):
    ```bash
    git clone https://github.com/cody007cyberdev-blip/Funda-o-Donations.git
    cd Funda-o-Donations
    ```

2.  **Instalar Dependências:**
    Dentro da pasta do projeto (`Funda-o-Donations`), instale as dependências do Node.js:
    ```bash
    npm install
    # ou, se estiver a usar Yarn:
    yarn install
    ```

3.  **Configuração do Tema (Minimalista):**
    O tema minimalista preto e branco já está configurado nos ficheiros:
    *   `src/theme/index.ts`: Define a paleta de cores `brand` (tons de cinza, preto e branco) e estilos de componentes.
    *   `src/index.css`: Contém estilos globais para o corpo da página, removendo gradientes e sombras para um visual mais limpo.

4.  **Configuração do Banco de Dados (Opcional - para Backend):**
    Atualmente, o projeto utiliza dados mockados em `src/data/` para o frontend. Se for integrar com um backend e banco de dados real:
    *   Inicie o WampServer (ou XAMPP) e certifique-se de que o Apache e o MySQL estão a correr.
    *   Acesse o phpMyAdmin (geralmente `http://localhost/phpmyadmin/`).
    *   Crie um novo banco de dados. O nome do banco de dados e as credenciais devem ser configurados num ficheiro `.env` na raiz do seu backend (se houver).
    *   Importe o esquema SQL do seu backend (se disponível) para o banco de dados criado.

5.  **Estrutura de Pastas (Frontend):**
    *   `src/theme/`: Contém a definição do tema Mantine para a aplicação.
    *   `src/pages/`: Componentes React que representam as páginas da aplicação.
    *   `src/sections/`: Componentes React que representam seções maiores de uma página (ex: Hero, Features).
    *   `src/components/`: Componentes React reutilizáveis menores.
    *   `src/data/`: Ficheiros JSON com dados de exemplo ou mockados.
    *   `public/`: Ficheiros estáticos como `index.html`, `favicon.ico` e imagens.

6.  **Iniciar o Servidor de Desenvolvimento:**
    No terminal, dentro da pasta `Funda-o-Donations`, execute:
    ```bash
    npm run dev
    ```

7.  **Aceder à Aplicação:**
    Abra o seu navegador web e acesse o endereço que será exibido no terminal (geralmente `http://localhost:5173`).

---
*Desenvolvido com foco no impacto social e na simplicidade.*

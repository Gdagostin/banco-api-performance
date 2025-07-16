# 🚀 Banco API Performance

Projeto de testes de performance para API bancária desenvolvido durante o curso **Mentoria em Teste de Software 2.0** do [Julio de Lima](https://github.com/juliolima).

Este repositório contém uma suíte completa de testes de performance utilizando k6 para validar endpoints de uma API bancária, incluindo funcionalidades de autenticação e transferências.

## 📋 Introdução

Este projeto foi desenvolvido para demonstrar boas práticas em testes de performance de APIs, utilizando o k6 como ferramenta principal. O foco está em testar cenários críticos de uma aplicação bancária, como login de usuários e transferências entre contas.

Os testes são estruturados de forma modular e reutilizável, seguindo padrões da indústria para facilitar manutenção e escalabilidade.

## 🛠️ Tecnologias Utilizadas

- **[k6](https://k6.io/)** - Ferramenta de teste de performance
- **JavaScript (ES6+)** - Linguagem de programação para os scripts
- **JSON** - Formato para dados de teste (fixtures)
- **Git** - Controle de versão

## 📁 Estrutura do Repositório

```
banco-api-performance/
├── fixtures/           # Dados de teste em formato JSON
│   └── postLogin.json  # Payload para requisições de login
├── helpers/            # Funções auxiliares reutilizáveis
│   └── autenticacao.js # Funções para obtenção de token de autenticação
├── tests/              # Scripts de teste de performance
│   ├── login.test.js   # Testes de performance para endpoint de login
│   └── transferencias.test.js # Testes para endpoint de transferências
├── Utils/              # Utilitários e configurações
│   └── variaveis.js    # Gerenciamento de variáveis de ambiente
├── html-report.html    # Relatório HTML gerado pelos testes (quando executado)
└── README.md          # Documentação do projeto
```

## 🎯 Objetivo de Cada Grupo de Arquivos

### **`fixtures/`**
Contém dados de teste em formato JSON, facilitando a manutenção e reutilização de payloads para diferentes cenários de teste.

### **`helpers/`**
Funções auxiliares que encapsulam lógicas complexas, como:
- Autenticação e obtenção de tokens
- Validações customizadas
- Utilitários para preparação de dados

### **`tests/`**
Scripts principais de teste de performance, organizados por funcionalidade:
- **`login.test.js`**: Testa performance do endpoint de autenticação
- **`transferencias.test.js`**: Valida performance de transferências bancárias

### **`Utils/`**
Utilitários para configuração e gerenciamento do projeto:
- Gerenciamento de variáveis de ambiente
- Configurações globais
- Funções de apoio

## ⚙️ Instalação

### Pré-requisitos
- [k6](https://k6.io/docs/get-started/installation/) instalado no sistema

### Instalação do k6

**Windows (usando Chocolatey):**
```powershell
choco install k6
```

**Windows (usando winget):**
```powershell
winget install k6
```

**macOS (usando Homebrew):**
```bash
brew install k6
```

**Linux (Ubuntu/Debian):**
```bash
sudo gpg -k
sudo gpg --no-default-keyring --keyring /usr/share/keyrings/k6-archive-keyring.gpg --keyserver hkp://keyserver.ubuntu.com:80 --recv-keys C5AD17C747E3415A3642D57D77C6C491D6AC1D69
echo "deb [signed-by=/usr/share/keyrings/k6-archive-keyring.gpg] https://dl.k6.io/deb stable main" | sudo tee /etc/apt/sources.list.d/k6.list
sudo apt-get update
sudo apt-get install k6
```

### Clone do Repositório
```bash
git clone https://github.com/Gdagostin/banco-api-performance.git
cd banco-api-performance
```

## 🚀 Execução do Projeto

### Configuração da Variável de Ambiente
O projeto utiliza a variável de ambiente `BASE_URL` para definir a URL base da API:

**PowerShell (Windows):**
```powershell
$env:BASE_URL = "http://localhost:3000"
```

**Bash (Linux/macOS):**
```bash
export BASE_URL="http://localhost:3000"
```

### Executando Testes Individuais

**Teste de Login:**
```powershell
# PowerShell
$env:BASE_URL = "http://localhost:3000"; k6 run tests\login.test.js

# Bash
BASE_URL="http://localhost:3000" k6 run tests/login.test.js
```

**Teste de Transferências:**
```powershell
# PowerShell
$env:BASE_URL = "http://localhost:3000"; k6 run tests\transferencias.test.js

# Bash
BASE_URL="http://localhost:3000" k6 run tests/transferencias.test.js
```

## 📊 Relatórios e Monitoramento

### Dashboard Web em Tempo Real
Para acompanhar os testes em tempo real através de uma interface web:

**PowerShell:**
```powershell
$env:BASE_URL = "http://localhost:3000"; $env:K6_WEB_DASHBOARD = "true"; k6 run tests\login.test.js
```

**Bash:**
```bash
BASE_URL="http://localhost:3000" K6_WEB_DASHBOARD=true k6 run tests/login.test.js
```

O dashboard estará disponível em: `http://127.0.0.1:5665`

### Exportação de Relatório HTML
Para gerar um relatório HTML completo dos testes:

**PowerShell:**
```powershell
$env:BASE_URL = "http://localhost:3000"; $env:K6_WEB_DASHBOARD = "true"; $env:K6_WEB_DASHBOARD_EXPORT = "html-report.html"; k6 run tests\login.test.js
```

**Bash:**
```bash
BASE_URL="http://localhost:3000" K6_WEB_DASHBOARD=true K6_WEB_DASHBOARD_EXPORT="html-report.html" k6 run tests/login.test.js
```

O relatório será salvo como `html-report.html` na raiz do projeto.

### Executando Todos os Testes com Relatório
```powershell
# PowerShell - Executar múltiplos testes com relatório
$env:BASE_URL = "http://localhost:3000"
$env:K6_WEB_DASHBOARD = "true"
$env:K6_WEB_DASHBOARD_EXPORT = "html-report.html"

k6 run tests\login.test.js
k6 run tests\transferencias.test.js
```

## 📈 Métricas e Thresholds

Os testes incluem validações automáticas de performance:

- **Taxa de erro**: < 1%
- **Tempo de resposta P90**: < 200ms
- **Status codes**: Validação de respostas esperadas
- **Tempo de resposta máximo**: Configurável por teste

## 🤝 Contribuição

Este projeto foi desenvolvido como parte do aprendizado em testes de performance. Sugestões e melhorias são bem-vindas!

## 📧 Contato

- **Autor**: [Gdagostin](https://github.com/Gdagostin)
- **Curso**: Mentoria em Teste de Software 2.0
- **Instrutor**: [Julio de Lima](https://github.com/juliodelimas)

## 📄 Licença

Este projeto é destinado para fins educacionais e de aprendizado.

---

⭐ **Se este projeto foi útil para você, considere dar uma estrela no repositório!**

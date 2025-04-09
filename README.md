# 📊 **Documentação do Projeto k6 - Testes de Performance**

## 🔹 **Visão Geral**

Este projeto utiliza o [k6](https://k6.io/) para executar testes de carga e performance em APIs. Os
cenários simulam tráfego real, permitindo identificar gargalos e validar a estabilidade do sistema sob diferentes
condições de carga.

---

## 🔹 **Tecnologias Utilizadas**

- **[k6](https://k6.io/)** - Ferramenta de teste de carga open-source
- **[GitHub Actions](https://docs.github.com/en/actions)** - Automação de pipelines CI/CD
- **JSON** - Saída de relatórios para análise

---
## 🔹 **Pré-requisitos**

Para executar localmente:

```bash
# Windows (via Chocolatey)
choco install k6 -y

# macOS (via Homebrew)
brew install k6

# Linux (Debian/Ubuntu)
sudo apt-get install k6

# Comando para rodar local:
k6 run ./Scenarios/Get-Cep.js
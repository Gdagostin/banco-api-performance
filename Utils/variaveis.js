const configLocal = JSON.parse(open('../config/config.local.json')); // Importando o arquivo de configuração local

export function pegarBaseURL() {
    return __ENV.BASE_URL || configLocal.baseUrl  // Retorna a URL base configurada ou um valor padrão
}
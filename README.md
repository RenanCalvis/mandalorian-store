# Mandalorian Store

Bem-vindo à Mandalorian Store, uma loja online que oferece produtos da série Mandalorian. Este projeto consiste em um site onde os usuários podem buscar e visualizar itens da loja relacionados à série.

## Funcionalidades

- Busca de produtos da série Mandalorian.
- Visualização detalhada de cada produto.
- Interação com o servidor proxy para acessar dados da loja.

## Instalação e Uso

Para utilizar e testar o Mandalorian Store, siga estas etapas:

### Clonar o Repositório

Clone o repositório do GitHub em sua máquina local:

```bash
git clone https://github.com/RenanCalvis/mandalorian-store.git

cd mandalorian-store
```

### Instalar Dependências do Servidor Proxy

O servidor proxy utilizado no projeto requer a instalação de suas dependências. Certifique-se de ter o Node.js instalado em seu sistema.

No diretório raiz do projeto, navegue até a pasta proxy-server onde estão localizados os arquivos do servidor proxy:

```bash
cd proxy-server/
```

Em seguida, instale as dependências do servidor proxy usando npm:

```bash
npm install
```
### Iniciar o Servidor Proxy

Após instalar as dependências, inicie o servidor proxy:

```bash
node proxy.js
```
O servidor proxy será iniciado e estará pronto para servir os dados necessários para o funcionamento da Mandalorian Store.

### Executar a Aplicação com Live Server (VS Code)

Se você estiver usando o Visual Studio Code (VS Code), pode instalar a extensão `Live Server` para servir a aplicação localmente com recarga automática. Siga estas etapas:

1. Certifique-se de ter o VS Code instalado em sua máquina.
2. No VS Code, abra o diretório do projeto `mandalorian-store`.
3. Clique com o botão direito no arquivo `index.html` ou em qualquer arquivo HTML que você queira servir localmente.
4. Selecione a opção `Open with Live Server` no menu de contexto.

Isso iniciará o Live Server e abrirá a aplicação em seu navegador padrão. O Live Server monitorará automaticamente os arquivos HTML, CSS e JavaScript da sua aplicação e recarregará a página no navegador sempre que houver alterações nos arquivos.
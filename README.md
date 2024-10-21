codigos:::

dependencias

npm i react-router-dom

npm i json-server

adicionar no package.json em "scripts":

"backend": "json-server --watch dados.json --port 5000",


https://recharts.org/en-US/

npm install recharts

extensoes

ES7+ React/Redux/React-Native snippets

rafce --cria estrutura de return


Tailwind
 npm install -D tailwindcss postcss autoprefixer
 npx tailwindcss init -p

 dentro de index.html:

 <script src="https://cdn.tailwindcss.com"></script>
 
 dentro de content:

   content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
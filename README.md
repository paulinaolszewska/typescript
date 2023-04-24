Kroki przy instalacji TypeScript:
<!-- tworzymy plik z zależnościami projektu przy użyciu manadżera pakietów  -->
npm init -y

<!-- instalujemy typescript lokalnie w projekcie -->
npm install typescript --save-dev

<!-- tworzymy plik konfiguracyjny typescriptu -->
npx tsc -init

<!-- tworzymy pierwszy skrypt z rozszerzeniem ts -->
<!-- uruchamiamy kompilator typescript w watchu -->
npx tsc -w

<!-- instalujemy lokalnie w projekcie nodemon -->
npm install nodemon --save-dev

<!-- uruchamiamy docelowy skrypt przy pomocy serwera w watchu -->
npx nodemon sciezkadoskryptu.js 
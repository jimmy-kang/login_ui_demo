[Demo Link Click Here](https://jimmy-kang.github.io/login_ui_demo/)
## postcss import tailwind css & autoprefixer

1.install postcss, postcss loader, tailwindcss, autoprefixer
2.add postcss loader in webpack
3.import css in tailwind.css
4.add tailwind.config.js
5.import tailwind and autoprefixer in postcss.config.js

reference: https://tailwindcss.com/docs/installation/using-postcss

## add absolute path

1.to add path in tsconfig.json (typeScript compiler)
2.to add path in webpack
3.to add path in eslintrc.json

reference: https://spin.atomicobject.com/2017/10/07/absolute-paths-javascript/
           https://stackoverflow.com/questions/41769880/how-to-manually-add-a-path-to-be-resolved-in-eslintrc

## use route in react-router-dom6

1.install react-router-dom
2.use BrowserRouter outermost layer in index.tsx
3.use useNavigate instead useHistory
4.use Routes instead Switch

reference: https://stackoverflow.com/questions/69843615/switch-is-not-exported-from-react-router-dom

## use axios to handle ajax && react-query

1.install axios and react-query
2.add QueryClientProvider in App.tsx
3.have two methods useQuery and useMutation with axios to use

reference: https://www.npmjs.com/package/axios

## use mockSever

1.npm install msw --save-dev
2.add mock reset api in handler.js
3.npx msw init public/ --save
4.add worker in browser.js
5.let worker start in index.tsx

reference: https://mswjs.io/docs/getting-started


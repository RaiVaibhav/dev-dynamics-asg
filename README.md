# dev-dynamics-asg

Main Branch
[![Netlify Status](https://api.netlify.com/api/v1/badges/bd3384c7-ba46-441a-9ab1-b7c04f5f8bb8/deploy-status)](https://app.netlify.com/sites/dev-dynamics-asg/deploys)


## Setup and Build

Install `nvm`

  ```ubuntu
  $ cd dev-dynamics-asg
  $ nvm use
  $ npm install
  $ npm run start
  ```
For production build kindly run - `npm run build` and that will creates a `build` directory with a production build of the app, kindly serve this file with

```
$ npm install -g serve
$ serve -s build
```

For Testing

  ```
  $ npm run start
  $ npm test
  ```
## Directort Structure

- file/directory NAME - `camelCase`, file extension - `tsx` for typescipt and react and `ts` for typescript files
- `src/`
  - `pages/` - for specific page and its related components
  - `services/` - for apis, differemt file for each page api, for common create a `common` folder with a new file.
  - `components` - for reusable components i.e., `<Sidebar />, <Loader />...`
  - `test/` - for test, fileName should end with `.test.ts`.

## APP Dependency

- **CSS** - `tailwindcss` - why? - for readibility, easiness and to avoid css overwriding complexity
- **JS** - React, react-query, typescript, recharts
- **TEST** - Jest and puppeteer (tried to test it with cypress but Windows WSL2 have some issues with integration, instead used the puppeteer because of time constraint)
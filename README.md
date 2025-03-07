# DDNetOrg

Website for DDNet.org

## Project Architecture

The Angular Application is divided into 3 modules:

- `core`
- `feature`
- `shared`

The `core` module contains everything that is needed for the Website to execute. For examle: authentiation services an navigation.

The `feature` module contains components that will be loaded on the pages. This here will be the main buissness logic.

The `shared` module has reusable component, utilities, etc. Here are no services allowed. The components inside `shared` have to be "dumb". They have to be fed with inputs / outputs and are "encapsulated" for themselves.

## Development environment

To execute the project, only `node` is needed.

### nvm

It is recommended to use a `node-version-manager` (nvm).

- Unix: <https://github.com/nvm-sh/nvm>
- Windows <https://github.com/coreybutler/nvm-windows>

With a nvm you can change `node` versiony on the fly.

### serve the application

install the packages with:

> npm install

start the project:

> npm start

## Used Libaries

### Tailwindcss

Libary for quick css presets inside html file. <https://tailwindcss.com/>

### PrimeNG

Component Libary with a lof of predefined stuff. Implement adjust, and use it.

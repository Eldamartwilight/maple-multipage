## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:8080](http://localhost:8080) to view it in the browser.

### `yarn build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

## Architecture of the FE (circles)

1. Frameworks and language

    - JS
        - A simple site does not need a typescript
    - [React](https://reactjs.org/)
        - https://www.jetbrains.com/lp/devecosystem-2019/javascript/
        - https://www.jetbrains.com/lp/devecosystem-2020/javascript/
    - [React Router](https://reactrouter.com/)
        - The most stable and popular library for the react. Can trust.

2. Libraries
    - Own libraries more preferred. Use popular libraries for difficult elements like charts and players;
        - [CanvasJs](https://canvasjs.com/);
        - [react-minimal-pie-chart](https://www.npmjs.com/package/react-minimal-pie-chart)
        - [react-player](https://www.npmjs.com/package/react-player)
3. Materials and components;
    - [Bootstrap css (4.5.2)](https://getbootstrap.com/)
        - there is no uniqueness rules, we can use the most common styles for the main objects
4. Rendering model
    - Multipage + client-side-rendering
        - Less traffic for mobile devices (only JSON or text);
        - Few pages, small bundle;
        - Information site, not an internet shop = less SEO;
        - Maybe in future - Progressive Web Apps (PWA)
    - Responsive web design
        - Sites available from all devices; We need it;
5. Content
    - Text, Media

## App pages

-   Home
    -   Static root page
-   With pages
    -   Pagination example
-   With video
    -   React Player
-   Contacts
    -   Form example
-   Content from server
    -   Subpage from server
        -   Error from server
    -   Subpage from server
-   Dashboard
    -   graphics (svg + canvas)

## File Structure

-   build
-   public
-   src
    -   api
    -   components
    -   services
    -   pages
    -   index.jsx
    -   index.css

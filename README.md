[![Site preview](/public/social-image.png)](https://hashirshoaeb.github.io/)

## Technology Stack 🛠️

Dependencies defined in package.json:

[Reactjs](https://reactjs.org/)
| [Bootstrap](https://getbootstrap.com/)
| [Typist](https://github.com/jstejada/react-typist)
| [GitHub API](https://developer.github.com/v3/repos/)
| [Instagram API](https://www.instagram.com/developer/embedding/)

## Prerequisites 🍪

You should have [Node.js](https://nodejs.org/en/) and [Git](https://git-scm.com/) installed on your PC. You should also own a GitHub account.

## Setup And Deployment 🔧

1. To Get Started, Fork this repository to your GitHub account:
2. Clone the forked repo from your account using:

   ```bash
     git clone https://github.com/<your-username>/home.git
   ```

3. Open in editor and edit [src/editable-stuff/configurations.json](./src/editable-stuff/configurations.json) file.

4. Add your resume as <resume.pdf> in place of [src/editable-stuff/resume.pdf](./src/editable-stuff/)
5. Change URL in [package.json](./package.json) file:

   ```json
   "homepage": "https://<your-username>.github.io/home"
   ```

   Or for custom deployment, refer [create-react-app.dev](https://create-react-app.dev/docs/deployment/)

6. Edit [title](./public/index.html#L34) and meta [description](./public/index.html#L13) in [public/index.html](./public/index.html).

7. After editing run the following bash commands:

   ```bash
   npm install
   npm start
   ```

8. To deploy website run:

   ```bash
    npm run build
    npm run deploy
   ```

   Or for custom deployment, refer [pages.js](./pages.js)

   ```bash
    npm run build
    npm run custom-deploy
   ```

9. Congrats your site is up and running. To see it live, visit:

   ```https
     https://<your-username>.github.io/home
   ```

## Contributors ✨

<table>
  <tr>
    <td align="center">
      <a href="https://www.facebook.com/hashir.shoaeb">
        <img src="https://avatars2.githubusercontent.com/u/35165481?v=4" width="100px" alt="" />
        <br />
        <sub><b>Hashir Shoaib</b></sub>
      </a>
      <br />
    </td>
    <td align="center">
      <a href="https://github.com/iprithvitharun">
        <img src="https://avatars2.githubusercontent.com/u/58725708?v=4" width="100px" alt="" />
        <br />
        <sub><b>Prithvi Tharun</b></sub>
      </a>
      <br />
    </td>
    <td align="center">
      <a href="https://github.com/CodyJasonBennett">
        <img src="https://avatars3.githubusercontent.com/u/23324155?s=460&v=4" width="100px" alt="" />
        <br />
        <sub><b>Cody Bennett</b></sub>
      </a>
      <br />
    </td>
    <td align="center">
      <a href="https://github.com/yonis9">
        <img src="https://avatars3.githubusercontent.com/u/42126841?s=460" width="100px" alt="" />
        <br />
        <sub><b>Yoni Sisso</b></sub>
      </a>
      <br />
    </td>
    <td align="center">
      <a href="https://github.com/mallikarjuna-sharma">
        <img src="https://avatars3.githubusercontent.com/u/40210749?s=460" width="100px" alt="" />
        <br />
        <sub><b>Mallikarjuna Sharma</b></sub>
      </a>
      <br />
    </td>
  </tr>
</table>

## License 📄

[LGPL-3.0](https://www.gnu.org/licenses/lgpl-3.0.en.html)

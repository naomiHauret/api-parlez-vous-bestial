import { Fragment } from 'react'
import { Global, css, jsx } from '@emotion/core'

const SplashScreen = () => {
  return <Fragment>
    <style jsx global>{`
        *,
        *::before,
        *::after {
          box-sizing: border-box;
        }
        html {
          overflow-x: hidden;
          font-size: 18px;
          line-height: 1.5;
        }
        body {
          font-family: sans !important;
          font-size: 1rem;
          margin: 0;
          display: flex;
          min-height: 100vh;
          background-image: radial-gradient(circle, #D7D7D7, #D7D7D7 1px, #FFF 1px, #FFF);
          background-size: 28px 28px;
        }
        a:any-link {
          color: #0070f3;
        }
        a:any-link:hover {
          text-decoration: none;
        }
        #__next {
          flex-grow: 1;
          display: flex;
        }
      `}
    </style>
    <main>
      <h1>
        <em>Parlez-vous bestial ?</em> <br/>
        <span>
          API
        </span>
      </h1>
      <div>
        <a href="https://github.com/naomiHauret/api-parlez-vous-bestial">Code</a>
        <a href="https://parlezvousbestial.now.sh">Parlez-vous bestial ?</a>
      </div>
    </main>
    <style jsx>{`
        main {
          display: flex;
          text-align: center;
          flex-direction: column;
          background: white;
          flex-grow: 1;
          margin: auto;
          max-width: 650px;
          box-shadow: 0px 6px 20px rgba(0, 0, 0, 0.06);
          padding: 40px;
        }
        h1 {
          font-size: 0.95rem;
          font-weight: 400;
          color: #757575;
        }
        h1 span {
          font-weight: bold;
          font-size: 2.5em;
          color: #111;
        }
        a {
          font-size: 0.85rem;
          margin: 0 20px;
        }
      `}
    </style>
  </Fragment>
}

export default SplashScreen
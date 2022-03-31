import Head from 'next/head';
import { useState, useEffect } from 'react/cjs/react.production.min'; //react.production.min
import content from '../content';
import { Card } from '../src/Card';
import { copy } from '../src/clipboard';
import { Search } from '../src/Search';
import { Tooltip } from '../src/Tooltip';

export default function Home() {
  const [query, search] = useState('');
  const [isTipVisible, showTip] = useState(false);

  const onEnterQuery = (query) => {
    search(query);
    location.hash = `${new URLSearchParams({ query })}`;
  };

  useEffect(() => {
    search(new URLSearchParams(location.hash.slice(1)).get('query') || '');
  }, []);

  const onClick = (e) => {
    copy(e.target.innerText).then(() => {
      showTip(true);
      setTimeout(() => { showTip(false); }, 1000);
    }).catch((e) => {
      alert(`Could not copy text: ${e}`);
    });
  };

  return (
    <div className="container">
      <Head>
        <title>Alanya Service</title>
        <link rel="icon" href="/favicon.ico" />
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-MTSH277N7D"></script>
        <script dangerouslySetInnerHTML={{
          __html: `
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag("js", new Date());
          gtag("config", 'G-MTSH277N7D');
          `}}></script>
      </Head>

      <main>
        <Search onInput={onEnterQuery} value={query} />
        <div className='cards'> {content
          .map((d) =>
            <Card
              {...d}
              onSearch={onEnterQuery}
              onClick={onClick}
              key={d.name}
              hidden={!d.name.includes(query) && !d.category.includes(query)}
            />)}
        </div>
      </main>

      <footer>
        <Tooltip text="Скопировано" hidden={!isTipVisible} />
      </footer>

      <style jsx>{`
        .container {
          min-height: 100vh;
          padding: 0 0.5rem;
          display: flex;
          flex-direction: column;
        }

        main {
          flex:1;
          display: flex;
          flex-direction: column;
        }

        .cards {
          display: flex;
          flex-direction:row;
          flex-wrap:wrap;
        }

        @media (max-width: 600px) {
          .cards {
            flex-direction: column;
          }
        }


        footer {
          width: 100%;
          height: 100px;
          border-top: 1px solid #eaeaea;
          display: flex;
        }

        @media (max-width: 600px) {
          .grid {
            width: 100%;
            flex-direction: column;
          }
        }
      `}</style>

      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
        }

        * {
          box-sizing: border-box;
        }
      `}</style>
    </div>
  );
}

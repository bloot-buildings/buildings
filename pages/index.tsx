// Imports
import Layout from "@components/Layout"; // Layout wrapper
import { defaultBags } from "@utils/constants"; // Bags to render
import styles from "@styles/pages/Home.module.scss"; // Styles

// Types
import type { ReactElement } from "react";

export default function Home(): ReactElement {
  // Quicklinks to render
  const quicklinks: Record<string, string>[] = [
    { name: "OpenSea", url: "https://opensea.io/collection/blootbuildings" },
    {
      name: "Twitter",
      url: "https://twitter.com/bloot_building",
    },
    {
      name: "Contract",
      url: "https://etherscan.io/address/0x8c574df5d5e6b06285e4342425a42e2008c6ccb4#writeContract",
    },
  ];

  /**
   * Selects 3 random bags from defaultBags
   * @returns {Record<string, string>[]} randomized bags
   */
  const getRandomThreeBags = () => {
    // const shuffled = defaultBags.sort(() => 0.5 - Math.random());
    // return shuffled.slice(0, 3);
    return defaultBags;
  };

  return (
    <Layout>
      <div>
        <div className={styles.home__cta}>
          <h1>Bloot Buildings</h1>

          <ul>
            {quicklinks.map(({ name, url }, i) => {
              return (
                <li key={i}>
                  <a href={url} target="_blank" rel="noopener noreferrer">
                    {name}
                  </a>
                </li>
              );
            })}
          </ul>

          <p>
            Bloot derivative project for giving this world some nice buildings. <br />
            Buildings are randomized generated and stored on chain.  <br />

            {/*How to mint Buildings for bloot? <br />*/}
            {/*If you have bloot alreay, click "mintWithBloot" and type your bloot id. <br />*/}
            {/*If you don't have a bloot, click "mint" and type 0.015 and a token id between #8001~#11950*/}
          </p>
        </div>

        <div className={styles.home__feature}>
          <span>Example Buildings:</span>
          {getRandomThreeBags().map(({ id, attributes }, i) => (
            <a
              href={`https://opensea.io/assets/0x8c574df5d5e6b06285e4342425a42e2008c6ccb4/${id}`}
              target="_blank"
              rel="noopener noreferrer"
              key={i}
              className={styles.home__bag}
            >
              <div className={styles.home__bag_attributes}>
                <span>#{id}</span>
                <ul>
                  {attributes.map((attribute, i) => (
                    <li key={i}>
                      <span>{attribute}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </a>
          ))}
        </div>
      </div>
    </Layout>
  );
}

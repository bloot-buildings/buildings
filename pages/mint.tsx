// Imports
import Link from "next/link"; // Routing
import Layout from "@components/Layout"; // Layout wrapper
import styles from "@styles/pages/FAQ.module.scss"; // Page styles

// Types
import type { ReactElement } from "react";

// FAQ page
export default function Mint(): ReactElement {
  return (
    <Layout>
      <div className={styles.faq}>
        <h2>Frequently Asked Questions</h2>

        <div className={styles.faq__item}>
          <h3>What is Bloot buildings?</h3>
          <p>
            Bloot buildings is a bloot derivative project for giving the bloot world some nice buildings.
            We prepare 8K buildings for all bloot holders to mint for free. #8001-#11950 are for publics to mint at 0.015 ETH.
          </p>
        </div>

        <div className={styles.faq__item}>
          <h3>How do I mint buildings for bloot?</h3>
            <p>
                1. Go to Etherscan contract page of <a href={"https://etherscan.io/address/0x8c574df5d5e6b06285e4342425a42e2008c6ccb4#writeContract"}>Bloot buildings</a> <br />
                2. Click "Write Contract" <br />
                3. If you are a bloot owner, click “mintWithBloot” and type in your bloot Token ID, and click "Write" <br />
                4. If you don’t have bloot right now, click “mint” and type 0.015 and any token id number between #8001-#11950 if it hasn’t been minted.
            </p>
        </div>

        {/*<div className={styles.faq__item}>*/}
        {/*  <h3>Can I build with bloot?</h3>*/}
        {/*  <p>*/}
        {/*    build with bloot*/}
        {/*  </p>*/}
        {/*</div>*/}

        {/*<div className={styles.faq__item}>*/}
        {/*  <h3>Am I priced out of bloot buildings?</h3>*/}
        {/*  <p>*/}
        {/*    priced out*/}
        {/*  </p>*/}
        {/*</div>*/}

        {/*<div className={styles.faq__item}>*/}
        {/*  <h3>How do I value Bloot buildings?</h3>*/}
        {/*  <p>*/}
        {/*    value*/}
        {/*  </p>*/}
        {/*</div>*/}
      </div>
    </Layout>
  );
}

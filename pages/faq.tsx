// Imports
import Link from "next/link"; // Routing
import Layout from "@components/Layout"; // Layout wrapper
import styles from "@styles/pages/FAQ.module.scss"; // Page styles

// Types
import type { ReactElement } from "react";

// FAQ page
export default function FAQ(): ReactElement {
  return (
    <Layout>
      <div className={styles.faq}>
        <h2>Frequently Asked Questions</h2>

        {/*<div className={styles.faq__item}>*/}
        {/*  <h3>What is Bloot?</h3>*/}
        {/*  <p>*/}
        {/*    Bloot*/}
        {/*  </p>*/}
        {/*</div>*/}

        {/*<div className={styles.faq__item}>*/}
        {/*  <h3>What is Bloot buildings?</h3>*/}
        {/*  <p>*/}
        {/*    Bloot buildings*/}
        {/*  </p>*/}
        {/*</div>*/}

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

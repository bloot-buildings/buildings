// Imports
import Link from "next/link"; // Routing
import { useRouter } from "next/router"; // Routing
import { default as HTMLHead } from "next/head"; // Meta
import styles from "@styles/components/Layout.module.scss"; // Styles

// Types
import type { ReactElement } from "react";

export default function Layout({
  children,
}: {
  children: ReactElement | ReactElement[];
}) {
  return (
    <div>
      {/* Meta */}
      <Head />
      {/* Top header */}
      <Header />

      {/* Page content */}
      <div className={styles.content}>{children}</div>
      {/* Bottom footer */}
      <Footer />
    </div>
  );
}

/**
 * Meta HTML Head
 * @returns {ReactElement} HTML Head component
 */
function Head(): ReactElement {
  return (
    <HTMLHead>
      {/* Primary Meta Tags */}
      <title>Bloot Buildings</title>
      <meta name="title" content="bloot buildings" />
      <meta
        name="description"
        content="Bloot derivative project for giving this world some nice buildings."
      />
      <link rel="shortcut icon" href="favicon.png" />

      {/* OG + Faceook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://opensea.io/collection/blootbuildings" />
      <meta property="og:title" content="Bloot buildings" />
      <meta
        property="og:description"
        content="Bloot derivative project for giving this world some nice buildings."
      />
      <meta property="og:image" content="https://bloot-buildings.vercel.app/meta.jpg" />

      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content="https://opensea.io/collection/blootbuildings" />
      <meta property="twitter:title" content="Bloot building" />
      <meta
        property="twitter:description"
        content="Bloot derivative project for giving this world some nice buildings."
      />
      <meta property="twitter:image" content="https://bloot-buildings.vercel.app/meta.jpg" />

      {/* Font */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link
        rel="preconnect"
        href="https://fonts.gstatic.com"
        crossOrigin="true"
      />
      {/* eslint-disable-next-line @next/next/no-page-custom-font */}
      <link
        href="https://fonts.googleapis.com/css2?family=EB+Garamond:wght@400;700&display=swap"
        rel="stylesheet"
      />
    </HTMLHead>
  );
}

/**
 * Header
 * @returns {ReactElement} Header
 */
function Header() {
  // Collect current path for active links
  const { pathname } = useRouter();
  // All links
  const links = [
    { name: "Resources", path: "/resources" },
  ];

  return (
    <div className={styles.header}>
      {/* Main logo */}
      <div className={styles.header__logo}>
        <Link href="/">
          <a>Bloot Buildings</a>
        </Link>
      </div>

      {/* Navigation */}
      <div className={styles.header__links}>
        <ul>
          {links.map(({ name, path }, i) => {
            // For each link, render link
            return (
              <li key={i}>
                <Link href={path}>
                  <a
                    className={
                      pathname === path
                        ? // Active class if pathname matches current path
                          styles.header__links_active
                        : undefined
                    }
                  >
                    {name}
                  </a>
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}

/**
 * Footer component
 * @returns {ReactElement} Footer
 */
function Footer(): ReactElement {
  return (
    <div className={styles.footer}>
      <p>
        Made with love by{" "}
        <a
          href="https://twitter.com/bloot_building"
          target="_blank"
          rel="noopener noreferrer"
        >
          Bloot buildings
        </a>
        .
      </p>
    </div>
  );
}

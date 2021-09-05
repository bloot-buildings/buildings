// Imports
import {
  derivativesList,
  communityList
} from "@utils/lists"; // Lists
import Layout from "@components/Layout"; // Layout wrapper
import styles from "@styles/pages/Resources.module.scss"; // Page styles

// Types
import type { ReactElement } from "react";

const resources = [
  {
    title: "Communities",
    // description: "Spaces run by the community for Bloot enthusiasts:",
    list: communityList
  },
  {
    title: "Bloot Official and Derivative Projects",
    description: "Projects that build on top of bloot. If there is any derivative project not on the list, welcome to DM us on twitter.",
    list: derivativesList,
  },
];

export default function Resources(): ReactElement {
  return (
    <Layout>
      {resources.map(({ title, description, list }, i) => {
        return (
          <div key={i} className={styles.resources}>
            <h2>{title}</h2>
            <p>{description}</p>

            <ul>
              {list.map(({ name, description, url }, i) => {
                // For each resource, render link and description
                return (
                  <li key={i}>
                    <p>
                      <a href={url} target="_blank" rel="noopener noreferrer">
                        {name}
                      </a>{" "}
                      — {description}
                    </p>
                  </li>
                );
              })}
            </ul>
          </div>
        );
      })}
    </Layout>
  );
}

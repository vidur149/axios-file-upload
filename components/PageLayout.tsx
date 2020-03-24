import React from "react";
import Head from "next/head";

export const PageLayout = ({
  children,
  pageTitle
}: {
  children?: React.ReactNode;
  pageTitle?: string;
}) => {
  return (
    <>
      <Head>
        <title>Mayank Exports | {pageTitle}</title>
      </Head>
      <main>{children}</main>
    </>
  );
};

import React from "react";
import Shop from "./shop/Shop";
import Sale from "./sale/Sale";
import NewCollection from "./newcollection/NewCollection";

export default function Section() {
  return (
    <>
      <Sale />
      <NewCollection />
      <Shop />
    </>
  );
}

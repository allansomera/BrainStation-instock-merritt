import React from "react";
import ListingsCard from "../listings-card/ListingsCard";
import SortLabels from "../sort-labels/SortLabels";

import "./InventoriesList.scss";

const InventoriesList = ({ inventories }) => {
  const inventoriesLabels = [
    "INVENTORY ITEM",
    "CATEGORY",
    "STATUS",
    "QTY",
    "WAREHOUSE",
    "ACTION",
  ];

  return (
    <div className="inventoriesList">
      <div className="inventoriesList__cardList-cont">
        <div className="sortLabels-cont">
          {inventoriesLabels.map((label, index) => {
            return <SortLabels key={index} label={label} />;
          })}
        </div>
        {inventories.map((inventoryItem) => {
          return (
            <ListingsCard
              key={inventoryItem.id}
              path="inventories"
              dataItem={inventoryItem}
            />
          );
        })}
      </div>
    </div>
  );
};

export default InventoriesList;
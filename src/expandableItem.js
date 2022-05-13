import { useState } from "react";

const ExpandableItem = props => {
  const [itemState, setItemState] = useState({ open: false, menuItemName: "" });

  console.log(itemState);
  return props.render({ itemState, setItemState });
};

export default ExpandableItem;

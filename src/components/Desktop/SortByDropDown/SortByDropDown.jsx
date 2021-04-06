import React from "react";
import { useProductsContext } from "../../../Context/ProductsContext";
import { useReducerContext } from "../../../Context/ReducerContext";
import { sortByList } from "../../Helpers/data";
import { DownSvg } from "../../Helpers/Svg";

export function SortByDropDown() {
    const { selectedSort, setSelectedSort } = useProductsContext();
    const { dispatch } = useReducerContext();

    function updateSorting(listItem) {
        setSelectedSort(listItem);
        dispatch({
            type: "SORT",
            payload: listItem.toUpperCase(),
        });
    }

    return (
        <div className="drop-down-container">
            <div className="drop-down">
                <div className="drop-down-display">
                    <div className="drop-down-selected">
                        Sort by : <b>{selectedSort}</b>
                    </div>
                    <div className="down-arrow">{<DownSvg />}</div>
                </div>
                <ul className="drop-down-items-container">
                    {sortByList.map((listItem) => (
                        <li
                            className="drop-down-items"
                            style={{
                                backgroundColor: `${
                                    listItem === selectedSort ? "#F4F4F5" : ""
                                }`,
                            }}
                            onClick={() => updateSorting(listItem)}
                            key={listItem}
                        >
                            {listItem}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}

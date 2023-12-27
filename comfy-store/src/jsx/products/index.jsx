import React from "react";
import "./index.css";
import Input from "../../components/inputs";
import Button from "../../components/buttons";

const Products = () => {
  return (
    <>
      <div className="container">
        <div className="form">
          <div className="product-filter">
            <div className="search-product">
              <div>
                <Input
                  formName="searchForm"
                  labelName="search-product-label"
                  inputTitle="Search Product"
                  type="text"
                  inputClass="input-search"
                  labelClass="searchProduct"
                />
              </div>
              <div>
                <Input
                  formName="selectPrice"
                  labelName="selectPrice"
                  inputTitle="Select Price"
                  type="range"
                  inputClass="input-price"
                  labelClass="selectedPrice"
                />
                <div className="costs">
                  <span>0</span>
                  <span>Max:$1,000.00</span>
                </div>
              </div>
            </div>
            <div className="select-category">
              <div>
                <label htmlFor="select-category-label">
                  <span className="category">Select Category</span>
                </label>
                <select name="select-category" id="selectCategory">
                  <option value="all">all</option>
                </select>
              </div>
              <div>
                <Input
                  formName="searchForm"
                  labelName="Free Shipping"
                  inputTitle="Free Shipping"
                  type="checkbox"
                  inputClass="input-search"
                  labelClass="searchProduct"
                />
              </div>
            </div>
            <div className="select-company">
              <div>
                <label htmlFor="select-category-label">
                  <span className="category">Select Company</span>
                </label>
                <select name="select-category" id="selectCategory">
                  <option value="all">all</option>
                </select>
              </div>
              <div>
                <Button title="SEARCH" buttonClass="search-btn" />
              </div>
            </div>
            <div className="sort-by">
              <div>
                <label htmlFor="select-category-label">
                  <span className="category">Select Category</span>
                </label>
                <select name="select-category" id="selectCategory">
                  <option value="all">All</option>
                </select>
              </div>
              <div>
                <Button title="RESET" buttonClass="reset-btn" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Products;

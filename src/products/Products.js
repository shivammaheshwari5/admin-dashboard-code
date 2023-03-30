import { useEffect, useState } from "react";
import axios from "axios";
import styles from "./Products.module.css";
import { RiDeleteBin6Line } from "react-icons/ri";
import { Navigate, useNavigate } from "react-router-dom";

function Products() {
  const prodData = JSON.parse(localStorage.getItem("data"))
  const [products, setProducts] = useState(prodData.productsPage.products);
  const [categories, setCatagories] = useState(prodData.productsPage.categories);

  const Navigate = useNavigate();
  // console.log(products)

  function addnewCategory(){
    Navigate("/Addcategory")
  }

  useEffect(() => {
    var newProduct = JSON.parse(localStorage.getItem("addProduct"));
    console.log(newProduct)
    if(newProduct){
      setProducts([...products, ...newProduct]);
      console.log(products);
    }
    }, []);

    useEffect(() => {
      var newCateg = JSON.parse(localStorage.getItem("add-category"));

      if(newCateg){
        setCatagories([...categories, ...newCateg]);

      }
      }, []);

//   useEffect(() => {
// // setProducts(prodData.productsPage.products)
// setCatagories()
//   }, []);
  console.log(categories);

  const goToDetail = () =>{
    Navigate("/Addproducts")
  }

  const removeElement = (id) =>{
    const newArray = products.filter((currentItem) => {
      return currentItem.name !== id;
    });
    setProducts(newArray);
  }
  return (
    <div className={styles.product}>
      <div className={styles.productBox}>
        <div className={styles.productDiv}>
          <div className={styles.tablescroll}>
            <table className={styles.productTable}>
              <thead className={styles.tableHead}>
                <tr>
                <th className={styles.th}>&nbsp;</th>
                  <th className={styles.th}>PRODUCT NAME</th>
                  <th className={styles.th}>UNIT SOLD</th>
                  <th className={styles.th}>IN STOCK</th>
                  <th className={styles.th}>EXPIRE DATE</th>
                  <th className={styles.th}>&nbsp;</th>
                </tr>
              </thead>
              <tbody>
                {products.map((product, key) => (
                  <tr key={key} className={styles.tablerow}>
                    <th className={styles.inputTh}>
                      <input type="checkbox" className={styles.checkBox} />
                    </th>
                    <td className={styles.tableData}>{product.name}</td>
                    <td className={styles.tableData}>{product.unitSold}</td>
                    <td className={styles.tableData}>{product.stock}</td>
                    <td className={styles.tableData}>{product.expireDate}</td>
                    <td className={styles.tableData}>
                      <a onClick={() => removeElement(product.name)}>
                        <RiDeleteBin6Line/>
                      </a>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <button onClick={goToDetail}>ADD NEW PRODUCT</button>
        <button>DELETE SELECTED PRODUCTS</button>
        </div>
        <div className={styles.productCatag}>
          <div className={styles.productCatagDiv}>
            <h1>Product Catagories</h1>
            <div className={styles.tableDiv}>
              <table className={styles.tablebox}>
                <tbody>
                  {categories.map((catagory, key) => (
                    <tr key={key}>
                      <td className={styles.tableTd}>{catagory}</td>
                      <td>
                        {" "}
                        <a>
                          <RiDeleteBin6Line className={styles.tableTd} />
                        </a>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <button onClick={addnewCategory}>ADD NEW CATAGORY</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Products;

import styles from "./AddProducts.module.css"
import { IoMdCloudUpload } from 'react-icons/io';
import { useState } from "react";

function AddProducts(){

    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [category, setCategory] = useState('');
    const [expireDate, setExpireDate] = useState('');
    const [stock, setStock] = useState('');
    const [newProduct, setNewProduct] = useState([]);
    const [unitSold, setUnitSold] = useState('');

    function productnameHandler(e){
        setName(e.target.value)
    }
    function productdesHandler(e){
        setDescription(e.target.value)
    }
    function expireDateHandler(e){
        setExpireDate(e.target.value)
    }
    function unitstockHandler(e){
        setStock(e.target.value)
    }
    function unitsoldHandler(e){
        setUnitSold(e.target.value)
    }
    function selectCategory(e){
        setCategory(e.target.value)
    }

    function addproductHandler(e){
        e.preventDefault();
        if(name && description && expireDate && stock && unitSold){
            var newArr = {name, description, expireDate, stock, unitSold};
            setNewProduct([newArr]);
            localStorage.setItem("addProduct", JSON.stringify([newArr]))
        }
    }

    return (
        <div className={styles.mainDiv}>
            <div className={styles.mainProductDiv}>
                <div className={styles.headingDiv}>
                    <h1 className={styles.addProd}>Add Product</h1>
                </div>
                <div className={styles.productDetailDiv}>
                    <div className={styles.detailForm}>
                        <form onSubmit={addproductHandler}>
                            <div className={styles.inputDiv}>
                            <label>Product Name</label>
                            <input onChange={productnameHandler} type="text" className={styles.productInput}/>
                            </div>
                            <div className={styles.desDiv}>
                            <label>Description</label>
                            <textarea onChange={productdesHandler} className={styles.productDes}></textarea>
                            </div>
                            <div className={styles.catagDiv}>
                                <label>Category</label>
                                <select value={category} onChange={selectCategory} className={styles.selectCat}>
                                    <option>Select Category</option>
                                    <option>New Arrival</option>
                                    <option >Most Popular</option>
                                    <option >Trending</option>
                                </select>
                            </div>
                            <div className={styles.exStock}>
                                <div className={styles.expireDiv}>
                                    <label>Expire Date</label>
                                    <input onChange={expireDateHandler} type="date" className={styles.expireInput}/>
                                </div>
                                <div className={styles.stockDiv}>
                                <label>Units In Stock</label>
                                    <input onChange={unitstockHandler} type="text" className={styles.stockInput}/>
                                </div>
                                <div className={styles.stockDiv}>
                                <label>Units Sold</label>
                                    <input onChange={unitsoldHandler} type="text" className={styles.stockInput}/>
                                </div>
                                
                            </div>
                            <div className={styles.updateBtn}>
                        <button>ADD PRODUCT NOW</button>
                    </div>
                        </form>
                    </div>
                    <div>
                    <div className={styles.prodImg}>
                    <IoMdCloudUpload className={styles.iconImg}/>
                    </div>
                    <button>UPLOAD PRODUCT IMAGE</button>
                    </div>
                    
                </div>
                
            </div>
        </div>
    )
}

export default AddProducts;
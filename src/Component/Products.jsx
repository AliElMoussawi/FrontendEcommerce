import React,{useState,useEffect}from 'react';

const Products=()=>{



    const[data,setData]=useState([]);
    const[filter,setFilter]=useState(data);
    const[loading,setLoading]=useState(false);
    let componentMounted=true;
    
    useEffect(()=>{
        const getProducts=async()=>{
            setLoading(true);
            const response=await fetch("https://fakestoreapi.com/products");
            if(componentMounted){
                setData(await response.clone().json());
                setFilter(await response.json());
                setLoading(false);
                console.log(filter)
            
            }
            return ()=>{componentMounted=false;}
        }
        
        getProducts();
    },[]);
    const Loading =()=>{return(<>Loading...</>)}
    const ShowProducts=()=>{
        return (<>
        <div className="buttons d-flex justify-content-center mb-5 pb-5">
            <button className="btn btn-outline-dark me-2">All</button>
            <button className="btn btn-outline-dark me-2">Category 1</button>
            <button className="btn btn-outline-dark me-2">Category 2</button>
            <button className="btn btn-outline-dark me-2">Category 3</button>
            <button className="btn btn-outline-dark me-2">Category 4</button>
            <button className="btn btn-outline-dark me-2">Category 5</button>
        </div>
        {filter.map((product)=>{return(<>
            <div className="col-md-3">
            <div class="card h-100 text-center p-4" key={product.id} >
        <img src={product.image} class="card-img-top" alt={product.title}/>
        <div class="card-body">
        <h5 class="card-title">{product.title}</h5>
        <p class="card-text">${product.price}</p>
        <a href="#" class="btn btn-primary">Go somewhere</a>
  </div></div>
</div>
         </>)
    
    
    })}
        </>)
    }
    return (

        <div>
            <div className="container my-5 py-5">
                <div className="row">
                    <div className="col-12 mb-5">
                        <h1 className="display-6 fw-bolder text-center">Latest products</h1>
                    <hr />
                    </div>
                </div>
                <div className="row justify-content-center">{loading ? <loading/>:<ShowProducts/>}</div>
            </div>
        </div>
    );
}
export default Products;
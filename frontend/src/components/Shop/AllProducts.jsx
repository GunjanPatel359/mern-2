import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { deleteProduct, getAllProductShops } from '../../redux/actions/product'
import { Link } from 'react-router-dom'
import { AiOutlineDelete, AiOutlineEye } from 'react-icons/ai'
import { Button } from '@mui/material'
import Loader from '../Layout/Loader'
import { DataGrid } from '@mui/x-data-grid'

const AllProducts = () => {
    const {products,isLoading}=useSelector((state)=>state.products)
    const {seller}=useSelector((state)=>state.seller)
    const dispatch=useDispatch()

    useEffect(()=>{
        dispatch(getAllProductShops(seller._id))
    },[dispatch]);

    const handleDelete=(id)=>{
        dispatch(deleteProduct(id));
        window.location.reload()
    }

    const columns = [
        { field: "id", headerName: "Product Id", minWidth: 80, flex: 0.7 },
        {
          field: "name",
          headerName: "Name",
          minWidth: 70,
          flex: 1.4,
        },
        {
          field: "price",
          headerName: "Price",
          minWidth: 70,
          flex: 0.6,
        },
        {
          field: "Stock",
          headerName: "Stock",
          type: "number",
          minWidth: 20,
          flex: 0.5,
        },
    
        {
          field: "sold",
          headerName: "Sold out",
          type: "number",
          minWidth: 90,
          flex: 0.6,
        },
        {
          field: "Preview",
          flex: 0.8,
          minWidth: 20,
          headerName: "",
          type: "number",
          sortable: false,
          renderCell: (params) => {
            const d=params.row.name;
            const product_name=d.replace(/\s+/g,"-");
            return (
                <>
                <Link to={`/product/${product_name}`}>
                <Button>
                    <AiOutlineEye size={20} />
                </Button>
                </Link>
                </>
            )
            // return (
            //   <>
            //     <Link to={`/product/${params.id}`}>
            //       <Button>
            //         <AiOutlineEye size={20} />
            //       </Button>
            //     </Link>
            //   </>
            // );
          },
        },
        {
          field: "Delete",
          flex: 0.8,
          minWidth: 20,
          headerName: "",
          type: "number",
          sortable: false,
          renderCell: (params) => {
            return (
              <>
                <Button  onClick={()=>handleDelete(params.id)} >
                  <AiOutlineDelete size={20} />
                </Button>
              </>
            );
          },
        },
      ];

      const row=[];

      products &&
    products.forEach((item) => {
      row.push({
        id: item._id,
        name: item.name,
        price: "US$ " + item.discountPrice,
        Stock: item.stock,
        sold: 10,
      });
    });

  return (
    <>
    {isLoading ? (
        <Loader />
    ) : (
        <div className="w-full mx-8 pt-1 mt-10 bg-white">
          <DataGrid
            rows={row}
            columns={columns}
            pageSize={10}
            disableSelectionOnClick
            autoHeight
          />
          
        </div>
      )}
      </>
  )
}

export default AllProducts

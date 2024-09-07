import Product from "./Product";

const products=[
	{
		"id": 1,
		"name": "Product-1",
		"description": "This is a brief description of Product-1.",
		"price": 93.07,
		"stock": 0,
		"image": "https://images.unsplash.com/photo-1554948419-1939083b12cf?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE2fHx8ZW58MHx8fHx8",
		"category": "Books",
		"rating": 2.7
	},
	{
		"id": 2,
		"name": "Product-2",
		"description": "This is a brief description of Product-2.",
		"price": 44.45,
		"stock": 28,
		"image": "https://plus.unsplash.com/premium_photo-1677541205130-51e60e937318?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fHByb2R1Y3R8ZW58MHx8MHx8fDA%3D",
		"category": "Books",
		"rating": 2.2
	},
	{
		"id": 3,
		"name": "Product-3",
		"description": "This is a brief description of Product-3.",
		"price": 37.81,
		"stock": 68,
		"image": "https://images.unsplash.com/photo-1563170351-be82bc888aa4?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDF8fHxlbnwwfHx8fHw%3D",
		"category": "Home Decor",
		"rating": 4.1
	},
	{
		"id": 4,
		"name": "Product-4",
		"description": "This is a brief description of Product-4.",
		"price": 80.38,
		"stock": 4,
		"image": "https://media.istockphoto.com/id/1755077552/photo/generic-cosmetic-product.webp?b=1&s=612x612&w=0&k=20&c=LGn_P093idme8KCXpqWbaiBy1B_LA45QoVfZdEDn-nI=",
		"category": "Electronics",
		"rating": 1.2
	},
	{
		"id": 5,
		"name": "Product-5",
		"description": "This is a brief description of Product-5.",
		"price": 54.37,
		"stock": 71,
		"image": "https://images.unsplash.com/photo-1524638067-feba7e8ed70f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fHByb2R1Y3R8ZW58MHx8MHx8fDA%3D",
		"category": "Electronics",
		"rating": 4.1
	},
	{
		"id": 6,
		"name": "Product-6",
		"description": "This is a brief description of Product-6.",
		"price": 38.46,
		"stock": 93,
		"image": "https://images.unsplash.com/photo-1549049950-48d5887197a0?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fHByb2R1Y3R8ZW58MHx8MHx8fDA%3D",
		"category": "Toys",
		"rating": 2.9
	},
	{
		"id": 7,
		"name": "Product-7",
		"description": "This is a brief description of Product-7.",
		"price": 71.89,
		"stock": 15,
		"image": "https://images.unsplash.com/photo-1556227834-09f1de7a7d14?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fHByb2R1Y3R8ZW58MHx8MHx8fDA%3D",
		"category": "Electronics",
		"rating": 1.5
	},
	{
		"id": 8,
		"name": "Product-8",
		"description": "This is a brief description of Product-8.",
		"price": 21.18,
		"stock": 51,
		"image": "https://plus.unsplash.com/premium_photo-1679913792906-13ccc5c84d44?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fHByb2R1Y3R8ZW58MHx8MHx8fDA%3D",
		"category": "Toys",
		"rating": 3.3
	},
	{
		"id": 9,
		"name": "Product-9",
		"description": "This is a brief description of Product-9.",
		"price": 67.11,
		"stock": 72,
		"image": "https://images.unsplash.com/photo-1541643600914-78b084683601?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHByb2R1Y3R8ZW58MHx8MHx8fDA%3D",
		"category": "Electronics",
		"rating": 1.3
	},
	{
		"id": 10,
		"name": "Product-10",
		"description": "This is a brief description of Product-10.",
		"price": 75.83,
		"stock": 36,
		"image": "https://images.unsplash.com/photo-1615397349754-cfa2066a298e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8cHJvZHVjdHxlbnwwfHwwfHx8MA%3D%3D",
		"category": "Books",
		"rating": 4.2
	},
	{
		"id": 11,
		"name": "Product-11",
		"description": "This is a brief description of Product-11.",
		"price": 47.0,
		"stock": 69,
		"image": "https://plus.unsplash.com/premium_photo-1670537994863-5ad53a3214e0?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8cHJvZHVjdHxlbnwwfHwwfHx8MA%3D%3D",
		"category": "Toys",
		"rating": 4.0
	},
	{
		"id": 12,
		"name": "Product-12",
		"description": "This is a brief description of Product-12.",
		"price": 45.9,
		"stock": 42,
		"image": "https://plus.unsplash.com/premium_photo-1664392147011-2a720f214e01?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8cHJvZHVjdHxlbnwwfHwwfHx8MA%3D%3D",
		"category": "Toys",
		"rating": 1.1
	},
	{
		"id": 13,
		"name": "Product-13",
		"description": "This is a brief description of Product-13.",
		"price": 63.81,
		"stock": 21,
		"image": "https://media.istockphoto.com/id/1805986697/photo/side-hustle-business-online-influencer.webp?b=1&s=612x612&w=0&k=20&c=GOBJ-DWoSE9cK_wuZqOYGRPTHZaqVf_YulAXxLXYuSk=",
		"category": "Toys",
		"rating": 4.9
	},
	{
		"id": 14,
		"name": "Product-14",
		"description": "This is a brief description of Product-14.",
		"price": 96.7,
		"stock": 31,
		"image": "https://media.istockphoto.com/id/1694195918/photo/a-serious-beautiful-cuban-woman-shopping-at-the-supermarket.webp?b=1&s=612x612&w=0&k=20&c=c8lwCuTLtojWeedvHPrg12eWcX_CVtHpyQ6THaoPuis=",
		"category": "Books",
		"rating": 2.2
	},
	{
		"id": 15,
		"name": "Product-15",
		"description": "This is a brief description of Product-15.",
		"price": 86.64,
		"stock": 50,
		"image": "https://plus.unsplash.com/premium_photo-1675896084254-dcb626387e1e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cHJvZHVjdHxlbnwwfHwwfHx8MA%3D%3D",
		"category": "Toys",
		"rating": 3.1
	}
];
function Products() {
   
  return (
    <div className="grid">
        {
             products.map((product)=>(
 
                <Product key={product.id} product={product}/>
                
             
                    
              ))
              

        }
           </div>
  )
  
 
    
  
}

export default Products
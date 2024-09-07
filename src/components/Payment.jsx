import React, { useEffect, useState } from 'react'

function Payment() {
    const initialPayment={
        evc:false,
        zaad:false,
        sahal:false
    }
 
    const[paymentMythod,setPaymentMethod]=useState(initialPayment)
    const [updated,setUpdated]=useState(false)
    const [phone,setPhone]=useState(false)

    useEffect(()=>{},[updated])
    const handleSubmit=(event)=>{

        event.preventDefault()
        console.log('kkkkk')
        console.log(phone)
    }
  return (
    <div>
        <h2>Pay with</h2>
        <div className={`payment-cards ${paymentMythod.zaad && "selecetd"}`}
        onClick={()=> setPaymentMethod({...initialPayment,zaad:true})}>
            <div className="paymen-card">
                <h3>Zaad service</h3>
            </div>

        </div>
        <div className={`payment-cards ${paymentMythod.evc && "selecetd"}`}   
        onClick={()=> setPaymentMethod({...initialPayment,zaad:true})}>

            <div className="paymen-card">
                <h3>Evc plus</h3>
            </div>

        </div>
        <div className={`payment-cards ${paymentMythod.sahal && "selecetd"}` }
                onClick={()=> setPaymentMethod({...initialPayment,sahal:true})}>

        
            <div className="paymen-card">
                <h3>sahal</h3>
            </div>

        </div>
        <form onSubmit={handleSubmit}>
            <input type="text" className='form-control' placeholder='252..'
             onChange={(e)=>setPhone(e.target.value)}/>
            <button className='btn-proceed'>proceed</button>
        </form>
        
    </div>
  )
}

export default Payment
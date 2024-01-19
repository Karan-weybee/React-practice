function Button({colorName,setColor}) {
   
    return (
      <>
       <button
       onClick={()=>setColor(colorName)}
       className='outline-none px-4 py-1 rounded-full text-white shadow-lg' style={{backgroundColor:colorName}}>
        {colorName}
       </button>
          
      </>
    )
  }
  
  export default Button
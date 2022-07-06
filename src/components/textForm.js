import React from "react";


var TextForm = ({text,error,handleOnChange}) => {

  
  return (
    <>
        <div className="input-group">
          <textarea id="inputText" className="form-control" aria-label="With textarea" placeholder="Enter value to evaluate!" value={text} onChange={handleOnChange}></textarea>
        </div>
        <div className="text-danger my-2">
         {error}
        </div>

    </>
  )
}


export default TextForm;
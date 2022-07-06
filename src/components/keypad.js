import React, { useState } from "react";
import TextForm from "./textForm";



var Keypad = () => {

    // state
    const [text, setText] = useState("");
    const [error, setError] = useState("");

    // functions
    const handleOnChange = (e) => {
        setText(e.target.value);
      }

    const addOpera = (e) => {
        setText(text + e.target.value)
    }

    const evaluateText = (e) => {
        try {
            var result = eval(text);
            setText(result)
            setError("")
        } catch (error) {
            setError("Enter a valid equation to evaluate..!")
        }
    }

    const clearText = (e) => {
        setText('');
    }


    return (
        <>
            <div className='container my-5'>
                <TextForm error={error} text={text} handleOnChange={handleOnChange}/>
                <div className="my-2">
                    <button type="button" className="btn btn-outline-dark me-3" value="1" onClick={addOpera}>1</button>
                    <button type="button" className="btn btn-outline-dark mx-3" value="2" onClick={addOpera}>2</button>
                    <button type="button" className="btn btn-outline-dark mx-3" value="3" onClick={addOpera}>3</button>
                    <button type="button" className="btn btn-outline-dark mx-3" value="4" onClick={addOpera}>4</button>
                    <button type="button" className="btn btn-outline-dark mx-3" value="5" onClick={addOpera}>5</button>
                    <button type="button" className="btn btn-outline-dark mx-3" value="6" onClick={addOpera}>6</button>
                    <button type="button" className="btn btn-outline-dark mx-3" value="7" onClick={addOpera}>7</button>
                    <button type="button" className="btn btn-outline-dark mx-3" value="8" onClick={addOpera}>8</button>
                    <button type="button" className="btn btn-outline-dark mx-3" value="9" onClick={addOpera}>9</button>
                    <button type="button" className="btn btn-outline-dark mx-3" value="0" onClick={addOpera}>0</button>

                    <div className="my-2">
                        <button type="button" className="btn btn-success me-3" value="+" onClick={addOpera}>+</button>
                        <button type="button" className="btn btn-danger mx-3" value="-" onClick={addOpera}>-</button>
                        <button type="button" className="btn btn-warning  mx-3" value="*" onClick={addOpera}>*</button>
                        <button type="button" className="btn btn-info  mx-3" value="/" onClick={addOpera}>/</button>
                    </div>

                    <div className="my-2">
                        <button type="button" className="btn btn-dark me-3 btn-lg" onClick={evaluateText}>=</button>
                        <button type="button" className="btn btn-secondary mx-3 btn-lg" onClick={clearText}>clear</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Keypad;
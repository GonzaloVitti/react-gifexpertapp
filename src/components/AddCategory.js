import { useState } from "react";
import PropTypes from "prop-types";

export const AddCategory = ({setCategories}) => {
  const [input, setInput] = useState("");
  const handleInputChange = (e) => {
      setInput(e.target.value);
  };
  const handleSubmit =(e)=>{
      e.preventDefault();
      if(input.trim().length>2){
        setCategories(cats =>[input,...cats]);
        setInput('');
      }
      
  }
  return (
    <form onSubmit={handleSubmit}>
      <input
        id="category"
        type="text"
        value={input}
        onChange={(e) => handleInputChange(e)}
      />

    </form>
  );
};
AddCategory.propTypes = {
    setCategories : PropTypes.func.isRequired
};

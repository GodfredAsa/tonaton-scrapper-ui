import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import useHttp from "./hooks/use-http";
import { Fragment, useState } from "react";
import DisplayData from "./DisplayData";
import './category.module.css'

const CategoryForm = () => {
  const [category, setCategory] = useState('');

  const selectedCategory = (event) => {
    setCategory(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setCategory(event.taget.value);
  }

  const {isLoading, error, data} = useHttp(`http://localhost:8088/products/${category}`);
  return (
    <Fragment>
      <FormControl fullWidth onSubmit ={handleSubmit}>
        <InputLabel id="demo-simple-select-label">select category</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          label="select category"
          onChange={selectedCategory}
          value={category}
        >
          {/* computers-and-laptops */}
          <MenuItem value="cars">Cars or Vehicles</MenuItem>
          <MenuItem value="mobile-phones-tablets">Mobile Phones and Tablets </MenuItem>
          <MenuItem value="real-estate">Real Estate </MenuItem>
          <MenuItem value="electronics">Electronics</MenuItem>
          <MenuItem value="computers-and-laptops">Computers and Laptops</MenuItem>
         


        </Select>
      </FormControl>

      {isLoading && <p>Loading ...</p>}
      {error && <p></p>}

      {data && <DisplayData data ={data}/>}
    </Fragment>
  );
};

export default CategoryForm;

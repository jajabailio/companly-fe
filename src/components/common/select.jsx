import React from "react";

const Select = ({ name, label, options, error, ...rest }) => {
  return (
    <div className="form-group">
      <label htmlFor="{name">{label}</label>
      <select name={name} id={name} {...rest} className="form-control">
        {options.map((option, idx) => (
          <option key={option._id} value={option.name}>
            {option.name}
          </option>
        ))}
      </select>
      {error && <div className="alert alert-danger"> {error} </div>}
    </div>
  );
};

export default Select;

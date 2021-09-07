import './Filter.css';

const Filter = ({ value, onChange }) => (
  <label className="filter">
    <h3>Find contacts by name</h3>
    <input type="text" value={value} onChange={onChange}></input>
  </label>
);

export default Filter;

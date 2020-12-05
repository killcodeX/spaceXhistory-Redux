import React, {useState} from "react";

export default function SearchBar() {

    const [search, setSearch] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        alert(search)
    }

  return (
    <form onSubmit={handleSubmit}>
      <div className="form-group has-search">
        <span className="fa fa-search form-control-feedback"></span>
        <input
          type="text"
          className="form-control"
          placeholder='Search Rocket....'
          value = {search}
          onChange = {(e) => setSearch(e.target.value)}
        />
      </div>
    </form>
  );
}

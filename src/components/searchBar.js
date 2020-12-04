import React, {useState} from "react";

export default function SearchBar() {

    const [search, setSearch] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        alert(search)
    }

  return (
    <form onSubmit={handleSubmit}>
      <div class="form-group has-search">
        <span class="fa fa-search form-control-feedback"></span>
        <input
          type="text"
          class="form-control"
          value = {search}
          onChange = {(e) => setSearch(e.target.value)}
        />
      </div>
    </form>
  );
}

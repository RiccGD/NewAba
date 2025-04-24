import styles from './gobar.module.css';
import React, { useState } from "react";

const GoogleSearchBar = () => {
  const [query, setQuery] = useState("");

  const handleSearch = (e) => {
    e.preventDefault();
    if (query.trim() !== "") {
      const url = `https://www.google.com/search?q=${encodeURIComponent(query)}`;
      window.open(url, "_blank");
    }
  };

  return (
    <form onSubmit={handleSearch} className={styles.searchForm}>
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Pesquisar no Google"
        className={styles.searchInput}
      />
      <button type="submit" className={styles.searchButton}>
        Buscar
      </button>
    </form>
  );
};

export default GoogleSearchBar;

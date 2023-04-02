'use client';
import React, { useState } from 'react';
import './search.css';

export default function Search() {
  const data = ['mangga', 'apel', 'pisang', 'semangaka'];
  const [filterList, setFilterList] = useState(data);

  const handleSearch = (list) => {
    if (list.target.value === ' ') {
      setFilterList(data);
      return;
    }

    const filterValue = data.filter(
      (item) => 
      item.toLowerCase().indexOf(list.target.value.toLowerCase() )!== -1
      );

      if (filterValue === -1) {
        console.log("data tidak ditemukan")
      }

    setFilterList(filterValue);
  };

    


  return (
    <>
      <div className='container'>
        <p>Search:</p>
        <input type='text' onChange={handleSearch} name='query' />
      </div>
      <div className=''>
        {filterList && filterList.map((item,index)=> (
        <div key={index}>{item}</div>
      ))}
      </div>
      

    </>
  );
}

import React, { useEffect } from 'react';
import { usePage } from '../../common/PageContext';

const AddProduct = () => {

    const { setActivePage } = usePage();

    useEffect(() => {
      setActivePage('login');
    }, [setActivePage]);

  return (
    <div>
      <h2>Add Product Page</h2>
      
    </div>
  );
}

export default AddProduct;
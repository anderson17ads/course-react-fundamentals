import React from 'react';
import products from '../../data/products';

export default () => {
    const itens = products.map(item => {
        return (
            <tr key={item.id}>
                <td>{item.id}</td>
                <td>{item.name}</td>
                <td>R$ {item.price.toFixed(2).replace('.', ',')}</td>
            </tr>
        );
    });

    return (
        <>
            <h2>Table Products</h2>
            <table border="1">
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Name</th>
                        <th>Price</th>
                    </tr>
                </thead>
                <tbody>
                    {itens}
                </tbody>
            </table>
        </>
    )
}
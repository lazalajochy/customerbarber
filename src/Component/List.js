import { useState, useEffect } from "react";
import axios from "axios";
const List = () => {
    const [listCustomers, setListCustomers] = useState([]);

    useEffect(() => {
        getListCustomer()
    },[]);

    const getListCustomer = async () => {
        const res = await axios.get('https://barberbackend-production.up.railway.app/getCustomerService');
        setListCustomers(res.data)
    }


    return(
      <div className="container list">
        <div className="row">
            <div className="col-md-12">
                <h4>Lista de clientes</h4>
                <table className="table">
                    <thead className="table-responsive">
                        <tr>
                            <th>#</th>
                            <th>Nombre</th>
                            <th>Servicio</th>
                            <th>Precio</th>
                            <th>Descripción</th>
                        </tr>
                    </thead>
                    <tbody>
                        {listCustomers.map((list) => (
                            <tr key={list.id}>
                                <td>{list.id}</td>
                                <td>{list.customerName}</td>
                                <td>{list.serviceName}</td>
                                <td>{list.servicePrice}</td>
                                <td>{list.serviceDescription}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
      </div>
    )
}

export default List;
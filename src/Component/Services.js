import React, { useEffect, useState } from "react"
import { Link } from "react-router-dom";
import axios from "axios";
import {FaAngleRight} from "react-icons/fa"

const Services = () => {
     const [services, setServices] = useState([])

     useEffect(() => {
        getServices()
    },[])
    
    const getServices = async() => {
        const res = await axios.get('https://barberbackend-production.up.railway.app/')
        setServices(res.data)
    }
    
    return(
        <>
        <div className="container list">
            <div className="col-md-12">
                <h4>Lista de servicios</h4>
                <table className="table">
                    <thead className="table-responsive">
                        <tr>
                            <th>Nombre</th>
                            <th>Precio</th>
                            <th>Descripción</th>
                            <th>Cola</th>
                        </tr>
                    </thead>
                    <tbody>
                        {services.map((service) =>(
                            <tr key={service.id}>
                                <td>{service.serviceName}</td>
                                <td>{service.servicePrice}</td>
                                <td>{service.serviceDescription}</td>
                                <td>
                                    <Link to={`/queue/${service.id}`} className="btn btn-info">< FaAngleRight/></Link>
                                </td>

                            </tr>
                        ))}
                    </tbody>
                </table>

            </div>

        </div>
        </>
    )
}

export default Services
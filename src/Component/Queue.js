import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import { confirmAlert } from "react-confirm-alert";
import 'react-confirm-alert/src/react-confirm-alert.css';

const Queue = () => {
    const { id } = useParams();
    const naviage = useNavigate()
    const [serviceName, setServiceName] = useState(''),
        [servicePrice, setServicePrice] = useState(''),
        [customerName, setCustomerName] = useState(''),
        [serviceDescription, setServiceDescription] = useState('');

    useEffect(() => {
        getService()
        //eslint-disable-next-line
    }, []);

    const getService = async () => {
        await axios.get(`https://barberbackend-production.up.railway.app/getService/${id}`)
            .then((res) => {
                setServiceName(res.data[0].serviceName)
                setServicePrice(res.data[0].servicePrice)
                setServiceDescription(res.data[0].serviceDescription)
            }).catch((error) => {
                console.log(error)
            })

    }

    const addCustomer = async (e) => {
        e.preventDefault()
        confirmAlert({
            message: "Seguro que deseas este servicio?",
            buttons: [
                {
                    label: 'Si',
                    onClick: async () => {
                        await axios.post('https://barberbackend-production.up.railway.app/addCustomerService', {
                            customerName: customerName,
                            serviceName: serviceName,
                            servicePrice: servicePrice,
                            serviceDescription: serviceDescription
                        })
                        naviage('/listCustomer')

                    },

                },
                {
                    label: 'No',
                    onClick: () => {
                        naviage('/');
                    }
                }
            ]
        })

    }

    return (
        <div className="add-Form-container col-md-12">
            <h4>Hacer cola</h4>
            <form onSubmit={addCustomer}>
                <div className="mb-3 row">
                    <label>Nomre</label>
                    <input
                        value={customerName}
                        onChange={(e) => setCustomerName(e.target.value)}
                        type="text"
                        className="form-control"

                    />
                </div>

                <div className="mb-3 row">
                    <label>Servicio</label>
                    <input
                        value={serviceName}
                        onChange={(e) => setServiceName(e.target.value)}
                        className="form-control"
                        readOnly
                    />
                </div>

                <div className="mb-3 row">
                    <label>Precio</label>
                    <input
                        className="form-control"
                        readOnly
                        value={servicePrice}
                        onChange={(e) => setServicePrice(e.target.value)}
                    />
                </div>
                <div className="mb-3  row">
                    <label>Descripción</label>
                    <textarea
                        className="form-control"
                        readOnly
                        value={serviceDescription}
                    />
                </div>
                <div className='mb-3 row'>
                    <button type='submit' className='btn btn-primary' >Submit</button>
                </div>

            </form>

        </div>
    )
}

export default Queue;
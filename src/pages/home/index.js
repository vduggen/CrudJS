import React, { useState, useEffect } from 'react';
 
import Header from '../../components/header';

import { Table, Button } from 'react-bootstrap';

import { ModalRegister, ModalRemove, ModalUpdate } from '../../components/modals/index';

import { 
    HeaderBody,
    ContainerBody,
    GlobalStyle,
    Buttons
} from './style';

import { IoMdAdd } from 'react-icons/io';
import { FiTrash2 } from 'react-icons/fi';
import { FaEdit } from 'react-icons/fa';

import api from '../../services/api';

export default function Home() {
    const [RegisterModalState, setRegisterModalState] = useState(false);
    const [RemoveModalState, setRemoveModalState] = useState(false);
    const [UpdateModalState, setUpdateModalState] = useState(false);


    const [valuesInputs, setvaluesInputs] = useState({nameCompany: '',emailCompany: '', cityCompany: '' });
    function handleModalRegister(event) {
        let values = { ...valuesInputs };
        values[event.target.name] = event.target.value;
        setvaluesInputs(values);
    }    
    const createRegister = async (event) => {
        event.preventDefault();

        if (valuesInputs.nameCompany === "" || valuesInputs.emailCompanyEl === "" || valuesInputs.cityCompanyEl === "") {
            let msgErrorEl = document.querySelector('.modal-body #erro #msgErro');
            msgErrorEl.innerText = 'Erro: Todos os campos devem ser preenchidos!';
            setTimeout(function() { msgErrorEl.innerText = "" },3000);
        }else {     
            await api.post('/company', {
                name: valuesInputs.nameCompany,
                email: valuesInputs.emailCompany,
                city: valuesInputs.cityCompany
            });
            
            fetchData();

            setRegisterModalState(false);
        }
    }
    


    const [RemoveInputValue, setRemoveInputValue] = useState('');    
    async function RemoveData(event) {
        event.preventDefault();
        await api.delete(`/company/${RemoveInputValue}`);
        
        fetchData();        
        setRemoveModalState(false);
    }

    
    const [ID, setId] = useState('');    
    const [UpdateInputValue, setUpdateInputValue] = useState({});
    const handleModalUpdate = (event) => {
        let values = { ...UpdateInputValue };
        
        if (event.target.name === 'IdCompany') {
            setId(event.target.value);
        }else {
            values[event.target.name] = event.target.value;
        }

        setUpdateInputValue(values);
    }



    const UpdateData = async (event) => {
        event.preventDefault();
        await api.put(`/company/${ID}`, UpdateInputValue);
        
        setId('');
        setUpdateInputValue('');
        
        fetchData();        
        setUpdateModalState(false);
    }


    
    const [valueMap, setValueMap] = useState([]);

    const filterHandle = (e) => {
        let searchValues = apiData.filter(arr => {
            if (arr._id.toLowerCase().indexOf(e.target.value.toLowerCase()) !== -1) {
                return arr._id.toLowerCase().indexOf(e.target.value.toLowerCase()) !== -1;
            }else if (arr.name.toLowerCase().indexOf(e.target.value.toLowerCase()) !== -1) {
                return arr.name.toLowerCase().indexOf(e.target.value.toLowerCase()) !== -1;
            }else if (arr.email.toLowerCase().indexOf(e.target.value.toLowerCase()) !== -1) {
                return arr.email.toLowerCase().indexOf(e.target.value.toLowerCase()) !== -1;
            }else {
                return arr.city.toLowerCase().indexOf(e.target.value.toLowerCase()) !== -1;
            }
        });
        setValueMap(searchValues);
    }
    
    const [apiData, setApiData] = useState([]);
    const fetchData = async () => {
        const response = await api.get('/company');
        setApiData(response.data);
        setValueMap(response.data);
    };
    useEffect(() => {        
        fetchData();
    }, []);

    return (
        <>   
            <GlobalStyle />

            <Header />

            <ContainerBody>

                <HeaderBody>
                    <h1>Table of Companies</h1>

                    <Buttons>
                        <Button onClick={ () => setRegisterModalState(true) } variant="primary" size="small">
                            <IoMdAdd />
                            Create
                        </Button>

                        <ModalRegister 
                            onHide={() => setRegisterModalState(false)}
                            show={RegisterModalState}
                            createregister={createRegister}
                            handleModalRegister={handleModalRegister}
                        />

                        <Button variant="danger" size="small" onClick={ () => setRemoveModalState(true) }>
                            <FiTrash2 />
                            Delete
                        </Button>

                        <ModalRemove 
                            onHide={() => setRemoveModalState(false)}
                            show={RemoveModalState}
                            setRemoveInputValue={setRemoveInputValue}
                            RemoveData={RemoveData}
                        />

                        <Button variant="info" size="small" onClick={ () => setUpdateModalState(true) }>
                            <FaEdit />
                            Update
                        </Button>

                        <ModalUpdate 
                            onHide={() => setUpdateModalState(false)}
                            show={UpdateModalState}
                            handleModalUpdate={handleModalUpdate}
                            UpdateData={UpdateData}
                        />                        
                    </Buttons>

                    <input onChange={ e => filterHandle(e) } type="text" placeholder="Search Companies" />
                </HeaderBody>

                <Table bordered hover variant="dark">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Name</th>
                            <th>E-mail</th>
                            <th>City</th>
                        </tr>
                    </thead>

                    <tbody>
                        {valueMap.map((data,index) => (
                            <tr key={index}>
                                <td>{ data._id }</td>
                                <td>{ data.name }</td>
                                <td>{ data.email }</td>
                                <td>{ data.city }</td>
                            </tr>
                        ))}
                    </tbody>
                </Table>    
            </ContainerBody>
        </>
    )
}
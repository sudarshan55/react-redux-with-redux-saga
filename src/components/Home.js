import { useEffect } from 'react'
import { useSelector, useDispatch } from "react-redux";
import { startLoading } from '../actions/person.actions'
import { Table, Container, Button, Spinner, Alert } from 'react-bootstrap'

function BaseComponent() {
    const isLoading = useSelector((state) => state.person && state.person.isLoading);
    const personData = useSelector((state) => state.person && state.person.personData);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(startLoading())
    }, [dispatch])

    return (
        <>
            <Alert variant="primary">
                <center> <h3> Employees </h3></center>
            </Alert>
            <Container>
                {isLoading ? <div style={{ display: "flex", justifyContent: "center" }} className="mt-5">
                    <h3>Loading  &nbsp; </h3>
                    <Spinner animation="grow" />
                </div> : <Table striped bordered hover variant="dark">
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>First Name</th>
                            <th>Last Name</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            personData && personData.map((element, idx) => (
                                <tr key={idx}>
                                    <td>{idx}</td>
                                    <td>{element.firstName}</td>
                                    <td>{element.lastName}</td>
                                    <td>
                                        <Button variant="primary" >Edit</Button>
                                        <Button variant="danger" className="mx-3">Delete</Button>
                                    </td>
                                </tr>
                            ))
                        }
                    </tbody>
                </Table>}
            </Container>
        </>
    );
}

export default BaseComponent;
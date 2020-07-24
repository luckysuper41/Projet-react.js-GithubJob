import React from 'react';
import { Form, Col } from 'react-bootstrap';

const style = {
  marginTop: '75px'
};

//cái này là tool search
export default function SearchForm({ params, onParamChange }) {
  return (
    <Form className="mb-4" style={style}>
      <Form.Row className="align-items-end">
        <Form.Group as={Col}>
          <Form.Label>Description</Form.Label>
          <Form.Control onChange={onParamChange} value={params.description} name="description" type="text" placeholder='Filter by title, benefits, companies, expertise' />
        </Form.Group>
        <Form.Group as={Col}>
          <Form.Label>Location</Form.Label>
          <Form.Control onChange={onParamChange} value={params.location} name="location" type="text" placeholder='Filter by city, state, zip code or country' />
        </Form.Group>
        <Form.Group as={Col} xs="auto" className="ml-2">
          <Form.Check onChange={onParamChange} value={params.full_time} name="full_time" id="full-time" label="Only Full Time" type="checkbox" className="mb-2" />
        </Form.Group>
      </Form.Row>
    </Form>
  )
}

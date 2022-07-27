import * as React from 'react';
import Form from 'react-bootstrap/Form';

const PageSelector = (props) => {
  return (
      <Form.Select aria-label="Default select example" onChange={e => props.handleSelect(e.target.value)}>
          <option>Open this select menu</option>
          <option value="1">Forms</option>
          <option value="2">Tables</option>
          <option value="3">Images</option>
          <option value="4">Operations</option>
      </Form.Select>
  )
}

export default PageSelector;
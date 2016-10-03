import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import { Table } from 'react-bootstrap';

class StudentTable extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {

    const studentsHTML = this.props.students.map((student, i) => {
      return (
        <tr key={ i }>
          <th>
            { i }
          </th>
          <th>
            <Link to={ `/student/${student.contactID}` }>
            { student.firstName }
            </Link>
          </th>
          <th>
            { student.lastName }
          </th>
        </tr>
        );
    });


    return (
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>
              #
            </th>
            <th>
              First Name
            </th>
            <th>
              Last Name
            </th>
          </tr>
        </thead>
        <tbody>
          { studentsHTML }
        </tbody>
      </Table>

      );
  }
}


export default StudentTable;





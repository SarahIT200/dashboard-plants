import { Button } from "react-bootstrap"
import { useContext, useState } from "react"
import { Table } from "react-bootstrap"
import PlantsContext from "../utils/PlantsContext"
import AddIcon from "@mui/icons-material/Add"
import UserRow from "../components/UserRow"
// import AdminAddModal from "../components/AdminAddModal"

function Users() {
  const { users } = useContext(PlantsContext)
  return (
    <>
      <h1 style={{ marginTop: 10, color: "#52796f" }}>Users</h1>
      <div style={{ display: "flex", justifyContent: "flex-end" }}>
        {/* <Button style={{ marginRight: 40, marginBottom: 10 }} onClick={() => setShow(true)} variant="outline-primary">
          <AddIcon /> Add Admin
        </Button> */}
      </div>
      <Table bordered hover style={{ tableLayout: "fixed", color: "#52796f" }}>
        <thead>
          <tr>
            <th style={{ width: "9%" }}>#</th>
            <th style={{ width: "12%" }}>User Name</th>
            <th style={{ width: "12%" }}>Nick Name</th>
            <th style={{ width: "18%" }}>Email</th>
            <th style={{ width: "18%" }}>Avatar</th>
            <th style={{ width: "9%" }}>Role</th>
            <th style={{ width: "18%" }}>Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map(user => (
            <UserRow key={user._id} user={user} />
          ))}
        </tbody>
      </Table>
    </>
  )
}

export default Users

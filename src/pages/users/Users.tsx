import "./Users.scss";
import { useState } from "react";
import DataTable from "../../components/dataTable/DataTable";
import { GridColDef } from "@mui/x-data-grid";
import { userRows } from "../../utils/data";
import Add from "../../components/add/Add";

const columns: GridColDef[] = [
  { field: "id", headerName: "ID", width: 90 },
  {
    field: "avatar",
    headerName: "Avatar",
    width: 100,
    renderCell: (params) => {
      return <img src={params.row.img || "./noavatar.png"} alt="" />;
    },
  },

  {
    field: "firstName",
    headerName: "First name",
    width: 150,
    type: "string",
  },
  {
    field: "lastName",
    headerName: "Last name",
    width: 150,
    type: "string",
  },
  {
    field: "email",
    type: "string",
    headerName: "Email",
    width: 200,
  },
  {
    field: "phone",
    headerName: "Phone Number",
    width: 200,
    type: "string",
  },
  {
    field: "createdAt",
    headerName: "Created At",
    width: 200,
    type: "string",
  },
  {
    field: "verified",
    headerName: "Verified",
    width: 150,
    type: "boolean",
  },
];

const Users = () => {
  const [open, setOpen] = useState(false);
  return (
    <div className="users">
      <div className="info">
        <h1>Users</h1>
        <button onClick={() => setOpen(true)}>Add New User</button>
      </div>

      <DataTable slug="users" rows={userRows} columns={columns} />
      {open && <Add slug="user" columns={columns} setOpen={setOpen} />}
    </div>
  );
};

export default Users;

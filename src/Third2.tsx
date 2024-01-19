import { useEffect, useState } from "react";
import { Collapse, IconButton, List } from "@mui/material";
import { ExpandLess, ExpandMore } from "@mui/icons-material";

interface User {
  name: string;
  isChecked?: boolean;
}

const userData: User[] = [
  { name: "Graphic_design" },
  { name: "Product_design" },
  { name: "Web_design" },
];

function Third() {
  const [users, setUsers] = useState<User[]>([]);
  const [collapsed, setCollapsed] = useState(false);

  useEffect(() => {
    setUsers(userData);
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = e.target;
    if (name === "Design") {
      let tempUser = users.map((user) => {
        return { ...user, isChecked: checked };
      });
      setUsers(tempUser);
    } else {
      let tempUser = users.map((user) =>
        user.name === name ? { ...user, isChecked: checked } : user
      );
      setUsers(tempUser);
    }
  };

  const handleCollapseToggle = () => {
    setCollapsed(!collapsed);
  };

  return (
    <div className="container my-4" style={{ width: "500px" }}>
      <IconButton onClick={handleCollapseToggle}>
        {collapsed ? <ExpandMore /> : <ExpandLess />}
      </IconButton>
      <div className="form-check">
        <input
          type="checkbox"
          className="form-check-input"
          name="Design"
          checked={!users.some((user) => user?.isChecked !== true)}
          onChange={handleChange}
        />
        <label className="form-check-label ms-2">Design</label>
      </div>
      <Collapse in={!collapsed} timeout="auto">
        <List>
          {users.map((user, index) => (
            <div className="form-check" key={index}>
              <input
                type="checkbox"
                className="form-check-input"
                name={user.name}
                checked={user?.isChecked || false}
                onChange={handleChange}
              />
              <label className="form-check-label ms-2">{user.name}</label>
            </div>
          ))}
        </List>
      </Collapse>
    </div>
  );
}

export default Third;

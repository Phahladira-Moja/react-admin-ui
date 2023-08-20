import "./User.scss";
import Single from "../../components/single/Single";
import { singleUser } from "../../utils/data";

const User = () => {
  return (
    <div className="user">
      <Single {...singleUser} />
    </div>
  );
};

export default User;

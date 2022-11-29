import { Link } from "react-router-dom";

const Header = (props)=>{
    return (
        <div>
            <Link to="/">Home</Link>
            &nbsp;&nbsp;&nbsp;&nbsp;
            <Link to="/board">Board</Link>
            &nbsp;&nbsp;&nbsp;&nbsp;
            <Link to="/pocketmon">PocketMonster</Link>
        </div>
    );
};

export default Header;
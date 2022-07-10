import { useContext } from "react";
import { UserNameContext } from "..";

const Title = () => {
    const name = useContext(UserNameContext)
    return (
        <span className="title">Calc by: {name}</span>
    );
}

export default Title;
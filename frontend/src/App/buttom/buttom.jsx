import "./buttom.css"

function Buttom(props) {
    return (
        <>
        <div className="buttom">
                <button className="buttomButtn">{props.content}</button>
        </div>
        </>
    );
    }

export default Buttom;
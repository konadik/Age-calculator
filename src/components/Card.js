const Card = (props) => {
    return (<div className="flex justify-center items-center bg-gray-100 h-screen    ">
        <div className="flex flex-col space-y-20 pb-20 bg-white p-10  rounded-l-xl rounded-tr-xl rounded-br-3xl">
            {props.children}
        </div>
    </div>)
}
export default Card;

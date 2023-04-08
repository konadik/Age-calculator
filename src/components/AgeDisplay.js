const AgeDisplay = () =>{
    return <div className="flex flex-col justify-center items-start space-y-3">

     <div className="flex  space-x-4 ">
         <h1 className="md:text-8xl text-6xl font-bold text-purple-500">--</h1>
         <h1 className="md:text-8xl text-6xl font-bold">years</h1>
     </div>

        <div className="flex  space-x-4 ">
            <h1 className="md:text-8xl text-6xl font-bold text-purple-500">--</h1>
            <h1 className="md:text-8xl text-6xl font-bold">months</h1>
        </div>

        <div className="flex  space-x-4 ">
            <h1 className="md:text-8xl text-6xl font-bold text-purple-500">--</h1>
            <h1 className="md:text-8xl text-6xl font-bold">days</h1>
        </div>

    </div>
}
export default AgeDisplay;

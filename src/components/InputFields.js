const InputFields = (props) => {
    return (<div className="flex space-x-2 md:space-x-5 max-w-xs md:max-w-md md:mr-32">
        <div className="flex flex-col justify-center items-start space-y-1 ">
            <p className="uppercase font-extrabold text-xs tracking-widest text-gray-500">day</p>
            <input placeholder="DD" className="flex border border-gray-300 rounded-lg w-full px-3 py-3
            placeholder:text-xl placeholder:font-extrabold  "/>
        </div>

        <div className="flex flex-col justify-center items-start space-y-1 ">
            <p className="uppercase font-extrabold  text-xs tracking-widest text-gray-500">month</p>
            <input placeholder="MM" className="flex border border-gray-300 rounded-lg w-full px-3 py-3
            placeholder:text-xl placeholder:font-extrabold "/>
        </div>

        <div className="flex flex-col justify-center items-start space-y-1 px-2">
            <p className="uppercase font-extrabold  text-xs tracking-widest text-gray-500">year</p>
            <input placeholder="YYYY" className="flex border border-gray-300 rounded-lg w-full px-3 py-3
            placeholder:text-xl placeholder:font-extrabold "/>
        </div>


    </div>)

}
export default InputFields

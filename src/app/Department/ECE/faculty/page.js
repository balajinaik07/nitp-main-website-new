import BackDepartment from "../../../components/department/BackDepartment"
import FacultyList from '../../../../components/facultycomponents/FacultyList';
import React from 'react'

// import pdf from '../../../../components/pdf.pdf
const Home=() =>{
  return (
   <>
    <div className="flex flex-col px-3 py-10  max-sm:p-4 text-black">
      <div className="flex flex-col  mb-4">
        <div>
            <p className="text-red-900 text-xl lg:text-2xl font-bold">
                FACULTY
            </p>
        </div>
        <div className="mt-2">
            <p className="text-gray-500 text-sm lg:text-base font-semibold">
            ELECTRONICS AND COMMUNICATION ENGINEERING
            </p>
        </div>
        <div>
          <BackDepartment navigate={'/Department/ECE'}/>
        </div>
      </div>  
      <FacultyList url={"/Department/ECE/faculty"} branch={"ece"}/>
    </div>
   </>
  )
}
export default Home;
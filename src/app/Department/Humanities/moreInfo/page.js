import BackDepartment from "../../../components/department/BackDepartment"


function Page(){
    return (
        <div className=" flex flex-col p-10 max-sm:p-2 text-black">  
            <div className="flex flex-col  mb-16">
                <div>
                    <p className="text-red-900 text-xl lg:text-2xl font-bold">
                        MORE INFORMATION
                    </p>
                </div>
                <div className="lg:mt-2">
                    <p className="text-gray-500 text-sm lg:text-base font-semibold">
                        Humanities & Social Sciences
                    </p>
                </div>
                <BackDepartment navigate={"/Department/Humanities"}/>

            </div>
            {/* LINKS */}
            <div className=" border p-4 rounded-md shadow-lg shadow-slate-400 backdrop-blur-md">
                <div className="mb-10 text-black overflow-x-auto">
                    <div className="w-[1300px]">
                        <div className="font-bold mb-2 text-red-900">Research Scholars Information</div>
                        <div className=" grid grid-cols-12  border border-black">
                            <div className="px-2 h-10 flex flex-col justify-center col-span-1 border-r border-black font-bold">S.no.</div>
                            <div className="px-2 h-10 flex flex-col justify-center col-span-1 border-r border-black font-bold">Roll</div>
                            <div className="px-2 h-10 flex flex-col justify-center col-span-4 border-r border-black font-bold">	Name of the Scholar</div>
                            <div className="px-2 h-10 flex flex-col justify-center col-span-4 border-r border-black font-bold">	Name of the Supervisor</div>
                            <div className="px-2 h-10 flex flex-col justify-center col-span-2  font-bold">Status</div>
                        </div>
                        <div className="font-bold font-serif my-2">Full-Time (Institute Fellowship)</div>
                        <div className=" grid grid-cols-12  border border-black  text-[12px]">
                            <div className="px-2  flex flex-col justify-center col-span-1 border-r border-black">1</div>
                            <div className="px-2 flex flex-col justify-center col-span-1 border-r border-black"></div>
                            <div className="px-2 flex flex-col justify-center col-span-4 border-r border-black"></div>
                            <div className="px-2  flex flex-col justify-center col-span-4 border-r border-black"></div>
                            <div className="px-2  flex flex-col justify-center col-span-2 "></div>
                        </div>
                        <InfoCompo 
                            sn={"2"}
                            roll={""}
                            scholar={""}
                            suparvisor={""}
                            status={""}
                        />
                        <InfoCompo 
                            sn={"3"}
                            roll={""}
                            scholar={""}
                            suparvisor={""}
                            status={""}
                        />
                        <InfoCompo 
                            sn={"4"}
                            roll={""}
                            scholar={""}
                            suparvisor={""}
                            status={""}
                        />
                        <InfoCompo 
                            sn={"5"}
                            roll={""}
                            scholar={""}
                            suparvisor={""}
                            status={""}
                        />
                        <InfoCompo 
                            sn={"6"}
                            roll={""}
                            scholar={""}
                            suparvisor={""}
                            status={""}
                        />
                        <InfoCompo 
                            sn={"7"}
                            roll={""}
                            scholar={""}
                            suparvisor={""}
                            status={""}
                        />
                        <InfoCompo 
                            sn={"8"}
                            roll={""}
                            scholar={""}
                            suparvisor={""}
                            status={""}
                        />
                        <InfoCompo 
                            sn={"9"}
                            roll={""}
                            scholar={""}
                            suparvisor={""}
                            status={""}
                        />
                        <InfoCompo 
                            sn={"10"}
                            roll={""}
                            scholar={""}
                            suparvisor={""}
                            status={""}
                        />
                        <InfoCompo 
                            sn={"11"}
                            roll={""}
                            scholar={""}
                            suparvisor={""}
                            status={""}
                        />
                        <InfoCompo 
                            sn={"12"}
                            roll={""}
                            scholar={""}
                            suparvisor={""}
                            status={""}
                        />
                        <InfoCompo 
                            sn={"13"}
                            roll={""}
                            scholar={""}
                            suparvisor={""}
                            status={""}
                        />
                        <InfoCompo 
                            sn={"14"}
                            roll={""}
                            scholar={""}
                            suparvisor={""}
                            status={""}
                        />
                        <InfoCompo 
                            sn={"15"}
                            roll={""}
                            scholar={""}
                            suparvisor={""}
                            status={""}
                        />
                        <InfoCompo 
                            sn={"16"}
                            roll={""}
                            scholar={""}
                            suparvisor={""}
                            status={""}
                        />

                        <div className="font-bold font-serif my-2">Full-Time (Sponsored)</div>
                        <div className=" grid grid-cols-12  border border-black  text-[12px]">
                            <div className="px-2  flex flex-col justify-center col-span-1 border-r border-black">1</div>
                            <div className="px-2  flex flex-col justify-center col-span-1 border-r border-black"></div>
                            <div className="px-2 flex flex-col justify-center col-span-4 border-r border-black"></div>
                            <div className="px-2  flex flex-col justify-center col-span-4 border-r border-black"></div>
                            <div className="px-2  flex flex-col justify-center col-span-2 "></div>
                        </div>
                        <InfoCompo 
                            sn={"2"}
                            roll={""}
                            scholar={""}
                            suparvisor={""}
                            status={""}
                        />
                        <InfoCompo 
                            sn={"3"}
                            roll={""}
                            scholar={""}
                            suparvisor={""}
                            status={""}
                        />
                        <InfoCompo 
                            sn={"4"}
                            roll={""}
                            scholar={""}
                            suparvisor={""}
                            status={""}
                        />
                        <InfoCompo 
                            sn={"5"}
                            roll={""}
                            scholar={""}
                            suparvisor={""}
                            status={""}
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

function InfoCompo({sn, roll, scholar, suparvisor, status}){
    return (
        <div className=" grid grid-cols-12  border border-black border-t-0 text-[12px]">
            <div className="px-2  flex flex-col justify-center col-span-1 border-r border-black">{sn}</div>
            <div className="px-2  flex flex-col justify-center col-span-1 border-r border-black">{roll}</div>
            <div className="px-2 flex flex-col justify-center col-span-4 border-r border-black">{scholar}</div>
            <div className="px-2  flex flex-col justify-center col-span-4 border-r border-black">{suparvisor}</div>
            <div className="px-2  flex flex-col justify-center col-span-2 ">{status}</div>
        </div>
    )
}

export default Page
import Form from "../components/Form/Form"

const Registration = () => {

      
      return (
            <div className="lg:w-[80%] pt-20 container lg:p-5 h-screen  mx-auto">
                  <div className="space-y-3 w-full">
                        <h1 className="lg:text-4xl text-xl text-center font-semibold mx-auto">Voter&apos;s Registration</h1>
                        <div className="mx-auto md:p-12 p-4 lg:w-[40%]">
                              <Form />
                        </div>
                  </div>
            </div>
      )
}

export default Registration
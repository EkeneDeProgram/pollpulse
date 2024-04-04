
import { useEffect, useState } from "react"
import Form from "../components/Form/Form"
import { ethers } from "ethers"
const Registration = () => {

      const [provider, setProvider] = useState(null)
      const handleVote = (data) => {
            console.log(data)
      }
      

      const connectToEthereum = async () => {
            const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
            console.log(accounts[0])
            const provider = new ethers.providers.Web3Provider(window.ethereum);

            setProvider(ethereumProvider)
      }

      useEffect(() => {
            connectToEthereum()
      }, [])
      return (
            <div className="lg:w-[80%] pt-20 container lg:p-5 h-screen  mx-auto">
                  <div className="space-y-3 w-full">
                        <h1 className="lg:text-4xl text-xl text-center font-semibold mx-auto">Voter&apos;s Registration</h1>
                        <div className="mx-auto md:p-12 p-4 lg:w-[40%]">
                              <Form handleVote={handleVote} />
                        </div>
                  </div>
            </div>
      )
}

export default Registration
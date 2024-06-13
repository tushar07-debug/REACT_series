import { useState } from 'react'
import {Inputbox} from './components'
import usecurrencyinfo from'./hooks/usecurrencyinfo'


function App() {
  
  const [amount,setamount] = useState(0)
  const [from,setfrom] = useState("usd")
  const [to,setto] = useState("inr")
  const [convertedAmount , setconvertedAmount] = useState(0)

  const currencyInfo = usecurrencyinfo(from)

  const options = Object.keys(currencyInfo)

  const swap = ()=>{
    setfrom(to)
    setto(from)
    setconvertedAmount(amount)
    setamount(convertedAmount)
  }

  const convert = ()=>{
    setconvertedAmount(amount*currencyInfo[to])}

  return (
    <>
     <h1 className='text-3xl text-center bg-orange-500'> Currency Converter</h1>
     <div
            className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat"
            style={{
                backgroundImage: `url('https://images.wsj.net/im-123768/?width=860&height=573')`,
            }}
        >
            <div className="w-full">
                <div className="w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30">
                    <form
                        onSubmit={(e) => {
                            e.preventDefault();
                            convert()
                           
                        }}
                    >
                        <div className="w-full mb-1">
                            <Inputbox
                                label="From"
                                amount={amount}
                                currencyOption={options}
                                onCurrencyChange={(currency)=>setamount(amount)}
                                selectCurrency={from}
                                onAmountChange={(amount)=>setamount(amount)}
                            />
                        </div>
                        <div className="relative w-full h-0.5">
                            <button
                                type="button"
                                className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5"
                                onClick={swap}
                            >
                                swap
                            </button>
                        </div>
                        <div className="w-full mt-1 mb-4">
                            <Inputbox
                                label="To"
                                amount={convertedAmount}
                                currencyOption={options}
                                onCurrencyChange={(currency)=>setto(currency)}
                                selectCurrency={from}
                                amountDisable
                            />
                        </div>
                        <button type="submit" className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg">
                            Convert {from.toUpperCase()} to {to.toUpperCase()}
                        </button>
                    </form>
                </div>
            </div>
        </div>
    </>
  )
}

export default App

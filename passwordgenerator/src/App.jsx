import { useState, useCallback, useEffect ,useRef} from "react";
function App() {
  const [length, setlength] = useState(8);
  const [numberAllowed, setnumberAllowed] = useState(false);
  const [characterAllowed, setcharacterAllowed] = useState(false);
  const [password, setpassword] = useState("");
  const passwordRef = useRef(null)
  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if (numberAllowed) str += "123456789";
    if (characterAllowed) str += "!@#$%^&*()~`:;,.<>?/'|}{][=+-_";

    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1)
      pass += str.charAt(char);
    }
    setpassword(pass);

  }, [length, numberAllowed, characterAllowed, setpassword]);

  const copypasswordToClipboard = useCallback(()=>{passwordRef.current?.select()
    window.navigator.clipboard.writeText(password)
  },[password])
  
  useEffect(()=>{passwordGenerator()},[length, numberAllowed, characterAllowed,passwordGenerator])

  return (
    <>
      <h1 className="text-4xl text-center text-orange-500">
        {" "}
        Password Generator
      </h1>
      <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 my-8 text-black bg-orange-500">
        <h1 className="text-black text-center my-3">Password Generator </h1>
        <div className="flex shadow rounded-lg overflow-hidden mb-4">
          <input
            type="text"
            value={password}
            className="outline-none w-full py-1 px-3"
            placeholder="password"
            readOnly
            ref={passwordRef}/>
          <button onClick={copypasswordToClipboard} className="outline-none bg-black text-white px-3 py-0.5 shrink-0 ">
            Copy
          </button>
        </div>
        <div className="flex text-sm gap-x-2">
          <div className="flex items-center gap-x-1">
            <input
              type="range"
              min={6}
              max={100}
              value={length}
              className="sursor-pointer"
              onChange={(e) => {
                setlength(e.target.value);
              }}
            />
            <label>length:{length}</label>
          </div>
          <div className="flex items-center gap-x-1">
            <input
              type="checkbox"
              defaultChecked={numberAllowed}
              id="numberInput"
              onChange={() => {
                setnumberAllowed((prev) => !prev);
              }}
            />
            <label htmlFor="numberInput">Numbers</label>
          </div>
          <div className="flex items-center gap-x-1">
            <input
              type="checkbox"
              defaultChecked={characterAllowed}
              id="charInput"
              onChange={() => {
                setcharacterAllowed((prev) => !prev);
              }}
            />
            <label htmlFor="numberInput">Characters</label>
          </div>
        </div>
      </div>
    </>
  );
}
export default App;

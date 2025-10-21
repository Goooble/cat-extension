import { useState } from "react"
import { useEffect } from "react"
function Fact(){

    const [fact, setFact] = useState("");
    useEffect(() => {
    // let ignore = false

    async function getFact() {
      let result;
      let data;
      try {
         result = await fetch("https://meowfacts.herokuapp.com/");
         data = await result.json();
      } catch {
        throw new Error("Facts failed");
      }
      setFact(data.data)
    }

    getFact();

    return ()=>{
      // ignore = true;
    }

  }, []);

  return <p>{fact}</p>
}

export default Fact
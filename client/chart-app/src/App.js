import Form2 from "./component/Form2";

import LineChart from "./component/LineChart";
import {createContext, useState} from "react";

const StateContext = createContext()

function App() {

  const [state, setState] = useState(1)
  console.log(state);

  return(
 <>
 <StateContext.Provider value={{state, setState}}>
<Form2/>
<LineChart/>
</StateContext.Provider>
 </>
   
  )
}

export { App, StateContext };

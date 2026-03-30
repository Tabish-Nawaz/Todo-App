import Greeting from "./Greeting"
import GreetingWithStyle from "./GreetingWithStyle"
import Todo from "./Todo"
import Dashboard from "./Dashboard"
import PostLishWithData from "./PostListWithData"
import withAuth from "./hoc/withAuth"

const ProtectedDashboard = withAuth(Dashboard)


function App() {
 
  return(
    <>
      <ProtectedDashboard/>  
      <Todo/>
      <Greeting name="User"/>
      <GreetingWithStyle name="Tabish" />
      <PostLishWithData/>
    </>
  ) 
}

export default App

import { useEffect } from "react";
import Accounts from "../components/usercomponents/accounts";
import User from "../components/usercomponents/user";
import Accountsstyle from "../styles/userstyles/accountsstyle";
import Userstyle from "../styles/userstyles/userstyle";
import useToken from "../components/usetoken";


/*user page which contains usercontent and accounts component*/
export default function Userpage() {

  const { hasToken } = useToken();

  useEffect(() => {
    if (!hasToken) document.location.replace('/')
  }, [hasToken])

  return (
    <main className="main bg-dark">
      <User /><Userstyle />
      <Accounts /><Accountsstyle />
    </main>
  );
}
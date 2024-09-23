import Header from "./component/Header";
import Footer from "./component/Footer";
import { Outlet, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import  { useAppContext } from "./Context/ContextProvider";

const App = () => {
  const { getUserDetails,user } = useAppContext();
  const navigate = useNavigate()
  useEffect(() => {
    const fetchUserDetails = async () => {
      await getUserDetails(); // Wait for getUserDetails to complete
      // setLoading(false); // Set loading to false once user details are fetched
    };

    fetchUserDetails();

    if (user?.role === "admin") {
      navigate("/admin/products");
    }
  }, []);
  
  return (
      <div className="">
        <Header />
        <main className="h-auto">
          <Outlet />
        </main>
        <Footer />
      </div>
  );
};

export default App;
// const DB =
//   "mongodb+srv://nurainande:jEdLlZXall1Ym9gu@cluster0.ec2bo.mongodb.net/?retryWrites=true&w=majority&appName=Cypher";

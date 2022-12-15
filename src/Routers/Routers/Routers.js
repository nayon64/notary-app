import { createBrowserRouter } from "react-router-dom";
import Main from "../../layout/Main/Main";
import Details from "../../Pages/Details/Details";
import Home from "../../Pages/Home/Home/Home";
import SingIn from "../../Pages/SingIn/SingIn";

const router = createBrowserRouter([
	{
		path: "/",
		element: <Main></Main>,
		children: [
			{
				path: "/",
				element:<Home></Home>
			},
			{
				path: "/details",
				element:<Details></Details>
			},
			{
				path: "/signIn",
				element:<SingIn></SingIn>
			}
		]
	}
])

export default router;
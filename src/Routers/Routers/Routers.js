import { createBrowserRouter } from "react-router-dom";
import Main from "../../layout/Main/Main";
import Details from "../../Pages/Details/Details";
import Home from "../../Pages/Home/Home/Home";

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
			}
		]
	}
])

export default router;
import { RouteObject } from 'react-router-dom';
import App from '../App.tsx';
import  Detailed  from '../components/DetailedPokemon.tsx';


const myRoutes
: RouteObject[] = [
  {
    path: "/",
    element: <App />,
  },
   {
        path: "pokemon/:id",
        element: <DetailedWrapper />,
    },
    {
        path: "*",
        element: <div>404 Not Found</div>,
    }
    
    
];
import { useParams } from 'react-router-dom';

function DetailedWrapper() {
    const { id } = useParams<{ id: string }>();
    return <Detailed id={Number(id)} />;
}

export default myRoutes;

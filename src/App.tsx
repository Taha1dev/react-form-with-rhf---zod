
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import DynamicForm from './pages/DynamicForm';
import StaticForm from './pages/StaticForm';
import Default from './Default';

export const Routes = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route>
        <Route index path='' element={<Default />} />
        <Route element={<StaticForm />} path="static" />
        <Route element={<DynamicForm />} path="dynamic" />
      </Route>
    ));
  return <RouterProvider router={router} />
}
export default Routes

import { Route, Routes } from 'react-router-dom';
import FormMachine from '../Page/Form/FormMachine';
import Grafik from '../Page/Grafik/Grafik';
import Report from '../Page/Report/Report';
import Signature from '../Page/Form/Signature';
import Dasboard from '../Page/Dasboard/Dasboard';
import login from '../Page/Register/Login/LoginForm';
import LoginForm from '../Page/Register/Login/LoginForm';
import SiginForm from '../Page/Register/SigIn/SiginForm';



function MainRouter() {
    const allRoutes = [
        {
            path: '/dasboard',
            Element: <Dasboard/>
        },

        {
            path: '/form',
            Element: <FormMachine />
        },
        {
            path: '/form/:id',
            Element: <Signature />
        },

        {
            path: '/grafik',
            Element: <Grafik />
        },
        // {
        //     path: '/report',
        //     Element: <Report />
        // },

        {
            path: '/login',
            Element: <LoginForm />
        },
        {
            path: '/register',
            Element: <SiginForm />
        },
    ];

    return (
        <Routes>
            {allRoutes.map(({ path, Element }, index) => (
                <Route key={index} path={path} element={Element} />
            ))}
        </Routes>
    );
}

export default MainRouter;

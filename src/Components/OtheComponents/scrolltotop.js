import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToTop = () => {


    const location = useLocation();

    useEffect(() => {
        if (!location.pathname.includes('/#')) {
            window.scrollTo(0, 0);  
        }
    }, [location.pathname]);

    return null;
}



export default ScrollToTop;

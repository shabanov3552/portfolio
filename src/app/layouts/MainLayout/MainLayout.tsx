import { Outlet } from "react-router";
import { Header } from '@widgets/Header';
import { Sidebar } from '@/widgets/Sidebar';
import { useMediaQuery } from '@/shared/lib/hooks';

function MainLayout() {
   const isTablet = useMediaQuery('(max-width: 991.98px)');
   return (
      <div className='main-wrapper'>
         <Header></Header>
         {!isTablet ? <Sidebar></Sidebar> : null}
         <div className="main-content">
            <Outlet />
         </div>
      </div>
   )
}

export { MainLayout }

import { Header } from '@widgets/Header';
import { Sidebar } from '@/widgets/Sidebar';
import './App.scss';
import { useMediaQuery } from '@/shared/lib/hooks';

function App() {
  const isTablet = useMediaQuery('(max-width: 991.98px)');
  return (
    <div className='main-wrapper'>
      <Header></Header>
      {!isTablet ? <Sidebar></Sidebar> : null}
      <div className="main-content">
        
      </div>
    </div>
  )
}

export default App

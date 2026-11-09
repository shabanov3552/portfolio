import { BrowserRouter, Routes, Route } from 'react-router';
import './App.scss';
import { MainLayout } from './layouts';
import { HomePage } from '@/pages/home';
import { ContactPage } from '@/pages/contact';
import { ProjectsPage } from '@/pages/projects';
import { AboutPage } from '@/pages/about';
import { Page404 } from '@/pages/page404';


function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout />} >
          <Route index element={<HomePage />} />
          <Route path="contact" element={<ContactPage />} />
          <Route path="projects" element={<ProjectsPage />} />
          <Route path="about" element={<AboutPage />} />
        </Route>
        <Route path='*' element={<Page404 />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App

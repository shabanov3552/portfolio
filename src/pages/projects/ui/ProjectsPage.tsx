import { useEffect, useState } from 'react';
import { getProjects, type Project } from '../api/getProjects';

import cls from './ProjectsPage.module.scss';

type ProjectsState = { status: "loading"; } | { status: "error"; } | { status: "success"; projects: Project[]; }
const errorText = 'На нас напали, мы сейчас отобьемся и все поправим :)';

function ProjectsPage() {
   const [state, setState] = useState<ProjectsState>({ status: 'loading' });

   useEffect(() => {
      getProjects()
         .then((projects) => {
            setState({ status: 'success', projects });
         })
         .catch((error) => {
            setState({ status: 'error' });
            console.error(error);
         });
   }, []);

   const loading = state.status === 'loading' ? 'Загрузка...' : null
   const error = state.status === 'error' ? errorText : null
   const projects = state.status === 'success' && state.projects.length > 0 ?
      state.projects.map((project) => (<ProjectItem key={project.id} data={project}></ProjectItem>)) :
      'Проектов пока нет';

   return (
      <section className={cls.projects}>
         <h1 className={cls.title}>Проекты</h1>
         <div className={cls.filters}>
            <div className={cls.filterButton}></div>
            <div className={cls.sortButton}></div>
         </div>
         <div className={cls.projectsContent}>
            {loading ?? error ?? projects}
         </div>
      </section>
   )
}

function ProjectItem({ data }: { data: Project }) {
   const { title, description, prevImageUrl, tags } = data
   return (
      <div className={cls.projectItem}>
         <div className={cls.projectImage}>
            <img
               src={`${import.meta.env.BASE_URL}${prevImageUrl}`}
               alt={`Скриншот проекта «${title}»`}
            />
         </div>
         <h3 className={cls.projectTitle}>{title}</h3>
         <div className={cls.projectDescr}>{description}</div>
         <a href="" className={cls.projectLink}>Подробнее</a>
         <div className={cls.tags}>
            {tags.map((tag) => (<div key={tag} className={cls.tag}>{tag}</div>))}
         </div>
      </div>
   )
}
export { ProjectsPage };

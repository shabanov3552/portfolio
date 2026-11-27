export type Project = {
   id: string;
   title: string;
   description: string;
   tags: string[];
   prevImageUrl: string;
}

const baseUrl = import.meta.env.BASE_URL;

function isProject(i: unknown): i is Project {
   if (typeof i !== 'object' || i === null || Array.isArray(i)) {
      return false
   }

   if (!('id' in i) || typeof i.id !== 'string') return false
   if (!('title' in i) || typeof i.title !== 'string') return false
   if (!('description' in i) || typeof i.description !== 'string') return false
   if (!('prevImageUrl' in i) || typeof i.prevImageUrl !== 'string') return false

   return (
      'tags' in i &&
      Array.isArray(i.tags) &&
      i.tags.every((tag) => typeof tag === 'string')
   )
}

async function getProjects(): Promise<Project[]> {
   const response = await fetch(`${baseUrl}mock/db.json`);

   if (!response.ok) {
      throw new Error(`Не удалось загрузить проекты (${response.status})`)
   }

   const data: unknown = await response.json();

   if (
      typeof data !== 'object' ||
      data === null ||
      !('projects' in data) ||
      !Array.isArray(data.projects)
   ) {
      throw new Error('В ответе сервера нет массива projects.');
   }

   if (!data.projects.every(isProject)) {
      throw new Error('В ответе сервера есть некорректный проект.')
   }

   return data.projects
}


export { getProjects };

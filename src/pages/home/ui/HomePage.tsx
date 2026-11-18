import { useState } from 'react';
import { ButtonLink } from "@/shared/ui/ButtonLink";
import { Modal } from '@/shared/ui/Modal';

import cls from './HomePage.module.scss';

import { StatusBar } from '@/shared/ui/StatusBar';

function HomePage() {
   const [isContactModalOpen, setIsContactModalOpen] = useState(false);

   return (
      <>
         <div className={cls.wrapper}>
            <section className={cls.hero__section}>
               <StatusBar />
               <h1 className={cls.title}>Александр.<br /><p>Frontend-разработчик.</p></h1>
               <div className={cls.description}>
                  <p className={cls.description__item}>От идеи до полноценных приложений на React.</p>
                  <p className={cls.description__item}>Создаю удобные интерфейсы и пишу код, который легко поддерживать и развивать.</p>
               </div>
               <div className={cls.buttons}>
                  <ButtonLink className={cls.buttonLink} to='projects'>Мои проекты</ButtonLink>
                  <ButtonLink target='_blank' className={cls.button} to='https://t.me/alshabanov'>Написать мне</ButtonLink>
                  {/* <button
                     type="button"
                     className={cls.button}
                     onClick={() => setIsContactModalOpen(true)}
                  >
                     Связаться со мной
                  </button> */}
               </div>
            </section>
         </div>

         <Modal
            open={isContactModalOpen}
            onClose={() => setIsContactModalOpen(false)}
            title="Связаться со мной"
         >
            <p>Какой-то контект, будет тут.</p>
         </Modal>
      </>
   )
}

export { HomePage };

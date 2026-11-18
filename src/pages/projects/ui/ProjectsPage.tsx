import { Swiper, SwiperSlide, useSwiper, useSwiperSlide } from 'swiper/react';
import { Navigation, } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import cls from './ProjectsPage.module.scss';

function ProjectsPage() {
   return (
      <section className={cls.projects__section}>
         <h2 className={cls.title}>Проекты</h2>
         <div className={cls.projects__slider}>
            <Swiper
               loop={true}
               slidesPerView={3}
               centeredSlides={true}
               navigation={true}
               modules={[Navigation]}
               className={cls.slider}
            >
               <NextSlideButton />
               <SwiperSlide>Slide 1<ProjectSlide title="Слайд" /></SwiperSlide>
               <SwiperSlide>Slide 2<ProjectSlide title="Слайд" /></SwiperSlide>
               <SwiperSlide>Slide 3<ProjectSlide title="Слайд" /></SwiperSlide>
               <SwiperSlide>Slide 4<ProjectSlide title="Слайд" /></SwiperSlide>
               <SwiperSlide>Slide 5<ProjectSlide title="Слайд" /></SwiperSlide>
               <SwiperSlide>Slide 6<ProjectSlide title="Слайд" /></SwiperSlide>
               <SwiperSlide>Slide 7<ProjectSlide title="Слайд" /></SwiperSlide>
               <SwiperSlide>Slide 8<ProjectSlide title="Слайд" /></SwiperSlide>
               <SwiperSlide>Slide 9<ProjectSlide title="Слайд" /></SwiperSlide>
            </Swiper>
         </div>
      </section>
   )
}

function NextSlideButton() {
   const swiper = useSwiper();

   return (
      <button type="button" onClick={() => swiper.slideNext()}>
         Следующий проект
      </button>
   );
}

function ProjectSlide({ title }: { title: string }) {
   const { isActive } = useSwiperSlide();

   return <div>{title}{isActive ? ' — выбран' : ' — не выбран'}</div>;
}
export { ProjectsPage };

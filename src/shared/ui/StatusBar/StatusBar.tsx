import cls from './StatusBar.module.scss'

function StatusBar() {
   return (
      <span className={cls.status__bar}>
         <span className={cls.status__indicator}></span>
         <span className={cls.status__text}>Открыт к предложениям о работе</span>
      </span>
   )
}

export { StatusBar };

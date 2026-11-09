import { Link, type LinkProps } from "react-router";

import cls from './ButtonLink.module.scss';

function ButtonLink(props: LinkProps) {
   return (
      <Link {...props} className={cls.button} />
   )
}

export { ButtonLink };

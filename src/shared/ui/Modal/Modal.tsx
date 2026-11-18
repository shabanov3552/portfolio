import { useEffect, useId, useRef, type ReactNode } from 'react';

import cls from './Modal.module.scss';

interface ModalProps {
   open: boolean;
   onClose: () => void;
   title: string;
   children: ReactNode;
}

function Modal({ open, onClose, title, children }: ModalProps) {
   const dialogRef = useRef<HTMLDialogElement>(null);
   const titleId = useId();

   useEffect(() => {
      const dialog = dialogRef.current;

      if (!dialog) return;

      if (open) {
         delete dialog.dataset.closing;

         if (!dialog.open) dialog.showModal();
      } else if (!open && dialog.open) {
         dialog.dataset.closing = 'true';

         const handleAnimationEnd = (event: AnimationEvent) => {
            if (event.target !== dialog || event.pseudoElement) return;

            dialog.close();
            delete dialog.dataset.closing;
         };

         dialog.addEventListener('animationend', handleAnimationEnd);

         return () => {
            dialog.removeEventListener('animationend', handleAnimationEnd);
         };
      }
   }, [open]);

   return (
      <dialog
         ref={dialogRef}
         className={cls.modal}
         aria-labelledby={titleId}
         onCancel={(event) => {
            event.preventDefault();
            onClose();
         }}
         onClick={(event) => {
            if (event.target !== event.currentTarget) return;

            const { left, right, top, bottom } = event.currentTarget.getBoundingClientRect();

            if (
               event.clientX < left || event.clientX > right ||
               event.clientY < top || event.clientY > bottom
            ) {
               onClose();
            }
         }}
      >
         <div className={cls.modal__header}>
            <h2 id={titleId} className={cls.modal__title}>{title}</h2>
            <button
               type="button"
               className={cls.modal__close}
               aria-label="Закрыть модальное окно"
               onClick={onClose}
               autoFocus
            >
               <span aria-hidden="true">×</span>
            </button>
         </div>
         <div className={cls.modal__content}>{children}</div>
      </dialog>
   );
}

export { Modal };
export type { ModalProps };

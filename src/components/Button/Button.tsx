import React, { CSSProperties, ReactNode } from 'react';

interface IButton extends Pick<CSSProperties, 'color'> {
  type?: 'primary' | 'ghost' | 'outlined';
  variant?: 'long' | 'short';
  size?: 'sm' | 'md' | 'lg';
  pill?: boolean;
  className?: string;
  children: ReactNode;
}

export const ButtonBase: React.FC<IButton> = (props) => {
  return <div className={props.className}>{props.children}</div>;
};

import type { IMenuItem } from '@/types/menu.types';
import type { ReactNode } from 'react';

interface Props {
  items: IMenuItem[];
  title?: string;
  children?: ReactNode;
}

export function Menu({ items, title, children }: Props) {
  return (
    <div>
      {title && <div className="mb-5 opacity-60 text-xxs uppercase font-medium">{title}</div>}
      {items.length === 0 && <div>No items found</div>}
      <ul>
        {items.map((item) => (
          <li key={item.name}>
            <a
              className="flex gap-3 items-center mb-5 group"
              href={item.link}
            >
              {item.icon && <item.icon className="group-hover:text-primary duration-300" />}
              <span className="group-hover:text-primary duration-300 font-medium">{item.name}</span>
            </a>
          </li>
        ))}
      </ul>
      {children}
    </div>
  );
}

/* eslint-disable @typescript-eslint/no-unused-vars */
import { ElementType } from 'react';

interface NotificationIcon {
  icon: ElementType;
}

export const NotificationIcon = ({ icon: Icon }: NotificationIcon) => {
  return <Icon className="w-6 h-6 text-violet-500 mt-3" />;
};

import {IMenuItem} from '../interfaces/appInterfaces';

export const menuItems: IMenuItem[] = [
  {
    name: 'Animation 01',
    icon: 'cube-outline',
    component: 'Animation01',
  },
  {
    name: 'Animation 02',
    icon: 'albums-outline',
    component: 'Animation02',
  },
  {
    name: 'Switches',
    icon: 'toggle-outline',
    component: 'Switch',
  },
  {
    name: 'Alerts',
    icon: 'alert-circle-outline',
    component: 'Alert',
  },
  {
    name: 'TextInputs',
    icon: 'document-text-outline',
    component: 'TextInput',
  },
  {
    name: 'Pull to refresh',
    icon: 'refresh-outline',
    component: 'PullToRefresh',
  },
];

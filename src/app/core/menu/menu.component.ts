import { DOCUMENT } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { MenuItem } from 'primeng/api';
import { ButtonModule } from 'primeng/button';
import { IconFieldModule } from 'primeng/iconfield';
import { InputIconModule } from 'primeng/inputicon';
import { InputTextModule } from 'primeng/inputtext';
import { MenuModule } from 'primeng/menu';
import { TooltipModule } from 'primeng/tooltip';
interface customIcon {
  icon: string;
  tooltip: string;
  command?: Function;
  link?: string;
  routerLink?: string;
}

@Component({
  selector: 'app-menu',
  imports: [
    IconFieldModule,
    InputIconModule,
    MenuModule,
    ButtonModule,
    RouterModule,
    InputTextModule,
    FormsModule,
    TooltipModule,
  ],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.scss',
})
export class MenuComponent {
  document = inject(DOCUMENT);
  darkMode = this.document.documentElement.classList.contains('darkMode');

  menuItems: MenuItem[] = [
    {
      label: 'General',
      items: [
        { label: 'Status', routerLink: '/status' },
        { label: 'Ranks', routerLink: '/ranks' },
      ],
    },
    {
      label: 'Ressources',
      items: [
        { label: 'Map Releases', routerLink: '/releases' },
        { label: 'Downloads', routerLink: '/downloads' },
        { label: 'Skin Database', routerLink: '/skins' },
      ],
    },
    {
      label: 'Community',
      items: [
        { label: 'Wiki', url: 'https://wiki.ddnet.org' },
        { label: 'Tournaments', routerLink: '/tournaments' },
        { label: 'Staff & Contact', routerLink: '/staff' },
      ],
    },
  ];

  icons: customIcon[] = [
    {
      icon: 'pi pi-github',
      tooltip: 'Github',
      link: 'https://github.com/ddnet/',
    },
    {
      icon: 'pi pi-discord',
      tooltip: 'Discord',
      link: 'https://ddnet.org/discord',
    },
    {
      icon: 'pi pi-paypal',
      tooltip: 'Donations',
      routerLink: '/donations',
    },
    {
      icon: this.darkMode ? 'pi pi-moon' : 'pi pi-sun',
      tooltip: 'Switch Theme',
      command: () => this.toggleMode(),
    },
  ];

  toggleMode() {
    this.document.documentElement.classList.toggle('darkMode');
  }

  openLink() {}
}

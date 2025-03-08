import { DOCUMENT } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MenuItem } from 'primeng/api';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { IconField } from 'primeng/iconfield';
import { Image } from 'primeng/image';
import { InputIcon } from 'primeng/inputicon';
import { InputTextModule } from 'primeng/inputtext';
import { Menu } from 'primeng/menu';
import { MenubarModule } from 'primeng/menubar';
@Component({
  selector: 'app-menu',
  imports: [
    Menu,
    Image,
    InputIcon,
    IconField,
    InputTextModule,
    FormsModule,
    ButtonModule,
    CardModule,
    MenubarModule,
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
      items: [{ label: 'Status' }, { label: 'Ranks' }],
    },
    {
      label: 'Ressources',
      items: [
        { label: 'Map Releases' },
        { label: 'Downloads' },
        { label: 'Skin Database' },
      ],
    },
    {
      label: 'Community',
      items: [
        { label: 'Wiki' },
        { label: 'Tournaments' },
        { label: 'Staff & Contact' },
      ],
    },
  ];

  icons = [
    {
      icon: 'pi pi-github',
    },
    {
      icon: 'pi pi-discord',
    },
    {
      icon: 'pi pi-paypal',
    },
    {
      icon: this.darkMode ? 'pi pi-moon' : 'pi pi-sun',
      command: () => this.toggleMode(),
    },
  ];

  toggleMode() {
    this.document.documentElement.classList.toggle('darkMode');
  }
}

import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MenuItem } from 'primeng/api';
import { ButtonModule } from 'primeng/button';
import { IconField } from 'primeng/iconfield';
import { Image } from 'primeng/image';
import { InputIcon } from 'primeng/inputicon';
import { InputTextModule } from 'primeng/inputtext';
import { Menu } from 'primeng/menu';
import { Toolbar } from 'primeng/toolbar';

@Component({
  selector: 'app-menu',
  imports: [
    Menu,
    Image,
    InputIcon,
    IconField,
    InputTextModule,
    FormsModule,
    Toolbar,
    ButtonModule,
  ],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.scss',
})
export class MenuComponent {
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
}

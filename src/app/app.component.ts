import { Component, inject } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { BreadcrumbModule } from 'primeng/breadcrumb';
import { CoreModule } from './core/core.module';

@Component({
  selector: 'app-root',
  imports: [RouterModule, CoreModule, BreadcrumbModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  router = inject(Router);

  items = this.getBreadcrumbItems();
  home = { icon: 'pi pi-home', routerLink: '/' };

  constructor() {
    this.router.events.subscribe(() => {
      this.items = this.getBreadcrumbItems();
    });
  }

  getBreadcrumbItems() {
    const segments = this.router.url.split('/').filter((segment) => segment);
    return segments.map((segment, index) => ({
      label: segment,
      routerLink: '/' + segments.slice(0, index + 1).join('/'),
    }));
  }
}

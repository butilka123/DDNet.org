import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MenuComponent } from './menu/menu.component';

@NgModule({
  declarations: [],
  imports: [CommonModule, MenuComponent],
  exports: [MenuComponent],
})
export class CoreModule {}

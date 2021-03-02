import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from './sidebar/sidebar.component';
import { HeaderComponent } from './header/header.component';
import { BreadcrumbsComponent } from './breadcrumbs/breadcrumbs.component';
import { NopagefoundComponent } from './nopagefound/nopagefound.component';
import { FooterComponent } from './footer/footer.component';




@NgModule({
  declarations: 
  [
    SidebarComponent,
    HeaderComponent,
    BreadcrumbsComponent,
    NopagefoundComponent,
    FooterComponent,
  ],
  exports: 
  [
    SidebarComponent,
    HeaderComponent,
    BreadcrumbsComponent,
    NopagefoundComponent,
    FooterComponent
  ],
  imports: [
    CommonModule
  ]
})
export class SharedModule { }

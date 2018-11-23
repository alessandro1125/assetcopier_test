import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HomeComponent } from './pages/home/home.component';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {MatSidenavModule, MatListModule, MatToolbarModule, MatGridListModule, MatInputModule} from '@angular/material';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { HomeContentComponent } from './pages-content/home-content/home-content.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import {ReactiveFormsModule, FormsModule} from '@angular/forms';
import { ExamplePageComponent } from './tests/example-page/example-page.component';
import { TestHoveringImageComponent } from './tests/test-hovering-image/test-hovering-image.component';
import { TestHeaderNavComponent } from './tests/test-header-nav/test-header-nav.component';
import { GraphDonutComponent } from './graphs/graph-donut/graph-donut.component';
import { AmChartsModule} from '@amcharts/amcharts3-angular';
import { GraphLineSmoothedComponent } from './graphs/graph-line-smoothed/graph-line-smoothed.component';
import { UsersListComponent } from './pages-content/users-list/users-list.component';
import { HtmlDivComponent } from './html-helements/html-div/html-div.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavMenuComponent,
    HomeContentComponent,
    HeaderComponent,
    FooterComponent,
    ExamplePageComponent,
    TestHoveringImageComponent,
    TestHeaderNavComponent,
    GraphDonutComponent,
    GraphLineSmoothedComponent,
    UsersListComponent,
    HtmlDivComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    MatListModule,
    MatToolbarModule,
    MatGridListModule,
    MatInputModule,
    ReactiveFormsModule,
    FormsModule,
    AmChartsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

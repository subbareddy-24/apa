import { NgModule } from '@angular/core';
// import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
// Meterial Module
import { AngularMeterialModule } from './modules/angular-meterial/angular-meterial.module';
// Flex Layout Mocule
import { FlexLayoutModule } from '@angular/flex-layout';
// File Upload Module
import { AngularFileUploaderModule } from 'angular-file-uploader';
// Online Text Editor
import { CKEditorModule } from 'ngx-ckeditor';

// Routing
import { AppRoutingModule } from './app-routing.module';

// Components
import { CardComponent } from './components/dashboard/card/card.component';
import { BreadcrumbComponent } from './components/breadcrumb/breadcrumb.component';

// Shared Components
import { HeaderNavbarComponent } from './shared-components/header-navbar/header-navbar.component';
import { SidebarComponent } from './shared-components/sidebar/sidebar.component';
import { ChatboxComponent } from './components/chatbox/chatbox.component';
import { AppComponent } from './app.component';
// Routing components
import { AboutusComponent } from './shared-components/aboutus/aboutus.component';
import { ContactusComponent } from './shared-components/contactus/contactus.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { MeterialExamplesComponent } from './components/meterial-examples/meterial-examples.component';
// Error pages
import { PageNotFoundComponent } from './errors/pagenotfound/pagenotfound.component';

// Pipes
import { KeysPipe } from './pipes/keys.pipe';

// Service Imports
import { MessagingService } from './services/messaging.service';
import { ScrollTopService } from './services/scroll-top.service';
import { TextEditorComponent } from './shared-components/text-editor/text-editor.component';
import { ImageZoomerComponent } from './shared-components/image-zoomer/image-zoomer.component';
import { FormComponent } from './form/form.component';

@NgModule({
  entryComponents: [TextEditorComponent, ImageZoomerComponent],
  declarations: [
    AboutusComponent,
    ContactusComponent,

    BreadcrumbComponent,
    ChatboxComponent,
    HeaderNavbarComponent,
    SidebarComponent,
    TextEditorComponent,
    ImageZoomerComponent,
    PageNotFoundComponent,

    CardComponent,
    DashboardComponent,

    KeysPipe,
    MeterialExamplesComponent,
    AppComponent,
    FormComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AngularMeterialModule,
    FlexLayoutModule,
    AngularFileUploaderModule,
    CKEditorModule,
    // NgbModule.forRoot(),
    AppRoutingModule
  ],
  providers: [
    MessagingService,
    ScrollTopService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

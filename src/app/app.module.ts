import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { RegisterComponent } from './auth/register/register.component';
import { LoginComponent } from './auth/login/login.component';
import { RegisterSuccessComponent } from './auth/register-success/register-success.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {RouterModule} from "@angular/router";
import {HTTP_INTERCEPTORS, HttpClient, HttpClientModule} from "@angular/common/http";
import {Ng2Webstorage} from "ngx-webstorage";
import { HomeComponent } from './home/home.component';
import { PostComponent } from './post/post.component';
import {EditorModule} from "@tinymce/tinymce-angular";
import { AddPostComponent } from './add-post/add-post.component';
import {HttpClientInterceptor} from "./http-client-interceptor";
import {AuthGuard} from "./auth.guard";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    RegisterComponent,
    LoginComponent,
    RegisterSuccessComponent,
    HomeComponent,
    PostComponent,
    AddPostComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    EditorModule,
    Ng2Webstorage.forRoot(),
    RouterModule.forRoot([
      {path: '', component: HomeComponent},
      {path: 'register', component: RegisterComponent},
      {path: 'post/:id', component: PostComponent},
      {path: 'login', component: LoginComponent},
      {path: 'register-success', component: RegisterSuccessComponent},
      {path: 'home', component: HomeComponent},
      {path: 'add-post', component: AddPostComponent, canActivate: [AuthGuard]}
    ])
  ],
  providers: [{provide: HTTP_INTERCEPTORS, useClass: HttpClientInterceptor, multi: true}],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SoftwareComponent } from './software/software.component';
import { appCustom } from './custom/custom.directive';
import { MyCustomPipe } from './pipes/custom-pipe.pipe';
import { cartTotal } from './pipes/cart.pipe';
import { oneitem } from './pipes/oneitem.pipe';
import { ServiceComponent } from './service/service.component';
import { routers } from './routes/app.routes.module';
import { ChildComponentComponent } from './child-component/child-component.component';
import { FormComponent } from './form/form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpComponent } from './http/http.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { Authinterceptor } from './http/auth-interceptor';

@NgModule({
  declarations: [
    AppComponent,
    SoftwareComponent,
    appCustom,
    MyCustomPipe,
    cartTotal,
    oneitem,
    ServiceComponent,
    ChildComponentComponent,
    FormComponent,
    HttpComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    routers,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: Authinterceptor,
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}

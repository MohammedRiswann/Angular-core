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
  ],
  imports: [BrowserModule, AppRoutingModule, routers],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

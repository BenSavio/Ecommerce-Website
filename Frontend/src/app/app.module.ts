import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { RegisterComponent } from './auth/register/register.component';
import { LoginComponent } from './auth/login/login.component';
import { FormsModule } from '@angular/forms';
import { ProductsComponent } from './product/addproducts/products.component';
import { HttpClientModule } from '@angular/common/http';
import { ProductService } from './services/product.service';
import { AuthService } from './services/auth.service';
import { CartComponent } from './cart/cart.component';
import { CartService } from './services/cart.service';
import { OrderPageComponent } from './order-page/order-page.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    RegisterComponent,
    LoginComponent,
    ProductsComponent,
    CartComponent,
    OrderPageComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [ProductService, AuthService, CartService],
  bootstrap: [AppComponent]
})
export class AppModule { }

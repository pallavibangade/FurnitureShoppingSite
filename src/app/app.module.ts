import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HttpClient } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { SharedComponent } from './shared/shared.component';
import { NavComponent } from './shared/nav/nav.component';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { ProductComponent } from './product/product.component';
import { FilterComponent } from './product/filter/filter.component';
import { ProductListComponent } from './product/product-list/product-list.component';
import { SliderComponent } from './shared/slider/slider.component';
import {NgbModule} from 'node_modules/bootstrap';
import { LoginComponent } from './login/login.component';
import { AdminComponent } from './admin/admin.component';
import { CustomerComponent } from './customer/customer.component';
import { RegistrationComponent } from './registration/registration.component';
import { AddToCartComponent } from './product/add-to-cart/add-to-cart.component';
import { CartItemComponent } from './product/add-to-cart/cart-item/cart-item.component';
import { AddProductComponent } from './product/add-product/add-product.component';
import { UpdateProductComponent } from './product/update-product/update-product.component';
import { AddCustomerComponent } from './customer/add-customer/add-customer.component';
import { UpdateCustomerComponent } from './customer/update-customer/update-customer.component';
import { ProductDetailsComponent } from './product/product-details/product-details.component';
import {AdminDashboardComponent} from './admin-dashboard/admin-dashboard.component';
import { from } from 'rxjs';
import { AboutUsComponent } from './about-us/about-us.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { NavAdminComponent } from './shared/nav-admin/nav-admin.component';
import { NavCustomerComponent } from './shared/nav-customer/nav-customer.component';
import { AdminProductDetailsComponent } from './product/admin-product-details/admin-product-details.component';
import { DataServiceComponent } from './services/data-service/data-service.component';
import {CustomerServiceService} from './services/customer-service.service'

@NgModule({
  declarations: [
    AppComponent,
    SharedComponent,
    NavComponent,
    HeaderComponent,
    FooterComponent,
    ProductComponent,
    FilterComponent,
    ProductListComponent,
    SliderComponent,
   LoginComponent,
    AdminComponent,
    CustomerComponent,
    RegistrationComponent,
    AddToCartComponent,
    CartItemComponent,
    AddProductComponent,
    UpdateProductComponent,
    AddCustomerComponent,
    UpdateCustomerComponent,
    ProductDetailsComponent,
    AdminDashboardComponent,
    AboutUsComponent,
    ContactUsComponent,
    NavAdminComponent,
    NavCustomerComponent,
    AdminProductDetailsComponent,
    DataServiceComponent
    ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [HttpClientModule,CustomerServiceService],
  bootstrap: [AppComponent]
})

export class AppModule { }

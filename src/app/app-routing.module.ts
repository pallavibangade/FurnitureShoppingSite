import { Component, NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import {ProductListComponent} from './product/product-list/product-list.component'
import {ProductComponent} from './product/product.component'
import { ProductDetailsComponent } from './product/product-details/product-details.component';
import { AddToCartComponent } from './product/add-to-cart/add-to-cart.component';
import { AdminComponent } from './admin/admin.component';
import { AdminProductDetailsComponent } from './product/admin-product-details/admin-product-details.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { AddProductComponent } from './product/add-product/add-product.component';
import { UpdateCustomerComponent } from './customer/update-customer/update-customer.component';

const routes: Routes = [
{  path: '',redirectTo:'/product',pathMatch:'full'},
// {  path: '',redirectTo:'/adminDashBoard',pathMatch:'full'},
{path:'product',component:ProductComponent  },
{path:'login',component:LoginComponent},
{path:'registration',component:RegistrationComponent},
{path:'productDetails',component:ProductDetailsComponent}  ,
{path:'addToCart',component:AddToCartComponent},
{path:'getCustomerDetails',component:AdminComponent},
{path:'getProductDetails',component:AdminProductDetailsComponent},
{path:'aboutUs',component:AboutUsComponent},
{path:'contactUs',component:ContactUsComponent},
{path:'productDetails',component:ProductDetailsComponent},
{path:'adminDashBoard',component:AdminDashboardComponent},
{path:'addProduct',component:AddProductComponent},
{path:'updateCustomer',component:UpdateCustomerComponent},
{path:'**',component:ProductComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
export const routingComponent=[LoginComponent,RegistrationComponent]
import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { ShopCartComponent} from './shop-cart/shop-cart.component'
import { ShopListComponent} from './shop-list/shop-list.component'

const routes: Routes = [
    {path:'cart',component:ShopCartComponent},
    {path:'list',component:ShopListComponent}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}

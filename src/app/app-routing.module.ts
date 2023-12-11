import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  // { path: '', redirectTo: '/page1', pathMatch: 'full' },
  // { path: 'page1', component: Page1Component },
  // { path: 'page2', component: Page2Component },
  // { path: 'page3', component: Page3Component },
  // { path: 'page4', component: Page4Component },
  // { path: 'page5', component: Page5Component },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

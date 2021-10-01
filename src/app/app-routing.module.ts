import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateComponent } from './components/create/create.component';
import { EditComponent } from './components/edit/edit.component';
import { HomeComponent } from './components/home/home.component';
import { ViewComponent } from './components/view/view.component';

const routes: Routes = [
  {path:'', redirectTo:'post/home', pathMatch:'full'},
  {path:'post/home', component: HomeComponent},
  {path:'post/:postId/view', component: ViewComponent},
  {path:'post/create', component: CreateComponent},
  {path:'post/:postId/edit', component: EditComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

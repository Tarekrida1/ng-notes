import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminLayoutComponent } from './components/layout/admin-layout/admin-layout.component';
import { UserLayoutComponent } from './components/layout/user-layout/user-layout.component';
import { BlankLayoutComponent } from './components/layout/blank-layout/blank-layout.component';
import { AuthLayoutComponent } from './components/layout/auth-layout/auth-layout.component';


const routes: Routes = [
  {
    path: '',
    component: BlankLayoutComponent,
    children: [
      {
        path: '',
        loadChildren: () => import('./views/pages/pages.module').then(m => m.PagesModule)

      }
          ]
  },
  {
    path: 'auth',
    component: AuthLayoutComponent,
    children: [
      {
        path: '',
        loadChildren: () => import('./views/auth/auth.module').then(m => m.AuthModule)

      }
          ]
  },

  {
    path: 'admin',
    component: AdminLayoutComponent,
        children: [
{
  path: 'posts',
  loadChildren: () => import('./views/posts/posts.module').then(m => m.PostsModule)

}
    ]
  },
  {
    path: 'user',
    component: UserLayoutComponent,
    children: [
{
  path: 'notes',
  loadChildren: () => import('./views/notes/notes.module').then(m => m.NotesModule)

}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

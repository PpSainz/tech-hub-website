import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AssemblerComponent } from '../pages/assembler/assembler.component';
import { NoobComponent } from '../pages/assembler/noob/noob.component';
import { ProComponent } from '../pages/assembler/pro/pro.component';

const routes: Routes = [
  { path: '', component: AssemblerComponent },
  { path: 'noob', component: NoobComponent },
  { path: 'pro', component: ProComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

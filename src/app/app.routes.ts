import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import { HomeComponent } from './home/home.component';
import { ChatComponent } from './chat/chat.component';

const routes: Routes = [
    { 
        path: '', 
        component:HomeComponent,
        pathMatch: 'full' ,
        data: { title: 'Home | CB' }
    },
    {
        path: 'home',
        component: HomeComponent,
        data: { title: 'Home | CB' }
    },
    {
        path: 'chat',
        component: ChatComponent,
        data: { title: 'Chat | CB' }
    },
    { 
        path: '**', 
        component: HomeComponent ,
        data: { title: 'Not Found | CB' }
    }
];

@NgModule({
    imports: [ RouterModule.forRoot(routes) ],
    exports: [ RouterModule ]
})

export class AppRoutingModule {}
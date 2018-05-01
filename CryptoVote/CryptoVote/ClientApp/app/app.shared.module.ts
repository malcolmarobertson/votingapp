import { NgModule } from '@angular/core';  
import { VoterService } from './services/voterroll.service';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule, FormGroup } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';


import { AppComponent } from './components/app/app.component';
import { NavMenuComponent } from './components/navmenu/navmenu.component';
import { HomeComponent } from './components/home/home.component';
import { FetchDataComponent } from './components/fetchdata/fetchdata.component';
import { CounterComponent } from './components/counter/counter.component';
import { FetchVoterComponent } from './components/fetchvoter/fetchvoter.component';
import { createvoter } from './components/addvoter/addvoter.component';


@NgModule({
    declarations: [
        AppComponent,
        NavMenuComponent,
        CounterComponent,
        FetchDataComponent,
        HomeComponent,
        FetchVoterComponent,
        createvoter
    ],
    imports: [
        CommonModule,
        HttpModule,
        FormsModule,
        ReactiveFormsModule,
        RouterModule.forRoot([
            { path: '', redirectTo: 'home', pathMatch: 'full' },
            { path: 'home', component: HomeComponent },
            { path: 'counter', component: CounterComponent },
            { path: 'fetch-data', component: FetchDataComponent },
            { path: 'fetch-voter', component: FetchVoterComponent },
            { path: 'register-voter', component: createvoter },
            { path: 'voter/edit/:id', component: createvoter },  
            { path: '**', redirectTo: 'home' }
        ])
    ],
    providers: [VoterService]  
})
export class AppModuleShared {
}

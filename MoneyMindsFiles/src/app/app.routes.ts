import { Routes } from '@angular/router';
import { DashComponent } from './dash/dash.component';
import { HomeComponent } from './home/home.component';
import { Chapter1Component } from './chapter1/chapter1.component';
import { GameComponent } from './game/game.component';
import { QuizComponent } from './quiz/quiz.component';
import { PricingComponent } from './pricing/pricing.component';

export const routes: Routes = [
    { path: 'pricing', component: PricingComponent},
    { path: 'dashboard', component: DashComponent},
    { path: 'home', component: HomeComponent},
    { path: 'game', component: GameComponent},
    { path: 'chapter1', component: Chapter1Component},
    { path: 'quiz', component: QuizComponent},
    { path: '', redirectTo: '/home', pathMatch: 'full'},
    { path: '**', redirectTo: '/home', pathMatch: 'full'}
];

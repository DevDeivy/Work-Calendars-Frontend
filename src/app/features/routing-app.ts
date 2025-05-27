import { Routes } from "@angular/router";
import { CountryComponent } from "../component/country/country.component";
import { TypeComponent } from "../component/type/type.component";
import { HoliDayComponent } from "../component/holi-day/holi-day.component";
import { ShowComponent } from "../component/show/show.component";
import { ReadComponent } from "./read/read.component";

export const rout: Routes = [
    {path: '', redirectTo: 'home', pathMatch: 'full'},
    {path: 'home', component: ShowComponent},
    {path: 'country', component: CountryComponent},
    {path: 'read/:entity', component: ReadComponent},
    {path: 'type', component: TypeComponent},
    {path: 'holi', component: HoliDayComponent},
    {path: '**', redirectTo: 'home', pathMatch: 'full'},

]
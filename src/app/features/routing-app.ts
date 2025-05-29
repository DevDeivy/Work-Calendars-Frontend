import { Routes } from "@angular/router";
import { ShowComponent } from "../component/show/show.component";
import { ReadComponent } from "./read/read.component";
import { CreateComponent } from "./create/create.component";
import { SearchComponent } from "./search/search.component";
import { UpdateComponent } from "./update/update.component";
import { DeleteComponent } from "./delete/delete.component";

export const rout: Routes = [
    {path: '', redirectTo: 'home', pathMatch: 'full'},
    {path: 'home', component: ShowComponent},
    {path: 'read/:entity', component: ReadComponent},
    {path: 'create/:entity', component: CreateComponent },
    {path: 'search/:entity', component: SearchComponent },
    {path: 'update/:entity', component: UpdateComponent },
    {path: 'delete/:entity', component: DeleteComponent },
    {path: '**', redirectTo: 'home', pathMatch: 'full'},
]
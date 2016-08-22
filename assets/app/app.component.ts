import { Component, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule, JsonpModule} from '@angular/http';
import {NavbarComponent} from "./components/navbar/navbar.component";
import {routing} from "./app.routes";
import {SearchComponent} from "./components/search/search.component";
import {AboutComponent} from "./components/about/about.component";
import {ArtistComponent} from "./components/artist/artist.component";
import {SpotifyService} from "./services/spotify.service";
import {RouterModule} from "@angular/router";

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        JsonpModule,
        RouterModule,
        routing],
    providers: [SpotifyService],
    declarations: [ AppComponent, SearchComponent, AboutComponent, ArtistComponent ],
    bootstrap: [ AppComponent ]
})
@Component({
    moduleId: module.id,
    selector: 'my-app',
    templateUrl: './app.component.html',
    directives: [NavbarComponent],
    entryComponents: [SearchComponent, AboutComponent]
})
export class AppComponent {

}
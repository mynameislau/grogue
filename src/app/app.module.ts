import { NgModule } from '@angular/core';
import { Store, StoreModule } from '@ngrx/store';
import { BrowserModule }  from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { entitiesReducer } from './reducers/entities-reducer';
import { dungeonMapReducer } from './reducers/dungeon-map-reducer';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { StoreLogMonitorModule, useLogMonitor } from '@ngrx/store-log-monitor';
import { EffectsModule } from '@ngrx/effects';
import { TestEffects } from './effects/TestEffects';

@NgModule({
  imports: [
    BrowserModule,
    StoreModule.provideStore({ entities: entitiesReducer, dungeonMap: dungeonMapReducer }),
    StoreDevtoolsModule.instrumentStore({
      monitor: useLogMonitor({
        visible: true,
        position: 'right'
      })
    }),
    StoreLogMonitorModule,
    EffectsModule.run(TestEffects)
  ],
  declarations: [
    AppComponent
  ],
  bootstrap: [ AppComponent ],
  providers: [
  ]
})

export class AppModule { }

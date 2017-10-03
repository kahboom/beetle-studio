/**
 * @license
 * Copyright 2017 JBoss Inc
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from "@angular/router";

import { ActivitiesModule } from "@activities/activities.module";
import { AppComponent } from '@app/app.component';
import { ConnectionsModule } from "@connections/connections.module";
import { CoreModule } from "@core/core.module";
import { SharedModule } from "@shared/shared.module";
import {AppRouting} from "@app/app.routing";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    AppRouting,
    ActivitiesModule,
    BrowserModule,
    ConnectionsModule,
    CoreModule,
    RouterModule,
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
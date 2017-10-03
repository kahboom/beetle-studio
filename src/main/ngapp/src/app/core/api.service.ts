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

import { Injectable } from '@angular/core';
import { environment } from '@environments/environment';
import {Http, Headers, RequestOptions} from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

export const KOMODO_WORKSPACE_URL = environment.komodoWorkspaceUrl;

@Injectable()
export class ApiService {

  /**
   * Get the Auth RequestOptions
   * TODO: User and password are currently hardcoded to the DSB kit server credentials (dsbUser | 1demo-user1)
   * @returns {RequestOptions}
   */
  protected getAuthRequestOptions(): RequestOptions {
    const headers = new Headers({ 'Authorization': 'Basic ' +  btoa('dsbUser:1demo-user1') });
    const options = new RequestOptions({ headers: headers });
    return options;
  }

  protected handleError (error: Response | any) {
    console.error('ApiService::handleError', error);
    return Observable.throw(error);
  }

}
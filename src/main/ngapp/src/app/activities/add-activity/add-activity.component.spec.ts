import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddActivityComponent } from './add-activity.component';
import {FormsModule} from "@angular/forms";
import {RouterTestingModule} from "@angular/router/testing";
import {HttpModule} from '@angular/http';
import {BreadcrumbComponent} from '@core/breadcrumbs/breadcrumb/breadcrumb.component';
import {BreadcrumbsComponent} from '@core/breadcrumbs/breadcrumbs.component';
import {AddActivityFormComponent} from '@activities/shared/add-activity-form/add-activity-form.component';
import {ActivityService} from '@activities/shared/activity.service';
import {MockActivityService} from '@activities/shared/mock-activity.service';

describe('AddActivityComponent', () => {
  let component: AddActivityComponent;
  let fixture: ComponentFixture<AddActivityComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ FormsModule, RouterTestingModule, HttpModule],
      declarations: [ AddActivityComponent, AddActivityFormComponent, BreadcrumbComponent, BreadcrumbsComponent ],
      providers: [
        { provide: ActivityService, useClass: MockActivityService },
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddActivityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});

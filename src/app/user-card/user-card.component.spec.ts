import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Observable, of } from 'rxjs';
import { UserService } from '../user.service';
import { UserCardComponent } from './user-card.component';

describe('UserCardComponent', () => {
  let component: UserCardComponent;
  let fixture: ComponentFixture<UserCardComponent>;
  let userService: UserService;
  let spy:jasmine.Spy;
  let mockUser;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientModule],
      declarations: [ UserCardComponent ],
      providers: [UserService]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserCardComponent);
    component = fixture.componentInstance;
    userService = fixture.debugElement.injector.get(UserService)
    mockUser = { name: 'John' }
    spy = spyOn(userService, 'getOne').and.returnValue(of(mockUser))
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call UserService', () => {
    component.someMethod();
    expect(spy.calls.any()).toBeTruthy();
  });
  it('should call UserService', () => {
    component.someMethod();
    expect(component.user).toEqual(mockUser)
  });
});

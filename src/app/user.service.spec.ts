import { HttpClientModule } from '@angular/common/http';
import { inject, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { UserService } from './user.service';

describe('UserService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [UserService]
    });
  });

  it('should be created', inject([UserService],(service: UserService) => {
    expect(service).toBeTruthy();
  }));

  it('should get one user', inject([UserService, HttpTestingController],(service: UserService, backend: HttpTestingController) => {
    const mockUser= {name: 'john'}
    service.getOne(1).subscribe(user=>{
      expect(user).toEqual(mockUser);
    });
    backend.expectOne({
      method: 'GET',
      url: '/users/1'
    }).flush(mockUser)
  }));

  it('should get list of users', inject([UserService, HttpTestingController],(service: UserService, backend: HttpTestingController) => {
    const mockUsers= [{name: 'john'}]
    service.getAll().subscribe(users=>{
      expect(users).toEqual(mockUsers);
    });

    backend.expectOne({
      method: 'GET',
      url: '/users'
    }).flush(mockUsers)
  }));
});

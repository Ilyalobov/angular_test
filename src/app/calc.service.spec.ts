import { inject, TestBed , fakeAsync, flush, tick } from '@angular/core/testing';

import { CalcService } from './calc.service';

describe('CalcService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CalcService]
    });
    
  });

  it('should be created', inject([CalcService],(service: CalcService) => {
    expect(service).toBeTruthy();
  }));

  it('should return sum', inject([CalcService],(service: CalcService) => {
    expect(service.sum(3,8)).toBe(11);
  }));

  it('should return sum async', fakeAsync(inject([CalcService],(service: CalcService) => {
    service.sumAsync(3,8).then(result=>{
          expect(result).toBe(11);
    });
    //flush(); //сбрасывать все асинхронности 
    tick(3000); //подождать 3 секунды 
  })));
});

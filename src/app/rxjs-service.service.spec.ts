import { TestBed } from '@angular/core/testing';
import { TestScheduler } from 'rxjs/testing';
import { RxjsServiceService } from './rxjs-service.service';
import { map, mergeMap, tap, throttleTime } from 'rxjs/operators';
import { cold, hot } from 'jasmine-marbles';
import { TapFormatter } from 'tslint/lib/formatters';

describe('RxjsServiceService', () => {
  let service: RxjsServiceService;

// const testScheduler = new TestScheduler((actual, expected) => {
//   // asserting the two objects are equal
//   // e.g. using chai.
//   expect(actual).deep.equal(expected);
// });

// This test will actually run *synchronously*


  beforeEach(() => {
    TestBed.configureTestingModule({ providers: [RxjsServiceService]});
    service = TestBed.inject(RxjsServiceService);
  });
  it('should be created', () => {
    expect(service).toBeTruthy();
  });
  it('generate the stream correctly', () => {
    //const source =        hot('-a-^b---c-|');
    /*const subscription = cold('^------!');
    const main  =        cold('^------!');
    const first  =       cold('^------!');
    const second =       cold('^------!');
    const expected =     cold('^------!');
    const source = service.subscribeToShipmentDayFirst(main, first, second);
    */
    const values =    { a: 1 , b: 2, c: 3};
    // const obs1 =     cold('-a-------a--', values);
    // const obs2 =     cold('-a-------a--', values);
    // const obs3 =     cold('-a-------a--', values);
    // const expected = cold('-a----------', values);
    const obs1 =     cold('-a-', {a:1});
    const obs2 =     cold('-a-', {a:1});
    //const expected = cold('-bac-bac', values );
    const expected = hot('--a', {a:1});
    const result =  service.subscribeToShipmentDayFirst(obs1, obs2);
    result.pipe(tap(r => {
      console.log('asdasdada', r)
    }));
    result.subscribe(r=>{
                    expect(r).toBeObservable(expected);
      })
    /*
    expect(source).toBeObservable(expected);
    expect(source).toHaveSubscriptions(subscription);*/
  });
  
  it('should ', () => {
    const things   = 'a-b-a';
    const expected =  't-f-t';
    // spy on
    spyOn(service['things'], 'asObservable').and.returnValue(hot(things, {
      a: ['a', 'b'],
      b: []
    }));

    expect(service.things$).toBeObservable(cold(expected, {
      t: true,
      f: false
    }));
  });
});

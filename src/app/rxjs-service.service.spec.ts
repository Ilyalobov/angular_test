import { TestBed } from '@angular/core/testing';
import { TestScheduler } from 'rxjs/testing';
import { RxjsServiceService } from './rxjs-service.service';
import { map, mergeMap, throttleTime } from 'rxjs/operators';
import { cold, hot } from 'jasmine-marbles';

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

    const values =    { a: 1 };
    // const obs1 =     cold('-a-------a--', values);
    // const obs2 =     cold('-a-------a--', values);
    // const obs3 =     cold('-a-------a--', values);
    // const expected = cold('-a----------', values);


    const obs1 =     cold('-a|', values);
    const obs2 =     cold('-a|', values);
    const obs3 =     cold('-a|', values);
    const expected = cold('-a|', values);

    const result =  service.subscribeToShipmentDayFirst(obs1, obs2, obs3);
    expect(result).toBeObservable(expected);

    /*
    expect(source).toBeObservable(expected);
    expect(source).toHaveSubscriptions(subscription);*/
  });
});

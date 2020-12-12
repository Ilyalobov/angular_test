import { TestBed } from '@angular/core/testing';
import { TestScheduler } from 'rxjs/testing';
import { RxjsServiceService } from './rxjs-service.service';
import { map, mergeMap, multicast, tap, throttleTime } from 'rxjs/operators';
import { cold, hot } from 'jasmine-marbles';
import { TapFormatter } from 'tslint/lib/formatters';
import { of, timer, Subject, concat } from 'rxjs';
import { createCall } from 'typescript';
describe('RxjsServiceService', () => {
  let service: RxjsServiceService;
 let spy:jasmine.Spy;
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
  xit('generate the stream correctly', () => {
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

  xit('should dayTest', () => {

    const things   = 'a-b-a';

    const expected =  'a-b-a';
    // spy on
    // service.firstObs= hot(things, {
    //   a: 1,
    //   b: 2
    // });

 
    spyOnProperty(service, 'firstObs', 'get').and.returnValue(cold(things,{a: ['a', 'b'],b: []}))
    
    //spyOnProperty(service, )
    spyOn(service['dayTest'], 'asObservable').and.returnValue(hot(things, {
      a: ['a', 'b'],
      b: []
    }));
    expect(service.dayTest$).toBeObservable(cold(expected, {
      a: ['a', 'b'],
      b: []
    }));
  });

  it('should work with a hot observable', () => {
    const provided = new Subject<number>();

    const expected = hot('--a--b', { a: 1, b: 2 });
    expect(expected.pipe(tap(v => provided.next(v)))).toBeObservable(expected);
  });
  it('not fucking test  ', () => {
    const provided = new Subject<number>();
    const obs1 =     cold('-a-', {a:1});
    const obs2 =     cold('-a-', {a:1});
    const expected =  hot('-a-', {a:undefined});
    let ss=service.subscribeToShipmentDayFirst(obs1, obs2);
    expect(ss.pipe(map(v=> provided.next(v)))).toBeObservable(expected)
  });
});

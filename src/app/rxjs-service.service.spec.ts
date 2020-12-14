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
  it('should work with a hot observable', () => {
    const provided = new Subject<number>();
    const expected = hot('--a--b', { a: 1, b: 2 });
    expect(expected.pipe(tap(v => provided.next(v)))).toBeObservable(expected);
  });
  it('is complited Test', () => {
    const provided = new Subject<number>();
    const obs1 =     cold('-a-', {a:1});
    const obs2 =     cold('-a-', {a:1});
    const expected =  hot('-a-', {a: undefined});
    let result=service.justTwoObservebels(obs1, obs2);
    expect(result.pipe(map(v=> provided.next(v)))).toBeObservable(expected)
  });
 it('is complited Test with params', () => {
  const values = { a: 10, b: 30, x: 20, y: 40 };
  const obs1 =     cold("-a-----a--b-|", values);
  const obs2 =     cold("a-a-a|", values);
  const expected = cold("-x-x-x-x-xy-y-y|", values);

  let result=service.SubscribeWithParams(obs1, obs2);
  expect(result).toBeObservable(expected)
 });
});

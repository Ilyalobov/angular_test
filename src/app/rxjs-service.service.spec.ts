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
    let ss=service.justTwoObservebels(obs1, obs2);
    expect(ss.pipe(map(v=> provided.next(v)))).toBeObservable(expected)
  });
 it('is complited Test with params', () => {
  const obs1 =     cold('-a-', {a:1});
  const obs2 =     cold('-a-', {a:1});
  const test =     cold('-a-', {a:1});
  //const expected =  hot('-a-', {a: undefined});
  let ss=service.SubscribeWithParams(obs1, obs2);
  ss.subscribe(e=>console.log('asdasd',e))
  expect(ss).toBeObservable(test)
 });
});

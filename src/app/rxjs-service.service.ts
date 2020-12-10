import { ConnectableObservable, of, Subject, Observable, BehaviorSubject } from 'rxjs';
import { concatAll, map, mergeMap, multicast, switchMap, tap } from 'rxjs/operators';
import { flatMap, first } from 'rxjs/internal/operators';

export class RxjsServiceService {

    // tslint:disable-next-line:typedef max-line-length
    public  static f = 0;
    public  static s = 0;
    public subscribeToShipmentDayFirst(mainObs: Observable<number>, firstObs: Observable<number>): Observable<number> {
        const observable = mainObs.pipe(
            tap(r => {
                RxjsServiceService.f++;
                console.log('first', r, 'RxjsServiceService.f', RxjsServiceService.f );
            }),
            switchMap(r => firstObs.pipe(tap(d => {
                RxjsServiceService.s++;
                console.log('second', d, 'RxjsServiceService.f', RxjsServiceService.s );
            }))),
            multicast(new Subject())
        ) as ConnectableObservable<number>;
        observable.connect();
        return observable;
    }
}



import { ConnectableObservable, of, Subject, Observable } from 'rxjs';
import { concatAll, map, mergeMap, multicast } from 'rxjs/operators';
import { flatMap, first } from 'rxjs/internal/operators';

export class RxjsServiceService {

    // tslint:disable-next-line:typedef max-line-length
    public subscribeToShipmentDayFirst(mainObs: Observable<number>, firstObs: Observable<number>, second: Observable<number>): Observable<number> {
        const observable = of(mainObs).pipe(
            map(r => of(firstObs)),
            //flatMap(r => of(second)),
            //concatAll(),
            //first(),
            multicast(() => new Subject())
        ) as ConnectableObservable<number>;
        observable.connect();
        return observable;
    }
}

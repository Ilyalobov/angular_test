import { ConnectableObservable, of, Subject, Observable, BehaviorSubject } from 'rxjs';
import { concatAll, filter, map, mergeMap, multicast, switchMap, tap } from 'rxjs/operators';
import { flatMap, first } from 'rxjs/internal/operators';

export class RxjsServiceService {

    // tslint:disable-next-line:typedef max-line-length
    public  static f = 0;
    public  static s = 0;


    private things = new BehaviorSubject<Array<string>>([]);


    public get things$(): Observable<boolean> {
         return this.things.asObservable().pipe(map((things) => things.length > 0))
    }
    constructor(){
        //this.firstObs=new Observable<number>();
    }
    public justTwoObservebels(mainObs: Observable<number>, firstObs: Observable<number>): Observable<number> {
        let response= mainObs.pipe(
            map(r=> firstObs),
            multicast(new Subject())
        ) as ConnectableObservable<number>
        response.connect();
        return response;
    }




    public SubscribeWithParams(mainObs: Observable<number>, firstObs: Observable<number>): Observable<number> {
        return mainObs.pipe(
            switchMap(x => firstObs.pipe(map(y => x + y))),
        );
    }
}



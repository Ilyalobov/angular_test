import { ConnectableObservable, of, Subject, Observable, BehaviorSubject } from 'rxjs';
import { concatAll, map, mergeMap, multicast, switchMap, tap } from 'rxjs/operators';
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


    
    
    public dayTest =  new Subject();
    public firstObs : Observable<boolean>;

    public get dayTest$(): Observable<boolean> {
        return this.dayTest.asObservable().pipe(
            // tap(r => {
            //     RxjsServiceService.f++;
            //     console.log('first', r, 'RxjsServiceService.f', RxjsServiceService.f );
            // }),
            map(r=> this.firstObs),
            // switchMap(r => firstObs.pipe(tap(d => {
            //     RxjsServiceService.s++;
            //     console.log('second', d, 'RxjsServiceService.f', RxjsServiceService.s );
            // }))),
            multicast(new Subject())
        ) as ConnectableObservable<boolean>;
    }

    public subscribeToShipmentDayFirst(mainObs: Observable<number>, firstObs: Observable<number>): Observable<number> {
        let cc= mainObs.pipe(
            map(r=> firstObs),
            multicast(new Subject())
        ) as ConnectableObservable<number>
        cc.connect();
       
        return cc;
    }
}



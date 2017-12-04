import { Observable } from 'rxjs/Rx';

const documentElement = document.documentElement;

export const clickEpic = (action$) =>
    action$.filter((action) => action.type === 'CLICKS')
        .mergeMap(() => anyMove$);

const mouseEnd$ = Observable
    .fromEvent(documentElement, 'mouseup')
    .map(({ pageX, pageY }) => {
        console.log(event);

        return {
            type: 'INPUT__CLICK',
            payload: {
                x: pageX,
                y: pageY
            }
        };
    });

const touchEnd$ = Observable
    .fromEvent(documentElement, 'touchend')
    .map((event) => {
        console.log(event);

        return {
            type: 'INPUT__CLICK',
        };
    });

const anyMove$ = Observable.merge(mouseEnd$, touchEnd$);

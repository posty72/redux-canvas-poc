import { Observable } from 'rxjs/Rx';

const documentElement = document.documentElement;

export const movementEpic = (action$) =>
    action$.filter((action) => action.type.endsWith('__MOVE_START'))
        .mergeMap(() => Observable.merge(
            Observable
                .fromEvent(documentElement, 'mousemove')
                .map((event) => ({
                    type: 'INPUT__MOVEMENT',
                    payload: {
                        x: event.clientX,
                        y: event.clientY
                    }
                })),
            Observable
                .fromEvent(documentElement, 'touchmove')
                .map((event) => ({
                    type: 'INPUT__MOVEMENT',
                    payload: {
                        x: event.clientX,
                        y: event.clientY
                    }
                }))))
        .takeUntil(action$.filter((action) => action.type.endsWith('__MOVE_STOP')));

import { fromEvent } from 'rxjs';

const input = document.getElementById('input-id')
const btnClickSource$ = fromEvent(input, 'click');

btnClickSource$.subscribe(
  (e) => console.log(e)
)
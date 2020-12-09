import { pid } from 'process';
import { pipe } from 'rxjs';
import { ReversePipe } from './reverse.pipe';

describe('ReversePipe', () => {
  let pipe;
  beforeEach(() => {
    pipe = new ReversePipe();
  })

  it('create an instance', () => {
    expect(pipe).toBeTruthy();
  });
  it('should transform', () => {
    
    expect(pipe.transform('123')).toBe('321');
  });
  it('should throw an error', () => {
    expect(()=>
              pipe.transform({x: 5})
              ).toThrowError('ReversePipe: Not a string!')
  });
});

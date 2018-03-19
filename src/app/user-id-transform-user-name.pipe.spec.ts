import { UserIdTransformUserNamePipe } from './user-id-transform-user-name.pipe';

describe('UserIdTransformUserNamePipe', () => {
  it('create an instance', () => {
    const pipe = new UserIdTransformUserNamePipe();
    expect(pipe).toBeTruthy();
  });
});

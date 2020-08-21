import jwt from 'jsonwebtoken';

describe('Failure', () => {
  it('This should not fail', () => {
    expect(() => jwt.sign({}, 'secret')).to.not.throw();
  });
});

import { assert } from 'chai';

import { makeError } from '&utils/makeError';

describe('Unit Testing makeError ...', () => {
  const expectedResult = { message: 'testing makeError', status: 500 };

  it('should check if makeError is a function', () => {
    assert.isFunction(makeError);

    const { status, message } = makeError(
      expectedResult.message,
      expectedResult.status,
    );

    assert.strictEqual(status, expectedResult.status);
    assert.strictEqual(message, expectedResult.message);
  });
});

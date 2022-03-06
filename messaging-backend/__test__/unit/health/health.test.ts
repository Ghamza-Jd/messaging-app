import { assert } from 'chai';

import { getHealthService } from '&/src/modules/health/service/get';

describe('Unit Testing getHealthService ...', () => {
  it('Should check the status and uptime', (done) => {
    assert.isFunction(getHealthService);
    const { status, uptime } = getHealthService();
    assert.equal(status, 'OK');
    assert.isNumber(uptime);
    done();
  });
});

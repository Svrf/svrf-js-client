import SVRF from '../../src';

describe('the main module', () => {
  it('exports api client', () => {
    expect(SVRF).toBeDefined();
  });

  it('exports all enums', () => {
    const {enums} = SVRF;

    expect(enums).toBeDefined();

    expect(enums.category).toBeDefined();
    expect(enums.mediaType).toBeDefined();
    expect(enums.stereoscopicType).toBeDefined();
  });
});

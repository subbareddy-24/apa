import { AngularMeterialModule } from './angular-meterial.module';

describe('AngularMeterialModule', () => {
  let angularMeterialModule: AngularMeterialModule;

  beforeEach(() => {
    angularMeterialModule = new AngularMeterialModule();
  });

  it('should create an instance', () => {
    expect(angularMeterialModule).toBeTruthy();
  });
});

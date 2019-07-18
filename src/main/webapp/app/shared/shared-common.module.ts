import { NgModule } from '@angular/core';

import { TestapplicationSharedLibsModule, JhiAlertComponent, JhiAlertErrorComponent } from './';

@NgModule({
  imports: [TestapplicationSharedLibsModule],
  declarations: [JhiAlertComponent, JhiAlertErrorComponent],
  exports: [TestapplicationSharedLibsModule, JhiAlertComponent, JhiAlertErrorComponent]
})
export class TestapplicationSharedCommonModule {}

import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { TestapplicationSharedCommonModule, JhiLoginModalComponent, HasAnyAuthorityDirective } from './';

@NgModule({
  imports: [TestapplicationSharedCommonModule],
  declarations: [JhiLoginModalComponent, HasAnyAuthorityDirective],
  entryComponents: [JhiLoginModalComponent],
  exports: [TestapplicationSharedCommonModule, JhiLoginModalComponent, HasAnyAuthorityDirective],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class TestapplicationSharedModule {
  static forRoot() {
    return {
      ngModule: TestapplicationSharedModule
    };
  }
}

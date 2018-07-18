import { NgModule } from '@angular/core';

import { FirstjhSharedLibsModule, JhiAlertComponent, JhiAlertErrorComponent } from './';

@NgModule({
    imports: [FirstjhSharedLibsModule],
    declarations: [JhiAlertComponent, JhiAlertErrorComponent],
    exports: [FirstjhSharedLibsModule, JhiAlertComponent, JhiAlertErrorComponent]
})
export class FirstjhSharedCommonModule {}

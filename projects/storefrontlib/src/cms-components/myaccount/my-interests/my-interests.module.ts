import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ListNavigationModule } from '../../../shared/components/list-navigation/list-navigation.module';
import { MyInterestsComponent } from './my-interests.component';
import { MediaModule } from '../../../shared/components/media/media.module';

import {
  ConfigModule,
  CmsConfig,
  I18nModule,
  UrlModule,
  ProductInterestsModule,
} from '@spartacus/core';

@NgModule({
  declarations: [MyInterestsComponent],
  imports: [
    CommonModule,
    I18nModule,
    ConfigModule.withConfig(<CmsConfig>{
      cmsComponents: {
        MyInterestsComponent: {
          selector: 'cx-my-interests',
        },
      },
    }),
    RouterModule,
    ListNavigationModule,
    I18nModule,
    UrlModule,
    MediaModule,
    ProductInterestsModule,
  ],
  exports: [MyInterestsComponent],
  entryComponents: [MyInterestsComponent],
})
export class MyInterestsModule {}
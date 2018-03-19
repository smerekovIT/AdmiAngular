import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserIdTransformUserNamePipe } from '../user-id-transform-user-name.pipe'

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [UserIdTransformUserNamePipe],
  exports: [UserIdTransformUserNamePipe]
})
export class TransformModule { }

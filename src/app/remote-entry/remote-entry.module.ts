import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CAMERA_ROUTES } from '../app-routing.module';

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forChild(CAMERA_ROUTES)],
})
export class RemoteEntryModule {}

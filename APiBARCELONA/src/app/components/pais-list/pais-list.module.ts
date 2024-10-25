import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PaisListComponent } from './pais-list.component';

@NgModule({
  declarations: [PaisListComponent],
  imports: [
    CommonModule 
  ],
  exports: [PaisListComponent]
})
export class PaisListModule { }
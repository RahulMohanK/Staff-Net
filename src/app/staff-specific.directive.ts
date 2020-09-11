import { Directive, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appStaffSpecific]',
  exportAs: 'staffspecificdirective'
})
export class StaffSpecificDirective {

  constructor(public viewContainerRef: ViewContainerRef) { }

}

import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineInterfaceEditRotateAngleRotateAngleCompanyOfficeSuppliesWorkIcon],svg[streamline-interface-edit-rotate-angle-rotate-angle-company-office-supplies-work-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M.5.5v13h13"></svg:path><svg:path d="M7.5 13.5a7 7 0 0 0-7-7m0 7L3 11m2.5-2.5L7 7m2-2l1.5-1.5m2-2l1-1"></svg:path></svg:g>`,
})
export class StreamlineInterfaceEditRotateAngleRotateAngleCompanyOfficeSuppliesWorkIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

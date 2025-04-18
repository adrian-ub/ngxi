import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineInterfaceEditColorDropPickColorDropPickCompanyOfficeSuppliesWorkIcon],svg[streamline-interface-edit-color-drop-pick-color-drop-pick-company-office-supplies-work-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M12 9C12 5.5 7 .5 7 .5S2 5.5 2 9a4.77 4.77 0 0 0 5 4.5A4.77 4.77 0 0 0 12 9ZM7 .5v13m2.5-.6V3.44"></svg:path>`,
})
export class StreamlineInterfaceEditColorDropPickColorDropPickCompanyOfficeSuppliesWorkIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

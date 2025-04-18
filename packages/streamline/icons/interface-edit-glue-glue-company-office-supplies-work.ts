import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineInterfaceEditGlueGlueCompanyOfficeSuppliesWorkIcon],svg[streamline-interface-edit-glue-glue-company-office-supplies-work-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M11.5 8v4.5a1 1 0 0 1-1 1h-7a1 1 0 0 1-1-1V8A2.5 2.5 0 0 1 5 5.5h4A2.5 2.5 0 0 1 11.5 8ZM7.5.5h-1L5 5.5h4L7.5.5zM5 11h4M2.5 8.5h9"></svg:path>`,
})
export class StreamlineInterfaceEditGlueGlueCompanyOfficeSuppliesWorkIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

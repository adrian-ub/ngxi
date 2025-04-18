import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineInterfaceEditPrinterPrinterCompanyOfficeSuppliesWorkIcon],svg[streamline-interface-edit-printer-printer-company-office-supplies-work-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M2.5 8.5h9a1 1 0 0 1 1 1v4h0h-11h0v-4a1 1 0 0 1 1-1Z"></svg:path><svg:path d="M1.5 9.5a1 1 0 0 1-1-1v-2a1 1 0 0 1 1-1h11a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1M3 .5h8v5H3zM4 11h6"></svg:path></svg:g>`,
})
export class StreamlineInterfaceEditPrinterPrinterCompanyOfficeSuppliesWorkIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

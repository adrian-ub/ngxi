import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineInterfaceEditColorPaletteColorPaletteCompanyOfficeSuppliesWorkIcon],svg[streamline-interface-edit-color-palette-color-palette-company-office-supplies-work-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:circle cx="4.5" cy="9" r="4"></svg:circle><svg:circle cx="9.5" cy="9" r="4"></svg:circle><svg:circle cx="7" cy="5" r="4"></svg:circle></svg:g>`,
})
export class StreamlineInterfaceEditColorPaletteColorPaletteCompanyOfficeSuppliesWorkIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

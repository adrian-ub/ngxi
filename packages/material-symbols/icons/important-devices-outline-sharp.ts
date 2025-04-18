import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsImportantDevicesOutlineSharpIcon],svg[material-symbols-important-devices-outline-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 21v-9.95h6V21zm1-2h4v-5.95h-4zm-9 2v-2h2v-2H2V3h18v6.05h-2V5H4v10h10v2h-2v2h2v2zm.7-7.25L11 12l2.3 1.75l-.85-2.85l2.3-1.85H11.9l-.9-2.8l-.9 2.8H7.25l2.3 1.85zM11 10"></svg:path>`,
})
export class MaterialSymbolsImportantDevicesOutlineSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

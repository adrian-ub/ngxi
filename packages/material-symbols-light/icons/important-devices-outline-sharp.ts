import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightImportantDevicesOutlineSharpIcon],svg[material-symbols-light-important-devices-outline-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15.692 20v-8.796H21V20zm.77-1.77h3.769v-5.257h-3.77zM8.154 20v-1H10.5v-3H3V4h16v5.204h-1V5H4v10h9.692v1H11.5v3h2.346v1zm.969-6.866L11 11.616l1.877 1.519l-.696-2.389l1.896-1.542h-2.339L11 6.98l-.738 2.223h-2.34l1.896 1.542zM11 10"></svg:path>`,
})
export class MaterialSymbolsLightImportantDevicesOutlineSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

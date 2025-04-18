import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightImportantDevicesSharpIcon],svg[material-symbols-light-important-devices-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15.692 20v-8.796H21V20zm.77-1.77h3.769v-5.257h-3.77zM19 4v5.204h-7.261L11 6.98l-.738 2.223h-2.34l1.896 1.542l-.696 2.389L11 11.615l1.877 1.52l-.696-2.389l1.511-1.23V16H11.5v3h2.346v1H8.154v-1H10.5v-3H3V4z"></svg:path>`,
})
export class MaterialSymbolsLightImportantDevicesSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

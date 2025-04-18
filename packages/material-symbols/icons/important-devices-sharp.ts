import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsImportantDevicesSharpIcon],svg[material-symbols-important-devices-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 21v-9.95h6V21zm1-2h4v-5.95h-4zm3-16v6.05h-8.1l-.9-2.8l-.9 2.8H7.25l2.3 1.85l-.85 2.85L11 12l2.3 1.75l-.85-2.85L14 9.65V17h-2v2h2v2H8v-2h2v-2H2V3z"></svg:path>`,
})
export class MaterialSymbolsImportantDevicesSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

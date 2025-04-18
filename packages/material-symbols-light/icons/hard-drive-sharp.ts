import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightHardDriveSharpIcon],svg[material-symbols-light-hard-drive-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17.113 14.846q.416 0 .709-.29q.294-.292.294-.707t-.291-.71q-.292-.293-.707-.293q-.416 0-.71.291t-.292.707t.29.709t.707.293M21 9.654H3l3.404-3.5h11.192zM3 17.423v-6.77h18v6.77z"></svg:path>`,
})
export class MaterialSymbolsLightHardDriveSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

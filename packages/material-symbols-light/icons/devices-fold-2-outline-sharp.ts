import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightDevicesFold2OutlineSharpIcon],svg[material-symbols-light-devices-fold-2-outline-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6.02 20V4h12.276l3.404 8.5h-3.488V20zm3.592-8.5h10.6L17.619 5H7.02zM7.018 19h10.193v-6.5H8.935L7.018 7.721zm6.597-10.75"></svg:path>`,
})
export class MaterialSymbolsLightDevicesFold2OutlineSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

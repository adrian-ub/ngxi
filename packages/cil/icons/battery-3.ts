import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[cilBattery3Icon],svg[cil-battery-3-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M80 160h32v200H80zm64 0h32v200h-32zm64 0h32v200h-32z"></svg:path><svg:path fill="currentColor" d="M432 176v-56.41A23.825 23.825 0 0 0 408 96H39.986a23.825 23.825 0 0 0-24 23.59v280.82a23.825 23.825 0 0 0 24 23.59H408a23.825 23.825 0 0 0 24-23.59V344h64V176Zm32 136h-64v80H47.986V128H400v80h64Z"></svg:path>`,
})
export class CilBattery3Icon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

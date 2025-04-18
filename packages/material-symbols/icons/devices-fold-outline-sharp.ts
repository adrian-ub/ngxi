import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsDevicesFoldOutlineSharpIcon],svg[material-symbols-devices-fold-outline-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10 21V2.975l7-3.05V3h5v18zm2-3.025l3-1.3V3l-3 1.3zM14.675 19H20V5h-3v13.025zM12 17.975V4.3zM2 5V3h2v2zm0 16v-2h2v2zm0-4v-2h2v2zm0-4v-2h2v2zm0-4V7h2v2zm4-4V3h2v2zm0 16v-2h2v2z"></svg:path>`,
})
export class MaterialSymbolsDevicesFoldOutlineSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

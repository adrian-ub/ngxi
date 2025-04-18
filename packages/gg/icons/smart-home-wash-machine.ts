import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ggSmartHomeWashMachineIcon],svg[gg-smart-home-wash-machine-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M6 4h12a1 1 0 0 1 1 1v3H5V5a1 1 0 0 1 1-1m13 15v-9H5v9a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1M3 5a3 3 0 0 1 3-3h12a3 3 0 0 1 3 3v14a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3zm4 0a1 1 0 0 0 0 2h2a1 1 0 0 0 0-2zm7 2a1 1 0 1 0 0-2a1 1 0 0 0 0 2m4-1a1 1 0 1 1-2 0a1 1 0 0 1 2 0m-4 9a2 2 0 1 1-4 0a2 2 0 0 1 4 0m2 0a4 4 0 1 1-8 0a4 4 0 0 1 8 0" clip-rule="evenodd"></svg:path>`,
})
export class GgSmartHomeWashMachineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

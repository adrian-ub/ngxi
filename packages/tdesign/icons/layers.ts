import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tdesignLayersIcon],svg[tdesign-layers-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m12 1.917l10.1 4.208L12 10.333L1.9 6.125zM7.1 6.125L12 8.166l4.9-2.041L12 4.083zM2 9.98l10 4.308L22 9.98v2.181l-9.604 4.134l-.396.17l-.395-.17L2 12.162zm0 6l10 4.308l10-4.308v2.181l-9.603 4.134l-.397.17l-.395-.17L2 18.162z"></svg:path>`,
})
export class TdesignLayersIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[piconCablecarIcon],svg[picon-cablecar-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 1v2h2V1M0 1v1l8-1V0M4 4v2h1V4M1 4v2h6V4M0 8V3h8v5"></svg:path>`,
})
export class PiconCablecarIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}

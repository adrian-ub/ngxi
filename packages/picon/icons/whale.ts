import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[piconWhaleIcon],svg[picon-whale-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6 4V3h1v1M2 2L1 3L0 2v2l2 2c9 3 7-9 0-1"></svg:path>`,
})
export class PiconWhaleIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}

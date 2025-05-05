import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[piconBabyIcon],svg[picon-baby-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 2c3-3-5-3-2 0M0 1h1q3 4 6 0h1L6 3v1H2V3m0 2l1 1H2l1 2H2L0 6m5 0l1-1l2 1l-2 2H5l1-2"></svg:path>`,
})
export class PiconBabyIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}

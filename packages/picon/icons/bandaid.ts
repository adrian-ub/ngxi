import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[piconBandaidIcon],svg[picon-bandaid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 7h1V6M2 5H1v1m3-4L2 4l2 2l2-2m1-2L6 3h1M5 1v1l1-1M3 8H2L0 6V5l5-5h1l2 2v1"></svg:path>`,
})
export class PiconBandaidIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}

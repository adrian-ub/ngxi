import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[piconBikeIcon],svg[picon-bike-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 6L2 4l2-2l1 1h2v1H4l1 1v3H4m1-8l1 1l-1 1l-1-1M0 6.5L1.5 5L3 6.5L1.5 8m5-3L8 6.5L6.5 8L5 6.5"></svg:path>`,
})
export class PiconBikeIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}

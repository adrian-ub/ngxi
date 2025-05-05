import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[piconTrafficIcon],svg[picon-traffic-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m4 8l1-1l-1-1l-1 1m2-3L4 3L3 4l1 1m1-4L4 0L3 1l1 1M2 8L0 5h2L0 2h2L0 0h8L6 2h2L6 5h2L6 8"></svg:path>`,
})
export class PiconTrafficIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}

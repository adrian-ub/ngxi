import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[piconQuadcopterIcon],svg[picon-quadcopter-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7 2L6 4v1l1 3H6L5 5L4 6L3 5L2 8H1l1-3V4L1 2h1v1h4V2m2 0H5V1h3M3 2H0V1h3"></svg:path>`,
})
export class PiconQuadcopterIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}

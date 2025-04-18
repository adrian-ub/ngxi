import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[riScan2FillIcon],svg[ri-scan-2-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m4.257 5.671l2.137 2.137a7 7 0 1 0 1.414-1.414L5.67 4.257A9.96 9.96 0 0 1 12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12c0-2.401.846-4.605 2.257-6.329m3.571 3.572L12 13.414L13.414 12L9.243 7.828a5 5 0 1 1-1.414 1.414"></svg:path>`,
})
export class RiScan2FillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

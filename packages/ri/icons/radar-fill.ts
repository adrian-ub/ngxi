import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[riRadarFillIcon],svg[ri-radar-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m14.369 4.398l-3.485 6.035l1.732 1l3.485-6.035c4.169 2.772 6.305 7.08 4.56 10.102c-1.86 3.222-7.19 3.355-11.91.63C4.028 13.402 1.48 8.721 3.34 5.5c1.745-3.023 6.543-3.327 11.028-1.102m1.515-2.625l1.732 1l-1.5 2.598l-1.732-1zM6.732 20H17v2H5.018a1 1 0 0 1-1.015-.922a1 1 0 0 1 .131-.578l2.25-3.897l1.732 1z"></svg:path>`,
})
export class RiRadarFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

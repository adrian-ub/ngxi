import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineHotelOneStarIcon],svg[streamline-hotel-one-star-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M7 5.07v4.32M5.56 6.15h.36A1.08 1.08 0 0 0 7 5.07v0m1.44 4.32H5.56"></svg:path><svg:path d="M6.039 1.282a1.135 1.135 0 0 1 1.922 0l1.866 2.952l2.432.298a1.115 1.115 0 0 1 .721 1.836l-2.029 2.327l.654 3.22a1.12 1.12 0 0 1-.442 1.126a1.14 1.14 0 0 1-1.211.067L7 11.493l-2.952 1.615a1.14 1.14 0 0 1-1.211-.067a1.13 1.13 0 0 1-.442-1.125l.653-3.221L1.02 6.368a1.115 1.115 0 0 1 .72-1.836l2.433-.298L6.04 1.282Z"></svg:path></svg:g>`,
})
export class StreamlineHotelOneStarIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

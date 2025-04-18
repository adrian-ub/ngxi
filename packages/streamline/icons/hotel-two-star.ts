import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineHotelTwoStarIcon],svg[streamline-hotel-two-star-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M8.44 9.451H5.56v-.614c0-.429.254-.817.647-.99l1.603-.7a1.052 1.052 0 0 0-.422-2.016H6.64c-.47 0-.87.3-1.018.72"></svg:path><svg:path d="M6.039 1.282a1.135 1.135 0 0 1 1.922 0l1.866 2.952l2.432.298a1.115 1.115 0 0 1 .721 1.836l-2.028 2.327l.653 3.22a1.13 1.13 0 0 1-.442 1.126a1.14 1.14 0 0 1-1.211.067L7 11.493l-2.952 1.615a1.14 1.14 0 0 1-1.211-.067a1.13 1.13 0 0 1-.442-1.125l.653-3.221L1.02 6.368a1.115 1.115 0 0 1 .72-1.836l2.433-.298L6.04 1.282Z"></svg:path></svg:g>`,
})
export class StreamlineHotelTwoStarIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkOutlineHeartRateIcon],svg[icon-park-outline-heart-rate-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path d="M31.879 37c-2.826 2.074-5.655 3.587-7.879 4.326C17 39 4 29 4 18C4 11.925 8.925 7 15 7c3.72 0 7.01 1.847 9 4.674A10.99 10.99 0 0 1 33 7c6.075 0 11 4.925 11 11c0 1.747-.328 3.468-.907 5.137"></svg:path><svg:path d="M27 29h4l3-4l3 8l2.962-4H44"></svg:path></svg:g>`,
})
export class IconParkOutlineHeartRateIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

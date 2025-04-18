import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineOneFingerDragVerticalSolidIcon],svg[streamline-one-finger-drag-vertical-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M2.354.146a.5.5 0 0 0-.708 0l-1.5 1.5A.5.5 0 0 0 .5 2.5h.75v2H.5a.5.5 0 0 0-.354.854l1.5 1.5a.5.5 0 0 0 .708 0l1.5-1.5A.5.5 0 0 0 3.5 4.5h-.75v-2h.75a.5.5 0 0 0 .354-.854zm3.59 9.55V3.76a1.26 1.26 0 0 1 2.52 0v4.577h2.463A2.573 2.573 0 0 1 13.5 10.91V13a1 1 0 0 1-1 1H5.893a1 1 0 0 1-.824-.433l-.764-1.11A1.715 1.715 0 0 1 5.4 9.797z" clip-rule="evenodd"></svg:path>`,
})
export class StreamlineOneFingerDragVerticalSolidIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

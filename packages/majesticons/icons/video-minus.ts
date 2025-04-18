import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[majesticonsVideoMinusIcon],svg[majesticons-video-minus-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M2 8a3 3 0 0 1 3-3h10a3 3 0 0 1 3 3v1.586l2.293-2.293A1 1 0 0 1 22 8v8a1 1 0 0 1-1.707.707L18 14.414V16a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3zm5 3a1 1 0 1 0 0 2h6a1 1 0 1 0 0-2z" clip-rule="evenodd"></svg:path>`,
})
export class MajesticonsVideoMinusIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

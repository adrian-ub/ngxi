import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tdesignStatueOfJesusFilledIcon],svg[tdesign-statue-of-jesus-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10 1h4v4h-4zM2 6h20v2.66l-7 3V17h.78l1.5 6H6.72l1.5-6H9v-5.34l-7-3zm7 3.483V8H5.539zM11 8v2.586l2 2V8zm4 0v1.483L18.461 8zm-2 7.414l-2-2V17h2z"></svg:path>`,
})
export class TdesignStatueOfJesusFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

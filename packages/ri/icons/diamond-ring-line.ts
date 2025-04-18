import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[riDiamondRingLineIcon],svg[ri-diamond-ring-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9.465 1L7.69 3.661l1.865 1.696a8.5 8.5 0 1 0 4.889 0l1.864-1.696L14.535 1zM12 7a6.5 6.5 0 1 1 0 13a6.5 6.5 0 0 1 0-13m-1.69-3.661L10.534 3h2.93l.226.339L12 4.876z"></svg:path>`,
})
export class RiDiamondRingLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

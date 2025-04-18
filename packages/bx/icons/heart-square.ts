import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[bxHeartSquareIcon],svg[bx-heart-square-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m11.998 17l4.186-4.186a2.745 2.745 0 0 0 0-3.907a2.746 2.746 0 0 0-3.907 0l-.278.279l-.279-.279a2.746 2.746 0 0 0-3.907 0a2.746 2.746 0 0 0 0 3.907z"></svg:path><svg:path fill="currentColor" d="M21 4a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1v16a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1zm-2 15H5V5h14z"></svg:path>`,
})
export class BxHeartSquareIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

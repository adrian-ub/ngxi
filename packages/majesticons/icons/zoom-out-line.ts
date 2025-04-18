import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[majesticonsZoomOutLineIcon],svg[majesticons-zoom-out-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M4 11a7 7 0 1 1 14 0a7 7 0 0 1-14 0zm7-9a9 9 0 1 0 5.618 16.032l3.675 3.675a1 1 0 0 0 1.414-1.414l-3.675-3.675A9 9 0 0 0 11 2zm-3 8a1 1 0 1 0 0 2h6a1 1 0 1 0 0-2H8z"></svg:path></svg:g>`,
})
export class MajesticonsZoomOutLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

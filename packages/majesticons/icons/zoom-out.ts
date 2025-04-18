import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[majesticonsZoomOutIcon],svg[majesticons-zoom-out-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill-rule="evenodd" clip-rule="evenodd" d="M2 11a9 9 0 1 1 16.032 5.618l3.675 3.675a1 1 0 0 1-1.414 1.414l-3.675-3.675A9 9 0 0 1 2 11zm6-1a1 1 0 1 0 0 2h6a1 1 0 1 0 0-2H8z" fill="currentColor"></svg:path></svg:g>`,
})
export class MajesticonsZoomOutIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

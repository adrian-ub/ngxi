import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[majesticonsTrendingUpIcon],svg[majesticons-trending-up-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill-rule="evenodd" clip-rule="evenodd" d="M3.707 17.707a1 1 0 0 1-1.414-1.414l6-6a1 1 0 0 1 1.414 0L13 13.586l3.086-3.086l-2.793-2.793A1 1 0 0 1 14 6h7a1 1 0 0 1 1 1v7a1 1 0 0 1-1.707.707L17.5 11.914l-3.793 3.793a1 1 0 0 1-1.414 0L9 12.414l-5.293 5.293z" fill="currentColor"></svg:path></svg:g>`,
})
export class MajesticonsTrendingUpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[majesticonsFastForwardIcon],svg[majesticons-fast-forward-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill-rule="evenodd" clip-rule="evenodd" d="M21.067 10.8l-6.667-5C13.411 5.058 12 5.764 12 7v3L6.4 5.8C5.411 5.058 4 5.764 4 7v10c0 1.236 1.411 1.942 2.4 1.2L12 14v3c0 1.236 1.411 1.942 2.4 1.2l6.667-5c.8-.6.8-1.8 0-2.4z" fill="currentColor"></svg:path></svg:g>`,
})
export class MajesticonsFastForwardIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

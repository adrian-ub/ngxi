import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[humbleiconsZoomInIcon],svg[humbleicons-zoom-in-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="2"><svg:path d="M16 10a6 6 0 1 1-12 0a6 6 0 0 1 12 0Z"></svg:path><svg:path stroke-linecap="round" d="m20 20l-5-5m-7.5-5H10m0 0h2.5M10 10v2.5m0-2.5V7.5"></svg:path></svg:g>`,
})
export class HumbleiconsZoomInIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
